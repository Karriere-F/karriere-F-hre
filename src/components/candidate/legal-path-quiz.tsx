"use client";

import { useState } from "react";
import { Link } from "../../../i18n/navigation";

type ResultKey = "emploiQualifie" | "chancenkarte" | "ausbildung" | "conseiller";
type JobOffer = "yes" | "no";
type Qualification = "university" | "vocational" | "none";
type German = "b2plus" | "b1" | "a2minus";
type Age = "under35" | "35to40" | "over40";

function computeResult(
  jobOffer: JobOffer,
  qualification: Qualification,
  german: German,
  age: Age
): ResultKey {
  // Fachkräfte / emploi qualifié (§§18a-18b AufenthG): job offer + a recognizable
  // qualification (university degree or 2+ year vocational training), no age limit.
  if (jobOffer === "yes" && qualification !== "none") return "emploiQualifie";

  // Ausbildung (§16a AufenthG): age limit raised to 35 since March 2024; no prior
  // qualification required, but a minimum German level is needed for the entry visa.
  if (qualification === "none" && age === "under35") return "ausbildung";

  // Chancenkarte (§§20a-20b AufenthG, points system): requires a recognizable
  // qualification even without a job offer yet; language, age and experience add
  // points toward the 6-point minimum. Past 40 with weaker German the points get
  // tight, so we defer to an advisor rather than guess.
  if (qualification !== "none" && jobOffer === "no") {
    if (age !== "over40" || german === "b2plus") return "chancenkarte";
    return "conseiller";
  }

  return "conseiller";
}

export function LegalPathQuiz({
  eyebrow,
  title,
  subtitle,
  q1,
  q2,
  q3,
  q4,
  results,
  ctaLabel,
  resetLabel,
  noteText,
  advisorCtaLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  q1: { title: string; options: { value: JobOffer; label: string }[] };
  q2: { title: string; options: { value: Qualification; label: string }[] };
  q3: { title: string; options: { value: German; label: string }[] };
  q4: { title: string; options: { value: Age; label: string }[] };
  results: Record<ResultKey, { badge: string; title: string; text: string; legalRef: string }>;
  ctaLabel: string;
  resetLabel: string;
  noteText: string;
  advisorCtaLabel: string;
}) {
  const [jobOffer, setJobOffer] = useState<JobOffer | null>(null);
  const [qualification, setQualification] = useState<Qualification | null>(null);
  const [german, setGerman] = useState<German | null>(null);
  const [age, setAge] = useState<Age | null>(null);

  const resultKey: ResultKey | null =
    jobOffer === null || qualification === null || german === null || age === null
      ? null
      : computeResult(jobOffer, qualification, german, age);

  const result = resultKey ? results[resultKey] : null;

  const reset = () => {
    setJobOffer(null);
    setQualification(null);
    setGerman(null);
    setAge(null);
  };

  return (
    <div className="mt-6 rounded-2xl bg-brand-black text-brand-white p-6 sm:p-8 shadow-lg">
      <p className="text-xs uppercase tracking-wide text-brand-gold-light font-semibold mb-1">
        {eyebrow}
      </p>
      <h3 className="text-xl font-serif mb-1">{title}</h3>
      <p className="text-brand-white/70 text-sm mb-6">{subtitle}</p>

      <div className="space-y-6">
        <Question number={1} title={q1.title} options={q1.options} value={jobOffer} onChange={setJobOffer} />
        <Question
          number={2}
          title={q2.title}
          options={q2.options}
          value={qualification}
          onChange={setQualification}
        />
        <Question number={3} title={q3.title} options={q3.options} value={german} onChange={setGerman} />
        <Question number={4} title={q4.title} options={q4.options} value={age} onChange={setAge} />
      </div>

      {result && (
        <div className="mt-6 pt-6 border-t border-brand-gold/30 animate-fade-up">
          <span className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-brand-gold text-brand-black mb-3">
            {result.badge}
          </span>
          <h4 className="text-lg font-serif mb-2">{result.title}</h4>
          <p className="text-brand-white/80 text-sm mb-2 max-w-xl">{result.text}</p>
          <p className="text-brand-white/40 text-xs mb-5">{result.legalRef}</p>
          <div className="flex flex-wrap items-center gap-4">
            {resultKey === "conseiller" ? (
              <Link
                href="/book-appointment"
                className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
              >
                {advisorCtaLabel}
              </Link>
            ) : (
              <Link
                href="/candidate/signup"
                className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
              >
                {ctaLabel}
              </Link>
            )}
            <button
              type="button"
              onClick={reset}
              className="press rounded-full border border-brand-white/30 px-5 py-2.5 text-sm text-brand-white/80 hover:border-brand-gold-light hover:text-brand-gold-light transition-colors duration-150"
            >
              {resetLabel}
            </button>
          </div>
          <p className="text-brand-white/40 text-xs mt-4">{noteText}</p>
        </div>
      )}
    </div>
  );
}

function Question<T extends string>({
  number,
  title,
  options,
  value,
  onChange,
}: {
  number: number;
  title: string;
  options: { value: T; label: string }[];
  value: T | null;
  onChange: (v: T) => void;
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
