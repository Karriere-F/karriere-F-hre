// Health-sector professions and their detailed fiches. Static, trilingual and
// grounded in public German data (salaries: Entgeltatlas / Bundesagentur für
// Arbeit), never invented figures. New fiches are added under SANTE_FICHES as
// their content is researched; list items without a fiche simply route to
// "Postuler" until their fiche is written.

import type { Locale } from "@i18n/routing";

export type LocalizedText = { fr: string; de: string; en: string };

export const tr = (t: LocalizedText, locale: Locale) => t[locale];

export type SanteMetier = {
  slug: string;
  /** Display name (kept in German for the Ausbildung path, the searched term). */
  name: LocalizedText;
  /** Short gloss shown under the name. */
  note: LocalizedText;
};

// Path 1, "Je veux faire une Ausbildung" (train in Germany). German titles are
// the real, searched terms; the note carries the local-language gloss.
export const AUSBILDUNG_METIERS: SanteMetier[] = [
  {
    slug: "infirmier",
    name: { fr: "Pflegefachmann / Pflegefachfrau", de: "Pflegefachmann / Pflegefachfrau", en: "Pflegefachmann / Pflegefachfrau" },
    note: { fr: "Infirmier (soins généralistes)", de: "Pflegefachkraft (generalistisch)", en: "Registered nurse (generalist)" },
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
    note: { fr: "Assistant de bloc opératoire", de: "OP-Assistenz", en: "Surgical assistant" },
  },
  {
    slug: "ata",
    name: { fr: "Anästhesietechnischer Assistent (ATA)", de: "Anästhesietechnischer Assistent (ATA)", en: "Anästhesietechnischer Assistent (ATA)" },
    note: { fr: "Assistant en anesthésie", de: "Anästhesie-Assistenz", en: "Anaesthesia assistant" },
  },
  {
    slug: "mfa",
    name: { fr: "Medizinischer Fachangestellter (MFA)", de: "Medizinischer Fachangestellter (MFA)", en: "Medizinischer Fachangestellter (MFA)" },
    note: { fr: "Assistant médical (cabinet)", de: "Medizinische Fachangestellte", en: "Medical assistant" },
  },
  {
    slug: "zfa",
    name: { fr: "Zahnmedizinischer Fachangestellter (ZFA)", de: "Zahnmedizinischer Fachangestellter (ZFA)", en: "Zahnmedizinischer Fachangestellter (ZFA)" },
    note: { fr: "Assistant dentaire", de: "Zahnmedizinische Fachangestellte", en: "Dental assistant" },
  },
  {
    slug: "notfallsanitaeter",
    name: { fr: "Notfallsanitäter", de: "Notfallsanitäter", en: "Notfallsanitäter" },
    note: { fr: "Ambulancier d'urgence", de: "Notfallsanitäter", en: "Emergency paramedic" },
  },
  {
    slug: "hebamme",
    name: { fr: "Hebamme", de: "Hebamme", en: "Hebamme" },
    note: { fr: "Sage-femme", de: "Hebamme", en: "Midwife" },
  },
];

