import { getLocale } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { Link } from "@i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import { getPageContent } from "@/lib/content/get-page-content";
import { METIER_CATEGORIES } from "@/lib/metier-categories";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.metiers;

export default async function MetiersPage() {
  const content = await getPageContent<Content>("metiers");
  const locale = (await getLocale()) as Locale;
  const supabase = await createClient();

  const { data: occupations } = await supabase
    .from("shortage_occupations")
    .select("category")
    .eq("is_published", true);

  const counts = new Map<string, number>();
  for (const occ of occupations ?? []) {
    counts.set(occ.category, (counts.get(occ.category) ?? 0) + 1);
  }

  return (
    <div>
      <PageHero title={content.title} subtitle={content.subtitle} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(METIER_CATEGORIES).map(([slug, cat], i) => (
            <Link
              key={slug}
              href={`/candidats/metiers/${slug}`}
              className="lift-on-hover animate-fade-up rounded-lg border border-brand-grid bg-brand-white p-6"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h3 className="text-brand-black font-serif text-lg mb-1">{cat.title[locale]}</h3>
              <p className="text-sm text-brand-ink-secondary">{cat.subtitle[locale]}</p>
              {cat.dbCategory && (counts.get(cat.dbCategory) ?? 0) > 0 && (
                <p className="text-xs text-brand-gold-text mt-3">
                  {counts.get(cat.dbCategory)} {locale === "fr" ? "offres" : locale === "de" ? "Stellen" : "openings"}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
