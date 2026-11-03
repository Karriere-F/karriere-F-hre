import type {
  CandidateStatus,
  CourseStatus,
  Currency,
  DocumentStatus,
  EnrollmentStatus,
  ExamStatus,
  GermanLevel,
  InvoiceStatus,
  PaymentMethod,
  PlacementStage,
  StaffRole,
  TaskPriority,
  TaskStatus,
} from "@/types/database.types";

export type Tone = "neutral" | "gold" | "good" | "warn" | "bad";

// Ordered: this is also the pipeline order on the placements board.
export const PLACEMENT_STAGES: { key: PlacementStage; label: string }[] = [
  { key: "training", label: "Formation langue" },
  { key: "recognition", label: "Reconnaissance diplôme" },
  { key: "matching", label: "Recherche employeur" },
  { key: "interview", label: "Entretiens" },
  { key: "contract", label: "Contrat signé" },
  { key: "visa", label: "Visa" },
  { key: "travel", label: "Départ" },
  { key: "placed", label: "En poste" },
  { key: "dropped", label: "Abandon" },
];
export const stageLabel = (s: PlacementStage) =>
  PLACEMENT_STAGES.find((x) => x.key === s)?.label ?? s;
export const stageTone = (s: PlacementStage): Tone =>
  s === "placed" ? "good" : s === "dropped" ? "bad" : s === "visa" || s === "travel" ? "gold" : "neutral";

export const TRACKS = [
  { key: "fachkraft", label: "Emploi qualifié" },
  { key: "ausbildung", label: "Ausbildung" },
  { key: "chancenkarte", label: "Chancenkarte" },
];
export const trackLabel = (t: string) => TRACKS.find((x) => x.key === t)?.label ?? t;

export const CANDIDATE_STATUSES: { key: CandidateStatus; label: string }[] = [
  { key: "new", label: "Nouveau" },
  { key: "in_training", label: "En formation" },
  { key: "ready", label: "Prêt" },
  { key: "placed", label: "Placé" },
  { key: "inactive", label: "Inactif" },
];
export const candidateStatusLabel = (s: CandidateStatus) =>
  CANDIDATE_STATUSES.find((x) => x.key === s)?.label ?? s;

export const GERMAN_LEVELS: { key: GermanLevel; label: string }[] = [
  { key: "none", label: "Aucun" },
  { key: "a1", label: "A1" },
  { key: "a2", label: "A2" },
  { key: "b1", label: "B1" },
  { key: "b2", label: "B2" },
  { key: "c1", label: "C1" },
  { key: "c2", label: "C2" },
];
export const levelLabel = (l: GermanLevel) => GERMAN_LEVELS.find((x) => x.key === l)?.label ?? l;

// The standard dossier for a skilled worker going to Germany. Every candidate dossier shows
// this checklist; rows only exist in candidate_documents once something has been recorded.
export const DOCUMENT_TYPES = [
  { key: "passport", label: "Passeport" },
  { key: "birth_certificate", label: "Acte de naissance" },
  { key: "photos", label: "Photos biométriques" },
  { key: "cv_german", label: "CV en allemand" },
  { key: "diploma", label: "Diplômes" },
  { key: "transcripts", label: "Relevés de notes" },
  { key: "work_certificates", label: "Attestations de travail" },
  { key: "translations", label: "Traductions assermentées" },
  { key: "language_certificate", label: "Certificat de langue" },
  { key: "recognition_decision", label: "Décision de reconnaissance" },
  { key: "police_record", label: "Casier judiciaire" },
  { key: "employment_contract", label: "Contrat de travail" },
  { key: "visa", label: "Visa" },
  { key: "health_insurance", label: "Assurance maladie" },
];
export const docTypeLabel = (t: string) => DOCUMENT_TYPES.find((x) => x.key === t)?.label ?? t;

export const DOCUMENT_STATUSES: { key: DocumentStatus; label: string; tone: Tone }[] = [
  { key: "missing", label: "Manquant", tone: "bad" },
  { key: "received", label: "Reçu", tone: "neutral" },
  { key: "translated", label: "Traduit", tone: "neutral" },
  { key: "certified", label: "Certifié", tone: "gold" },
  { key: "submitted", label: "Déposé", tone: "gold" },
  { key: "validated", label: "Validé", tone: "good" },
  { key: "expired", label: "Expiré", tone: "warn" },
];
export const docStatus = (s: DocumentStatus) => DOCUMENT_STATUSES.find((x) => x.key === s)!;

export const TASK_STATUSES: { key: TaskStatus; label: string }[] = [
  { key: "todo", label: "À faire" },
  { key: "in_progress", label: "En cours" },
  { key: "done", label: "Terminé" },
];
export const taskStatusLabel = (s: TaskStatus) =>
  TASK_STATUSES.find((x) => x.key === s)?.label ?? s;

