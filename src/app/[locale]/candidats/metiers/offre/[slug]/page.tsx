import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/marketing/page-hero";
import { createClient } from "@/lib/supabase/server";
import { buildMetadata } from "@/lib/seo";
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
    pathname: { pathname: "/candidats/metiers/offre/[slug]", params: { slug } },
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

  return (
    <div>
      <PageHero title={occ[TITLE_COLUMN[locale]]} />
      <div className="animate-fade-up mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <span className="text-xs uppercase tracking-wide text-brand-gold-text">{occ.category}</span>
        <p className="mt-4 text-brand-ink-secondary leading-relaxed">{occ[DESC_COLUMN[locale]]}</p>
      </div>
    </div>
  );
}
