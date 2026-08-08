// Shared types + shared source note for Construction / BTP profession fiches.
// Kept separate from construction-metiers.ts so per-batch fiche files can import
// them without a circular dependency.

import type { LocalizedText } from "./localized";

export type { LocalizedText };

export type FicheSection = { heading: LocalizedText; body: LocalizedText };
export type FicheFaq = { q: LocalizedText; a: LocalizedText };

export type ConstructionFiche = {
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  image?: string; // filename in /public/images/metiers/construction
  video?: string; // optional embed URL (YouTube), rendered when present
  sections: FicheSection[];
  faq: FicheFaq[];
  sourceNote: LocalizedText;
};

// Reused across fiches: public salary portals differ and self-label their year,
// construction pay follows the Bau-Hauptgewerbe tariff and the sector minimum
// wage (Mindestlohn Bau), and legal details must be checked against official
// sources.
export const SALARY_NOTE: LocalizedText = {
  fr: "Fourchettes brutes indicatives issues de sources publiques allemandes (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, StepStone, convention du bâtiment Bau-Hauptgewerbe / SOKA-BAU). Dans le bâtiment, la rémunération suit souvent la convention collective et le salaire minimum du secteur, et varie selon la région, l'employeur et l'expérience. Les règles de reconnaissance et de visa évoluent : vérifiez toujours votre situation auprès des autorités allemandes compétentes.",
  de: "Ungefähre Bruttospannen aus öffentlichen deutschen Quellen (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, StepStone, Bautarif Bau-Hauptgewerbe / SOKA-BAU). Am Bau richtet sich die Vergütung oft nach dem Tarifvertrag und dem Branchenmindestlohn und variiert nach Region, Arbeitgeber und Erfahrung. Anerkennungs- und Visaregeln ändern sich: Prüfen Sie Ihren Fall stets bei den zuständigen deutschen Behörden.",
  en: "Indicative gross ranges from public German sources (Federal Employment Agency, Entgeltatlas, Gehalt.de, StepStone, the construction tariff Bau-Hauptgewerbe / SOKA-BAU). In construction, pay often follows the collective agreement and the sector minimum wage, and varies by region, employer and experience. Recognition and visa rules change: always check your case with the competent German authorities.",
};
