import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, HeartPulse, Factory, HardHat, Truck, UtensilsCrossed, Laptop } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { ENT_SECTEURS as S } from "@/lib/entreprises-secteurs-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/entreprises/secteurs",
    locale,
    title: tr(S.heroTitle, locale),
    description: tr(S.heroIntro, locale),
  });
}

const btnOutline =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";
const justify = "text-justify [hyphens:none]";

const sectorIcons: Record<string, LucideIcon> = {
  sante: HeartPulse,
  industrie: Factory,
  btp: HardHat,
  logistique: Truck,
  hotellerie: UtensilsCrossed,
  it: Laptop,
};

export default async function EntreprisesSecteursPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("entreprises"), pathname: "/entreprises" },
          { name: L(S.heroTitle), pathname: "/entreprises/secteurs" },
        ]}
      />

      {/* SECTION 01 — HERO */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
              {L(S.heroKicker)}
            </p>
            <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black text-balance leading-tight">
              {L(S.heroTitle)}
            </h1>
            <p
              className={`animate-fade-up mt-5 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}
              style={{ animationDelay: "80ms" }}
            >
              {L(S.heroIntro)}
            </p>
            <div className="animate-fade-up mt-8" style={{ animationDelay: "140ms" }}>
              <Link href="/entreprises/demande-recrutement" className={btnOutline}>
                {L(S.heroCta)}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — LES SECTEURS */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(S.secKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(S.secTitle)}</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {S.sectors.map((sector, i) => {
              const Icon = sectorIcons[sector.id];
              return (
                <div
                  key={sector.id}
                  className={`animate-fade-up flex flex-col rounded-2xl p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ${
                    i % 2 === 0 ? "bg-brand-card" : "bg-brand-white"
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold-text">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-brand-black leading-snug">{L(sector.title)}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-gold-text">{sector.subtitle}</p>
                  <p className={`mt-3 flex-1 text-sm text-brand-ink-secondary leading-relaxed ${justify}`}>{L(sector.body)}</p>
                  <div className="mt-6 pt-1">
                    <Link
                      href={{ pathname: "/entreprises/demande-recrutement", query: { secteur: sector.queryValue } }}
                      className={btnOutline}
                    >
                      {L(sector.cta)}
                      <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03 — UNE DEMANDE PERSONNALISÉE */}
      <section className="bg-brand-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <h2 className="max-w-3xl font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(S.finalTitle)}</h2>
          <p className="max-w-2xl text-lg text-brand-ink-secondary leading-relaxed">{L(S.finalText)}</p>
          <div className="mt-4">
            <Link href="/entreprises/demande-recrutement" className={btnOutline}>
              {L(S.finalCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
