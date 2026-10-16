"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  ArrowLeftRight,
  Plus,
  Building2,
  GraduationCap,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// Explanatory schema of the German dual system: two tracks (company + school) that
// alternate throughout the training, then converge into exams and the qualification.
type Node = { label: string; desc: string };
export function DualSystemDiagram({
  entreprise,
  berufsschule,
  alternance,
  examens,
  qualification,
}: {
  entreprise: Node;
  berufsschule: Node;
  alternance: string;
  examens: Node;
  qualification: Node;
}) {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.5, delay, ease: EASE },
  });

  const lane = (node: Node, Icon: typeof Building2) => (
    <div className="flex-1 rounded-2xl border border-brand-grid bg-brand-white p-5 text-left">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold-text">
        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h4 className="mt-4 font-serif text-lg text-brand-black">{node.label}</h4>
      <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed">{node.desc}</p>
    </div>
  );

  const connector = (
    <div aria-hidden="true" className="flex flex-col items-center py-3">
      <span className="h-6 w-px bg-brand-gold/40" />
      <ArrowDown size={16} className="text-brand-gold/70" />
    </div>
  );

  const outcome = (node: Node, Icon: typeof Building2, gold?: boolean) => (
    <div
      className={`mx-auto max-w-md rounded-2xl border p-5 text-center ${
        gold ? "border-brand-gold/60 bg-brand-gold/[0.06]" : "border-brand-grid bg-brand-white"
      }`}
    >
      <span
        className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl ${
          gold ? "bg-brand-gold text-brand-black" : "bg-brand-gold/10 text-brand-gold-text"
        }`}
      >
        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h4 className="mt-3 font-serif text-lg text-brand-black">{node.label}</h4>
      <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed">{node.desc}</p>
    </div>
  );

  return (
    <div className="mt-6">
      {/* Two alternating tracks */}
      <motion.div {...rise(0)} className="flex flex-col items-stretch gap-4 sm:flex-row">
        {lane(entreprise, Building2)}
        <div className="flex items-center justify-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/50 bg-brand-white text-brand-gold-text">
            <ArrowLeftRight size={18} aria-hidden="true" className="rotate-90 sm:rotate-0" />
          </span>
        </div>
        {lane(berufsschule, GraduationCap)}
      </motion.div>

      <motion.p
        {...rise(0.12)}
        className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-medium text-brand-ink-secondary"
      >
        <ArrowLeftRight size={15} aria-hidden="true" className="shrink-0 text-brand-gold/70" />
        {alternance}
      </motion.p>

      <motion.div {...rise(0.2)}>
        {connector}
        {outcome(examens, ClipboardCheck)}
        {connector}
        {outcome(qualification, BadgeCheck, true)}
      </motion.div>
    </div>
  );
}

// Elegant accordion for the 6 questions: one answer open at a time, height animated.
export function ConditionsAccordion({
  items,
}: {
  items: { num: string; title: string; content: ReactNode }[];
}) {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();
  return (
    <div className="space-y-4">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border bg-brand-white transition-colors duration-200 ${
              isOpen ? "border-brand-gold/50" : "border-brand-grid"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-6 py-5 text-left sm:px-8"
            >
              <span className="w-8 shrink-0 font-serif text-lg text-brand-gold-text/60">{it.num}</span>
              <span className="flex-1 font-serif text-lg text-brand-black sm:text-xl">{it.title}</span>
              <span
                className={`shrink-0 text-brand-gold-text transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <Plus size={22} aria-hidden="true" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-7 sm:pl-20 sm:pr-8">{it.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// Generic scroll reveal (fade + rise) powered by framer-motion.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// The dual-system path, revealed step by step with connectors that fade in.
export function DualFlow({ steps }: { steps: string[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
      {steps.map((s, i) => (
        <span key={s} className="flex items-center gap-3">
          {i > 0 && (
            <motion.span
              initial={reduce ? false : { opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.15 - 0.05, ease: EASE }}
            >
              <ArrowRight size={16} aria-hidden="true" className="text-brand-gold/60" />
            </motion.span>
          )}
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15, ease: EASE }}
            className="rounded-full border border-brand-gold/40 bg-brand-white px-5 py-2 font-serif text-brand-black"
          >
            {s}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

// The income/costs cards, with a gold spotlight that follows the pointer on hover
// (pattern adapted from a 21st.dev spotlight-cards block) plus a reveal + subtle lift.
export function SpotlightCards({ items }: { items: { label: string; text: string }[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {items.map((r, i) => (
        <motion.div
          key={r.label}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
          whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.25, ease: EASE } }}
          onPointerMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
            e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
          }}
          className="group relative overflow-hidden rounded-2xl border border-brand-grid bg-brand-white p-6 shadow-[0_1px_2px_rgba(17,17,17,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_44px_-26px_rgba(17,17,17,0.4)]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
            style={{
              background:
                "radial-gradient(220px circle at var(--mx) var(--my), rgba(195,154,62,0.16), transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <h3 className="font-serif text-lg text-brand-gold-text">{r.label}</h3>
            <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{r.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
