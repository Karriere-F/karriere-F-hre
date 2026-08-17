import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { JsonLd } from "./json-ld";

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "Agence de placement international basée à Douala, Cameroun, qui forme et place les talents qualifiés d'Afrique centrale auprès d'entreprises allemandes.",
        areaServed: ["Afrique centrale", "Allemagne"],
        knowsLanguage: ["fr", "en", "de"],
        foundingLocation: {
          "@type": "Place",
          name: "Douala, Cameroun",
        },
      }}
    />
  );
}
