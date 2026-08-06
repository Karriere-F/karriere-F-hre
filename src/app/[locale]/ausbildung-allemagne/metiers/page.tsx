import { getLocale, getTranslations } from "next-intl/server";
import { HeartPulse, UtensilsCrossed, Wrench, Cog, Cpu, Truck, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link } from "@i18n/navigation";
import { metadataFromNamespace } from "@/lib/seo";
import { METIER_CATEGORIES } from "@/lib/metier-categories";
import type { Locale } from "@i18n/routing";

export const generateMetadata = () =>
  metadataFromNamespace("ausbildungMetiers", "/ausbildung-allemagne/metiers");

const SECTOR_ICONS: Record<string, LucideIcon> = {
  "sante-soins": HeartPulse,
  "hotellerie-restauration": UtensilsCrossed,
  "btp-artisanat": Wrench,
  "industrie-technique": Cog,
  informatique: Cpu,
  "transport-logistique": Truck,
};

export default async function AusbildungMetiersPage() {
  const t = await getTranslations("ausbildungMetiers");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;

  const labels = {
    duration: locale === "fr" ? "Durée" : locale === "de" ? "Dauer" : "Duration",
    qualifications:
      locale === "fr" ? "Prérequis" : locale === "de" ? "Voraussetzungen" : "Requirements",
    remuneration:
      locale === "fr" ? "Rémunération" : locale === "de" ? "Vergütung" : "Pay during training",
    note:
      locale === "fr"
        ? "Métiers formés en alternance (Ausbildung). Montants indicatifs bruts, avant impôts, susceptibles de varier selon la région, l'entreprise et la convention collective."
        : locale === "de"
          ? "Berufe der dualen Ausbildung. Angaben brutto, indikativ, können je nach Region, Betrieb und Tarifvertrag variieren."
          : "Trades taught through dual training (Ausbildung). Indicative gross amounts, before tax; they can vary by region, employer, and collective agreement.",
  };

  // Only genuine dual apprenticeships -- entry-level roles, add-on certifications and
  // now-university tracks (flagged ausbildung: false in metier-categories) are excluded.
  const sectors = Object.entries(METIER_CATEGORIES)
    .map(([slug, cat]) => ({ slug, cat, jobs: cat.jobs.filter((j) => j.ausbildung) }))
    .filter((s) => s.jobs.length > 0);

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("ausbildung"), pathname: "/ausbildung-allemagne" },
          { name: t("title"), pathname: "/ausbildung-allemagne/metiers" },
        ]}
      />

      <PageHero title={t("title")} subtitle={t("subtitle")} />

      <AnchorSection id="secteurs" eyebrow={t("eyebrow")} title={t("sectionTitle")} lead={t("sectionLead")}>
        <div className="space-y-5">
          {sectors.map(({ slug, cat, jobs }, i) => {
            const Icon = SECTOR_ICONS[slug];
            return (
              <article
                key={slug}
                id={slug}
                className="animate-fade-up lift-on-hover rounded-xl border border-brand-grid bg-brand-white p-6"
                style={{ animationDelay: `${Math.min(i, 6) * 40}ms` }}
              >
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <span className="shrink-0 h-12 w-12 rounded-xl bg-brand-card border border-brand-grid flex items-center justify-center">
                    <Icon size={24} strokeWidth={2} className="text-brand-gold-text" aria-hidden="true" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg text-brand-black">{cat.title[locale]}</h3>
                    <p className="text-sm text-brand-ink-secondary">{cat.tagline[locale]}</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {jobs.map((job) => (
                    <div key={job.de} className="rounded-lg border border-brand-grid bg-brand-card p-4">
                      <h4 className="text-sm font-medium text-brand-black mb-2">
                        {job.label[locale]}{" "}
                        <em className="not-italic text-brand-gold-text">· {job.de}</em>
                      </h4>
                      <dl className="space-y-1.5 text-xs text-brand-ink-secondary">
                        <div>
                          <dt className="inline font-semibold text-brand-ink">{labels.duration} : </dt>
                          <dd className="inline">{job.duration[locale]}</dd>
                        </div>
                        <div>
                          <dt className="inline font-semibold text-brand-ink">{labels.qualifications} : </dt>
                          <dd className="inline">{job.qualifications[locale]}</dd>
                        </div>
                        <div>
                          <dt className="inline font-semibold text-brand-ink">{labels.remuneration} : </dt>
                          <dd className="inline">{job.remuneration[locale]}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-brand-ink-muted italic max-w-3xl">{labels.note}</p>
        <div className="mt-8">
          <Link
            href="/postuler"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {t("cta")}
          </Link>
        </div>
      </AnchorSection>
    </div>
  );
}
