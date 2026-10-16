import type { LocalizedText } from "./localized";

// Full content for /entreprises/ausbildung (employer-facing: recruiting Azubis).
// Trilingual and factual. German terms (Ausbildung, Azubis, Deutsch, Sprechen,
// Wortschatz, Fachsprache, Vorstellungsgespräch) stay untranslated in all locales.
// Legal wording is hedged on purpose: hiring, visa and recognition decisions rest
// with the employer and the competent authorities; no guarantee is made.

type LT = LocalizedText;

export const ENT_AUSBILDUNG: {
  heroKicker: LT;
  heroTitle: LT;
  heroIntro1: LT;
  heroIntro2: LT;
  heroCtaPrimary: LT;
  heroCtaSecondary: LT;

  needKicker: LT;
  needTitle: LT;
  needLead: LT;
  needItems: { label: LT; text: LT }[];

  prepKicker: LT;
  prepTitle: LT;
  prepItems: { label: LT; text: LT }[];

  processKicker: LT;
  processSteps: { title: LT; body: LT }[];
  processCta: LT;

  adminKicker: LT;
  adminTitle: LT;
  adminText1: LT;
  adminText2: LT;
  adminText3: LT;
  adminLinkLabel: LT;

  roleKicker: LT;
  roleIntro: LT;
  roleItems: LT[];
  roleClosing: LT;

  faqTitle: LT;
  faq: { q: LT; a: LT }[];

  finalTitle: LT;
  finalText: LT;
  finalCtaPrimary: LT;
  finalCtaSecondary: LT;
} = {
  // SECTION 01 — HERO
  heroKicker: {
    fr: "Ausbildung · Internationale Nachwuchsgewinnung",
    de: "Ausbildung · Internationale Nachwuchsgewinnung",
    en: "Ausbildung · Internationale Nachwuchsgewinnung",
  },
  heroTitle: {
    fr: "Préparez aujourd'hui vos futurs collaborateurs.",
    de: "Bereiten Sie heute Ihre künftigen Mitarbeiterinnen und Mitarbeiter vor.",
    en: "Prepare your future employees today.",
  },
  heroIntro1: {
    fr: "Vous souhaitez pourvoir vos places d'Ausbildung avec des candidats internationaux motivés ? Karriere Fähre vous accompagne dans la recherche, la présélection et la préparation linguistique des candidats correspondant à vos critères.",
    de: "Möchten Sie Ihre Ausbildungsplätze mit motivierten internationalen Kandidaten besetzen? Karriere Fähre begleitet Sie bei der Suche, der Vorauswahl und der sprachlichen Vorbereitung der Kandidaten, die zu Ihren Kriterien passen.",
    en: "Would you like to fill your Ausbildung places with motivated international candidates? Karriere Fähre supports you in the search, the preselection and the language preparation of candidates who match your criteria.",
  },
  heroIntro2: {
    fr: "Nous travaillons avec vous pour organiser un parcours cohérent entre les exigences de votre entreprise, la formation en allemand et les démarches nécessaires.",
    de: "Wir arbeiten mit Ihnen zusammen, um einen stimmigen Ablauf zwischen den Anforderungen Ihres Unternehmens, der Ausbildung in Deutsch und den notwendigen Schritten zu gestalten.",
    en: "We work with you to organise a coherent path between your company's requirements, the German-language training and the necessary steps.",
  },
  heroCtaPrimary: {
    fr: "Recruter des Azubis",
    de: "Azubis rekrutieren",
    en: "Recruit Azubis",
  },
  heroCtaSecondary: {
    fr: "Découvrir notre méthode",
    de: "Unsere Methode entdecken",
    en: "Discover our method",
  },

  // SECTION 02 — VOTRE BESOIN
  needKicker: {
    fr: "Vos places d'Ausbildung",
    de: "Ihre Ausbildungsplätze",
    en: "Your Ausbildung places",
  },
  needTitle: {
    fr: "Trouver des candidats adaptés à votre formation.",
    de: "Kandidaten finden, die zu Ihrer Ausbildung passen.",
    en: "Finding candidates suited to your training.",
  },
  needLead: {
    fr: "Un candidat doit comprendre le métier, être motivé et disposer des bases scolaires et linguistiques nécessaires pour réussir sa formation.",
    de: "Ein Kandidat muss den Beruf verstehen, motiviert sein und über die schulischen und sprachlichen Grundlagen verfügen, die für den erfolgreichen Abschluss seiner Ausbildung nötig sind.",
    en: "A candidate must understand the profession, be motivated and have the academic and language foundations needed to succeed in their training.",
  },
  needItems: [
    {
      label: { fr: "Profil scolaire", de: "Schulisches Profil", en: "Academic profile" },
      text: {
        fr: "Nous examinons le parcours scolaire, les diplômes présentés et la cohérence du projet avec l'Ausbildung visée.",
        de: "Wir prüfen den schulischen Werdegang, die vorgelegten Abschlüsse und die Stimmigkeit des Projekts mit der angestrebten Ausbildung.",
        en: "We review the academic background, the qualifications presented and how well the project fits the target Ausbildung.",
      },
    },
    {
      label: { fr: "Motivation", de: "Motivation", en: "Motivation" },
      text: {
        fr: "Nous cherchons à comprendre l'intérêt du candidat pour le métier, ses objectifs et sa connaissance du parcours.",
        de: "Wir versuchen, das Interesse des Kandidaten am Beruf, seine Ziele und seine Kenntnis des Wegs zu verstehen.",
        en: "We seek to understand the candidate's interest in the profession, their goals and their knowledge of the path.",
      },
    },
    {
      label: { fr: "Allemand", de: "Deutsch", en: "Deutsch" },
      text: {
        fr: "Nous examinons le niveau de départ et les compétences linguistiques nécessaires pour suivre la formation et communiquer en entreprise.",
        de: "Wir prüfen das Ausgangsniveau und die sprachlichen Kompetenzen, die nötig sind, um der Ausbildung zu folgen und im Unternehmen zu kommunizieren.",
        en: "We review the starting level and the language skills needed to follow the training and communicate in the company.",
      },
    },
    {
      label: { fr: "Préparation", de: "Vorbereitung", en: "Preparation" },
      text: {
        fr: "Selon le besoin, nous travaillons la présentation personnelle, le vocabulaire métier et la préparation aux entretiens avec l'entreprise.",
        de: "Je nach Bedarf arbeiten wir an der Selbstvorstellung, dem Fachwortschatz und der Vorbereitung auf die Gespräche mit dem Unternehmen.",
        en: "Depending on the need, we work on the personal presentation, the occupational vocabulary and preparation for interviews with the company.",
      },
    },
  ],

  // SECTION 03 — COMMENT NOUS PRÉPARONS LES CANDIDATS
  prepKicker: {
    fr: "Vor dem Ausbildungsstart",
    de: "Vor dem Ausbildungsstart",
    en: "Vor dem Ausbildungsstart",
  },
  prepTitle: {
    fr: "Préparer le candidat avant la rencontre avec votre entreprise.",
    de: "Den Kandidaten vor dem Treffen mit Ihrem Unternehmen vorbereiten.",
    en: "Preparing the candidate before meeting your company.",
  },
  prepItems: [
    {
      label: { fr: "Deutsch & Sprechen", de: "Deutsch & Sprechen", en: "Deutsch & Sprechen" },
      text: {
        fr: "Développer la compréhension et l'expression orale en fonction du parcours linguistique du candidat.",
        de: "Das Verstehen und das mündliche Ausdrucksvermögen entsprechend dem sprachlichen Werdegang des Kandidaten entwickeln.",
        en: "Developing listening comprehension and speaking according to the candidate's language background.",
      },
    },
    {
      label: { fr: "Wortschatz & Fachsprache", de: "Wortschatz & Fachsprache", en: "Wortschatz & Fachsprache" },
      text: {
        fr: "Découvrir les termes et expressions liés au métier, selon la formation visée.",
        de: "Die Begriffe und Ausdrücke rund um den Beruf entdecken, je nach angestrebter Ausbildung.",
        en: "Discovering the terms and expressions related to the profession, according to the target training.",
      },
    },
    {
      label: { fr: "Vorstellungsgespräch-Training", de: "Vorstellungsgespräch-Training", en: "Vorstellungsgespräch-Training" },
      text: {
        fr: "S'entraîner à présenter sa motivation, son parcours scolaire et son projet professionnel.",
        de: "Üben, die eigene Motivation, den schulischen Werdegang und das berufliche Projekt vorzustellen.",
        en: "Practising how to present one's motivation, academic background and professional project.",
      },
    },
    {
      label: { fr: "Simulation & Feedback", de: "Simulation & Feedback", en: "Simulation & Feedback" },
      text: {
        fr: "Travailler les échanges, les questions courantes et la capacité à communiquer clairement.",
        de: "An den Gesprächen, den häufigen Fragen und der Fähigkeit arbeiten, klar zu kommunizieren.",
        en: "Working on exchanges, common questions and the ability to communicate clearly.",
      },
    },
    {
      label: { fr: "Vorbereitung auf Deutschland", de: "Vorbereitung auf Deutschland", en: "Vorbereitung auf Deutschland" },
      text: {
        fr: "Se préparer aux réalités de la vie quotidienne, aux codes professionnels et au fonctionnement d'une formation en alternance.",
        de: "Sich auf den Alltag, die beruflichen Gepflogenheiten und die Funktionsweise einer dualen Ausbildung vorbereiten.",
        en: "Preparing for the realities of daily life, professional codes and how a dual training programme works.",
      },
    },
  ],

  // SECTION 04 — NOTRE PROCESSUS
  processKicker: {
    fr: "De vos places à l'arrivée du candidat",
    de: "Von Ihren Plätzen bis zur Ankunft des Kandidaten",
    en: "From your places to the candidate's arrival",
  },
  processSteps: [
    {
      title: {
        fr: "Analyse de vos places d'Ausbildung",
        de: "Analyse Ihrer Ausbildungsplätze",
        en: "Analysis of your Ausbildung places",
      },
      body: {
        fr: "Nous échangeons sur les métiers, les places disponibles, les conditions proposées, les exigences scolaires et linguistiques ainsi que le calendrier.",
        de: "Wir sprechen über die Berufe, die verfügbaren Plätze, die angebotenen Bedingungen, die schulischen und sprachlichen Anforderungen sowie den Zeitplan.",
        en: "We discuss the professions, the available places, the conditions offered, the academic and language requirements as well as the timeline.",
      },
    },
    {
      title: {
        fr: "Recherche et présélection",
        de: "Suche und Vorauswahl",
        en: "Search and preselection",
      },
      body: {
        fr: "Nous identifions des candidats dont le profil et la motivation correspondent aux critères définis ensemble.",
        de: "Wir identifizieren Kandidaten, deren Profil und Motivation den gemeinsam festgelegten Kriterien entsprechen.",
        en: "We identify candidates whose profile and motivation match the criteria defined together.",
      },
    },
    {
      title: {
        fr: "Préparation linguistique et professionnelle",
        de: "Sprachliche und berufliche Vorbereitung",
        en: "Language and professional preparation",
      },
      body: {
        fr: "Selon leur niveau, les candidats bénéficient d'une préparation en allemand, de vocabulaire métier et d'un entraînement aux entretiens.",
        de: "Je nach Niveau erhalten die Kandidaten eine Vorbereitung in Deutsch, Fachwortschatz und ein Training für die Gespräche.",
        en: "Depending on their level, candidates receive preparation in German, occupational vocabulary and interview training.",
      },
    },
    {
      title: {
        fr: "Présentation des candidatures",
        de: "Vorstellung der Bewerbungen",
        en: "Presentation of applications",
      },
      body: {
        fr: "Nous vous présentons les dossiers retenus selon les modalités convenues.",
        de: "Wir stellen Ihnen die ausgewählten Unterlagen nach den vereinbarten Modalitäten vor.",
        en: "We present the selected files to you according to the agreed arrangements.",
      },
    },
    {
      title: {
        fr: "Entretien et choix de l'entreprise",
        de: "Gespräch und Auswahl durch das Unternehmen",
        en: "Interview and the company's choice",
      },
      body: {
        fr: "Vous rencontrez les candidats et prenez la décision finale de sélection.",
        de: "Sie treffen die Kandidaten und treffen die endgültige Auswahlentscheidung.",
        en: "You meet the candidates and make the final selection decision.",
      },
    },
    {
      title: {
        fr: "Démarches et préparation à l'arrivée",
        de: "Schritte und Vorbereitung auf die Ankunft",
        en: "Formalities and preparation for the arrival",
      },
      body: {
        fr: "Après la décision de recrutement, nous coordonnons les étapes prévues dans notre mission, avec une attention particulière aux documents, aux conditions de séjour et à la préparation de l'arrivée.",
        de: "Nach der Einstellungsentscheidung koordinieren wir die in unserem Auftrag vorgesehenen Schritte, mit besonderem Augenmerk auf die Dokumente, die Aufenthaltsbedingungen und die Vorbereitung der Ankunft.",
        en: "After the recruitment decision, we coordinate the steps set out in our mission, with particular attention to the documents, the residence conditions and preparation for the arrival.",
      },
    },
  ],
  processCta: {
    fr: "Présenter mes places d'Ausbildung",
    de: "Meine Ausbildungsplätze vorstellen",
    en: "Present my Ausbildung places",
  },

  // SECTION 05 — PRÉPARER LE PARCOURS ADMINISTRATIF
  adminKicker: {
    fr: "Formation & séjour",
    de: "Ausbildung & Aufenthalt",
    en: "Training & residence",
  },
  adminTitle: {
    fr: "Chaque candidature doit être préparée selon les conditions applicables.",
    de: "Jede Bewerbung muss nach den geltenden Bedingungen vorbereitet werden.",
    en: "Every application must be prepared according to the applicable conditions.",
  },
  adminText1: {
    fr: "Le recrutement d'un candidat issu d'un pays tiers nécessite de vérifier les exigences relatives à la place de formation, aux compétences linguistiques et au séjour.",
    de: "Die Einstellung eines Kandidaten aus einem Drittstaat erfordert die Prüfung der Anforderungen an den Ausbildungsplatz, die sprachlichen Kompetenzen und den Aufenthalt.",
    en: "Recruiting a candidate from a non-EU country requires checking the requirements relating to the training place, the language skills and the residence.",
  },
  adminText2: {
    fr: "Pour une Ausbildung en entreprise, un niveau d'allemand B2 constitue généralement le repère linguistique visé, sous réserve des conditions particulières applicables au dossier. L'employeur ou l'établissement de formation peut également avoir ses propres exigences.",
    de: "Für eine Ausbildung im Unternehmen gilt ein Deutschniveau B2 in der Regel als angestrebter sprachlicher Richtwert, vorbehaltlich der besonderen Bedingungen, die für den Fall gelten. Auch der Arbeitgeber oder die Ausbildungseinrichtung kann eigene Anforderungen haben.",
    en: "For an in-company Ausbildung, a German level of B2 is generally the language benchmark targeted, subject to the particular conditions applicable to the case. The employer or the training institution may also have its own requirements.",
  },
  adminText3: {
    fr: "Nous vous accompagnons dans la préparation des étapes convenues. L'obtention du visa et la validation des éventuels documents relèvent des autorités et organismes compétents.",
    de: "Wir begleiten Sie bei der Vorbereitung der vereinbarten Schritte. Die Erteilung des Visums und die Validierung etwaiger Dokumente liegen bei den zuständigen Behörden und Stellen.",
    en: "We support you in preparing the agreed steps. Obtaining the visa and validating any documents rest with the competent authorities and bodies.",
  },
  adminLinkLabel: {
    fr: "Consulter les exigences officielles du visa Ausbildung",
    de: "Die offiziellen Anforderungen für das Ausbildungsvisum einsehen",
    en: "View the official requirements for the Ausbildung visa",
  },

  // SECTION 06 — VOTRE RÔLE EN TANT QU'EMPLOYEUR
  roleKicker: {
    fr: "Une collaboration préparée",
    de: "Eine vorbereitete Zusammenarbeit",
    en: "A prepared collaboration",
  },
  roleIntro: {
    fr: "Pour organiser le recrutement, votre entreprise nous communique :",
    de: "Um die Einstellung zu organisieren, teilt uns Ihr Unternehmen mit:",
    en: "To organise the recruitment, your company provides us with:",
  },
  roleItems: [
    {
      fr: "Le métier et le programme d'Ausbildung concernés.",
      de: "Den betreffenden Beruf und das Ausbildungsprogramm.",
      en: "The profession and the Ausbildung programme concerned.",
    },
    {
      fr: "Le nombre de places disponibles et la date de début souhaitée.",
      de: "Die Anzahl der verfügbaren Plätze und das gewünschte Startdatum.",
      en: "The number of available places and the desired start date.",
    },
    {
      fr: "Les exigences scolaires et linguistiques.",
      de: "Die schulischen und sprachlichen Anforderungen.",
      en: "The academic and language requirements.",
    },
    {
      fr: "Les conditions de formation et de rémunération.",
      de: "Die Ausbildungs- und Vergütungsbedingungen.",
      en: "The training and remuneration conditions.",
    },
    {
      fr: "Les coordonnées de la personne chargée des candidatures et des entretiens.",
      de: "Die Kontaktdaten der Person, die für die Bewerbungen und die Gespräche zuständig ist.",
      en: "The contact details of the person in charge of applications and interviews.",
    },
  ],
  roleClosing: {
    fr: "Ces informations permettent d'orienter la recherche et de préparer les candidats selon vos critères.",
    de: "Diese Informationen ermöglichen es, die Suche auszurichten und die Kandidaten nach Ihren Kriterien vorzubereiten.",
    en: "This information makes it possible to guide the search and prepare candidates according to your criteria.",
  },

  // SECTION 07 — FAQ
  faqTitle: {
    fr: "Questions fréquentes",
    de: "Häufige Fragen",
    en: "Frequently asked questions",
  },
  faq: [
    {
      q: {
        fr: "Les candidats parlent-ils déjà allemand ?",
        de: "Sprechen die Kandidaten bereits Deutsch?",
        en: "Do the candidates already speak German?",
      },
      a: {
        fr: "Le niveau dépend du parcours suivi. Nous examinons les compétences existantes et définissons avec vous les exigences linguistiques du recrutement.",
        de: "Das Niveau hängt vom absolvierten Werdegang ab. Wir prüfen die vorhandenen Kompetenzen und legen mit Ihnen die sprachlichen Anforderungen der Einstellung fest.",
        en: "The level depends on the path followed. We review the existing skills and define the language requirements of the recruitment together with you.",
      },
    },
    {
      q: {
        fr: "Pouvez-vous recruter pour tous les métiers ?",
        de: "Können Sie für alle Berufe rekrutieren?",
        en: "Can you recruit for all professions?",
      },
      a: {
        fr: "Nous étudions les demandes selon le métier, les qualifications nécessaires, les exigences réglementaires et les profils disponibles.",
        de: "Wir prüfen die Anfragen nach Beruf, den erforderlichen Qualifikationen, den gesetzlichen Anforderungen und den verfügbaren Profilen.",
        en: "We study the requests according to the profession, the necessary qualifications, the regulatory requirements and the available profiles.",
      },
    },
    {
      q: {
        fr: "Pouvez-vous garantir qu'un candidat commencera à la date souhaitée ?",
        de: "Können Sie garantieren, dass ein Kandidat zum gewünschten Datum beginnt?",
        en: "Can you guarantee that a candidate will start on the desired date?",
      },
      a: {
        fr: "Non. Nous pouvons travailler avec un calendrier prévisionnel, mais la date effective dépend notamment de la sélection, du contrat, des documents et des décisions administratives.",
        de: "Nein. Wir können mit einem vorläufigen Zeitplan arbeiten, doch das tatsächliche Datum hängt unter anderem von der Auswahl, dem Vertrag, den Dokumenten und den behördlichen Entscheidungen ab.",
        en: "No. We can work with a provisional timeline, but the actual date depends in particular on the selection, the contract, the documents and administrative decisions.",
      },
    },
    {
      q: {
        fr: "Qui décide du recrutement ?",
        de: "Wer entscheidet über die Einstellung?",
        en: "Who decides on the recruitment?",
      },
      a: {
        fr: "Votre entreprise. Karriere Fähre accompagne la recherche et la préparation des candidats, mais la décision finale de sélection vous appartient.",
        de: "Ihr Unternehmen. Karriere Fähre begleitet die Suche und die Vorbereitung der Kandidaten, doch die endgültige Auswahlentscheidung liegt bei Ihnen.",
        en: "Your company. Karriere Fähre supports the search and the preparation of candidates, but the final selection decision is yours.",
      },
    },
    {
      q: {
        fr: "Comment les coûts sont-ils établis ?",
        de: "Wie werden die Kosten festgelegt?",
        en: "How are the costs set?",
      },
      a: {
        fr: "Le périmètre, les prestations et les conditions financières sont définis avec vous avant le démarrage du projet.",
        de: "Der Umfang, die Leistungen und die finanziellen Bedingungen werden vor dem Projektstart mit Ihnen festgelegt.",
        en: "The scope, the services and the financial conditions are defined with you before the project starts.",
      },
    },
  ],

  // SECTION 08 — CTA FINAL
  finalTitle: {
    fr: "Préparons ensemble votre prochain recrutement d'Azubis.",
    de: "Lassen Sie uns gemeinsam Ihre nächste Azubi-Einstellung vorbereiten.",
    en: "Let's prepare your next Azubi recruitment together.",
  },
  finalText: {
    fr: "Présentez-nous vos places d'Ausbildung et vos critères de sélection.",
    de: "Stellen Sie uns Ihre Ausbildungsplätze und Ihre Auswahlkriterien vor.",
    en: "Tell us about your Ausbildung places and your selection criteria.",
  },
  finalCtaPrimary: {
    fr: "Décrire mes besoins en Azubis",
    de: "Meinen Azubi-Bedarf beschreiben",
    en: "Describe my Azubi needs",
  },
  finalCtaSecondary: {
    fr: "Recruter des Fachkräfte",
    de: "Fachkräfte rekrutieren",
    en: "Recruit Fachkräfte",
  },
};
