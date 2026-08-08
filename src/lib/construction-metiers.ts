// Construction / building-trade (BTP) professions and their detailed fiches.
// Static, trilingual and grounded in public German data (salaries: Entgeltatlas /
// Gehalt.de / StepStone / Bau-Hauptgewerbe tariff), never invented. Numbers are
// given as ranges with a source note and a disclaimer on every fiche. New fiches
// are added under the batch files as their content is researched; list items
// without a fiche route to "Postuler" until their fiche is written.

import type { LocalizedText } from "./localized";
import type { ConstructionFiche } from "./construction-fiche-types";
import { CONSTR_FICHES_AUSBILDUNG } from "./construction-fiches/ausbildung";
import { CONSTR_FICHES_DIPLOME } from "./construction-fiches/diplome";

export { tr } from "./localized";
export type { LocalizedText };
export type { ConstructionFiche, FicheSection, FicheFaq } from "./construction-fiche-types";

export type ConstructionMetier = {
  slug: string;
  /** Display name (German title kept for the Ausbildung path, the searched term). */
  name: LocalizedText;
  /** Short gloss shown under the name. */
  note: LocalizedText;
};

// Path 1, "Je veux faire une Ausbildung" (train in Germany). German titles are
// the real, searched terms; the note carries the local-language gloss.
export const CONSTRUCTION_AUSBILDUNG_METIERS: ConstructionMetier[] = [
  {
    slug: "maurer",
    name: { fr: "Maurer", de: "Maurer", en: "Maurer" },
    note: { fr: "Maçon", de: "Maurerhandwerk", en: "Bricklayer, mason" },
  },
  {
    slug: "anlagenmechaniker-shk",
    name: { fr: "Anlagenmechaniker SHK", de: "Anlagenmechaniker SHK", en: "Anlagenmechaniker SHK" },
    note: { fr: "Plombier, chauffagiste, climaticien", de: "Sanitaer, Heizung, Klima", en: "Plumbing, heating, HVAC" },
  },
  {
    slug: "elektroniker-gebaeudetechnik",
    name: { fr: "Elektroniker für Energie- und Gebäudetechnik", de: "Elektroniker für Energie- und Gebäudetechnik", en: "Elektroniker für Energie- und Gebäudetechnik" },
    note: { fr: "Électricien du bâtiment", de: "Energie- und Gebäudetechnik", en: "Building electrician" },
  },
  {
    slug: "zimmerer",
    name: { fr: "Zimmerer", de: "Zimmerer", en: "Zimmerer" },
    note: { fr: "Charpentier", de: "Zimmererhandwerk", en: "Carpenter, timber framer" },
  },
  {
    slug: "stahlbetonbauer",
    name: { fr: "Beton- und Stahlbetonbauer", de: "Beton- und Stahlbetonbauer", en: "Beton- und Stahlbetonbauer" },
    note: { fr: "Constructeur béton armé, coffreur-bancheur", de: "Beton- und Stahlbetonbau", en: "Concrete and reinforced-concrete builder" },
  },
];

// Path 2, "Je suis déjà qualifié" (already qualified, seeking recognition +
// placement). Titles in the reader's language, with the German market term.
export const CONSTRUCTION_DIPLOME_METIERS: ConstructionMetier[] = [
  { slug: "macon", name: { fr: "Maçon", de: "Maurer", en: "Bricklayer" }, note: { fr: "Gros oeuvre, briques et béton", de: "Rohbau, Mauerwerk", en: "Structural work, masonry" } },
  { slug: "plombier-chauffagiste", name: { fr: "Plombier-chauffagiste", de: "Anlagenmechaniker SHK", en: "Plumber, heating installer" }, note: { fr: "Sanitaire, chauffage, climatisation", de: "Sanitaer, Heizung, Klima", en: "Sanitary, heating, HVAC" } },
  { slug: "electricien-batiment", name: { fr: "Électricien du bâtiment", de: "Elektroniker für Gebäudetechnik", en: "Building electrician" }, note: { fr: "Installations électriques du bâtiment", de: "Elektroinstallation", en: "Building electrical systems" } },
  { slug: "charpentier", name: { fr: "Charpentier", de: "Zimmerer", en: "Carpenter" }, note: { fr: "Charpente et construction bois", de: "Holzbau, Dachstuhl", en: "Timber framing, roofing structure" } },
  { slug: "couvreur", name: { fr: "Couvreur", de: "Dachdecker", en: "Roofer" }, note: { fr: "Toitures et étanchéité", de: "Dach, Abdichtung", en: "Roofing and sealing" } },
  { slug: "carreleur", name: { fr: "Carreleur", de: "Fliesenleger", en: "Tiler" }, note: { fr: "Carrelage, faïence, revêtements", de: "Fliesen, Platten", en: "Tiling and coverings" } },
  { slug: "peintre", name: { fr: "Peintre en bâtiment", de: "Maler und Lackierer", en: "Painter and decorator" }, note: { fr: "Peinture, enduits, finitions", de: "Malerarbeiten, Beschichtungen", en: "Painting, coatings, finishes" } },
  { slug: "conducteur-engins", name: { fr: "Conducteur d'engins de chantier", de: "Baugeräteführer", en: "Construction machine operator" }, note: { fr: "Pelle, grue, engins de terrassement", de: "Bagger, Kran, Baumaschinen", en: "Excavator, crane, earthmoving" } },
];

export const CONSTRUCTION_UI = {
  sector: { fr: "Construction / BTP", de: "Bau", en: "Construction" },
  metiers: { fr: "Métiers", de: "Berufe", en: "Occupations" },
  home: { fr: "Accueil", de: "Startseite", en: "Home" },
  hubTitle: {
    fr: "Métiers du bâtiment en Allemagne",
    de: "Bauberufe in Deutschland",
    en: "Construction professions in Germany",
  },
  hubIntro: {
    fr: "Le bâtiment allemand manque de maçons, plombiers-chauffagistes, électriciens, charpentiers et couvreurs. Deux chemins s'offrent à vous selon votre situation, dans les deux cas nous vous accompagnons de l'allemand jusqu'à votre poste et votre installation.",
    de: "Dem deutschen Bau fehlen Maurer, Anlagenmechaniker SHK, Elektroniker, Zimmerer und Dachdecker. Je nach Situation stehen Ihnen zwei Wege offen, in beiden Fällen begleiten wir Sie vom Deutsch bis zur Stelle und zur Ankunft.",
    en: "German construction is short of bricklayers, plumbers, electricians, carpenters and roofers. Two paths are open to you depending on your situation, in both cases we support you from German all the way to your role and your arrival.",
  },
  viewFiche: { fr: "Voir la fiche", de: "Zum Berufsprofil", en: "View profile" },
  apply: { fr: "Postuler", de: "Bewerben", en: "Apply" },
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
} satisfies Record<string, LocalizedText>;

// Detailed fiches: the two batch files hold the per-profession content.
export const CONSTRUCTION_FICHES: Record<string, ConstructionFiche> = {
  ...CONSTR_FICHES_AUSBILDUNG,
  ...CONSTR_FICHES_DIPLOME,
};
