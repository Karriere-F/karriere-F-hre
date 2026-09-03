import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/constants";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.travailler;

export const generateMetadata = () =>
  metadataFromNamespace("travailler", "/travailler-en-allemagne");

export default async function TravaillerPage() {
  const t = await getTranslations("travailler");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("travailler");
  const h = content.hub;
  const wa = whatsappLink(WHATSAPP_NUMBERS[0].e164);

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/travailler-en-allemagne" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] lg:block">
          <Image
            src="/images/services-candidates.jpg"
            alt="Une professionnelle qualifiée prépare son dossier pour un emploi en Allemagne"
            fill
            priority
            sizes="50vw"
            className="object-cover"
            style={{ objectPosition: "center 28%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/15 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-white to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-white to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl py-14 lg:flex lg:min-h-[540px] lg:flex-col lg:justify-center lg:py-20">
            <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black text-balance leading-tight">
              {h.heroTitle}
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-lg text-brand-ink-secondary leading-relaxed"
              style={{ animationDelay: "80ms" }}
            >
              {h.heroSubtitle}
            </p>
            <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "140ms" }}>
              <Link
                href="/evaluation"
                className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black"
              >
                {h.heroPrimary}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/secteurs"
                className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-black/25 px-8 font-bold text-brand-black transition-colors hover:border-brand-gold hover:text-brand-gold-text"
              >
                {h.heroSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {h.whoTitle}
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {h.who.map((w) => (
              <li key={w} className="flex gap-3 rounded-2xl border border-brand-grid bg-brand-white p-5">
                <Check size={20} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold-text" />
                <span className="text-brand-black">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Path */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-2xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-center font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {h.stepsTitle}
          </h2>
          <ol className="relative mt-12">
            {h.steps.map((s, i) => {
              const last = i === h.steps.length - 1;
              return (
                <li key={s.title} className="relative flex gap-5 pb-8 last:pb-0">
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="absolute left-6 top-14 bottom-0 w-px -translate-x-1/2 bg-brand-grid"
                    />
                  )}
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-white font-serif text-lg text-brand-gold-text">
                    {String(i + 1).padStart(2, "0")}
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

      {/* Recognition */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {h.recTitle}
          </h2>
          <p className="mt-5 max-w-2xl text-brand-ink-secondary leading-relaxed">{h.recText}</p>
          <Link
            href="/candidats/reconnaissance-diplomes"
            className="press mt-8 inline-flex h-[52px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black"
          >
            {h.recCta}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.faqTitle}</h2>
          <div className="mt-8 divide-y divide-brand-grid border-y border-brand-grid">
            {h.faq.map((f) => (
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

      {/* Final CTA */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-white text-balance leading-snug">{h.finalTitle}</h2>
          <p className="mt-4 text-brand-white/70 leading-relaxed">{h.finalText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/evaluation"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-light transition-colors hover:bg-brand-gold hover:text-brand-black"
            >
              {h.finalPrimary}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/parcours"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-white/30 px-8 font-bold text-brand-white transition-colors hover:border-brand-white hover:bg-brand-white/10"
            >
              {h.finalSecondary}
            </Link>
          </div>
          <p className="mt-6">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-gold-light hover:underline">
              WhatsApp
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
