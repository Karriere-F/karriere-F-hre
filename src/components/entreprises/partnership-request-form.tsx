"use client";

import { useState } from "react";
import { submitPartnershipRequest } from "@/actions/partnership-actions";

export type PartnerLabels = {
  sec1: string;
  sec2: string;
  sec3: string;
  unternehmen: string;
  branche: string;
  website: string;
  ansprechpartner: string;
  position: string;
  email: string;
  telefon: string;
  interesse: string;
  interesseOptions: string[];
  nachricht: string;
  consent: string;
  consentNote: string;
  submit: string;
  submitting: string;
  required: string;
  error: string;
  errorConsent: string;
  successTitle: string;
  successText: string;
};

const inputClass =
  "w-full rounded-md border border-brand-grid bg-brand-white px-3 py-2.5 text-sm text-brand-black transition-[border-color,box-shadow] duration-150 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20";
const labelClass = "mb-1.5 block text-sm font-medium text-brand-black";
const sectionClass = "rounded-2xl bg-brand-card p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)] sm:p-8";
const sectionTitleClass = "font-serif text-lg text-brand-black leading-snug";

function Req() {
  return <span className="text-brand-gold-text"> *</span>;
}

function StepBadge({ n }: { n: string }) {
  return (
    <span className="mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 font-serif text-sm font-bold text-brand-gold-text">
      {n}
    </span>
  );
}

export function PartnershipRequestForm({ labels: t }: { labels: PartnerLabels }) {
  const [consent, setConsent] = useState(false);
  const [interesse, setInteresse] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (formData: FormData) => {
    setError(null);
    if (!consent) {
      setError(t.errorConsent);
      return;
    }
    setPending(true);
    const result = await submitPartnershipRequest({
      unternehmen: String(formData.get("unternehmen") ?? ""),
      branche: String(formData.get("branche") ?? ""),
      website: String(formData.get("website") ?? ""),
      ansprechpartner: String(formData.get("ansprechpartner") ?? ""),
      position: String(formData.get("position") ?? ""),
      email: String(formData.get("email") ?? ""),
      telefon: String(formData.get("telefon") ?? ""),
      interesse: String(formData.get("interesse") ?? ""),
      nachricht: String(formData.get("nachricht") ?? ""),
      consent,
    });
    setPending(false);
    if (!result.ok) {
      setError(t.error);
      return;
    }
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="animate-fade-up rounded-2xl bg-brand-card p-8 text-center shadow-[0_6px_24px_rgba(17,17,17,0.05)] sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/15 font-serif text-2xl font-bold text-brand-gold-text">
          ✓
        </span>
        <h3 className="mt-5 font-serif text-2xl text-brand-black leading-snug">{t.successTitle}</h3>
        <p className="mx-auto mt-3 max-w-xl text-brand-ink-secondary leading-relaxed">{t.successText}</p>
      </div>
    );
  }

  return (
    <form action={onSubmit} className="flex flex-col gap-6">
      {/* 01 — Unternehmen */}
      <fieldset className={sectionClass}>
        <legend className={`flex items-center ${sectionTitleClass}`}>
          <StepBadge n="01" />
          {t.sec1}
        </legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>
              {t.unternehmen}
              <Req />
            </label>
            <input name="unternehmen" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.branche}</label>
            <input name="branche" className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>{t.website}</label>
            <input name="website" className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* 02 — Kontaktdaten */}
      <fieldset className={sectionClass}>
        <legend className={`flex items-center ${sectionTitleClass}`}>
          <StepBadge n="02" />
          {t.sec2}
        </legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>
              {t.ansprechpartner}
              <Req />
            </label>
            <input name="ansprechpartner" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.position}</label>
            <input name="position" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>
              {t.email}
              <Req />
            </label>
            <input type="email" name="email" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.telefon}</label>
            <input name="telefon" className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* 03 — Partnerschaft */}
      <fieldset className={sectionClass}>
        <legend className={`flex items-center ${sectionTitleClass}`}>
          <StepBadge n="03" />
          {t.sec3}
        </legend>
        <div className="mt-5">
          <p className={labelClass}>
            {t.interesse}
            <Req />
          </p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {t.interesseOptions.map((opt) => {
              const on = interesse === opt;
              return (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors duration-200 ${
                    on
                      ? "border-brand-gold bg-brand-gold/10 text-brand-black"
                      : "border-brand-grid bg-brand-white text-brand-ink-secondary hover:border-brand-gold/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="interesse"
                    value={opt}
                    required
                    checked={on}
                    onChange={() => setInteresse(opt)}
                    className="h-4 w-4 shrink-0 accent-brand-gold"
                  />
                  {opt}
                </label>
              );
            })}
          </div>
          <div className="mt-5">
            <label className={labelClass}>{t.nachricht}</label>
            <textarea name="nachricht" rows={4} className={inputClass} />
          </div>
        </div>
      </fieldset>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-brand-gold"
        />
        <span className="text-sm text-brand-ink-secondary leading-relaxed">
          {t.consent}
          <Req />
        </span>
      </label>
      <p className="-mt-3 text-xs text-brand-ink-muted leading-relaxed">{t.consentNote}</p>

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md bg-brand-gold px-8 font-bold text-brand-black transition-colors duration-200 hover:bg-brand-gold-light disabled:opacity-60"
        >
          {pending ? t.submitting : t.submit}
        </button>
        <span className="text-xs text-brand-ink-muted">
          <span className="text-brand-gold-text">*</span> {t.required}
        </span>
      </div>
    </form>
  );
}
