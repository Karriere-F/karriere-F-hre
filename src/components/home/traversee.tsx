"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, BadgeCheck, BookOpen, Flag, Globe, Stamp, Users } from "lucide-react";
import { Link } from "../../../i18n/navigation";

type Stop = { label: string; sublabel: string };

type TraverseeProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaCandidat: string;
  ctaRecrute: string;
  imageSrc: string;
  imageAlt: string;
  stops: Stop[]; // exactly 6: Afrique → … → Allemagne
};

const STOP_ICONS = [Globe, BookOpen, BadgeCheck, Stamp, Users, Flag];

// The gold line runs between the centres of the first and last icon columns.
const EDGE = 100 / 12; // 8.333% — half a column in from each side
const SPAN = 100 - 2 * EDGE; // 83.333%

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export function Traversee({
  eyebrow,
  title,
  subtitle,
  ctaCandidat,
  ctaRecrute,
  imageSrc,
  imageAlt,
  stops,
}: TraverseeProps) {
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
      // fills as the route rises from the lower viewport toward the middle
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

  // Two-tone title: first line up to the first sentence break (white), the
  // whole second line in gold.
  const sepIdx = title.search(/[.,]/);
  const line1 = sepIdx >= 0 ? title.slice(0, sepIdx + 1) : title;
  const line2 = sepIdx >= 0 ? title.slice(sepIdx + 1).trim() : "";

  const dotLeft = EDGE + progress * SPAN;

  return (
    <section className="relative isolate overflow-hidden bg-brand-black text-brand-white">
      {/* Cinematic photo, full-bleed and blended into the dark on the left */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[56%_30%] brightness-110 motion-safe:animate-[slowZoom_25s_ease-in-out_infinite_alternate]"
        />
        {/* Darken only the left (for the text) and the bottom (for the timeline);
            keep the walking figure clear. */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/50 via-40% to-transparent to-72%" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-black to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[94vh] max-w-7xl flex-col px-4 sm:px-6 lg:px-14">
        {/* Text */}
        <div className="flex flex-1 items-center pb-10 pt-28 lg:pt-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold-light">
              {eyebrow}
            </span>
            <h2
              className="mt-7 font-serif leading-[1.04] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
            >
              <span className="block">{line1}</span>
              <span className="mt-1.5 block text-brand-gold-light">{line2}.</span>
            </h2>
            <p className="mt-10 max-w-md text-base sm:text-lg text-brand-white/85 leading-relaxed text-pretty">
              {subtitle}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/candidats"
                className="group inline-flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3.5 font-medium text-brand-black transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:bg-brand-gold-light hover:shadow-[0_14px_30px_-10px_rgba(195,154,62,0.6)] active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-y-0"
              >
                {ctaCandidat}
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
                />
              </Link>
              <Link
                href="/entreprises"
                className="group inline-flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3.5 font-medium text-brand-black transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:bg-brand-gold-light hover:shadow-[0_14px_30px_-10px_rgba(195,154,62,0.6)] active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-y-0"
              >
                {ctaRecrute}
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* The crossing — a route of milestones along the bottom */}
        <div ref={trackRef} className="relative pb-12 sm:pb-16">
          <div className="relative">
            {/* base + progress line, at the icon centre (top-5 = 20px) */}
            <div className="absolute left-[8.333%] right-[8.333%] top-5 h-px bg-brand-white/15" />
            <div
              className="absolute top-5 h-[2px] -translate-y-px bg-gradient-to-r from-brand-gold to-brand-gold-light transition-[width] duration-150 ease-out"
              style={{ left: `${EDGE}%`, width: `${progress * SPAN}%` }}
            />
            {/* travelling light */}
            <div
              className="absolute top-5 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold-light shadow-[0_0_16px_4px_rgba(224,196,119,0.55)] transition-[left] duration-150 ease-out"
              style={{ left: `${dotLeft}%` }}
            />

            {/* milestones */}
            <div className="relative grid grid-cols-6 gap-1 sm:gap-2">
              {stops.map((s, i) => {
                const Icon = STOP_ICONS[i] ?? Globe;
                const active = progress >= i / (stops.length - 1) - 0.001;
                const isEnd = i === stops.length - 1;
                return (
                  <div key={s.label} className="flex flex-col items-center text-center">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full ring-1 transition-all duration-500 ${
                        active
                          ? "bg-brand-gold text-brand-black ring-brand-gold shadow-[0_0_18px_rgba(224,196,119,0.55)]"
                          : "bg-brand-black/70 text-brand-white/45 ring-brand-white/20"
                      }`}
                    >
                      <Icon size={18} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span
                      className={`mt-3 text-[13px] sm:text-sm font-semibold leading-tight transition-colors duration-500 ${
                        isEnd ? "text-brand-gold-light" : active ? "text-brand-white" : "text-brand-white/75"
                      }`}
                    >
                      {s.label}
                    </span>
                    <span className="mt-1 hidden text-xs text-brand-white/50 leading-tight sm:block">
                      {s.sublabel}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
