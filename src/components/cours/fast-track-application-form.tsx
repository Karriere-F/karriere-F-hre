"use client";

import { useState } from "react";
import { submitFastTrackApplication } from "@/actions/fast-track-actions";

export type FtLabels = {
  secIdentity: string;
  secB2: string;
  secParcours: string;
  secProjet: string;
  secDocs: string;
  prenom: string;
  nom: string;
  email: string;
  whatsapp: string;
  pays: string;
  b2Confirm: string;
  b2Organisme: string;
  b2Annee: string;
  formation: string;
  metier: string;
  experience: string;
  objectif: string;
  objectifChoose: string;
  objectifEmploi: string;
  objectifAusbildung: string;
  objectifLesDeux: string;
  domaine: string;
  emploiRecherche: string;
  cvLien: string;
  diplomesLien: string;
  message: string;
  docsNote: string;
  required: string;
  submit: string;
  submitting: string;
  errorGeneric: string;
  errorB2: string;
  errorDocs: string;
  successTitle: string;
  successText: string;
};

const inputClass =
  "w-full rounded-md border border-brand-grid bg-brand-white px-3 py-2.5 text-sm text-brand-black transition-[border-color,box-shadow] duration-150 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20";
const fileClass =
  "w-full rounded-md border border-brand-grid bg-brand-white px-3 py-2.5 text-sm text-brand-ink-secondary file:mr-3 file:rounded-md file:border-0 file:bg-brand-gold/15 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-brand-gold-text hover:file:bg-brand-gold/25";
const labelClass = "mb-1.5 block text-sm font-medium text-brand-black";
const sectionClass = "rounded-2xl bg-brand-card p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)] sm:p-8";
const sectionTitleClass = "font-serif text-lg text-brand-black leading-snug";

function Req() {
  return <span className="text-brand-gold-text"> *</span>;
}

export function FastTrackApplicationForm({ labels: t }: { labels: FtLabels }) {
  const [b2, setB2] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (formData: FormData) => {
    setError(null);
    if (!b2) {
      setError(t.errorB2);
      return;
    }
    const cv = formData.get("cvFile");
    const dip = formData.get("diplomesFile");
    const missing = (f: FormDataEntryValue | null) => !(f instanceof File) || f.size === 0;
    if (missing(cv) || missing(dip)) {
      setError(t.errorDocs);
      return;
    }
    formData.set("b2Confirm", "true");
    setPending(true);
    const result = await submitFastTrackApplication(formData);
    setPending(false);
    if (!result.ok) {
      setError(t.errorGeneric);
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
        <h2 className="mt-5 font-serif text-2xl text-brand-black leading-snug">{t.successTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-ink-secondary leading-relaxed">{t.successText}</p>
      </div>
    );
  }

  return (
    <form action={onSubmit} className="flex flex-col gap-6">
      {/* Identité */}
      <fieldset className={sectionClass}>
        <legend className={sectionTitleClass}>{t.secIdentity}</legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>
              {t.prenom}
              <Req />
            </label>
            <input name="prenom" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>
              {t.nom}
              <Req />
            </label>
            <input name="nom" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>
              {t.email}
              <Req />
            </label>
            <input type="email" name="email" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>
              {t.whatsapp}
              <Req />
            </label>
            <input name="whatsapp" required className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>
              {t.pays}
              <Req />
            </label>
            <input name="pays" required className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* Certificat B2 */}
      <fieldset className={sectionClass}>
        <legend className={sectionTitleClass}>{t.secB2}</legend>
        <label className="mt-5 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={b2}
            onChange={(e) => setB2(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-brand-gold"
          />
          <span className="text-sm text-brand-ink-secondary leading-relaxed">
            {t.b2Confirm}
            <Req />
          </span>
        </label>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>{t.b2Organisme}</label>
            <input name="b2Organisme" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.b2Annee}</label>
            <input name="b2Annee" className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* Formation, métier, expérience */}
      <fieldset className={sectionClass}>
        <legend className={sectionTitleClass}>{t.secParcours}</legend>
        <div className="mt-5 grid gap-5">
          <div>
            <label className={labelClass}>{t.formation}</label>
            <textarea name="formation" rows={2} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.metier}</label>
            <input name="metier" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.experience}</label>
            <textarea name="experience" rows={3} className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* Projet */}
      <fieldset className={sectionClass}>
        <legend className={sectionTitleClass}>{t.secProjet}</legend>
        <div className="mt-5 grid gap-5">
          <div>
            <label className={labelClass}>
              {t.objectif}
              <Req />
            </label>
            <select name="objectif" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                {t.objectifChoose}
              </option>
              <option value={t.objectifEmploi}>{t.objectifEmploi}</option>
              <option value={t.objectifAusbildung}>{t.objectifAusbildung}</option>
              <option value={t.objectifLesDeux}>{t.objectifLesDeux}</option>
            </select>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>
                {t.domaine}
                <Req />
              </label>
              <input name="domaine" required className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>{t.emploiRecherche}</label>
              <input name="emploiRecherche" className={inputClass} />
            </div>
          </div>
        </div>
      </fieldset>

      {/* Documents */}
      <fieldset className={sectionClass}>
        <legend className={sectionTitleClass}>{t.secDocs}</legend>
        <p className="mt-3 text-sm text-brand-ink-muted leading-relaxed">{t.docsNote}</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>
              {t.cvLien}
              <Req />
            </label>
            <input type="file" name="cvFile" accept="application/pdf" required className={fileClass} />
          </div>
          <div>
            <label className={labelClass}>
              {t.diplomesLien}
              <Req />
            </label>
            <input type="file" name="diplomesFile" accept="application/pdf" required className={fileClass} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>{t.message}</label>
            <textarea name="message" rows={3} className={inputClass} />
          </div>
        </div>
      </fieldset>

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
