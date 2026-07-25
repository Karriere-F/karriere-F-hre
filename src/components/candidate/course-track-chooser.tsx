"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type Track = "fast" | "full";
type Level = { value: string; label: string };
type Path = { title: string; text: string; ctaLabel: string; ctaHref: string };

// One honest question instead of a three-step "test": the recommendation only ever
// depended on the German level, so the user picks it and the matching track lights up.
// Both tracks stay on screen as a real side-by-side comparison (good for reading and
// for SEO); selecting a level just promotes the one that fits ("b2plus" -> Fast Track,
// anything lower -> Full Training).
export function CourseTrackChooser({
  eyebrow,
  title,
  subtitle,
  levelQuestion,
  levels,
  matchBadge,
  fast,
  full,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  levelQuestion: string;
  levels: Level[];
  matchBadge: string;
  fast: Path;
  full: Path;
}) {
  const [level, setLevel] = useState<string | null>(null);
  const recommended: Track | null = level === null ? null : level === "b2plus" ? "fast" : "full";

  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center">
        <p className="text-xs uppercase tracking-widest text-brand-gold-text font-semibold mb-2">
          {eyebrow}
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance">{title}</h2>
        <p className="mt-3 text-brand-ink-secondary max-w-xl mx-auto text-pretty">{subtitle}</p>
      </div>

      {/* The one question */}
      <fieldset className="mt-8 flex flex-col items-center">
        <legend className="font-serif text-lg text-brand-black mb-4 text-center">
          {levelQuestion}
        </legend>
        <div className="flex flex-wrap justify-center gap-2.5">
          {levels.map((lv) => {
            const active = level === lv.value;
            return (
              <button
                key={lv.value}
                type="button"
                aria-pressed={active}
                onClick={() => setLevel(lv.value)}
                className={`press rounded-full border px-5 py-2.5 text-sm transition-colors duration-150 ${
                  active
                    ? "border-brand-gold bg-brand-gold text-brand-black font-medium"
                    : "border-brand-grid bg-brand-white text-brand-ink-secondary hover:border-brand-gold"
                }`}
              >
                {lv.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* The two paths, always shown; the match is promoted once a level is picked */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <TrackCard track="fast" path={fast} recommended={recommended} matchBadge={matchBadge} />
        <TrackCard track="full" path={full} recommended={recommended} matchBadge={matchBadge} />
      </div>
    </div>
  );
}

function TrackCard({
  track,
  path,
  recommended,
  matchBadge,
}: {
  track: Track;
  path: Path;
  recommended: Track | null;
  matchBadge: string;
}) {
  const isMatch = recommended === track;
  const isDimmed = recommended !== null && !isMatch;

  return (
    <article
      className={`relative flex flex-col rounded-2xl border bg-brand-white p-6 sm:p-7 transition-[box-shadow,border-color,opacity,transform] duration-300 ${
        isMatch
          ? "border-brand-gold shadow-lg shadow-brand-gold/10 sm:-translate-y-1"
          : "border-brand-grid"
      } ${isDimmed ? "opacity-60" : "opacity-100"}`}
    >
      {isMatch && (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-brand-black shadow-sm">
          <Check size={13} strokeWidth={3} aria-hidden="true" />
          {matchBadge}
        </span>
      )}
      <h3 className="font-serif text-xl text-brand-black mb-2">{path.title}</h3>
      <p className="text-sm text-brand-ink-secondary mb-6 grow">{path.text}</p>
      <a
        href={path.ctaHref}
        className={`press inline-flex w-fit items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-150 ${
          isMatch
            ? "bg-brand-gold text-brand-black hover:bg-brand-gold-light"
            : "border border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white"
        }`}
      >
        {path.ctaLabel}
      </a>
    </article>
  );
}
