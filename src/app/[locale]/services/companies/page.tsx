import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { StepList } from "@/components/marketing/step-list";
import { Link } from "../../../../../i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import type frMessages from "../../../../../messages/fr.json";

type ServicesCompaniesContent = typeof frMessages.servicesCompanies;

export default async function ServicesCompaniesPage() {
  const t = await getTranslations("servicesCompanies");
  const content = await getPageContent<ServicesCompaniesContent>("servicesCompanies");

  const steps = [1, 2, 3, 4].map((i) => ({
    title: content[`step${i}Title` as "step1Title"],
    body: content[`step${i}Body` as "step1Body"],
  }));

  return (
    <div>
      <PageHero
        title={content.title}
        subtitle={content.subtitle}
        image="/images/services-companies.jpg"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <StepList steps={steps} />
        <div className="mt-10">
          <Link
            href="/employer/signup"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </div>
  );
}
