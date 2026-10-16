"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@i18n/navigation";
import { tr } from "@/lib/localized";
import { GERMAN_TEST as T } from "@/lib/german-test";
import type { Locale } from "@i18n/routing";

const GOLD_BTN =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";

const N = T.questions.length;
const PER_QUESTION = 30; // seconds
const identity = (n: number) => Array.from({ length: n }, (_, i) => i);

function shuffle<A>(arr: A[]): A[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function GermanLevelTest({ locale }: { locale: Locale }) {
  const [started, setStarted] = useState(false);
  const [order, setOrder] = useState<number[]>(() => identity(N));
  const [optOrders, setOptOrders] = useState<number[][]>(() => T.questions.map((q) => identity(q.options.length)));
  const [answers, setAnswers] = useState<(number | null)[]>(Array(N).fill(null));
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(PER_QUESTION);
  const [submitted, setSubmitted] = useState(false);

  // Latest timeLeft for the interval (ref write only — no setState in effect).
  const timeRef = useRef(PER_QUESTION);
  useEffect(() => {
    timeRef.current = timeLeft;
  }, [timeLeft]);

  const advance = () => {
    if (current < N - 1) {
      setCurrent((c) => c + 1);
      setTimeLeft(PER_QUESTION);
    } else {
      setSubmitted(true);
    }
  };

  // One 30s countdown per question; auto-advances at zero.
  useEffect(() => {
    if (!started || submitted) return;
    const id = setInterval(() => {
      if (timeRef.current <= 1) advance();
      else setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, submitted, current]);

  const randomize = () => {
    setOrder(shuffle(identity(N)));
    setOptOrders(T.questions.map((q) => shuffle(identity(q.options.length))));
    setAnswers(Array(N).fill(null));
  };

  const start = () => {
    randomize();
    setCurrent(0);
    setTimeLeft(PER_QUESTION);
    setSubmitted(false);
    setStarted(true);
  };

  const correct = answers.reduce<number>((n, a, i) => (a === T.questions[i].answer ? n + 1 : n), 0);
  const level = [...T.levels].reverse().find((l) => correct >= l.min) ?? T.levels[0];

  // Start screen
  if (!started) {
    return (
      <div className="flex justify-center">
        <button type="button" onClick={start} className={GOLD_BTN}>
          {tr(T.startLabel, locale)}
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    );
  }

  // Result screen
  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-brand-grid bg-brand-white p-8 text-center sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold-text">
          {tr(T.resultKicker, locale)}
        </p>
        <p className="mt-3 font-serif text-5xl text-brand-gold-text">{level.code}</p>
        <h2 className="mt-2 font-serif text-2xl text-brand-black">{tr(level.label, locale)}</h2>
        <p className="mt-3 text-brand-ink-secondary leading-relaxed">{tr(level.desc, locale)}</p>
        <p className="mt-4 text-sm font-medium text-brand-black">
          {correct} / {N} {tr(T.scoreLabel, locale)}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={T.ctaCoursHref as "/cours-allemand"} className={GOLD_BTN}>
            {tr(T.ctaCours, locale)}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link href="/contact" className={GOLD_BTN}>
            {tr(T.ctaContact, locale)}
          </Link>
        </div>
        <button type="button" onClick={start} className="press mt-6 text-sm font-medium text-brand-gold-text hover:underline">
          {tr(T.retakeLabel, locale)}
        </button>
        <p className="mt-6 text-xs text-brand-ink-muted">{tr(T.disclaimer, locale)}</p>
      </div>
    );
  }

  // Question screen (one at a time, 30s each)
  const qi = order[current];
  const q = T.questions[qi];
  const isLast = current === N - 1;
  const low = timeLeft <= 5;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center justify-between text-sm">
        <span className="font-serif font-semibold text-brand-gold-text">
          {tr(T.questionLabel, locale)} {current + 1} / {N}
        </span>
        <span className={`font-mono font-semibold tabular-nums ${low ? "text-brand-gold-text" : "text-brand-ink-secondary"}`}>
          {timeLeft}s
        </span>
      </div>
      {/* countdown bar */}
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-brand-grid">
        <div
          className="h-full rounded-full bg-brand-gold transition-[width] duration-1000 ease-linear"
          style={{ width: `${(timeLeft / PER_QUESTION) * 100}%` }}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-brand-grid bg-brand-white p-6 sm:p-8">
        <p className="font-serif text-xl text-brand-black">{q.prompt}</p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {optOrders[qi].map((oi) => {
            const sel = answers[qi] === oi;
            return (
              <button
                key={oi}
                type="button"
                onClick={() =>
                  setAnswers((prev) => {
                    const next = [...prev];
                    next[qi] = oi;
                    return next;
                  })
                }
                className={`press rounded-md border px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                  sel
                    ? "border-brand-gold bg-brand-gold text-brand-black"
                    : "border-brand-grid bg-brand-white text-brand-black hover:border-brand-gold/60"
                }`}
              >
                {q.options[oi]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button type="button" onClick={advance} className={GOLD_BTN}>
          {isLast ? tr(T.submitLabel, locale) : tr(T.nextLabel, locale)}
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
