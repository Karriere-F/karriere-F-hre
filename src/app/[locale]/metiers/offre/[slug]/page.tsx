import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/marketing/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Link, getPathname } from "@i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import { buildMetadata } from "@/lib/seo";
import { OCCUPATION_CATEGORIES, categoryLabel } from "@/lib/occupation-categories";
import type { Locale } from "@i18n/routing";

const TITLE_COLUMN: Record<Locale, "title_fr" | "title_de" | "title_en"> = {
  fr: "title_fr",
  de: "title_de",
  en: "title_en",
};
const DESC_COLUMN: Record<Locale, "description_fr" | "description_de" | "description_en"> = {
  fr: "description_fr",
  de: "description_de",
  en: "description_en",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;
  const supabase = await createClient();
  const { data: occ } = await supabase
    .from("shortage_occupations")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (!occ) return {};

  return buildMetadata({
    pathname: { pathname: "/metiers/offre/[slug]", params: { slug } },
    locale,
    title: occ[TITLE_COLUMN[locale]],
    description: occ[DESC_COLUMN[locale]] ?? occ[TITLE_COLUMN[locale]],
  });
}

export default async function ShortageOccupationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("metiersOffre");
  const tNav = await getTranslations("nav");
  const supabase = await createClient();

  const { data: occ } = await supabase
    .from("shortage_occupations")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (!occ) {
    notFound();
  }

  const title = occ[TITLE_COLUMN[locale]];
  const Icon = OCCUPATION_CATEGORIES[occ.category]?.icon;

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("metiers"), pathname: "/metiers" },
          { name: title, pathname: { pathname: "/metiers/offre/[slug]", params: { slug } } },
        ]}
      />

      <PageHero title={title} subtitle={occ[DESC_COLUMN[locale]] ?? undefined} />

      <section className="bg-brand-white">
        <div className="animate-fade-up mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-4 py-1.5 text-sm font-medium text-brand-gold-text">
            {Icon && <Icon size={16} strokeWidth={2} aria-hidden="true" />}
            {categoryLabel(occ.category, locale)}
          </span>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/postuler"
              className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
            >
              {t("ctaApply")}
            </Link>
            <Link
              href="/metiers"
              className="press rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
            >
              {t("ctaAll")}
            </Link>
          </div>

          <div className="mt-12 rounded-xl border border-brand-grid bg-brand-card p-6">
            <h2 className="font-serif text-lg text-brand-black mb-2">{t("reassureTitle")}</h2>
            <p className="text-sm text-brand-ink-secondary">
              {t("reassureBody")}{" "}
              {/* Cross-page anchor: next-intl's <Link> only accepts registered pathname
                  keys, never "key#anchor" -- same plain <a> pattern as site-footer.tsx. */}
              <a
                href={`${getPathname({ href: "/candidats", locale })}#accompagnement`}
                className="font-medium text-brand-gold-text hover:underline"
              >
                {t("reassureLink")}
              </a>
            </p>
          </div>

          <p className="mt-8 text-sm text-brand-ink-muted">
            {t("employerNote")}{" "}
            <Link href="/entreprises" className="font-medium text-brand-gold-text hover:underline">
              {t("employerLink")}
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
