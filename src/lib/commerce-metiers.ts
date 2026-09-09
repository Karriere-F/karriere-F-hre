// Commerce & Vente (retail & sales) professions and their detailed fiches.
// Static, trilingual and grounded in public German data (job titles and training
// durations: Bundesagentur für Arbeit / BERUFENET; salaries: Entgeltatlas /
// Gehalt.de / IHK), never invented. Numbers are given as ranges with a source
// note and a disclaimer on every fiche. List items without a fiche route to
// "Postuler" until their fiche is written.

import type { LocalizedText } from "./localized";
import type { CommerceFiche } from "./commerce-fiche-types";
import { COMMERCE_FICHES_AUSBILDUNG } from "./commerce-fiches/ausbildung";
import { COMMERCE_FICHES_DIPLOME } from "./commerce-fiches/diplome";

export { tr } from "./localized";
export type { LocalizedText };
export type { CommerceFiche, FicheSection, FicheFaq } from "./commerce-fiche-types";

export type CommerceMetier = {
  slug: string;
  /** Display name (German title kept for the Ausbildung path, the searched term). */
  name: LocalizedText;
  /** Short gloss shown under the name. */
  note: LocalizedText;
};

// Path 1, "Je veux faire une Ausbildung" (train in Germany). German titles are
// the real, searched terms; the note carries the local-language gloss + duration.
export const COMMERCE_AUSBILDUNG_METIERS: CommerceMetier[] = [
  {
    slug: "kaufmann-einzelhandel",
    name: { fr: "Kaufmann/-frau im Einzelhandel", de: "Kaufmann/-frau im Einzelhandel", en: "Kaufmann/-frau im Einzelhandel" },
    note: { fr: "Employé(e) commercial(e) du commerce de détail (3 ans)", de: "Einzelhandel, Verkauf und Warenwirtschaft (3 Jahre)", en: "Retail sales clerk (3 years)" },
  },
  {
    slug: "verkaeufer",
    name: { fr: "Verkäufer/in", de: "Verkäufer/in", en: "Verkäufer/in" },
    note: { fr: "Vendeur / vendeuse (2 ans)", de: "Verkauf, Beratung, Kasse (2 Jahre)", en: "Salesperson (2 years)" },
  },
  {
    slug: "kaufmann-ecommerce",
    name: { fr: "Kaufmann/-frau im E-Commerce", de: "Kaufmann/-frau im E-Commerce", en: "Kaufmann/-frau im E-Commerce" },
    note: { fr: "Commercial(e) e-commerce (3 ans)", de: "Onlinehandel, Marketing, Kundenservice (3 Jahre)", en: "E-commerce clerk (3 years)" },
  },
  {
    slug: "kaufmann-grosshandel",
    name: { fr: "Kaufmann/-frau für Groß- und Außenhandelsmanagement", de: "Kaufmann/-frau für Groß- und Außenhandelsmanagement", en: "Kaufmann/-frau für Groß- und Außenhandelsmanagement" },
    note: { fr: "Commerce de gros et commerce extérieur (3 ans)", de: "Einkauf, Verkauf, Außenhandel (3 Jahre)", en: "Wholesale & foreign trade (3 years)" },
  },
  {
    slug: "automobilkaufmann",
    name: { fr: "Automobilkaufmann/-frau", de: "Automobilkaufmann/-frau", en: "Automobilkaufmann/-frau" },
    note: { fr: "Commercial(e) automobile (3 ans)", de: "Vertrieb und Verwaltung im Autohaus (3 Jahre)", en: "Automotive sales clerk (3 years)" },
  },
];

// Path 2, "Je suis déjà qualifié" (already qualified, seeking placement, with
// recognition where the visa route requires it). Titles in the reader's
// language, with the German market term.
export const COMMERCE_DIPLOME_METIERS: CommerceMetier[] = [
  { slug: "vente-commerce-detail", name: { fr: "Vendeur / employé de commerce", de: "Kaufmann/-frau im Einzelhandel", en: "Retail sales employee" }, note: { fr: "Vente, conseil, caisse, marchandises", de: "Verkauf, Beratung, Kasse", en: "Sales, advice, checkout" } },
  { slug: "commercial-vente", name: { fr: "Commercial / chargé de vente", de: "Vertriebsmitarbeiter/in", en: "Sales representative" }, note: { fr: "Vente B2B/B2C, développement clients", de: "Vertrieb, Kundengewinnung", en: "B2B/B2C sales, client development" } },
  { slug: "ecommerce", name: { fr: "Commercial e-commerce", de: "Kaufmann/-frau im E-Commerce", en: "E-commerce specialist" }, note: { fr: "Vente en ligne, marketplaces, marketing", de: "Onlinehandel, Marketing", en: "Online sales, marketplaces, marketing" } },
  { slug: "grossiste-commerce-exterieur", name: { fr: "Commerce de gros et extérieur", de: "Groß- und Außenhandelsmanagement", en: "Wholesale & foreign trade" }, note: { fr: "Achats, ventes, fournisseurs, international", de: "Einkauf, Verkauf, Außenhandel", en: "Purchasing, sales, suppliers" } },
  { slug: "acheteur-approvisionnement", name: { fr: "Acheteur / approvisionnement", de: "Mitarbeiter/in im Einkauf", en: "Buyer / procurement" }, note: { fr: "Achats, négociation, approvisionnement", de: "Einkauf, Beschaffung", en: "Purchasing, procurement" } },
];

export const COMMERCE_UI = {
  sector: { fr: "Commerce & Vente", de: "Handel & Verkauf", en: "Retail & Sales" },
  metiers: { fr: "Métiers", de: "Berufe", en: "Occupations" },
  home: { fr: "Accueil", de: "Startseite", en: "Home" },
  hubTitle: {
    fr: "Métiers du commerce et de la vente en Allemagne",
    de: "Berufe in Handel und Verkauf in Deutschland",
    en: "Retail and sales professions in Germany",
  },
  hubIntro: {
    fr: "Vente, conseil client, distribution, e-commerce et gestion commerciale : le commerce offre de nombreuses portes d'entrée en Allemagne. Deux chemins s'offrent à vous selon votre situation, dans les deux cas nous vous accompagnons de l'allemand jusqu'à votre poste et votre installation.",
    de: "Verkauf, Kundenberatung, Handel, E-Commerce und kaufmännische Steuerung: Der Handel bietet in Deutschland viele Einstiegswege. Je nach Situation stehen Ihnen zwei Wege offen, in beiden Fällen begleiten wir Sie vom Deutsch bis zur Stelle und zur Ankunft.",
    en: "Sales, customer advice, retail, e-commerce and commercial management: retail offers many entry paths in Germany. Two paths are open to you depending on your situation, in both cases we support you from German all the way to your role and your arrival.",
  },
  viewFiche: { fr: "Voir la fiche", de: "Zum Berufsprofil", en: "View profile" },
  apply: { fr: "Postuler", de: "Bewerben", en: "Apply" },
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
} satisfies Record<string, LocalizedText>;

// Detailed fiches: the two batch files hold the per-profession content.
export const COMMERCE_FICHES: Record<string, CommerceFiche> = {
  ...COMMERCE_FICHES_AUSBILDUNG,
  ...COMMERCE_FICHES_DIPLOME,
};
