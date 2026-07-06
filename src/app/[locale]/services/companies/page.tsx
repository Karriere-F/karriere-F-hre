import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { StepList } from "@/components/marketing/step-list";
import { Link } from "../../../../../i18n/navigation";

export default async function ServicesCompaniesPage() {
  const t = await getTranslations("servicesCompanies");

  const steps = [1, 2, 3, 4].map((i) => ({
    title: t(`step${i}Title` as "step1Title"),
    body: t(`step${i}Body` as "step1Body"),
  }));

  return (
    <div>
      <PageHero title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <StepList steps={steps} />
        <div className="mt-10">
          <Link
            href="/employer/signup"
            className="inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </div>
  );
}
