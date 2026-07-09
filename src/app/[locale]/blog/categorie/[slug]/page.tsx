import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/marketing/page-hero";
import { Link } from "@i18n/navigation";
import { BLOG_CATEGORIES, type BlogCategorySlug } from "@/lib/blog-categories";
import type { Locale } from "@i18n/routing";

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = BLOG_CATEGORIES[slug as BlogCategorySlug];
  if (!cat) {
    notFound();
  }

  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("blog");

  return (
    <div>
      <PageHero title={cat.title[locale]} subtitle={cat.description[locale]} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-brand-ink-muted text-sm mb-8">{t("comingSoon")}</p>
        <Link
          href="/blog"
          className="press inline-flex rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
        >
          {t("backToBlog")}
        </Link>
      </div>
    </div>
  );
}
