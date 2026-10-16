"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Milestone = { label: string; text: string };
type Case = { label: string; steps: string[] };

// "After the Ausbildung" reimagined as a rising curve: the Ausbildung is the start
// of an ascending path, with each next step sitting higher along a gold arc. Below,
// two illustrative cases (Pflege / technique) show where the path can lead. Curve is
// desktop-only; on small screens it degrades to a clean vertical list. framer-motion
// reveals the milestones in sequence as the section scrolls in.
export function AusbildungCurve({
  title,
  milestones,
  casesTitle,
  cases,
  disclaimer,
}: {
  title: string;
  milestones: Milestone[];
  casesTitle: string;
  cases: Case[];
  disclaimer: string;
}) {
  const reduce = useReducedMotion();

  // Left / top anchor per milestone along the ascending curve (desktop overlay).
  const anchors = [
    { left: "0%", top: "72%" },
    { left: "25%", top: "54%" },
    { left: "50%", top: "37%" },
    { left: "73%", top: "20%" },
    { left: "90%", top: "3%" },
  ];

  return (
    <section className="bg-brand-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="max-w-2xl font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
          {title}
        </h2>

        {/* Desktop: the rising curve */}
        <div className="relative mt-14 hidden h-[360px] lg:block">
          <svg
            viewBox="0 0 1000 360"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              d="M20,300 C 220,300 240,210 470,170 C 640,140 720,90 980,26"
              fill="none"
              stroke="var(--brand-gold)"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="1 7"
            />
          </svg>

          {milestones.map((m, i) => {
            const a = anchors[i] ?? anchors[anchors.length - 1];
            const isOrigin = i === 0;
            return (
              <motion.div
                key={m.label}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-44"
                style={{ left: a.left, top: a.top }}
              >
                <span
                  className={`flex h-3 w-3 items-center justify-center rounded-full ${
                    isOrigin ? "bg-brand-gold" : "border-2 border-brand-gold bg-brand-white"
                  }`}
                />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold-text">
                  {isOrigin ? "Ausbildung" : String(i).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-serif text-lg text-brand-black">{m.label}</h3>
                <p className="mt-1 text-sm text-brand-ink-secondary leading-relaxed">{m.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical list */}
        <ol className="mt-10 space-y-6 lg:hidden">
          {milestones.map((m, i) => (
            <li key={m.label} className="flex gap-4">
              <span
                className={`mt-1.5 flex h-3 w-3 shrink-0 items-center justify-center rounded-full ${
                  i === 0 ? "bg-brand-gold" : "border-2 border-brand-gold bg-brand-white"
                }`}
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold-text">
                  {i === 0 ? "Ausbildung" : String(i).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-serif text-lg text-brand-black">{m.label}</h3>
                <p className="mt-1 text-sm text-brand-ink-secondary leading-relaxed">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Two illustrative cases */}
        <div className="mt-16 lg:mt-8">
          <h3 className="font-serif text-xl sm:text-2xl text-brand-black text-balance leading-snug">
            {casesTitle}
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {cases.map((c, ci) => (
              <motion.div
                key={c.label}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-brand-grid bg-brand-card/50 p-6 sm:p-7"
              >
                <p className="inline-flex items-center gap-2 rounded-full bg-brand-black px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold-light">
                  {c.label}
                </p>
                <ol className="mt-5 space-y-3">
                  {c.steps.map((s, si) => (
                    <li key={s} className="flex items-start gap-3">
                      {si > 0 ? (
                        <ArrowRight
                          size={15}
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-brand-gold/60"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                        />
                      )}
                      <span className="text-sm text-brand-ink-secondary leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-brand-ink-muted leading-relaxed">{disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
