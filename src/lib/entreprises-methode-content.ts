import type { LocalizedText } from "./localized";

// Full content for /entreprises/methode. Trilingual and factual.
// Describes how Karriere Fähre runs a recruitment project, from the hiring
// need to integration. Hiring, recognition and residence decisions rest with
// employers and competent authorities; no figures or guarantees are implied.

type LT = LocalizedText;

export const ENT_METHODE: {
  heroKicker: LT;
  heroTitle: LT;
  heroIntro1: LT;
  heroIntro2: LT;
  heroCta: LT;

  stepsKicker: LT;
  contributionLabel: LT;
  steps: { title: LT; body: LT; contribution: LT }[];

  respKicker: LT;
  respColALabel: LT;
  respColAItems: LT[];
  respColBLabel: LT;
  respColBItems: LT[];

  transpKicker: LT;
  transpTitle: LT;
  transpIntro: LT;
  transpItems: { label: LT; text: LT }[];

  finalTitle: LT;
  finalText: LT;
  finalCtaPrimary: LT;
  finalCtaSecondary: LT;
} = {
  // SECTION 01 — HERO
  heroKicker: {
    fr: "Un processus structuré",
    de: "Ein strukturierter Prozess",
    en: "A structured process",
  },
  heroTitle: {
    fr: "Du besoin de recrutement à l'intégration.",
    de: "Vom Personalbedarf bis zur Integration.",
    en: "From hiring need to integration.",
  },
  heroIntro1: {
    fr: "Chaque projet commence par vos besoins. Nous définissons les critères, recherchons les profils adaptés et préparons les candidats avant leur présentation à votre entreprise.",
    de: "Jedes Projekt beginnt mit Ihren Bedürfnissen. Wir legen die Kriterien fest, suchen die passenden Profile und bereiten die Kandidaten vor, bevor sie Ihrem Unternehmen vorgestellt werden.",
    en: "Every project starts with your needs. We define the criteria, search for suitable profiles and prepare the candidates before presenting them to your company.",
  },
  heroIntro2: {
    fr: "Le processus est organisé selon le type de recrutement, le profil et les démarches applicables.",
    de: "Der Prozess ist nach der Art der Einstellung, dem Profil und den anwendbaren Formalitäten gegliedert.",
    en: "The process is organised according to the type of recruitment, the profile and the applicable procedures.",
  },
  heroCta: {
    fr: "Présenter mon projet de recrutement",
    de: "Mein Rekrutierungsprojekt vorstellen",
    en: "Present my recruitment project",
  },

  // SECTION 02 — LES SIX ÉTAPES
  stepsKicker: { fr: "Les six étapes", de: "Die sechs Schritte", en: "The six steps" },
  contributionLabel: { fr: "Votre contribution :", de: "Ihr Beitrag:", en: "Your contribution:" },
  steps: [
    {
      title: { fr: "Comprendre votre besoin", de: "Ihren Bedarf verstehen", en: "Understanding your need" },
      body: {
        fr: "Nous définissons avec vous le poste ou la place d'Ausbildung, les compétences recherchées, les qualifications, l'expérience, le niveau de langue et le calendrier.",
        de: "Wir legen gemeinsam mit Ihnen die Stelle oder den Ausbildungsplatz, die gesuchten Kompetenzen, die Qualifikationen, die Erfahrung, das Sprachniveau und den Zeitplan fest.",
        en: "Together with you, we define the position or the Ausbildung place, the required skills, qualifications, experience, language level and timeline.",
      },
      contribution: {
        fr: "Une description précise du besoin et des conditions proposées.",
        de: "Eine präzise Beschreibung des Bedarfs und der angebotenen Bedingungen.",
        en: "A precise description of the need and the conditions offered.",
      },
    },
    {
      title: { fr: "Rechercher et présélectionner", de: "Suchen und vorauswählen", en: "Searching and shortlisting" },
      body: {
        fr: "Nous identifions les profils correspondant aux critères définis ensemble et procédons à un premier examen de leur parcours et des documents disponibles.",
        de: "Wir ermitteln die Profile, die den gemeinsam festgelegten Kriterien entsprechen, und nehmen eine erste Prüfung ihres Werdegangs und der verfügbaren Unterlagen vor.",
        en: "We identify the profiles matching the criteria defined together and carry out an initial review of their background and the available documents.",
      },
      contribution: {
        fr: "La validation des critères de sélection et des éventuels critères prioritaires.",
        de: "Die Bestätigung der Auswahlkriterien und etwaiger vorrangiger Kriterien.",
        en: "Validation of the selection criteria and of any priority criteria.",
      },
    },
    {
      title: { fr: "Préparer les candidats", de: "Die Kandidaten vorbereiten", en: "Preparing the candidates" },
      body: {
        fr: "Selon le profil et le parcours, nous travaillons l'allemand, la Fachsprache, le vocabulaire métier et la préparation aux entretiens.",
        de: "Je nach Profil und Werdegang arbeiten wir an Deutsch, der Fachsprache, dem beruflichen Wortschatz und der Vorbereitung auf die Gespräche.",
        en: "Depending on the profile and background, we work on German, the Fachsprache, occupational vocabulary and interview preparation.",
      },
      contribution: {
        fr: "Les attentes professionnelles propres au poste ou à la formation.",
        de: "Die beruflichen Erwartungen, die mit der Stelle oder der Ausbildung verbunden sind.",
        en: "The professional expectations specific to the position or the training.",
      },
    },
    {
      title: { fr: "Organiser les entretiens", de: "Die Gespräche organisieren", en: "Organising the interviews" },
      body: {
        fr: "Nous coordonnons la présentation des profils retenus et les échanges avec votre entreprise.",
        de: "Wir koordinieren die Vorstellung der ausgewählten Profile und den Austausch mit Ihrem Unternehmen.",
        en: "We coordinate the presentation of the selected profiles and the exchanges with your company.",
      },
      contribution: {
        fr: "Rencontrer les candidats, évaluer leur adéquation avec le poste et prendre la décision finale.",
        de: "Die Kandidaten treffen, ihre Eignung für die Stelle beurteilen und die endgültige Entscheidung treffen.",
        en: "Meeting the candidates, assessing their fit for the position and making the final decision.",
      },
    },
    {
      title: { fr: "Préparer les démarches", de: "Die Formalitäten vorbereiten", en: "Preparing the procedures" },
      body: {
        fr: "Après la décision de recrutement, nous accompagnons les étapes définies dans notre mission : préparation des documents, orientation vers la procédure de reconnaissance éventuelle et coordination des démarches de séjour.",
        de: "Nach der Einstellungsentscheidung begleiten wir die in unserem Auftrag festgelegten Schritte: Vorbereitung der Unterlagen, Orientierung hin zum etwaigen Anerkennungsverfahren und Koordination der Aufenthaltsformalitäten.",
        en: "After the hiring decision, we support the steps defined in our mandate: preparing the documents, guidance towards the possible recognition procedure and coordination of the residence formalities.",
      },
      contribution: {
        fr: "Fournir les éléments relevant de l'employeur et remplir les obligations applicables au recrutement.",
        de: "Die dem Arbeitgeber obliegenden Unterlagen bereitstellen und die für die Einstellung geltenden Pflichten erfüllen.",
        en: "Providing the elements that fall to the employer and meeting the obligations applicable to the recruitment.",
      },
    },
    {
      title: { fr: "Préparer l'arrivée et l'intégration", de: "Ankunft und Integration vorbereiten", en: "Preparing arrival and integration" },
      body: {
        fr: "Nous préparons avec vous les étapes convenues pour faciliter l'arrivée du candidat et sa compréhension du nouvel environnement professionnel.",
        de: "Wir bereiten gemeinsam mit Ihnen die vereinbarten Schritte vor, um die Ankunft des Kandidaten und sein Verständnis des neuen beruflichen Umfelds zu erleichtern.",
        en: "Together with you, we prepare the agreed steps to ease the candidate's arrival and their understanding of the new professional environment.",
      },
      contribution: {
        fr: "Désigner un interlocuteur, organiser l'accueil et préciser les conditions pratiques de prise de poste ou de début de formation.",
        de: "Einen Ansprechpartner benennen, den Empfang organisieren und die praktischen Bedingungen für den Stellenantritt oder den Ausbildungsbeginn festlegen.",
        en: "Appointing a contact person, organising the welcome and specifying the practical conditions for taking up the position or starting the training.",
      },
    },
  ],

  // SECTION 03 — DES RESPONSABILITÉS CLAIRES
  respKicker: { fr: "Qui fait quoi ?", de: "Wer macht was?", en: "Who does what?" },
  respColALabel: { fr: "Karriere Fähre", de: "Karriere Fähre", en: "Karriere Fähre" },
  respColAItems: [
    {
      fr: "Recherche et présélection des candidats selon les critères convenus.",
      de: "Suche und Vorauswahl der Kandidaten nach den vereinbarten Kriterien.",
      en: "Search and shortlisting of candidates according to the agreed criteria.",
    },
    {
      fr: "Préparation linguistique et professionnelle prévue dans la mission.",
      de: "Im Auftrag vorgesehene sprachliche und berufliche Vorbereitung.",
      en: "Language and professional preparation provided for in the mandate.",
    },
    {
      fr: "Coaching et préparation aux entretiens.",
      de: "Coaching und Vorbereitung auf die Gespräche.",
      en: "Coaching and interview preparation.",
    },
    {
      fr: "Examen préliminaire des documents disponibles.",
      de: "Vorläufige Prüfung der verfügbaren Unterlagen.",
      en: "Preliminary review of the available documents.",
    },
    {
      fr: "Coordination des démarches prévues dans l'accord.",
      de: "Koordination der im Vertrag vorgesehenen Formalitäten.",
      en: "Coordination of the procedures provided for in the agreement.",
    },
    {
      fr: "Préparation à l'arrivée et accompagnement convenu.",
      de: "Vorbereitung auf die Ankunft und vereinbarte Begleitung.",
      en: "Preparation for arrival and the agreed support.",
    },
  ],
  respColBLabel: { fr: "Votre entreprise", de: "Ihr Unternehmen", en: "Your company" },
  respColBItems: [
    {
      fr: "Définition du besoin et des conditions de recrutement.",
      de: "Festlegung des Bedarfs und der Einstellungsbedingungen.",
      en: "Defining the need and the recruitment conditions.",
    },
    {
      fr: "Validation des critères de sélection.",
      de: "Bestätigung der Auswahlkriterien.",
      en: "Validating the selection criteria.",
    },
    {
      fr: "Participation aux entretiens et décision finale.",
      de: "Teilnahme an den Gesprächen und endgültige Entscheidung.",
      en: "Taking part in the interviews and making the final decision.",
    },
    {
      fr: "Fourniture des documents relevant de l'employeur.",
      de: "Bereitstellung der dem Arbeitgeber obliegenden Unterlagen.",
      en: "Providing the documents that fall to the employer.",
    },
    {
      fr: "Respect des obligations légales et contractuelles.",
      de: "Einhaltung der gesetzlichen und vertraglichen Pflichten.",
      en: "Complying with legal and contractual obligations.",
    },
    {
      fr: "Préparation de l'accueil et de l'intégration.",
      de: "Vorbereitung des Empfangs und der Integration.",
      en: "Preparing the welcome and the integration.",
    },
  ],

  // SECTION 04 — TRANSPARENCE & SUIVI
  transpKicker: { fr: "Transparence & suivi", de: "Transparenz & Begleitung", en: "Transparency & follow-up" },
  transpTitle: {
    fr: "Un cadre défini avant le lancement du projet.",
    de: "Ein festgelegter Rahmen vor dem Start des Projekts.",
    en: "A framework defined before the project begins.",
  },
  transpIntro: {
    fr: "Avant de démarrer, nous clarifions avec vous :",
    de: "Vor dem Start klären wir gemeinsam mit Ihnen:",
    en: "Before we start, we clarify with you:",
  },
  transpItems: [
    {
      label: { fr: "Le périmètre", de: "Der Umfang", en: "The scope" },
      text: {
        fr: "Les prestations incluses et les responsabilités de chacun.",
        de: "Die inbegriffenen Leistungen und die Verantwortlichkeiten jedes Beteiligten.",
        en: "The services included and the responsibilities of each party.",
      },
    },
    {
      label: { fr: "Le calendrier", de: "Der Zeitplan", en: "The timeline" },
      text: {
        fr: "Les étapes prévisionnelles et les éléments susceptibles d'influencer les délais.",
        de: "Die voraussichtlichen Schritte und die Faktoren, die die Fristen beeinflussen können.",
        en: "The anticipated steps and the factors that may influence the timeframes.",
      },
    },
    {
      label: { fr: "Les coûts", de: "Die Kosten", en: "The costs" },
      text: {
        fr: "Les conditions financières et les modalités convenues.",
        de: "Die finanziellen Bedingungen und die vereinbarten Modalitäten.",
        en: "The financial conditions and the agreed terms.",
      },
    },
    {
      label: { fr: "Les échanges", de: "Die Kommunikation", en: "The communication" },
      text: {
        fr: "Les interlocuteurs, le suivi des candidatures et les points de décision.",
        de: "Die Ansprechpartner, die Verfolgung der Bewerbungen und die Entscheidungspunkte.",
        en: "The contacts, the tracking of applications and the decision points.",
      },
    },
    {
      label: { fr: "Les limites", de: "Die Grenzen", en: "The limits" },
      text: {
        fr: "Les décisions qui relèvent de l'employeur, des organismes de reconnaissance et des autorités administratives.",
        de: "Die Entscheidungen, die dem Arbeitgeber, den Anerkennungsstellen und den Verwaltungsbehörden obliegen.",
        en: "The decisions that rest with the employer, the recognition bodies and the administrative authorities.",
      },
    },
  ],

  // SECTION 05 — CTA FINAL
  finalTitle: {
    fr: "Organisons votre prochain recrutement.",
    de: "Organisieren wir Ihre nächste Einstellung.",
    en: "Let's organise your next recruitment.",
  },
  finalText: {
    fr: "Présentez-nous le poste à pourvoir ou les places d'Ausbildung disponibles.",
    de: "Stellen Sie uns die zu besetzende Stelle oder die verfügbaren Ausbildungsplätze vor.",
    en: "Tell us about the position to fill or the available Ausbildung places.",
  },
  finalCtaPrimary: {
    fr: "Décrire mon besoin de recrutement",
    de: "Meinen Rekrutierungsbedarf beschreiben",
    en: "Describe my recruitment need",
  },
  finalCtaSecondary: {
    fr: "Découvrir nos solutions",
    de: "Unsere Lösungen entdecken",
    en: "Discover our solutions",
  },
};