// Path 2, "Je suis déjà diplômé" (already qualified, seeking recognition +
// placement). Titles in the reader's language.
export const DIPLOME_METIERS: SanteMetier[] = [
  { slug: "infirmier", name: { fr: "Infirmier", de: "Pflegefachkraft", en: "Nurse" }, note: { fr: "Diplôme d'État infirmier", de: "Examinierte Pflege", en: "Registered nurse" } },
  { slug: "aide-soignant", name: { fr: "Aide-soignant", de: "Pflegehelfer", en: "Nursing assistant" }, note: { fr: "", de: "", en: "" } },
  { slug: "medecin", name: { fr: "Médecin", de: "Arzt / Ärztin", en: "Doctor" }, note: { fr: "", de: "", en: "" } },
  { slug: "kinesitherapeute", name: { fr: "Kinésithérapeute", de: "Physiotherapeut", en: "Physiotherapist" }, note: { fr: "", de: "", en: "" } },
  { slug: "ergotherapeute", name: { fr: "Ergothérapeute", de: "Ergotherapeut", en: "Occupational therapist" }, note: { fr: "", de: "", en: "" } },
  { slug: "sage-femme", name: { fr: "Sage-femme", de: "Hebamme", en: "Midwife" }, note: { fr: "", de: "", en: "" } },
  { slug: "dentiste", name: { fr: "Dentiste", de: "Zahnarzt / Zahnärztin", en: "Dentist" }, note: { fr: "", de: "", en: "" } },
  { slug: "pharmacien", name: { fr: "Pharmacien", de: "Apotheker", en: "Pharmacist" }, note: { fr: "", de: "", en: "" } },
  { slug: "technicien-laboratoire", name: { fr: "Technicien de laboratoire", de: "MTLA (Labor)", en: "Laboratory technician" }, note: { fr: "", de: "", en: "" } },
  { slug: "manipulateur-radio", name: { fr: "Manipulateur radio", de: "MTRA (Radiologie)", en: "Radiographer" }, note: { fr: "", de: "", en: "" } },
  { slug: "ambulancier", name: { fr: "Ambulancier", de: "Rettungssanitäter", en: "Paramedic" }, note: { fr: "", de: "", en: "" } },
];

export type FicheSection = { heading: LocalizedText; body: LocalizedText };
export type FicheFaq = { q: LocalizedText; a: LocalizedText };

