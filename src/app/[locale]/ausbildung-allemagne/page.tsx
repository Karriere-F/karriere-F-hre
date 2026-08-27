import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import {
  ArrowRight,
  BookOpen,
  Check,
  ClipboardCheck,
  Cog,
  Compass,
  Flag,
  HardHat,
  HeartPulse,
  Send,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/constants";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.ausbildung;

export const generateMetadata = () => metadataFromNamespace("ausbildung", "/ausbildung-allemagne");

const METIER_ICONS = [HeartPulse, UtensilsCrossed, Cog, HardHat];
const HELP_ICONS = [ClipboardCheck, Compass, BookOpen, Send, Users, Flag];

export default async function AusbildungHubPage() {
  const t = await getTranslations("ausbildung");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("ausbildung");
  const hub = content.hub;
  const wa = whatsappLink(WHATSAPP_NUMBERS[0].e164);

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/ausbildung-allemagne" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Image
            src="/images/german-courses.jpg"
            alt="Une salle de formation professionnelle, préparation à l'Ausbildung en Allemagne"
            fill
            priority
            sizes="52vw"
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/15 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-white to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-white to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl py-14 lg:flex lg:min-h-[520px] lg:flex-col lg:justify-center lg:py-20">
            <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black text-balance leading-tight">
              {hub.heroTitle}
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-lg text-lg text-brand-ink-secondary leading-relaxed"
              style={{ animationDelay: "80ms" }}
            >
              {hub.heroSubtitle}
            </p>
            <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "140ms" }}>
              <Link
                href="/evaluation"
                className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black"
              >
                {hub.heroPrimary}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-black/25 px-8 font-bold text-brand-black transition-colors hover:border-brand-gold hover:text-brand-gold-text"
              >
                {hub.heroSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 1 — What is an Ausbildung */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {hub.whatTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-brand-ink-secondary leading-relaxed">{hub.whatLead}</p>

          {/* Key facts — scannable, SEO-friendly */}
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hub.whatFacts.map((f) => (
              <div key={f.label} className="rounded-xl border border-brand-grid bg-brand-card p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold-text">{f.label}</dt>
                <dd className="mt-2 text-brand-black leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {hub.whatPoints.map((p) => (
              <li key={p} className="flex gap-3 text-brand-ink-secondary leading-snug">
                <Check size={18} strokeWidth={2} aria-hidden="true" className="mt-1 shrink-0 text-brand-gold-text" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-brand-gold/30 bg-brand-gold/[0.06] p-7 sm:p-8">
            <p className="font-serif text-xl text-brand-black leading-snug text-balance">{hub.whatMessage}</p>
          </div>
          <p className="mt-4 text-xs text-brand-ink-muted">{hub.whatSource}</p>
        </div>
      </section>

      {/* 2 — Trades */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {hub.metiersTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-brand-ink-secondary leading-relaxed">{hub.metiersLead}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {hub.metiers.map((m, i) => {
              const Icon = METIER_ICONS[i] ?? HeartPulse;
              return (
                <div key={m.sector} className="flex gap-4 rounded-2xl border border-brand-grid bg-brand-white p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold-text">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-brand-black">{m.sector}</h3>
                    <p className="mt-1 text-sm text-brand-ink-secondary leading-relaxed">{m.items}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-brand-ink-muted">{hub.metiersNote}</p>
          <Link
            href="/secteurs"
            className="press mt-8 inline-flex h-[52px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black"
          >
            {hub.metiersCta}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 3 — Timeline */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-2xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-center font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {hub.stepsTitle}
          </h2>
          <ol className="relative mt-12">
            {hub.steps.map((s, i) => {
              const last = i === hub.steps.length - 1;
              return (
                <li key={s.n} className="relative flex gap-5 pb-8 last:pb-0">
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="absolute left-6 top-14 bottom-0 w-px -translate-x-1/2 bg-brand-grid"
                    />
                  )}
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-white font-serif text-lg text-brand-gold-text">
                    {s.n}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-serif text-lg text-brand-black">{s.title}</h3>
                    <p className="mt-1 text-sm text-brand-ink-secondary leading-relaxed">{s.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 4 — Eligibility */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
                {hub.eligTitle}
              </h2>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand-ink-muted">
                {hub.eligIntro}
              </p>
              <ul className="mt-4 space-y-3">
                {hub.eligCriteria.map((c) => (
                  <li key={c} className="flex gap-3 text-brand-ink-secondary leading-snug">
                    <Check size={18} strokeWidth={2} aria-hidden="true" className="mt-1 shrink-0 text-brand-gold-text" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-grid bg-brand-card p-7 sm:p-8 text-center">
              <p className="font-serif text-xl text-brand-black leading-snug text-balance">{hub.eligNote}</p>
              <Link
                href="/evaluation"
                className="press mt-6 inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black"
              >
                {hub.eligCta}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — What Karriere Fähre does */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="max-w-2xl font-serif text-2xl sm:text-3xl text-brand-white text-balance leading-snug">
            {hub.helpTitle}
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {hub.help.map((h, i) => {
              const Icon = HELP_ICONS[i] ?? ClipboardCheck;
              return (
                <div key={h.label}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-white/10 text-brand-gold-light">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-white">{h.label}</h3>
                  <p className="mt-2 text-sm text-brand-white/70 leading-relaxed">{h.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6 — FAQ */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {hub.faqTitle}
          </h2>
          <div className="mt-8 divide-y divide-brand-grid border-y border-brand-grid">
            {hub.faq.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-brand-black [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-brand-gold-text transition-transform duration-200 group-open:rotate-90"
                  />
                </summary>
                <p className="mt-3 text-sm text-brand-ink-secondary leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Final CTA */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-white text-balance leading-snug">
            {hub.finalTitle}
          </h2>
          <p className="mt-4 text-brand-white/70 leading-relaxed">{hub.finalText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/evaluation"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-light transition-colors hover:bg-brand-gold hover:text-brand-black"
            >
              {hub.finalPrimary}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-white/30 px-8 font-bold text-brand-white transition-colors hover:border-brand-white hover:bg-brand-white/10"
            >
              {hub.finalWhatsapp}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
