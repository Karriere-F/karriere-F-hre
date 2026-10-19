import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { ENT_METHODE as M } from "@/lib/entreprises-methode-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/entreprises/methode",
    locale,
    title: tr(M.heroTitle, locale),
    description: tr(M.heroIntro1, locale),
  });
}

const btnOutline =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";
const justify = "text-justify [hyphens:none]";

export default async function EntreprisesMethodePage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("entreprises"), pathname: "/entreprises" },
          {
            name: L({ fr: "Notre méthode", de: "Unsere Methode", en: "Our method" }),
            pathname: "/entreprises/methode",
          },
        ]}
      />

      {/* SECTION 01 — HERO */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-5xl">
            <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
              {L(M.heroKicker)}
            </p>
            <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-[2.7rem] text-brand-black leading-tight lg:whitespace-nowrap">
              {L(M.heroTitle)}
            </h1>
            <div className="max-w-3xl">
              <p
                className={`animate-fade-up mt-5 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}
                style={{ animationDelay: "80ms" }}
              >
                {L(M.heroIntro1)}
              </p>
              <p
                className={`animate-fade-up mt-3 text-brand-ink-secondary leading-relaxed ${justify}`}
                style={{ animationDelay: "120ms" }}
              >
                {L(M.heroIntro2)}
              </p>
              <div className="animate-fade-up mt-8" style={{ animationDelay: "160ms" }}>
                <Link href="/entreprises/demande-recrutement" className={btnOutline}>
                  {L(M.heroCta)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — LES SIX ÉTAPES */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(M.stepsKicker)}</p>

          <ol className="mt-12 space-y-3">
            {M.steps.map((step, i) => (
              <li
                key={L(step.title)}
                className="animate-fade-up flex flex-col gap-3 rounded-2xl bg-brand-card p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)] sm:flex-row sm:gap-6 sm:p-7"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center gap-4 sm:w-[20rem] sm:shrink-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gold font-serif text-sm font-bold text-brand-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg text-brand-black leading-snug">{L(step.title)}</h3>
                </div>
                <div className="sm:flex-1">
                  <p className="text-sm text-brand-ink-secondary leading-relaxed">{L(step.body)}</p>
                  <p className="mt-4 rounded-md bg-brand-gold/10 px-4 py-2.5 text-sm text-brand-ink-secondary leading-relaxed">
                    <span className="font-semibold text-brand-gold-text">{L(M.contributionLabel)} </span>
                    {L(step.contribution)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 03 — DES RESPONSABILITÉS CLAIRES */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(M.respKicker)}</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Colonne A — Karriere Fähre */}
            <div className="animate-fade-up flex flex-col rounded-2xl bg-brand-white p-8 shadow-[0_6px_24px_rgba(17,17,17,0.05)] sm:p-10">
              <h3 className="font-serif text-2xl text-brand-black leading-snug">{L(M.respColALabel)}</h3>
              <ul className="mt-6 space-y-4">
                {M.respColAItems.map((item) => (
                  <li key={L(item)} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-text">
                      <Check size={20} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <p className="text-brand-ink-secondary leading-relaxed">{L(item)}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne B — Votre entreprise */}
            <div
              className="animate-fade-up flex flex-col rounded-2xl bg-brand-white p-8 shadow-[0_6px_24px_rgba(17,17,17,0.05)] sm:p-10"
              style={{ animationDelay: "80ms" }}
            >
              <h3 className="font-serif text-2xl text-brand-black leading-snug">{L(M.respColBLabel)}</h3>
              <ul className="mt-6 space-y-4">
                {M.respColBItems.map((item) => (
                  <li key={L(item)} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-text">
                      <Check size={20} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <p className="text-brand-ink-secondary leading-relaxed">{L(item)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — TRANSPARENCE & SUIVI */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(M.transpKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(M.transpTitle)}</h2>
            <p className={`mt-4 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(M.transpIntro)}</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {M.transpItems.map((item, i) => (
              <div
                key={L(item.label)}
                className="animate-fade-up rounded-2xl bg-brand-card p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)]"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <h3 className="font-serif text-lg text-brand-black leading-snug">{L(item.label)}</h3>
                <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{L(item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — CTA FINAL */}
      <section className="bg-brand-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="max-w-2xl font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(M.finalTitle)}</h2>
          <p className="max-w-2xl text-lg text-brand-ink-secondary leading-relaxed">{L(M.finalText)}</p>
          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/entreprises/demande-recrutement" className={btnOutline}>
              {L(M.finalCtaPrimary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/entreprises" className="font-semibold text-brand-gold-text underline-offset-4 hover:underline">
              {L(M.finalCtaSecondary)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
