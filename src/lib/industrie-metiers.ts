// Industry / metalworking professions and their detailed fiches. Static,
// trilingual and grounded in public German data (salaries: Entgeltatlas /
// Gehalt.de / StepStone / IG Metall tariff), never invented. Numbers are given as
// ranges with a source note and a disclaimer on every fiche. New fiches are added
// under the batch files as their content is researched; list items without a
// fiche route to "Postuler" until their fiche is written.

import type { LocalizedText } from "./localized";
import type { IndustrieFiche } from "./industrie-fiche-types";
import { IND_FICHES_AUSBILDUNG } from "./industrie-fiches/ausbildung";
import { IND_FICHES_DIPLOME } from "./industrie-fiches/diplome";

export { tr } from "./localized";
export type { LocalizedText };
export type { IndustrieFiche, FicheSection, FicheFaq } from "./industrie-fiche-types";

export type IndustrieMetier = {
  slug: string;
  /** Display name (German title kept for the Ausbildung path, the searched term). */
  name: LocalizedText;
  /** Short gloss shown under the name. */
  note: LocalizedText;
};

// Path 1, "Je veux faire une Ausbildung" (train in Germany). German titles are
// the real, searched terms; the note carries the local-language gloss.
export const INDUSTRIE_AUSBILDUNG_METIERS: IndustrieMetier[] = [
  {
    slug: "mechatroniker",
    name: { fr: "Mechatroniker", de: "Mechatroniker", en: "Mechatroniker" },
    note: { fr: "Mécatronicien", de: "Mechatronik", en: "Mechatronics technician" },
  },
  {
    slug: "industriemechaniker",
    name: { fr: "Industriemechaniker", de: "Industriemechaniker", en: "Industriemechaniker" },
    note: { fr: "Mécanicien industriel", de: "Industriemechanik", en: "Industrial mechanic" },
  },
  {
    slug: "zerspanungsmechaniker",
    name: { fr: "Zerspanungsmechaniker", de: "Zerspanungsmechaniker", en: "Zerspanungsmechaniker" },
    note: { fr: "Usineur, commande numérique (CNC)", de: "Zerspanung, CNC", en: "CNC machining" },
  },
  {
    slug: "elektroniker-betriebstechnik",
    name: { fr: "Elektroniker für Betriebstechnik", de: "Elektroniker für Betriebstechnik", en: "Elektroniker für Betriebstechnik" },
    note: { fr: "Électronicien de maintenance industrielle", de: "Betriebstechnik", en: "Industrial electronics" },
  },
  {
    slug: "anlagenmechaniker",
    name: { fr: "Anlagenmechaniker", de: "Anlagenmechaniker", en: "Anlagenmechaniker" },
    note: { fr: "Mécanicien d'installations et de tuyauterie", de: "Anlagenbau", en: "Plant mechanic" },
  },
];

// Path 2, "Je suis déjà qualifié" (already qualified, seeking recognition +
// placement). Titles in the reader's language, with the German market term.
export const INDUSTRIE_DIPLOME_METIERS: IndustrieMetier[] = [
  { slug: "soudeur", name: { fr: "Soudeur", de: "Schweißer", en: "Welder" }, note: { fr: "WIG, MAG, certifications ISO 9606", de: "WIG, MAG, ISO 9606", en: "TIG, MAG, ISO 9606" } },
  { slug: "mecatronicien", name: { fr: "Mécatronicien", de: "Mechatroniker", en: "Mechatronics technician" }, note: { fr: "Mécanique, électronique, automatismes", de: "Mechanik, Elektronik, Automatisierung", en: "Mechanics, electronics, automation" } },
  { slug: "technicien-maintenance", name: { fr: "Technicien de maintenance industrielle", de: "Instandhaltungstechniker", en: "Maintenance technician" }, note: { fr: "Maintenance et dépannage", de: "Instandhaltung", en: "Upkeep and repair" } },
  { slug: "electrotechnicien", name: { fr: "Électrotechnicien industriel", de: "Elektroniker / Elektrotechniker", en: "Industrial electrician" }, note: { fr: "Installations et automatismes électriques", de: "Elektrotechnik, Automatisierung", en: "Electrical systems and automation" } },
  { slug: "usineur-cnc", name: { fr: "Usineur, opérateur CNC", de: "Zerspanungsmechaniker / CNC-Fachkraft", en: "CNC machinist" }, note: { fr: "Tournage, fraisage, commande numérique", de: "Drehen, Fräsen, CNC", en: "Turning, milling, CNC" } },
  { slug: "metallier", name: { fr: "Métallier, chaudronnier", de: "Metallbauer / Konstruktionsmechaniker", en: "Metalworker / fabricator" }, note: { fr: "Construction métallique et assemblage", de: "Metallbau, Konstruktion", en: "Steel construction and fabrication" } },
  { slug: "conducteur-ligne", name: { fr: "Conducteur de machines et d'installations", de: "Maschinen- und Anlagenführer", en: "Machine and plant operator" }, note: { fr: "Conduite de ligne de production", de: "Produktionslinie", en: "Production line" } },
  { slug: "technicien-qualite", name: { fr: "Technicien qualité", de: "Qualitätsprüfer / Qualitätstechniker", en: "Quality technician" }, note: { fr: "Contrôle qualité et métrologie", de: "Qualitätssicherung, Messtechnik", en: "Quality control and metrology" } },
];

export const INDUSTRIE_UI = {
  sector: { fr: "Industrie", de: "Industrie", en: "Industry" },
  metiers: { fr: "Métiers", de: "Berufe", en: "Occupations" },
  home: { fr: "Accueil", de: "Startseite", en: "Home" },
  hubTitle: {
    fr: "Métiers de l'industrie en Allemagne",
    de: "Industrieberufe in Deutschland",
    en: "Industrial professions in Germany",
  },
  hubIntro: {
    fr: "L'industrie allemande manque de mécaniciens, soudeurs, électrotechniciens et opérateurs qualifiés. Deux chemins s'offrent à vous selon votre situation, dans les deux cas nous vous accompagnons de l'allemand jusqu'à votre poste et votre installation.",
    de: "Der deutschen Industrie fehlen Mechaniker, Schweißer, Elektroniker und qualifizierte Fachkräfte. Je nach Situation stehen Ihnen zwei Wege offen, in beiden Fällen begleiten wir Sie vom Deutsch bis zur Stelle und zur Ankunft.",
    en: "German industry is short of mechanics, welders, electricians and skilled operators. Two paths are open to you depending on your situation, in both cases we support you from German all the way to your role and your arrival.",
  },
  viewFiche: { fr: "Voir la fiche", de: "Zum Berufsprofil", en: "View profile" },
  apply: { fr: "Postuler", de: "Bewerben", en: "Apply" },
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
} satisfies Record<string, LocalizedText>;

// Detailed fiches: the two batch files hold the per-profession content.
export const INDUSTRIE_FICHES: Record<string, IndustrieFiche> = {
  ...IND_FICHES_AUSBILDUNG,
  ...IND_FICHES_DIPLOME,
};
