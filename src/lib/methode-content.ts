import type { LocalizedText } from "./localized";

type LT = LocalizedText;

type Cta = { label: LT; href: string; primary?: boolean };
type Step = {
  num: string;
  title: LT;
  subtitle: LT;
  body: LT;
  listIntro?: LT;
  bullets?: LT[];
  routes?: { kicker: LT; name: LT; body: LT; cta: LT; href: string }[];
  note?: LT;
  disclaimer?: LT;
  ctas?: Cta[];
};

export const METHODE = {
  // Intro
  kicker: { fr: "Notre méthode", de: "Unsere Methode", en: "Our method" },
  titleL1: { fr: "Un parcours structuré.", de: "Ein strukturierter Weg.", en: "A structured path." },
  titleL2: {
    fr: "Un accompagnement à chaque étape.",
    de: "Begleitung bei jedem Schritt.",
    en: "Support at every step.",
  },
  lead1: {
    fr: "Construire un projet professionnel en Allemagne demande de la préparation, une bonne compréhension des exigences et des démarches adaptées à chaque situation.",
    de: "Ein berufliches Projekt in Deutschland aufzubauen erfordert Vorbereitung, ein gutes Verständnis der Anforderungen und auf jede Situation abgestimmte Schritte.",
    en: "Building a professional project in Germany takes preparation, a clear understanding of the requirements and steps adapted to each situation.",
  },
  lead2: {
    fr: "Chez Karriere Fähre, nous commençons par comprendre votre profil et votre objectif. Nous vous orientons vers un parcours envisageable, puis nous vous accompagnons dans les étapes définies ensemble : préparation linguistique, candidature, échanges avec les employeurs et démarches administratives applicables.",
    de: "Bei Karriere Fähre beginnen wir damit, Ihr Profil und Ihr Ziel zu verstehen. Wir orientieren Sie zu einem möglichen Weg und begleiten Sie anschließend bei den gemeinsam festgelegten Schritten: sprachliche Vorbereitung, Bewerbung, Austausch mit Arbeitgebern und geltende behördliche Verfahren.",
    en: "At Karriere Fähre, we start by understanding your profile and your goal. We guide you toward a possible path, then support you through the steps defined together: language preparation, application, exchanges with employers and the applicable administrative procedures.",
  },
  introCtaPrimary: { fr: "Évaluer mon profil", de: "Mein Profil einschätzen", en: "Assess my profile" },
  introCtaSecondary: {
    fr: "Découvrir nos cours d'allemand",
    de: "Unsere Deutschkurse entdecken",
    en: "Discover our German courses",
  },

  stepLabel: { fr: "Étape", de: "Schritt", en: "Step" },
  defaultListIntro: { fr: "Vous avancez avec :", de: "Sie gehen voran mit:", en: "You move forward with:" },

  steps: [
    {
      num: "01",
      title: { fr: "Comprendre votre profil", de: "Ihr Profil verstehen", en: "Understanding your profile" },
      subtitle: {
        fr: "Votre projet commence par une évaluation.",
        de: "Ihr Projekt beginnt mit einer Einschätzung.",
        en: "Your project begins with an assessment.",
      },
      body: {
        fr: "Nous examinons votre formation, votre expérience, votre niveau d'allemand, vos compétences et votre objectif professionnel. Cette première étape permet d'identifier les parcours qui méritent d'être étudiés selon votre situation.",
        de: "Wir prüfen Ihre Ausbildung, Ihre Erfahrung, Ihr Deutschniveau, Ihre Kompetenzen und Ihr berufliches Ziel. Dieser erste Schritt hilft, die Wege zu bestimmen, die je nach Ihrer Situation geprüft werden sollten.",
        en: "We review your training, your experience, your level of German, your skills and your professional goal. This first step helps identify the paths worth examining for your situation.",
      },
      bullets: [
        { fr: "Une première analyse de votre profil.", de: "Eine erste Analyse Ihres Profils.", en: "A first analysis of your profile." },
        { fr: "Une orientation vers les parcours envisageables.", de: "Eine Orientierung zu den möglichen Wegen.", en: "Guidance toward the possible paths." },
        { fr: "Des indications sur les prochaines étapes à préparer.", de: "Hinweise zu den nächsten vorzubereitenden Schritten.", en: "Pointers on the next steps to prepare." },
      ],
    },
    {
      num: "02",
      title: { fr: "Choisir le bon parcours", de: "Den richtigen Weg wählen", en: "Choosing the right path" },
      subtitle: {
        fr: "Une orientation adaptée à votre situation.",
        de: "Eine auf Ihre Situation abgestimmte Orientierung.",
        en: "Guidance tailored to your situation.",
      },
      body: {
        fr: "Selon votre profil, plusieurs possibilités peuvent être étudiées.",
        de: "Je nach Ihrem Profil können mehrere Möglichkeiten geprüft werden.",
        en: "Depending on your profile, several possibilities can be examined.",
      },
      routes: [
        {
          kicker: { fr: "Se former", de: "Sich ausbilden", en: "Train" },
          name: { fr: "Ausbildung", de: "Ausbildung", en: "Ausbildung" },
          body: {
            fr: "Une formation professionnelle rémunérée en Allemagne, combinant enseignement et expérience pratique en entreprise.",
            de: "Eine vergütete duale Ausbildung in Deutschland, die theoretischen Unterricht und praktische Erfahrung im Betrieb verbindet.",
            en: "A paid vocational training in Germany, combining classroom teaching and hands-on experience in a company.",
          },
          cta: { fr: "Découvrir l'Ausbildung", de: "Die Ausbildung entdecken", en: "Discover the Ausbildung" },
          href: "/ausbildung-allemagne",
        },
        {
          kicker: { fr: "Travailler", de: "Arbeiten", en: "Work" },
          name: { fr: "Emploi direct", de: "Direkte Beschäftigung", en: "Direct employment" },
          body: {
            fr: "Vous êtes déjà qualifié et disposez d'une expérience professionnelle ? Découvrez les possibilités d'emploi correspondant à votre profil.",
            de: "Sie sind bereits qualifiziert und verfügen über Berufserfahrung? Entdecken Sie die Beschäftigungsmöglichkeiten, die Ihrem Profil entsprechen.",
            en: "Already qualified and have professional experience? Discover the employment possibilities matching your profile.",
          },
          cta: { fr: "Découvrir l'emploi direct", de: "Die direkte Beschäftigung entdecken", en: "Discover direct employment" },
          href: "/travailler-en-allemagne",
        },
        {
          kicker: { fr: "Préparer son projet", de: "Sein Projekt vorbereiten", en: "Prepare your project" },
          name: { fr: "Parcours accompagné", de: "Begleiteter Weg", en: "Supported path" },
          body: {
            fr: "Vous n'êtes pas encore prêt ? Nous vous aidons à construire progressivement votre projet : langue, compétences, dossier et orientation.",
            de: "Sie sind noch nicht bereit? Wir helfen Ihnen, Ihr Projekt Schritt für Schritt aufzubauen: Sprache, Kompetenzen, Unterlagen und Orientierung.",
            en: "Not ready yet? We help you build your project step by step: language, skills, file and guidance.",
          },
          cta: { fr: "Construire mon parcours", de: "Meinen Weg aufbauen", en: "Build my path" },
          href: "/candidats",
        },
      ],
    },
    {
      num: "03",
      title: { fr: "Préparer votre allemand", de: "Ihr Deutsch vorbereiten", en: "Preparing your German" },
      subtitle: {
        fr: "La langue se prépare avant les étapes décisives.",
        de: "Die Sprache wird vor den entscheidenden Schritten vorbereitet.",
        en: "Language is prepared before the decisive steps.",
      },
      body: {
        fr: "Nous vous orientons vers une préparation linguistique adaptée à votre niveau et à votre projet.",
        de: "Wir orientieren Sie zu einer sprachlichen Vorbereitung, die auf Ihr Niveau und Ihr Projekt abgestimmt ist.",
        en: "We guide you toward language preparation suited to your level and your project.",
      },
      listIntro: {
        fr: "Selon le programme suivi, elle peut comprendre :",
        de: "Je nach belegtem Programm kann sie umfassen:",
        en: "Depending on the programme followed, it may include:",
      },
      bullets: [
        { fr: "Des cours d'allemand.", de: "Deutschkurse.", en: "German courses." },
        { fr: "La pratique de l'expression orale.", de: "Das Üben des mündlichen Ausdrucks.", en: "Practising speaking." },
        { fr: "La préparation aux examens.", de: "Die Prüfungsvorbereitung.", en: "Exam preparation." },
        { fr: "Le vocabulaire professionnel et la Fachsprache.", de: "Fachwortschatz und Fachsprache.", en: "Professional vocabulary and technical language (Fachsprache)." },
        { fr: "La préparation linguistique aux entretiens.", de: "Die sprachliche Vorbereitung auf Gespräche.", en: "Language preparation for interviews." },
      ],
      note: {
        fr: "Le niveau requis dépend notamment du parcours, du métier, de l'employeur et des exigences applicables.",
        de: "Das erforderliche Niveau hängt insbesondere vom Weg, vom Beruf, vom Arbeitgeber und von den geltenden Anforderungen ab.",
        en: "The required level depends in particular on the path, the profession, the employer and the applicable requirements.",
      },
      ctas: [
        { label: { fr: "Voir nos cours d'allemand", de: "Unsere Deutschkurse ansehen", en: "See our German courses" }, href: "/cours-allemand", primary: true },
        { label: { fr: "Évaluer mon niveau", de: "Mein Niveau einschätzen", en: "Assess my level" }, href: "/cours-allemand/test-niveau" },
      ],
    },
    {
      num: "04",
      title: {
        fr: "Constituer et préparer votre dossier",
        de: "Ihre Unterlagen zusammenstellen und vorbereiten",
        en: "Assembling and preparing your file",
      },
      subtitle: {
        fr: "Un dossier cohérent et adapté au parcours visé.",
        de: "Ein stimmiges, auf den angestrebten Weg abgestimmtes Dossier.",
        en: "A coherent file suited to the intended path.",
      },
      body: {
        fr: "Nous vous indiquons les documents à préparer selon votre situation et les exigences identifiées.",
        de: "Wir zeigen Ihnen, welche Dokumente je nach Ihrer Situation und den festgestellten Anforderungen vorzubereiten sind.",
        en: "We tell you which documents to prepare according to your situation and the identified requirements.",
      },
      listIntro: {
        fr: "Cette étape peut comprendre :",
        de: "Dieser Schritt kann umfassen:",
        en: "This step may include:",
      },
      bullets: [
        { fr: "L'examen préliminaire du CV et des justificatifs.", de: "Die vorläufige Prüfung des Lebenslaufs und der Nachweise.", en: "A preliminary review of the CV and supporting documents." },
        { fr: "La vérification de la cohérence des informations disponibles.", de: "Die Prüfung der Stimmigkeit der verfügbaren Informationen.", en: "Checking the consistency of the available information." },
        { fr: "L'identification des documents manquants.", de: "Die Ermittlung fehlender Dokumente.", en: "Identifying missing documents." },
        { fr: "La préparation du dossier de candidature.", de: "Die Vorbereitung der Bewerbungsunterlagen.", en: "Preparing the application file." },
        { fr: "L'orientation vers une procédure de reconnaissance, lorsque celle-ci est nécessaire.", de: "Die Orientierung zu einem Anerkennungsverfahren, sofern dieses erforderlich ist.", en: "Guidance toward a recognition procedure, when one is required." },
      ],
      disclaimer: {
        fr: "L'authenticité des documents et leur acceptation définitive relèvent des vérifications et décisions des organismes compétents.",
        de: "Die Echtheit der Dokumente und ihre endgültige Anerkennung obliegen den Prüfungen und Entscheidungen der zuständigen Stellen.",
        en: "The authenticity of documents and their final acceptance rest with the checks and decisions of the competent bodies.",
      },
    },
    {
      num: "05",
      title: {
        fr: "Préparer votre candidature et les entretiens",
        de: "Ihre Bewerbung und die Gespräche vorbereiten",
        en: "Preparing your application and interviews",
      },
      subtitle: {
        fr: "Présenter votre profil avec clarté et confiance.",
        de: "Ihr Profil klar und selbstbewusst präsentieren.",
        en: "Presenting your profile with clarity and confidence.",
      },
      body: {
        fr: "Lorsque le parcours le prévoit, nous vous accompagnons dans la préparation de votre candidature auprès des employeurs ou des organismes concernés.",
        de: "Wenn der Weg dies vorsieht, begleiten wir Sie bei der Vorbereitung Ihrer Bewerbung bei den Arbeitgebern oder den zuständigen Stellen.",
        en: "When the path provides for it, we support you in preparing your application to employers or the relevant bodies.",
      },
      listIntro: {
        fr: "Selon vos besoins, cet accompagnement peut comprendre :",
        de: "Je nach Ihrem Bedarf kann diese Begleitung umfassen:",
        en: "Depending on your needs, this support may include:",
      },
      bullets: [
        { fr: "La préparation du CV et de la lettre de motivation.", de: "Die Vorbereitung des Lebenslaufs und des Motivationsschreibens.", en: "Preparing the CV and cover letter." },
        { fr: "La préparation aux entretiens.", de: "Die Vorbereitung auf die Gespräche.", en: "Interview preparation." },
        { fr: "Des simulations et des exercices de communication.", de: "Simulationen und Kommunikationsübungen.", en: "Simulations and communication exercises." },
        { fr: "La présentation de votre formation, de vos compétences et de votre motivation.", de: "Die Darstellung Ihrer Ausbildung, Ihrer Kompetenzen und Ihrer Motivation.", en: "Presenting your training, your skills and your motivation." },
      ],
      disclaimer: {
        fr: "Pour un recrutement, l'employeur conserve la décision finale de sélection.",
        de: "Bei einer Einstellung behält der Arbeitgeber die endgültige Auswahlentscheidung.",
        en: "For a recruitment, the employer retains the final selection decision.",
      },
    },
    {
      num: "06",
      title: {
        fr: "Coordonner les démarches applicables",
        de: "Die anwendbaren Schritte koordinieren",
        en: "Coordinating the applicable procedures",
      },
      subtitle: {
        fr: "Préparer les prochaines étapes avec méthode.",
        de: "Die nächsten Schritte methodisch vorbereiten.",
        en: "Preparing the next steps methodically.",
      },
      body: {
        fr: "Après une sélection ou lorsqu'un parcours le nécessite, nous vous accompagnons dans la préparation et la coordination des démarches convenues.",
        de: "Nach einer Auswahl oder wenn ein Weg es erfordert, begleiten wir Sie bei der Vorbereitung und Koordination der vereinbarten Schritte.",
        en: "After a selection or when a path requires it, we support you in preparing and coordinating the agreed procedures.",
      },
      listIntro: {
        fr: "Selon votre situation, elles peuvent concerner :",
        de: "Je nach Ihrer Situation können sie betreffen:",
        en: "Depending on your situation, they may concern:",
      },
      bullets: [
        { fr: "La reconnaissance des qualifications.", de: "Die Anerkennung der Qualifikationen.", en: "The recognition of qualifications." },
        { fr: "Les documents liés à la formation ou à l'emploi.", de: "Die mit der Ausbildung oder Beschäftigung verbundenen Dokumente.", en: "Documents related to training or employment." },
        { fr: "La préparation d'un dossier de visa.", de: "Die Vorbereitung eines Visumantrags.", en: "Preparing a visa file." },
        { fr: "Les échanges avec les interlocuteurs concernés.", de: "Den Austausch mit den betreffenden Ansprechpartnern.", en: "Exchanges with the relevant contacts." },
        { fr: "La préparation pratique du départ.", de: "Die praktische Vorbereitung der Ausreise.", en: "The practical preparation for departure." },
      ],
      disclaimer: {
        fr: "Les exigences et les procédures varient selon le parcours. Les décisions finales appartiennent aux autorités et organismes compétents.",
        de: "Die Anforderungen und Verfahren variieren je nach Weg. Die endgültigen Entscheidungen liegen bei den zuständigen Behörden und Stellen.",
        en: "Requirements and procedures vary by path. Final decisions rest with the competent authorities and bodies.",
      },
    },
    {
      num: "07",
      title: {
        fr: "Préparer votre arrivée et votre intégration",
        de: "Ihre Ankunft und Integration vorbereiten",
        en: "Preparing your arrival and integration",
      },
      subtitle: {
        fr: "Votre projet ne s'arrête pas à l'obtention d'un document.",
        de: "Ihr Projekt endet nicht mit dem Erhalt eines Dokuments.",
        en: "Your project does not end with obtaining a document.",
      },
      body: {
        fr: "Lorsque cette prestation est prévue dans votre accompagnement, nous vous aidons à préparer les prochaines étapes de votre installation et de votre intégration professionnelle.",
        de: "Wenn diese Leistung in Ihrer Begleitung vorgesehen ist, helfen wir Ihnen, die nächsten Schritte Ihrer Niederlassung und Ihrer beruflichen Integration vorzubereiten.",
        en: "When this service is included in your support, we help you prepare the next steps of your settling in and your professional integration.",
      },
      listIntro: {
        fr: "La préparation peut porter sur :",
        de: "Die Vorbereitung kann betreffen:",
        en: "The preparation may cover:",
      },
      bullets: [
        { fr: "Les informations pratiques avant le départ.", de: "Praktische Informationen vor der Ausreise.", en: "Practical information before departure." },
        { fr: "La compréhension de votre futur environnement professionnel.", de: "Das Verständnis Ihres künftigen beruflichen Umfelds.", en: "Understanding your future professional environment." },
        { fr: "Les premières démarches d'installation.", de: "Die ersten Schritte der Niederlassung.", en: "The first settling-in steps." },
        { fr: "Les repères culturels et la communication au travail.", de: "Kulturelle Orientierung und Kommunikation am Arbeitsplatz.", en: "Cultural bearings and communication at work." },
        { fr: "Le suivi prévu dans le cadre de votre accompagnement.", de: "Die im Rahmen Ihrer Begleitung vorgesehene Nachbetreuung.", en: "The follow-up provided within your support." },
      ],
      note: {
        fr: "Les modalités dépendent du parcours et des prestations convenues.",
        de: "Die Modalitäten hängen vom Weg und den vereinbarten Leistungen ab.",
        en: "The terms depend on the path and the agreed services.",
      },
    },
  ] as Step[],

  // Transparency
  transparencyTitle: {
    fr: "Une méthode transparente, adaptée à votre situation",
    de: "Eine transparente, auf Ihre Situation abgestimmte Methode",
    en: "A transparent method, tailored to your situation",
  },
  transparencyBody1: {
    fr: "Chaque candidat possède un parcours différent. Les étapes, les délais, les documents et les coûts dépendent de son projet et des exigences applicables.",
    de: "Jeder Kandidat hat einen anderen Weg. Die Schritte, Fristen, Dokumente und Kosten hängen von seinem Projekt und den geltenden Anforderungen ab.",
    en: "Every candidate has a different path. The steps, timelines, documents and costs depend on their project and the applicable requirements.",
  },
  transparencyBody2: {
    fr: "Avant tout engagement, nous clarifions les prestations prévues, les responsabilités de chacun et les prochaines étapes. Nous ne garantissons ni recrutement, ni admission, ni reconnaissance, ni délivrance de visa.",
    de: "Vor jeder Verpflichtung klären wir die vorgesehenen Leistungen, die Verantwortlichkeiten jeder Seite und die nächsten Schritte. Wir garantieren weder Einstellung noch Zulassung noch Anerkennung noch Visumerteilung.",
    en: "Before any commitment, we clarify the planned services, each party's responsibilities and the next steps. We do not guarantee recruitment, admission, recognition or the issuance of a visa.",
  },

  // Final CTA
  finalTitle: { fr: "Prêt à commencer ?", de: "Bereit anzufangen?", en: "Ready to start?" },
  finalText: {
    fr: "Votre première étape est de comprendre les possibilités correspondant à votre profil.",
    de: "Ihr erster Schritt ist es, die zu Ihrem Profil passenden Möglichkeiten zu verstehen.",
    en: "Your first step is to understand the possibilities matching your profile.",
  },
  finalCtaPrimary: { fr: "Évaluer mon profil", de: "Mein Profil einschätzen", en: "Assess my profile" },
  finalCtaSecondary: { fr: "Nous contacter", de: "Kontakt aufnehmen", en: "Contact us" },
};
