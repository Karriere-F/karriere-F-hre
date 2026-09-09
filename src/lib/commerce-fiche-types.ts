// Shared types + shared source note for Commerce & Vente profession fiches.
// Kept separate from commerce-metiers.ts so per-batch fiche files can import
// them without a circular dependency.

import type { LocalizedText } from "./localized";

export type { LocalizedText };

export type FicheSection = { heading: LocalizedText; body: LocalizedText };
export type FicheFaq = { q: LocalizedText; a: LocalizedText };

export type CommerceFiche = {
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  image?: string; // filename in /public/images/metiers/commerce
  video?: string; // optional embed URL (YouTube), rendered when present
  sections: FicheSection[];
  faq: FicheFaq[];
  sourceNote: LocalizedText;
};

// Reused across fiches. Retail and commercial pay in Germany follows sector
// collective agreements (Einzelhandel) and the statutory minimum wage; figures
// are indicative gross ranges from public German sources. Commerce is a
// non-regulated field: recognition of a foreign qualification is not always
// required to work, but may be needed depending on the residence/visa route,
// which is decided by the competent German authorities.
export const SALARY_NOTE: LocalizedText = {
  fr: "Fourchettes brutes indicatives issues de sources publiques allemandes (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, IHK). Dans le commerce, la rémunération suit les conventions de branche (Einzelhandel) et le salaire minimum légal, et varie selon la région, l'employeur et l'expérience. Le commerce est un métier non réglementé : une reconnaissance formelle n'est pas toujours nécessaire pour exercer, mais peut l'être selon la voie de visa. Les règles de reconnaissance et de visa évoluent : vérifiez toujours votre situation auprès des autorités allemandes compétentes.",
  de: "Ungefähre Bruttospannen aus öffentlichen deutschen Quellen (Bundesagentur für Arbeit, Entgeltatlas, Gehalt.de, IHK). Im Handel folgt die Vergütung den Branchentarifen (Einzelhandel) und dem gesetzlichen Mindestlohn und variiert nach Region, Arbeitgeber und Erfahrung. Der Handel ist ein nicht reglementierter Beruf: Eine formelle Anerkennung ist nicht immer nötig, kann aber je nach Visumweg erforderlich sein. Anerkennungs- und Visaregeln ändern sich: Prüfen Sie Ihren Fall stets bei den zuständigen deutschen Behörden.",
  en: "Indicative gross ranges from public German sources (Federal Employment Agency, Entgeltatlas, Gehalt.de, IHK). In retail, pay follows sector collective agreements (Einzelhandel) and the statutory minimum wage, and varies by region, employer and experience. Commerce is a non-regulated field: formal recognition is not always required to work, but may be needed depending on the visa route. Recognition and visa rules change: always check your case with the competent German authorities.",
};
