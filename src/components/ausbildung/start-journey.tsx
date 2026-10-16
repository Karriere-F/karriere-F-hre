"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  BookOpen,
  BadgeCheck,
  Briefcase,
  Target,
  Users,
  Award,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// Base path: learn -> qualified -> experience. Branches: specialise, responsibility,
// upskill, study. One clear icon each so the schema reads without reading.
const STEP_ICONS: LucideIcon[] = [BookOpen, BadgeCheck, Briefcase];
const BRANCH_ICONS: LucideIcon[] = [Target, Users, Award, GraduationCap];

type Item = { label: string; desc: string };

export function StartJourney({
  baseLabel,
  steps,
  branchLabel,
  branches,
}: {
  baseLabel: string;
  steps: Item[];
  branchLabel: string;
  branches: Item[];
}) {
  const reduce = useReducedMotion();
  const floatAnim = reduce ? undefined : { y: [0, -5, 0] };
  const floatTrans = (i: number) =>
    reduce ? undefined : { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: i * 0.4 };

  return (
    <div className="mt-12">
      <p className="text-xs uppercase tracking-widest text-brand-gold-text">{baseLabel}</p>

      {/* Base path: three illustrated steps, connected by arrows */}
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start">
        {steps.map((s, i) => {
          const Icon = STEP_ICONS[i] ?? BookOpen;
          return (
            <Fragment key={i}>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                className="flex flex-1 flex-col items-center text-center"
              >
                <div className="relative">
                  <motion.span
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold-text"
                    animate={floatAnim}
                    transition={floatTrans(i)}
                  >
                    <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
                  </motion.span>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold font-serif text-xs font-bold text-brand-black">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-base text-brand-black leading-snug">{s.label}</h3>
                <p className="mt-1 text-sm text-brand-ink-secondary leading-relaxed">{s.desc}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center sm:pt-6">
                  <ArrowRight size={20} aria-hidden="true" className="rotate-90 text-brand-gold/60 sm:rotate-0" />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>

      {/* Fork label */}
      <div className="mt-8 flex flex-col items-center text-center">
        <ArrowDown size={22} aria-hidden="true" className="text-brand-gold/60" />
        <p className="mt-2 font-serif text-lg text-brand-black">{branchLabel}</p>
      </div>

      {/* Fork connector to the four branches (aligns with the 4-column grid) */}
      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="mt-2 hidden h-10 w-full text-brand-gold/50 lg:block"
      >
        <g stroke="currentColor" strokeWidth={1.5} vectorEffect="non-scaling-stroke" fill="none">
          <line x1="50" y1="0" x2="50" y2="16" />
          <line x1="12.5" y1="16" x2="87.5" y2="16" />
          <line x1="12.5" y1="16" x2="12.5" y2="40" />
          <line x1="37.5" y1="16" x2="37.5" y2="40" />
          <line x1="62.5" y1="16" x2="62.5" y2="40" />
          <line x1="87.5" y1="16" x2="87.5" y2="40" />
        </g>
      </svg>

      {/* The four branches */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {branches.map((b, i) => {
          const Icon = BRANCH_ICONS[i] ?? Target;
          return (
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="lift-on-hover rounded-2xl border border-brand-gold/40 bg-brand-gold/[0.06] p-5 text-center"
            >
              <motion.span
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-text"
                animate={floatAnim}
                transition={floatTrans(i)}
              >
                <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
              </motion.span>
              <h3 className="mt-3 font-serif text-base text-brand-gold-text leading-snug">{b.label}</h3>
              <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed">{b.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
