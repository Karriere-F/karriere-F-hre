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
    slug: "sage-femme",
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

  "aide-soignant": {
    slug: "aide-soignant",
    title: { fr: "Aide-soignant en Allemagne (Pflegehelfer)", de: "Pflegehelfer in Deutschland", en: "Nursing assistant in Germany (Pflegehelfer)" },
    image: "aide-soignant",
    intro: {
      fr: "L'aide-soignant (Pflegehelfer) épaule les infirmiers au quotidien. Un métier très demandé, accessible rapidement, et une première marche idéale vers le diplôme d'infirmier en Allemagne.",
      de: "Der Pflegehelfer unterstützt die Pflegefachkräfte im Alltag. Ein sehr gefragter Beruf mit schnellem Einstieg und ein idealer erster Schritt zur Pflegefachkraft in Deutschland.",
      en: "A nursing assistant (Pflegehelfer) supports nurses day to day. A role in high demand, quick to enter, and an ideal first step towards becoming a qualified nurse in Germany.",
    },
    sections: [
      { heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" }, body: {
        fr: "L'aide-soignant assiste les patients dans les gestes du quotidien (toilette, repas, mobilité), prend les constantes et seconde l'équipe infirmière, surtout auprès des personnes âgées et dépendantes.",
        de: "Der Pflegehelfer unterstützt Patienten bei alltäglichen Verrichtungen (Körperpflege, Essen, Mobilität), misst Vitalwerte und entlastet das Pflegeteam, vor allem bei älteren und pflegebedürftigen Menschen.",
        en: "A nursing assistant helps patients with daily activities (washing, meals, mobility), takes vital signs and supports the nursing team, especially with elderly and dependent people." } },
      { heading: { fr: "Salaire en Allemagne", de: "Gehalt in Deutschland", en: "Salary in Germany" }, body: {
        fr: "De l'ordre de 2 500 € à 3 300 € brut par mois. Dans le service public (TVöD-P, groupe P6), de ~3 000 € à ~4 000 € avec l'ancienneté. Primes de nuit et de week-end en sus.",
        de: "Etwa 2.500 € bis 3.300 € brutto pro Monat. Im öffentlichen Dienst (TVöD-P, Gruppe P6) von rund 3.000 € bis 4.000 € mit steigender Erfahrung. Nacht- und Wochenendzuschläge kommen hinzu.",
        en: "Around €2,500 to €3,300 gross per month. In the public sector (TVöD-P, group P6) from about €3,000 to €4,000 with seniority. Night and weekend premiums on top." } },
      { heading: { fr: "Durée de la formation", de: "Dauer der Ausbildung", en: "Training duration" }, body: {
        fr: "L'Ausbildung d'aide-soignant dure 1 à 2 ans selon le Land (formation surtout scolaire). C'est aussi une passerelle vers la formation complète d'infirmier (3 ans).",
        de: "Die Ausbildung zum Pflegehelfer dauert je nach Bundesland 1 bis 2 Jahre (überwiegend schulisch). Sie ist zugleich ein Sprungbrett zur vollen Pflegeausbildung (3 Jahre).",
        en: "The nursing-assistant training lasts 1 to 2 years depending on the state (mostly school-based). It is also a stepping stone to the full nursing training (3 years)." } },
      { heading: { fr: "Entreprises qui recrutent", de: "Arbeitgeber mit Bedarf", en: "Employers hiring" }, body: {
        fr: "Maisons de retraite (EHPAD), services de soins à domicile, hôpitaux et cliniques, réseaux confessionnels (Caritas, Diakonie). La demande est forte partout en Allemagne.",
        de: "Pflegeheime, ambulante Pflegedienste, Krankenhäuser und Kliniken, kirchliche Träger (Caritas, Diakonie). Die Nachfrage ist bundesweit hoch.",
        en: "Care homes, home-care services, hospitals and clinics, faith-based providers (Caritas, Diakonie). Demand is strong across Germany." } },
      { heading: { fr: "Débouchés", de: "Einsatzbereiche", en: "Where you can work" }, body: {
        fr: "Établissements pour personnes âgées, soins à domicile, services hospitaliers et structures pour personnes en situation de handicap.",
        de: "Altenpflegeeinrichtungen, ambulante Pflege, Krankenhausstationen und Einrichtungen für Menschen mit Behinderung.",
        en: "Elderly-care facilities, home care, hospital wards and facilities for people with disabilities." } },
      { heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" }, body: {
        fr: "L'aide-soignant peut évoluer vers le diplôme d'infirmier (Pflegefachkraft) par une formation complémentaire, puis vers des spécialisations et des postes d'encadrement.",
        de: "Der Pflegehelfer kann über eine Weiterbildung zur Pflegefachkraft aufsteigen und sich anschließend spezialisieren oder Leitungsaufgaben übernehmen.",
        en: "A nursing assistant can progress to registered nurse (Pflegefachkraft) through further training, then specialise or move into leadership roles." } },
      { heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" }, body: {
        fr: "Le niveau B2 est visé pour travailler sereinement et évoluer. Karriere Fähre vous forme jusqu'au B2 à Douala, avant le départ.",
        de: "Angestrebt wird B2, um sicher zu arbeiten und aufzusteigen. Karriere Fähre bildet Sie in Douala bis B2 aus, vor der Ausreise.",
        en: "B2 is the target to work confidently and progress. Karriere Fähre trains you up to B2 in Douala, before departure." } },
      { heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung", en: "Recognition" }, body: {
        fr: "Selon le Land et votre parcours, une reconnaissance ou une autorisation d'exercer peut être demandée. Nous constituons le dossier avec vous.",
        de: "Je nach Bundesland und Werdegang kann eine Anerkennung oder Berufserlaubnis nötig sein. Wir erstellen den Antrag mit Ihnen.",
        en: "Depending on the state and your background, recognition or a work authorisation may be required. We build the file with you." } },
      { heading: { fr: "Visa et titre de séjour", de: "Visum und Aufenthaltstitel", en: "Visa and residence permit" }, body: {
        fr: "Visa de travailleur qualifié (§ 18a/18b) une fois la qualification reconnue, ou visa de formation (§ 16a) pour l'Ausbildung. Nous gérons les démarches.",
        de: "Fachkräftevisum (§ 18a/18b) nach anerkannter Qualifikation oder Ausbildungsvisum (§ 16a). Wir übernehmen die Formalitäten.",
        en: "Skilled-worker visa (§ 18a/18b) once the qualification is recognised, or a training visa (§ 16a) for the Ausbildung. We handle the paperwork." } },
      { heading: { fr: "Le processus avec Karriere Fähre", de: "Der Ablauf mit Karriere Fähre", en: "The process with Karriere Fähre" }, body: {
        fr: "Évaluation du profil, allemand jusqu'au B2, dossier et reconnaissance, mise en relation avec un employeur, visa et démarches, puis accompagnement à l'installation.",
        de: "Profilbewertung, Deutsch bis B2, Unterlagen und Anerkennung, Kontakt zu einem Arbeitgeber, Visum und Formalitäten, danach Begleitung bei der Ankunft.",
        en: "Profile assessment, German up to B2, file and recognition, employer matching, visa and paperwork, then support with settling in." } },
    ],
    faq: [
      { q: { fr: "Peut-on devenir infirmier ensuite ?", de: "Kann man danach Pflegefachkraft werden?", en: "Can you become a nurse afterwards?" }, a: {
        fr: "Oui. Le poste d'aide-soignant est une excellente porte d'entrée : une formation complémentaire mène au diplôme d'infirmier (Pflegefachkraft).",
        de: "Ja. Der Beruf Pflegehelfer ist ein guter Einstieg: Eine Weiterbildung führt zur Pflegefachkraft.",
        en: "Yes. The nursing-assistant role is a great entry point: further training leads to the registered-nurse qualification (Pflegefachkraft)." } },
      { q: { fr: "Faut-il parler allemand ?", de: "Muss ich Deutsch sprechen?", en: "Do I need German?" }, a: {
        fr: "Nous vous formons du débutant jusqu'au B2 avant le départ, à Douala.",
        de: "Wir bilden Sie vor der Ausreise in Douala vom Anfänger bis B2 aus.",
        en: "We train you from beginner up to B2 before departure, in Douala." } },
    ],
    sourceNote: {
      fr: "Salaires : Entgeltatlas (Bundesagentur für Arbeit) et grille TVöD-P, 2025. Montants publics indicatifs, non garantis. Reconnaissance et visas : autorités allemandes compétentes.",
      de: "Gehälter: Entgeltatlas (Bundesagentur für Arbeit) und TVöD-P, 2025. Öffentliche Richtwerte, nicht garantiert. Anerkennung und Visa: zuständige deutsche Behörden.",
      en: "Salaries: Entgeltatlas (Federal Employment Agency) and the TVöD-P scale, 2025. Public reference figures, not guaranteed. Recognition and visas: competent German authorities.",
    },
  },

  medecin: {
    slug: "medecin",
    title: { fr: "Médecin en Allemagne (Arzt)", de: "Arzt in Deutschland", en: "Doctor in Germany (Arzt)" },
    image: "medecin",
    intro: {
      fr: "L'Allemagne manque de médecins et recrute activement à l'international. Le parcours passe par l'Approbation (autorisation d'exercer) et un bon niveau d'allemand ; Karriere Fähre vous accompagne à chaque étape.",
      de: "Deutschland fehlen Ärzte und rekrutiert aktiv international. Der Weg führt über die Approbation und gute Deutschkenntnisse; Karriere Fähre begleitet Sie bei jedem Schritt.",
      en: "Germany is short of doctors and actively recruits internationally. The path runs through the Approbation (licence to practise) and strong German; Karriere Fähre supports you at every step.",
    },
    sections: [
      { heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" }, body: {
        fr: "Le médecin diagnostique et traite les patients à l'hôpital, en clinique ou en cabinet. Les jeunes médecins débutent le plus souvent comme Assistenzarzt (médecin en spécialisation).",
        de: "Der Arzt diagnostiziert und behandelt Patienten in Krankenhaus, Klinik oder Praxis. Junge Ärzte starten meist als Assistenzarzt (in der Facharztweiterbildung).",
        en: "A doctor diagnoses and treats patients in hospitals, clinics or practices. Junior doctors usually start as an Assistenzarzt (in specialty training)." } },
      { heading: { fr: "Salaire en Allemagne", de: "Gehalt in Deutschland", en: "Salary in Germany" }, body: {
        fr: "Un Assistenzarzt gagne d'environ 5 400 € brut par mois en 1re année jusqu'à ~7 100 € après cinq à six ans. Le médecin spécialiste (Facharzt) gagne davantage.",
        de: "Ein Assistenzarzt verdient von rund 5.400 € brutto im 1. Jahr bis ca. 7.100 € nach fünf bis sechs Jahren. Als Facharzt verdient man mehr.",
        en: "An Assistenzarzt earns from around €5,400 gross per month in year 1 to about €7,100 after five to six years. Specialists (Facharzt) earn more." } },
      { heading: { fr: "Durée", de: "Dauer", en: "Duration" }, body: {
        fr: "Le diplôme de médecine (environ 6 ans) n'est pas refait. Le délai dépend de l'Approbation et de la langue. La spécialisation (Facharzt) dure ensuite 5 à 6 ans.",
        de: "Das Medizinstudium (rund 6 Jahre) wird nicht wiederholt. Die Dauer hängt von Approbation und Sprache ab. Die Facharztweiterbildung dauert danach 5 bis 6 Jahre.",
        en: "The medical degree (about 6 years) is not repeated. The timeline depends on the Approbation and language. Specialty training (Facharzt) then takes 5 to 6 years." } },
      { heading: { fr: "Entreprises qui recrutent", de: "Arbeitgeber mit Bedarf", en: "Employers hiring" }, body: {
        fr: "Hôpitaux publics et cliniques universitaires, grands groupes privés (Helios, Asklepios, Sana), centres médicaux et cabinets. La pénurie touche particulièrement les zones rurales.",
        de: "Öffentliche Krankenhäuser und Universitätskliniken, große private Träger (Helios, Asklepios, Sana), medizinische Versorgungszentren und Praxen. Besonders ländliche Regionen sind betroffen.",
        en: "Public hospitals and university clinics, large private groups (Helios, Asklepios, Sana), medical centres and practices. Rural areas are especially affected." } },
      { heading: { fr: "Débouchés", de: "Einsatzbereiche", en: "Where you can work" }, body: {
        fr: "Toutes les spécialités hospitalières, la médecine générale, les cliniques spécialisées et, à terme, l'installation en cabinet.",
        de: "Alle Krankenhausfachrichtungen, Allgemeinmedizin, Fachkliniken und perspektivisch die eigene Praxis.",
        en: "All hospital specialties, general medicine, specialist clinics and, in time, one's own practice." } },
      { heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" }, body: {
        fr: "Après la spécialisation (Facharzt), vous pouvez devenir médecin-chef adjoint (Oberarzt) puis chef de service (Chefarzt), enseigner ou vous installer.",
        de: "Nach dem Facharzt können Sie Oberarzt, dann Chefarzt werden, lehren oder sich niederlassen.",
        en: "After becoming a Facharzt you can advance to senior physician (Oberarzt) then head of department (Chefarzt), teach or set up a practice." } },
      { heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" }, body: {
        fr: "B2 en allemand général, plus un examen d'allemand médical (Fachsprachprüfung, niveau C1) exigé par la plupart des Ordres régionaux (Ärztekammer).",
        de: "B2 im Allgemeindeutsch plus eine Fachsprachprüfung (Niveau C1), die von den meisten Ärztekammern verlangt wird.",
        en: "B2 in general German plus a medical-language exam (Fachsprachprüfung, C1 level) required by most regional medical chambers (Ärztekammer)." } },
      { heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung", en: "Recognition" }, body: {
        fr: "Pour exercer, il faut l'Approbation délivrée par l'autorité du Land, avec un examen de connaissances (Kenntnisprüfung) si l'équivalence n'est pas directe, et l'inscription à l'Ordre des médecins.",
        de: "Zum Arbeiten ist die Approbation der Landesbehörde nötig, ggf. mit Kenntnisprüfung bei fehlender Gleichwertigkeit, sowie die Mitgliedschaft in der Ärztekammer.",
        en: "To practise you need the Approbation from the state authority, with a knowledge exam (Kenntnisprüfung) if equivalence is not direct, plus membership of the medical chamber." } },
      { heading: { fr: "Visa et titre de séjour", de: "Visum und Aufenthaltstitel", en: "Visa and residence permit" }, body: {
        fr: "Visa puis titre de séjour pour travailleurs qualifiés (§ 18a/18b). Il est possible d'entrer pour préparer l'Approbation sur place (§ 16d). Nous gérons ces démarches avec vous.",
        de: "Visum und Aufenthaltstitel für Fachkräfte (§ 18a/18b). Eine Einreise zur Vorbereitung der Approbation ist möglich (§ 16d). Wir übernehmen die Schritte mit Ihnen.",
        en: "Visa then residence permit for skilled workers (§ 18a/18b). Entry to prepare the Approbation on site is possible (§ 16d). We handle these steps with you." } },
      { heading: { fr: "Le processus avec Karriere Fähre", de: "Der Ablauf mit Karriere Fähre", en: "The process with Karriere Fähre" }, body: {
        fr: "Évaluation du profil, allemand général puis médical, dossier d'Approbation, mise en relation avec un hôpital, visa et démarches, puis accompagnement à l'installation.",
        de: "Profilbewertung, Allgemein- und Fachdeutsch, Approbationsantrag, Kontakt zu einem Krankenhaus, Visum und Formalitäten, danach Begleitung bei der Ankunft.",
        en: "Profile assessment, general then medical German, Approbation file, matching with a hospital, visa and paperwork, then support with settling in." } },
    ],
    faq: [
      { q: { fr: "Faut-il refaire ses études de médecine ?", de: "Muss ich das Medizinstudium wiederholen?", en: "Do I need to redo medical studies?" }, a: {
        fr: "Non. Votre diplôme est évalué pour l'Approbation ; selon les cas, un examen de connaissances (Kenntnisprüfung) est demandé, mais pas de nouvelles études complètes.",
        de: "Nein. Ihr Abschluss wird für die Approbation geprüft; ggf. ist eine Kenntnisprüfung nötig, aber kein komplettes neues Studium.",
        en: "No. Your degree is assessed for the Approbation; a knowledge exam (Kenntnisprüfung) may be required, but not full new studies." } },
      { q: { fr: "Quel niveau d'allemand pour un médecin ?", de: "Welches Deutschniveau als Arzt?", en: "What German level for a doctor?" }, a: {
        fr: "B2 général et un examen d'allemand médical (Fachsprachprüfung, C1). Nous vous préparons aux deux.",
        de: "B2 allgemein und eine Fachsprachprüfung (C1). Wir bereiten Sie auf beides vor.",
        en: "General B2 and a medical-language exam (Fachsprachprüfung, C1). We prepare you for both." } },
    ],
    sourceNote: {
      fr: "Salaires : conventions TV-Ärzte (VKA/TdL) et magazines spécialisés (doctari), 2025-2026. Montants indicatifs, non garantis. Approbation, reconnaissance et visas : autorités allemandes compétentes (Ärztekammer, autorité du Land).",
      de: "Gehälter: TV-Ärzte (VKA/TdL) und Fachmagazine (doctari), 2025-2026. Richtwerte, nicht garantiert. Approbation, Anerkennung und Visa: zuständige deutsche Behörden (Ärztekammer, Landesbehörde).",
      en: "Salaries: TV-Ärzte (VKA/TdL) agreements and specialist sources (doctari), 2025-2026. Indicative figures, not guaranteed. Approbation, recognition and visas: competent German authorities (medical chamber, state authority).",
    },
  },

  "sage-femme": {
    slug: "sage-femme",
    title: { fr: "Sage-femme en Allemagne (Hebamme)", de: "Hebamme in Deutschland", en: "Midwife in Germany (Hebamme)" },
    image: "sage-femme",
    intro: {
      fr: "Métier essentiel et très recherché, la sage-femme (Hebamme) accompagne la grossesse, l'accouchement et les suites de couches. Karriere Fähre vous accompagne de l'allemand jusqu'à votre poste.",
      de: "Ein wichtiger und stark gefragter Beruf: Die Hebamme begleitet Schwangerschaft, Geburt und Wochenbett. Karriere Fähre begleitet Sie vom Deutsch bis zur Stelle.",
      en: "An essential, highly sought-after profession: the midwife (Hebamme) supports pregnancy, birth and postnatal care. Karriere Fähre supports you from German to your role.",
    },
    sections: [
      { heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" }, body: {
        fr: "La sage-femme suit la grossesse, assure les accouchements avec l'équipe médicale et accompagne la mère et le nouveau-né après la naissance.",
        de: "Die Hebamme betreut die Schwangerschaft, begleitet Geburten mit dem medizinischen Team und unterstützt Mutter und Neugeborenes nach der Geburt.",
        en: "The midwife follows pregnancy, assists births with the medical team and supports mother and newborn after birth." } },
      { heading: { fr: "Salaire en Allemagne", de: "Gehalt in Deutschland", en: "Salary in Germany" }, body: {
        fr: "Environ 3 300 € à 4 800 € brut par mois, avec une médiane autour de 4 380 €. Primes et exercice libéral peuvent augmenter les revenus.",
        de: "Etwa 3.300 € bis 4.800 € brutto pro Monat, im Median rund 4.380 €. Zuschläge und freiberufliche Tätigkeit können das Einkommen erhöhen.",
        en: "About €3,300 to €4,800 gross per month, with a median around €4,380. Premiums and self-employment can raise earnings." } },
      { heading: { fr: "Durée de la formation", de: "Dauer der Ausbildung", en: "Training duration" }, body: {
        fr: "Depuis 2020, sage-femme est un cursus universitaire en alternance de 3 à 4 ans, rémunéré (~1 400 à 1 800 €/mois). Déjà diplômée : reconnaissance du diplôme et allemand B2.",
        de: "Seit 2020 ist Hebamme ein duales Studium von 3 bis 4 Jahren, vergütet (~1.400 bis 1.800 €/Monat). Bereits ausgebildet: Anerkennung und Deutsch B2.",
        en: "Since 2020, midwifery is a dual university programme of 3 to 4 years, paid (~€1,400 to €1,800/month). Already qualified: diploma recognition and German B2." } },
      { heading: { fr: "Entreprises qui recrutent", de: "Arbeitgeber mit Bedarf", en: "Employers hiring" }, body: {
        fr: "Maternités des hôpitaux et cliniques, maisons de naissance, et exercice libéral (suivi à domicile). La demande est forte dans tout le pays.",
        de: "Geburtskliniken in Krankenhäusern, Geburtshäuser und freiberufliche Tätigkeit (häusliche Betreuung). Die Nachfrage ist bundesweit hoch.",
        en: "Hospital maternity units, birth centres and self-employed practice (home visits). Demand is strong across the country." } },
      { heading: { fr: "Débouchés", de: "Einsatzbereiche", en: "Where you can work" }, body: {
        fr: "Salles de naissance, services de maternité, suivi pré et postnatal, et cabinets libéraux.",
        de: "Kreißsäle, Wochenstationen, Vor- und Nachsorge sowie freiberufliche Praxis.",
        en: "Delivery rooms, maternity wards, ante- and postnatal care, and independent practice." } },
      { heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" }, body: {
        fr: "Spécialisations (allaitement, périnatalité), coordination d'équipe, enseignement, ou installation en libéral avec sa propre patientèle.",
        de: "Spezialisierungen (Stillberatung, Perinatalbetreuung), Teamkoordination, Lehre oder freiberufliche Selbstständigkeit.",
        en: "Specialisations (lactation, perinatal care), team coordination, teaching, or self-employment with one's own clients." } },
      { heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" }, body: {
        fr: "Le niveau B2 est requis pour l'exercice et la reconnaissance. Karriere Fähre vous forme jusqu'au B2 à Douala.",
        de: "B2 ist für Ausübung und Anerkennung erforderlich. Karriere Fähre bildet Sie in Douala bis B2 aus.",
        en: "B2 is required to practise and for recognition. Karriere Fähre trains you up to B2 in Douala." } },
      { heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung", en: "Recognition" }, body: {
        fr: "Profession réglementée : votre diplôme doit être reconnu par l'autorité compétente du Land (contrôle d'équivalence), avec parfois une mesure d'adaptation.",
        de: "Reglementierter Beruf: Ihr Abschluss muss von der zuständigen Landesbehörde anerkannt werden (Gleichwertigkeitsprüfung), ggf. mit Anpassungsmaßnahme.",
        en: "Regulated profession: your diploma must be recognised by the competent state authority (equivalence check), sometimes with an adaptation measure." } },
      { heading: { fr: "Visa et titre de séjour", de: "Visum und Aufenthaltstitel", en: "Visa and residence permit" }, body: {
        fr: "Visa et titre de séjour pour travailleurs qualifiés (§ 18a/18b), ou entrée pour reconnaissance sur place (§ 16d). Nous gérons les démarches.",
        de: "Visum und Aufenthaltstitel für Fachkräfte (§ 18a/18b) oder Einreise zur Anerkennung vor Ort (§ 16d). Wir übernehmen die Formalitäten.",
        en: "Visa and residence permit for skilled workers (§ 18a/18b), or entry for on-site recognition (§ 16d). We handle the paperwork." } },
      { heading: { fr: "Le processus avec Karriere Fähre", de: "Der Ablauf mit Karriere Fähre", en: "The process with Karriere Fähre" }, body: {
        fr: "Évaluation du profil, allemand jusqu'au B2, dossier et reconnaissance, mise en relation avec une maternité, visa et démarches, puis accompagnement à l'installation.",
        de: "Profilbewertung, Deutsch bis B2, Unterlagen und Anerkennung, Kontakt zu einer Geburtsklinik, Visum und Formalitäten, danach Begleitung bei der Ankunft.",
        en: "Profile assessment, German up to B2, file and recognition, matching with a maternity unit, visa and paperwork, then support with settling in." } },
    ],
    faq: [
      { q: { fr: "Mon diplôme de sage-femme est-il reconnu ?", de: "Wird mein Hebammen-Abschluss anerkannt?", en: "Is my midwifery diploma recognised?" }, a: {
        fr: "La reconnaissance se fait au cas par cas par l'autorité compétente. Nous constituons le dossier avec vous.",
        de: "Die Anerkennung erfolgt im Einzelfall durch die zuständige Behörde. Wir erstellen den Antrag mit Ihnen.",
        en: "Recognition is decided case by case by the competent authority. We build the file with you." } },
      { q: { fr: "Faut-il parler allemand ?", de: "Muss ich Deutsch sprechen?", en: "Do I need German?" }, a: {
        fr: "Le niveau B2 est requis ; nous vous formons jusque-là avant le départ.",
        de: "B2 ist erforderlich; wir bilden Sie vorher bis dahin aus.",
        en: "B2 is required; we train you up to that level before departure." } },
    ],
    sourceNote: {
      fr: "Salaires : Entgeltatlas (Bundesagentur für Arbeit) et sources spécialisées, 2025. Montants indicatifs, non garantis. Reconnaissance et visas : autorités allemandes compétentes.",
      de: "Gehälter: Entgeltatlas (Bundesagentur für Arbeit) und Fachquellen, 2025. Richtwerte, nicht garantiert. Anerkennung und Visa: zuständige deutsche Behörden.",
      en: "Salaries: Entgeltatlas (Federal Employment Agency) and specialist sources, 2025. Indicative figures, not guaranteed. Recognition and visas: competent German authorities.",
    },
  },

  kinesitherapeute: {
    slug: "kinesitherapeute",
    title: { fr: "Kinésithérapeute en Allemagne (Physiotherapeut)", de: "Physiotherapeut in Deutschland", en: "Physiotherapist in Germany" },
    image: "kinesitherapeute",
    intro: {
      fr: "La kinésithérapie (Physiotherapie) est un métier réglementé et recherché en Allemagne. Karriere Fähre vous accompagne de l'allemand à la reconnaissance et à l'embauche.",
      de: "Physiotherapie ist ein reglementierter, gefragter Beruf in Deutschland. Karriere Fähre begleitet Sie vom Deutsch über die Anerkennung bis zur Einstellung.",
      en: "Physiotherapy is a regulated, sought-after profession in Germany. Karriere Fähre supports you from German through recognition to hiring.",
    },
    sections: [
      { heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" }, body: {
        fr: "Le kinésithérapeute rééduque et soulage les patients par le mouvement, les techniques manuelles et des exercices adaptés, après une blessure, une opération ou pour une pathologie chronique.",
        de: "Der Physiotherapeut behandelt und mobilisiert Patienten mit Bewegung, manuellen Techniken und gezielten Übungen, nach Verletzungen, Operationen oder bei chronischen Erkrankungen.",
        en: "The physiotherapist rehabilitates and relieves patients through movement, manual techniques and tailored exercises, after injury, surgery or for chronic conditions." } },
      { heading: { fr: "Salaire en Allemagne", de: "Gehalt in Deutschland", en: "Salary in Germany" }, body: {
        fr: "Environ 2 800 € à 3 600 € brut par mois, avec une médiane autour de 3 450 € (Entgeltatlas 2025). Pendant une qualification d'adaptation : ~2 300 à 2 700 €.",
        de: "Etwa 2.800 € bis 3.600 € brutto pro Monat, im Median rund 3.450 € (Entgeltatlas 2025). Während einer Anpassungsqualifizierung: ~2.300 bis 2.700 €.",
        en: "About €2,800 to €3,600 gross per month, median around €3,450 (Entgeltatlas 2025). During an adaptation programme: ~€2,300 to €2,700." } },
      { heading: { fr: "Durée de la formation", de: "Dauer der Ausbildung", en: "Training duration" }, body: {
        fr: "La formation (Ausbildung) de kinésithérapeute dure 3 ans. Déjà diplômé : le délai dépend de la reconnaissance (contrôle d'équivalence) et de l'allemand B2.",
        de: "Die Ausbildung zum Physiotherapeuten dauert 3 Jahre. Bereits ausgebildet: Die Dauer hängt von der Anerkennung (Gleichwertigkeitsprüfung) und Deutsch B2 ab.",
        en: "Physiotherapy training lasts 3 years. Already qualified: the timeline depends on recognition (equivalence check) and German B2." } },
      { heading: { fr: "Entreprises qui recrutent", de: "Arbeitgeber mit Bedarf", en: "Employers hiring" }, body: {
        fr: "Cabinets de kinésithérapie, cliniques de rééducation, hôpitaux, centres sportifs et établissements pour personnes âgées.",
        de: "Physiotherapiepraxen, Reha-Kliniken, Krankenhäuser, Sportzentren und Altenpflegeeinrichtungen.",
        en: "Physiotherapy practices, rehabilitation clinics, hospitals, sports centres and elderly-care facilities." } },
      { heading: { fr: "Débouchés", de: "Einsatzbereiche", en: "Where you can work" }, body: {
        fr: "Rééducation orthopédique, neurologique, sportive et gériatrique, en cabinet, en clinique ou à domicile.",
        de: "Orthopädische, neurologische, sportliche und geriatrische Rehabilitation, in der Praxis, Klinik oder zu Hause.",
        en: "Orthopaedic, neurological, sports and geriatric rehabilitation, in practices, clinics or at home." } },
      { heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" }, body: {
        fr: "Spécialisations (thérapie manuelle, neurologie, sport), postes d'encadrement, enseignement, ou ouverture de son propre cabinet.",
        de: "Spezialisierungen (Manuelle Therapie, Neurologie, Sport), Leitungspositionen, Lehre oder eine eigene Praxis.",
        en: "Specialisations (manual therapy, neurology, sport), leadership roles, teaching, or opening your own practice." } },
      { heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" }, body: {
        fr: "Le niveau B2 est requis pour la reconnaissance et l'exercice. Karriere Fähre vous forme jusqu'au B2 à Douala.",
        de: "B2 ist für Anerkennung und Ausübung erforderlich. Karriere Fähre bildet Sie in Douala bis B2 aus.",
        en: "B2 is required for recognition and practice. Karriere Fähre trains you up to B2 in Douala." } },
      { heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung", en: "Recognition" }, body: {
        fr: "Profession réglementée : une autorisation d'État est nécessaire après contrôle d'équivalence ; une mesure d'adaptation (stage ou examen) peut être demandée.",
        de: "Reglementierter Beruf: Nach Gleichwertigkeitsprüfung ist eine staatliche Erlaubnis nötig; eine Anpassungsmaßnahme (Lehrgang oder Prüfung) kann verlangt werden.",
        en: "Regulated profession: a state authorisation is required after an equivalence check; an adaptation measure (course or exam) may be required." } },
      { heading: { fr: "Visa et titre de séjour", de: "Visum und Aufenthaltstitel", en: "Visa and residence permit" }, body: {
        fr: "Visa et titre de séjour pour travailleurs qualifiés (§ 18a/18b), ou entrée pour reconnaissance sur place (§ 16d). Nous gérons les démarches.",
        de: "Visum und Aufenthaltstitel für Fachkräfte (§ 18a/18b) oder Einreise zur Anerkennung vor Ort (§ 16d). Wir übernehmen die Formalitäten.",
        en: "Visa and residence permit for skilled workers (§ 18a/18b), or entry for on-site recognition (§ 16d). We handle the paperwork." } },
      { heading: { fr: "Le processus avec Karriere Fähre", de: "Der Ablauf mit Karriere Fähre", en: "The process with Karriere Fähre" }, body: {
        fr: "Évaluation du profil, allemand jusqu'au B2, dossier et reconnaissance, mise en relation avec un employeur, visa et démarches, puis accompagnement à l'installation.",
        de: "Profilbewertung, Deutsch bis B2, Unterlagen und Anerkennung, Kontakt zu einem Arbeitgeber, Visum und Formalitäten, danach Begleitung bei der Ankunft.",
        en: "Profile assessment, German up to B2, file and recognition, employer matching, visa and paperwork, then support with settling in." } },
    ],
    faq: [
      { q: { fr: "La kinésithérapie est-elle réglementée ?", de: "Ist Physiotherapie reglementiert?", en: "Is physiotherapy regulated?" }, a: {
        fr: "Oui. Il faut une autorisation d'État après contrôle d'équivalence de votre diplôme. Nous vous accompagnons dans la démarche.",
        de: "Ja. Nach einer Gleichwertigkeitsprüfung ist eine staatliche Erlaubnis nötig. Wir begleiten Sie dabei.",
        en: "Yes. A state authorisation is required after an equivalence check of your diploma. We support you through it." } },
      { q: { fr: "Faut-il parler allemand ?", de: "Muss ich Deutsch sprechen?", en: "Do I need German?" }, a: {
        fr: "Le niveau B2 est requis ; nous vous formons jusque-là avant le départ.",
        de: "B2 ist erforderlich; wir bilden Sie vorher bis dahin aus.",
        en: "B2 is required; we train you up to that level before departure." } },
    ],
    sourceNote: {
      fr: "Salaires : Entgeltatlas (Bundesagentur für Arbeit), 2025. Montants indicatifs, non garantis. Reconnaissance (profession réglementée) et visas : autorités allemandes compétentes.",
      de: "Gehälter: Entgeltatlas (Bundesagentur für Arbeit), 2025. Richtwerte, nicht garantiert. Anerkennung (reglementierter Beruf) und Visa: zuständige deutsche Behörden.",
      en: "Salaries: Entgeltatlas (Federal Employment Agency), 2025. Indicative figures, not guaranteed. Recognition (regulated profession) and visas: competent German authorities.",
    },
  },

  altenpflege: {
    slug: "altenpflege",
    title: { fr: "Soins aux personnes âgées (Altenpflege)", de: "Altenpflege in Deutschland", en: "Geriatric care in Germany (Altenpflege)" },
    image: "altenpflege",
    intro: {
      fr: "Avec le vieillissement de la population, les soins aux personnes âgées (Altenpflege) sont un secteur en très forte demande. Vous pouvez vous former en Allemagne par une Ausbildung rémunérée et reconnue.",
      de: "Durch die alternde Bevölkerung ist die Altenpflege ein Bereich mit sehr hoher Nachfrage. Sie können sich in Deutschland über eine vergütete, anerkannte Ausbildung qualifizieren.",
      en: "With an ageing population, geriatric care (Altenpflege) is in very high demand. You can train in Germany through a paid, recognised Ausbildung.",
    },
    sections: [
      { heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" }, body: {
        fr: "L'Altenpflege accompagne les personnes âgées dans les soins, l'autonomie et la vie quotidienne, en maison de retraite comme à domicile. C'est désormais une spécialité de la formation généraliste d'infirmier.",
        de: "Die Altenpflege begleitet ältere Menschen bei Pflege, Selbstständigkeit und Alltag, im Pflegeheim wie zu Hause. Sie ist heute ein Schwerpunkt der generalistischen Pflegeausbildung.",
        en: "Geriatric care supports older people with care, independence and daily life, in care homes and at home. It is now a focus within the generalist nursing training." } },
      { heading: { fr: "Salaire en Allemagne", de: "Gehalt in Deutschland", en: "Salary in Germany" }, body: {
        fr: "Comme infirmier en gériatrie : d'environ 2 800 € à 4 500 € brut par mois, moyenne autour de 3 800 €, primes de nuit et de week-end en sus.",
        de: "Wie eine Pflegefachkraft in der Altenpflege: etwa 2.800 € bis 4.500 € brutto pro Monat, im Schnitt rund 3.800 €, Nacht- und Wochenendzuschläge inklusive.",
        en: "Like a nurse in geriatric care: about €2,800 to €4,500 gross per month, averaging around €3,800, with night and weekend premiums." } },
      { heading: { fr: "Durée de la formation", de: "Dauer der Ausbildung", en: "Training duration" }, body: {
        fr: "La formation dure 3 ans et est rémunérée dès la première année (environ 1 490 € la 1re, 1 552 € la 2e, 1 653 € la 3e, convention TVAöD-Pflege).",
        de: "Die Ausbildung dauert 3 Jahre und ist ab dem ersten Jahr vergütet (rund 1.490 € im 1., 1.552 € im 2., 1.653 € im 3. Jahr, TVAöD-Pflege).",
        en: "Training lasts 3 years and is paid from the first year (about €1,490 in year 1, €1,552 in year 2, €1,653 in year 3, TVAöD-Pflege agreement)." } },
      { heading: { fr: "Entreprises qui recrutent", de: "Arbeitgeber mit Bedarf", en: "Employers hiring" }, body: {
        fr: "Maisons de retraite (EHPAD), services de soins à domicile, résidences pour seniors et réseaux confessionnels (Caritas, Diakonie). Demande très forte partout.",
        de: "Pflegeheime, ambulante Pflegedienste, Seniorenresidenzen und kirchliche Träger (Caritas, Diakonie). Sehr hohe Nachfrage überall.",
        en: "Care homes, home-care services, senior residences and faith-based providers (Caritas, Diakonie). Very strong demand everywhere." } },
      { heading: { fr: "Débouchés", de: "Einsatzbereiche", en: "Where you can work" }, body: {
        fr: "Établissements pour personnes âgées, soins à domicile, services de gériatrie et structures de soins de longue durée.",
        de: "Altenpflegeeinrichtungen, ambulante Pflege, Geriatrie und Langzeitpflege.",
        en: "Elderly-care facilities, home care, geriatric services and long-term care." } },
      { heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" }, body: {
        fr: "Spécialisations (gériatrie, soins palliatifs, démence), postes d'encadrement (Stationsleitung) ou études en management des soins.",
        de: "Spezialisierungen (Geriatrie, Palliativpflege, Demenz), Leitungspositionen (Stationsleitung) oder ein Studium im Pflegemanagement.",
        en: "Specialisations (geriatrics, palliative care, dementia), leadership roles (ward manager) or studies in care management." } },
      { heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" }, body: {
        fr: "Le niveau B2 est le standard. Karriere Fähre vous forme jusqu'au B2 à Douala, avant le départ.",
        de: "B2 ist der Standard. Karriere Fähre bildet Sie in Douala bis B2 aus, vor der Ausreise.",
        en: "B2 is the standard. Karriere Fähre trains you up to B2 in Douala, before departure." } },
      { heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung", en: "Recognition" }, body: {
        fr: "Par la voie de l'Ausbildung, vous obtenez directement le diplôme allemand, sans reconnaissance préalable. Déjà diplômé en soins : une reconnaissance est possible.",
        de: "Über die Ausbildung erwerben Sie direkt den deutschen Abschluss, ohne vorherige Anerkennung. Bereits in der Pflege ausgebildet: Eine Anerkennung ist möglich.",
        en: "Via the Ausbildung you obtain the German qualification directly, with no prior recognition. Already trained in care: recognition is possible." } },
      { heading: { fr: "Visa et titre de séjour", de: "Visum und Aufenthaltstitel", en: "Visa and residence permit" }, body: {
        fr: "Visa de formation (§ 16a) pour l'Ausbildung, ou visa de travailleur qualifié (§ 18a/18b) si vous êtes déjà qualifié. Nous gérons les démarches.",
        de: "Ausbildungsvisum (§ 16a) für die Ausbildung oder Fachkräftevisum (§ 18a/18b) bei bereits vorhandener Qualifikation. Wir übernehmen die Formalitäten.",
        en: "Training visa (§ 16a) for the Ausbildung, or skilled-worker visa (§ 18a/18b) if already qualified. We handle the paperwork." } },
      { heading: { fr: "Le processus avec Karriere Fähre", de: "Der Ablauf mit Karriere Fähre", en: "The process with Karriere Fähre" }, body: {
        fr: "Évaluation du profil, allemand jusqu'au B2, dossier d'admission en Ausbildung, mise en relation avec un employeur, visa et démarches, puis accompagnement à l'installation.",
        de: "Profilbewertung, Deutsch bis B2, Bewerbung um den Ausbildungsplatz, Kontakt zu einem Arbeitgeber, Visum und Formalitäten, danach Begleitung bei der Ankunft.",
        en: "Profile assessment, German up to B2, application for the training place, employer matching, visa and paperwork, then support with settling in." } },
    ],
    faq: [
      { q: { fr: "Est-ce le même diplôme qu'infirmier ?", de: "Ist das derselbe Abschluss wie Pflegefachkraft?", en: "Is it the same qualification as a nurse?" }, a: {
        fr: "Depuis 2020, la formation est généraliste : vous devenez infirmier (Pflegefachkraft) avec une orientation soins aux personnes âgées.",
        de: "Seit 2020 ist die Ausbildung generalistisch: Sie werden Pflegefachkraft mit Schwerpunkt Altenpflege.",
        en: "Since 2020 the training is generalist: you become a registered nurse (Pflegefachkraft) with a geriatric-care focus." } },
      { q: { fr: "Faut-il parler allemand ?", de: "Muss ich Deutsch sprechen?", en: "Do I need German?" }, a: {
        fr: "Nous vous formons du débutant jusqu'au B2 avant le départ, à Douala.",
        de: "Wir bilden Sie vor der Ausreise in Douala vom Anfänger bis B2 aus.",
        en: "We train you from beginner up to B2 before departure, in Douala." } },
    ],
    sourceNote: {
      fr: "Salaires : Entgeltatlas (Bundesagentur für Arbeit) et grilles TVöD-P / TVAöD-Pflege, 2025. Montants indicatifs, non garantis. Reconnaissance et visas : autorités allemandes compétentes.",
      de: "Gehälter: Entgeltatlas (Bundesagentur für Arbeit) und TVöD-P / TVAöD-Pflege, 2025. Richtwerte, nicht garantiert. Anerkennung und Visa: zuständige deutsche Behörden.",
      en: "Salaries: Entgeltatlas (Federal Employment Agency) and TVöD-P / TVAöD-Pflege scales, 2025. Indicative figures, not guaranteed. Recognition and visas: competent German authorities.",
    },
  },

  ota: {
    slug: "ota",
    title: { fr: "Assistant de bloc opératoire (OTA)", de: "Operationstechnischer Assistent (OTA)", en: "Surgical assistant (OTA)" },
    image: "ota",
    intro: {
      fr: "L'assistant technique de bloc opératoire (OTA) est un métier technique très recherché, accessible par une Ausbildung rémunérée de 3 ans en Allemagne.",
      de: "Der Operationstechnische Assistent (OTA) ist ein gefragter technischer Beruf, zugänglich über eine vergütete 3-jährige Ausbildung in Deutschland.",
      en: "The surgical assistant (OTA) is a sought-after technical role, accessible through a paid 3-year Ausbildung in Germany.",
    },
    sections: [
      { heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" }, body: {
        fr: "L'OTA prépare la salle et le matériel, assiste les chirurgiens pendant l'opération, veille à l'hygiène et à la sécurité du patient au bloc opératoire.",
        de: "Der OTA bereitet OP-Saal und Instrumente vor, assistiert den Chirurgen während der Operation und sorgt für Hygiene und Patientensicherheit im OP.",
        en: "The OTA prepares the theatre and instruments, assists surgeons during operations and ensures hygiene and patient safety in the operating room." } },
      { heading: { fr: "Salaire en Allemagne", de: "Gehalt in Deutschland", en: "Salary in Germany" }, body: {
        fr: "Salaire de début d'environ 3 400 € brut par mois, jusqu'à ~4 200 € avec l'expérience, primes en sus.",
        de: "Einstiegsgehalt rund 3.400 € brutto pro Monat, bis ca. 4.200 € mit Erfahrung, zuzüglich Zuschlägen.",
        en: "Entry salary around €3,400 gross per month, up to about €4,200 with experience, plus premiums." } },
      { heading: { fr: "Durée de la formation", de: "Dauer der Ausbildung", en: "Training duration" }, body: {
        fr: "La formation d'OTA dure 3 ans et fait partie des rares formations scolaires rémunérées (rémunération comparable à la formation en soins, environ 1 200 à 1 650 €/mois).",
        de: "Die OTA-Ausbildung dauert 3 Jahre und gehört zu den wenigen vergüteten schulischen Ausbildungen (Vergütung vergleichbar mit der Pflege, rund 1.200 bis 1.650 €/Monat).",
        en: "OTA training lasts 3 years and is one of the few paid school-based programmes (pay comparable to nursing, about €1,200 to €1,650/month)." } },
      { heading: { fr: "Entreprises qui recrutent", de: "Arbeitgeber mit Bedarf", en: "Employers hiring" }, body: {
        fr: "Hôpitaux et cliniques chirurgicales, cliniques universitaires et grands groupes (Helios, Asklepios, Sana). Forte demande partout.",
        de: "Krankenhäuser und chirurgische Kliniken, Universitätskliniken und große Träger (Helios, Asklepios, Sana). Hohe Nachfrage überall.",
        en: "Hospitals and surgical clinics, university hospitals and large groups (Helios, Asklepios, Sana). Strong demand everywhere." } },
      { heading: { fr: "Débouchés", de: "Einsatzbereiche", en: "Where you can work" }, body: {
        fr: "Blocs opératoires, salles d'endoscopie, services d'ambulatoire chirurgical et centres de stérilisation.",
        de: "Operationssäle, Endoskopie, ambulante Chirurgie und Sterilisationsabteilungen.",
        en: "Operating theatres, endoscopy suites, day-surgery units and sterilisation departments." } },
      { heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" }, body: {
        fr: "Spécialisations chirurgicales, référent hygiène, coordination de bloc (Leitung), ou passerelle vers les soins infirmiers.",
        de: "Chirurgische Spezialisierungen, Hygienebeauftragter, OP-Leitung oder Wechsel in die Pflege.",
        en: "Surgical specialisations, hygiene officer, theatre coordination (Leitung), or a bridge into nursing." } },
      { heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" }, body: {
        fr: "Le niveau B2 est requis. Karriere Fähre vous forme jusqu'au B2 à Douala, avant le départ.",
        de: "B2 ist erforderlich. Karriere Fähre bildet Sie in Douala bis B2 aus, vor der Ausreise.",
        en: "B2 is required. Karriere Fähre trains you up to B2 in Douala, before departure." } },
      { heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung", en: "Recognition" }, body: {
        fr: "Par la voie de l'Ausbildung, vous obtenez directement le diplôme allemand, sans reconnaissance préalable.",
        de: "Über die Ausbildung erwerben Sie direkt den deutschen Abschluss, ohne vorherige Anerkennung.",
        en: "Via the Ausbildung you obtain the German qualification directly, with no prior recognition." } },
      { heading: { fr: "Visa et titre de séjour", de: "Visum und Aufenthaltstitel", en: "Visa and residence permit" }, body: {
        fr: "Visa de formation (§ 16a) pour l'Ausbildung. Nous gérons les démarches avec vous.",
        de: "Ausbildungsvisum (§ 16a) für die Ausbildung. Wir übernehmen die Schritte mit Ihnen.",
        en: "Training visa (§ 16a) for the Ausbildung. We handle the steps with you." } },
      { heading: { fr: "Le processus avec Karriere Fähre", de: "Der Ablauf mit Karriere Fähre", en: "The process with Karriere Fähre" }, body: {
        fr: "Évaluation du profil, allemand jusqu'au B2, dossier d'admission, mise en relation avec un hôpital, visa et démarches, puis accompagnement à l'installation.",
        de: "Profilbewertung, Deutsch bis B2, Bewerbung, Kontakt zu einem Krankenhaus, Visum und Formalitäten, danach Begleitung bei der Ankunft.",
        en: "Profile assessment, German up to B2, application, matching with a hospital, visa and paperwork, then support with settling in." } },
    ],
    faq: [
      { q: { fr: "La formation est-elle rémunérée ?", de: "Ist die Ausbildung vergütet?", en: "Is the training paid?" }, a: {
        fr: "Oui, l'OTA fait partie des rares formations scolaires rémunérées dès la première année.",
        de: "Ja, OTA gehört zu den wenigen schulischen Ausbildungen mit Vergütung ab dem ersten Jahr.",
        en: "Yes, OTA is one of the few school-based programmes paid from the first year." } },
      { q: { fr: "Faut-il parler allemand ?", de: "Muss ich Deutsch sprechen?", en: "Do I need German?" }, a: {
        fr: "Nous vous formons du débutant jusqu'au B2 avant le départ, à Douala.",
        de: "Wir bilden Sie vor der Ausreise in Douala vom Anfänger bis B2 aus.",
        en: "We train you from beginner up to B2 before departure, in Douala." } },
    ],
    sourceNote: {
      fr: "Salaires : sources spécialisées (doctari, ausbildung.de) et conventions du secteur, 2025. Montants indicatifs, non garantis. Visas : autorités allemandes compétentes.",
      de: "Gehälter: Fachquellen (doctari, ausbildung.de) und Branchentarife, 2025. Richtwerte, nicht garantiert. Visa: zuständige deutsche Behörden.",
      en: "Salaries: specialist sources (doctari, ausbildung.de) and sector agreements, 2025. Indicative figures, not guaranteed. Visas: competent German authorities.",
    },
  },

  ata: {
    slug: "ata",
    title: { fr: "Assistant en anesthésie (ATA)", de: "Anästhesietechnischer Assistent (ATA)", en: "Anaesthesia assistant (ATA)" },
    image: "ata",
    intro: {
      fr: "L'assistant technique en anesthésie (ATA) est un métier technique bien rémunéré, accessible par une Ausbildung de 3 ans rémunérée en Allemagne.",
      de: "Der Anästhesietechnische Assistent (ATA) ist ein gut bezahlter technischer Beruf, zugänglich über eine vergütete 3-jährige Ausbildung in Deutschland.",
      en: "The anaesthesia assistant (ATA) is a well-paid technical role, accessible through a paid 3-year Ausbildung in Germany.",
    },
    sections: [
      { heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" }, body: {
        fr: "L'ATA prépare et surveille le matériel d'anesthésie, assiste les anesthésistes et veille à la sécurité du patient avant, pendant et après l'intervention.",
        de: "Der ATA bereitet die Anästhesietechnik vor und überwacht sie, assistiert den Anästhesisten und sorgt für die Patientensicherheit vor, während und nach dem Eingriff.",
        en: "The ATA prepares and monitors anaesthesia equipment, assists anaesthetists and ensures patient safety before, during and after the procedure." } },
      { heading: { fr: "Salaire en Allemagne", de: "Gehalt in Deutschland", en: "Salary in Germany" }, body: {
        fr: "Salaire de début d'environ 3 400 € brut par mois, jusqu'à ~4 400 € avec l'expérience (moyenne autour de 4 390 €), l'un des mieux payés parmi les métiers d'assistance.",
        de: "Einstiegsgehalt rund 3.400 € brutto pro Monat, bis ca. 4.400 € mit Erfahrung (im Schnitt rund 4.390 €), einer der bestbezahlten Assistenzberufe.",
        en: "Entry salary around €3,400 gross per month, up to about €4,400 with experience (averaging around €4,390), one of the best-paid assistance roles." } },
      { heading: { fr: "Durée de la formation", de: "Dauer der Ausbildung", en: "Training duration" }, body: {
        fr: "La formation d'ATA dure 3 ans et est rémunérée dès la première année (environ 1 200 à 1 650 €/mois).",
        de: "Die ATA-Ausbildung dauert 3 Jahre und ist ab dem ersten Jahr vergütet (rund 1.200 bis 1.650 €/Monat).",
        en: "ATA training lasts 3 years and is paid from the first year (about €1,200 to €1,650/month)." } },
      { heading: { fr: "Entreprises qui recrutent", de: "Arbeitgeber mit Bedarf", en: "Employers hiring" }, body: {
        fr: "Hôpitaux et cliniques, services d'anesthésie et de soins intensifs, cliniques universitaires et grands groupes (Helios, Asklepios, Sana).",
        de: "Krankenhäuser und Kliniken, Anästhesie- und Intensivabteilungen, Universitätskliniken und große Träger (Helios, Asklepios, Sana).",
        en: "Hospitals and clinics, anaesthesia and intensive-care units, university hospitals and large groups (Helios, Asklepios, Sana)." } },
      { heading: { fr: "Débouchés", de: "Einsatzbereiche", en: "Where you can work" }, body: {
        fr: "Services d'anesthésie, soins intensifs, salle de réveil, endoscopie et urgences.",
        de: "Anästhesie, Intensivstation, Aufwachraum, Endoskopie und Notaufnahme.",
        en: "Anaesthesia units, intensive care, recovery rooms, endoscopy and emergency departments." } },
      { heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" }, body: {
        fr: "Spécialisations, coordination d'équipe (Leitung), référent qualité, ou passerelle vers les soins infirmiers spécialisés.",
        de: "Spezialisierungen, Teamleitung, Qualitätsbeauftragter oder Wechsel in die spezialisierte Pflege.",
        en: "Specialisations, team leadership (Leitung), quality officer, or a bridge into specialised nursing." } },
      { heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" }, body: {
        fr: "Le niveau B2 est requis. Karriere Fähre vous forme jusqu'au B2 à Douala, avant le départ.",
        de: "B2 ist erforderlich. Karriere Fähre bildet Sie in Douala bis B2 aus, vor der Ausreise.",
        en: "B2 is required. Karriere Fähre trains you up to B2 in Douala, before departure." } },
      { heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung", en: "Recognition" }, body: {
        fr: "Par la voie de l'Ausbildung, vous obtenez directement le diplôme allemand, sans reconnaissance préalable.",
        de: "Über die Ausbildung erwerben Sie direkt den deutschen Abschluss, ohne vorherige Anerkennung.",
        en: "Via the Ausbildung you obtain the German qualification directly, with no prior recognition." } },
      { heading: { fr: "Visa et titre de séjour", de: "Visum und Aufenthaltstitel", en: "Visa and residence permit" }, body: {
        fr: "Visa de formation (§ 16a) pour l'Ausbildung. Nous gérons les démarches avec vous.",
        de: "Ausbildungsvisum (§ 16a) für die Ausbildung. Wir übernehmen die Schritte mit Ihnen.",
        en: "Training visa (§ 16a) for the Ausbildung. We handle the steps with you." } },
      { heading: { fr: "Le processus avec Karriere Fähre", de: "Der Ablauf mit Karriere Fähre", en: "The process with Karriere Fähre" }, body: {
        fr: "Évaluation du profil, allemand jusqu'au B2, dossier d'admission, mise en relation avec un hôpital, visa et démarches, puis accompagnement à l'installation.",
        de: "Profilbewertung, Deutsch bis B2, Bewerbung, Kontakt zu einem Krankenhaus, Visum und Formalitäten, danach Begleitung bei der Ankunft.",
        en: "Profile assessment, German up to B2, application, matching with a hospital, visa and paperwork, then support with settling in." } },
    ],
    faq: [
      { q: { fr: "Quelle différence avec l'OTA ?", de: "Was ist der Unterschied zum OTA?", en: "What is the difference from OTA?" }, a: {
        fr: "L'ATA travaille en anesthésie et soins intensifs, l'OTA au bloc opératoire. Les deux formations durent 3 ans et sont rémunérées.",
        de: "Der ATA arbeitet in Anästhesie und Intensivpflege, der OTA im OP. Beide Ausbildungen dauern 3 Jahre und sind vergütet.",
        en: "The ATA works in anaesthesia and intensive care, the OTA in the operating theatre. Both trainings last 3 years and are paid." } },
      { q: { fr: "Faut-il parler allemand ?", de: "Muss ich Deutsch sprechen?", en: "Do I need German?" }, a: {
        fr: "Nous vous formons du débutant jusqu'au B2 avant le départ, à Douala.",
        de: "Wir bilden Sie vor der Ausreise in Douala vom Anfänger bis B2 aus.",
        en: "We train you from beginner up to B2 before departure, in Douala." } },
    ],
    sourceNote: {
      fr: "Salaires : sources spécialisées (doctari, Medwing, medi-karriere), 2025. Montants indicatifs, non garantis. Visas : autorités allemandes compétentes.",
      de: "Gehälter: Fachquellen (doctari, Medwing, medi-karriere), 2025. Richtwerte, nicht garantiert. Visa: zuständige deutsche Behörden.",
      en: "Salaries: specialist sources (doctari, Medwing, medi-karriere), 2025. Indicative figures, not guaranteed. Visas: competent German authorities.",
    },
  },

  notfallsanitaeter: {
    slug: "notfallsanitaeter",
    title: { fr: "Ambulancier d'urgence (Notfallsanitäter)", de: "Notfallsanitäter in Deutschland", en: "Emergency paramedic (Notfallsanitäter)" },
    image: "notfallsanitaeter",
    intro: {
      fr: "Le Notfallsanitäter est le plus haut niveau du secours d'urgence en Allemagne. Un métier d'action, recherché, accessible par une Ausbildung rémunérée de 3 ans.",
      de: "Der Notfallsanitäter ist die höchste Qualifikation im Rettungsdienst in Deutschland. Ein gefragter Beruf mit Verantwortung, zugänglich über eine vergütete 3-jährige Ausbildung.",
      en: "The Notfallsanitäter is the highest qualification in German emergency services. An action-oriented, in-demand role, accessible through a paid 3-year Ausbildung.",
    },
    sections: [
      { heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" }, body: {
        fr: "Le Notfallsanitäter prend en charge les patients en urgence, réalise les premiers soins vitaux et assure le transport médicalisé jusqu'à l'hôpital.",
        de: "Der Notfallsanitäter versorgt Patienten im Notfall, leistet lebensrettende Erstmaßnahmen und übernimmt den qualifizierten Transport ins Krankenhaus.",
        en: "The Notfallsanitäter cares for patients in emergencies, delivers life-saving first care and provides medically supervised transport to hospital." } },
      { heading: { fr: "Salaire en Allemagne", de: "Gehalt in Deutschland", en: "Salary in Germany" }, body: {
        fr: "De l'ordre de 2 800 € à 3 200 € brut en début de carrière, environ 3 640 € couramment, jusqu'à 4 500 € et plus avec l'expérience, primes de nuit et de garde en sus.",
        de: "Rund 2.800 € bis 3.200 € brutto zu Berufsbeginn, üblich etwa 3.640 €, bis 4.500 € und mehr mit Erfahrung, Nacht- und Bereitschaftszuschläge inklusive.",
        en: "Around €2,800 to €3,200 gross at the start, typically about €3,640, up to €4,500 and more with experience, plus night and on-call premiums." } },
      { heading: { fr: "Durée de la formation", de: "Dauer der Ausbildung", en: "Training duration" }, body: {
        fr: "La formation dure 3 ans et est rémunérée dès la première année (environ 1 293 € la 1re, 1 343 € la 2e, 1 389 € la 3e), avec une prime après l'examen final.",
        de: "Die Ausbildung dauert 3 Jahre und ist ab dem ersten Jahr vergütet (rund 1.293 € im 1., 1.343 € im 2., 1.389 € im 3. Jahr), mit einer Prämie nach der Abschlussprüfung.",
        en: "Training lasts 3 years and is paid from the first year (about €1,293 in year 1, €1,343 in year 2, €1,389 in year 3), with a bonus after the final exam." } },
      { heading: { fr: "Entreprises qui recrutent", de: "Arbeitgeber mit Bedarf", en: "Employers hiring" }, body: {
        fr: "Services de secours (Rettungsdienst), croix-rouge et organisations de secours (DRK, Malteser, Johanniter, ASB), pompiers et hôpitaux.",
        de: "Rettungsdienste, Rotes Kreuz und Hilfsorganisationen (DRK, Malteser, Johanniter, ASB), Feuerwehren und Krankenhäuser.",
        en: "Emergency services (Rettungsdienst), Red Cross and aid organisations (DRK, Malteser, Johanniter, ASB), fire services and hospitals." } },
      { heading: { fr: "Débouchés", de: "Einsatzbereiche", en: "Where you can work" }, body: {
        fr: "Ambulances et véhicules de secours, services d'urgence hospitaliers, transport inter-hospitalier et postes de secours d'événements.",
        de: "Rettungswagen und Notarzteinsatzfahrzeuge, Notaufnahmen, Verlegungstransporte und Sanitätsdienste bei Veranstaltungen.",
        en: "Ambulances and emergency vehicles, hospital emergency departments, inter-hospital transfers and event medical services." } },
      { heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" }, body: {
        fr: "Chef d'équipe (Wachleiter), formateur, coordination des secours, ou spécialisations (soins intensifs mobiles).",
        de: "Wachleiter, Ausbilder, Einsatzkoordination oder Spezialisierungen (Intensivtransport).",
        en: "Shift leader (Wachleiter), instructor, dispatch coordination, or specialisations (mobile intensive care)." } },
      { heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" }, body: {
        fr: "Le niveau B2 est requis (communication rapide et précise indispensable). Karriere Fähre vous forme jusqu'au B2 à Douala.",
        de: "B2 ist erforderlich (schnelle, präzise Kommunikation ist entscheidend). Karriere Fähre bildet Sie in Douala bis B2 aus.",
        en: "B2 is required (fast, precise communication is essential). Karriere Fähre trains you up to B2 in Douala." } },
      { heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung", en: "Recognition" }, body: {
        fr: "Par la voie de l'Ausbildung, vous obtenez directement le diplôme allemand, sans reconnaissance préalable.",
        de: "Über die Ausbildung erwerben Sie direkt den deutschen Abschluss, ohne vorherige Anerkennung.",
        en: "Via the Ausbildung you obtain the German qualification directly, with no prior recognition." } },
      { heading: { fr: "Visa et titre de séjour", de: "Visum und Aufenthaltstitel", en: "Visa and residence permit" }, body: {
        fr: "Visa de formation (§ 16a) pour l'Ausbildung. Un permis de conduire est en général requis ; nous vous informons des conditions. Nous gérons les démarches.",
        de: "Ausbildungsvisum (§ 16a) für die Ausbildung. In der Regel ist ein Führerschein erforderlich; wir informieren Sie über die Voraussetzungen. Wir übernehmen die Formalitäten.",
        en: "Training visa (§ 16a) for the Ausbildung. A driving licence is generally required; we advise you on the conditions. We handle the paperwork." } },
      { heading: { fr: "Le processus avec Karriere Fähre", de: "Der Ablauf mit Karriere Fähre", en: "The process with Karriere Fähre" }, body: {
        fr: "Évaluation du profil, allemand jusqu'au B2, dossier d'admission, mise en relation avec un service de secours, visa et démarches, puis accompagnement à l'installation.",
        de: "Profilbewertung, Deutsch bis B2, Bewerbung, Kontakt zu einem Rettungsdienst, Visum und Formalitäten, danach Begleitung bei der Ankunft.",
        en: "Profile assessment, German up to B2, application, matching with an emergency service, visa and paperwork, then support with settling in." } },
    ],
    faq: [
      { q: { fr: "La formation est-elle rémunérée ?", de: "Ist die Ausbildung vergütet?", en: "Is the training paid?" }, a: {
        fr: "Oui, dès la première année, avec une prime après l'examen final.",
        de: "Ja, ab dem ersten Jahr, mit einer Prämie nach der Abschlussprüfung.",
        en: "Yes, from the first year, with a bonus after the final exam." } },
      { q: { fr: "Faut-il un permis de conduire ?", de: "Braucht man einen Führerschein?", en: "Do you need a driving licence?" }, a: {
        fr: "En général oui. Nous vous précisons les conditions selon votre situation avant le départ.",
        de: "In der Regel ja. Wir klären die Voraussetzungen je nach Ihrer Situation vor der Ausreise.",
        en: "Usually yes. We clarify the conditions for your situation before departure." } },
    ],
    sourceNote: {
      fr: "Salaires et vergütung : medi-karriere et conventions du secours (2025). Montants indicatifs, non garantis. Visas et conditions : autorités allemandes compétentes.",
      de: "Gehälter und Vergütung: medi-karriere und Rettungsdiensttarife (2025). Richtwerte, nicht garantiert. Visa und Voraussetzungen: zuständige deutsche Behörden.",
      en: "Salaries and training pay: medi-karriere and emergency-service agreements (2025). Indicative figures, not guaranteed. Visas and conditions: competent German authorities.",
    },
  },

  mfa: {
    slug: "mfa",
    title: { fr: "Assistant médical (MFA)", de: "Medizinische Fachangestellte (MFA)", en: "Medical assistant (MFA)" },
    image: "mfa",
    intro: {
      fr: "L'assistant médical (MFA) est le bras droit du médecin en cabinet. Un métier polyvalent et recherché, accessible par une Ausbildung rémunérée de 3 ans en Allemagne.",
      de: "Die Medizinische Fachangestellte (MFA) ist die rechte Hand des Arztes in der Praxis. Ein vielseitiger, gefragter Beruf über eine vergütete 3-jährige Ausbildung.",
      en: "The medical assistant (MFA) is the doctor's right hand in the practice. A versatile, in-demand role, accessible through a paid 3-year Ausbildung in Germany.",
    },
    sections: [
      { heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" }, body: {
        fr: "Le MFA accueille les patients, gère les rendez-vous et les dossiers, réalise des prises de sang et des soins simples, et assiste le médecin pendant les consultations.",
        de: "Die MFA empfängt Patienten, organisiert Termine und Unterlagen, führt Blutentnahmen und einfache Behandlungen durch und assistiert dem Arzt bei der Sprechstunde.",
        en: "The MFA welcomes patients, manages appointments and records, performs blood draws and simple treatments, and assists the doctor during consultations." } },
      { heading: { fr: "Salaire en Allemagne", de: "Gehalt in Deutschland", en: "Salary in Germany" }, body: {
        fr: "Salaire de début d'environ 2 800 € brut par mois, jusqu'à ~3 500 € et plus avec l'expérience et selon la convention.",
        de: "Einstiegsgehalt rund 2.800 € brutto pro Monat, bis ca. 3.500 € und mehr mit Erfahrung und je nach Tarif.",
        en: "Entry salary around €2,800 gross per month, up to about €3,500 and more with experience and depending on the agreement." } },
      { heading: { fr: "Durée de la formation", de: "Dauer der Ausbildung", en: "Training duration" }, body: {
        fr: "La formation de MFA dure 3 ans et est rémunérée dès la première année (environ 1 000 € la 1re, 1 100 € la 2e, 1 200 € la 3e).",
        de: "Die MFA-Ausbildung dauert 3 Jahre und ist ab dem ersten Jahr vergütet (rund 1.000 € im 1., 1.100 € im 2., 1.200 € im 3. Jahr).",
        en: "MFA training lasts 3 years and is paid from the first year (about €1,000 in year 1, €1,100 in year 2, €1,200 in year 3)." } },
      { heading: { fr: "Entreprises qui recrutent", de: "Arbeitgeber mit Bedarf", en: "Employers hiring" }, body: {
        fr: "Cabinets médicaux, centres de santé (MVZ), hôpitaux et cliniques, laboratoires et centres de vaccination.",
        de: "Arztpraxen, Medizinische Versorgungszentren (MVZ), Krankenhäuser und Kliniken, Labore und Impfzentren.",
        en: "Doctors' practices, medical care centres (MVZ), hospitals and clinics, laboratories and vaccination centres." } },
      { heading: { fr: "Débouchés", de: "Einsatzbereiche", en: "Where you can work" }, body: {
        fr: "Médecine générale et spécialités, services hospitaliers ambulatoires, laboratoires et structures de prévention.",
        de: "Allgemeinmedizin und Fachrichtungen, ambulante Krankenhausbereiche, Labore und Präventionseinrichtungen.",
        en: "General practice and specialties, hospital outpatient services, laboratories and prevention services." } },
      { heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" }, body: {
        fr: "Spécialisations (dermatologie, cardiologie, chirurgie), gestion de cabinet, ou formations complémentaires vers des postes qualifiés.",
        de: "Spezialisierungen (Dermatologie, Kardiologie, Chirurgie), Praxismanagement oder Weiterbildungen zu qualifizierten Positionen.",
        en: "Specialisations (dermatology, cardiology, surgery), practice management or further training towards qualified roles." } },
      { heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" }, body: {
        fr: "Le niveau B2 est requis (contact patients permanent). Karriere Fähre vous forme jusqu'au B2 à Douala.",
        de: "B2 ist erforderlich (ständiger Patientenkontakt). Karriere Fähre bildet Sie in Douala bis B2 aus.",
        en: "B2 is required (constant patient contact). Karriere Fähre trains you up to B2 in Douala." } },
      { heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung", en: "Recognition" }, body: {
        fr: "Par la voie de l'Ausbildung, vous obtenez directement le diplôme allemand, sans reconnaissance préalable.",
        de: "Über die Ausbildung erwerben Sie direkt den deutschen Abschluss, ohne vorherige Anerkennung.",
        en: "Via the Ausbildung you obtain the German qualification directly, with no prior recognition." } },
      { heading: { fr: "Visa et titre de séjour", de: "Visum und Aufenthaltstitel", en: "Visa and residence permit" }, body: {
        fr: "Visa de formation (§ 16a) pour l'Ausbildung. Nous gérons les démarches avec vous.",
        de: "Ausbildungsvisum (§ 16a) für die Ausbildung. Wir übernehmen die Schritte mit Ihnen.",
        en: "Training visa (§ 16a) for the Ausbildung. We handle the steps with you." } },
      { heading: { fr: "Le processus avec Karriere Fähre", de: "Der Ablauf mit Karriere Fähre", en: "The process with Karriere Fähre" }, body: {
        fr: "Évaluation du profil, allemand jusqu'au B2, dossier d'admission, mise en relation avec un cabinet ou un hôpital, visa et démarches, puis accompagnement à l'installation.",
        de: "Profilbewertung, Deutsch bis B2, Bewerbung, Kontakt zu Praxis oder Krankenhaus, Visum und Formalitäten, danach Begleitung bei der Ankunft.",
        en: "Profile assessment, German up to B2, application, matching with a practice or hospital, visa and paperwork, then support with settling in." } },
    ],
    faq: [
      { q: { fr: "La formation est-elle rémunérée ?", de: "Ist die Ausbildung vergütet?", en: "Is the training paid?" }, a: {
        fr: "Oui, dès la première année (environ 1 000 à 1 200 €/mois selon l'année).",
        de: "Ja, ab dem ersten Jahr (rund 1.000 bis 1.200 €/Monat je nach Jahr).",
        en: "Yes, from the first year (about €1,000 to €1,200/month depending on the year)." } },
      { q: { fr: "Faut-il parler allemand ?", de: "Muss ich Deutsch sprechen?", en: "Do I need German?" }, a: {
        fr: "Nous vous formons du débutant jusqu'au B2 avant le départ, à Douala.",
        de: "Wir bilden Sie vor der Ausreise in Douala vom Anfänger bis B2 aus.",
        en: "We train you from beginner up to B2 before departure, in Douala." } },
    ],
    sourceNote: {
      fr: "Salaires et vergütung : convention MFA (Ärztekammer) et medi-karriere, 2025. Montants indicatifs, non garantis. Visas : autorités allemandes compétentes.",
      de: "Gehälter und Vergütung: MFA-Tarifvertrag (Ärztekammer) und medi-karriere, 2025. Richtwerte, nicht garantiert. Visa: zuständige deutsche Behörden.",
      en: "Salaries and training pay: MFA collective agreement (medical chamber) and medi-karriere, 2025. Indicative figures, not guaranteed. Visas: competent German authorities.",
    },
  },

  zfa: {
    slug: "zfa",
    title: { fr: "Assistant dentaire (ZFA)", de: "Zahnmedizinische Fachangestellte (ZFA)", en: "Dental assistant (ZFA)" },
    image: "zfa",
    intro: {
      fr: "L'assistant dentaire (ZFA) seconde le dentiste au quotidien. Un métier stable et recherché, accessible par une Ausbildung rémunérée de 3 ans en Allemagne.",
      de: "Die Zahnmedizinische Fachangestellte (ZFA) unterstützt den Zahnarzt im Alltag. Ein stabiler, gefragter Beruf über eine vergütete 3-jährige Ausbildung.",
      en: "The dental assistant (ZFA) supports the dentist day to day. A stable, in-demand role, accessible through a paid 3-year Ausbildung in Germany.",
    },
    sections: [
      { heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" }, body: {
        fr: "Le ZFA accueille les patients, prépare les instruments, assiste le dentiste pendant les soins et gère l'hygiène et l'organisation du cabinet.",
        de: "Die ZFA empfängt Patienten, bereitet Instrumente vor, assistiert dem Zahnarzt bei der Behandlung und sorgt für Hygiene und Organisation der Praxis.",
        en: "The ZFA welcomes patients, prepares instruments, assists the dentist during treatment and manages hygiene and practice organisation." } },
      { heading: { fr: "Salaire en Allemagne", de: "Gehalt in Deutschland", en: "Salary in Germany" }, body: {
        fr: "Salaire de début d'environ 2 700 € à 3 700 € brut par mois selon la région et l'expérience.",
        de: "Einstiegsgehalt etwa 2.700 € bis 3.700 € brutto pro Monat je nach Region und Erfahrung.",
        en: "Entry salary around €2,700 to €3,700 gross per month depending on region and experience." } },
      { heading: { fr: "Durée de la formation", de: "Dauer der Ausbildung", en: "Training duration" }, body: {
        fr: "La formation de ZFA dure 3 ans et est rémunérée dès la première année (environ 1 000 € la 1re, 1 100 € la 2e, 1 200 € la 3e).",
        de: "Die ZFA-Ausbildung dauert 3 Jahre und ist ab dem ersten Jahr vergütet (rund 1.000 € im 1., 1.100 € im 2., 1.200 € im 3. Jahr).",
        en: "ZFA training lasts 3 years and is paid from the first year (about €1,000 in year 1, €1,100 in year 2, €1,200 in year 3)." } },
      { heading: { fr: "Entreprises qui recrutent", de: "Arbeitgeber mit Bedarf", en: "Employers hiring" }, body: {
        fr: "Cabinets dentaires, cliniques dentaires et centres de santé bucco-dentaire, dans tout le pays.",
        de: "Zahnarztpraxen, Zahnkliniken und zahnmedizinische Versorgungszentren, bundesweit.",
        en: "Dental practices, dental clinics and oral-health centres, across the country." } },
      { heading: { fr: "Débouchés", de: "Einsatzbereiche", en: "Where you can work" }, body: {
        fr: "Cabinets généralistes et spécialisés (orthodontie, chirurgie dentaire), cliniques et centres de prévention.",
        de: "Allgemein- und Fachpraxen (Kieferorthopädie, Oralchirurgie), Kliniken und Prophylaxezentren.",
        en: "General and specialist practices (orthodontics, oral surgery), clinics and prevention centres." } },
      { heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" }, body: {
        fr: "Spécialisations (prophylaxie, assistance chirurgicale), gestion de cabinet ou formations complémentaires (hygiène dentaire).",
        de: "Spezialisierungen (Prophylaxe, chirurgische Assistenz), Praxismanagement oder Weiterbildungen (Dentalhygiene).",
        en: "Specialisations (prophylaxis, surgical assistance), practice management or further training (dental hygiene)." } },
      { heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" }, body: {
        fr: "Le niveau B2 est requis (contact patients permanent). Karriere Fähre vous forme jusqu'au B2 à Douala.",
        de: "B2 ist erforderlich (ständiger Patientenkontakt). Karriere Fähre bildet Sie in Douala bis B2 aus.",
        en: "B2 is required (constant patient contact). Karriere Fähre trains you up to B2 in Douala." } },
      { heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung", en: "Recognition" }, body: {
        fr: "Par la voie de l'Ausbildung, vous obtenez directement le diplôme allemand, sans reconnaissance préalable.",
        de: "Über die Ausbildung erwerben Sie direkt den deutschen Abschluss, ohne vorherige Anerkennung.",
        en: "Via the Ausbildung you obtain the German qualification directly, with no prior recognition." } },
      { heading: { fr: "Visa et titre de séjour", de: "Visum und Aufenthaltstitel", en: "Visa and residence permit" }, body: {
        fr: "Visa de formation (§ 16a) pour l'Ausbildung. Nous gérons les démarches avec vous.",
        de: "Ausbildungsvisum (§ 16a) für die Ausbildung. Wir übernehmen die Schritte mit Ihnen.",
        en: "Training visa (§ 16a) for the Ausbildung. We handle the steps with you." } },
      { heading: { fr: "Le processus avec Karriere Fähre", de: "Der Ablauf mit Karriere Fähre", en: "The process with Karriere Fähre" }, body: {
        fr: "Évaluation du profil, allemand jusqu'au B2, dossier d'admission, mise en relation avec un cabinet, visa et démarches, puis accompagnement à l'installation.",
        de: "Profilbewertung, Deutsch bis B2, Bewerbung, Kontakt zu einer Praxis, Visum und Formalitäten, danach Begleitung bei der Ankunft.",
        en: "Profile assessment, German up to B2, application, matching with a practice, visa and paperwork, then support with settling in." } },
    ],
    faq: [
      { q: { fr: "La formation est-elle rémunérée ?", de: "Ist die Ausbildung vergütet?", en: "Is the training paid?" }, a: {
        fr: "Oui, dès la première année (environ 1 000 à 1 200 €/mois selon l'année).",
        de: "Ja, ab dem ersten Jahr (rund 1.000 bis 1.200 €/Monat je nach Jahr).",
        en: "Yes, from the first year (about €1,000 to €1,200/month depending on the year)." } },
      { q: { fr: "Faut-il parler allemand ?", de: "Muss ich Deutsch sprechen?", en: "Do I need German?" }, a: {
        fr: "Nous vous formons du débutant jusqu'au B2 avant le départ, à Douala.",
        de: "Wir bilden Sie vor der Ausreise in Douala vom Anfänger bis B2 aus.",
        en: "We train you from beginner up to B2 before departure, in Douala." } },
    ],
    sourceNote: {
      fr: "Salaires et vergütung : convention ZFA et sources spécialisées (praktischArzt, rebmann-research), 2025. Montants indicatifs, non garantis. Visas : autorités allemandes compétentes.",
      de: "Gehälter und Vergütung: ZFA-Tarifvertrag und Fachquellen (praktischArzt, rebmann-research), 2025. Richtwerte, nicht garantiert. Visa: zuständige deutsche Behörden.",
      en: "Salaries and training pay: ZFA collective agreement and specialist sources (praktischArzt, rebmann-research), 2025. Indicative figures, not guaranteed. Visas: competent German authorities.",
    },
  },

  krankenpflegehelfer: {
    slug: "krankenpflegehelfer",
    title: { fr: "Aide en soins infirmiers (Krankenpflegehelfer)", de: "Krankenpflegehelfer in Deutschland", en: "Nursing aide (Krankenpflegehelfer)" },
    image: "krankenpflegehelfer",
    intro: {
      fr: "L'aide en soins infirmiers (Krankenpflegehelfer) soutient l'équipe soignante à l'hôpital et en établissement. Une formation courte, une entrée rapide et un tremplin vers le métier d'infirmier.",
      de: "Der Krankenpflegehelfer unterstützt das Pflegeteam im Krankenhaus und in Einrichtungen. Eine kurze Ausbildung, ein schneller Einstieg und ein Sprungbrett zur Pflegefachkraft.",
      en: "The nursing aide (Krankenpflegehelfer) supports the care team in hospitals and facilities. A short training, a quick entry and a springboard to becoming a nurse.",
    },
    sections: [
      { heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" }, body: {
        fr: "L'aide en soins accompagne les patients dans la toilette, les repas et la mobilité, prend les constantes et seconde les infirmiers dans les soins de base.",
        de: "Der Krankenpflegehelfer unterstützt Patienten bei Körperpflege, Essen und Mobilität, misst Vitalwerte und entlastet die Pflegefachkräfte bei der Grundpflege.",
        en: "The nursing aide helps patients with washing, meals and mobility, takes vital signs and supports nurses with basic care." } },
      { heading: { fr: "Salaire en Allemagne", de: "Gehalt in Deutschland", en: "Salary in Germany" }, body: {
        fr: "De l'ordre de 2 500 € à 3 300 € brut par mois ; dans le service public (TVöD-P), jusqu'à ~4 000 € avec l'ancienneté, primes en sus.",
        de: "Etwa 2.500 € bis 3.300 € brutto pro Monat; im öffentlichen Dienst (TVöD-P) bis ca. 4.000 € mit Erfahrung, zuzüglich Zuschlägen.",
        en: "Around €2,500 to €3,300 gross per month; in the public sector (TVöD-P) up to about €4,000 with seniority, plus premiums." } },
      { heading: { fr: "Durée de la formation", de: "Dauer der Ausbildung", en: "Training duration" }, body: {
        fr: "La formation dure 1 à 2 ans selon le Land (formation surtout scolaire). Elle constitue une passerelle vers la formation complète d'infirmier (3 ans).",
        de: "Die Ausbildung dauert je nach Bundesland 1 bis 2 Jahre (überwiegend schulisch). Sie ist ein Sprungbrett zur vollen Pflegeausbildung (3 Jahre).",
        en: "Training lasts 1 to 2 years depending on the state (mostly school-based). It is a stepping stone to the full nursing training (3 years)." } },
      { heading: { fr: "Entreprises qui recrutent", de: "Arbeitgeber mit Bedarf", en: "Employers hiring" }, body: {
        fr: "Hôpitaux et cliniques, maisons de retraite, services de soins à domicile et réseaux confessionnels (Caritas, Diakonie).",
        de: "Krankenhäuser und Kliniken, Pflegeheime, ambulante Pflegedienste und kirchliche Träger (Caritas, Diakonie).",
        en: "Hospitals and clinics, care homes, home-care services and faith-based providers (Caritas, Diakonie)." } },
      { heading: { fr: "Débouchés", de: "Einsatzbereiche", en: "Where you can work" }, body: {
        fr: "Services hospitaliers, établissements pour personnes âgées, soins à domicile et structures de soins de longue durée.",
        de: "Krankenhausstationen, Altenpflegeeinrichtungen, ambulante Pflege und Langzeitpflege.",
        en: "Hospital wards, elderly-care facilities, home care and long-term care." } },
      { heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" }, body: {
        fr: "Passerelle vers le diplôme d'infirmier (Pflegefachkraft) par une formation complémentaire, puis spécialisations et encadrement.",
        de: "Aufstieg zur Pflegefachkraft über eine Weiterbildung, anschließend Spezialisierungen und Leitungsaufgaben.",
        en: "Progression to registered nurse (Pflegefachkraft) through further training, then specialisations and leadership." } },
      { heading: { fr: "Niveau d'allemand requis", de: "Erforderliches Deutschniveau", en: "German level required" }, body: {
        fr: "Le niveau B2 est visé pour travailler et évoluer. Karriere Fähre vous forme jusqu'au B2 à Douala.",
        de: "B2 wird für Arbeit und Aufstieg angestrebt. Karriere Fähre bildet Sie in Douala bis B2 aus.",
        en: "B2 is targeted to work and progress. Karriere Fähre trains you up to B2 in Douala." } },
      { heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung", en: "Recognition" }, body: {
        fr: "Par la voie de l'Ausbildung, vous obtenez directement le diplôme allemand, sans reconnaissance préalable.",
        de: "Über die Ausbildung erwerben Sie direkt den deutschen Abschluss, ohne vorherige Anerkennung.",
        en: "Via the Ausbildung you obtain the German qualification directly, with no prior recognition." } },
      { heading: { fr: "Visa et titre de séjour", de: "Visum und Aufenthaltstitel", en: "Visa and residence permit" }, body: {
        fr: "Visa de formation (§ 16a) pour l'Ausbildung. Nous gérons les démarches avec vous.",
        de: "Ausbildungsvisum (§ 16a) für die Ausbildung. Wir übernehmen die Schritte mit Ihnen.",
        en: "Training visa (§ 16a) for the Ausbildung. We handle the steps with you." } },
      { heading: { fr: "Le processus avec Karriere Fähre", de: "Der Ablauf mit Karriere Fähre", en: "The process with Karriere Fähre" }, body: {
        fr: "Évaluation du profil, allemand jusqu'au B2, dossier d'admission, mise en relation avec un employeur, visa et démarches, puis accompagnement à l'installation.",
        de: "Profilbewertung, Deutsch bis B2, Bewerbung, Kontakt zu einem Arbeitgeber, Visum und Formalitäten, danach Begleitung bei der Ankunft.",
        en: "Profile assessment, German up to B2, application, employer matching, visa and paperwork, then support with settling in." } },
    ],
    faq: [
      { q: { fr: "Peut-on devenir infirmier ensuite ?", de: "Kann man danach Pflegefachkraft werden?", en: "Can you become a nurse afterwards?" }, a: {
        fr: "Oui, c'est une excellente porte d'entrée : une formation complémentaire mène au diplôme d'infirmier (Pflegefachkraft).",
        de: "Ja, ein guter Einstieg: Eine Weiterbildung führt zur Pflegefachkraft.",
        en: "Yes, a great entry point: further training leads to the registered-nurse qualification (Pflegefachkraft)." } },
      { q: { fr: "Faut-il parler allemand ?", de: "Muss ich Deutsch sprechen?", en: "Do I need German?" }, a: {
        fr: "Nous vous formons du débutant jusqu'au B2 avant le départ, à Douala.",
        de: "Wir bilden Sie vor der Ausreise in Douala vom Anfänger bis B2 aus.",
        en: "We train you from beginner up to B2 before departure, in Douala." } },
    ],
    sourceNote: {
      fr: "Salaires : Entgeltatlas (Bundesagentur für Arbeit) et grille TVöD-P, 2025. Montants indicatifs, non garantis. Reconnaissance et visas : autorités allemandes compétentes.",
      de: "Gehälter: Entgeltatlas (Bundesagentur für Arbeit) und TVöD-P, 2025. Richtwerte, nicht garantiert. Anerkennung und Visa: zuständige deutsche Behörden.",
      en: "Salaries: Entgeltatlas (Federal Employment Agency) and the TVöD-P scale, 2025. Indicative figures, not guaranteed. Recognition and visas: competent German authorities.",
    },
  },
};
