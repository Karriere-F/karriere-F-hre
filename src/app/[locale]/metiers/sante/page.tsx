import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { ArrowRight, GraduationCap, Stethoscope } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import { SANTE_UI, tr } from "@/lib/sante-metiers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/metiers/sante",
    locale,
    title: tr(SANTE_UI.hubTitle, locale),
    description: tr(SANTE_UI.hubIntro, locale),
  });
}

export default async function SanteHubPage() {
  const locale = (await getLocale()) as Locale;

  const choices = [
    {
      href: "/metiers/sante/ausbildung" as const,
      icon: GraduationCap,
      title: tr(SANTE_UI.pathAusbildungTitle, locale),
      intro: tr(SANTE_UI.pathAusbildungIntro, locale),
    },
    {
      href: "/metiers/sante/diplome" as const,
      icon: Stethoscope,
      title: tr(SANTE_UI.pathDiplomeTitle, locale),
      intro: tr(SANTE_UI.pathDiplomeIntro, locale),
    },
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tr(SANTE_UI.home, locale), pathname: "/" },
          { name: tr(SANTE_UI.metiers, locale), pathname: "/metiers" },
          { name: tr(SANTE_UI.sector, locale), pathname: "/metiers/sante" },
        ]}
      />

      <PageHero title={tr(SANTE_UI.hubTitle, locale)} subtitle={tr(SANTE_UI.hubIntro, locale)} />

      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-5 sm:grid-cols-2">
            {choices.map(({ href, icon: Icon, title, intro }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col rounded-2xl border border-brand-grid bg-brand-card p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-gold/60 hover:shadow-[0_14px_34px_-16px_rgba(17,17,17,0.25)] sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-text transition-colors duration-200 group-hover:bg-brand-gold group-hover:text-brand-black">
                  <Icon size={24} strokeWidth={2} aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-serif text-xl text-brand-black leading-snug sm:text-2xl">
                  {title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-brand-ink-secondary leading-relaxed">{intro}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold-text">
                  {locale === "fr" ? "Choisir" : locale === "de" ? "Auswählen" : "Choose"}
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
