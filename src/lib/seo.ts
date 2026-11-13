import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { getPathname } from "../../i18n/navigation";
import { routing, type Locale } from "../../i18n/routing";

export const SITE_URL = "https://www.karrierefaehre.com";
export const SITE_NAME = "Karriere Fähre";

type PathnameHref = Parameters<typeof getPathname>[0]["href"];

export function buildMetadata({
  pathname,
  locale,
  title,
  description,
}: {
  pathname: PathnameHref;
  locale: Locale;
  title: string;
  description: string;
}): Metadata {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = SITE_URL + getPathname({ href: pathname, locale: loc });
  }
  languages["x-default"] = languages[routing.defaultLocale];

  const canonical = SITE_URL + getPathname({ href: pathname, locale });
  const ogImage = `${SITE_URL}/og-default.png`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// Shorthand for the common case: a page whose CMS/i18n namespace has a "title" and
// "subtitle" key that double as the SEO title/description.
export async function metadataFromNamespace(
  namespace: string,
  pathname: PathnameHref
): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations(namespace);
  // Prefer dedicated SEO fields when present, so the page's visible hero title/intro
  // can stay long/editorial while the <title>/<meta description> stay concise.
  return buildMetadata({
    pathname,
    locale,
    title: t.has("seoTitle") ? t("seoTitle") : t("title"),
    description: t.has("seoDescription") ? t("seoDescription") : t("subtitle"),
  });
}
