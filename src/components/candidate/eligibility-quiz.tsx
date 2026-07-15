"use client";

import { useState } from "react";
import { Link } from "../../../i18n/navigation";

type ResultKey = "fastTrack" | "examPrep" | "b1ToB2" | "fullTraining";

export function EligibilityQuiz({
  eyebrow,
  title,
  subtitle,
  q1,
  q2,
  q3,
  results,
  ctaLabel,
  resetLabel,
  noteText,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  q1: { title: string; options: { value: string; label: string }[] };
  q2: { title: string; options: { value: string; label: string }[] };
  q3: { title: string; options: { value: string; label: string }[] };
  results: Record<ResultKey, { badge: string; title: string; text: string }>;
  ctaLabel: string;
  resetLabel: string;
  noteText: string;
}) {
  const [level, setLevel] = useState<string | null>(null);
  const [cert, setCert] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);

  const resultKey: ResultKey | null =
    level === null || cert === null || goal === null
      ? null
      : cert === "b2valid"
        ? "fastTrack"
        : cert === "b2expired" || level === "b2plus"
          ? "examPrep"
          : level === "b1"
            ? "b1ToB2"
            : "fullTraining";

  const result = resultKey ? results[resultKey] : null;

  const reset = () => {
    setLevel(null);
    setCert(null);
    setGoal(null);
  };

  return (
    <div className="mt-10 rounded-2xl bg-brand-black text-brand-white p-6 sm:p-8 shadow-lg">
      <div className="text-xs uppercase tracking-wide text-brand-gold-light font-semibold mb-1">
        {eyebrow}
      </div>
      <h3 className="text-xl font-serif mb-1">{title}</h3>
      <p className="text-brand-white/70 text-sm mb-6">{subtitle}</p>

      <div className="space-y-6">
        <QuizQuestion number={1} title={q1.title} options={q1.options} value={level} onChange={setLevel} />
        <QuizQuestion number={2} title={q2.title} options={q2.options} value={cert} onChange={setCert} />
        <QuizQuestion number={3} title={q3.title} options={q3.options} value={goal} onChange={setGoal} />
      </div>

      {result && (
        <div className="mt-6 pt-6 border-t border-brand-gold/30 animate-fade-up">
          <span className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-brand-gold text-brand-black mb-3">
            {result.badge}
          </span>
          <h4 className="text-lg font-serif mb-2">{result.title}</h4>
          <p className="text-brand-white/80 text-sm mb-5 max-w-xl">{result.text}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/candidate/signup"
              className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
            >
              {ctaLabel}
            </Link>
            <button
              type="button"
              onClick={reset}
              className="press rounded-full border border-brand-white/30 px-5 py-2.5 text-sm text-brand-white/80 hover:border-brand-gold-light hover:text-brand-gold-light transition-colors duration-150"
            >
              {resetLabel}
            </button>
          </div>
          <p className="text-brand-white/40 text-xs mt-4">{noteText}</p>
        </div>
      )}
    </div>
  );
}

function QuizQuestion({
  number,
  title,
  options,
  value,
  onChange,
}: {
  number: number;
  title: string;
  options: { value: string; label: string }[];
  value: string | null;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="font-serif text-base mb-3 flex items-center gap-2.5">
        <span className="shrink-0 h-6 w-6 rounded-full bg-brand-gold text-brand-black text-xs font-bold flex items-center justify-center">
          {number}
        </span>
        {title}
      </p>
      <div className="flex flex-wrap gap-2 pl-8">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`press rounded-lg border px-4 py-2.5 text-sm transition-colors duration-150 ${
              value === opt.value
                ? "bg-brand-gold text-brand-black border-brand-gold font-medium"
                : "bg-white/5 border-brand-gold/30 text-brand-white/85 hover:border-brand-gold"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
