import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { StepList } from "@/components/marketing/step-list";
import { SubNavLinks } from "@/components/marketing/sub-nav-links";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.entreprises;

export default async function EntreprisesPage() {
  const t = await getTranslations("entreprises");
  const content = await getPageContent<Content>("entreprises");

  const steps = [1, 2, 3, 4].map((i) => ({
    title: content[`step${i}Title` as "step1Title"],
    body: content[`step${i}Body` as "step1Body"],
  }));

  return (
    <div>
      <PageHero title={content.title} subtitle={content.subtitle} image="/images/services-companies.jpg" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <StepList steps={steps} />
        <div className="mt-10 mb-16">
          <Link
            href="/employer/signup"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.cta}
          </Link>
        </div>
        <SubNavLinks
          links={[
            { href: "/entreprises/services", label: t("linkServices") },
            { href: "/entreprises/profils", label: t("linkProfils") },
            { href: "/entreprises/partenariat", label: t("linkPartenariat") },
            { href: "/entreprises/processus", label: t("linkProcessus") },
            { href: "/entreprises/pourquoi-afrique-centrale", label: t("linkPourquoi") },
            { href: "/entreprises/demande", label: t("linkDemande") },
          ]}
        />
      </div>
    </div>
  );
}
