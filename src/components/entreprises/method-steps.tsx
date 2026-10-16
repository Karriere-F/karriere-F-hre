"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type MethodStep = { title: string; body: string };

export function MethodSteps({ steps }: { steps: MethodStep[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 5000);
    return () => clearInterval(id);
  }, [paused, reduce, steps.length]);

  return (
    <div
      className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Liste des étapes */}
      <ol className="flex flex-col gap-2">
        {steps.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.title}>
              <button
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-current={on ? "step" : undefined}
                className={`flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition-colors duration-300 ${
                  on ? "bg-brand-white shadow-[0_6px_24px_rgba(17,17,17,0.06)]" : "hover:bg-brand-white/60"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-serif text-sm font-bold transition-colors duration-300 ${
                    on
                      ? "border-brand-gold bg-brand-gold text-brand-black"
                      : "border-brand-gold/40 text-brand-gold-text"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-serif text-base leading-snug transition-colors duration-300 ${
                    on ? "text-brand-black" : "text-brand-ink-secondary"
                  }`}
                >
                  {s.title}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Panneau animé */}
      <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-2xl bg-brand-black p-8 text-brand-white shadow-[0_12px_40px_rgba(17,17,17,0.14)] sm:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-serif text-6xl font-bold text-brand-gold-light sm:text-7xl">
              {String(active + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">{steps[active].title}</h3>
            <p className="mt-4 text-brand-white/80 leading-relaxed">{steps[active].body}</p>
          </motion.div>
        </AnimatePresence>

        {/* Barre de progression */}
        <div className="mt-8 flex gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Étape ${i + 1}`}
              onClick={() => setActive(i)}
              className="h-1 flex-1 overflow-hidden rounded-full bg-brand-white/15"
            >
              <motion.span
                className="block h-full rounded-full bg-brand-gold"
                initial={false}
                animate={{ width: i <= active ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
