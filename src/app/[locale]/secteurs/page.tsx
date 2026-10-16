import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@i18n/navigation";
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
  const hubTitle = tr(SECTEURS_UI.hubTitle, locale);
  const heroTitle = hubTitle.includes(" en Allemagne") ? (
    <>
      {hubTitle.slice(0, hubTitle.indexOf(" en Allemagne"))}
      <br />
      {hubTitle.slice(hubTitle.indexOf(" en Allemagne") + 1)}
    </>
  ) : (
    hubTitle
  );
  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tr(SECTEURS_UI.home, locale), pathname: "/" },
          { name: tr(SECTEURS_UI.secteurs, locale), pathname: "/secteurs" },
        ]}
      />

      <PageHero
        kicker={tr(SECTEURS_UI.hubKicker, locale)}
        title={heroTitle}
        subtitle={tr(SECTEURS_UI.hubIntro, locale)}
        image="/images/secteurs-arbeit.jpg"
        imageAlt={tr(SECTEURS_UI.hubTitle, locale)}
        imagePosition="center 28%"
        imageWidthClass="w-[66%]"
        alignTop
        subtitleGapClass="mt-4 lg:mt-12"
        subtitleClassName="text-justify"
      />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black">
            {tr(SECTEURS_UI.chooseSectorTitle, locale)}
          </h2>
          <div className="mt-10">
            <SectorGrid sectors={SECTORS_ALL} locale={locale} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {tr(SECTEURS_UI.ctaTitle, locale)}
          </h2>
          <p className="mt-4 text-brand-ink-secondary leading-relaxed">
            {tr(SECTEURS_UI.ctaText, locale)}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/evaluation"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {tr(SECTEURS_UI.ctaEvaluer, locale)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {tr(SECTEURS_UI.ctaParler, locale)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
