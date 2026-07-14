import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { StepList } from "@/components/marketing/step-list";
import { SubNavLinks } from "@/components/marketing/sub-nav-links";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.candidats;

export const generateMetadata = () => metadataFromNamespace("candidats", "/candidats");

export default async function CandidatsPage() {
  const t = await getTranslations("candidats");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("candidats");

  const steps = [1, 2, 3, 4].map((i) => ({
    title: content[`step${i}Title` as "step1Title"],
    body: content[`step${i}Body` as "step1Body"],
  }));

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("candidats"), pathname: "/candidats" },
        ]}
      />
      <PageHero title={content.title} subtitle={content.subtitle} image="/images/services-candidates.jpg" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <StepList steps={steps} />
        <div className="mt-10 mb-16">
          <Link
            href="/candidate/signup"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.cta}
          </Link>
        </div>
        <SubNavLinks
          links={[
            { href: "/candidats/comment-ca-marche", label: t("linkComment") },
            { href: "/candidats/eligibilite", label: t("linkEligibilite") },
            { href: "/candidats/reconnaissance-diplomes", label: t("linkDiplomes") },
            { href: "/candidats/vivre-en-allemagne", label: t("linkVivre") },
            { href: "/candidats/faq", label: t("linkFaq") },
            { href: "/candidats/formations", label: t("linkFormations") },
            { href: "/candidats/metiers", label: t("linkMetiers") },
          ]}
        />
      </div>
    </div>
  );
}
