// Shared types + shared source note for Ingénierie profession fiches. Kept
// separate from ingenierie-metiers.ts so per-batch fiche files can import them
// without a circular dependency.

import type { LocalizedText } from "./localized";

export type { LocalizedText };

export type FicheSection = { heading: LocalizedText; body: LocalizedText };
export type FicheFaq = { q: LocalizedText; a: LocalizedText };

export type IngenierieFiche = {
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  image?: string; // filename in /public/images/metiers/ingenierie
  video?: string; // optional embed URL (YouTube), rendered when present
  sections: FicheSection[];
  faq: FicheFaq[];
  sourceNote: LocalizedText;
};

// Reused across fiches: public salary portals differ and self-label their year,
// engineering pay depends on branch, region and experience, and legal details
// (degree recognition, visa thresholds) must be checked against official sources.
export const SALARY_NOTE: LocalizedText = {
  fr: "Fourchettes brutes indicatives issues de sources publiques allemandes (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, StepStone, VDI). Les rémunérations d'ingénieurs varient selon la branche, la région, la taille de l'entreprise et l'expérience. Les règles de reconnaissance de diplôme et de visa évoluent : vérifiez toujours votre situation auprès des autorités allemandes compétentes.",
  de: "Ungefähre Bruttospannen aus öffentlichen deutschen Quellen (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, StepStone, VDI). Ingenieurgehälter hängen von Branche, Region, Unternehmensgröße und Erfahrung ab. Anerkennungs- und Visaregeln ändern sich: Prüfen Sie Ihren Fall stets bei den zuständigen deutschen Behörden.",
  en: "Indicative gross ranges from public German sources (Federal Employment Agency, Entgeltatlas, Gehalt.de, StepStone, VDI). Engineering pay depends on sector, region, company size and experience. Degree-recognition and visa rules change: always check your case with the competent German authorities.",
};
