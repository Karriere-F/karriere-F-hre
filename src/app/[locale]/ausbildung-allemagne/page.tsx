import { getLocale, getTranslations } from "next-intl/server";
import { Wrench, HeartPulse, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link, getPathname } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.ausbildung;

export const generateMetadata = () =>
  metadataFromNamespace("ausbildung", "/ausbildung-allemagne");

export default async function AusbildungPage() {
  const t = await getTranslations("ausbildung");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("ausbildung");

  // Cross-page anchors can't use the typed <Link> (it only takes registered pathname
  // keys, never "key#anchor") -- same plain <a> pattern as site-header/site-footer.
  const metiersHref = `${getPathname({ href: "/metiers", locale })}#secteurs`;
  const besoinsHref = `${getPathname({ href: "/entreprises", locale })}#besoins`;

  const quoi = [
    [content.quoi1Title, content.quoi1Body],
    [content.quoi2Title, content.quoi2Body],
    [content.quoi3Title, content.quoi3Body],
  ];

  const conditions = [
    [content.cond1Title, content.cond1Body],
    [content.cond2Title, content.cond2Body],
    [content.cond3Title, content.cond3Body],
    [content.cond4Title, content.cond4Body],
  ];

  const etapes = [
    [content.etape1Title, content.etape1Body],
    [content.etape2Title, content.etape2Body],
    [content.etape3Title, content.etape3Body],
    [content.etape4Title, content.etape4Body],
    [content.etape5Title, content.etape5Body],
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/ausbildung-allemagne" },
        ]}
      />

      <PageHero title={content.title} subtitle={content.subtitle} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8 mb-4">
        <div className="flex flex-wrap gap-4">
          <a
            href={metiersHref}
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaMetiers}
          </a>
          <a
            href="#conditions"
            className="press rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.ctaConditions}
          </a>
        </div>
      </div>

      {/* Ce qu'est une Ausbildung */}
      <AnchorSection
        id="c-est-quoi"
        white
        eyebrow={content.quoiEyebrow}
        title={content.quoiTitle}
        lead={content.quoiLead}
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {quoi.map(([title, body], i) => (
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
      </AnchorSection>

      {/* Conditions */}
      <AnchorSection
        id="conditions"
        eyebrow={content.conditionsEyebrow}
        title={content.conditionsTitle}
        lead={content.conditionsLead}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {conditions.map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up flex gap-3 rounded-lg border border-brand-grid bg-brand-white p-5"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-brand-gold-text font-bold shrink-0">✓</span>
              <div>
                <h4 className="text-brand-black font-medium text-sm mb-1">{title}</h4>
                <p className="text-sm text-brand-ink-secondary">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-brand-ink-muted max-w-3xl">{content.conditionsNote}</p>
      </AnchorSection>

      {/* La langue */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold mb-2">
            {content.langueEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 max-w-2xl">{content.langueTitle}</h2>
          <p className="text-brand-white/75 max-w-2xl mb-3">{content.langueBody1}</p>
          <p className="text-brand-white/60 text-sm max-w-2xl mb-6">{content.langueBody2}</p>
          <Link
            href="/cours-allemand"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.langueCta}
          </Link>
        </div>
      </section>

      {/* Salaire (teaser -> page dédiée) */}
      <AnchorSection
        id="salaire"
        white
        eyebrow={content.salaireEyebrow}
        title={content.salaireTitle}
        lead={content.salaireLead}
      >
        <Link
          href="/ausbildung-allemagne/salaire"
          className="press inline-flex rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
        >
          {content.salaireCta}
        </Link>
      </AnchorSection>

      {/* Étapes */}
      <AnchorSection id="etapes" eyebrow={content.etapesEyebrow} title={content.etapesTitle}>
        <ol className="space-y-4 max-w-3xl">
          {etapes.map(([title, body], i) => (
            <li
              key={title}
              className="animate-fade-up flex gap-5 rounded-xl border border-brand-grid bg-brand-white p-6"
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
      </AnchorSection>

      {/* Après l'Ausbildung : le tremplin -> métier PUIS études */}
      <AnchorSection id="apres" white eyebrow={content.apresEyebrow} title={content.apresTitle}>
        <blockquote className="border-l-4 border-brand-gold pl-5 py-1 max-w-3xl mb-6">
          <p className="font-serif text-xl sm:text-2xl text-brand-black italic">{content.apresQuote}</p>
        </blockquote>
        <p className="text-brand-ink-secondary max-w-3xl mb-8">{content.apresIntro}</p>

        {/* Les deux transformations */}
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mb-8">
          {[
            { Icon: Wrench, kicker: content.path1Kicker, goal: content.path1Goal },
            { Icon: HeartPulse, kicker: content.path2Kicker, goal: content.path2Goal },
          ].map(({ Icon, kicker, goal }, i) => (
            <div
              key={kicker}
              className="lift-on-hover animate-fade-up rounded-xl border border-brand-grid bg-brand-card p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-text mb-4">
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <p className="text-xs uppercase tracking-widest text-brand-ink-muted mb-1">{kicker}</p>
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="text-brand-gold text-2xl font-bold leading-none">
                  →
                </span>
                <span className="font-serif text-2xl text-brand-gold-text">{goal}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Métier + expérience -> accès à l'université (voie des beruflich Qualifizierte) */}
        <div className="rounded-xl border-l-4 border-brand-gold bg-brand-gold/10 p-6 max-w-3xl mb-6">
          <div className="flex items-start gap-3">
            <GraduationCap size={24} strokeWidth={1.75} aria-hidden="true" className="shrink-0 text-brand-gold-text mt-0.5" />
            <div>
              <h3 className="font-serif text-lg text-brand-black mb-1">{content.univTitle}</h3>
              <p className="text-sm text-brand-ink-secondary">{content.univBody}</p>
            </div>
          </div>
        </div>

        {/* Payé, puis étudier */}
        <p className="font-medium text-brand-black max-w-3xl mb-6">{content.payeLine}</p>

        <a
          href={metiersHref}
          className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
        >
          {content.ctaMetiers}
        </a>
      </AnchorSection>

      {/* CTA final */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif max-w-xl">{content.finalTitle}</h2>
          <p className="text-brand-white/80 max-w-lg">{content.finalText}</p>
          <Link
            href="/postuler"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.finalCta}
          </Link>
          <p className="text-sm text-brand-white/50 mt-4">
            {content.employeurNote}{" "}
            <a href={besoinsHref} className="text-brand-gold-light hover:underline font-medium">
              {content.employeurCta}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
