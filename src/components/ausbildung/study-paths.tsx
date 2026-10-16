"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Award, Target, GraduationCap, type LucideIcon } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// One clear icon per family: a medal for further qualifications (Meister/Techniker),
// a target for specialisation, a graduation cap for university.
const ICONS: LucideIcon[] = [Award, Target, GraduationCap];

type Path = { label: string; text: string };

// A simple, child-readable schema: one starting point ("after your Ausbildung")
// that forks into three illustrated paths.
export function StudyPaths({ anchor, paths }: { anchor: string; paths: Path[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="mt-10">
      {/* Starting point */}
      <div className="flex justify-center">
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="rounded-full border border-brand-gold/50 bg-brand-white px-5 py-2 font-serif text-brand-black"
        >
          {anchor}
        </motion.span>
      </div>

      {/* Fork: a stem that splits into three drops (desktop) */}
      <svg
        viewBox="0 0 100 44"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="hidden h-11 w-full text-brand-gold/50 sm:block"
      >
        <g stroke="currentColor" strokeWidth={1.5} vectorEffect="non-scaling-stroke" fill="none">
          <line x1="50" y1="0" x2="50" y2="18" />
          <line x1="16.6" y1="18" x2="83.4" y2="18" />
          <line x1="16.6" y1="18" x2="16.6" y2="44" />
          <line x1="50" y1="18" x2="50" y2="44" />
          <line x1="83.4" y1="18" x2="83.4" y2="44" />
        </g>
      </svg>

      {/* Fork on mobile: a single arrow down */}
      <div className="flex justify-center py-3 sm:hidden">
        <ArrowDown size={22} aria-hidden="true" className="text-brand-gold/60" />
      </div>

      {/* The three paths */}
      <div className="grid gap-6 sm:grid-cols-3">
        {paths.map((p, i) => {
          const Icon = ICONS[i] ?? Target;
          return (
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="lift-on-hover rounded-2xl border border-brand-grid bg-brand-white p-6 text-center"
            >
              <motion.span
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold-text"
                animate={reduce ? undefined : { y: [0, -5, 0] }}
                transition={
                  reduce ? undefined : { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }
                }
              >
                <Icon size={30} strokeWidth={1.6} aria-hidden="true" />
              </motion.span>
              <h3 className="mt-4 font-serif text-lg text-brand-black leading-snug">{p.label}</h3>
              <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{p.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
