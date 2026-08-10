// Hospitality / catering (Hôtellerie-Restauration) professions and their detailed
// fiches. Static, trilingual and grounded in public German data (salaries:
// Entgeltatlas / Gehalt.de / StepStone / DEHOGA), never invented. Numbers are
// given as ranges with a source note and a disclaimer on every fiche. New fiches
// are added under the batch files as their content is researched; list items
// without a fiche route to "Postuler" until their fiche is written.

import type { LocalizedText } from "./localized";
import type { HotellerieFiche } from "./hotellerie-fiche-types";
import { HOT_FICHES_AUSBILDUNG } from "./hotellerie-fiches/ausbildung";
import { HOT_FICHES_DIPLOME } from "./hotellerie-fiches/diplome";

export { tr } from "./localized";
export type { LocalizedText };
export type { HotellerieFiche, FicheSection, FicheFaq } from "./hotellerie-fiche-types";

export type HotellerieMetier = {
  slug: string;
  /** Display name (German title kept for the Ausbildung path, the searched term). */
  name: LocalizedText;
  /** Short gloss shown under the name. */
  note: LocalizedText;
};

// Path 1, "Je veux faire une Ausbildung" (train in Germany). German titles are
// the real, searched terms; the note carries the local-language gloss.
export const HOTELLERIE_AUSBILDUNG_METIERS: HotellerieMetier[] = [
  {
    slug: "koch",
    name: { fr: "Koch / Köchin", de: "Koch / Köchin", en: "Koch / Köchin" },
    note: { fr: "Cuisinier", de: "Küche", en: "Chef, cook" },
  },
  {
    slug: "hotelfachmann",
    name: { fr: "Hotelfachmann / Hotelfachfrau", de: "Hotelfachmann / Hotelfachfrau", en: "Hotelfachmann / Hotelfachfrau" },
    note: { fr: "Agent hôtelier polyvalent", de: "Hotelfach", en: "Hotel specialist" },
  },
  {
    slug: "fachmann-restaurants-veranstaltung",
    name: { fr: "Fachmann für Restaurants und Veranstaltungsgastronomie", de: "Fachmann für Restaurants und Veranstaltungsgastronomie", en: "Fachmann für Restaurants und Veranstaltungsgastronomie" },
    note: { fr: "Service en restaurant et événementiel", de: "Restaurant- und Veranstaltungsservice", en: "Restaurant and events service" },
  },
  {
    slug: "fachkraft-kueche",
    name: { fr: "Fachkraft für Küche", de: "Fachkraft für Küche", en: "Fachkraft für Küche" },
    note: { fr: "Commis de cuisine (formation en 2 ans)", de: "Küche, 2 Jahre", en: "Kitchen assistant, 2-year" },
  },
  {
    slug: "kaufmann-hotelmanagement",
    name: { fr: "Kaufmann für Hotelmanagement", de: "Kaufmann für Hotelmanagement", en: "Kaufmann für Hotelmanagement" },
    note: { fr: "Gestion hôtelière (commercial)", de: "Hotelmanagement, kaufmännisch", en: "Hotel management, commercial" },
  },
];

// Path 2, "Je suis déjà qualifié" (already qualified, seeking recognition +
// placement). Titles in the reader's language, with the German market term.
export const HOTELLERIE_DIPLOME_METIERS: HotellerieMetier[] = [
  { slug: "cuisinier", name: { fr: "Cuisinier", de: "Koch / Köchin", en: "Cook" }, note: { fr: "Cuisine, préparation, service", de: "Küche, Zubereitung", en: "Kitchen, preparation" } },
  { slug: "chef-cuisine", name: { fr: "Chef de cuisine", de: "Küchenchef", en: "Head chef" }, note: { fr: "Direction de brigade et cartes", de: "Küchenleitung, Brigade", en: "Kitchen leadership, brigade" } },
  { slug: "serveur", name: { fr: "Serveur, personnel de salle", de: "Restaurantfachkraft / Kellner", en: "Waiter, service staff" }, note: { fr: "Service, accueil, encaissement", de: "Service, Gästebetreuung", en: "Service, guest care" } },
  { slug: "receptionniste", name: { fr: "Réceptionniste d'hôtel", de: "Rezeptionist / Empfang", en: "Hotel receptionist" }, note: { fr: "Accueil, check-in, réservations", de: "Empfang, Check-in, Reservierung", en: "Front office, check-in, bookings" } },
  { slug: "gouvernante", name: { fr: "Gouvernant(e), housekeeping", de: "Hausdame / Housekeeping", en: "Housekeeping supervisor" }, note: { fr: "Étages, propreté, encadrement", de: "Etage, Sauberkeit, Führung", en: "Floors, cleanliness, supervision" } },
  { slug: "barman", name: { fr: "Barman, barmaid", de: "Barkeeper / Barmixer", en: "Bartender" }, note: { fr: "Bar, cocktails, service", de: "Bar, Cocktails, Service", en: "Bar, cocktails, service" } },
  { slug: "patissier", name: { fr: "Pâtissier", de: "Konditor", en: "Pastry chef" }, note: { fr: "Pâtisserie, desserts, confiserie", de: "Patisserie, Desserts", en: "Pastry, desserts, confectionery" } },
  { slug: "responsable-restauration", name: { fr: "Responsable de restauration (F&B)", de: "Restaurantleiter / F&B-Manager", en: "Restaurant / F&B manager" }, note: { fr: "Gestion salle, équipe et carte", de: "Leitung Service, Team, F&B", en: "Service, team and F&B management" } },
];

export const HOTELLERIE_UI = {
  sector: { fr: "Hôtellerie-Restauration", de: "Hotel & Gastronomie", en: "Hospitality" },
  metiers: { fr: "Métiers", de: "Berufe", en: "Occupations" },
  home: { fr: "Accueil", de: "Startseite", en: "Home" },
  hubTitle: {
    fr: "Métiers de l'hôtellerie et de la restauration en Allemagne",
    de: "Berufe in Hotellerie und Gastronomie in Deutschland",
    en: "Hospitality and catering professions in Germany",
  },
  hubIntro: {
    fr: "L'hôtellerie-restauration allemande manque de cuisiniers, de personnel de service et de réception. Deux chemins s'offrent à vous selon votre situation, dans les deux cas nous vous accompagnons de l'allemand jusqu'à votre poste et votre installation.",
    de: "Der deutschen Hotellerie und Gastronomie fehlen Köche, Service- und Empfangspersonal. Je nach Situation stehen Ihnen zwei Wege offen, in beiden Fällen begleiten wir Sie vom Deutsch bis zur Stelle und zur Ankunft.",
    en: "German hospitality and catering are short of cooks, service and front-office staff. Two paths are open to you depending on your situation, in both cases we support you from German all the way to your role and your arrival.",
  },
  viewFiche: { fr: "Voir la fiche", de: "Zum Berufsprofil", en: "View profile" },
  apply: { fr: "Postuler", de: "Bewerben", en: "Apply" },
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
} satisfies Record<string, LocalizedText>;

// Detailed fiches: the two batch files hold the per-profession content.
export const HOTELLERIE_FICHES: Record<string, HotellerieFiche> = {
  ...HOT_FICHES_AUSBILDUNG,
  ...HOT_FICHES_DIPLOME,
};
