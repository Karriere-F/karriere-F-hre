"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

type Step = { num: string; title: string; body: string };

// The 360° support journey as a vertical timeline: a continuous gold spine with
// numbered markers, each step revealed on scroll.
export function AccompagnementTimeline({ steps }: { steps: Step[] }) {
  const reduce = useReducedMotion();

  return (
    <ol className="relative mx-auto max-w-3xl">
      <span aria-hidden="true" className="absolute left-5 top-4 bottom-4 w-px -translate-x-1/2 bg-brand-gold/30" />
      {steps.map((s, i) => (
        <motion.li
          key={s.num}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
          className="relative flex gap-5 pb-8 last:pb-0"
        >
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-white font-serif text-sm font-bold text-brand-gold-text">
            {s.num}
          </span>
          <div className="pt-1">
            <h4 className="font-serif text-lg text-brand-black leading-snug">{s.title}</h4>
            <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed">{s.body}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
