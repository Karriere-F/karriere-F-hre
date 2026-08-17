import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.ausbildung;

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("ausbildung");
  return buildMetadata({
    pathname: "/ausbildung-allemagne/conditions",
    locale,
    title: t("condPageTitle"),
    description: t("condPageSub"),
  });
}

export default async function AusbildungConditionsPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("ausbildung");

  const conditions = [
    [content.cond1Title, content.cond1Body],
    [content.cond2Title, content.cond2Body],
    [content.cond3Title, content.cond3Body],
    [content.cond4Title, content.cond4Body],
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("ausbildung"), pathname: "/ausbildung-allemagne" },
          { name: tNav("ausConditions"), pathname: "/ausbildung-allemagne/conditions" },
        ]}
      />

      <PageHero title={content.condPageTitle} subtitle={content.condPageSub} />

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
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/ausbildung-allemagne/metiers"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaMetiers}
          </Link>
          <Link
            href="/cours-allemand"
            className="press inline-flex rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.langueCta}
          </Link>
        </div>
      </AnchorSection>
    </div>
  );
}
