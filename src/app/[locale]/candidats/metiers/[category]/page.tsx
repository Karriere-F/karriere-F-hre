import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/marketing/page-hero";
import { Link } from "@i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import { METIER_CATEGORIES, type MetierCategorySlug } from "@/lib/metier-categories";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";

const TITLE_COLUMN: Record<Locale, "title_fr" | "title_de" | "title_en"> = {
  fr: "title_fr",
  de: "title_de",
  en: "title_en",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = METIER_CATEGORIES[category as MetierCategorySlug];
  if (!cat) {
    return {};
  }
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: { pathname: "/candidats/metiers/[category]", params: { category } },
    locale,
    title: cat.title[locale],
    description: cat.subtitle[locale],
  });
}

export default async function MetierCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = METIER_CATEGORIES[category as MetierCategorySlug];
  if (!cat) {
    notFound();
  }

  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("metiers");
  const supabase = await createClient();

  const { data: occupations } = cat.dbCategory
    ? await supabase
        .from("shortage_occupations")
        .select("*")
        .eq("is_published", true)
        .eq("category", cat.dbCategory)
        .order("display_order", { ascending: true })
    : { data: [] };

  const titleKey = TITLE_COLUMN[locale];

  return (
    <div>
      <PageHero title={cat.title[locale]} subtitle={cat.subtitle[locale]} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="animate-fade-up text-brand-ink-secondary leading-relaxed max-w-2xl mb-10">
          {cat.body[locale]}
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {(occupations ?? []).map((occ, i) => (
            <Link
              key={occ.id}
              href={{ pathname: "/candidats/metiers/offre/[slug]", params: { slug: occ.slug } }}
              className="lift-on-hover animate-fade-up rounded-lg border border-brand-grid bg-brand-white p-6 hover:border-brand-gold transition-colors duration-150"
              style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
            >
              <h3 className="text-brand-black font-serif text-lg">{occ[titleKey]}</h3>
            </Link>
          ))}
          {(!occupations || occupations.length === 0) && (
            <p className="text-brand-ink-muted text-sm col-span-full">—</p>
          )}
        </div>
        <Link
          href="/candidats/metiers"
          className="press inline-flex mt-10 rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
        >
          {t("backToCategories")}
        </Link>
      </div>
    </div>
  );
}
