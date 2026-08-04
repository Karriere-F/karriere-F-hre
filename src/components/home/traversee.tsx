"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "../../../i18n/navigation";

type TraverseeProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  ctaLabel: string;
  startLabel: string;
  endLabel: string;
  waypoints: string[];
  afTitle: string;
  afBody: string;
  deTitle: string;
  deBody: string;
  bridge: string;
};

// SVG route geometry (viewBox 0 0 1000 340) — a gentle crossing rising from
// the African shore (lower-left) to the German shore (upper-right).
const VB_W = 1000;
const VB_H = 340;
const PATH_D = "M 80 258 C 300 258 340 96 500 128 C 660 160 720 78 920 96";
const START = { x: 80, y: 258 };
const END = { x: 920, y: 96 };
const WP_T = [0.2, 0.45, 0.68, 0.88];

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export function Traversee({
  eyebrow,
  title,
  subtitle,
  body,
  ctaLabel,
  startLabel,
  endLabel,
  waypoints,
  afTitle,
  afBody,
  deTitle,
  deBody,
  bridge,
}: TraverseeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [len, setLen] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dot, setDot] = useState(START);
  const [wps, setWps] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const path = pathRef.current;
    const track = trackRef.current;
    if (!path || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let total = 0;
    let raf = 0;
    const measure = () => {
      total = path.getTotalLength();
      setLen(total);
      setWps(
        WP_T.map((t) => {
          const p = path.getPointAtLength(t * total);
          return { x: p.x, y: p.y };
        }),
      );
    };
    const update = () => {
      raf = 0;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const startAt = vh * 0.85; // route top entering the lower viewport → 0
      const endAt = vh * 0.3; // route lifted into the upper third → 1
      const p = clamp((startAt - rect.top) / (startAt - endAt), 0, 1);
      setProgress(p);
      const pt = path.getPointAtLength(p * total);
      setDot({ x: pt.x, y: pt.y });
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    // Defer the first measurement/paint out of the effect body (avoids
    // synchronous cascading renders) and keep it in a rAF callback.
    const init = window.requestAnimationFrame(() => {
      measure();
      if (reduced) {
        setProgress(1);
        setDot(END);
        return;
      }
      update();
    });

    if (!reduced) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
    }
    return () => {
      window.cancelAnimationFrame(init);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const dashoffset = len ? len * (1 - progress) : 1;

  // Split the title on its first comma so it can breathe across two lines,
  // the second one indented — whitespace as luxury.
  const commaIdx = title.indexOf(",");
  const titleLine1 = commaIdx >= 0 ? title.slice(0, commaIdx + 1) : title;
  const titleLine2 = commaIdx >= 0 ? title.slice(commaIdx + 1).trim() : "";

  return (
    <section className="relative overflow-hidden bg-brand-black text-brand-white">
      {/* soft light bloom behind the route */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 42%, rgba(224,196,119,0.14), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold-light">
            {eyebrow}
          </span>
          <h2
            className="mt-6 font-serif leading-[1.02] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            <span className="block">{titleLine1}</span>
            {titleLine2 && (
              <span className="mt-6 block pl-[14%] sm:mt-9 sm:pl-[26%]">{titleLine2}</span>
            )}
          </h2>
          <p className="mt-10 max-w-xl text-lg sm:text-xl text-brand-white/90 leading-relaxed text-pretty">
            {subtitle}
          </p>
          <p className="mt-4 text-brand-white/65 leading-relaxed text-pretty">{body}</p>
          <Link
            href="/postuler"
            className="press mt-8 inline-flex rounded-full bg-brand-gold px-7 py-3.5 font-medium text-brand-black hover:bg-brand-gold-light transition-colors duration-200"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* The animated crossing */}
        <div ref={trackRef} className="relative mt-10 sm:mt-14">
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="w-full h-auto"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="trav-grad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#c39a3e" />
                <stop offset="100%" stopColor="#e0c477" />
              </linearGradient>
              <filter id="trav-glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="7" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* faint full route */}
            <path
              d={PATH_D}
              stroke="rgba(255,255,255,0.14)"
              strokeWidth={2}
              strokeDasharray="2 9"
              strokeLinecap="round"
            />
            {/* illuminated, drawn portion */}
            <path
              ref={pathRef}
              d={PATH_D}
              stroke="url(#trav-grad)"
              strokeWidth={3}
              strokeLinecap="round"
              filter="url(#trav-glow)"
              style={{
                strokeDasharray: len || undefined,
                strokeDashoffset: dashoffset,
              }}
            />

            {/* shore anchors */}
            <circle cx={START.x} cy={START.y} r={7} fill="#e0c477" />
            <circle cx={END.x} cy={END.y} r={7} fill="none" stroke="#e0c477" strokeWidth={2} />

            {/* waypoint pins */}
            {wps.map((w, i) => {
              const active = progress >= WP_T[i] - 0.001;
              return (
                <circle
                  key={i}
                  cx={w.x}
                  cy={w.y}
                  r={active ? 8 : 5}
                  fill={active ? "#e0c477" : "rgba(255,255,255,0.2)"}
                  filter={active ? "url(#trav-glow)" : undefined}
                  className="transition-all duration-500 ease-out"
                />
              );
            })}

            {/* the travelling light */}
            <g filter="url(#trav-glow)" className="trav-dot">
              <circle cx={dot.x} cy={dot.y} r={13} fill="rgba(224,196,119,0.35)" />
              <circle cx={dot.x} cy={dot.y} r={6} fill="#fff7e0" />
            </g>
          </svg>

          {/* HTML labels overlaid on the route (crisp + responsive) */}
          <span
            className="absolute -translate-x-1/2 translate-y-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-gold-light"
            style={{ left: `${(START.x / VB_W) * 100}%`, top: `${(START.y / VB_H) * 100}%` }}
          >
            {startLabel}
          </span>
          <span
            className="absolute -translate-x-1/2 -translate-y-6 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-gold-light"
            style={{ left: `${(END.x / VB_W) * 100}%`, top: `${(END.y / VB_H) * 100}%` }}
          >
            {endLabel}
          </span>
          {wps.map((w, i) => (
            <span
              key={i}
              className={`absolute hidden -translate-x-1/2 -translate-y-7 whitespace-nowrap text-[11px] sm:text-xs font-medium transition-colors duration-500 sm:block ${
                progress >= WP_T[i] - 0.001 ? "text-brand-white" : "text-brand-white/40"
              }`}
              style={{ left: `${(w.x / VB_W) * 100}%`, top: `${(w.y / VB_H) * 100}%` }}
            >
              {waypoints[i]}
            </span>
          ))}
        </div>

        {/* the two shores */}
        <div className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-brand-white/10 bg-brand-white/[0.04] p-6 sm:p-7">
            <h3 className="font-serif text-xl text-brand-gold-light">{afTitle}</h3>
            <p className="mt-2.5 text-sm sm:text-base text-brand-white/70 leading-relaxed">
              {afBody}
            </p>
          </div>
          <div className="rounded-2xl border border-brand-white/10 bg-brand-white/[0.04] p-6 sm:p-7">
            <h3 className="font-serif text-xl text-brand-gold-light">{deTitle}</h3>
            <p className="mt-2.5 text-sm sm:text-base text-brand-white/70 leading-relaxed">
              {deBody}
            </p>
          </div>
        </div>

        <p className="mt-10 text-center font-serif text-xl sm:text-2xl text-brand-gold-light text-balance">
          {bridge}
        </p>
      </div>

      <style>{`
        .trav-dot { animation: travPulse 2.4s ease-in-out infinite; transform-origin: center; }
        @keyframes travPulse { 0%,100% { opacity: 0.9 } 50% { opacity: 1 } }
        @media (prefers-reduced-motion: reduce) { .trav-dot { animation: none } }
      `}</style>
    </section>
  );
}
