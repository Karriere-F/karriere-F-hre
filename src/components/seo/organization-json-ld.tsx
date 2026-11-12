import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { JsonLd } from "./json-ld";

// Rich entity description for Google (knowledge panel, rich results) and AI/GEO engines.
// All data here is already public (imprint page, footer, social profiles).
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: "Karriere Fähre SARL",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo-kf.png`,
        },
        image: `${SITE_URL}/logo-kf.png`,
        description:
          "Agence de placement international basée à Douala, Cameroun, qui forme et place les talents qualifiés d'Afrique centrale auprès d'entreprises allemandes.",
        email: "kontakt@karrierefaehre.com",
        telephone: "+237673719816",
        areaServed: ["Afrique centrale", "Allemagne"],
        knowsLanguage: ["fr", "en", "de"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bonamoussadi, immeuble en face de Super U, 3e étage",
          postOfficeBoxNumber: "8414",
          addressLocality: "Douala",
          addressRegion: "Littoral",
          addressCountry: "CM",
        },
        foundingLocation: {
          "@type": "Place",
          name: "Douala, Cameroun",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "kontakt@karrierefaehre.com",
          telephone: "+237673719816",
          availableLanguage: ["fr", "de", "en"],
        },
        sameAs: [
          "https://www.linkedin.com/in/karriere-f%C3%A4hre-042876442",
          "https://www.facebook.com/profile.php?id=61591838923560",
          "https://www.instagram.com/karrierefaehre",
        ],
        identifier: {
          "@type": "PropertyValue",
          propertyID: "RCCM",
          value: "CM-DLA-01-2025-B13-00504",
        },
      }}
    />
  );
}
