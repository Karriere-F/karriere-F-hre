import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("legal");
  return buildMetadata({
    pathname: "/confidentialite",
    locale,
    title: t("privacyTitle"),
    description: t("privacyPlaceholder"),
  });
}

export default async function ConfidentialitePage() {
  const t = await getTranslations("legal");

  return (
    <div>
      <PageHero title={t("privacyTitle")} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-brand-ink-secondary leading-relaxed">{t("privacyPlaceholder")}</p>
      </div>
    </div>
  );
}
