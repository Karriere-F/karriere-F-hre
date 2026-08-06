// Health-sector professions and their detailed fiches. Static, trilingual and
// grounded in public German data (salaries: Entgeltatlas / Bundesagentur für
// Arbeit) — never invented figures. New fiches are added under SANTE_FICHES as
// their content is researched; list items without a fiche simply route to
// "Postuler" until their fiche is written.

import type { Locale } from "@i18n/routing";

export type LocalizedText = { fr: string; de: string; en: string };

export const tr = (t: LocalizedText, locale: Locale) => t[locale];

export type SanteMetier = {
  slug: string;
  /** Display name (kept in German for the Ausbildung path — the searched term). */
  name: LocalizedText;
  /** Short gloss shown under the name. */
  note: LocalizedText;
};

// Path 1 — "Je veux faire une Ausbildung" (train in Germany). German titles are
// the real, searched terms; the note carries the local-language gloss.
export const AUSBILDUNG_METIERS: SanteMetier[] = [
  {
    slug: "infirmier",
    name: { fr: "Pflegefachmann / Pflegefachfrau", de: "Pflegefachmann / Pflegefachfrau", en: "Pflegefachmann / Pflegefachfrau" },
    note: { fr: "Infirmier·ère (soins généralistes)", de: "Pflegefachkraft (generalistisch)", en: "Registered nurse (generalist)" },
  },
  {
    slug: "krankenpflegehelfer",
    name: { fr: "Krankenpflegehelfer", de: "Krankenpflegehelfer", en: "Krankenpflegehelfer" },
    note: { fr: "Aide en soins infirmiers", de: "Pflegehilfe", en: "Nursing aide" },
  },
  {
    slug: "altenpflege",
    name: { fr: "Altenpflege", de: "Altenpflege", en: "Altenpflege" },
    note: { fr: "Soins aux personnes âgées", de: "Altenpflege", en: "Geriatric care" },
  },
  {
    slug: "ota",
    name: { fr: "Operationstechnischer Assistent (OTA)", de: "Operationstechnischer Assistent (OTA)", en: "Operationstechnischer Assistent (OTA)" },
    note: { fr: "Assistant·e de bloc opératoire", de: "OP-Assistenz", en: "Surgical assistant" },
  },
  {
    slug: "ata",
    name: { fr: "Anästhesietechnischer Assistent (ATA)", de: "Anästhesietechnischer Assistent (ATA)", en: "Anästhesietechnischer Assistent (ATA)" },
    note: { fr: "Assistant·e en anesthésie", de: "Anästhesie-Assistenz", en: "Anaesthesia assistant" },
  },
  {
    slug: "mfa",
    name: { fr: "Medizinischer Fachangestellter (MFA)", de: "Medizinischer Fachangestellter (MFA)", en: "Medizinischer Fachangestellter (MFA)" },
    note: { fr: "Assistant·e médical·e (cabinet)", de: "Medizinische Fachangestellte", en: "Medical assistant" },
  },
  {
    slug: "zfa",
    name: { fr: "Zahnmedizinischer Fachangestellter (ZFA)", de: "Zahnmedizinischer Fachangestellter (ZFA)", en: "Zahnmedizinischer Fachangestellter (ZFA)" },
    note: { fr: "Assistant·e dentaire", de: "Zahnmedizinische Fachangestellte", en: "Dental assistant" },
  },
  {
    slug: "notfallsanitaeter",
    name: { fr: "Notfallsanitäter", de: "Notfallsanitäter", en: "Notfallsanitäter" },
    note: { fr: "Ambulancier·ère d'urgence", de: "Notfallsanitäter", en: "Emergency paramedic" },
  },
  {
    slug: "hebamme",
    name: { fr: "Hebamme", de: "Hebamme", en: "Hebamme" },
    note: { fr: "Sage-femme", de: "Hebamme", en: "Midwife" },
  },
];

