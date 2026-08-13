import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { MetierList } from "@/components/secteurs/metier-list";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import { SECTEURS_UI } from "@/lib/secteurs";
import { LOGISTIQUE_AUSBILDUNG_METIERS, LOGISTIQUE_FICHES, LOGISTIQUE_UI, tr } from "@/lib/logistique-metiers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/secteurs/logistique/ausbildung",
    locale,
    title: `${tr(LOGISTIQUE_UI.sector, locale)} : ${tr(SECTEURS_UI.routeAusbildungTitle, locale)}`,
    description: tr(SECTEURS_UI.routeAusbildungIntro, locale),
  });
}

export default async function LogistiqueAusbildungPage() {
  const locale = (await getLocale()) as Locale;
  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tr(SECTEURS_UI.home, locale), pathname: "/" },
          { name: tr(SECTEURS_UI.secteurs, locale), pathname: "/secteurs" },
          { name: tr(LOGISTIQUE_UI.sector, locale), pathname: "/secteurs/logistique" },
          { name: tr(SECTEURS_UI.routeAusbildungTitle, locale), pathname: "/secteurs/logistique/ausbildung" },
        ]}
      />

      <PageHero title={tr(LOGISTIQUE_UI.hubTitle, locale)} subtitle={tr(SECTEURS_UI.routeAusbildungIntro, locale)} />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/secteurs/logistique"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold-text hover:underline"
          >
            <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
            {tr(SECTEURS_UI.backToRoute, locale)}
          </Link>

          <div className="mt-6">
            <MetierList
              metiers={LOGISTIQUE_AUSBILDUNG_METIERS}
              locale={locale}
              hasFiche={(slug) => Boolean(LOGISTIQUE_FICHES[slug])}
              ficheHref={(slug) => ({ pathname: "/metiers/logistique/[slug]", params: { slug } })}
              labels={{ viewFiche: LOGISTIQUE_UI.viewFiche }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
