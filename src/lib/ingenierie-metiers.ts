// Engineering professions and their detailed fiches. Static, trilingual and
// grounded in public German data (salaries: Entgeltatlas / Gehalt.de / StepStone
// / VDI), never invented. Numbers are given as ranges with a source note and a
// disclaimer on every fiche. The Ausbildung path covers vocational technical
// design roles; the qualified path covers university engineers (EU Blue Card).
// New fiches are added under the batch files as their content is researched.

import type { LocalizedText } from "./localized";
import type { IngenierieFiche } from "./ingenierie-fiche-types";
import { ING_FICHES_AUSBILDUNG } from "./ingenierie-fiches/ausbildung";
import { ING_FICHES_DIPLOME } from "./ingenierie-fiches/diplome";

export { tr } from "./localized";
export type { LocalizedText };
export type { IngenierieFiche, FicheSection, FicheFaq } from "./ingenierie-fiche-types";

export type IngenierieMetier = {
  slug: string;
  /** Display name (German title kept for the Ausbildung path, the searched term). */
  name: LocalizedText;
  /** Short gloss shown under the name. */
  note: LocalizedText;
};

// Path 1, "Je veux faire une Ausbildung" (train in Germany): vocational technical
// design and surveying roles that feed engineering. German titles are the real,
// searched terms; the note carries the local-language gloss.
export const INGENIERIE_AUSBILDUNG_METIERS: IngenierieMetier[] = [
  {
    slug: "technischer-produktdesigner",
    name: { fr: "Technischer Produktdesigner", de: "Technischer Produktdesigner", en: "Technischer Produktdesigner" },
    note: { fr: "Dessinateur-projeteur produit (CAO)", de: "Produktgestaltung, CAD", en: "Technical product designer, CAD" },
  },
  {
    slug: "technischer-systemplaner",
    name: { fr: "Technischer Systemplaner", de: "Technischer Systemplaner", en: "Technischer Systemplaner" },
    note: { fr: "Dessinateur en installations techniques", de: "Versorgungs- und Elektrotechnik", en: "Building-services systems planner" },
  },
  {
    slug: "bauzeichner",
    name: { fr: "Bauzeichner", de: "Bauzeichner", en: "Bauzeichner" },
    note: { fr: "Dessinateur en bâtiment", de: "Bauzeichnung, Planung", en: "Construction draftsperson" },
  },
  {
    slug: "vermessungstechniker",
    name: { fr: "Vermessungstechniker", de: "Vermessungstechniker", en: "Vermessungstechniker" },
    note: { fr: "Géomètre-topographe", de: "Vermessung, Geodaten", en: "Surveying and geomatics technician" },
  },
];

// Path 2, "Je suis déjà diplômé": university engineers, seeking degree
// recognition + placement. Titles in the reader's language, with the German term.
export const INGENIERIE_DIPLOME_METIERS: IngenierieMetier[] = [
  { slug: "ingenieur-mecanique", name: { fr: "Ingénieur en génie mécanique", de: "Maschinenbauingenieur", en: "Mechanical engineer" }, note: { fr: "Conception, machines, production", de: "Konstruktion, Maschinen", en: "Design, machines, production" } },
  { slug: "ingenieur-electrotechnique", name: { fr: "Ingénieur en électrotechnique", de: "Elektroingenieur", en: "Electrical engineer" }, note: { fr: "Électricité, électronique, énergie", de: "Elektrotechnik, Elektronik", en: "Electrical, electronics, power" } },
  { slug: "ingenieur-genie-civil", name: { fr: "Ingénieur en génie civil", de: "Bauingenieur", en: "Civil engineer" }, note: { fr: "Structures, ouvrages, chantiers", de: "Tragwerk, Bauwerke, Baustelle", en: "Structures, works, sites" } },
  { slug: "ingenieur-automobile", name: { fr: "Ingénieur automobile", de: "Fahrzeugingenieur", en: "Automotive engineer" }, note: { fr: "Véhicules, motorisation, mobilité", de: "Fahrzeugtechnik, Antrieb", en: "Vehicles, powertrain, mobility" } },
  { slug: "ingenieur-mecatronique", name: { fr: "Ingénieur mécatronique et automatisation", de: "Mechatronik- / Automatisierungsingenieur", en: "Mechatronics / automation engineer" }, note: { fr: "Robotique, automatismes, contrôle", de: "Robotik, Automatisierung", en: "Robotics, automation, control" } },
  { slug: "ingenieur-energie", name: { fr: "Ingénieur énergie et énergies renouvelables", de: "Energietechnik-Ingenieur", en: "Energy engineer" }, note: { fr: "Énergie, solaire, éolien, réseaux", de: "Energietechnik, erneuerbare Energien", en: "Energy, solar, wind, grids" } },
  { slug: "ingenieur-procedes", name: { fr: "Ingénieur procédés et chimie", de: "Verfahrenstechnik- / Chemieingenieur", en: "Process / chemical engineer" }, note: { fr: "Procédés, chimie, agroalimentaire", de: "Verfahrenstechnik, Chemie", en: "Process, chemical, food" } },
  { slug: "ingenieur-production", name: { fr: "Ingénieur production et fabrication", de: "Produktions- / Fertigungsingenieur", en: "Production / manufacturing engineer" }, note: { fr: "Industrialisation, lean, méthodes", de: "Produktion, Fertigung, Lean", en: "Industrialisation, lean, methods" } },
  { slug: "ingenieur-qualite", name: { fr: "Ingénieur qualité", de: "Qualitätsingenieur", en: "Quality engineer" }, note: { fr: "Assurance qualité, normes, audits", de: "Qualitätssicherung, Audits", en: "Quality assurance, standards, audits" } },
];

export const INGENIERIE_UI = {
  sector: { fr: "Ingénierie", de: "Ingenieurwesen", en: "Engineering" },
  metiers: { fr: "Métiers", de: "Berufe", en: "Occupations" },
  home: { fr: "Accueil", de: "Startseite", en: "Home" },
  hubTitle: {
    fr: "Métiers de l'ingénierie en Allemagne",
    de: "Ingenieurberufe in Deutschland",
    en: "Engineering professions in Germany",
  },
  hubIntro: {
    fr: "L'Allemagne manque d'ingénieurs et de techniciens qualifiés. Deux chemins s'offrent à vous selon votre situation : les ingénieurs diplômés accèdent à la Carte bleue européenne, et les métiers techniques se forment en Allemagne. Dans les deux cas, nous vous accompagnons de l'allemand jusqu'à votre poste et votre installation.",
    de: "In Deutschland fehlen Ingenieure und qualifizierte Techniker. Je nach Situation stehen Ihnen zwei Wege offen: Diplomingenieure erhalten Zugang zur Blauen Karte EU, technische Berufe werden in Deutschland ausgebildet. In beiden Fällen begleiten wir Sie vom Deutsch bis zur Stelle und zur Ankunft.",
    en: "Germany is short of engineers and qualified technicians. Two paths are open to you depending on your situation: graduate engineers qualify for the EU Blue Card, and technical roles are trained in Germany. In both cases we support you from German all the way to your role and your arrival.",
  },
  viewFiche: { fr: "Voir la fiche", de: "Zum Berufsprofil", en: "View profile" },
  apply: { fr: "Postuler", de: "Bewerben", en: "Apply" },
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
} satisfies Record<string, LocalizedText>;

// Detailed fiches: the two batch files hold the per-profession content.
export const INGENIERIE_FICHES: Record<string, IngenierieFiche> = {
  ...ING_FICHES_AUSBILDUNG,
  ...ING_FICHES_DIPLOME,
};
