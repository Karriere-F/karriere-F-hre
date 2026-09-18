"use client";

import Image from "next/image";
import { useMemo, useState, useTransition, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, ShieldCheck, Star } from "lucide-react";
import {
  ALLEMANDS_A,
  AVENIRS,
  DOMAINES_A,
  EXPERIENCES_A,
  NIVEAUX,
  STYLES,
  compatibility,
  profileType,
  recommendedTrades,
  type AusAnswers,
} from "@/lib/ausbildung-orientation";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/constants";
import { submitAusbildungOrientation } from "@/actions/evaluation-actions";

const inputClass =
  "w-full rounded-md border border-brand-grid px-3.5 py-2.5 text-sm transition-[border-color,box-shadow] duration-150 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20";

const QUESTION_SCREENS = 6;

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

export function AusbildungEvaluator() {
  const t = useTranslations("ausbildungEval");
  const [screen, setScreen] = useState(0); // 0 intro · 1-6 Q · 7 result · 8 lead · 9 final
  const [a, setA] = useState<AusAnswers>({});
  const [form, setForm] = useState({ prenom: "", nom: "", whatsapp: "", email: "", pays: "" });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof AusAnswers>(k: K, v: AusAnswers[K]) => setA((p) => ({ ...p, [k]: v }));

  const pt = useMemo(() => profileType(a), [a]);
  const compat = useMemo(() => compatibility(a), [a]);
  const trades = useMemo(() => recommendedTrades(a), [a]);

  const go = (n: number) => {
    setScreen(n);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const canContinue = () => {
    switch (screen) {
      case 1: return !!a.niveau;
      case 2: return !!a.experience;
      case 3: return !!a.domaine;
      case 4: return !!a.style;
      case 5: return !!a.allemand;
      case 6: return !!a.avenir;
      default: return true;
    }
  };

  const onSubmit = () => {
    setError(null);
    startTransition(async () => {
      const res = await submitAusbildungOrientation({ ...form, answers: a as Record<string, string> });
      if (!res.ok) {
        setError(t("lead.error"));
        return;
      }
      go(9);
    });
  };

  const progressBar =
    screen >= 1 && screen <= QUESTION_SCREENS ? (
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink-muted">
          <span>{t("progress", { n: screen, total: QUESTION_SCREENS })}</span>
          <span className="text-brand-gold-text">{Math.round((screen / QUESTION_SCREENS) * 100)}%</span>
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-brand-grid">
          <div className="h-full rounded-full bg-brand-gold transition-[width] duration-500 ease-out" style={{ width: `${(screen / QUESTION_SCREENS) * 100}%` }} />
        </div>
      </div>
    ) : null;

  const shell = (children: ReactNode, onBack?: () => void) => (
    <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
      {progressBar}
      {onBack && (
        <button type="button" onClick={onBack} className="press mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-ink-muted transition-colors hover:text-brand-black">
          <ArrowLeft size={16} aria-hidden="true" />
          {t("back")}
        </button>
      )}
      {children}
    </div>
  );

  const heading = (title: string, cls = "") => (
    <h2 className={`font-serif text-2xl text-brand-black text-balance sm:text-3xl ${cls}`}>{title}</h2>
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

  const question = (screenNo: number, key: string, ids: readonly string[], cols: string, next: number, prev: number) =>
    shell(
      <div>
        {heading(t(`${key}.title`), "animate-fade-up")}
        <div className={`mt-7 grid gap-2.5 ${cols}`}>
          {ids.map((id, i) => (
            <OptionButton
              key={id}
              index={i}
              label={t(`${key}.options.${id}`)}
              selected={a[key as keyof AusAnswers] === id}
              onClick={() => set(key as keyof AusAnswers, id as AusAnswers[keyof AusAnswers])}
            />
          ))}
        </div>
        {continueBtn(() => go(next))}
      </div>,
      () => go(prev)
    );

  // ---- Intro ----
  if (screen === 0) {
    const dims = t.raw("intro.dimensions") as { label: string; text: string }[];
    const promiseItems = t("intro.promise").split(" · ");
    // Force the title onto two lines: "...correspond" / "à votre profil ?".
    const introTitle = t("intro.title");
    const splitAt = introTitle.indexOf(" à votre");
    const titleLines =
      splitAt > 0 ? [introTitle.slice(0, splitAt), introTitle.slice(splitAt + 1)] : [introTitle];
    return (
      <div>
        {/* Hero — text left, photo bleeding in from the right, faded into the page */}
        <section className="relative overflow-hidden bg-brand-white">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
            <Image
              src="/images/ausbildung-eval.jpg"
              alt="Un candidat réfléchit à son parcours devant différents métiers d'Ausbildung en Allemagne"
              fill
              priority
              sizes="52vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/15 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-white to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-white to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Mobile photo: above the text */}
            <div className="relative -mx-4 aspect-[16/10] sm:-mx-6 lg:hidden">
              <Image
                src="/images/ausbildung-eval.jpg"
                alt="Un candidat réfléchit à son parcours devant différents métiers d'Ausbildung en Allemagne"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-white to-transparent" />
            </div>

            <div className="max-w-xl py-12 lg:flex lg:min-h-[420px] lg:flex-col lg:justify-center lg:py-16">
              <h1 className="animate-fade-up font-serif text-3xl text-brand-black leading-[1.12] sm:text-4xl">
                {titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="animate-fade-up mt-6 text-lg text-brand-ink-secondary leading-relaxed" style={{ animationDelay: "80ms" }}>
                {t("intro.text")}
              </p>
              <div className="animate-fade-up mt-7 flex flex-wrap gap-2.5 sm:flex-nowrap" style={{ animationDelay: "120ms" }}>
                {promiseItems.map((it) => (
                  <span
                    key={it}
                    className="whitespace-nowrap rounded-full border border-brand-gold/40 bg-brand-gold/[0.05] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-brand-gold-text"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dimensions + CTA */}
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-8">
          {/* Dimensions — two rows of three cards */}
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-ink-muted">
            {t("intro.dimensionsTitle")}
          </p>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dims.map((d, i) => (
            <div
              key={d.label}
              className="animate-fade-up flex flex-col rounded-2xl border border-brand-grid bg-brand-white p-6 transition-colors hover:border-brand-gold/50"
              style={{ animationDelay: `${180 + i * 50}ms` }}
            >
              <span className="font-serif text-4xl leading-none text-brand-gold-text/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-lg text-brand-black">{d.label}</h3>
              <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>

        {/* CTA — left aligned */}
        <div className="mt-10">
          <button
            type="button"
            onClick={() => go(1)}
            className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md bg-brand-gold px-8 font-bold text-brand-black transition-colors duration-200 hover:bg-brand-gold-light"
          >
            {t("intro.cta")}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
        </div>
      </div>
    );
  }

  if (screen === 1) return question(1, "niveau", NIVEAUX, "sm:grid-cols-2", 2, 0);
  if (screen === 2) return question(2, "experience", EXPERIENCES_A, "grid-cols-2", 3, 1);
  if (screen === 3) return question(3, "domaine", DOMAINES_A, "grid-cols-2 sm:grid-cols-3", 4, 2);
  if (screen === 4) return question(4, "style", STYLES, "sm:grid-cols-2", 5, 3);
  if (screen === 5) return question(5, "allemand", ALLEMANDS_A, "grid-cols-3 sm:grid-cols-6", 6, 4);
  if (screen === 6) return question(6, "avenir", AVENIRS, "sm:grid-cols-2", 7, 5);

  // ---- Result ----
  if (screen === 7) {
    const pathSteps = t.raw("pathSteps") as string[];
    const branches = t.raw("afterBranches") as { label: string; text: string }[];
    return shell(
      <div className="animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-ink-muted">{t("result.title")}</p>
        <h2 className="mt-2 font-serif text-3xl text-brand-black sm:text-4xl">{t(`result.profiles.${pt}`)}</h2>
        <div className="mt-6 rounded-2xl border border-brand-gold/40 bg-brand-gold/[0.06] px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink-muted">{t("result.compatLabel")}</p>
          <p className="mt-1 font-serif text-4xl text-brand-gold-text">{compat} %</p>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-brand-grid">
            <div className="h-full rounded-full bg-brand-gold" style={{ width: `${compat}%` }} />
          </div>
        </div>

        {heading(t("result.recoTitle"), "mt-10")}
        <ol className="mt-5 space-y-3">
          {trades.map((tr, i) => (
            <li key={tr.name} className="flex items-center justify-between gap-4 rounded-xl border border-brand-grid bg-brand-white p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-black text-xs font-bold text-brand-white">{i + 1}</span>
                <span className="text-sm font-medium text-brand-black">{tr.name}</span>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="hidden text-xs text-brand-ink-muted sm:inline">
                  {tr.stars >= 5 ? t("result.matchTop") : t("result.matchGood")}
                </span>
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} aria-hidden="true" className={s < tr.stars ? "fill-brand-gold text-brand-gold" : "text-brand-grid"} />
                  ))}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 flex items-start gap-2.5 rounded-lg border border-brand-grid bg-brand-card px-4 py-3.5 text-xs leading-relaxed text-brand-ink-muted">
          <ShieldCheck size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold-text" />
          <span>{t("result.disclaimer")}</span>
        </p>

        {/* Potential path */}
        {heading(t("pathTitle"), "mt-12")}
        <ol className="mt-5 space-y-2">
          {pathSteps.map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${i === pathSteps.length - 1 ? "bg-brand-gold text-brand-black" : "bg-brand-black text-brand-white"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`text-sm ${i === pathSteps.length - 1 ? "font-semibold text-brand-black" : "text-brand-ink-secondary"}`}>{s}</span>
            </li>
          ))}
        </ol>

        {/* Not a limit */}
        <div className="mt-12 rounded-2xl bg-brand-black p-7 text-brand-white sm:p-8">
          <h3 className="font-serif text-xl text-brand-white text-balance">{t("afterTitle")}</h3>
          <p className="mt-3 text-sm text-brand-white/70 leading-relaxed">{t("afterText")}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {branches.map((b) => (
              <div key={b.label} className="rounded-xl border border-brand-white/12 bg-brand-white/[0.04] p-4">
                <p className="text-sm font-semibold text-brand-gold-light">{b.label}</p>
                <p className="mt-1 text-sm text-brand-white/70 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(8)}
          className="press mt-9 inline-flex h-[54px] items-center justify-center gap-2 rounded-md bg-brand-gold px-8 font-bold text-brand-black transition-colors duration-200 hover:bg-brand-gold-light"
        >
          {t("result.cta")}
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>,
      () => go(6)
    );
  }

  // ---- Lead ----
  if (screen === 8) {
    const complete = form.prenom && form.nom && form.whatsapp && form.email && form.pays;
    const onChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
    return shell(
      <div className="animate-fade-up">
        {heading(t("lead.title"))}
        <p className="mt-4 max-w-xl text-brand-ink-secondary leading-relaxed">{t("lead.intro")}</p>
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="mt-7 flex flex-col gap-4">
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
      () => go(7)
    );
  }

  // ---- Final ----
  const wa = whatsappLink(WHATSAPP_NUMBERS[0].e164, t("final.whatsappMessage"));
  return shell(
    <div className="animate-fade-up text-center">
      <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-4 py-1.5 text-sm font-semibold text-brand-gold-text">
        {t("final.badge")}
      </div>
      <h2 className="mt-6 font-serif text-2xl text-brand-black text-balance sm:text-3xl">{t("final.title")}</h2>
      <p className="mx-auto mt-4 max-w-lg text-brand-ink-secondary leading-relaxed">{t("final.text")}</p>
      <p className="mx-auto mt-8 flex max-w-xl items-start gap-2.5 rounded-lg border border-brand-grid bg-brand-card px-4 py-3.5 text-left text-xs leading-relaxed text-brand-ink-muted">
        <ShieldCheck size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold-text" />
        <span>{t("disclaimer")}</span>
      </p>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="press mt-8 inline-flex h-[54px] items-center justify-center gap-2 rounded-md bg-brand-gold px-8 font-bold text-brand-black transition-colors duration-200 hover:bg-brand-gold-light"
      >
        {t("final.whatsappCta")}
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    </div>
  );
}
