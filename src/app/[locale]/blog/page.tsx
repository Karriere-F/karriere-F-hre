import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { Link } from "@i18n/navigation";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";

export const generateMetadata = () => metadataFromNamespace("blog", "/blog");

export default async function BlogPage() {
  const t = await getTranslations("blog");
  const locale = (await getLocale()) as Locale;

  return (
    <div>
      <PageHero title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-xl font-serif text-brand-black mb-6">{t("categoriesTitle")}</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(BLOG_CATEGORIES).map(([slug, cat], i) => (
            <Link
              key={slug}
              href={{ pathname: "/blog/categorie/[slug]", params: { slug } }}
              className="lift-on-hover animate-fade-up rounded-lg border border-brand-grid bg-brand-white p-6"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h3 className="text-brand-black font-serif text-lg mb-1">{cat.title[locale]}</h3>
              <p className="text-sm text-brand-ink-secondary">{cat.description[locale]}</p>
            </Link>
          ))}
        </div>
        <p className="text-brand-ink-muted text-sm mt-10">{t("comingSoon")}</p>
      </div>
    </div>
  );
}
