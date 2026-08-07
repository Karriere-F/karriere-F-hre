// Shared types + shared source note for IT profession fiches. Kept separate from
// it-metiers.ts so per-batch fiche files can import them without a circular
// dependency (it-metiers imports the batches and merges them into IT_FICHES).

import type { LocalizedText } from "./localized";

export type { LocalizedText };

export type FicheSection = { heading: LocalizedText; body: LocalizedText };
export type FicheFaq = { q: LocalizedText; a: LocalizedText };

export type ItFiche = {
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  image?: string; // filename in /public/images/metiers/informatique
  video?: string; // optional embed URL (YouTube), rendered when present
  sections: FicheSection[];
  faq: FicheFaq[];
  sourceNote: LocalizedText;
};

// Reused across fiches: private salary portals differ and self-label their year,
// so figures are ranges, and legal details must be checked against official sources.
export const SALARY_NOTE: LocalizedText = {
  fr: "Fourchettes brutes indicatives issues de sources publiques allemandes (StepStone, Gehalt.de, Bundesagentur für Arbeit, Bitkom, IHK). Les portails de salaires diffèrent et actualisent leurs données ; les montants réels varient selon la région, l'employeur, la convention collective et l'expérience. Les règles de visa évoluent : vérifiez toujours votre situation auprès des autorités allemandes compétentes.",
  de: "Ungefähre Bruttospannen aus öffentlichen deutschen Quellen (StepStone, Gehalt.de, Bundesagentur für Arbeit, Bitkom, IHK). Gehaltsportale unterscheiden sich und aktualisieren ihre Daten; die tatsächlichen Beträge hängen von Region, Arbeitgeber, Tarifvertrag und Erfahrung ab. Visaregeln ändern sich: Prüfen Sie Ihren Fall stets bei den zuständigen deutschen Behörden.",
  en: "Indicative gross ranges from public German sources (StepStone, Gehalt.de, Federal Employment Agency, Bitkom, IHK). Salary portals differ and update their data; real figures depend on region, employer, collective agreement and experience. Visa rules change: always check your case with the competent German authorities.",
};
