// Shared types + shared source note for Hôtellerie-Restauration profession
// fiches. Kept separate from hotellerie-metiers.ts so per-batch fiche files can
// import them without a circular dependency.

import type { LocalizedText } from "./localized";

export type { LocalizedText };

export type FicheSection = { heading: LocalizedText; body: LocalizedText };
export type FicheFaq = { q: LocalizedText; a: LocalizedText };

export type HotellerieFiche = {
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  image?: string; // filename in /public/images/metiers/hotellerie
  video?: string; // optional embed URL (YouTube), rendered when present
  sections: FicheSection[];
  faq: FicheFaq[];
  sourceNote: LocalizedText;
};

// Reused across fiches: public salary portals differ and self-label their year,
// hospitality pay follows regional DEHOGA agreements and the statutory minimum
// wage, tips supplement guest-facing roles, and legal details must be checked
// against official sources.
export const SALARY_NOTE: LocalizedText = {
  fr: "Fourchettes brutes indicatives issues de sources publiques allemandes (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, StepStone, DEHOGA). Dans l'hôtellerie-restauration, la rémunération dépend des conventions régionales (DEHOGA) et du salaire minimum légal, les pourboires complètent les postes en contact client, et l'activité est souvent saisonnière. Les règles de reconnaissance et de visa évoluent : vérifiez toujours votre situation auprès des autorités allemandes compétentes.",
  de: "Ungefähre Bruttospannen aus öffentlichen deutschen Quellen (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, StepStone, DEHOGA). Im Gastgewerbe hängt die Vergütung von regionalen Tarifverträgen (DEHOGA) und dem gesetzlichen Mindestlohn ab, Trinkgeld ergänzt die Stellen mit Gästekontakt, und die Tätigkeit ist oft saisonabhängig. Anerkennungs- und Visaregeln ändern sich: Prüfen Sie Ihren Fall stets bei den zuständigen deutschen Behörden.",
  en: "Indicative gross ranges from public German sources (Federal Employment Agency, Entgeltatlas, Gehalt.de, StepStone, DEHOGA). In hospitality, pay depends on regional collective agreements (DEHOGA) and the statutory minimum wage, tips supplement guest-facing roles, and the work is often seasonal. Recognition and visa rules change: always check your case with the competent German authorities.",
};
