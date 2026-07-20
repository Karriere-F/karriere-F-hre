"use client";

import { useState } from "react";

type Track = "full" | "fast";
type Option = { value: string; label: string };
type Question = { title: string; options: Option[] };
type Result = { title: string; text: string; ctaLabel: string; ctaHref: string };

// Two outcomes only. At B2 you take the Fast Track -- an out-of-date B2 (e.g. a
// certificate older than 12 months) is still the Fast Track; retaking it is handled
// internally, not surfaced here. Below B2 you take the Full Training. Cert and priority
// are still asked as profiling, but don't change the recommendation.
function computeTrack(
  level: string | null,
  cert: string | null,
  priority: string | null
): Track | null {
  if (level === null || cert === null || priority === null) return null;
  return level === "b2plus" ? "fast" : "full";
}

export function CourseTrackQuiz({
  eyebrow,
  title,
  subtitle,
  q1,
  q2,
  q3,
  results,
  resetLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  q1: Question;
  q2: Question;
  q3: Question;
  results: Record<Track, Result>;
  resetLabel: string;
}) {
  const [level, setLevel] = useState<string | null>(null);
  const [cert, setCert] = useState<string | null>(null);
  const [priority, setPriority] = useState<string | null>(null);

  const track = computeTrack(level, cert, priority);
  const result = track ? results[track] : null;

  const reset = () => {
    setLevel(null);
    setCert(null);
    setPriority(null);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-brand-black text-brand-white p-6 sm:p-8 shadow-lg">
      <div className="text-xs uppercase tracking-wide text-brand-gold-light font-semibold mb-1">
        {eyebrow}
      </div>
      <h3 className="text-xl font-serif mb-1">{title}</h3>
      <p className="text-brand-white/70 text-sm mb-6">{subtitle}</p>

      <div className="space-y-6">
        <Question number={1} title={q1.title} options={q1.options} value={level} onChange={setLevel} />
        <Question number={2} title={q2.title} options={q2.options} value={cert} onChange={setCert} />
        <Question number={3} title={q3.title} options={q3.options} value={priority} onChange={setPriority} />
      </div>

      {result && (
        <div className="mt-6 pt-6 border-t border-brand-gold/30 animate-fade-up">
          <h4 className="text-lg font-serif mb-2">{result.title}</h4>
          <p className="text-brand-white/80 text-sm mb-5 max-w-xl">{result.text}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={result.ctaHref}
              className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
            >
              {result.ctaLabel}
            </a>
            <button
              type="button"
              onClick={reset}
              className="press rounded-full border border-brand-white/30 px-5 py-2.5 text-sm text-brand-white/80 hover:border-brand-gold-light hover:text-brand-gold-light transition-colors duration-150"
            >
              {resetLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Question({
  number,
  title,
  options,
  value,
  onChange,
}: {
  number: number;
  title: string;
  options: Option[];
  value: string | null;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="font-serif text-base mb-3 flex items-center gap-2.5">
        <span className="shrink-0 h-6 w-6 rounded-full bg-brand-gold text-brand-black text-xs font-bold flex items-center justify-center">
          {number}
        </span>
        {title}
      </p>
      <div className="flex flex-wrap gap-2 pl-8">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`press rounded-lg border px-4 py-2.5 text-sm transition-colors duration-150 ${
              value === opt.value
                ? "bg-brand-gold text-brand-black border-brand-gold font-medium"
                : "bg-white/5 border-brand-gold/30 text-brand-white/85 hover:border-brand-gold"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