export const TASK_PRIORITIES: { key: TaskPriority; label: string; tone: Tone }[] = [
  { key: "low", label: "Basse", tone: "neutral" },
  { key: "normal", label: "Normale", tone: "gold" },
  { key: "high", label: "Haute", tone: "bad" },
];
export const priority = (p: TaskPriority) => TASK_PRIORITIES.find((x) => x.key === p)!;

export const COURSE_STATUSES: { key: CourseStatus; label: string; tone: Tone }[] = [
  { key: "planned", label: "Planifiée", tone: "neutral" },
  { key: "running", label: "En cours", tone: "gold" },
  { key: "finished", label: "Terminée", tone: "good" },
  { key: "cancelled", label: "Annulée", tone: "bad" },
];
export const courseStatus = (s: CourseStatus) => COURSE_STATUSES.find((x) => x.key === s)!;

export const ENROLLMENT_STATUSES: { key: EnrollmentStatus; label: string }[] = [
  { key: "enrolled", label: "Inscrit" },
  { key: "completed", label: "Terminé" },
  { key: "dropped", label: "Abandon" },
];
export const enrollmentStatusLabel = (s: EnrollmentStatus) =>
  ENROLLMENT_STATUSES.find((x) => x.key === s)?.label ?? s;

export const EXAM_PROVIDERS = [
  { key: "goethe", label: "Goethe-Institut" },
  { key: "telc", label: "telc" },
  { key: "osd", label: "ÖSD" },
  { key: "ecl", label: "ECL" },
];
export const providerLabel = (p: string) => EXAM_PROVIDERS.find((x) => x.key === p)?.label ?? p;

export const EXAM_STATUSES: { key: ExamStatus; label: string; tone: Tone }[] = [
  { key: "registered", label: "Inscrit", tone: "neutral" },
  { key: "passed", label: "Réussi", tone: "good" },
  { key: "partial", label: "Réussite partielle", tone: "gold" },
  { key: "failed", label: "Échoué", tone: "bad" },
  { key: "absent", label: "Absent", tone: "warn" },
];
export const examStatus = (s: ExamStatus) => EXAM_STATUSES.find((x) => x.key === s)!;

export const INVOICE_STATUSES: { key: InvoiceStatus; label: string; tone: Tone }[] = [
  { key: "draft", label: "Brouillon", tone: "neutral" },
  { key: "sent", label: "Envoyée", tone: "gold" },
  { key: "paid", label: "Payée", tone: "good" },
  { key: "cancelled", label: "Annulée", tone: "bad" },
];
export const invoiceStatus = (s: InvoiceStatus) => INVOICE_STATUSES.find((x) => x.key === s)!;

export const PAYMENT_METHODS: { key: PaymentMethod; label: string }[] = [
  { key: "cash", label: "Espèces" },
  { key: "orange_money", label: "Orange Money" },
  { key: "mtn_momo", label: "MTN Mobile Money" },
  { key: "bank_transfer", label: "Virement bancaire" },
  { key: "card", label: "Carte" },
  { key: "other", label: "Autre" },
];
export const methodLabel = (m: PaymentMethod) =>
  PAYMENT_METHODS.find((x) => x.key === m)?.label ?? m;

export const EXPENSE_CATEGORIES = [
  "Loyer et charges",
  "Salaires",
  "Formateurs",
  "Traductions",
  "Frais administratifs",
  "Examens",
  "Marketing",
  "Informatique",
  "Transport",
  "Autre",
];

export const STAFF_ROLES: { key: StaffRole; label: string; hint: string }[] = [
  { key: "manager", label: "Manager", hint: "Accès complet sauf gestion de l'équipe" },
  { key: "recruiter", label: "Recruteur", hint: "Dossiers, documents, placements" },
  { key: "trainer", label: "Formateur", hint: "Classes, présences, examens" },
  { key: "accountant", label: "Comptable", hint: "Factures, paiements, dépenses" },
];
export const staffRoleLabel = (r: StaffRole | null) =>
  STAFF_ROLES.find((x) => x.key === r)?.label ?? "Administrateur";

export const CURRENCIES: Currency[] = ["XAF", "EUR"];

export function formatMoney(amount: number, currency: Currency) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "XAF" ? 0 : 2,
  }).format(Number(amount) || 0);
}

export function formatDate(d: string | null | undefined) {
  if (!d) return "";
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium" }).format(new Date(d));
}

export function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function isoInDays(days: number) {
  return new Date(Date.now() + days * 864e5).toISOString().slice(0, 10);
}
