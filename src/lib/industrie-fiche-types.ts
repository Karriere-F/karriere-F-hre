// Shared types + shared source note for Industrie profession fiches. Kept
// separate from industrie-metiers.ts so per-batch fiche files can import them
// without a circular dependency.

import type { LocalizedText } from "./localized";

export type { LocalizedText };

export type FicheSection = { heading: LocalizedText; body: LocalizedText };
export type FicheFaq = { q: LocalizedText; a: LocalizedText };

export type IndustrieFiche = {
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  image?: string; // filename in /public/images/metiers/industrie
  video?: string; // optional embed URL (YouTube), rendered when present
  sections: FicheSection[];
  faq: FicheFaq[];
  sourceNote: LocalizedText;
};

// Reused across fiches: public salary portals differ and self-label their year,
// industrial pay is often IG Metall tariff-bound, and legal details must be
// checked against official sources.
export const SALARY_NOTE: LocalizedText = {
  fr: "Fourchettes brutes indicatives issues de sources publiques allemandes (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, StepStone, IHK, IG Metall). Dans l'industrie, la rémunération dépend souvent de la convention collective (IG Metall) et varie selon la région, l'employeur et l'expérience. Les règles de reconnaissance et de visa évoluent : vérifiez toujours votre situation auprès des autorités allemandes compétentes.",
  de: "Ungefähre Bruttospannen aus öffentlichen deutschen Quellen (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, StepStone, IHK, IG Metall). In der Industrie hängt die Vergütung oft vom Tarifvertrag (IG Metall) ab und variiert nach Region, Arbeitgeber und Erfahrung. Anerkennungs- und Visaregeln ändern sich: Prüfen Sie Ihren Fall stets bei den zuständigen deutschen Behörden.",
  en: "Indicative gross ranges from public German sources (Federal Employment Agency, Entgeltatlas, Gehalt.de, StepStone, IHK, IG Metall). In industry, pay is often set by the collective agreement (IG Metall) and varies by region, employer and experience. Recognition and visa rules change: always check your case with the competent German authorities.",
};
