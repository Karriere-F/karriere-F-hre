import type { MetadataRoute } from "next";
import { getPathname } from "../../i18n/navigation";
import { routing } from "../../i18n/routing";
import { SITE_URL } from "@/lib/seo";
import { METIER_CATEGORIES } from "@/lib/metier-categories";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";
import { createPublicClient } from "@/lib/supabase/public";

// Public marketing pages only -- authenticated dashboards (candidate/*, employer/*,
// admin/*) and the login page are intentionally excluded, they have no SEO value and
// aren't registered with translated pathnames.
const STATIC_PATHS = [
  "/",
  "/a-propos",
  "/a-propos/notre-histoire",
  "/a-propos/methode",
  "/candidats",
  "/candidats/comment-ca-marche",
  "/candidats/eligibilite",
  "/candidats/faq",
  "/candidats/formations",
  "/candidats/formations/allemand",
  "/candidats/formations/examens",
  "/candidats/formations/integration",
  "/candidats/metiers",
  "/candidats/reconnaissance-diplomes",
  "/candidats/vivre-en-allemagne",
  "/entreprises",
  "/entreprises/demande",
  "/entreprises/partenariat",
  "/entreprises/pourquoi-afrique-centrale",
  "/entreprises/processus",
  "/entreprises/profils",
  "/entreprises/services",
  "/partenaires",
  "/temoignages",
  "/postuler",
  "/cgu",
  "/mentions-legales",
  "/confidentialite",
  "/contact",
  "/blog",
  "/book-appointment",
] as const;

function entriesFor(
  pathname: Parameters<typeof getPathname>[0]["href"],
  priority: number
): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = SITE_URL + getPathname({ href: pathname, locale: loc });
  }

  return routing.locales.map((locale) => ({
    url: languages[locale],
    priority,
    alternates: { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_PATHS) {
    entries.push(...entriesFor(path, path === "/" ? 1 : 0.7));
  }

  for (const category of Object.keys(METIER_CATEGORIES)) {
    entries.push(
      ...entriesFor({ pathname: "/candidats/metiers/[category]", params: { category } }, 0.6)
    );
  }

  for (const slug of Object.keys(BLOG_CATEGORIES)) {
    entries.push(...entriesFor({ pathname: "/blog/categorie/[slug]", params: { slug } }, 0.5));
  }

  const supabase = createPublicClient();
  const { data: occupations } = await supabase
    .from("shortage_occupations")
    .select("slug")
    .eq("is_published", true);

  for (const occ of occupations ?? []) {
    entries.push(
      ...entriesFor(
        { pathname: "/candidats/metiers/offre/[slug]", params: { slug: occ.slug } },
        0.5
      )
    );
  }

  return entries;
}
