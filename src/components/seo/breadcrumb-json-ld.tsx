import { getPathname } from "../../../i18n/navigation";
import { SITE_URL } from "@/lib/seo";
import type { Locale } from "../../../i18n/routing";
import { JsonLd } from "./json-ld";

type PathnameHref = Parameters<typeof getPathname>[0]["href"];

export function BreadcrumbJsonLd({
  locale,
  items,
}: {
  locale: Locale;
  items: { name: string; pathname: PathnameHref }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: SITE_URL + getPathname({ href: item.pathname, locale }),
        })),
      }}
    />
  );
}
