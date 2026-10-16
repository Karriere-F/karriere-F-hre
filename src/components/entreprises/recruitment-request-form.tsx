"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { submitRecruitmentRequest } from "@/actions/recruitment-actions";

export type RecruitLabels = {
  secEntreprise: string;
  secInterlocuteur: string;
  secBesoin: string;
  secExigences: string;
  entreprise: string;
  secteur: string;
  secteurChoose: string;
  secteurs: string[];
  siteWeb: string;
  prenomNom: string;
  fonction: string;
  email: string;
  telephone: string;
  besoin: string;
  besoinChoose: string;
  besoinFach: string;
  besoinAzubis: string;
  besoinLesDeux: string;
  besoinEtude: string;
  metier: string;
  nombre: string;
  delai: string;
  delaiChoose: string;
  delaiAsap: string;
  delai36: string;
  delai6plus: string;
  delaiDefinir: string;
  niveauAllemand: string;
  qualification: string;
  message: string;
  consent: string;
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

function defaultBesoin(type: string | null, t: RecruitLabels) {
  if (type === "fachkraefte") return t.besoinFach;
  if (type === "azubis") return t.besoinAzubis;
  return "";
}

export function RecruitmentRequestForm({ labels: t }: { labels: RecruitLabels }) {
  const searchParams = useSearchParams();
  const [consent, setConsent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const secteurParam = searchParams.get("secteur") ?? "";

  const onSubmit = async (formData: FormData) => {
    setError(null);
    if (!consent) {
      setError(t.errorConsent);
      return;
    }
    setPending(true);
    const result = await submitRecruitmentRequest({
      entreprise: String(formData.get("entreprise") ?? ""),
      secteur: String(formData.get("secteur") ?? ""),
      siteWeb: String(formData.get("siteWeb") ?? ""),
      prenomNom: String(formData.get("prenomNom") ?? ""),
      fonction: String(formData.get("fonction") ?? ""),
      email: String(formData.get("email") ?? ""),
      telephone: String(formData.get("telephone") ?? ""),
      besoin: String(formData.get("besoin") ?? ""),
      metier: String(formData.get("metier") ?? ""),
      nombre: String(formData.get("nombre") ?? ""),
      delai: String(formData.get("delai") ?? ""),
      niveauAllemand: String(formData.get("niveauAllemand") ?? ""),
      qualification: String(formData.get("qualification") ?? ""),
      message: String(formData.get("message") ?? ""),
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
        <h2 className="mt-5 font-serif text-2xl text-brand-black leading-snug">{t.successTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-ink-secondary leading-relaxed">{t.successText}</p>
      </div>
    );
  }

  return (
    <form action={onSubmit} className="flex flex-col gap-6">
      {/* Entreprise */}
      <fieldset className={sectionClass}>
        <legend className={sectionTitleClass}>{t.secEntreprise}</legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>
              {t.entreprise}
              <Req />
            </label>
            <input name="entreprise" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.secteur}</label>
            <select name="secteur" defaultValue={secteurParam} className={inputClass}>
              <option value="">{t.secteurChoose}</option>
              {t.secteurs.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>{t.siteWeb}</label>
            <input name="siteWeb" className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* Interlocuteur */}
      <fieldset className={sectionClass}>
        <legend className={sectionTitleClass}>{t.secInterlocuteur}</legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>
              {t.prenomNom}
              <Req />
            </label>
            <input name="prenomNom" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>
              {t.fonction}
              <Req />
            </label>
            <input name="fonction" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>
              {t.email}
              <Req />
            </label>
            <input type="email" name="email" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.telephone}</label>
            <input name="telephone" className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* Besoin */}
      <fieldset className={sectionClass}>
        <legend className={sectionTitleClass}>{t.secBesoin}</legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelClass}>
              {t.besoin}
              <Req />
            </label>
            <select name="besoin" required defaultValue={defaultBesoin(searchParams.get("type"), t)} className={inputClass}>
              <option value="" disabled>
                {t.besoinChoose}
              </option>
              <option value={t.besoinFach}>{t.besoinFach}</option>
              <option value={t.besoinAzubis}>{t.besoinAzubis}</option>
              <option value={t.besoinLesDeux}>{t.besoinLesDeux}</option>
              <option value={t.besoinEtude}>{t.besoinEtude}</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>
              {t.metier}
              <Req />
            </label>
            <input name="metier" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.nombre}</label>
            <input name="nombre" className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>{t.delai}</label>
            <select name="delai" defaultValue="" className={inputClass}>
              <option value="">{t.delaiChoose}</option>
              <option value={t.delaiAsap}>{t.delaiAsap}</option>
              <option value={t.delai36}>{t.delai36}</option>
              <option value={t.delai6plus}>{t.delai6plus}</option>
              <option value={t.delaiDefinir}>{t.delaiDefinir}</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* Exigences */}
      <fieldset className={sectionClass}>
        <legend className={sectionTitleClass}>{t.secExigences}</legend>
        <div className="mt-5 grid gap-5">
          <div>
            <label className={labelClass}>{t.niveauAllemand}</label>
            <input name="niveauAllemand" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.qualification}</label>
            <textarea name="qualification" rows={3} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.message}</label>
            <textarea name="message" rows={4} className={inputClass} />
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
