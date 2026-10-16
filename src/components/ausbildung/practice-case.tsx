"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Sparkles, Users, GraduationCap, type LucideIcon } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// The four stages are the same shape in every case (qualified -> specialise ->
// responsibility -> studies), so one icon per position reads across both cases.
const STEP_ICONS: LucideIcon[] = [BadgeCheck, Sparkles, Users, GraduationCap];

type Step = { num: string; label: string; sublabel: string; body: string };

// A case study made visual: an animated icon timeline for the steps, then a
// simple rising-staircase schema that shows the career climbing, level by level.
export function PracticeCase({ steps, climb }: { steps: Step[]; climb: string[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="mt-10">
      {/* Steps as an animated icon timeline */}
      <ol className="space-y-6">
        {steps.map((s, i) => {
          const Icon = STEP_ICONS[i] ?? BadgeCheck;
          const isLast = i === steps.length - 1;
          return (
            <motion.li
              key={i}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="flex gap-4 sm:gap-5"
            >
              <div className="flex flex-col items-center">
                <motion.span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold-text"
                  animate={reduce ? undefined : { y: [0, -4, 0] }}
                  transition={
                    reduce
                      ? undefined
                      : { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }
                  }
                >
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </motion.span>
                {!isLast && <span aria-hidden="true" className="mt-1 w-px flex-1 bg-brand-gold/30" />}
              </div>

              <div className="pb-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-sm font-semibold text-brand-gold-text/60">{s.num}</span>
                  <h3 className="font-serif text-lg text-brand-black leading-snug">{s.label}</h3>
                </div>
                <p className="text-sm font-medium text-brand-gold-text">{s.sublabel}</p>
                <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed">{s.body}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>

      {/* Simple ascending schema: each level a little higher than the last */}
      <div className="mt-10 rounded-2xl border border-brand-grid bg-brand-white/60 p-5 sm:p-6">
        <div className="flex items-end justify-between gap-1.5 sm:gap-3">
          {climb.map((label, i) => {
            const h = 34 + (i * 66) / Math.max(climb.length - 1, 1); // 34% -> 100%
            return (
              <div key={i} className="flex flex-1 flex-col items-center">
                <div className="flex h-24 w-full items-end sm:h-28">
                  <motion.div
                    initial={reduce ? false : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                    style={{ height: `${h}%`, transformOrigin: "bottom" }}
                    className="w-full rounded-t-md bg-gradient-to-t from-brand-gold/20 to-brand-gold/60"
                  />
                </div>
                <span className="mt-2 text-center text-[11px] leading-tight text-brand-ink-secondary">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
