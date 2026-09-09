// Shared types + shared source note for Agroalimentaire (food industry)
// profession fiches. Kept separate from agroalimentaire-metiers.ts so per-batch
// fiche files can import them without a circular dependency.

import type { LocalizedText } from "./localized";

export type { LocalizedText };

export type FicheSection = { heading: LocalizedText; body: LocalizedText };
export type FicheFaq = { q: LocalizedText; a: LocalizedText };

export type AgroFiche = {
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  image?: string; // filename in /public/images/metiers/agroalimentaire
  video?: string; // optional embed URL (YouTube), rendered when present
  sections: FicheSection[];
  faq: FicheFaq[];
  sourceNote: LocalizedText;
};

// Reused across fiches. Food-industry pay follows sector collective agreements
// and the statutory minimum wage; figures are indicative gross ranges from
// public German sources. Most food-production jobs are non-regulated to work,
// but some skilled crafts (e.g. butchery / Handwerk) or the chosen visa route
// may involve recognition, decided by the competent German authorities.
export const SALARY_NOTE: LocalizedText = {
  fr: "Fourchettes brutes indicatives issues de sources publiques allemandes (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, IHK). Dans l'industrie alimentaire, la rémunération suit les conventions de branche et le salaire minimum légal, et varie selon la région, l'employeur et l'expérience. La plupart de ces métiers ne sont pas réglementés pour exercer ; certains métiers de l'artisanat (boucherie) ou la voie de visa peuvent impliquer une reconnaissance, qui relève des autorités allemandes compétentes. Vérifiez toujours votre situation.",
  de: "Ungefähre Bruttospannen aus öffentlichen deutschen Quellen (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, IHK). In der Lebensmittelindustrie folgt die Vergütung den Branchentarifen und dem gesetzlichen Mindestlohn und variiert nach Region, Arbeitgeber und Erfahrung. Die meisten dieser Berufe sind nicht reglementiert; einzelne Handwerksberufe (Fleischerei) oder der Visumweg können eine Anerkennung erfordern, die bei den zuständigen deutschen Behörden liegt. Prüfen Sie stets Ihren Fall.",
  en: "Indicative gross ranges from public German sources (Federal Employment Agency, Entgeltatlas, Gehalt.de, IHK). In the food industry, pay follows sector collective agreements and the statutory minimum wage, and varies by region, employer and experience. Most of these jobs are non-regulated to work; some skilled crafts (butchery) or the visa route may involve recognition, decided by the competent German authorities. Always check your case.",
};