// Path 2 — "Je suis déjà diplômé" (already qualified, seeking recognition +
// placement). Titles in the reader's language.
export const DIPLOME_METIERS: SanteMetier[] = [
  { slug: "infirmier", name: { fr: "Infirmier·ère", de: "Pflegefachkraft", en: "Nurse" }, note: { fr: "Diplôme d'État infirmier", de: "Examinierte Pflege", en: "Registered nurse" } },
  { slug: "aide-soignant", name: { fr: "Aide-soignant·e", de: "Pflegehelfer·in", en: "Nursing assistant" }, note: { fr: "", de: "", en: "" } },
  { slug: "medecin", name: { fr: "Médecin", de: "Arzt / Ärztin", en: "Doctor" }, note: { fr: "", de: "", en: "" } },
  { slug: "kinesitherapeute", name: { fr: "Kinésithérapeute", de: "Physiotherapeut·in", en: "Physiotherapist" }, note: { fr: "", de: "", en: "" } },
  { slug: "ergotherapeute", name: { fr: "Ergothérapeute", de: "Ergotherapeut·in", en: "Occupational therapist" }, note: { fr: "", de: "", en: "" } },
  { slug: "sage-femme", name: { fr: "Sage-femme", de: "Hebamme", en: "Midwife" }, note: { fr: "", de: "", en: "" } },
  { slug: "dentiste", name: { fr: "Dentiste", de: "Zahnarzt / Zahnärztin", en: "Dentist" }, note: { fr: "", de: "", en: "" } },
  { slug: "pharmacien", name: { fr: "Pharmacien·ne", de: "Apotheker·in", en: "Pharmacist" }, note: { fr: "", de: "", en: "" } },
  { slug: "technicien-laboratoire", name: { fr: "Technicien·ne de laboratoire", de: "MTLA (Labor)", en: "Laboratory technician" }, note: { fr: "", de: "", en: "" } },
  { slug: "manipulateur-radio", name: { fr: "Manipulateur·rice radio", de: "MTRA (Radiologie)", en: "Radiographer" }, note: { fr: "", de: "", en: "" } },
  { slug: "ambulancier", name: { fr: "Ambulancier·ère", de: "Rettungssanitäter·in", en: "Paramedic" }, note: { fr: "", de: "", en: "" } },
];

export type FicheSection = { heading: LocalizedText; body: LocalizedText };
export type FicheFaq = { q: LocalizedText; a: LocalizedText };

export type SanteFiche = {
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  sections: FicheSection[];
  faq: FicheFaq[];
  sourceNote: LocalizedText;
};

