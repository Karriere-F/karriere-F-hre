import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { ConditionsSchema } from "@/components/ausbildung/conditions-schema";
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

      <PageHero
        title={content.condPageTitle}
        subtitle={content.condPageSub}
        image="/images/condition-ausbildung.jpg"
        imageAlt="Un candidat prépare son dossier d'Ausbildung, mur « Bildung. Zukunft. Perspektiven. »"
        imagePosition="center 40%"
      />

      <AnchorSection
        id="conditions"
        eyebrow={content.conditionsEyebrow}
        title={content.conditionsTitle}
        lead={content.conditionsLead}
      >
        <ConditionsSchema
          items={conditions.map(([title, body]) => ({ title, body }))}
        />
        <p className="mt-8 max-w-3xl text-sm text-brand-ink-muted">{content.conditionsNote}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/ausbildung-allemagne/metiers"
            className="press inline-flex rounded-full border border-brand-gold px-6 py-3 text-brand-gold-text font-bold hover:bg-brand-gold hover:text-brand-black transition-colors duration-150"
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
