import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { SectorGrid } from "@/components/secteurs/sector-grid";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import { SECTEURS_UI, SECTORS_ALL } from "@/lib/secteurs";
import { tr } from "@/lib/sante-metiers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/secteurs",
    locale,
    title: tr(SECTEURS_UI.hubTitle, locale),
    description: tr(SECTEURS_UI.hubIntro, locale),
  });
}

export default async function SecteursPage() {
  const locale = (await getLocale()) as Locale;
  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tr(SECTEURS_UI.home, locale), pathname: "/" },
          { name: tr(SECTEURS_UI.secteurs, locale), pathname: "/secteurs" },
        ]}
      />

      <PageHero title={tr(SECTEURS_UI.hubTitle, locale)} subtitle={tr(SECTEURS_UI.hubIntro, locale)} />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectorGrid sectors={SECTORS_ALL} locale={locale} />
        </div>
      </section>
    </div>
  );
}
