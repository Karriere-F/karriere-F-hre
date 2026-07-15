"use client";

import { useState } from "react";

type ResultKey = "ausbildung" | "emploiQualifie" | "chancenkarte";

export function AgePathGuide({
  eyebrow,
  title,
  subtitle,
  ageOptions,
  results,
  noteText,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  ageOptions: { value: ResultKey; label: string }[];
  results: Record<ResultKey, { badge: string; title: string; text: string }>;
  noteText: string;
}) {
  const [selected, setSelected] = useState<ResultKey | null>(null);
  const result = selected ? results[selected] : null;

  return (
    <div className="mt-6 rounded-2xl border border-brand-grid bg-brand-white p-6 sm:p-8">
      <p className="text-xs uppercase tracking-wide text-brand-gold-text font-semibold mb-1">
        {eyebrow}
      </p>
      <h3 className="text-lg font-serif text-brand-black mb-1">{title}</h3>
      <p className="text-sm text-brand-ink-secondary mb-5">{subtitle}</p>

      <div className="flex flex-wrap gap-2">
        {ageOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setSelected(opt.value)}
            className={`press rounded-lg border px-4 py-2.5 text-sm transition-colors duration-150 ${
              selected === opt.value
                ? "bg-brand-gold text-brand-black border-brand-gold font-medium"
                : "bg-brand-card border-brand-grid text-brand-ink-secondary hover:border-brand-gold"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {result && (
        <div className="mt-6 pt-6 border-t border-brand-grid animate-fade-up">
          <span className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-brand-gold text-brand-black mb-3">
            {result.badge}
          </span>
          <h4 className="text-brand-black font-serif text-base mb-2">{result.title}</h4>
          <p className="text-sm text-brand-ink-secondary max-w-xl">{result.text}</p>
          <p className="text-xs text-brand-ink-muted mt-4">{noteText}</p>
        </div>
      )}
    </div>
  );
}
