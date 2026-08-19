"use client";

import { useEffect, useRef, useState } from "react";
import { BadgeCheck, BookOpen, Flag, Globe, Stamp, Users } from "lucide-react";

type Stop = { label: string; sublabel: string };

const STOP_ICONS = [Globe, BookOpen, BadgeCheck, Stamp, Users, Flag];

// The gold line runs between the centres of the first and last icon columns.
const EDGE = 100 / 12; // 8.333% — half a column in from each side
const SPAN = 100 - 2 * EDGE; // 83.333%

// Mobile vertical layout: fixed row pitch so icon centres are evenly spaced.
const ROW = 68; // px between successive icon centres
const ICON = 20; // px from a row's top to its icon centre (h-10 / 2)

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

// The Africa → Germany journey, on the light hero. Same signature scroll
// animation as the former standalone section: the gold line fills, a light
// travels along it, each milestone lights up as it is reached.
export function HeroParcours({ stops }: { stops: Stop[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = clamp((vh * 0.9 - rect.top) / (vh * 0.55), 0, 1);
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

  const dotLeft = EDGE + progress * SPAN;
  const lastGap = (stops.length - 1) * ROW; // full vertical span between end icons

  return (
    <div ref={trackRef}>
      {/* Mobile: vertical journey — the line descends, stops stacked */}
      <div className="relative sm:hidden">
        {/* base + progress line, at the icon centre (left-5 = 20px) */}
        <div className="absolute left-5 top-5 w-px bg-brand-black/12" style={{ height: lastGap }} />
        <div
          className="absolute left-5 top-5 w-[2px] -translate-x-px bg-gradient-to-b from-brand-gold to-brand-gold-light transition-[height] duration-150 ease-out"
          style={{ height: progress * lastGap }}
        />
        {/* travelling light */}
        <div
          className="absolute left-5 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold shadow-[0_0_16px_4px_rgba(195,154,62,0.45)] transition-[top] duration-150 ease-out"
          style={{ top: ICON + progress * lastGap }}
        />

        {stops.map((s, i) => {
          const Icon = STOP_ICONS[i] ?? Globe;
          const active = progress >= i / (stops.length - 1) - 0.001;
          const isEnd = i === stops.length - 1;
          return (
            <div
              key={s.label}
              className="relative flex items-start gap-4"
              style={{ minHeight: isEnd ? 40 : ROW }}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-500 ${
                  active
                    ? "bg-brand-gold text-brand-black ring-brand-gold shadow-[0_0_18px_rgba(195,154,62,0.45)]"
                    : "bg-brand-card text-brand-ink-muted ring-brand-black/12"
                }`}
              >
                <Icon size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <div className="pt-1">
                <span
                  className={`block text-[15px] font-semibold leading-tight transition-colors duration-500 ${
                    isEnd ? "text-brand-gold-text" : active ? "text-brand-black" : "text-brand-ink-muted"
                  }`}
                >
                  {s.label}
                </span>
                <span className="mt-0.5 block text-[13px] text-brand-ink-muted leading-tight">
                  {s.sublabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: horizontal journey band */}
      <div className="relative hidden sm:block">
        {/* base + progress line, at the icon centre (top-5 = 20px) */}
        <div className="absolute left-[8.333%] right-[8.333%] top-5 h-px bg-brand-black/12" />
        <div
          className="absolute top-5 h-[2px] -translate-y-px bg-gradient-to-r from-brand-gold to-brand-gold-light transition-[width] duration-150 ease-out"
          style={{ left: `${EDGE}%`, width: `${progress * SPAN}%` }}
        />
        {/* travelling light */}
        <div
          className="absolute top-5 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold shadow-[0_0_16px_4px_rgba(195,154,62,0.45)] transition-[left] duration-150 ease-out"
          style={{ left: `${dotLeft}%` }}
        />

        {/* milestones */}
        <div className="relative grid grid-cols-6 gap-2">
          {stops.map((s, i) => {
            const Icon = STOP_ICONS[i] ?? Globe;
            const active = progress >= i / (stops.length - 1) - 0.001;
            const isEnd = i === stops.length - 1;
            return (
              <div key={s.label} className="flex min-w-0 flex-col items-center text-center">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-500 ${
                    active
                      ? "bg-brand-gold text-brand-black ring-brand-gold shadow-[0_0_18px_rgba(195,154,62,0.45)]"
                      : "bg-brand-card text-brand-ink-muted ring-brand-black/12"
                  }`}
                >
                  <Icon size={18} strokeWidth={2} aria-hidden="true" />
                </span>
                <span
                  className={`mt-3 w-full break-words px-0.5 text-sm font-semibold leading-tight transition-colors duration-500 ${
                    isEnd ? "text-brand-gold-text" : active ? "text-brand-black" : "text-brand-ink-muted"
                  }`}
                >
                  {s.label}
                </span>
                <span className="mt-1 block text-xs text-brand-ink-muted leading-tight">
                  {s.sublabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
