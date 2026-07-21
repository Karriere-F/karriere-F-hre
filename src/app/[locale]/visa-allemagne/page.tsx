import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link, getPathname } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.visa;

export const generateMetadata = () => metadataFromNamespace("visa", "/visa-allemagne");

export default async function VisaPage() {
  const t = await getTranslations("visa");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("visa");

  // Cross-page anchors can't use the typed <Link> -- plain <a>, same pattern as the
  // other silos.
  const eligibiliteHref = `${getPathname({ href: "/candidats", locale })}#eligibilite`;

  // Each visa card points at the page that owns that route's detail: the skilled-worker
  // page, the Ausbildung silo, and the Chancenkarte child page.
  const types = [
    {
      title: content.type1Title,
      ref: content.type1Ref,
      body: content.type1Body,
      cta: content.type1Cta,
      href: "/visa-allemagne/travailleur-qualifie" as const,
      internal: true as const,
    },
    {
      title: content.type2Title,
      ref: content.type2Ref,
      body: content.type2Body,
      cta: content.type2Cta,
      href: "/ausbildung-allemagne" as const,
      internal: true as const,
    },
    {
      title: content.type3Title,
      ref: content.type3Ref,
      body: content.type3Body,
      cta: content.type3Cta,
      href: "/visa-allemagne/chancenkarte" as const,
      internal: true as const,
    },
  ];

  const roles = [
    [content.role1Title, content.role1Body],
    [content.role2Title, content.role2Body],
    [content.role3Title, content.role3Body],
    [content.role4Title, content.role4Body],
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/visa-allemagne" },
        ]}
      />

      <PageHero title={content.title} subtitle={content.subtitle} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8 mb-4">
        <div className="flex flex-wrap gap-4">
          <a
            href={eligibiliteHref}
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaEval}
          </a>
          <a
            href="#visas"
            className="press rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.ctaTypes}
          </a>
        </div>
      </div>

      {/* Le principe */}
      <AnchorSection id="principe" white eyebrow={content.introEyebrow} title={content.introTitle}>
        <p className="text-brand-ink-secondary max-w-3xl">{content.introLead}</p>
      </AnchorSection>

      {/* Les visas */}
      <AnchorSection
        id="visas"
        eyebrow={content.typesEyebrow}
        title={content.typesTitle}
        lead={content.typesLead}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {types.map((type, i) => (
            <div
              key={type.title}
              className="animate-fade-up flex flex-col rounded-xl border border-brand-grid bg-brand-white p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="text-xs font-medium text-brand-gold-text mb-1">{type.ref}</span>
              <h3 className="font-serif text-lg text-brand-black mb-2">{type.title}</h3>
              <p className="text-sm text-brand-ink-secondary mb-4">{type.body}</p>
              {type.internal ? (
                <Link
                  href={type.href}
                  className="mt-auto text-sm font-medium text-brand-gold-text hover:underline"
                >
                  {type.cta} →
                </Link>
              ) : (
                <a
                  href={type.href}
                  className="mt-auto text-sm font-medium text-brand-gold-text hover:underline"
                >
                  {type.cta} →
                </a>
              )}
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Notre rôle */}
      <AnchorSection
        id="notre-role"
        white
        eyebrow={content.roleEyebrow}
        title={content.roleTitle}
        lead={content.roleLead}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {roles.map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up flex gap-3 rounded-lg border border-brand-grid bg-brand-card p-5"
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
      </AnchorSection>

      {/* Délais */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold mb-2">
            {content.delaisEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 max-w-2xl">{content.delaisTitle}</h2>
          <p className="text-brand-white/75 max-w-2xl">{content.delaisBody}</p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-black max-w-xl">
            {content.finalTitle}
          </h2>
          <p className="text-brand-ink-secondary max-w-lg">{content.finalText}</p>
          <a
            href={eligibiliteHref}
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.finalCta}
          </a>
        </div>
      </section>
    </div>
  );
}
