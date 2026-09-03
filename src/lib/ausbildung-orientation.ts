// Orientation logic for the Ausbildung "Trouver mon parcours" evaluator. Pure and
// framework-free. Produces a PRELIMINARY, indicative orientation — never a promise of
// admission. The compatibility figure is a heuristic shown with an explicit disclaimer.

export type Niveau = "bepc" | "bac" | "bac12" | "bac3" | "formationPro" | "autre";
export type ExperienceA = "aucune" | "moins2" | "deux5" | "plus5";
export type DomaineA =
  | "sante"
  | "industrie"
  | "technique"
  | "btp"
  | "hotellerie"
  | "logistique"
  | "informatique"
  | "autre";
export type Style = "personnes" | "mains" | "machines" | "chiffres" | "organiser" | "indecis";
export type AllemandA = "aucun" | "a1" | "a2" | "b1" | "b2" | "c1";
export type Avenir = "travailler" | "specialiser" | "evoluer" | "etudier";

export type AusAnswers = {
  niveau?: Niveau;
  experience?: ExperienceA;
  domaine?: DomaineA;
  style?: Style;
  allemand?: AllemandA;
  avenir?: Avenir;
};

export const NIVEAUX: Niveau[] = ["bepc", "bac", "bac12", "bac3", "formationPro", "autre"];
export const EXPERIENCES_A: ExperienceA[] = ["aucune", "moins2", "deux5", "plus5"];
export const DOMAINES_A: DomaineA[] = [
  "sante",
  "industrie",
  "technique",
  "btp",
  "hotellerie",
  "logistique",
  "informatique",
  "autre",
];
export const STYLES: Style[] = ["personnes", "mains", "machines", "chiffres", "organiser", "indecis"];
export const ALLEMANDS_A: AllemandA[] = ["aucun", "a1", "a2", "b1", "b2", "c1"];
export const AVENIRS: Avenir[] = ["travailler", "specialiser", "evoluer", "etudier"];

// Profile-type key (resolved to a label via i18n), derived from the working style.
export type ProfileType =
  | "technique"
  | "industriel"
  | "relationnel"
  | "analytique"
  | "organisation"
  | "polyvalent";

export function profileType(a: AusAnswers): ProfileType {
  switch (a.style) {
    case "mains":
      return "technique";
    case "machines":
      return "industriel";
    case "personnes":
      return "relationnel";
    case "chiffres":
      return "analytique";
    case "organiser":
      return "organisation";
    default:
      return "polyvalent";
  }
}

// Indicative compatibility with an Ausbildung (heuristic, shown with a disclaimer).
export function compatibility(a: AusAnswers): number {
  let score = 70;
  if (a.niveau && ["bac", "bac12", "bac3", "formationPro"].includes(a.niveau)) score += 6;
  if (a.experience && a.experience !== "aucune") score += 5;
  if (a.domaine && a.domaine !== "autre") score += 5;
  if (a.allemand === "a2" || a.allemand === "a1") score += 4;
  if (a.allemand === "b1") score += 8;
  if (a.allemand === "b2" || a.allemand === "c1") score += 12;
  if (a.avenir) score += 3;
  return Math.max(62, Math.min(93, score));
}

export type TradeRec = { name: string; stars: number };