export type SanteFiche = {
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  image?: string; // filename in /public/images/metiers/sante
  video?: string; // optional embed URL (YouTube), rendered when present
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
    fr: "La santé est le premier secteur en tension en Allemagne. Deux chemins s'offrent à vous selon votre situation, dans les deux cas, nous vous accompagnons de la formation à l'installation.",
    de: "Das Gesundheitswesen ist der Bereich mit dem größten Fachkräftemangel in Deutschland. Je nach Situation stehen Ihnen zwei Wege offen, in beiden Fällen begleiten wir Sie von der Ausbildung bis zur Ankunft.",
    en: "Healthcare is Germany's number-one shortage sector. Two paths are open to you depending on your situation, in both cases we support you from training to arrival.",
  },
  pathAusbildungTitle: { fr: "Je veux faire une Ausbildung", de: "Ich möchte eine Ausbildung machen", en: "I want to do an Ausbildung" },
  pathAusbildungIntro: {
    fr: "Vous vous formez directement en Allemagne : une formation rémunérée, diplômante et reconnue.",
    de: "Sie werden direkt in Deutschland ausgebildet: eine vergütete, anerkannte Ausbildung mit Abschluss.",
    en: "You train directly in Germany: a paid, recognised, qualifying programme.",
  },
  pathDiplomeTitle: { fr: "Je suis déjà diplômé", de: "Ich bin bereits qualifiziert", en: "I am already qualified" },
  pathDiplomeIntro: {
    fr: "Vous êtes déjà qualifié : nous faisons reconnaître votre diplôme et vous plaçons auprès d'un employeur.",
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
    title: { fr: "Infirmier en Allemagne (Pflegefachkraft)", de: "Pflegefachkraft in Deutschland", en: "Nurse in Germany (Pflegefachkraft)" },
    image: "infirmier",
    intro: {
      fr: "Infirmier est l'un des métiers les plus recherchés en Allemagne. Que vous soyez déjà diplômé ou que vous vouliez vous former sur place par une Ausbildung, Karriere Fähre vous accompagne de l'allemand jusqu'à votre poste et votre installation.",
      de: "Pflegefachkraft ist einer der gefragtesten Berufe in Deutschland. Ob bereits examiniert oder über eine Ausbildung vor Ort, Karriere Fähre begleitet Sie vom Deutsch bis zur Stelle und zur Ankunft.",
      en: "Nursing is one of the most sought-after professions in Germany. Whether you are already qualified or want to train on site through an Ausbildung, Karriere Fähre supports you from German all the way to your role and your arrival.",
    },
    sections: [
      {
        heading: { fr: "Le métier d'infirmier en Allemagne", de: "Der Beruf Pflegefachkraft", en: "The nursing profession in Germany" },
        body: {
          fr: "L'infirmier (Pflegefachkraft) assure les soins généralistes : suivi des patients, administration des traitements, coordination avec les médecins et accompagnement des personnes à l'hôpital, en clinique ou en établissement de soins. C'est un métier reconnu, stable et central dans le système de santé allemand.",
          de: "Die Pflegefachkraft übernimmt die generalistische Pflege: Patientenbetreuung, Verabreichung von Behandlungen, Abstimmung mit Ärzten und Begleitung von Menschen in Krankenhaus, Klinik oder Pflegeeinrichtung. Ein anerkannter, stabiler und zentraler Beruf im deutschen Gesundheitswesen.",
          en: "A nurse (Pflegefachkraft) provides generalist care: monitoring patients, administering treatments, coordinating with doctors and supporting people in hospitals, clinics or care facilities. It is a recognised, stable and central role in the German healthcare system.",
        },
      },
      {
        heading: { fr: "Salaire d'un infirmier en Allemagne", de: "Gehalt als Pflegefachkraft", en: "Nurse salary in Germany" },
        body: {
          fr: "Le salaire d'un infirmier va d'environ 2 800 € brut par mois en début de carrière à 4 500 € et plus avec l'expérience, pour une moyenne autour de 3 800 €. Dans le service public (convention TVöD-P), la grille démarre vers 3 300 € (groupe P7) et progresse jusqu'à environ 4 200 €. S'y ajoutent des primes de nuit, de week-end et de jours fériés, ainsi qu'un 13e mois dans de nombreux établissements.",
          de: "Das Gehalt einer Pflegefachkraft reicht von rund 2.800 € brutto pro Monat zu Berufsbeginn bis 4.500 € und mehr mit Erfahrung, im Schnitt etwa 3.800 €. Im öffentlichen Dienst (TVöD-P) beginnt die Tabelle bei rund 3.300 € (Gruppe P7) und steigt auf etwa 4.200 €. Hinzu kommen Nacht-, Wochenend- und Feiertagszuschläge sowie in vielen Häusern ein 13. Monatsgehalt.",
          en: "A nurse's salary ranges from around €2,800 gross per month at the start of their career to €4,500 and more with experience, averaging about €3,800. In the public sector (TVöD-P agreement) the scale starts near €3,300 (group P7) and rises to roughly €4,200. Night, weekend and public-holiday premiums apply, plus a 13th month at many employers.",
        },
      },
      {
        heading: { fr: "Durée de la formation", de: "Dauer der Ausbildung", en: "Training duration" },
        body: {
          fr: "Par la voie de l'Ausbildung, la formation d'infirmier (généraliste) dure 3 ans et est rémunérée dès la première année : environ 1 490 € la 1re année, 1 552 € la 2e et 1 653 € la 3e (convention TVAöD-Pflege). Si vous êtes déjà diplômé, il n'y a pas de nouvelle formation : le délai dépend de la reconnaissance de votre diplôme et de votre montée au niveau B2.",
          de: "Über die Ausbildung dauert die generalistische Pflegeausbildung 3 Jahre und ist ab dem ersten Jahr vergütet: rund 1.490 € im 1., 1.552 € im 2. und 1.653 € im 3. Jahr (TVAöD-Pflege). Wer bereits examiniert ist, macht keine neue Ausbildung: Die Dauer hängt von der Anerkennung und dem Erreichen von B2 ab.",
          en: "Via the Ausbildung, the generalist nursing training lasts 3 years and is paid from the first year: about €1,490 in year 1, €1,552 in year 2 and €1,653 in year 3 (TVAöD-Pflege agreement). If you are already qualified there is no new training: the timeline depends on your diploma recognition and reaching B2.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Arbeitgeber mit Bedarf", en: "Employers hiring" },
        body: {
          fr: "Hôpitaux publics et cliniques universitaires, grands groupes privés (Helios, Asklepios, Sana, Vivantes), établissements confessionnels (Caritas, Diakonie), maisons de retraite et services de soins à domicile. La pénurie touche tout le pays, avec une demande particulièrement forte dans les grandes villes et les Länder du sud et de l'ouest. Les soins figurent parmi les métiers en tension officiels (Engpassberufe) de la Bundesagentur für Arbeit.",
          de: "Öffentliche Krankenhäuser und Universitätskliniken, große private Träger (Helios, Asklepios, Sana, Vivantes), kirchliche Einrichtungen (Caritas, Diakonie), Pflegeheime und ambulante Pflegedienste. Der Mangel besteht bundesweit, besonders hoch ist die Nachfrage in Großstädten und in den Ländern im Süden und Westen. Die Pflege zählt zu den offiziellen Engpassberufen der Bundesagentur für Arbeit.",
          en: "Public hospitals and university clinics, large private groups (Helios, Asklepios, Sana, Vivantes), faith-based providers (Caritas, Diakonie), care homes and home-care services. The shortage is nationwide, with especially strong demand in major cities and the southern and western states. Nursing is one of the Federal Employment Agency's official shortage occupations (Engpassberufe).",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Einsatzbereiche", en: "Where you can work" },
        body: {
          fr: "Services hospitaliers (médecine, chirurgie, urgences, pédiatrie, gériatrie), cliniques spécialisées, maisons de retraite, soins à domicile et centres de rééducation. La forte demande garantit un emploi stable et une embauche rapide.",
          de: "Krankenhausstationen (Innere Medizin, Chirurgie, Notaufnahme, Pädiatrie, Geriatrie), Fachkliniken, Pflegeheime, ambulante Pflege und Reha-Einrichtungen. Die hohe Nachfrage sorgt für einen sicheren Arbeitsplatz und eine schnelle Einstellung.",
          en: "Hospital wards (internal medicine, surgery, emergency, paediatrics, geriatrics), specialist clinics, care homes, home care and rehabilitation centres. Strong demand means stable employment and fast hiring.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Après quelques années, vous pouvez vous spécialiser (soins intensifs, anesthésie, bloc opératoire, oncologie, gériatrie) grâce à une formation continue (Fachweiterbildung), accéder à des postes d'encadrement (chef d'unité, Stationsleitung) ou poursuivre des études en management ou en sciences infirmières.",
          de: "Nach einigen Jahren können Sie sich spezialisieren (Intensivpflege, Anästhesie, OP, Onkologie, Geriatrie) über eine Fachweiterbildung, Leitungspositionen übernehmen (Stationsleitung) oder ein Studium in Pflegemanagement oder Pflegewissenschaft anschließen.",
          en: "After a few years you can specialise (intensive care, anaesthesia, operating theatre, oncology, geriatrics) through advanced training (Fachweiterbildung), move into leadership roles (ward manager, Stationsleitung) or pursue studies in nursing management or science.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" },
        body: {
          fr: "Le niveau B2 est le standard pour exercer et obtenir l'autorisation professionnelle dans la plupart des Länder. Karriere Fähre vous forme du niveau débutant jusqu'au B2 à Douala, avant le départ.",
          de: "B2 ist der Standard, um zu arbeiten und die Berufserlaubnis in den meisten Ländern zu erhalten. Karriere Fähre bildet Sie in Douala vom Anfängerniveau bis B2 aus, vor der Ausreise.",
          en: "B2 is the standard to work and obtain professional authorisation in most federal states. Karriere Fähre trains you from beginner level up to B2 in Douala, before departure.",
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
        heading: { fr: "Visa et titre de séjour", de: "Visum und Aufenthaltstitel", en: "Visa and residence permit" },
        body: {
          fr: "Une fois votre diplôme reconnu, vous obtenez un visa puis un titre de séjour pour travailleurs qualifiés (§ 18a/18b de la loi allemande sur le séjour). Il est aussi possible de venir finaliser la reconnaissance sur place (partenariat de reconnaissance, § 16d) ; pour l'Ausbildung, c'est un visa de formation (§ 16a). Nous gérons ces démarches avec vous.",
          de: "Sobald Ihr Abschluss anerkannt ist, erhalten Sie ein Visum und anschließend einen Aufenthaltstitel für Fachkräfte (§ 18a/18b AufenthG). Möglich ist auch die Einreise zur Anerkennung vor Ort (Anerkennungspartnerschaft, § 16d); für die Ausbildung gilt ein Ausbildungsvisum (§ 16a). Wir übernehmen diese Schritte mit Ihnen.",
          en: "Once your diploma is recognised, you receive a visa and then a residence permit for skilled workers (§ 18a/18b of the German Residence Act). It is also possible to come and complete recognition on site (recognition partnership, § 16d); for the Ausbildung a training visa applies (§ 16a). We handle these steps with you.",
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
        q: { fr: "Combien gagne un infirmier en Allemagne ?", de: "Wie viel verdient eine Pflegefachkraft in Deutschland?", en: "How much does a nurse earn in Germany?" },
        a: {
          fr: "Entre environ 2 800 € en début de carrière et 4 500 € brut par mois avec l'expérience, primes de nuit et de week-end en plus. La moyenne se situe autour de 3 800 €.",
          de: "Zwischen rund 2.800 € zu Berufsbeginn und 4.500 € brutto pro Monat mit Erfahrung, zuzüglich Nacht- und Wochenendzuschlägen. Der Schnitt liegt bei etwa 3.800 €.",
          en: "Between around €2,800 at the start and €4,500 gross per month with experience, plus night and weekend premiums. The average is about €3,800.",
        },
      },
      {
        q: { fr: "Je n'ai pas de diplôme d'infirmier, puis-je partir quand même ?", de: "Ich habe kein Pflegediplom, kann ich trotzdem gehen?", en: "I don't have a nursing diploma, can I still go?" },
        a: {
          fr: "Oui, par la voie de l'Ausbildung : vous vous formez directement en Allemagne pendant 3 ans, avec une formation rémunérée dès la première année.",
          de: "Ja, über die Ausbildung: Sie werden 3 Jahre direkt in Deutschland ausgebildet, mit einer Vergütung ab dem ersten Jahr.",
          en: "Yes, through the Ausbildung: you train directly in Germany for 3 years, paid from the first year.",
        },
      },
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
    ],
    sourceNote: {
      fr: "Salaires : grilles TVöD-P et TVAöD-Pflege et Entgeltatlas (Bundesagentur für Arbeit), données 2024-2025. Montants publics indicatifs, non garantis, variables selon l'employeur, la région et l'expérience. La reconnaissance des diplômes et la délivrance des visas relèvent des autorités allemandes compétentes.",
      de: "Gehälter: TVöD-P und TVAöD-Pflege sowie Entgeltatlas (Bundesagentur für Arbeit), Stand 2024-2025. Öffentliche Richtwerte, nicht garantiert, je nach Arbeitgeber, Region und Erfahrung unterschiedlich. Anerkennung und Visumerteilung liegen bei den zuständigen deutschen Behörden.",
      en: "Salaries: TVöD-P and TVAöD-Pflege scales and the Entgeltatlas (Federal Employment Agency), 2024-2025. Public reference figures, not guaranteed, varying by employer, region and experience. Diploma recognition and visa issuance are decided by the competent German authorities.",
    },
  },
};
