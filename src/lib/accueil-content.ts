import type { LocalizedText } from "./localized";

type LT = LocalizedText;

export const ACCUEIL = {
  // SECTION 03 — LES PARCOURS PROFESSIONNELS
  parcoursKicker: {
    fr: "Trouvez la voie adaptée à votre situation",
    de: "Finden Sie den zu Ihrer Situation passenden Weg",
    en: "Find the path suited to your situation",
  },
  parcoursTitle: {
    fr: "Trois parcours. Un projet professionnel à construire.",
    de: "Drei Wege. Ein berufliches Projekt zum Aufbauen.",
    en: "Three paths. One professional project to build.",
  },
  parcoursTitleL1: {
    fr: "Trois parcours.",
    de: "Drei Wege.",
    en: "Three paths.",
  },
  parcoursTitleL2: {
    fr: "Un projet professionnel à construire.",
    de: "Ein berufliches Projekt zum Aufbauen.",
    en: "One professional project to build.",
  },
  parcoursLead: {
    fr: "Chaque parcours dépend de votre formation, de votre expérience, de votre niveau d'allemand et des conditions applicables en Allemagne.",
    de: "Jeder Weg hängt von Ihrer Ausbildung, Ihrer Erfahrung, Ihrem Deutschniveau und den in Deutschland geltenden Bedingungen ab.",
    en: "Each path depends on your training, your experience, your level of German and the conditions applicable in Germany.",
  },
  parcours: [
    {
      num: "01",
      title: { fr: "Ausbildung", de: "Ausbildung", en: "Ausbildung" },
      body: {
        fr: "Se former à un métier en Allemagne grâce à une formation professionnelle associant enseignement théorique et pratique en entreprise.",
        de: "Einen Beruf in Deutschland erlernen, durch eine duale Ausbildung mit Theorie und Praxis im Betrieb.",
        en: "Train for a trade in Germany through vocational training combining theory and hands-on practice in a company.",
      },
      pour: {
        fr: "Pour les candidats qui souhaitent acquérir une qualification professionnelle.",
        de: "Für Kandidaten, die eine berufliche Qualifikation erwerben möchten.",
        en: "For candidates who want to gain a professional qualification.",
      },
      cta: { fr: "Découvrir l'Ausbildung", de: "Die Ausbildung entdecken", en: "Discover the Ausbildung" },
      href: "/ausbildung-allemagne",
    },
    {
      num: "02",
      title: { fr: "Emploi qualifié", de: "Qualifizierte Beschäftigung", en: "Skilled employment" },
      body: {
        fr: "Valoriser une qualification et une expérience professionnelle pour accéder à un emploi correspondant à son profil.",
        de: "Eine Qualifikation und Berufserfahrung einbringen, um eine dem Profil entsprechende Stelle zu erhalten.",
        en: "Put a qualification and professional experience to work to access a job matching your profile.",
      },
      pour: {
        fr: "Pour les professionnels dont les compétences répondent aux exigences du poste et aux conditions d'accès applicables.",
        de: "Für Fachkräfte, deren Kompetenzen den Anforderungen der Stelle und den geltenden Zugangsbedingungen entsprechen.",
        en: "For professionals whose skills meet the role's requirements and the applicable access conditions.",
      },
      cta: { fr: "Découvrir l'emploi qualifié", de: "Qualifizierte Beschäftigung entdecken", en: "Discover skilled employment" },
      href: "/travailler-en-allemagne",
    },
    {
      num: "03",
      title: { fr: "Chancenkarte", de: "Chancenkarte", en: "Chancenkarte" },
      body: {
        fr: "Étudier la possibilité de rechercher un emploi qualifié en Allemagne grâce à la Carte des opportunités, si les conditions requises sont réunies.",
        de: "Die Möglichkeit prüfen, mit der Chancenkarte in Deutschland eine qualifizierte Stelle zu suchen, sofern die Voraussetzungen erfüllt sind.",
        en: "Explore the possibility of looking for a skilled job in Germany with the Opportunity Card, if the required conditions are met.",
      },
      pour: {
        fr: "Cette voie est soumise à des critères spécifiques de qualification, d'éligibilité et de financement. Elle ne garantit pas un emploi.",
        de: "Dieser Weg unterliegt besonderen Kriterien zu Qualifikation, Zugang und Finanzierung. Er garantiert keine Beschäftigung.",
        en: "This path is subject to specific criteria of qualification, eligibility and financing. It does not guarantee a job.",
      },
      cta: { fr: "Comprendre la Chancenkarte", de: "Die Chancenkarte verstehen", en: "Understand the Chancenkarte" },
      href: "/visa-allemagne/chancenkarte",
    },
  ] as { num: string; title: LT; body: LT; pour: LT; cta: LT; href: string }[],
  parcoursPrompt: {
    fr: "Vous ne savez pas quel parcours vous correspond ?",
    de: "Sie wissen nicht, welcher Weg zu Ihnen passt?",
    en: "Not sure which path suits you?",
  },

  // SECTION 04 — COURS D'ALLEMAND
  coursKicker: { fr: "La langue, une étape essentielle", de: "Die Sprache, ein wesentlicher Schritt", en: "Language, an essential step" },
  coursTitle: {
    fr: "Préparez votre allemand pour votre projet en Allemagne.",
    de: "Bereiten Sie Ihr Deutsch für Ihr Projekt in Deutschland vor.",
    en: "Prepare your German for your project in Germany.",
  },
  coursLead: {
    fr: "La maîtrise de l'allemand est déterminante pour suivre une formation, réussir un entretien et communiquer dans un environnement professionnel. Karriere Fähre vous accompagne dans votre apprentissage selon votre niveau et votre objectif.",
    de: "Gute Deutschkenntnisse sind entscheidend, um eine Ausbildung zu absolvieren, ein Gespräch zu bestehen und in einem beruflichen Umfeld zu kommunizieren. Karriere Fähre begleitet Ihr Lernen je nach Niveau und Ziel.",
    en: "A command of German is decisive for following training, succeeding in an interview and communicating in a professional environment. Karriere Fähre supports your learning according to your level and goal.",
  },
  coursItems: [
    {
      title: { fr: "Des cours adaptés à votre niveau", de: "Kurse, die zu Ihrem Niveau passen", en: "Courses suited to your level" },
      body: {
        fr: "Du débutant à la préparation aux niveaux requis pour votre parcours, selon les formations proposées.",
        de: "Vom Anfänger bis zur Vorbereitung auf die für Ihren Weg erforderlichen Niveaus, je nach angebotenen Kursen.",
        en: "From beginner to preparation for the levels required for your path, according to the courses offered.",
      },
    },
    {
      title: { fr: "Une préparation orientée vers la pratique", de: "Eine praxisorientierte Vorbereitung", en: "A practice-oriented preparation" },
      body: {
        fr: "Expression orale, compréhension, vocabulaire professionnel et préparation aux examens selon le programme suivi.",
        de: "Mündlicher Ausdruck, Verständnis, Fachwortschatz und Prüfungsvorbereitung je nach belegtem Programm.",
        en: "Speaking, comprehension, professional vocabulary and exam preparation according to the programme followed.",
      },
    },
  ] as { title: LT; body: LT }[],
  coursCta: { fr: "Voir nos cours d'allemand", de: "Unsere Deutschkurse ansehen", en: "See our German courses" },
  coursCtaNiveau: { fr: "Évaluer mon niveau", de: "Mein Niveau einschätzen", en: "Assess my level" },

  // SECTION 05 — LES MÉTIERS ACCESSIBLES
  metiersKicker: { fr: "Les métiers accessibles", de: "Die zugänglichen Berufe", en: "Accessible professions" },
  metiersTitle: {
    fr: "Des métiers. Des parcours. Une carrière.",
    de: "Berufe. Wege. Eine Karriere.",
    en: "Professions. Paths. A career.",
  },
  metiersLead: {
    fr: "Découvrez les secteurs dans lesquels vous pouvez vous former ou travailler.",
    de: "Entdecken Sie die Branchen, in denen Sie sich ausbilden lassen oder arbeiten können.",
    en: "Discover the sectors in which you can train or work.",
  },
  metiersText: {
    fr: "Les possibilités dépendent de votre profil, de votre qualification, de votre niveau linguistique et des conditions de recrutement. Explorez les secteurs pour découvrir les métiers et les parcours envisageables.",
    de: "Die Möglichkeiten hängen von Ihrem Profil, Ihrer Qualifikation, Ihrem Sprachniveau und den Rekrutierungsbedingungen ab. Erkunden Sie die Branchen, um die möglichen Berufe und Wege zu entdecken.",
    en: "The possibilities depend on your profile, your qualification, your language level and recruitment conditions. Explore the sectors to discover the possible professions and paths.",
  },
  metiersCta: { fr: "Explorer tous les métiers", de: "Alle Berufe erkunden", en: "Explore all professions" },

  // SECTION 06 — MÉTHODE
  methodeTitle: {
    fr: "Une méthode claire. Un accompagnement adapté à votre parcours.",
    de: "Eine klare Methode. Eine auf Ihren Weg abgestimmte Begleitung.",
    en: "A clear method. Support tailored to your path.",
  },
  methodeTitleL1: {
    fr: "Une méthode claire.",
    de: "Eine klare Methode.",
    en: "A clear method.",
  },
  methodeTitleL2: {
    fr: "Un accompagnement adapté à votre parcours.",
    de: "Eine auf Ihren Weg abgestimmte Begleitung.",
    en: "Support tailored to your path.",
  },
  methodeLead: {
    fr: "Construire une carrière en Allemagne ne se résume pas à envoyer une candidature. Chaque étape doit être préparée en fonction du profil du candidat et des exigences du parcours choisi.",
    de: "Eine Karriere in Deutschland aufzubauen bedeutet mehr, als eine Bewerbung zu senden. Jeder Schritt muss je nach Profil des Kandidaten und den Anforderungen des gewählten Weges vorbereitet werden.",
    en: "Building a career in Germany is more than sending an application. Each step must be prepared according to the candidate's profile and the requirements of the chosen path.",
  },
  methodeSteps: [
    {
      num: "01",
      title: { fr: "Préparer", de: "Vorbereiten", en: "Prepare" },
      items: [
        { fr: "Évaluation du profil et du projet.", de: "Prüfung von Profil und Projekt.", en: "Assessment of the profile and project." },
        { fr: "Orientation vers le parcours adapté.", de: "Orientierung zum passenden Weg.", en: "Guidance toward the suitable path." },
        { fr: "Préparation linguistique et examen des documents.", de: "Sprachliche Vorbereitung und Prüfung der Unterlagen.", en: "Language preparation and review of documents." },
      ],
    },
    {
      num: "02",
      title: { fr: "Construire", de: "Aufbauen", en: "Build" },
      items: [
        { fr: "Préparation du dossier de candidature.", de: "Vorbereitung der Bewerbungsunterlagen.", en: "Preparation of the application file." },
        { fr: "Coaching et entretiens avec les employeurs.", de: "Coaching und Gespräche mit Arbeitgebern.", en: "Coaching and interviews with employers." },
        { fr: "Coordination des démarches convenues selon le parcours.", de: "Koordination der vereinbarten Schritte je nach Weg.", en: "Coordination of the agreed steps according to the path." },
      ],
    },
    {
      num: "03",
      title: { fr: "Réussir", de: "Erfolgreich sein", en: "Succeed" },
      items: [
        { fr: "Préparation au départ et à l'arrivée.", de: "Vorbereitung auf Ausreise und Ankunft.", en: "Preparation for departure and arrival." },
        { fr: "Orientation vers les étapes d'installation.", de: "Orientierung zu den Schritten der Niederlassung.", en: "Guidance toward the settling-in steps." },
        { fr: "Accompagnement à l'intégration selon les prestations convenues.", de: "Begleitung bei der Integration je nach vereinbarten Leistungen.", en: "Support with integration according to the agreed services." },
      ],
    },
  ] as { num: string; title: LT; items: LT[] }[],
  methodeDisclaimer: {
    fr: "La reconnaissance des qualifications, les démarches de séjour et les conditions d'entrée dépendent de la situation individuelle. Karriere Fähre accompagne la préparation et la coordination des étapes prévues, sans garantir une décision administrative ou un recrutement.",
    de: "Die Anerkennung von Qualifikationen, die Aufenthaltsverfahren und die Einreisebedingungen hängen von der individuellen Situation ab. Karriere Fähre begleitet die Vorbereitung und Koordination der vorgesehenen Schritte, ohne eine behördliche Entscheidung oder eine Einstellung zu garantieren.",
    en: "Recognition of qualifications, residence procedures and entry conditions depend on the individual situation. Karriere Fähre supports the preparation and coordination of the planned steps, without guaranteeing an administrative decision or a recruitment.",
  },
  methodeCta: { fr: "Découvrir notre méthode", de: "Unsere Methode entdecken", en: "Discover our method" },

  // SECTION 07 — L'ÉQUIPE
  equipeKicker: { fr: "Les visages du pont", de: "Die Gesichter der Brücke", en: "The faces of the bridge" },
  equipeTitle: { fr: "Une équipe engagée à vos côtés.", de: "Ein Team, das an Ihrer Seite steht.", en: "A team committed by your side." },
  equipeText1: {
    fr: "Karriere Fähre est une agence de placement international basée à Douala, au Cameroun. Notre ambition est de construire un lien fiable entre les talents d'Afrique centrale et les possibilités professionnelles en Allemagne.",
    de: "Karriere Fähre ist eine internationale Vermittlungsagentur mit Sitz in Douala, Kamerun. Unser Anspruch ist es, eine verlässliche Verbindung zwischen den Talenten Zentralafrikas und den beruflichen Möglichkeiten in Deutschland zu schaffen.",
    en: "Karriere Fähre is an international placement agency based in Douala, Cameroon. Our ambition is to build a reliable link between the talents of Central Africa and professional opportunities in Germany.",
  },
  equipeText2: {
    fr: "Nous privilégions une approche structurée, une information transparente et une préparation adaptée aux exigences du projet de chaque candidat et de chaque entreprise.",
    de: "Wir setzen auf einen strukturierten Ansatz, transparente Information und eine Vorbereitung, die auf die Anforderungen des Projekts jedes Kandidaten und jedes Unternehmens abgestimmt ist.",
    en: "We favour a structured approach, transparent information and preparation tailored to the requirements of each candidate's and each company's project.",
  },
  equipeEngagementsIntro: {
    fr: "Notre approche repose sur quatre engagements.",
    de: "Unser Ansatz beruht auf vier Verpflichtungen.",
    en: "Our approach rests on four commitments.",
  },
  equipeEngagements: [
    {
      title: { fr: "Transparence", de: "Transparenz", en: "Transparency" },
      body: { fr: "Clarifier les étapes, les prestations et les coûts.", de: "Die Schritte, Leistungen und Kosten klären.", en: "Clarifying the steps, services and costs." },
    },
    {
      title: { fr: "Préparation", de: "Vorbereitung", en: "Preparation" },
      body: { fr: "Accompagner les candidats avant les étapes décisives.", de: "Die Kandidaten vor den entscheidenden Schritten begleiten.", en: "Supporting candidates before the decisive steps." },
    },
    {
      title: { fr: "Conformité", de: "Konformität", en: "Compliance" },
      body: { fr: "Tenir compte des exigences légales applicables.", de: "Die geltenden gesetzlichen Anforderungen berücksichtigen.", en: "Taking the applicable legal requirements into account." },
    },
    {
      title: { fr: "Suivi", de: "Begleitung", en: "Follow-up" },
      body: { fr: "Organiser les étapes et les responsabilités convenues.", de: "Die vereinbarten Schritte und Verantwortlichkeiten organisieren.", en: "Organising the agreed steps and responsibilities." },
    },
  ] as { title: LT; body: LT }[],
  equipeCta: { fr: "Qui sommes-nous ?", de: "Wer wir sind", en: "Who we are" },

  // SECTION 08 — CTA FINAL
  finalKicker: { fr: "Votre projet commence ici", de: "Ihr Projekt beginnt hier", en: "Your project starts here" },
  finalTitle: {
    fr: "Construisons ensemble votre parcours en Allemagne.",
    de: "Gestalten wir gemeinsam Ihren Weg nach Deutschland.",
    en: "Let's build your path to Germany together.",
  },
  finalText: {
    fr: "Vous souhaitez vous former, valoriser votre qualification ou vérifier les possibilités correspondant à votre profil ? Commencez par une première évaluation.",
    de: "Möchten Sie sich ausbilden lassen, Ihre Qualifikation einbringen oder die zu Ihrem Profil passenden Möglichkeiten prüfen? Beginnen Sie mit einer ersten Einschätzung.",
    en: "Do you want to train, put your qualification to work or check the possibilities matching your profile? Start with an initial assessment.",
  },
  finalStepTitle: { fr: "Faites le premier pas.", de: "Machen Sie den ersten Schritt.", en: "Take the first step." },
  finalStepText: {
    fr: "Présentez-nous votre projet, votre formation et votre niveau d'allemand. Nous pourrons identifier les prochaines étapes à examiner.",
    de: "Stellen Sie uns Ihr Projekt, Ihre Ausbildung und Ihr Deutschniveau vor. Wir können die nächsten zu prüfenden Schritte bestimmen.",
    en: "Tell us about your project, your training and your level of German. We can identify the next steps to examine.",
  },
  finalCtaEvaluer: { fr: "Évaluer mon profil", de: "Mein Profil einschätzen", en: "Assess my profile" },
  finalEntreprise: {
    fr: "Vous êtes une entreprise ? Présentez votre besoin de recrutement",
    de: "Sie sind ein Unternehmen? Beschreiben Sie Ihren Rekrutierungsbedarf",
    en: "Are you a company? Describe your recruitment need",
  },
  finalEntrepriseLead: {
    fr: "Vous êtes une entreprise ?",
    de: "Sie sind ein Unternehmen?",
    en: "Are you a company?",
  },
  finalEntrepriseLink: {
    fr: "Présentez votre besoin de recrutement",
    de: "Beschreiben Sie Ihren Rekrutierungsbedarf",
    en: "Describe your recruitment need",
  },
};