export const SANTE_UI = {
  sector: { fr: "Santé", de: "Gesundheit", en: "Healthcare" },
  metiers: { fr: "Métiers", de: "Berufe", en: "Occupations" },
  home: { fr: "Accueil", de: "Startseite", en: "Home" },
  hubTitle: {
    fr: "Métiers de la santé en Allemagne",
    de: "Gesundheitsberufe in Deutschland",
    en: "Healthcare professions in Germany",
  },
  hubIntro: {
    fr: "La santé est le premier secteur en tension en Allemagne. Deux chemins s'offrent à vous selon votre situation — dans les deux cas, nous vous accompagnons de la formation à l'installation.",
    de: "Das Gesundheitswesen ist der Bereich mit dem größten Fachkräftemangel in Deutschland. Je nach Situation stehen Ihnen zwei Wege offen — in beiden Fällen begleiten wir Sie von der Ausbildung bis zur Ankunft.",
    en: "Healthcare is Germany's number-one shortage sector. Two paths are open to you depending on your situation — in both cases we support you from training to arrival.",
  },
  pathAusbildungTitle: { fr: "Je veux faire une Ausbildung", de: "Ich möchte eine Ausbildung machen", en: "I want to do an Ausbildung" },
  pathAusbildungIntro: {
    fr: "Vous vous formez directement en Allemagne : une formation rémunérée, diplômante et reconnue.",
    de: "Sie werden direkt in Deutschland ausgebildet: eine vergütete, anerkannte Ausbildung mit Abschluss.",
    en: "You train directly in Germany: a paid, recognised, qualifying programme.",
  },
  pathDiplomeTitle: { fr: "Je suis déjà diplômé·e", de: "Ich bin bereits qualifiziert", en: "I am already qualified" },
  pathDiplomeIntro: {
    fr: "Vous êtes déjà qualifié·e : nous faisons reconnaître votre diplôme et vous plaçons auprès d'un employeur.",
    de: "Sie sind bereits qualifiziert: Wir lassen Ihren Abschluss anerkennen und vermitteln Sie an einen Arbeitgeber.",
    en: "You are already qualified: we get your diploma recognised and place you with an employer.",
  },
  viewFiche: { fr: "Voir la fiche", de: "Zum Profil", en: "View details" },
  apply: { fr: "Postuler", de: "Jetzt bewerben", en: "Apply" },
  applyForMetier: { fr: "Postuler pour ce métier", de: "Für diesen Beruf bewerben", en: "Apply for this role" },
  offersTitle: { fr: "Offres disponibles", de: "Verfügbare Stellen", en: "Available positions" },
  offersText: {
    fr: "Les postes évoluent en continu. Déposez votre candidature : nous vous proposons les offres qui correspondent à votre profil.",
    de: "Die Stellen ändern sich laufend. Reichen Sie Ihre Bewerbung ein: Wir schlagen Ihnen die Angebote vor, die zu Ihrem Profil passen.",
    en: "Positions change continuously. Submit your application: we match you with the openings that fit your profile.",
  },
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
  backToSante: { fr: "Tous les métiers de la santé", de: "Alle Gesundheitsberufe", en: "All healthcare professions" },
} satisfies Record<string, LocalizedText>;

