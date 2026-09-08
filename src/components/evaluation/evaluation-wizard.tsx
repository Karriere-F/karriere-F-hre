"use client";

import Image from "next/image";
import { useMemo, useState, useTransition, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, ArrowLeft, Check, ShieldCheck } from "lucide-react";
import {
  ALLEMANDS,
  DOMAINES,
  ETUDES,
  EXPERIENCES,
  OBJECTIFS,
  QUALIFICATIONS,
  recommend,
  type Answers,
} from "@/lib/evaluation";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/constants";
import { submitEvaluation } from "@/actions/evaluation-actions";

const inputClass =
  "w-full rounded-md border border-brand-grid px-3.5 py-2.5 text-sm transition-[border-color,box-shadow] duration-150 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20";

const QUESTION_SCREENS = 5; // objectif, profil, qualification, allemand, âge

// Module-scope so its identity is stable across renders (no remount on parent update).
function OptionButton({
  label,
  selected,
  onClick,
  index,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ animationDelay: `${Math.min(index, 12) * 25}ms` }}
      className={`press animate-fade-up w-full rounded-lg border px-4 py-3.5 text-left text-sm font-medium transition-colors duration-150 ${
        selected
          ? "border-brand-gold bg-brand-gold/10 text-brand-black ring-1 ring-brand-gold"
          : "border-brand-grid text-brand-ink-secondary hover:border-brand-gold hover:text-brand-black"
      }`}
    >
      {label}
    </button>
  );
}

