import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.coursAllemand;

export const generateMetadata = () => metadataFromNamespace("coursAllemand", "/cours-allemand");

export default async function CoursAllemandPage() {
  const t = await getTranslations("coursAllemand");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("coursAllemand");

  // Anchored per level rather than one thin page each: the levels differ by a paragraph
  // and a duration, so four separate URLs would compete for the same query with almost
  // the same words. There is deliberately no C1 -- the course stops at B2.
  const levels = [
    { id: "a1", title: content.a1Title, duree: content.a1Duree, body: content.a1Body },
    { id: "a2", title: content.a2Title, duree: content.a2Duree, body: content.a2Body },
    { id: "b1", title: content.b1Title, duree: content.b1Duree, body: content.b1Body },
    { id: "b2", title: content.b2Title, duree: content.b2Duree, body: content.b2Body },
    { id: "examen", title: content.prepTitle, duree: content.prepDuree, body: content.prepBody },
  ];

  const voies = [
    [content.voie1Title, content.voie1Body],
    [content.voie2Title, content.voie2Body],
    [content.voie3Title, content.voie3Body],
  ];

  const includes = [content.inc1, content.inc2, content.inc3, content.inc4, content.inc5];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/cours-allemand" },
        ]}
      />

      <PageHero title={content.title} subtitle={content.subtitle} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8 mb-4">
        <div className="flex flex-wrap gap-4">
          <Link
            href="/candidate/signup"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaInscription}
          </Link>
          <a
            href="#parcours"
            className="press rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.ctaParcours}
          </a>
        </div>
      </div>

      {/* Le choix : Full Training vs Fast Track */}
      <AnchorSection
        id="parcours"
        eyebrow={content.forkEyebrow}
        title={content.forkTitle}
        lead={content.forkLead}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href="#full-training"
            className="lift-on-hover animate-fade-up flex flex-col rounded-xl border border-brand-grid bg-brand-card p-7"
          >
            <span className="inline-block self-start text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-brand-gold text-brand-black mb-3">
              {content.fullCardBadge}
            </span>
            <h3 className="font-serif text-xl text-brand-black mb-2">{content.fullCardTitle}</h3>
            <p className="text-sm text-brand-ink-secondary mb-4">{content.fullCardBody}</p>
            <span className="mt-auto text-sm font-medium text-brand-gold-text">
              {content.fullCardCta} →
            </span>
          </a>
          <a
            href="#fast-track"
            className="lift-on-hover animate-fade-up flex flex-col rounded-xl bg-brand-black text-brand-white p-7"
            style={{ animationDelay: "60ms" }}
          >
            <span className="inline-block self-start text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full border border-brand-gold text-brand-gold-light mb-3">
              {content.fastCardBadge}
            </span>
            <h3 className="font-serif text-xl mb-2">{content.fastCardTitle}</h3>
            <p className="text-sm text-brand-white/75 mb-4">{content.fastCardBody}</p>
            <span className="mt-auto text-sm font-medium text-brand-gold-light">
              {content.fastCardCta} →
            </span>
          </a>
        </div>
      </AnchorSection>

      {/* Pourquoi le niveau compte */}
      <AnchorSection
        id="pourquoi"
        white
        eyebrow={content.pourquoiEyebrow}
        title={content.pourquoiTitle}
        lead={content.pourquoiLead}
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {voies.map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up rounded-xl border border-brand-grid bg-brand-card p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="font-serif text-lg text-brand-black mb-2">{title}</h3>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-brand-ink-muted max-w-3xl">{content.voiesNote}</p>
      </AnchorSection>

      {/* Full Training : le parcours niveau par niveau */}
      <AnchorSection
        id="full-training"
        eyebrow={content.parcoursEyebrow}
        title={content.parcoursTitle}
        lead={content.parcoursLead}
      >
        <ol className="space-y-4 max-w-3xl">
          {levels.map((level, i) => (
            <li
              key={level.id}
              id={level.id}
              className="animate-fade-up scroll-mt-24 flex gap-5 rounded-xl border border-brand-grid bg-brand-white p-6"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="shrink-0 h-10 w-10 rounded-lg bg-brand-gold text-brand-black font-serif font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                  <h3 className="font-serif text-lg text-brand-black">{level.title}</h3>
                  <span className="text-xs font-medium text-brand-gold-text">{level.duree}</span>
                </div>
                <p className="text-sm text-brand-ink-secondary">{level.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-brand-ink-muted">{content.totalNote}</p>
      </AnchorSection>

      {/* Notre différence */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold mb-2">
            {content.metierEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 max-w-2xl">{content.metierTitle}</h2>
          <p className="text-brand-white/75 max-w-2xl mb-3">{content.metierBody1}</p>
          <p className="text-brand-white/60 text-sm max-w-2xl">{content.metierBody2}</p>
        </div>
      </section>

      {/* Examens */}
      <AnchorSection
        id="examens"
        white
        eyebrow={content.examensEyebrow}
        title={content.examensTitle}
        lead={content.examensLead}
      >
        <Link
          href="/cours-allemand/preparation-examens"
          className="press inline-flex rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
        >
          {content.examensCta}
        </Link>
      </AnchorSection>

      {/* Inscription */}
      <AnchorSection
        id="inscription"
        eyebrow={content.inscriptionEyebrow}
        title={content.inscriptionTitle}
      >
        <ul className="grid gap-3 sm:grid-cols-2 max-w-3xl mb-6">
          {includes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-brand-ink-secondary rounded-lg border border-brand-grid bg-brand-white p-4"
            >
              <span className="text-brand-gold-text font-bold shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
        {/* Pricing never appears on the public site -- this points at contact instead. */}
        <p className="text-sm text-brand-ink-muted">{content.pricingNote}</p>
      </AnchorSection>

      {/* Fast Track : parcours détaillé pour les candidats déjà B2 certifié */}
      <AnchorSection
        id="fast-track"
        white
        eyebrow={content.fastEyebrow}
        title={content.fastTitle}
        lead={content.fastLead}
      >
        {/* Ce que comprend le Fast Track : les modules de préparation professionnelle */}
        <h3 className="font-serif text-lg text-brand-black mb-4">{content.fastInclTitle}</h3>
        <ul className="grid gap-3 sm:grid-cols-2 max-w-3xl mb-12">
          {[content.fastIncl1, content.fastIncl2, content.fastIncl3, content.fastIncl4].map(
            (item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-brand-ink-secondary rounded-lg border border-brand-grid bg-brand-card p-4"
              >
                <span className="text-brand-gold-text font-bold shrink-0">✓</span>
                {item}
              </li>
            )
          )}
        </ul>

        <h3 className="font-serif text-lg text-brand-black mb-4">{content.fastStepsTitle}</h3>
        <ol className="space-y-4 max-w-3xl">
          {[
            [content.fastStep1Title, content.fastStep1Body],
            [content.fastStep2Title, content.fastStep2Body],
            [content.fastStep3Title, content.fastStep3Body],
            [content.fastStep4Title, content.fastStep4Body],
          ].map(([title, body], i) => (
            <li
              key={title}
              className="animate-fade-up flex gap-5 rounded-xl border border-brand-grid bg-brand-card p-6"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="shrink-0 h-10 w-10 rounded-lg bg-brand-gold text-brand-black font-serif font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif text-lg text-brand-black mb-1">{title}</h3>
                <p className="text-sm text-brand-ink-secondary">{body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-6 rounded-lg border-l-4 border-brand-gold bg-brand-gold/10 p-5 max-w-3xl">
          <p className="text-sm text-brand-ink-secondary">{content.fastNote}</p>
        </div>
        <div className="mt-6">
          <Link
            href="/postuler"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.fastCta}
          </Link>
        </div>
      </AnchorSection>

      {/* CTA final */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif max-w-xl">{content.finalTitle}</h2>
          <p className="text-brand-white/80 max-w-lg">{content.finalText}</p>
          <Link
            href="/candidate/signup"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
