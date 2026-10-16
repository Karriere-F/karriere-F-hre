"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";

export type FlipStep = { label: string; body: string };

export function FlipCards({ steps, hint }: { steps: FlipStep[]; hint: string }) {
  const [flipped, setFlipped] = useState<boolean[]>(() => steps.map(() => false));
  const toggle = (i: number) => setFlipped((f) => f.map((v, j) => (j === i ? !v : v)));

  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <button
          key={s.label}
          type="button"
          onClick={() => toggle(i)}
          aria-pressed={flipped[i]}
          className="group h-60 w-full text-left [perspective:1200px]"
        >
          <div
            className={`relative h-full w-full rounded-2xl transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)] motion-reduce:transition-none ${
              flipped[i] ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            {/* Face avant */}
            <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-brand-card p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 [backface-visibility:hidden]">
              <span className="font-serif text-4xl font-bold text-brand-gold-text">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-xl text-brand-black leading-snug">{s.label}</h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold-text">
                  <RotateCw size={13} aria-hidden="true" />
                  {hint}
                </span>
              </div>
            </div>

            {/* Face arrière */}
            <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-brand-black p-7 text-brand-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <span className="font-serif text-4xl font-bold text-brand-gold-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-lg leading-snug text-brand-gold-light">{s.label}</h3>
                <p className="mt-2 text-sm text-brand-white/85 leading-relaxed">{s.body}</p>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
