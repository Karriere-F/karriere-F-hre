"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

// A refined, premium step card for the Ausbildung journey. Visual language adapted
// from a 21st.dev "how it works" block (rounded panel, soft shadow, icon chip,
// corner numeral) and re-skinned to the Karriere Fähre identity. framer-motion
// gives each panel a calm reveal as it enters the viewport, plus a subtle lift on
// hover. Reduced-motion users get the static, fully-visible card.
export function StepPanel({
  num,
  kicker,
  title,
  titleClassName = "text-balance",
  intro,
  introClassName = "",
  note,
  cta,
  aside,
  footer,
  ctaBottom = false,
  gridCols = "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]",
}: {
  num: string;
  kicker: string;
  title: ReactNode;
  /** Wrapping utility for the title (default "text-balance"). */
  titleClassName?: string;
  intro?: string;
  /** Extra classes for the intro paragraph (e.g. "text-justify"). */
  introClassName?: string;
  /** Optional secondary paragraph under the intro (smaller, muted). */
  note?: string;
  cta?: ReactNode;
  aside?: ReactNode;
  /** Full-width content rendered below the header/aside area (e.g. a single-column list). */
  footer?: ReactNode;
  /** Push the CTA to the bottom of the text column (aligns it with a taller aside). */
  ctaBottom?: boolean;
  /** Desktop column template for the text/aside split (Tailwind grid-cols class). */
  gridCols?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
      className="rounded-2xl border border-brand-grid bg-brand-white p-6 shadow-[0_1px_2px_rgba(17,17,17,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_44px_-26px_rgba(17,17,17,0.4)] sm:p-8 lg:p-10"
    >
      <div className={`grid gap-8 lg:gap-14 ${aside ? gridCols : ""}`}>
        <div className={`min-w-0 ${ctaBottom ? "flex flex-col" : ""}`}>
          <p className="flex items-baseline gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            <span className="font-serif text-lg leading-none">{num}</span>
            <span>{kicker}</span>
          </p>
          <h3 className={`mt-2 font-serif text-2xl sm:text-3xl text-brand-black leading-snug ${titleClassName}`}>
            {title}
          </h3>
          {intro && (
            <p className={`mt-4 text-brand-ink-secondary leading-relaxed ${introClassName}`}>{intro}</p>
          )}
          {note && <p className="mt-4 text-sm text-brand-ink-secondary leading-relaxed">{note}</p>}
          {cta && (ctaBottom ? <div className="mt-auto lg:pt-4">{cta}</div> : cta)}
        </div>
        {aside && <div className="min-w-0">{aside}</div>}
      </div>
      {footer && <div className="mt-8">{footer}</div>}
    </motion.li>
  );
}
