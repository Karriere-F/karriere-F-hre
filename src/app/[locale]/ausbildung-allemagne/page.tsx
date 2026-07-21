import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link, getPathname } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.ausbildung;
type Href = Parameters<typeof getPathname>[0]["href"];

export const generateMetadata = () => metadataFromNamespace("ausbildung", "/ausbildung-allemagne");

export default async function AusbildungHubPage() {
  const t = await getTranslations("ausbildung");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("ausbildung");

  const besoinsHref = `${getPathname({ href: "/entreprises", locale })}#besoins`;

  const quoi = [
    [content.quoi1Title, content.quoi1Body],
    [content.quoi2Title, content.quoi2Body],
    [content.quoi3Title, content.quoi3Body],
  ];

  const etapes = [
    [content.etape1Title, content.etape1Body],
    [content.etape2Title, content.etape2Body],
    [content.etape3Title, content.etape3Body],
    [content.etape4Title, content.etape4Body],
    [content.etape5Title, content.etape5Body],
  ];

  // The four spokes of the silo -- each a dedicated page, also in the header dropdown.
  const cards: { href: Href; title: string; body: string }[] = [
    { href: "/ausbildung-allemagne/metiers", title: content.card1Title, body: content.card1Body },
    { href: "/ausbildung-allemagne/conditions", title: content.card2Title, body: content.card2Body },
    { href: "/ausbildung-allemagne/salaire", title: content.card3Title, body: content.card3Body },
    { href: "/ausbildung-allemagne/apres-ausbildung", title: content.card4Title, body: content.card4Body },
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
          <Link
            href="/ausbildung-allemagne/metiers"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaMetiers}
          </Link>
          <Link
            href="/ausbildung-allemagne/conditions"
            className="press rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.ctaConditions}
          </Link>
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

      {/* Explorer le silo : 4 pages */}
      <AnchorSection id="explorer" eyebrow={content.exploreEyebrow} title={content.exploreTitle}>
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card, i) => (
            <Link
              key={card.title}
              href={card.href}
              className="lift-on-hover animate-fade-up flex flex-col rounded-xl border border-brand-grid bg-brand-card p-6"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h3 className="font-serif text-lg text-brand-black mb-2">{card.title}</h3>
              <p className="text-sm text-brand-ink-secondary mb-4">{card.body}</p>
              <span aria-hidden="true" className="mt-auto text-brand-gold-text font-bold">
                →
              </span>
            </Link>
          ))}
        </div>
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

      {/* Étapes */}
      <AnchorSection id="etapes" white eyebrow={content.etapesEyebrow} title={content.etapesTitle}>
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
