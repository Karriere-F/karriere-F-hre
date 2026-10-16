import type { LocalizedText } from "./localized";

// Full content for /entreprises/fachkraefte. Trilingual and factual.
// Recruiting international skilled professionals (Fachkräfte) for employers.
// Hiring, recognition and visa decisions rest with employers and competent
// authorities; legal wording stays hedged. No invented figures or testimonials.

type LT = LocalizedText;

export const ENT_FACHKRAEFTE: {
  heroKicker: LT;
  heroTitle: LT;
  heroIntro1: LT;
  heroIntro2: LT;
  heroCtaPrimary: LT;
  heroCtaSecondary: LT;

  needKicker: LT;
  needTitle: LT;
  needTitleL1: LT;
  needTitleL2: LT;
  needLead: LT;
  needItems: { label: LT; text: LT }[];

  prepKicker: LT;
  prepTitle: LT;
  prepItems: { label: LT; text: LT }[];

  processKicker: LT;
  processSteps: { title: LT; body: LT }[];
  processCta: LT;

  recoKicker: LT;
  recoTitle: LT;
  recoIntro: LT;
  recoPillars: { title: LT; body: LT }[];
  recoNote: LT;
  recoLinkLabel: LT;

  faqTitle: LT;
  faq: { q: LT; a: LT }[];

  finalTitle: LT;
  finalText: LT;
  finalCtaPrimary: LT;
  finalCtaSecondary: LT;
} = {
  // SECTION 01 — HERO
  heroKicker: {
    fr: "Internationale Fachkräfte",
    de: "Internationale Fachkräfte",
    en: "Internationale Fachkräfte",
  },
  heroTitle: {
    fr: "Recruter des professionnels qualifiés au-delà des frontières.",
    de: "Qualifizierte Fachkräfte über Grenzen hinweg gewinnen.",
    en: "Recruiting qualified professionals across borders.",
  },
  heroIntro1: {
    fr: "Vous recherchez des compétences pour renforcer vos équipes ? Karriere Fähre vous accompagne dans la recherche, la présélection et la préparation de candidats internationaux, en fonction de vos exigences et des possibilités de recrutement.",
    de: "Sie suchen Kompetenzen, um Ihre Teams zu verstärken? Karriere Fähre begleitet Sie bei der Suche, der Vorauswahl und der Vorbereitung internationaler Kandidaten, entsprechend Ihren Anforderungen und den bestehenden Rekrutierungsmöglichkeiten.",
    en: "Are you looking for skills to strengthen your teams? Karriere Fähre supports you in sourcing, preselecting and preparing international candidates, according to your requirements and the available recruitment options.",
  },
  heroIntro2: {
    fr: "Notre approche associe évaluation du profil, préparation linguistique et professionnelle et accompagnement des démarches convenues.",
    de: "Unser Ansatz verbindet die Einschätzung des Profils, die sprachliche und berufliche Vorbereitung sowie die Begleitung der vereinbarten Schritte.",
    en: "Our approach combines profile assessment, language and professional preparation, and support with the agreed steps.",
  },
  heroCtaPrimary: { fr: "Recruter une Fachkraft", de: "Eine Fachkraft rekrutieren", en: "Recruit a Fachkraft" },
  heroCtaSecondary: { fr: "Découvrir notre méthode", de: "Unsere Methode entdecken", en: "Discover our method" },

  // SECTION 02 — VOTRE BESOIN
  needKicker: {
    fr: "Des profils adaptés à votre poste",
    de: "Profile, die zu Ihrer Stelle passen",
    en: "Profiles suited to your position",
  },
  needTitle: {
    fr: "Les bonnes compétences commencent par un besoin bien défini.",
    de: "Die richtigen Kompetenzen beginnen mit einem klar definierten Bedarf.",
    en: "The right skills begin with a clearly defined need.",
  },
  needTitleL1: {
    fr: "Les bonnes compétences commencent par un besoin",
    de: "Die richtigen Kompetenzen beginnen mit",
    en: "The right skills begin",
  },
  needTitleL2: {
    fr: "bien défini.",
    de: "einem klar definierten Bedarf.",
    en: "with a clearly defined need.",
  },
  needLead: {
    fr: "Ensemble, nous précisons les critères nécessaires à votre recrutement.",
    de: "Gemeinsam präzisieren wir die für Ihre Rekrutierung notwendigen Kriterien.",
    en: "Together, we define the criteria your recruitment requires.",
  },
  needItems: [
    {
      label: { fr: "Qualification et expérience", de: "Qualifikation und Erfahrung", en: "Qualification and experience" },
      text: {
        fr: "Diplômes, parcours professionnel, compétences techniques et expérience pertinente.",
        de: "Abschlüsse, beruflicher Werdegang, technische Kompetenzen und einschlägige Erfahrung.",
        en: "Qualifications, professional background, technical skills and relevant experience.",
      },
    },
    {
      label: { fr: "Langue et communication", de: "Sprache und Kommunikation", en: "Language and communication" },
      text: {
        fr: "Niveau d'allemand nécessaire, vocabulaire professionnel et capacité à communiquer au travail.",
        de: "Erforderliches Deutschniveau, beruflicher Wortschatz und die Fähigkeit, am Arbeitsplatz zu kommunizieren.",
        en: "Required level of German, professional vocabulary and the ability to communicate at work.",
      },
    },
    {
      label: { fr: "Conditions du poste", de: "Rahmenbedingungen der Stelle", en: "Conditions of the position" },
      text: {
        fr: "Fonctions, lieu de travail, horaires, rémunération proposée et date d'entrée souhaitée.",
        de: "Aufgaben, Arbeitsort, Arbeitszeiten, vorgesehene Vergütung und gewünschtes Eintrittsdatum.",
        en: "Duties, place of work, working hours, proposed remuneration and desired start date.",
      },
    },
    {
      label: { fr: "Faisabilité du parcours", de: "Machbarkeit des Wegs", en: "Feasibility of the pathway" },
      text: {
        fr: "Examen préliminaire des documents disponibles, des besoins de reconnaissance éventuels et des voies de séjour à étudier.",
        de: "Vorläufige Prüfung der verfügbaren Unterlagen, eines möglichen Anerkennungsbedarfs und der zu prüfenden Aufenthaltswege.",
        en: "Preliminary review of the available documents, any recognition needs and the residence pathways to examine.",
      },
    },
  ],

  // SECTION 03 — NOTRE PRÉPARATION
  prepKicker: {
    fr: "Avant la rencontre avec l'employeur",
    de: "Vor dem Treffen mit dem Arbeitgeber",
    en: "Before meeting the employer",
  },
  prepTitle: {
    fr: "Un candidat préparé va au-delà de son CV.",
    de: "Ein vorbereiteter Kandidat ist mehr als sein Lebenslauf.",
    en: "A prepared candidate is more than a CV.",
  },
  prepItems: [
    {
      label: { fr: "Présélection", de: "Vorauswahl", en: "Preselection" },
      text: {
        fr: "Nous examinons la cohérence entre le profil, les compétences et le poste.",
        de: "Wir prüfen die Übereinstimmung zwischen Profil, Kompetenzen und Stelle.",
        en: "We examine the consistency between the profile, the skills and the position.",
      },
    },
    {
      label: { fr: "Deutsch & Fachsprache", de: "Deutsch & Fachsprache", en: "Deutsch & Fachsprache" },
      text: {
        fr: "Selon les besoins, nous travaillons l'expression orale, le vocabulaire métier et les échanges professionnels.",
        de: "Je nach Bedarf arbeiten wir am mündlichen Ausdruck, am Fachwortschatz und an der beruflichen Kommunikation.",
        en: "Depending on the needs, we work on speaking, occupational vocabulary and professional exchanges.",
      },
    },
    {
      label: { fr: "Vorstellungsgespräch-Training", de: "Vorstellungsgespräch-Training", en: "Vorstellungsgespräch-Training" },
      text: {
        fr: "Nous préparons les candidats à présenter leur parcours, expliquer leur motivation et répondre aux questions de l'employeur.",
        de: "Wir bereiten die Kandidaten darauf vor, ihren Werdegang darzustellen, ihre Motivation zu erläutern und auf die Fragen des Arbeitgebers zu antworten.",
        en: "We prepare candidates to present their background, explain their motivation and answer the employer's questions.",
      },
    },
    {
      label: { fr: "Simulation & Feedback", de: "Simulation & Feedback", en: "Simulation & Feedback" },
      text: {
        fr: "Les mises en situation permettent de travailler la clarté, la spontanéité et la qualité des réponses.",
        de: "Die Rollenspiele helfen, an Klarheit, Spontaneität und der Qualität der Antworten zu arbeiten.",
        en: "Role-play scenarios help work on clarity, spontaneity and the quality of answers.",
      },
    },
  ],

  // SECTION 04 — LE PROCESSUS
  processKicker: {
    fr: "De la demande à la candidature",
    de: "Von der Anfrage zur Bewerbung",
    en: "From request to application",
  },
  processSteps: [
    {
      title: { fr: "Définition du besoin", de: "Definition des Bedarfs", en: "Defining the need" },
      body: {
        fr: "Vous présentez le poste, les compétences, les conditions et le calendrier souhaité.",
        de: "Sie stellen die Stelle, die Kompetenzen, die Bedingungen und den gewünschten Zeitplan vor.",
        en: "You present the position, the skills, the conditions and the desired timeline.",
      },
    },
    {
      title: { fr: "Recherche et présélection", de: "Suche und Vorauswahl", en: "Sourcing and preselection" },
      body: {
        fr: "Nous recherchons les profils correspondant aux critères convenus et examinons les dossiers disponibles.",
        de: "Wir suchen die Profile, die den vereinbarten Kriterien entsprechen, und prüfen die verfügbaren Unterlagen.",
        en: "We source the profiles matching the agreed criteria and review the available files.",
      },
    },
    {
      title: { fr: "Préparation du candidat", de: "Vorbereitung des Kandidaten", en: "Preparing the candidate" },
      body: {
        fr: "Selon le besoin, nous renforçons les compétences linguistiques, la Fachsprache et la préparation aux entretiens.",
        de: "Je nach Bedarf stärken wir die sprachlichen Kompetenzen, die Fachsprache und die Vorbereitung auf Gespräche.",
        en: "Depending on the need, we strengthen language skills, Fachsprache and interview preparation.",
      },
    },
    {
      title: { fr: "Présentation des profils", de: "Vorstellung der Profile", en: "Presenting the profiles" },
      body: {
        fr: "Nous vous soumettons les candidatures pertinentes selon le cadre convenu.",
        de: "Wir legen Ihnen die relevanten Bewerbungen im vereinbarten Rahmen vor.",
        en: "We submit the relevant applications to you within the agreed framework.",
      },
    },
    {
      title: { fr: "Entretien et décision", de: "Gespräch und Entscheidung", en: "Interview and decision" },
      body: {
        fr: "Vous rencontrez les candidats et restez responsable de la décision de recrutement.",
        de: "Sie treffen die Kandidaten und bleiben für die Einstellungsentscheidung verantwortlich.",
        en: "You meet the candidates and remain responsible for the hiring decision.",
      },
    },
    {
      title: { fr: "Démarches et arrivée", de: "Formalitäten und Ankunft", en: "Formalities and arrival" },
      body: {
        fr: "Après votre décision, nous accompagnons les démarches convenues selon la situation du candidat.",
        de: "Nach Ihrer Entscheidung begleiten wir die vereinbarten Schritte entsprechend der Situation des Kandidaten.",
        en: "After your decision, we support the agreed steps according to the candidate's situation.",
      },
    },
  ],
  processCta: {
    fr: "Présenter mon besoin de recrutement",
    de: "Meinen Personalbedarf schildern",
    en: "Describe my recruitment need",
  },

  // SECTION 05 — RECONNAISSANCE & SÉJOUR
  recoKicker: {
    fr: "Le parcours administratif dépend du profil",
    de: "Der administrative Weg hängt vom Profil ab",
    en: "The administrative pathway depends on the profile",
  },
  recoTitle: {
    fr: "Identifier la voie adaptée avant d'engager les démarches.",
    de: "Den passenden Weg bestimmen, bevor die Schritte eingeleitet werden.",
    en: "Identifying the right pathway before starting the formalities.",
  },
  recoIntro: {
    fr: "La reconnaissance des qualifications et les conditions de séjour varient selon le métier, le diplôme, le poste et la situation du candidat.",
    de: "Die Anerkennung der Qualifikationen und die Aufenthaltsbedingungen variieren je nach Beruf, Abschluss, Stelle und Situation des Kandidaten.",
    en: "Qualification recognition and residence conditions vary with the profession, the qualification, the position and the candidate's situation.",
  },
  recoPillars: [
    {
      title: { fr: "Anerkennung", de: "Anerkennung", en: "Anerkennung" },
      body: {
        fr: "Préparation du dossier et orientation vers l'organisme compétent.",
        de: "Vorbereitung der Unterlagen und Orientierung zur zuständigen Stelle.",
        en: "Preparing the file and guidance to the competent body.",
      },
    },
    {
      title: { fr: "Anerkennungspartnerschaft", de: "Anerkennungspartnerschaft", en: "Anerkennungspartnerschaft" },
      body: {
        fr: "Possibilité à examiner pour les dossiers admissibles, lorsque le candidat et l'employeur remplissent les conditions applicables.",
        de: "Zu prüfende Möglichkeit für zulässige Fälle, wenn Kandidat und Arbeitgeber die geltenden Bedingungen erfüllen.",
        en: "An option to examine for eligible cases, when the candidate and the employer meet the applicable conditions.",
      },
    },
    {
      title: {
        fr: "Beschleunigtes Fachkräfteverfahren (§ 81a AufenthG)",
        de: "Beschleunigtes Fachkräfteverfahren (§ 81a AufenthG)",
        en: "Beschleunigtes Fachkräfteverfahren (§ 81a AufenthG)",
      },
      body: {
        fr: "Procédure accélérée qui peut être engagée par l'employeur auprès de l'autorité compétente lorsque les conditions sont réunies.",
        de: "Beschleunigtes Verfahren, das der Arbeitgeber bei der zuständigen Behörde einleiten kann, wenn die Voraussetzungen erfüllt sind.",
        en: "An accelerated procedure that the employer may initiate with the competent authority when the conditions are met.",
      },
    },
  ],
  recoNote: {
    fr: "Nous vous aidons à préparer et coordonner les démarches prévues dans la mission. La reconnaissance et le visa restent soumis aux décisions des autorités compétentes.",
    de: "Wir helfen Ihnen, die im Auftrag vorgesehenen Schritte vorzubereiten und zu koordinieren. Anerkennung und Visum bleiben den Entscheidungen der zuständigen Behörden vorbehalten.",
    en: "We help you prepare and coordinate the steps provided for in the assignment. Recognition and the visa remain subject to the decisions of the competent authorities.",
  },
  recoLinkLabel: {
    fr: "Consulter les informations officielles sur la procédure accélérée",
    de: "Offizielle Informationen zum beschleunigten Verfahren einsehen",
    en: "View the official information on the accelerated procedure",
  },

  // SECTION 06 — FAQ
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
  faq: [
    {
      q: {
        fr: "Quels profils pouvez-vous rechercher ?",
        de: "Welche Profile können Sie suchen?",
        en: "Which profiles can you source?",
      },
      a: {
        fr: "Nous étudions les demandes selon les qualifications, les compétences, le secteur, l'expérience et la faisabilité du recrutement.",
        de: "Wir prüfen die Anfragen nach Qualifikationen, Kompetenzen, Branche, Erfahrung und Machbarkeit der Rekrutierung.",
        en: "We review requests according to qualifications, skills, sector, experience and the feasibility of the recruitment.",
      },
    },
    {
      q: {
        fr: "Les candidats possèdent-ils déjà le niveau d'allemand requis ?",
        de: "Verfügen die Kandidaten bereits über das erforderliche Deutschniveau?",
        en: "Do candidates already have the required level of German?",
      },
      a: {
        fr: "Cela dépend du profil et du poste. Les critères linguistiques sont définis au début du projet ; une préparation complémentaire peut être envisagée selon les besoins.",
        de: "Das hängt vom Profil und von der Stelle ab. Die sprachlichen Kriterien werden zu Beginn des Projekts festgelegt; eine ergänzende Vorbereitung kann je nach Bedarf vorgesehen werden.",
        en: "It depends on the profile and the position. The language criteria are defined at the start of the project; additional preparation can be arranged depending on the needs.",
      },
    },
    {
      q: {
        fr: "Un diplôme étranger doit-il toujours être reconnu ?",
        de: "Muss ein ausländischer Abschluss immer anerkannt werden?",
        en: "Does a foreign qualification always need to be recognised?",
      },
      a: {
        fr: "Non. Cela dépend notamment du caractère réglementé ou non du métier et de la voie de séjour envisagée. La situation doit être examinée au cas par cas.",
        de: "Nein. Das hängt unter anderem davon ab, ob der Beruf reglementiert ist oder nicht, und vom vorgesehenen Aufenthaltsweg. Die Situation muss im Einzelfall geprüft werden.",
        en: "No. It depends in particular on whether the profession is regulated or not and on the envisaged residence pathway. Each situation must be examined on a case-by-case basis.",
      },
    },
    {
      q: {
        fr: "Pouvez-vous garantir une date de prise de poste ?",
        de: "Können Sie ein Datum des Stellenantritts garantieren?",
        en: "Can you guarantee a start date?",
      },
      a: {
        fr: "Non. Nous pouvons établir un calendrier prévisionnel, mais les délais dépendent notamment de la disponibilité du profil, des décisions de l'employeur et des démarches administratives.",
        de: "Nein. Wir können einen voraussichtlichen Zeitplan erstellen, doch die Fristen hängen unter anderem von der Verfügbarkeit des Profils, den Entscheidungen des Arbeitgebers und den behördlichen Schritten ab.",
        en: "No. We can set out a provisional timeline, but the timeframes depend in particular on the availability of the profile, the employer's decisions and the administrative steps.",
      },
    },
    {
      q: {
        fr: "Combien coûte un recrutement ?",
        de: "Was kostet eine Rekrutierung?",
        en: "How much does a recruitment cost?",
      },
      a: {
        fr: "Le tarif dépend du profil, du nombre de recrutements, de la préparation et du périmètre de l'accompagnement. Les prestations et les conditions financières sont définies avant le démarrage de la mission.",
        de: "Der Preis hängt vom Profil, der Anzahl der Rekrutierungen, der Vorbereitung und dem Umfang der Begleitung ab. Die Leistungen und die finanziellen Bedingungen werden vor dem Beginn des Auftrags festgelegt.",
        en: "The price depends on the profile, the number of recruitments, the preparation and the scope of the support. The services and financial terms are defined before the assignment begins.",
      },
    },
  ],

  // SECTION 07 — CTA FINAL
  finalTitle: { fr: "Vous recherchez une Fachkraft ?", de: "Sie suchen eine Fachkraft?", en: "Looking for a Fachkraft?" },
  finalText: {
    fr: "Présentez-nous votre besoin. Nous examinerons avec vous le profil recherché et les étapes possibles.",
    de: "Schildern Sie uns Ihren Bedarf. Wir prüfen mit Ihnen das gesuchte Profil und die möglichen Schritte.",
    en: "Tell us about your need. We will review the profile sought and the possible steps with you.",
  },
  finalCtaPrimary: {
    fr: "Décrire mon besoin de recrutement",
    de: "Meinen Personalbedarf beschreiben",
    en: "Describe my recruitment need",
  },
  finalCtaSecondary: {
    fr: "Découvrir le recrutement d'Azubis",
    de: "Die Rekrutierung von Azubis entdecken",
    en: "Discover Azubi recruitment",
  },
};
