"use client";

import { useState } from "react";
import { AccompagnementTimeline } from "./accompagnement-timeline";

type Step = { num: string; title: string; body: string };

// 360° support, two renderings:
// - mobile / tablet: the readable vertical timeline;
// - desktop: a continuously rotating orbit of the 7 steps around a central hub. The
//   ring spins and each node counter-spins to stay upright; hovering pauses the orbit
//   and shows that step's detail in the centre.
export function Accompagnement360({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const cur = steps[active] ?? steps[0];

  const SIZE = 520;
  const C = SIZE / 2;
  const R = 212;
  const SPIN = "animate-[spin_48s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none";
  const SPIN_REV =
    "animate-[spin_48s_linear_infinite_reverse] group-hover:[animation-play-state:paused] motion-reduce:animate-none";

  return (
    <div>
      {/* Mobile / tablet */}
      <div className="lg:hidden">
        <AccompagnementTimeline steps={steps} />
      </div>

      {/* Desktop orbit */}
      <div className="hidden lg:flex lg:justify-center">
        <div className="group relative" style={{ width: SIZE, height: SIZE }}>
          {/* dashed guide circle */}
          <div
            aria-hidden="true"
            className="absolute rounded-full border border-dashed border-brand-gold/25"
            style={{ left: C - R, top: C - R, width: R * 2, height: R * 2 }}
          />

          {/* rotating ring of nodes */}
          <div className={`absolute inset-0 ${SPIN}`}>
            {steps.map((s, i) => {
              const a = (i / steps.length) * 2 * Math.PI;
              const x = C + R * Math.sin(a);
              const y = C - R * Math.cos(a);
              const on = active === i;
              return (
                <button
                  key={s.num}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-label={s.title}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: x, top: y }}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full border-2 font-serif text-sm font-bold shadow-sm transition-colors duration-200 ${SPIN_REV} ${
                      on
                        ? "border-brand-gold bg-brand-gold text-brand-black"
                        : "border-brand-gold/50 bg-brand-white text-brand-gold-text"
                    }`}
                  >
                    {s.num}
                  </span>
                </button>
              );
            })}
          </div>

          {/* centre hub */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 text-center">
            <h4 className="font-serif text-lg text-brand-black leading-snug">{cur.title}</h4>
            <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{cur.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
