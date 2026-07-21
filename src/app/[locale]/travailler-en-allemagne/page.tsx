import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link, getPathname } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
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

  // "Vivre en Allemagne" still lives under /candidats -- linked, not moved, so this is a
  // cross-page href, not the typed <Link>.
  const vivreHref = getPathname({ href: "/candidats/vivre-en-allemagne", locale });

  type Href = Parameters<typeof getPathname>[0]["href"];
  const conditions: { title: string; body: string; linkLabel: string; href: Href }[] = [
    {
      title: content.cond1Title,
      body: content.cond1Body,
      linkLabel: content.cond1LinkLabel,
      href: "/candidats/reconnaissance-diplomes",
    },
    {
      title: content.cond2Title,
      body: content.cond2Body,
      linkLabel: content.cond2LinkLabel,
      href: "/cours-allemand",
    },
    {
      title: content.cond3Title,
      body: content.cond3Body,
      linkLabel: content.cond3LinkLabel,
      href: "/visa-allemagne/chancenkarte",
    },
    {
      title: content.cond4Title,
      body: content.cond4Body,
      linkLabel: content.cond4LinkLabel,
      href: "/visa-allemagne/travailleur-qualifie",
    },
  ];

  // The three cards fan out to where each subtopic already lives: /metiers owns the
  // shortage-occupation list, the salaires child is new, and vivre stays under /candidats.
  const cards = [
    {
      title: content.card1Title,
      body: content.card1Body,
      cta: content.card1Cta,
      href: "/metiers" as const,
      internal: true as const,
    },
    {
      title: content.card2Title,
      body: content.card2Body,
      cta: content.card2Cta,
      href: "/travailler-en-allemagne/salaires" as const,
      internal: true as const,
    },
    {
      title: content.card3Title,
      body: content.card3Body,
      cta: content.card3Cta,
      href: vivreHref,
      internal: false as const,
    },
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/travailler-en-allemagne" },
        ]}
      />

      <PageHero title={content.title} subtitle={content.subtitle} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8 mb-4">
        <div className="flex flex-wrap gap-4">
          <a
            href="#conditions"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaConditions}
          </a>
          <Link
            href="/metiers"
            className="press rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.ctaMetiers}
          </Link>
        </div>
      </div>

      {/* Contexte */}
      <AnchorSection
        id="contexte"
        white
        eyebrow={content.contexteEyebrow}
        title={content.contexteTitle}
        lead={content.contexteLead}
      >
        <p className="text-brand-ink-secondary max-w-3xl">{content.contexteBody}</p>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl">
          {[
            [content.stat1Num, content.stat1Label],
            [content.stat2Num, content.stat2Label],
            [content.stat3Num, content.stat3Label],
          ].map(([num, label], i) => (
            <div
              key={label}
              className="animate-fade-up rounded-xl border border-brand-grid bg-brand-card p-5"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <dt className="font-serif text-3xl text-brand-gold-text">{num}</dt>
              <dd className="mt-1 text-sm text-brand-ink-secondary">{label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-xs text-brand-ink-muted max-w-3xl">{content.contexteNote}</p>
      </AnchorSection>

      {/* Conditions d'éligibilité */}
      <AnchorSection
        id="conditions"
        eyebrow={content.condEyebrow}
        title={content.condTitle}
        lead={content.condLead}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {conditions.map((c, i) => (
            <div
              key={c.title}
              className="animate-fade-up flex flex-col rounded-xl border border-brand-grid bg-brand-white p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="h-8 w-8 shrink-0 rounded-lg bg-brand-gold text-brand-black font-serif font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <h3 className="font-serif text-lg text-brand-black">{c.title}</h3>
              </div>
              <p className="text-sm text-brand-ink-secondary mb-4">{c.body}</p>
              <Link
                href={c.href}
                className="mt-auto text-sm font-medium text-brand-gold-text hover:underline"
              >
                {c.linkLabel} →
              </Link>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Trois cartes */}
      <AnchorSection id="explorer" white eyebrow={content.exploreEyebrow} title={content.exploreTitle}>
        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="animate-fade-up flex flex-col rounded-xl border border-brand-grid bg-brand-white p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="font-serif text-lg text-brand-black mb-2">{card.title}</h3>
              <p className="text-sm text-brand-ink-secondary mb-4">{card.body}</p>
              {card.internal ? (
                <Link
                  href={card.href}
                  className="mt-auto text-sm font-medium text-brand-gold-text hover:underline"
                >
                  {card.cta} →
                </Link>
              ) : (
                <a
                  href={card.href}
                  className="mt-auto text-sm font-medium text-brand-gold-text hover:underline"
                >
                  {card.cta} →
                </a>
              )}
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Cadre légal / droits */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold mb-2">
            {content.cadreEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 max-w-2xl">{content.cadreTitle}</h2>
          <p className="text-brand-white/75 max-w-2xl mb-3">{content.cadreBody1}</p>
          <p className="text-brand-white/60 text-sm max-w-2xl">{content.cadreBody2}</p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-black max-w-xl">
            {content.finalTitle}
          </h2>
          <p className="text-brand-ink-secondary max-w-lg">{content.finalText}</p>
          <Link
            href="/postuler"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
