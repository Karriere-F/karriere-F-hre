"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, CalendarClock, GraduationCap, Languages, type LucideIcon } from "lucide-react";

type Item = { title: string; body: string };

const ICONS: LucideIcon[] = [GraduationCap, CalendarClock, Languages, Building2];

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

// The four access conditions as a vertical schema that lights up on scroll: a gold
// line fills downward and each condition turns from muted to gold as it is reached.
export function ConditionsSchema({ items }: { items: Item[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // fills as the schema rises from the lower viewport toward the middle
      const p = clamp((vh * 0.85 - rect.top) / (rect.height + vh * 0.25), 0, 1);
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    const init = window.requestAnimationFrame(() => {
      if (reduced) {
        setProgress(1);
        return;
      }
      update();
    });
    if (!reduced) window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(init);
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const on = (i: number) => progress >= i / items.length + 0.04;

  return (
    <ol ref={ref} className="relative max-w-3xl">
      {items.map((it, i) => {
        const Icon = ICONS[i] ?? GraduationCap;
        const active = on(i);
        const nextActive = on(i + 1);
        const last = i === items.length - 1;
        return (
          <li key={it.title} className="relative flex gap-5 pb-8 last:pb-0">
            {!last && (
              <>
                <span aria-hidden="true" className="absolute left-6 top-14 bottom-0 w-px -translate-x-1/2 bg-brand-grid" />
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-14 bottom-0 w-px -translate-x-1/2 origin-top bg-brand-gold transition-transform duration-700 ease-out"
                  style={{ transform: `scaleY(${nextActive ? 1 : 0})` }}
                />
              </>
            )}
            <span
              className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-500 ${
                active
                  ? "bg-brand-gold text-brand-black ring-brand-gold shadow-[0_0_20px_rgba(195,154,62,0.45)]"
                  : "bg-brand-card text-brand-ink-muted ring-brand-grid"
              }`}
            >
              <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
            </span>
            <div
              className={`flex-1 rounded-2xl border p-5 sm:p-6 transition-all duration-500 ${
                active ? "border-brand-gold/40 bg-brand-gold/[0.05]" : "border-brand-grid bg-brand-white"
              }`}
            >
              <h3
                className={`font-serif text-lg transition-colors duration-500 ${
                  active ? "text-brand-black" : "text-brand-ink-secondary"
                }`}
              >
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{it.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
