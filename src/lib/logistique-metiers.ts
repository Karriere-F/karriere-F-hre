// Logistics / transport professions and their detailed fiches. Static,
// trilingual and grounded in public German data (salaries: Entgeltatlas /
// Gehalt.de / StepStone), never invented. Numbers are given as ranges with a
// source note and a disclaimer on every fiche. New fiches are added under the
// batch files as their content is researched; list items without a fiche route
// to "Postuler" until their fiche is written.

import type { LocalizedText } from "./localized";
import type { LogistiqueFiche } from "./logistique-fiche-types";
import { LOG_FICHES_AUSBILDUNG } from "./logistique-fiches/ausbildung";
import { LOG_FICHES_DIPLOME } from "./logistique-fiches/diplome";

export { tr } from "./localized";
export type { LocalizedText };
export type { LogistiqueFiche, FicheSection, FicheFaq } from "./logistique-fiche-types";

export type LogistiqueMetier = {
  slug: string;
  /** Display name (German title kept for the Ausbildung path, the searched term). */
  name: LocalizedText;
  /** Short gloss shown under the name. */
  note: LocalizedText;
};

// Path 1, "Je veux faire une Ausbildung" (train in Germany). German titles are
// the real, searched terms; the note carries the local-language gloss.
export const LOGISTIQUE_AUSBILDUNG_METIERS: LogistiqueMetier[] = [
  {
    slug: "fachkraft-lagerlogistik",
    name: { fr: "Fachkraft für Lagerlogistik", de: "Fachkraft für Lagerlogistik", en: "Fachkraft für Lagerlogistik" },
    note: { fr: "Logisticien d'entrepôt", de: "Lagerlogistik", en: "Warehouse logistics specialist" },
  },
  {
    slug: "berufskraftfahrer",
    name: { fr: "Berufskraftfahrer", de: "Berufskraftfahrer", en: "Berufskraftfahrer" },
    note: { fr: "Conducteur routier (permis C/CE inclus)", de: "Güterverkehr, C/CE", en: "Professional truck driver" },
  },
  {
    slug: "fachlagerist",
    name: { fr: "Fachlagerist", de: "Fachlagerist", en: "Fachlagerist" },
    note: { fr: "Opérateur logistique, préparateur", de: "Lager, Kommissionierung", en: "Warehouse operative" },
  },
  {
    slug: "kaufmann-spedition",
    name: { fr: "Kaufmann für Spedition und Logistikdienstleistung", de: "Kaufmann für Spedition und Logistikdienstleistung", en: "Kaufmann für Spedition und Logistikdienstleistung" },
    note: { fr: "Agent de transit et logistique", de: "Spedition, Logistikdienstleistung", en: "Forwarding and logistics clerk" },
  },
  {
    slug: "fachkraft-kep",
    name: { fr: "Fachkraft für Kurier-, Express- und Postdienstleistungen", de: "Fachkraft für Kurier-, Express- und Postdienstleistungen", en: "Fachkraft für Kurier-, Express- und Postdienstleistungen" },
    note: { fr: "Courrier, express et poste (KEP)", de: "Kurier, Express, Post", en: "Courier, express and postal services" },
  },
];

// Path 2, "Je suis déjà qualifié" (already qualified, seeking recognition +
// placement). Titles in the reader's language, with the German market term.
export const LOGISTIQUE_DIPLOME_METIERS: LogistiqueMetier[] = [
  { slug: "conducteur-poids-lourd", name: { fr: "Conducteur poids lourd", de: "Berufskraftfahrer (LKW)", en: "Truck driver" }, note: { fr: "Transport de marchandises, permis C/CE", de: "Güterverkehr, C/CE", en: "Goods transport, C/CE licence" } },
  { slug: "conducteur-bus", name: { fr: "Conducteur de bus", de: "Busfahrer", en: "Bus driver" }, note: { fr: "Transport de personnes, permis D", de: "Personenverkehr, Klasse D", en: "Passenger transport, class D licence" } },
  { slug: "cariste", name: { fr: "Cariste", de: "Staplerfahrer", en: "Forklift operator" }, note: { fr: "Chariot élévateur, entrepôt", de: "Stapler, Lager", en: "Forklift, warehouse" } },
  { slug: "magasinier", name: { fr: "Magasinier, préparateur de commandes", de: "Lagerist / Kommissionierer", en: "Warehouse worker, order picker" }, note: { fr: "Réception, stockage, préparation", de: "Wareneingang, Kommissionierung", en: "Receiving, storage, picking" } },
  { slug: "agent-transit", name: { fr: "Agent de transit et douane", de: "Speditionskaufmann", en: "Forwarding and customs clerk" }, note: { fr: "Transit, douane, affrètement", de: "Spedition, Zoll, Disposition", en: "Forwarding, customs, dispatch" } },
  { slug: "responsable-entrepot", name: { fr: "Responsable d'entrepôt", de: "Lagerleiter", en: "Warehouse manager" }, note: { fr: "Gestion d'équipe et de stock", de: "Team- und Bestandsführung", en: "Team and inventory management" } },
  { slug: "disponent", name: { fr: "Affréteur, gestionnaire de parc", de: "Disponent / Fuhrparkdisponent", en: "Dispatcher, fleet planner" }, note: { fr: "Planification transport et tournées", de: "Transportplanung, Disposition", en: "Transport planning and dispatch" } },
  { slug: "chauffeur-livreur", name: { fr: "Chauffeur-livreur", de: "Auslieferungsfahrer / KEP-Fahrer", en: "Delivery driver" }, note: { fr: "Livraison, express, colis", de: "Auslieferung, KEP, Pakete", en: "Delivery, express, parcels" } },
];

export const LOGISTIQUE_UI = {
  sector: { fr: "Logistique & Transport", de: "Logistik & Transport", en: "Logistics & Transport" },
  metiers: { fr: "Métiers", de: "Berufe", en: "Occupations" },
  home: { fr: "Accueil", de: "Startseite", en: "Home" },
  hubTitle: {
    fr: "Métiers de la logistique et du transport en Allemagne",
    de: "Berufe in Logistik und Transport in Deutschland",
    en: "Logistics and transport professions in Germany",
  },
  hubIntro: {
    fr: "L'Allemagne manque de conducteurs, de logisticiens et de personnel d'entrepôt. Deux chemins s'offrent à vous selon votre situation, dans les deux cas nous vous accompagnons de l'allemand jusqu'à votre poste et votre installation.",
    de: "In Deutschland fehlen Fahrer, Logistiker und Lagerpersonal. Je nach Situation stehen Ihnen zwei Wege offen, in beiden Fällen begleiten wir Sie vom Deutsch bis zur Stelle und zur Ankunft.",
    en: "Germany is short of drivers, logisticians and warehouse staff. Two paths are open to you depending on your situation, in both cases we support you from German all the way to your role and your arrival.",
  },
  viewFiche: { fr: "Voir la fiche", de: "Zum Berufsprofil", en: "View profile" },
  apply: { fr: "Postuler", de: "Bewerben", en: "Apply" },
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
} satisfies Record<string, LocalizedText>;

// Detailed fiches: the two batch files hold the per-profession content.
export const LOGISTIQUE_FICHES: Record<string, LogistiqueFiche> = {
  ...LOG_FICHES_AUSBILDUNG,
  ...LOG_FICHES_DIPLOME,
};
