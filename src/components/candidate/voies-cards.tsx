"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, CreditCard, Check, type LucideIcon } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// One icon per path: skilled employment, Ausbildung, Chancenkarte.
const ICONS: LucideIcon[] = [Briefcase, GraduationCap, CreditCard];

type Voie = { title: string; sub: string; body: string; tags: string[]; flag?: string; reco?: boolean };

// The three legal paths, as animated cards: reveal on scroll, lift on hover, and a
// gold spotlight that follows the pointer. The recommended path is highlighted.
export function VoiesCards({ voies }: { voies: Voie[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="mb-10 grid gap-6 sm:grid-cols-3">
      {voies.map((v, i) => {
        const Icon = ICONS[i] ?? Briefcase;
        return (
          <motion.div
            key={v.title}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.25, ease: EASE } }}
            onPointerMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
            }}
            className={`group relative overflow-hidden rounded-2xl border p-6 transition-shadow duration-300 sm:p-7 ${
              v.reco
                ? "border-brand-gold bg-brand-gold/[0.05] shadow-[0_18px_44px_-24px_rgba(195,154,62,0.5)]"
                : "border-brand-grid bg-brand-white hover:shadow-[0_20px_44px_-26px_rgba(17,17,17,0.4)]"
            }`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
              style={{
                background:
                  "radial-gradient(240px circle at var(--mx) var(--my), rgba(195,154,62,0.14), transparent 70%)",
              }}
            />
            {v.flag && (
              <span className="absolute right-5 top-5 z-10 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold text-brand-black">
                {v.flag}
              </span>
            )}
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold-text">
                  <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl text-brand-black leading-snug">{v.title}</h3>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-gold-text">{v.sub}</p>
              <p className="mt-3 text-sm text-brand-ink-secondary leading-relaxed">{v.body}</p>
              <ul className="mt-4 space-y-2">
                {v.tags.map((tag) => (
                  <li key={tag} className="flex items-start gap-2.5 text-sm text-brand-ink-secondary">
                    <Check size={16} strokeWidth={2.25} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold-text" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
