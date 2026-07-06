import { getTranslations, getLocale } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { Link } from "../../../../i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Locale } from "../../../../i18n/routing";

const TITLE_COLUMN: Record<Locale, "title_fr" | "title_de" | "title_en"> = {
  fr: "title_fr",
  de: "title_de",
  en: "title_en",
};

export default async function ShortageOccupationsPage() {
  const t = await getTranslations("shortageOccupations");
  const locale = (await getLocale()) as Locale;
  const supabase = await createClient();

  const { data: occupations } = await supabase
    .from("shortage_occupations")
    .select("*")
    .eq("is_published", true)
    .order("display_order", { ascending: true });

  const titleKey = TITLE_COLUMN[locale];

  return (
    <div>
      <PageHero title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(occupations ?? []).map((occ) => (
            <Link
              key={occ.id}
              href={`/shortage-occupations/${occ.slug}`}
              className="rounded-lg border border-brand-grid p-6 hover:border-brand-gold transition-colors"
            >
              <span className="text-xs uppercase tracking-wide text-brand-gold">
                {occ.category}
              </span>
              <h3 className="text-brand-black font-serif text-lg mt-1">
                {occ[titleKey]}
              </h3>
            </Link>
          ))}
          {(!occupations || occupations.length === 0) && (
            <p className="text-brand-ink-muted text-sm col-span-full">—</p>
          )}
        </div>
      </div>
    </div>
  );
}