export const SANTE_FICHES: Record<string, SanteFiche> = {
  infirmier: {
    slug: "infirmier",
    title: { fr: "Infirmier·ère (Pflegefachkraft)", de: "Pflegefachkraft", en: "Nurse (Pflegefachkraft)" },
    intro: {
      fr: "L'un des métiers les plus recherchés en Allemagne. Que vous soyez déjà diplômé·e ou que vous souhaitiez vous former sur place (Ausbildung), Karriere Fähre vous accompagne jusqu'à votre poste et votre installation.",
      de: "Einer der gefragtesten Berufe in Deutschland. Ob bereits examiniert oder über eine Ausbildung vor Ort — Karriere Fähre begleitet Sie bis zur Stelle und zur Ankunft.",
      en: "One of the most sought-after professions in Germany. Whether you are already qualified or want to train on site (Ausbildung), Karriere Fähre supports you all the way to your role and your arrival.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le·la Pflegefachkraft assure les soins généralistes : suivi des patients, administration des traitements, coordination avec les médecins, accompagnement des personnes en milieu hospitalier, en clinique ou en établissement de soins. C'est un métier reconnu, stable et central dans le système de santé allemand.",
          de: "Die Pflegefachkraft übernimmt die generalistische Pflege: Patientenbetreuung, Verabreichung von Behandlungen, Abstimmung mit Ärzten und Begleitung von Menschen in Krankenhaus, Klinik oder Pflegeeinrichtung. Ein anerkannter, stabiler und zentraler Beruf im deutschen Gesundheitswesen.",
          en: "The Pflegefachkraft provides generalist nursing care: monitoring patients, administering treatments, coordinating with doctors and supporting people in hospitals, clinics or care facilities. It is a recognised, stable and central role in the German healthcare system.",
        },
      },
      {
        heading: { fr: "Salaire en Allemagne", de: "Gehalt in Deutschland", en: "Salary in Germany" },
        body: {
          fr: "Un·e infirmier·ère (Pflegefachkraft) perçoit un salaire médian d'environ 4 150 € brut/mois à temps plein. S'y ajoutent selon les établissements des primes (nuit, week-end, jours fériés) et souvent un 13e mois. Pendant l'Ausbildung, la formation est rémunérée dès la première année.",
          de: "Eine Pflegefachkraft verdient im Median rund 4.150 € brutto/Monat in Vollzeit. Hinzu kommen je nach Einrichtung Zuschläge (Nacht, Wochenende, Feiertage) und oft ein 13. Monatsgehalt. Während der Ausbildung wird bereits ab dem ersten Jahr eine Vergütung gezahlt.",
          en: "A nurse (Pflegefachkraft) earns a median of about €4,150 gross per month full-time. Depending on the employer, shift premiums (night, weekend, public holidays) and often a 13th month are added. During the Ausbildung, training is paid from the first year.",
        },
      },
      {
        heading: { fr: "Régions qui recrutent", de: "Regionen mit Bedarf", en: "Regions hiring" },
        body: {
          fr: "La pénurie est nationale : tous les Länder recrutent. La demande est particulièrement forte dans les grandes agglomérations et dans le sud (Bavière, Bade-Wurtemberg) et l'ouest (Rhénanie-du-Nord-Westphalie). Les soins figurent parmi les métiers en tension officiels (Engpassberufe) de la Bundesagentur für Arbeit.",
          de: "Der Mangel ist bundesweit: Alle Länder stellen ein. Besonders hoch ist der Bedarf in den Ballungsräumen sowie im Süden (Bayern, Baden-Württemberg) und Westen (Nordrhein-Westfalen). Die Pflege zählt zu den offiziellen Engpassberufen der Bundesagentur für Arbeit.",
          en: "The shortage is nationwide: every federal state is hiring. Demand is especially strong in major cities and in the south (Bavaria, Baden-Württemberg) and west (North Rhine-Westphalia). Nursing is one of the Federal Employment Agency's official shortage occupations (Engpassberufe).",
        },
      },
      {
        heading: { fr: "Conditions d'accès", de: "Zugangsvoraussetzungen", en: "Entry requirements" },
        body: {
          fr: "Deux voies. 1) L'Ausbildung : une formation généraliste de 3 ans en Allemagne, ouverte dès un niveau de scolarité équivalent au brevet et un allemand B2. 2) Déjà diplômé·e : votre diplôme d'infirmier doit être reconnu (voir ci-dessous) et votre allemand porté au niveau B2.",
          de: "Zwei Wege. 1) Die Ausbildung: eine dreijährige generalistische Ausbildung in Deutschland, offen ab einem mittleren Schulabschluss und Deutsch B2. 2) Bereits examiniert: Ihr Pflegediplom muss anerkannt werden (siehe unten) und Ihr Deutsch auf B2-Niveau sein.",
          en: "Two routes. 1) The Ausbildung: a three-year generalist training in Germany, open from a secondary-school level and German at B2. 2) Already qualified: your nursing diploma must be recognised (see below) and your German brought up to B2.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" },
        body: {
          fr: "Le niveau B2 est le standard pour exercer et obtenir l'enregistrement professionnel dans la plupart des Länder. Karriere Fähre vous forme du niveau débutant jusqu'au B2 à Douala, avant le départ.",
          de: "B2 ist der Standard, um zu arbeiten und die Berufserlaubnis in den meisten Ländern zu erhalten. Karriere Fähre bildet Sie in Douala vom Anfängerniveau bis B2 aus — vor der Ausreise.",
          en: "B2 is the standard to work and obtain professional registration in most federal states. Karriere Fähre trains you from beginner level up to B2 in Douala, before departure.",
        },
      },
      {
        heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung des Abschlusses", en: "Diploma recognition" },
        body: {
          fr: "Pour exercer comme Pflegefachkraft, votre diplôme doit être reconnu (Anerkennung) par l'autorité compétente du Land. Selon les cas, un stage d'adaptation (Anpassungslehrgang) ou un examen de connaissances (Kenntnisprüfung) peut être demandé. Nous constituons le dossier et vous accompagnons jusqu'à la reconnaissance.",
          de: "Um als Pflegefachkraft zu arbeiten, muss Ihr Abschluss von der zuständigen Landesbehörde anerkannt werden. Je nach Fall können ein Anpassungslehrgang oder eine Kenntnisprüfung verlangt werden. Wir stellen den Antrag zusammen und begleiten Sie bis zur Anerkennung.",
          en: "To work as a Pflegefachkraft, your diploma must be recognised by the competent authority of the federal state. Depending on the case, an adaptation course (Anpassungslehrgang) or a knowledge exam (Kenntnisprüfung) may be required. We prepare the file and support you through to recognition.",
        },
      },
      {
        heading: { fr: "Le processus avec Karriere Fähre", de: "Der Ablauf mit Karriere Fähre", en: "The process with Karriere Fähre" },
        body: {
          fr: "Sélection et évaluation de votre profil, préparation linguistique jusqu'au B2, constitution du dossier de reconnaissance, mise en relation avec un employeur et préparation aux entretiens, visa et démarches, puis accompagnement à l'installation et à l'intégration une fois sur place.",
          de: "Auswahl und Bewertung Ihres Profils, sprachliche Vorbereitung bis B2, Erstellung des Anerkennungsantrags, Kontakt zu einem Arbeitgeber und Vorbereitung auf Vorstellungsgespräche, Visum und Formalitäten, danach Begleitung bei Ankunft und Integration vor Ort.",
          en: "Selection and assessment of your profile, language preparation up to B2, building the recognition file, matching with an employer and interview preparation, visa and paperwork, then support with settling in and integration once on site.",
        },
      },
    ],
    faq: [
      {
        q: { fr: "Faut-il déjà parler allemand ?", de: "Muss ich schon Deutsch sprechen?", en: "Do I need to speak German already?" },
        a: {
          fr: "Non. Nous vous formons du niveau débutant jusqu'au B2 requis, à Douala, avant le départ.",
          de: "Nein. Wir bilden Sie in Douala vom Anfängerniveau bis zum erforderlichen B2 aus, vor der Ausreise.",
          en: "No. We train you from beginner level up to the required B2 in Douala, before departure.",
        },
      },
      {
        q: { fr: "Mon diplôme sera-t-il reconnu ?", de: "Wird mein Abschluss anerkannt?", en: "Will my diploma be recognised?" },
        a: {
          fr: "La reconnaissance s'examine au cas par cas par l'autorité allemande compétente. Nous montons le dossier avec vous et vous guidons à chaque étape.",
          de: "Die Anerkennung wird von der zuständigen deutschen Behörde im Einzelfall geprüft. Wir erstellen den Antrag mit Ihnen und begleiten jeden Schritt.",
          en: "Recognition is assessed case by case by the competent German authority. We build the file with you and guide you at every step.",
        },
      },
      {
        q: { fr: "Combien de temps dure le parcours ?", de: "Wie lange dauert der Weg?", en: "How long does the journey take?" },
        a: {
          fr: "La durée dépend surtout de votre progression en allemand (jusqu'au B2) et de la reconnaissance de votre diplôme. Nous établissons un calendrier réaliste dès l'évaluation de votre profil.",
          de: "Die Dauer hängt vor allem von Ihrem Deutsch-Fortschritt (bis B2) und der Anerkennung ab. Wir erstellen bereits bei der Profilbewertung einen realistischen Zeitplan.",
          en: "The duration depends mainly on your German progress (up to B2) and your diploma recognition. We set out a realistic timeline as soon as we assess your profile.",
        },
      },
    ],
    sourceNote: {
      fr: "Salaire : Entgeltatlas, Bundesagentur für Arbeit (médiane brute, temps plein, 2024). Montants publics indicatifs, non garantis. La reconnaissance des diplômes relève des autorités allemandes compétentes.",
      de: "Gehalt: Entgeltatlas, Bundesagentur für Arbeit (Median, brutto, Vollzeit, 2024). Öffentliche Richtwerte, nicht garantiert. Die Anerkennung von Abschlüssen liegt bei den zuständigen deutschen Behörden.",
      en: "Salary: Entgeltatlas, Federal Employment Agency (median, gross, full-time, 2024). Public reference figures, not guaranteed. Diploma recognition is decided by the competent German authorities.",
    },
  },
};
