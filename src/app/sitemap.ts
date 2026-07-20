import type { MetadataRoute } from "next";
import { getPathname } from "../../i18n/navigation";
import { routing } from "../../i18n/routing";
import { SITE_URL } from "@/lib/seo";
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
  "/cours-allemand",
  "/cours-allemand/full-training",
  "/cours-allemand/fast-track",
  "/cours-allemand/quel-parcours",
  "/cours-allemand/preparation-examens",
  "/ausbildung-allemagne",
  "/ausbildung-allemagne/salaire",
  "/ausbildung-allemagne/metiers",
  "/visa-allemagne",
  "/visa-allemagne/chancenkarte",
  "/travailler-en-allemagne",
  "/travailler-en-allemagne/salaires",
  "/partir-en-allemagne",
  "/partir-en-allemagne/cameroun",
  "/candidats/formations/integration",
  "/candidats/reconnaissance-diplomes",
  "/candidats/vivre-en-allemagne",
  "/metiers",
  "/entreprises",
  "/entreprises/partenariat",
  "/partenaires",
  "/plan-du-site",
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
        { pathname: "/metiers/offre/[slug]", params: { slug: occ.slug } },
        0.5
      )
    );
  }

  return entries;
}
