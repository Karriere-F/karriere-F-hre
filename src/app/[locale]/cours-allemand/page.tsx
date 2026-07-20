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

export default async function CoursAllemandHubPage() {
  const t = await getTranslations("coursAllemand");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("coursAllemand");

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

      {/* Le choix : Full Training vs Fast Track -> pages dédiées */}
      <AnchorSection id="parcours" eyebrow={content.forkEyebrow} title={content.forkTitle} lead={content.forkLead}>
        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/cours-allemand/full-training"
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
          </Link>
          <Link
            href="/cours-allemand/fast-track"
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
          </Link>
        </div>
      </AnchorSection>

      {/* Teaser du test -> page quiz dédiée */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold mb-2">
              {content.quizEyebrow}
            </p>
            <h2 className="text-2xl font-serif mb-2">{content.quizTitle}</h2>
            <p className="text-brand-white/70 text-sm">{content.quizSubtitle}</p>
          </div>
          <Link
            href="/cours-allemand/quel-parcours"
            className="press shrink-0 inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.quizTeaserCta}
          </Link>
        </div>
      </section>

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

      {/* L'inscription */}
      <AnchorSection id="inscription" eyebrow={content.inscriptionEyebrow} title={content.inscriptionTitle}>
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
