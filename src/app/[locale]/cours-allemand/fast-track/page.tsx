import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { FAST_PAGE as F } from "@/lib/fast-track-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/cours-allemand/fast-track",
    locale,
    title: tr(F.heroTitle, locale),
    description: tr(F.heroIntro, locale),
  });
}

const btnOutline =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";
const justify = "text-justify [hyphens:none]";

export default async function FastTrackPage() {
  const tNav = await getTranslations("nav");
  const tCours = await getTranslations("coursAllemand");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);

  const faqItems = F.faq.map((f) => ({ q: L(f.q), a: L(f.a) }));

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tCours("title"), pathname: "/cours-allemand" },
          { name: "Fast Track", pathname: "/cours-allemand/fast-track" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* SECTION 1 — HERO */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Titre pleine largeur, au-dessus de l'image */}
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {L(F.heroKicker)}
          </p>
          <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] text-brand-black text-balance leading-tight">
            {L(F.heroTitle)}
          </h1>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
            <div>
              <p
                className={`animate-fade-up text-lg text-brand-ink-secondary leading-relaxed ${justify}`}
                style={{ animationDelay: "80ms" }}
              >
                {L(F.heroIntro)}
              </p>
              <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "140ms" }}>
                <Link href="/cours-allemand/fast-track/inscription" className={btnOutline}>
                  {L(F.heroCtaPrimary)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="#concept" className={btnOutline}>
                  {L(F.heroCtaSecondary)}
                  <ArrowDown size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Bannière du parcours Fast Track, fondue dans le décor */}
            <div className="animate-fade-up relative" style={{ animationDelay: "160ms" }}>
              <Image
                src="/images/fast-track-hero.webp"
                alt="Le parcours Fast Track : Integrationskurs, Fachsprache, VR-Training, Vorstellungsgespräch-Training, Bewerbungsunterlagen, Unternehmenskontakt, Visum & Anerkennung, puis carrière en Allemagne"
                width={2000}
                height={751}
                priority
                unoptimized
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-brand-card to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LE CONCEPT */}
      <section id="concept" className="scroll-mt-24 bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.conceptKicker)}</p>
          <h2 className="mt-3 max-w-4xl font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">
            {L(F.conceptTitleL1)}
            <br />
            {L(F.conceptTitleL2)}
          </h2>
          <div className="mt-4 space-y-4">
            <p className={`text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.conceptText1)}</p>
            <p className={`text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.conceptText2)}</p>
          </div>

          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.includesLabel)}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {F.includes.map((item, i) => (
              <div
                key={L(item.label)}
                className="animate-fade-up flex flex-col rounded-2xl bg-brand-card p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="font-serif text-2xl font-bold text-brand-gold-text">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-lg text-brand-black leading-snug">{L(item.label)}</h3>
                <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{L(item.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — PARCOURS */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.pathKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug lg:whitespace-nowrap">{L(F.pathTitle)}</h2>

          <ol className="mt-12 space-y-3">
            {F.pathSteps.map((step, i) => (
              <li
                key={L(step.title)}
                className="animate-fade-up flex flex-col gap-3 rounded-2xl bg-brand-white p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)] sm:flex-row sm:gap-6 sm:p-7"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center gap-4 sm:w-[20rem] sm:shrink-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gold font-serif text-sm font-bold text-brand-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg text-brand-black leading-snug">{L(step.title)}</h3>
                </div>
                <p className="text-sm text-brand-ink-secondary leading-relaxed sm:flex-1">{L(step.body)}</p>
              </li>
            ))}
          </ol>
          <p className={`mt-8 text-sm text-brand-ink-muted leading-relaxed ${justify}`}>{L(F.pathNote)}</p>
        </div>
      </section>

      {/* SECTION 4 — POUR QUELS PROFILS */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.profilesKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-brand-black leading-snug lg:whitespace-nowrap">{L(F.profilesTitle)}</h2>
          <p className={`mt-4 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(F.profilesLead)}</p>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {F.profilesItems.map((item, i) => (
              <li
                key={L(item)}
                className="relative overflow-hidden rounded-2xl bg-brand-card p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-4 font-serif text-[5rem] font-bold leading-none text-brand-gold/10"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative font-serif text-2xl font-bold text-brand-gold-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="relative mt-3 text-brand-ink-secondary leading-relaxed">{L(item)}</p>
              </li>
            ))}
          </ol>
          <p className={`mt-8 text-sm text-brand-ink-muted leading-relaxed ${justify}`}>{L(F.profilesNote)}</p>
        </div>
      </section>

      {/* SECTION 5 — CTA CANDIDATER */}
      <section className="bg-brand-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(F.finalKicker)}</p>
          <h2 className="max-w-3xl font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(F.finalTitle)}</h2>
          <p className="max-w-2xl text-lg text-brand-ink-secondary leading-relaxed">{L(F.finalText)}</p>
          <div className="mt-4">
            <Link href="/cours-allemand/fast-track/inscription" className={btnOutline}>
              {L(F.finalCtaPrimary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-2 text-sm italic text-brand-ink-muted">{L(F.finalNote)}</p>
        </div>
      </section>

      {/* SECTION 6 — QUESTIONS FRÉQUENTES */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-center font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(F.faqTitle)}</h2>
          <div className="mx-auto mt-8 max-w-4xl space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={item.q}
                className="animate-fade-up group rounded-lg bg-brand-card p-5 shadow-[0_6px_24px_rgba(17,17,17,0.05)]"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-brand-black marker:content-none">
                  {item.q}
                  <span className="shrink-0 text-brand-gold-text transition-transform duration-150 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className={`mt-3 text-sm leading-relaxed text-brand-ink-secondary ${justify}`}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
