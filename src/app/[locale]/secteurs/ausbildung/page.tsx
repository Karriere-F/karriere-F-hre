import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { SectorGrid } from "@/components/secteurs/sector-grid";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import { SECTEURS_UI, SECTORS_AUSBILDUNG } from "@/lib/secteurs";
import { tr } from "@/lib/sante-metiers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/secteurs/ausbildung",
    locale,
    title: tr(SECTEURS_UI.routeAusbildungTitle, locale),
    description: tr(SECTEURS_UI.routeAusbildungIntro, locale),
  });
}

export default async function SecteursAusbildungPage() {
  const locale = (await getLocale()) as Locale;
  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tr(SECTEURS_UI.home, locale), pathname: "/" },
          { name: tr(SECTEURS_UI.secteurs, locale), pathname: "/secteurs" },
          { name: tr(SECTEURS_UI.routeAusbildungTitle, locale), pathname: "/secteurs/ausbildung" },
        ]}
      />

      <PageHero
        title={tr(SECTEURS_UI.routeAusbildungTitle, locale)}
        subtitle={tr(SECTEURS_UI.chooseSectorTitle, locale)}
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/secteurs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold-text hover:underline"
          >
            <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
            {tr(SECTEURS_UI.backToSecteurs, locale)}
          </Link>

          <div className="mt-6">
            <SectorGrid sectors={SECTORS_AUSBILDUNG} locale={locale} santeHref="/secteurs/ausbildung/sante" />
          </div>
        </div>
      </section>
    </div>
  );
}
