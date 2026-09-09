// Agroalimentaire (food industry) professions and their detailed fiches.
// Agroalimentaire = food transformation / production / quality, distinct from
// agriculture. Static, trilingual and grounded in public German data (job titles
// & durations: Bundesagentur für Arbeit / BERUFENET; pay: Entgeltatlas, IHK),
// never invented. Figures are ranges with a source note and a disclaimer on
// every fiche. List items without a fiche route to "Postuler" until written.

import type { LocalizedText } from "./localized";
import type { AgroFiche } from "./agroalimentaire-fiche-types";
import { AGRO_FICHES_AUSBILDUNG } from "./agroalimentaire-fiches/ausbildung";
import { AGRO_FICHES_DIPLOME } from "./agroalimentaire-fiches/diplome";

export { tr } from "./localized";
export type { LocalizedText };
export type { AgroFiche, FicheSection, FicheFaq } from "./agroalimentaire-fiche-types";

export type AgroMetier = {
  slug: string;
  /** Display name (German title kept for the Ausbildung path, the searched term). */
  name: LocalizedText;
  /** Short gloss shown under the name. */
  note: LocalizedText;
};

// Path 1, "Je veux faire une Ausbildung" (train in Germany).
export const AGRO_AUSBILDUNG_METIERS: AgroMetier[] = [
  {
    slug: "fachkraft-lebensmitteltechnik",
    name: { fr: "Fachkraft für Lebensmitteltechnik", de: "Fachkraft für Lebensmitteltechnik", en: "Fachkraft für Lebensmitteltechnik" },
    note: { fr: "Technicien(ne) de l'industrie alimentaire (3 ans)", de: "Industrielle Lebensmittelproduktion (3 Jahre)", en: "Food technology specialist (3 years)" },
  },
  {
    slug: "milchtechnologe",
    name: { fr: "Milchtechnologe/-technologin", de: "Milchtechnologe/-technologin", en: "Milchtechnologe/-technologin" },
    note: { fr: "Technologue laitier / laitière (3 ans)", de: "Milchverarbeitung (3 Jahre)", en: "Dairy technologist (3 years)" },
  },
  {
    slug: "milchwirtschaftlicher-laborant",
    name: { fr: "Milchwirtschaftliche/r Laborant/in", de: "Milchwirtschaftliche/r Laborant/in", en: "Milchwirtschaftliche/r Laborant/in" },
    note: { fr: "Laborantin(e) en industrie laitière (3 ans)", de: "Analytik, Qualität Milch (3 Jahre)", en: "Dairy laboratory technician (3 years)" },
  },
  {
    slug: "fleischer",
    name: { fr: "Fleischer/in", de: "Fleischer/in", en: "Fleischer/in" },
    note: { fr: "Boucher / bouchère (3 ans)", de: "Fleischverarbeitung, Handwerk (3 Jahre)", en: "Butcher (3 years)" },
  },
  {
    slug: "brauer-maelzer",
    name: { fr: "Brauer/in und Mälzer/in", de: "Brauer/in und Mälzer/in", en: "Brauer/in und Mälzer/in" },
    note: { fr: "Brasseur / malteur (3 ans)", de: "Getränkeherstellung (3 Jahre)", en: "Brewer & maltster (3 years)" },
  },
];

// Path 2, "Je suis déjà qualifié" (already qualified, seeking placement, with
// recognition where the visa route requires it).
export const AGRO_DIPLOME_METIERS: AgroMetier[] = [
  { slug: "production-alimentaire", name: { fr: "Production alimentaire", de: "Fachkraft für Lebensmitteltechnik", en: "Food production" }, note: { fr: "Fabrication, lignes de production, conditionnement", de: "Produktion, Anlagen, Verpackung", en: "Manufacturing, production lines, packaging" } },
  { slug: "qualite-securite-alimentaire", name: { fr: "Contrôle et assurance qualité", de: "Qualitätssicherung Lebensmittel", en: "Food quality & safety" }, note: { fr: "Contrôle qualité, hygiène, laboratoire", de: "Qualitätskontrolle, Hygiene, Labor", en: "Quality control, hygiene, laboratory" } },
  { slug: "transformation-laitiere", name: { fr: "Transformation laitière", de: "Milchtechnologe/-technologin", en: "Dairy processing" }, note: { fr: "Produits laitiers, procédés, qualité", de: "Milchprodukte, Verfahren, Qualität", en: "Dairy products, processes, quality" } },
  { slug: "boucherie-transformation", name: { fr: "Boucherie / transformation carnée", de: "Fleischer/in", en: "Butchery / meat processing" }, note: { fr: "Découpe, transformation, produits carnés", de: "Zerlegung, Verarbeitung, Fleischwaren", en: "Cutting, processing, meat products" } },
  { slug: "brasserie", name: { fr: "Brasserie / production de boissons", de: "Brauer/in und Mälzer/in", en: "Brewing / beverage production" }, note: { fr: "Brassage, maltage, embouteillage", de: "Brauen, Mälzen, Abfüllung", en: "Brewing, malting, bottling" } },
];

export const AGRO_UI = {
  sector: { fr: "Agroalimentaire", de: "Lebensmittel & Landwirtschaft", en: "Food & Agriculture" },
  metiers: { fr: "Métiers", de: "Berufe", en: "Occupations" },
  home: { fr: "Accueil", de: "Startseite", en: "Home" },
  hubTitle: {
    fr: "Métiers de l'agroalimentaire en Allemagne",
    de: "Berufe in der Lebensmittelbranche in Deutschland",
    en: "Food-industry professions in Germany",
  },
  hubIntro: {
    fr: "Transformer les matières premières en produits alimentaires : production, qualité, technologie et transformation au sein d'une industrie essentielle en Allemagne. Deux chemins s'offrent à vous selon votre situation, dans les deux cas nous vous accompagnons de l'allemand jusqu'à votre poste et votre installation.",
    de: "Rohstoffe zu Lebensmitteln verarbeiten: Produktion, Qualität, Technologie und Verarbeitung in einer wichtigen deutschen Industrie. Je nach Situation stehen Ihnen zwei Wege offen, in beiden Fällen begleiten wir Sie vom Deutsch bis zur Stelle und zur Ankunft.",
    en: "Turning raw materials into food products: production, quality, technology and processing in an essential German industry. Two paths are open to you depending on your situation, in both cases we support you from German all the way to your role and your arrival.",
  },
  viewFiche: { fr: "Voir la fiche", de: "Zum Berufsprofil", en: "View profile" },
  apply: { fr: "Postuler", de: "Bewerben", en: "Apply" },
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
} satisfies Record<string, LocalizedText>;

export const AGRO_FICHES: Record<string, AgroFiche> = {
  ...AGRO_FICHES_AUSBILDUNG,
  ...AGRO_FICHES_DIPLOME,
};