export function EvaluationWizard() {
  const t = useTranslations("evaluation");
  const [screen, setScreen] = useState(0); // 0 intro · 1-5 questions · 6 result · 7 lead · 8 final
  const [answers, setAnswers] = useState<Answers>({});
  const [form, setForm] = useState({ prenom: "", nom: "", whatsapp: "", email: "", pays: "" });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof Answers>(key: K, value: Answers[K]) =>
    setAnswers((a) => ({ ...a, [key]: value }));

  const rec = useMemo(() => recommend(answers), [answers]);
  const pathName = t(`result.paths.${rec.path}.name`);
  const closerPath = rec.path === "emploi" ? "emploi" : "ausbildung";

  const go = (next: number) => {
    setScreen(next);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const canContinue = () => {
    switch (screen) {
      case 1:
        return !!answers.objectif;
      case 2:
        return !!answers.etudes && !!answers.domaine;
      case 3:
        return !!answers.qualification && !!answers.experience;
      case 4:
        return !!answers.allemand && !!answers.certificat;
      case 5:
        return !!answers.age && answers.age.trim().length > 0;
      default:
        return true;
    }
  };

  const onSubmit = () => {
    setError(null);
    startTransition(async () => {
      const res = await submitEvaluation({ ...form, answers: answers as Record<string, string> });
      if (!res.ok) {
        setError(t("lead.error"));
        return;
      }
      go(8);
    });
  };

  const whatsappHref = () =>
    whatsappLink(WHATSAPP_NUMBERS[0].e164, t("final.whatsappMessage", { path: pathName }));

  // Render helpers — plain functions returning JSX (not components), so inputs keep
  // their identity/focus across re-renders and no component is created during render.
  const progressBar =
    screen >= 1 && screen <= 5 ? (
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink-muted">
          <span>{t("progress", { n: screen, total: QUESTION_SCREENS })}</span>
          <span className="text-brand-gold-text">
            {Math.round((screen / QUESTION_SCREENS) * 100)}%
          </span>
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-brand-grid">
          <div
            className="h-full rounded-full bg-brand-gold transition-[width] duration-500 ease-out"
            style={{ width: `${(screen / QUESTION_SCREENS) * 100}%` }}
          />
        </div>
      </div>
    ) : null;

  const shell = (children: ReactNode, onBack?: () => void) => (
    <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-2xl">
        {progressBar}
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="press mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-ink-muted transition-colors hover:text-brand-black"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {t("back")}
          </button>
        )}
        {children}
      </div>
    </div>
  );

  const heading = (title: string, className = "") => (
    <h2 className={`font-serif text-2xl text-brand-black text-balance sm:text-3xl ${className}`}>
      {title}
    </h2>
  );

  const continueBtn = (onClick: () => void, label?: string) => (
    <button
      type="button"
      onClick={onClick}
      disabled={!canContinue()}
      className="press mt-9 inline-flex h-[52px] items-center justify-center gap-2 rounded-md bg-brand-gold px-8 font-bold text-brand-black transition-colors duration-200 hover:bg-brand-gold-light disabled:cursor-not-allowed disabled:opacity-40"
    >
      {label ?? t("continue")}
      <ArrowRight size={18} aria-hidden="true" />
    </button>
  );

  const disclaimer = (
    <p className="mt-10 flex items-start gap-2.5 rounded-lg border border-brand-grid bg-brand-card px-4 py-3.5 text-xs leading-relaxed text-brand-ink-muted">
      <ShieldCheck size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold-text" />
      <span>{t("disclaimer")}</span>
    </p>
  );

  // ---- Intro ---------------------------------------------------------------

  if (screen === 0) {
    const promiseItems = t("intro.promise").split(" · ");
    const imageAlt =
      "Un CV posé sur un bureau à côté d'un ordinateur portable, prêt pour une évaluation de profil";
    return (
      <div>
        {/* Hero — text left, photo bleeding in from the right, faded into the page */}
        <section className="relative overflow-hidden bg-brand-white">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
            <Image
              src="/images/evaluation-profil.jpg"
              alt={imageAlt}
              fill
              priority
              sizes="52vw"
              className="object-cover"
              style={{ objectPosition: "50% center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/15 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-white to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-white to-transparent" />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Mobile photo: above the text */}
            <div className="relative -mx-4 aspect-[16/10] sm:-mx-6 lg:hidden">
              <Image
                src="/images/evaluation-profil.jpg"
                alt={imageAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: "50% center" }}
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-white to-transparent" />
            </div>

            <div className="max-w-lg py-12 lg:flex lg:min-h-[440px] lg:flex-col lg:justify-center lg:py-16">
              <h1 className="animate-fade-up font-serif text-3xl text-brand-black text-balance leading-[1.12] sm:text-4xl">
                {t("intro.title")}
              </h1>
              <p
                className="animate-fade-up mt-6 text-brand-ink-secondary leading-relaxed"
                style={{ animationDelay: "80ms" }}
              >
                {t("intro.text")}
              </p>
              <div
                className="animate-fade-up mt-7 flex flex-wrap gap-2.5"
                style={{ animationDelay: "120ms" }}
              >
                {promiseItems.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-brand-gold/40 bg-brand-gold/[0.05] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-gold-text"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA + reassurance */}
        <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <button
            type="button"
            onClick={() => go(1)}
            className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md bg-brand-gold px-8 font-bold text-brand-black transition-colors duration-200 hover:bg-brand-gold-light"
          >
            {t("intro.cta")}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          <p className="mt-5 text-xs text-brand-ink-muted">{t("intro.reassurance")}</p>
        </div>
      </div>
    );
  }

  // ---- Q1 · Objectif -------------------------------------------------------

  if (screen === 1) {
    return shell(
      <div>
        {heading(t("objectif.title"), "animate-fade-up")}
        <div className="mt-7 grid gap-2.5">
          {OBJECTIFS.map((id, i) => (
            <OptionButton
              key={id}
              index={i}
              label={t(`objectif.options.${id}`)}
              selected={answers.objectif === id}
              onClick={() => set("objectif", id)}
            />
          ))}
        </div>
        {continueBtn(() => go(2))}
      </div>,
      () => go(0)
    );
  }

  // ---- Q2 · Études + Domaine ----------------------------------------------

  if (screen === 2) {
    return shell(
      <div>
        {heading(t("etudes.title"), "animate-fade-up")}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {ETUDES.map((id, i) => (
            <OptionButton
              key={id}
              index={i}
              label={t(`etudes.options.${id}`)}
              selected={answers.etudes === id}
              onClick={() => set("etudes", id)}
            />
          ))}
        </div>
        {heading(t("domaine.title"), "mt-10")}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {DOMAINES.map((id, i) => (
            <OptionButton
              key={id}
              index={i}
              label={t(`domaine.options.${id}`)}
              selected={answers.domaine === id}
              onClick={() => set("domaine", id)}
            />
          ))}
        </div>
        {continueBtn(() => go(3))}
      </div>,
      () => go(1)
    );
  }

  // ---- Q3 · Qualification + Expérience ------------------------------------

  if (screen === 3) {
    return shell(
      <div>
        {heading(t("qualification.title"), "animate-fade-up")}
        <div className="mt-7 grid gap-2.5">
          {QUALIFICATIONS.map((id, i) => (
            <OptionButton
              key={id}
              index={i}
              label={t(`qualification.options.${id}`)}
              selected={answers.qualification === id}
              onClick={() => set("qualification", id)}
            />
          ))}
        </div>
        {heading(t("experience.title"), "mt-10")}
        <div className="mt-6 grid grid-cols-5 gap-2">
          {EXPERIENCES.map((id, i) => (
            <OptionButton
              key={id}
              index={i}
              label={t(`experience.options.${id}`)}
              selected={answers.experience === id}
              onClick={() => set("experience", id)}
            />
          ))}
        </div>
        {continueBtn(() => go(4))}
      </div>,
      () => go(2)
    );
  }

  // ---- Q4 · Allemand + Certificat -----------------------------------------

  if (screen === 4) {
    return shell(
      <div>
        {heading(t("allemand.title"), "animate-fade-up")}
        <div className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-6">
          {ALLEMANDS.map((id, i) => (
            <OptionButton
              key={id}
              index={i}
              label={t(`allemand.options.${id}`)}
              selected={answers.allemand === id}
              onClick={() => set("allemand", id)}
            />
          ))}
        </div>
        {heading(t("allemand.certificatQuestion"), "mt-10")}
        <div className="mt-6 grid grid-cols-2 gap-2.5">
          {(["oui", "non"] as const).map((id, i) => (
            <OptionButton
              key={id}
              index={i}
              label={t(`allemand.${id}`)}
              selected={answers.certificat === id}
              onClick={() => set("certificat", id)}
            />
          ))}
        </div>
        {continueBtn(() => go(5))}
      </div>,
      () => go(3)
    );
  }

  // ---- Q5 · Âge ------------------------------------------------------------

  if (screen === 5) {
    return shell(
      <div>
        {heading(t("age.title"), "animate-fade-up")}
        <input
          type="number"
          inputMode="numeric"
          min={16}
          max={70}
          value={answers.age ?? ""}
          onChange={(e) => set("age", e.target.value)}
          placeholder={t("age.placeholder")}
          className={`${inputClass} mt-6 max-w-[200px]`}
        />
        <p className="mt-3 max-w-md text-sm text-brand-ink-muted leading-relaxed">{t("age.help")}</p>
        {continueBtn(() => go(6), t("age.cta"))}
      </div>,
      () => go(4)
    );
  }

  // ---- Result (preliminary orientation + comparison) -----------------------

  if (screen === 6) {
    const strengths = t.raw(`result.paths.${rec.path}.strengths`) as string[];
    const checks = t.raw(`result.paths.${rec.path}.checks`) as string[];
    const rows = t.raw("result.table.rows") as {
      label: string;
      ausbildung: string;
      emploi: string;
    }[];
    return shell(
      <div className="animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-ink-muted">
          {t("result.title")}
        </p>
        <h2 className="mt-2 font-serif text-4xl text-brand-black sm:text-5xl">{pathName}</h2>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-brand-gold-text">
          {t("result.compatLabel")} {t(`result.compat.${rec.compat}`)}
        </p>
        <p className="mt-5 max-w-xl text-brand-ink-secondary leading-relaxed">
          {t(`result.paths.${rec.path}.intro`)}
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-black">
              {t("result.strengthsTitle")}
            </h3>
            <ul className="mt-3 space-y-2">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-brand-ink-secondary">
                  <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold-text" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-black">
              {t("result.checksTitle")}
            </h3>
            <ul className="mt-3 space-y-2">
              {checks.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-brand-ink-secondary">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {heading(t("result.compareTitle"), "mt-12")}
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-brand-grid text-left">
                <th className="py-3 pr-4 font-medium text-brand-ink-muted" />
                <th
                  className={`py-3 px-4 font-semibold ${
                    closerPath === "ausbildung" ? "text-brand-gold-text" : "text-brand-black"
                  }`}
                >
                  {t("result.table.colAusbildung")}
                </th>
                <th
                  className={`py-3 px-4 font-semibold ${
                    closerPath === "emploi" ? "text-brand-gold-text" : "text-brand-black"
                  }`}
                >
                  {t("result.table.colEmploi")}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-brand-grid/60">
                  <td className="py-3 pr-4 font-medium text-brand-black">{r.label}</td>
                  <td className="py-3 px-4 text-brand-ink-secondary">{r.ausbildung}</td>
                  <td className="py-3 px-4 text-brand-ink-secondary">{r.emploi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 rounded-lg border border-brand-gold/40 bg-brand-gold/10 px-5 py-4 text-brand-black">
          {t("result.closerTo")}{" "}
          <span className="font-bold text-brand-gold-text">
            {t(`result.paths.${closerPath}.name`)}
          </span>
        </p>

        {disclaimer}

        <button
          type="button"
          onClick={() => go(7)}
          className="press mt-9 inline-flex h-[54px] items-center justify-center gap-2 rounded-md bg-brand-gold px-8 font-bold text-brand-black transition-colors duration-200 hover:bg-brand-gold-light"
        >
          {t("result.cta")}
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>,
      () => go(5)
    );
  }

  // ---- Lead (conversion form) ---------------------------------------------

  if (screen === 7) {
    const complete = form.prenom && form.nom && form.whatsapp && form.email && form.pays;
    const onChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
    return shell(
      <div className="animate-fade-up">
        {heading(t("lead.title"))}
        <p className="mt-4 max-w-xl text-brand-ink-secondary leading-relaxed">{t("lead.intro")}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="mt-7 flex flex-col gap-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-brand-ink-secondary">{t("lead.prenom")}</label>
              <input required value={form.prenom} onChange={onChange("prenom")} className={inputClass} />
            </div>
            <div>
              <label className="mb-1 block text-sm text-brand-ink-secondary">{t("lead.nom")}</label>
              <input required value={form.nom} onChange={onChange("nom")} className={inputClass} />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-brand-ink-secondary">{t("lead.whatsapp")}</label>
            <input type="tel" required value={form.whatsapp} onChange={onChange("whatsapp")} className={inputClass} />
          </div>
          <div>
            <label className="mb-1 block text-sm text-brand-ink-secondary">{t("lead.email")}</label>
            <input type="email" required value={form.email} onChange={onChange("email")} className={inputClass} />
          </div>
          <div>
            <label className="mb-1 block text-sm text-brand-ink-secondary">{t("lead.pays")}</label>
            <input required value={form.pays} onChange={onChange("pays")} className={inputClass} />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={!complete || isPending}
            className="press mt-2 inline-flex h-[54px] items-center justify-center gap-2 rounded-md bg-brand-gold px-8 font-bold text-brand-black transition-colors duration-200 hover:bg-brand-gold-light disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isPending ? t("lead.sending") : t("lead.submit")}
            {!isPending && <ArrowRight size={18} aria-hidden="true" />}
          </button>
          <p className="text-xs text-brand-ink-muted leading-relaxed">{t("lead.requiredNote")}</p>
        </form>
      </div>,
      () => go(6)
    );
  }

  // ---- Final (detailed result) --------------------------------------------

  const steps = t.raw("final.steps") as string[];
  const profileRows: [string, string | undefined][] = [
    [t("final.labelObjectif"), answers.objectif && t(`objectif.options.${answers.objectif}`)],
    [t("final.labelSecteur"), answers.domaine && t(`domaine.options.${answers.domaine}`)],
    [
      t("final.labelQualification"),
      answers.qualification && t(`qualification.options.${answers.qualification}`),
    ],
    [t("final.labelExperience"), answers.experience && t(`experience.options.${answers.experience}`)],
    [t("final.labelAllemand"), answers.allemand && t(`allemand.options.${answers.allemand}`)],
  ];
  return shell(
    <div className="animate-fade-up">
      <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-4 py-1.5 text-sm font-semibold text-brand-gold-text">
        <Check size={16} aria-hidden="true" />
        {t("final.badge")}
      </div>

      {heading(t("final.profileTitle"), "mt-6")}
      <dl className="mt-5 divide-y divide-brand-grid/70 rounded-xl border border-brand-grid">
        {profileRows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 px-5 py-3.5">
            <dt className="text-sm text-brand-ink-muted">{label}</dt>
            <dd className="text-right text-sm font-medium text-brand-black">{value ?? "—"}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 rounded-xl border border-brand-gold/40 bg-brand-gold/10 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink-muted">
          {t("final.orientationTitle")}
        </p>
        <p className="mt-1.5 font-serif text-2xl text-brand-black">
          {pathName} <span className="text-brand-gold-text">→ {t("final.toStudy")}</span>
        </p>
      </div>

      {heading(t("final.stepsTitle"), "mt-10")}
      <ol className="mt-5 space-y-3">
        {steps.map((s, i) => (
          <li key={s} className="flex items-start gap-3.5">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-black text-xs font-bold text-brand-white">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-brand-ink-secondary leading-relaxed">{s}</span>
          </li>
        ))}
      </ol>

      {disclaimer}

      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="press mt-9 inline-flex h-[54px] items-center justify-center gap-2 rounded-md bg-brand-gold px-8 font-bold text-brand-black transition-colors duration-200 hover:bg-brand-gold-light"
      >
        {t("final.whatsappCta")}
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    </div>
  );
}
