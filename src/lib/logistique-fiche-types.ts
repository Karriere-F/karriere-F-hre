// Shared types + shared source note for Logistique / Transport profession fiches.
// Kept separate from logistique-metiers.ts so per-batch fiche files can import
// them without a circular dependency.

import type { LocalizedText } from "./localized";

export type { LocalizedText };

export type FicheSection = { heading: LocalizedText; body: LocalizedText };
export type FicheFaq = { q: LocalizedText; a: LocalizedText };

export type LogistiqueFiche = {
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  image?: string; // filename in /public/images/metiers/logistique
  video?: string; // optional embed URL (YouTube), rendered when present
  sections: FicheSection[];
  faq: FicheFaq[];
  sourceNote: LocalizedText;
};

// Reused across fiches: public salary portals differ and self-label their year,
// logistics pay follows sector agreements and a minimum wage, and legal details
// (including driving-licence conversion for drivers) must be checked against
// official sources.
export const SALARY_NOTE: LocalizedText = {
  fr: "Fourchettes brutes indicatives issues de sources publiques allemandes (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, StepStone, IHK). Dans la logistique et le transport, la rémunération dépend de la convention collective et du salaire minimum de branche, et varie selon la région, l'employeur et l'expérience. Les règles de reconnaissance, de visa et de permis de conduire évoluent : vérifiez toujours votre situation auprès des autorités allemandes compétentes.",
  de: "Ungefähre Bruttospannen aus öffentlichen deutschen Quellen (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, StepStone, IHK). In Logistik und Transport hängt die Vergütung vom Tarifvertrag und vom Branchenmindestlohn ab und variiert nach Region, Arbeitgeber und Erfahrung. Anerkennungs-, Visa- und Führerscheinregeln ändern sich: Prüfen Sie Ihren Fall stets bei den zuständigen deutschen Behörden.",
  en: "Indicative gross ranges from public German sources (Federal Employment Agency, Entgeltatlas, Gehalt.de, StepStone, IHK). In logistics and transport, pay follows the collective agreement and the sector minimum wage, and varies by region, employer and experience. Recognition, visa and driving-licence rules change: always check your case with the competent German authorities.",
};
