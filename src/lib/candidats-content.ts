import type { LocalizedText } from "./localized";

type LT = LocalizedText;

export const CANDIDATS = {
  // SECTION 01 — HERO
  heroKicker: {
    fr: "Votre avenir professionnel en Allemagne",
    de: "Ihre berufliche Zukunft in Deutschland",
    en: "Your professional future in Germany",
  },
  heroTitle: {
    fr: "Travailler ou se former en Allemagne, accompagné à chaque étape.",
    de: "In Deutschland arbeiten oder sich ausbilden lassen, wir begleiten Sie Schritt für Schritt.",
    en: "Work or train in Germany, supported at every step.",
  },
  heroIntro: {
    fr: "Depuis le Cameroun, plusieurs parcours permettent de construire un projet professionnel en Allemagne. Karriere Fähre vous aide à identifier la voie adaptée à votre profil, à développer votre allemand et à préparer votre projet jusqu'au départ.",
    de: "Von Kamerun aus führen mehrere Wege zu einem beruflichen Projekt in Deutschland. Karriere Fähre hilft Ihnen, den zu Ihrem Profil passenden Weg zu finden, Ihr Deutsch zu entwickeln und Ihr Projekt bis zur Ausreise vorzubereiten.",
    en: "From Cameroon, several paths lead to a professional project in Germany. Karriere Fähre helps you identify the route suited to your profile, develop your German and prepare your project through to departure.",
  },
  heroCtaPrimary: { fr: "Évaluer mon profil", de: "Mein Profil einschätzen", en: "Assess my profile" },
  heroCtaSecondary: { fr: "Découvrir les parcours", de: "Die Wege entdecken", en: "Explore the paths" },

  // SECTION 02 — TROIS PARCOURS
  parKicker: { fr: "Trouvez votre voie", de: "Finden Sie Ihren Weg", en: "Find your path" },
  parTitle: {
    fr: "Quel parcours correspond à votre projet ?",
    de: "Welcher Weg passt zu Ihrem Projekt?",
    en: "Which path fits your project?",
  },
  parLead: {
    fr: "Vous souhaitez acquérir une qualification en Allemagne, exercer votre métier ou rechercher un emploi sur place ? Découvrez les principales possibilités.",
    de: "Möchten Sie in Deutschland eine Qualifikation erwerben, Ihren Beruf ausüben oder vor Ort eine Stelle suchen? Entdecken Sie die wichtigsten Möglichkeiten.",
    en: "Do you want to gain a qualification in Germany, practise your profession or look for a job on site? Discover the main possibilities.",
  },
  parLead1: {
    fr: "Vous souhaitez acquérir une qualification en Allemagne, exercer votre métier ou rechercher un emploi sur place ?",
    de: "Möchten Sie in Deutschland eine Qualifikation erwerben, Ihren Beruf ausüben oder vor Ort eine Stelle suchen?",
    en: "Do you want to gain a qualification in Germany, practise your profession or look for a job on site?",
  },
  parLead2: {
    fr: "Découvrez les principales possibilités.",
    de: "Entdecken Sie die wichtigsten Möglichkeiten.",
    en: "Discover the main possibilities.",
  },
  parcours: [
    {
      tag: { fr: "Ausbildung", de: "Ausbildung", en: "Ausbildung" },
      title: { fr: "Se former en Allemagne", de: "Sich in Deutschland ausbilden lassen", en: "Train in Germany" },
      titleL1: { fr: "Se former en", de: "Sich in Deutschland", en: "Train in" },
      titleL2: { fr: "Allemagne", de: "ausbilden lassen", en: "Germany" },
      question: {
        fr: "Vous souhaitez apprendre un métier et acquérir une qualification professionnelle reconnue en Allemagne ?",
        de: "Möchten Sie einen Beruf erlernen und eine in Deutschland anerkannte berufliche Qualifikation erwerben?",
        en: "Do you want to learn a trade and gain a professional qualification recognised in Germany?",
      },
      body1: {
        fr: "L'Ausbildung vous permet de suivre une formation professionnelle, généralement en alternance entre une entreprise et une école professionnelle dans le système dual.",
        de: "Die Ausbildung ermöglicht eine berufliche Ausbildung, in der Regel im dualen System zwischen Betrieb und Berufsschule.",
        en: "The Ausbildung lets you follow vocational training, usually alternating between a company and a vocational school in the dual system.",
      },
      body2: {
        fr: "Karriere Fähre vous accompagne dans le choix du métier, la préparation linguistique et la candidature auprès des entreprises.",
        de: "Karriere Fähre begleitet Sie bei der Berufswahl, der sprachlichen Vorbereitung und der Bewerbung bei Unternehmen.",
        en: "Karriere Fähre supports you in choosing the trade, preparing linguistically and applying to companies.",
      },
      cta: { fr: "Découvrir l'Ausbildung", de: "Die Ausbildung entdecken", en: "Discover the Ausbildung" },
      href: "/ausbildung-allemagne",
    },
    {
      tag: { fr: "Emploi qualifié", de: "Qualifizierte Beschäftigung", en: "Skilled employment" },
      title: {
        fr: "Valoriser votre qualification et votre expérience",
        de: "Ihre Qualifikation und Erfahrung einbringen",
        en: "Put your qualification and experience to work",
      },
      question: {
        fr: "Vous possédez déjà un diplôme professionnel ou universitaire et souhaitez exercer votre métier en Allemagne ?",
        de: "Sie besitzen bereits einen beruflichen oder akademischen Abschluss und möchten Ihren Beruf in Deutschland ausüben?",
        en: "Do you already hold a vocational or university qualification and want to practise your profession in Germany?",
      },
      body1: {
        fr: "Nous vous accompagnons dans l'analyse de votre profil, la préparation de votre allemand professionnel, la constitution de votre dossier et la recherche d'opportunités adaptées.",
        de: "Wir begleiten Sie bei der Analyse Ihres Profils, der Vorbereitung Ihres Berufsdeutschs, dem Aufbau Ihrer Unterlagen und der Suche nach passenden Möglichkeiten.",
        en: "We support you in analysing your profile, preparing your professional German, building your file and finding suitable opportunities.",
      },
      body2: {
        fr: "Selon votre profession, une reconnaissance de votre qualification ou d'autres conditions spécifiques peuvent être nécessaires.",
        de: "Je nach Beruf können eine Anerkennung Ihrer Qualifikation oder andere spezifische Bedingungen erforderlich sein.",
        en: "Depending on your profession, recognition of your qualification or other specific conditions may be required.",
      },
      cta: { fr: "Découvrir l'emploi qualifié", de: "Qualifizierte Beschäftigung entdecken", en: "Discover skilled employment" },
      href: "/travailler-en-allemagne",
    },
    {
      tag: { fr: "Chancenkarte", de: "Chancenkarte", en: "Chancenkarte" },
      title: { fr: "Rechercher un emploi en Allemagne", de: "In Deutschland eine Stelle suchen", en: "Search for a job in Germany" },
      question: {
        fr: "Vous souhaitez rechercher un emploi qualifié directement sur place ?",
        de: "Möchten Sie direkt vor Ort nach einer qualifizierten Stelle suchen?",
        en: "Do you want to look for a skilled job directly on site?",
      },
      body1: {
        fr: "La Carte des opportunités (Chancenkarte) peut permettre à certains candidats de venir en Allemagne pour rechercher un emploi, sous réserve de remplir les conditions applicables.",
        de: "Die Chancenkarte kann bestimmten Kandidaten ermöglichen, zur Arbeitssuche nach Deutschland zu kommen, sofern die geltenden Voraussetzungen erfüllt sind.",
        en: "The Opportunity Card (Chancenkarte) may allow certain candidates to come to Germany to look for a job, subject to meeting the applicable conditions.",
      },
      body2: {
        fr: "Nous vous aidons à examiner votre situation, à comprendre les critères d'éligibilité et à préparer votre projet.",
        de: "Wir helfen Ihnen, Ihre Situation zu prüfen, die Zugangskriterien zu verstehen und Ihr Projekt vorzubereiten.",
        en: "We help you review your situation, understand the eligibility criteria and prepare your project.",
      },
      cta: { fr: "Découvrir la Chancenkarte", de: "Die Chancenkarte entdecken", en: "Discover the Chancenkarte" },
      href: "/visa-allemagne/chancenkarte",
    },
  ] as {
    tag: LT; title: LT; titleL1?: LT; titleL2?: LT; question: LT; body1: LT; body2: LT; cta: LT; href: string;
  }[],

  // SECTION 03 — ACCOMPAGNEMENT
  accKicker: { fr: "De la préparation au départ", de: "Von der Vorbereitung bis zur Ausreise", en: "From preparation to departure" },
  accTitle: {
    fr: "Un projet bien préparé commence par les bonnes étapes.",
    de: "Ein gut vorbereitetes Projekt beginnt mit den richtigen Schritten.",
    en: "A well-prepared project begins with the right steps.",
  },
  accSteps: [
    {
      title: { fr: "Évaluer votre profil", de: "Ihr Profil einschätzen", en: "Assess your profile" },
      body: {
        fr: "Nous examinons votre formation, votre expérience, votre niveau d'allemand et votre objectif professionnel.",
        de: "Wir prüfen Ihre Ausbildung, Ihre Erfahrung, Ihr Deutschniveau und Ihr berufliches Ziel.",
        en: "We review your training, experience, level of German and professional goal.",
      },
    },
    {
      title: { fr: "Identifier le parcours adapté", de: "Den passenden Weg bestimmen", en: "Identify the right path" },
      body: {
        fr: "Nous vous orientons vers les possibilités à étudier selon votre situation et les exigences du projet.",
        de: "Wir weisen Ihnen die zu prüfenden Möglichkeiten je nach Situation und Projektanforderungen.",
        en: "We guide you toward the possibilities to study based on your situation and the project's requirements.",
      },
    },
    {
      title: { fr: "Développer votre allemand", de: "Ihr Deutsch entwickeln", en: "Develop your German" },
      body: {
        fr: "Nous proposons des parcours linguistiques structurés, avec une attention particulière portée au Sprechen, à la compréhension et au vocabulaire professionnel (Fachsprache).",
        de: "Wir bieten strukturierte Sprachwege mit besonderem Augenmerk auf Sprechen, Verstehen und Fachsprache.",
        en: "We offer structured language paths, with particular attention to Sprechen, comprehension and professional vocabulary (Fachsprache).",
      },
    },
    {
      title: { fr: "Préparer votre candidature", de: "Ihre Bewerbung vorbereiten", en: "Prepare your application" },
      body: {
        fr: "Nous vous accompagnons dans la préparation du dossier, du CV et des entretiens, selon le parcours choisi.",
        de: "Wir begleiten Sie bei der Vorbereitung der Unterlagen, des Lebenslaufs und der Gespräche, je nach gewähltem Weg.",
        en: "We support you in preparing the file, the CV and the interviews, according to the chosen path.",
      },
    },
    {
      title: { fr: "Préparer les démarches", de: "Die Schritte vorbereiten", en: "Prepare the procedures" },
      body: {
        fr: "Nous vous accompagnons dans les étapes convenues concernant les documents, la reconnaissance éventuelle des qualifications et les démarches administratives applicables.",
        de: "Wir begleiten Sie bei den vereinbarten Schritten rund um Dokumente, die etwaige Anerkennung der Qualifikationen und die geltenden behördlichen Verfahren.",
        en: "We support you in the agreed steps regarding documents, any recognition of qualifications and the applicable administrative procedures.",
      },
    },
    {
      title: { fr: "Préparer votre départ", de: "Ihre Ausreise vorbereiten", en: "Prepare your departure" },
      body: {
        fr: "Nous vous aidons à anticiper les prochaines étapes et à préparer votre arrivée en Allemagne, dans le cadre de notre accompagnement.",
        de: "Wir helfen Ihnen, die nächsten Schritte zu antizipieren und Ihre Ankunft in Deutschland vorzubereiten, im Rahmen unserer Begleitung.",
        en: "We help you anticipate the next steps and prepare your arrival in Germany, as part of our support.",
      },
    },
  ] as { title: LT; body: LT }[],

  // SECTION 04 — ÉVALUATION
  evalKicker: { fr: "Commencez par votre profil", de: "Beginnen Sie mit Ihrem Profil", en: "Start with your profile" },
  evalTitle: {
    fr: "Chaque projet est différent. Votre parcours aussi.",
    de: "Jedes Projekt ist anders. Ihr Weg auch.",
    en: "Every project is different. So is your path.",
  },
  evalText1: {
    fr: "Votre niveau d'allemand, vos qualifications, votre expérience et votre objectif permettent de déterminer les possibilités à examiner.",
    de: "Ihr Deutschniveau, Ihre Qualifikationen, Ihre Erfahrung und Ihr Ziel helfen, die zu prüfenden Möglichkeiten zu bestimmen.",
    en: "Your level of German, your qualifications, your experience and your goal help determine the possibilities to examine.",
  },
  evalText2: {
    fr: "Répondez à quelques questions pour nous aider à mieux comprendre votre situation et à vous orienter vers les prochaines étapes.",
    de: "Beantworten Sie einige Fragen, damit wir Ihre Situation besser verstehen und Sie zu den nächsten Schritten orientieren können.",
    en: "Answer a few questions to help us better understand your situation and guide you toward the next steps.",
  },
  evalCta: { fr: "Évaluer mon profil", de: "Mein Profil einschätzen", en: "Assess my profile" },
  evalDisclaimer: {
    fr: "L'évaluation est une première orientation. Elle ne garantit ni admission, ni emploi, ni visa.",
    de: "Die Einschätzung ist eine erste Orientierung. Sie garantiert weder Zulassung noch Beschäftigung noch Visum.",
    en: "The assessment is an initial orientation. It guarantees neither admission, employment nor a visa.",
  },

  // SECTION 05 — CTA FINAL
  finalKicker: {
    fr: "L'allemand, la clé de votre projet",
    de: "Deutsch, der Schlüssel zu Ihrem Projekt",
    en: "German, the key to your project",
  },
  finalTitle: {
    fr: "Un bon niveau d'allemand ouvre les portes de votre carrière.",
    de: "Gute Deutschkenntnisse öffnen die Türen zu Ihrer Karriere.",
    en: "A good level of German opens the doors to your career.",
  },
  finalText: {
    fr: "Que vous visiez une Ausbildung, un emploi qualifié ou la Chancenkarte, la langue est déterminante. Découvrez nos parcours d'allemand adaptés à votre objectif, du niveau débutant jusqu'au niveau professionnel.",
    de: "Ob Ausbildung, qualifizierte Beschäftigung oder Chancenkarte, die Sprache ist entscheidend. Entdecken Sie unsere Deutschkurse, die auf Ihr Ziel abgestimmt sind, vom Anfänger- bis zum Berufsniveau.",
    en: "Whether you aim for an Ausbildung, skilled employment or the Chancenkarte, language is decisive. Discover our German courses tailored to your goal, from beginner to professional level.",
  },
  finalCtaPrimary: { fr: "Découvrir nos cours d'allemand", de: "Unsere Deutschkurse entdecken", en: "Discover our German courses" },
  finalCtaSecondary: { fr: "Tester mon niveau", de: "Mein Niveau testen", en: "Test my level" },
};
