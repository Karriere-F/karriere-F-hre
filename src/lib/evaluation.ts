// Orientation logic for the "Évaluer mon profil" diagnostic. Pure, framework-free
// so it runs in the client wizard and in the server action that stores the lead.
//
// This is a PRELIMINARY orientation, never a decision: the disclaimer shown to the
// candidate makes clear the real eligibility depends on a human review of the file.

export type Objectif = "ausbildung" | "emploi" | "former" | "indecis";
export type Etudes = "sans" | "bepc" | "bac" | "bac2" | "bac3" | "bac45" | "autre";
export type Domaine =
  | "sante"
  | "btp"
  | "industrie"
  | "informatique"
  | "ingenierie"
  | "hotellerie"
  | "logistique"
  | "autre";
export type Qualification = "qualif_pro" | "diplome_univ" | "experience" | "en_formation" | "non";
export type Experience = "0" | "<1" | "1-2" | "3-5" | "5+";
export type Allemand = "aucun" | "a1" | "a2" | "b1" | "b2" | "c1";
export type OuiNon = "oui" | "non";

export type Answers = {
  objectif?: Objectif;
  etudes?: Etudes;
  domaine?: Domaine;
  qualification?: Qualification;
  experience?: Experience;
  allemand?: Allemand;
  certificat?: OuiNon;
  age?: string;
};

// Option ids, single source of truth shared by the wizard UI and the label maps.
export const OBJECTIFS: Objectif[] = ["ausbildung", "emploi", "former", "indecis"];
export const ETUDES: Etudes[] = ["sans", "bepc", "bac", "bac2", "bac3", "bac45", "autre"];
export const DOMAINES: Domaine[] = [
  "sante",
  "btp",
  "industrie",
  "informatique",
  "ingenierie",
  "hotellerie",
  "logistique",
  "autre",
];
export const QUALIFICATIONS: Qualification[] = [
  "qualif_pro",
  "diplome_univ",
  "experience",
  "en_formation",
  "non",
];
export const EXPERIENCES: Experience[] = ["0", "<1", "1-2", "3-5", "5+"];
export const ALLEMANDS: Allemand[] = ["aucun", "a1", "a2", "b1", "b2", "c1"];

export type Path = "ausbildung" | "emploi" | "preparation";
export type Compat = "elevee" | "prometteuse" | "aConstruire";

export type Recommendation = { path: Path; compat: Compat };

// The decision. Primary axis is whether the candidate already holds a recognised-style
// qualification (professional or academic) with real experience → direct employment is
// conceivable; otherwise a paid Ausbildung is the natural route. Language readiness and
// the stated objective refine the outcome, and a candidate with no German yet who is
// undecided is steered to a preparation-first track.
export function recommend(a: Answers): Recommendation {
  const qualified = a.qualification === "qualif_pro" || a.qualification === "diplome_univ";
  const hasExperience =
    a.experience === "1-2" || a.experience === "3-5" || a.experience === "5+";
  const germanReady =
    a.allemand === "b1" || a.allemand === "b2" || a.allemand === "c1" || a.certificat === "oui";
  const germanNone = a.allemand === "aucun" || a.allemand === "a1";

  let path: Path = qualified && hasExperience ? "emploi" : "ausbildung";

  // The stated objective is respected where it is compatible with the profile.
  if (a.objectif === "ausbildung") path = "ausbildung";
  // Direct employment requires a recognised qualification; without it, Ausbildung first.
  if (a.objectif === "emploi" && !qualified) path = "ausbildung";

  // No German yet + undecided (or unqualified starting from zero) → preparation first.
  if (germanNone && (a.objectif === "indecis" || (!qualified && a.allemand === "aucun"))) {
    path = "preparation";
  }

  let compat: Compat;
  if (path === "emploi") {
    compat = germanReady ? "prometteuse" : "aConstruire";
  } else if (path === "ausbildung") {
    compat = germanNone ? "aConstruire" : "elevee";
  } else {
    compat = "aConstruire";
  }

  return { path, compat };
}

// French labels, used to write the lead summary stored for the (francophone) counselor.
const FR: Record<string, Record<string, string>> = {
  objectif: {
    ausbildung: "Faire une Ausbildung en Allemagne",
    emploi: "Travailler directement en Allemagne",
    former: "Se former puis travailler",
    indecis: "Ne sait pas encore quel parcours choisir",
  },
  etudes: {
    sans: "Sans diplôme",
    bepc: "BEPC / équivalent",
    bac: "Bac",
    bac2: "Bac +2",
    bac3: "Bac +3",
    bac45: "Bac +4/5",
    autre: "Autre",
  },
  domaine: {
    sante: "Santé",
    btp: "BTP",
    industrie: "Industrie",
    informatique: "Informatique",
    ingenierie: "Ingénierie",
    hotellerie: "Hôtellerie-Restauration",
    logistique: "Logistique",
    autre: "Autre",
  },
  qualification: {
    qualif_pro: "Qualification professionnelle",
    diplome_univ: "Diplôme universitaire",
    experience: "Expérience sans qualification reconnue",
    en_formation: "Encore en formation",
    non: "Non",
  },
  experience: {
    "0": "0 an",
    "<1": "Moins d'un an",
    "1-2": "1 à 2 ans",
    "3-5": "3 à 5 ans",
    "5+": "Plus de 5 ans",
  },
  allemand: {
    aucun: "Ne parle pas allemand",
    a1: "A1",
    a2: "A2",
    b1: "B1",
    b2: "B2",
    c1: "C1+",
  },
  path: {
    ausbildung: "AUSBILDUNG",
    emploi: "EMPLOI DIRECT",
    preparation: "PRÉPARATION",
  },
  compat: {
    elevee: "élevée",
    prometteuse: "prometteuse",
    aConstruire: "à construire",
  },
};

// French label for a stored code (used by the summary and the admin list). Groups:
// objectif · etudes · domaine · qualification · experience · allemand · path · compat.
export function frLabel(group: string, key?: string | null): string {
  if (!key) return "—";
  return FR[group]?.[key] ?? key;
}

// Human-readable French summary of the whole evaluation, stored with the lead so a
// counselor can read the profile and the computed orientation at a glance.
export function buildSummary(a: Answers): string {
  const rec = recommend(a);
  const line = (label: string, group: string, key?: string) =>
    `${label} : ${(key && FR[group]?.[key]) || "—"}`;
  return [
    "[Évaluation de profil]",
    line("Objectif", "objectif", a.objectif),
    line("Niveau d'études", "etudes", a.etudes),
    line("Domaine", "domaine", a.domaine),
    line("Qualification", "qualification", a.qualification),
    line("Expérience", "experience", a.experience),
    line("Allemand", "allemand", a.allemand),
    `Certificat d'allemand : ${a.certificat === "oui" ? "Oui" : a.certificat === "non" ? "Non" : "—"}`,
    `Âge : ${a.age || "—"}`,
    "—",
    `Orientation préliminaire : ${FR.path[rec.path]} (compatibilité ${FR.compat[rec.compat]})`,
  ].join("\n");
}
