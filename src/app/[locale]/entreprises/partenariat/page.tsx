import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { ArrowRight, ArrowDown, Handshake, Target, TrendingUp } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { PartnershipRequestForm } from "@/components/entreprises/partnership-request-form";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { ENT_PARTENARIAT as E } from "@/lib/entreprises-partenariat-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/entreprises/partenariat",
    locale,
    title: tr(E.heroTitle, locale),
    description: tr(E.heroIntro[0], locale),
  });
}

const btnOutline =
  "press inline-flex min-h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-6 py-3 text-center font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";
const btnOutlineDark =
  "press inline-flex min-h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-6 py-3 text-center font-bold text-brand-gold-light transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";
const justify = "text-justify-hyphen";

const PRINCIPLE_ICONS = [Handshake, Target, TrendingUp];

export default async function EntreprisesPartenariatPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);

  const f = E.form;
  const formLabels = {
    sec1: L(f.sec1),
    sec2: L(f.sec2),
    sec3: L(f.sec3),
    unternehmen: L(f.unternehmen),
    branche: L(f.branche),
    website: L(f.website),
    ansprechpartner: L(f.ansprechpartner),
    position: L(f.position),
    email: L(f.email),
    telefon: L(f.telefon),
    interesse: L(f.interesse),
    interesseOptions: f.interesseOptions.map((o) => L(o)),
    nachricht: L(f.nachricht),
    consent: L(f.consent),
    consentNote: L(f.consentNote),
    submit: L(f.submit),
    submitting: L(f.submitting),
    required: L(f.required),
    error: L(f.error),
    errorConsent: L(f.errorConsent),
    successTitle: L(f.successTitle),
    successText: L(f.successText),
  };

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("entreprises"), pathname: "/entreprises" },
          { name: L(E.heroTitle), pathname: "/entreprises/partenariat" },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:pt-20 lg:pb-24">
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {L(E.heroKicker)}
          </p>
          <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black leading-tight">
            {L(E.heroTitle)}
          </h1>
          <p className="animate-fade-up mt-3 font-serif text-xl text-brand-gold-text sm:text-2xl" style={{ animationDelay: "60ms" }}>
            {L(E.heroTagline)}
          </p>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div>
              {E.heroIntro.map((p, i) => (
                <p
                  key={i}
                  className={`animate-fade-up text-brand-ink-secondary leading-relaxed ${justify} ${i === 0 ? "text-lg" : "mt-3"}`}
                  style={{ animationDelay: `${80 + i * 40}ms` }}
                >
                  {L(p)}
                </p>
              ))}
              <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "220ms" }}>
                <a href="#anfrage" className={btnOutline}>
                  {L(E.heroCta)}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a href="#augenhoehe" className={btnOutline}>
                  {L(E.augenTitle)}
                  <ArrowDown size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="animate-fade-up relative lg:-mt-16" style={{ animationDelay: "120ms" }}>
              <Image
                src="/images/partenariat-hero.webp"
                alt={L({
                  fr: "Réunion d'affaires entre une entreprise partenaire et l'équipe de Karriere Fähre autour d'une table",
                  de: "Geschäftstreffen zwischen einem Partnerunternehmen und dem Team von Karriere Fähre am Tisch",
                  en: "Business meeting between a partner company and the Karriere Fähre team around a table",
                })}
                width={1671}
                height={941}
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[14%] bg-gradient-to-r from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[14%] bg-gradient-to-l from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-brand-card to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PARTENARIAT D'ÉGAL À ÉGAL */}
      <section id="augenhoehe" className="scroll-mt-24 bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div>
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.augenKicker)}</p>
            <h2 className="animate-fade-up mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(E.augenTitle)}</h2>
            <div className="mt-6 space-y-4">
              {E.augenBody.map((p, i) => (
                <p key={i} className={`animate-fade-up text-brand-ink-secondary leading-relaxed ${justify}`} style={{ animationDelay: `${i * 60}ms` }}>{L(p)}</p>
              ))}
            </div>
            <p className="animate-fade-up mt-6 font-medium text-brand-black">{L(E.principlesLead)}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {E.principles.map((pr, i) => {
              const Icon = PRINCIPLE_ICONS[i] ?? Handshake;
              return (
                <div
                  key={i}
                  className="group animate-fade-up flex flex-col rounded-2xl bg-brand-card p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(17,17,17,0.12)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/12 text-brand-gold-text transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-black">
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-brand-black leading-snug">{L(pr.title)}</h3>
                  <p className="mt-3 text-sm text-brand-ink-secondary leading-relaxed">{L(pr.body)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — CE QUI DISTINGUE */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.distinctKicker)}</p>
            <h2 className="animate-fade-up mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(E.distinctTitle)}</h2>
            <div className="mt-6 space-y-4">
              {E.distinctBody.map((p, i) => (
                <p key={i} className={`animate-fade-up text-brand-ink-secondary leading-relaxed ${justify}`} style={{ animationDelay: `${i * 60}ms` }}>{L(p)}</p>
              ))}
            </div>
          </div>

          <div className="animate-fade-up mt-10 max-w-4xl rounded-2xl bg-brand-black p-8 text-brand-white shadow-[0_12px_40px_rgba(17,17,17,0.14)] sm:p-10">
            <p className="font-serif text-2xl leading-snug text-brand-gold-light">{L(E.distinctBold)}</p>
            <p className={`mt-3 text-brand-white/80 leading-relaxed ${justify}`}>{L(E.distinctAfter)}</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA FINAL */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-light">{L(E.finalKicker)}</p>
          <h2 className="animate-fade-up max-w-3xl font-serif text-2xl sm:text-3xl lg:text-4xl leading-snug">{L(E.finalTitle)}</h2>
          <div className="animate-fade-up max-w-2xl space-y-3">
            {E.finalBody.map((p, i) => (
              <p key={i} className="text-lg text-brand-white/80 leading-relaxed">{L(p)}</p>
            ))}
            <p className="text-lg text-brand-white/80 leading-relaxed">{L(E.finalLead)}</p>
          </div>
          <p className="animate-fade-up mt-2 font-serif text-xl text-brand-gold-light">{L(E.finalBold)}</p>
          <div className="animate-fade-up mt-4">
            <a href="#anfrage" className={btnOutlineDark}>
              {L(E.finalCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FORMULAIRE DE PARTENARIAT */}
      <section id="anfrage" className="scroll-mt-24 bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.formKicker)}</p>
            <h2 className="animate-fade-up mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(E.formTitle)}</h2>
            <p className="animate-fade-up mx-auto mt-4 max-w-2xl text-brand-ink-secondary leading-relaxed">{L(E.formIntro)}</p>
          </div>
          <div className="animate-fade-up mt-10">
            <PartnershipRequestForm labels={formLabels} />
          </div>
        </div>
      </section>
    </div>
  );
}