// Recommended Ausbildung trades per field. Trade names are German with a short French
// gloss (proper nouns, so the same across locales). Indicative examples, not an offer.
const TRADES: Record<DomaineA, TradeRec[]> = {
  sante: [
    { name: "Pflegefachmann / Pflegefachfrau", stars: 5 },
    { name: "Altenpfleger / Altenpflegerin", stars: 4 },
    { name: "Medizinische Fachangestellte (MFA)", stars: 4 },
  ],
  industrie: [
    { name: "Mechatroniker / Mécatronicien", stars: 5 },
    { name: "Industriemechaniker / Mécanicien industriel", stars: 4 },
    { name: "Elektroniker / Électronicien", stars: 4 },
  ],
  technique: [
    { name: "Elektroniker / Électronicien", stars: 5 },
    { name: "Mechatroniker / Mécatronicien", stars: 4 },
    { name: "Anlagenmechaniker / Technicien d'installation", stars: 4 },
  ],
  btp: [
    { name: "Anlagenmechaniker SHK / Plombier-chauffagiste", stars: 5 },
    { name: "Elektroniker / Électricien du bâtiment", stars: 4 },
    { name: "Maurer / Maçon", stars: 4 },
  ],
  hotellerie: [
    { name: "Koch / Cuisinier", stars: 5 },
    { name: "Hotelfachmann / Agent hôtelier", stars: 4 },
    { name: "Restaurantfachmann / Serveur qualifié", stars: 4 },
  ],
  logistique: [
    { name: "Fachkraft für Lagerlogistik / Agent logistique", stars: 5 },
    { name: "Kaufmann für Spedition / Gestionnaire transport", stars: 4 },
    { name: "Berufskraftfahrer / Conducteur routier", stars: 4 },
  ],
  informatique: [
    { name: "Fachinformatiker / Développeur", stars: 5 },
    { name: "IT-Systemelektroniker / Technicien systèmes", stars: 4 },
    { name: "Fachinformatiker Systemintegration", stars: 4 },
  ],
  autre: [
    { name: "Kaufmann / Employé de commerce", stars: 4 },
    { name: "Fachlagerist / Magasinier", stars: 4 },
    { name: "Verkäufer / Vendeur qualifié", stars: 3 },
  ],
};

export function recommendedTrades(a: AusAnswers): TradeRec[] {
  return TRADES[a.domaine ?? "autre"] ?? TRADES.autre;
}

// French summary for the stored lead (counselor-facing).
const FR: Record<string, Record<string, string>> = {
  niveau: {
    bepc: "BEPC / équivalent",
    bac: "Baccalauréat",
    bac12: "Bac +1 / +2",
    bac3: "Bac +3 ou plus",
    formationPro: "Formation professionnelle",
    autre: "Autre",
  },
  experience: { aucune: "Aucune", moins2: "Moins de 2 ans", deux5: "2 à 5 ans", plus5: "Plus de 5 ans" },
  domaine: {
    sante: "Santé",
    industrie: "Industrie",
    technique: "Technique",
    btp: "BTP",
    hotellerie: "Hôtellerie & restauration",
    logistique: "Logistique",
    informatique: "Informatique",
    autre: "Autre",
  },
  style: {
    personnes: "Avec les personnes",
    mains: "Avec les mains / équipements",
    machines: "Avec les machines / technologies",
    chiffres: "Avec les chiffres / données",
    organiser: "Organiser et coordonner",
    indecis: "Ne sait pas encore",
  },
  allemand: { aucun: "Aucun", a1: "A1", a2: "A2", b1: "B1", b2: "B2", c1: "C1+" },
  avenir: {
    travailler: "Travailler",
    specialiser: "Se spécialiser",
    evoluer: "Évoluer vers des responsabilités",
    etudier: "Poursuivre des études",
  },
  profile: {
    technique: "Profil technique & pratique",
    industriel: "Profil technique & industriel",
    relationnel: "Profil relationnel & service",
    analytique: "Profil analytique",
    organisation: "Profil organisation & coordination",
    polyvalent: "Profil polyvalent",
  },
};

export function buildAusSummary(a: AusAnswers): string {
  const pt = profileType(a);
  const trades = recommendedTrades(a).map((tr) => tr.name).join(", ");
  const line = (label: string, group: string, key?: string) =>
    `${label} : ${(key && FR[group]?.[key]) || "—"}`;
  return [
    "[Orientation Ausbildung]",
    line("Niveau de formation", "niveau", a.niveau),
    line("Expérience", "experience", a.experience),
    line("Domaine souhaité", "domaine", a.domaine),
    line("Style de travail", "style", a.style),
    line("Allemand", "allemand", a.allemand),
    line("Projet d'avenir", "avenir", a.avenir),
    "—",
    `Profil : ${FR.profile[pt]} (compatibilité indicative ${compatibility(a)} %)`,
    `Ausbildungen suggérées : ${trades}`,
  ].join("\n");
}
