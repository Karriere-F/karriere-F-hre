import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { SectorGrid } from "@/components/secteurs/sector-grid";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import { SECTEURS_UI, SECTORS_DIPLOME } from "@/lib/secteurs";
import { tr } from "@/lib/sante-metiers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/secteurs/diplome",
    locale,
    title: tr(SECTEURS_UI.routeDiplomeTitle, locale),
    description: tr(SECTEURS_UI.routeDiplomeIntro, locale),
  });
}

export default async function SecteursDiplomePage() {
  const locale = (await getLocale()) as Locale;
  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tr(SECTEURS_UI.home, locale), pathname: "/" },
          { name: tr(SECTEURS_UI.secteurs, locale), pathname: "/secteurs" },
          { name: tr(SECTEURS_UI.routeDiplomeTitle, locale), pathname: "/secteurs/diplome" },
        ]}
      />

      <PageHero
        title={tr(SECTEURS_UI.routeDiplomeTitle, locale)}
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
            <SectorGrid sectors={SECTORS_DIPLOME} locale={locale} santeHref="/secteurs/diplome/sante" />
          </div>
        </div>
      </section>
    </div>
  );
}
