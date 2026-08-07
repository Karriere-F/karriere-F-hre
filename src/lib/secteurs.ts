// "Secteurs" navigation: choose a route (Ausbildung / already qualified), then a
// sector, then a profession. Only "Santé" is populated for now; the other
// sectors show as "Bientôt disponible" until their content is built.

import { Cog, Cpu, HardHat, HeartPulse, Truck, UtensilsCrossed, Wrench, type LucideIcon } from "lucide-react";
import type { LocalizedText } from "./sante-metiers";

export type Sector = {
  slug: string;
  name: LocalizedText;
  icon: LucideIcon;
  active: boolean; // false => "Bientôt disponible"
};

const SANTE: Sector = { slug: "sante", name: { fr: "Santé", de: "Gesundheit", en: "Healthcare" }, icon: HeartPulse, active: true };
const INDUSTRIE: Sector = { slug: "industrie", name: { fr: "Industrie", de: "Industrie", en: "Industry" }, icon: Cog, active: false };
const INFORMATIQUE: Sector = { slug: "informatique", name: { fr: "Informatique", de: "IT", en: "IT" }, icon: Cpu, active: false };
const CONSTRUCTION: Sector = { slug: "construction", name: { fr: "Construction / BTP", de: "Bau", en: "Construction" }, icon: HardHat, active: false };
const LOGISTIQUE: Sector = { slug: "logistique", name: { fr: "Logistique", de: "Logistik", en: "Logistics" }, icon: Truck, active: false };
const HOTELLERIE: Sector = { slug: "hotellerie", name: { fr: "Hôtellerie-Restauration", de: "Hotel & Gastronomie", en: "Hospitality" }, icon: UtensilsCrossed, active: false };
const INGENIERIE: Sector = { slug: "ingenierie", name: { fr: "Ingénierie", de: "Ingenieurwesen", en: "Engineering" }, icon: Wrench, active: false };

// Sector-first navigation: one list of sectors; the route (Ausbildung / already
// qualified) is chosen inside each sector.
export const SECTORS_ALL: Sector[] = [
  SANTE,
  INGENIERIE,
  INDUSTRIE,
  INFORMATIQUE,
  CONSTRUCTION,
  LOGISTIQUE,
  HOTELLERIE,
];

export const SECTEURS_UI = {
  home: { fr: "Accueil", de: "Startseite", en: "Home" },
  secteurs: { fr: "Secteurs", de: "Branchen", en: "Sectors" },
  hubTitle: { fr: "Travailler ou se former en Allemagne", de: "In Deutschland arbeiten oder sich ausbilden", en: "Work or train in Germany" },
  hubIntro: {
    fr: "Choisissez votre secteur, puis votre parcours : nous vous accompagnons de l'allemand jusqu'à votre poste et votre installation.",
    de: "Wählen Sie Ihre Branche und dann Ihren Weg: Wir begleiten Sie vom Deutsch bis zur Stelle und zur Ankunft.",
    en: "Choose your sector, then your path: we support you from German all the way to your role and your arrival.",
  },
  chooseRouteTitle: { fr: "Choisissez votre parcours", de: "Wählen Sie Ihren Weg", en: "Choose your path" },
  routeAusbildungTitle: { fr: "Je veux faire une Ausbildung", de: "Ich möchte eine Ausbildung machen", en: "I want to do an Ausbildung" },
  routeAusbildungIntro: {
    fr: "Vous vous formez directement en Allemagne : une formation rémunérée, diplômante et reconnue.",
    de: "Sie werden direkt in Deutschland ausgebildet: eine vergütete, anerkannte Ausbildung mit Abschluss.",
    en: "You train directly in Germany: a paid, recognised, qualifying programme.",
  },
  routeDiplomeTitle: { fr: "Je suis déjà diplômé", de: "Ich bin bereits qualifiziert", en: "I am already qualified" },
  routeDiplomeIntro: {
    fr: "Vous êtes déjà qualifié : nous faisons reconnaître votre diplôme et vous plaçons auprès d'un employeur.",
    de: "Sie sind bereits qualifiziert: Wir lassen Ihren Abschluss anerkennen und vermitteln Sie an einen Arbeitgeber.",
    en: "You are already qualified: we get your diploma recognised and place you with an employer.",
  },
  chooseSectorTitle: { fr: "Choisissez votre secteur", de: "Wählen Sie Ihre Branche", en: "Choose your sector" },
  choose: { fr: "Choisir", de: "Auswählen", en: "Choose" },
  comingSoon: { fr: "Bientôt disponible", de: "Bald verfügbar", en: "Coming soon" },
  backToSecteurs: { fr: "Tous les secteurs", de: "Alle Branchen", en: "All sectors" },
  backToRoute: { fr: "Choisir un autre parcours", de: "Anderen Weg wählen", en: "Choose another path" },
} satisfies Record<string, LocalizedText>;
