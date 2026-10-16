import type { LocalizedText } from "./localized";

// Content for /candidats/reconnaissance-diplomes. Trilingual, factual: no invented
// durations (only the widely-known "several months"), and a clear disclaimer that the
// equivalence decision belongs to the competent German authority, not to us.
type LT = LocalizedText;

export const RECONNAISSANCE_PAGE: {
  heroKicker: LT;
  heroTitle: LT;
  heroSubtitle: LT;
  whyTitle: LT;
  whyParas: LT[];
  stepsTitle: LT;
  stepsIntro: LT;
  stepsLead: LT;
  steps: { num: string; label: LT; body: LT }[];
  earlyTitle: LT;
  earlyPara1: LT;
  earlyPara2: LT;
  flow: LT[];
  roleTitle: LT;
  roleText: LT;
  finalTitle: LT;
  finalText: LT;
  ctaEvaluer: LT;
  ctaContact: LT;
} = {
  heroKicker: {
    fr: "Reconnaissance des diplômes",
    de: "Anerkennung von Abschlüssen",
    en: "Recognition of qualifications",
  },
  heroTitle: {
    fr: "Votre diplôme peut ouvrir une porte.",
    de: "Ihr Abschluss kann eine Tür öffnen.",
    en: "Your qualification can open a door.",
  },
  heroSubtitle: {
    fr: "La reconnaissance permet de savoir dans quelles conditions vous pouvez exercer votre métier en Allemagne.",
    de: "Die Anerkennung zeigt, unter welchen Bedingungen Sie Ihren Beruf in Deutschland ausüben können.",
    en: "Recognition tells you under what conditions you can practise your profession in Germany.",
  },

  whyTitle: {
    fr: "Pourquoi la reconnaissance est importante",
    de: "Warum die Anerkennung wichtig ist",
    en: "Why recognition matters",
  },
  whyParas: [
    {
      fr: "En Allemagne, les conditions d'exercice dépendent de votre profession, de votre qualification et de votre situation.",
      de: "In Deutschland hängen die Bedingungen für die Berufsausübung von Ihrem Beruf, Ihrer Qualifikation und Ihrer Situation ab.",
      en: "In Germany, the conditions to practise depend on your profession, your qualification and your situation.",
    },
    {
      fr: "Pour de nombreux métiers réglementés, notamment dans le secteur de la santé, une procédure de reconnaissance de la qualification étrangère est nécessaire avant de pouvoir exercer pleinement la profession.",
      de: "Für viele reglementierte Berufe, insbesondere im Gesundheitswesen, ist vor der vollständigen Berufsausübung ein Verfahren zur Anerkennung der ausländischen Qualifikation erforderlich.",
      en: "For many regulated professions, especially in healthcare, a procedure to recognise the foreign qualification is required before you can fully practise.",
    },
    {
      fr: "L'autorité compétente examine votre diplôme, votre formation, votre expérience professionnelle et les documents fournis afin de déterminer si votre qualification répond aux exigences allemandes.",
      de: "Die zuständige Stelle prüft Ihren Abschluss, Ihre Ausbildung, Ihre Berufserfahrung und die eingereichten Unterlagen, um festzustellen, ob Ihre Qualifikation den deutschen Anforderungen entspricht.",
      en: "The competent authority reviews your qualification, your training, your work experience and the documents provided to determine whether your qualification meets German requirements.",
    },
  ],

  stepsTitle: {
    fr: "Nous vous accompagnons dans la préparation",
    de: "Wir begleiten Sie bei der Vorbereitung",
    en: "We support you through the preparation",
  },
  stepsIntro: {
    fr: "Chez Karriere Fähre, nous vous aidons à structurer votre démarche dès le début de votre projet.",
    de: "Bei Karriere Fähre helfen wir Ihnen, Ihr Vorgehen von Beginn an zu strukturieren.",
    en: "At Karriere Fähre, we help you structure your approach from the very start of your project.",
  },
  stepsLead: {
    fr: "Notre accompagnement comprend :",
    de: "Unsere Begleitung umfasst:",
    en: "Our support includes:",
  },
  steps: [
    {
      num: "01",
      label: { fr: "Identifier", de: "Identifizieren", en: "Identify" },
      body: {
        fr: "L'autorité compétente pour votre profession et votre Land de destination.",
        de: "Die für Ihren Beruf und Ihr Zielbundesland zuständige Stelle.",
        en: "The competent authority for your profession and your destination Land.",
      },
    },
    {
      num: "02",
      label: { fr: "Vérifier", de: "Prüfen", en: "Check" },
      body: {
        fr: "Les diplômes, attestations, justificatifs et traductions nécessaires à votre dossier.",
        de: "Die Abschlüsse, Bescheinigungen, Nachweise und Übersetzungen, die Ihr Antrag benötigt.",
        en: "The qualifications, certificates, supporting documents and translations your file needs.",
      },
    },
    {
      num: "03",
      label: { fr: "Préparer", de: "Vorbereiten", en: "Prepare" },
      body: {
        fr: "Votre dossier de reconnaissance de manière structurée, afin de limiter les erreurs et les demandes de pièces manquantes.",
        de: "Ihren Anerkennungsantrag strukturiert, um Fehler und Nachforderungen fehlender Unterlagen zu vermeiden.",
        en: "Your recognition file in a structured way, to limit mistakes and requests for missing documents.",
      },
    },
    {
      num: "04",
      label: { fr: "Anticiper", de: "Vorausdenken", en: "Anticipate" },
      body: {
        fr: "Les éventuelles mesures de compensation, périodes d'adaptation, examens ou formations complémentaires pouvant être demandés.",
        de: "Mögliche Ausgleichsmaßnahmen, Anpassungszeiträume, Prüfungen oder zusätzliche Schulungen, die verlangt werden können.",
        en: "Any compensation measures, adaptation periods, exams or additional training that may be required.",
      },
    },
  ],

  earlyTitle: {
    fr: "Pensez à la reconnaissance dès le début",
    de: "Denken Sie von Anfang an an die Anerkennung",
    en: "Think about recognition from the start",
  },
  earlyPara1: {
    fr: "Une procédure de reconnaissance peut prendre plusieurs mois. Sa durée dépend notamment de la profession, de l'autorité compétente et de la situation individuelle du candidat.",
    de: "Ein Anerkennungsverfahren kann mehrere Monate dauern. Die Dauer hängt vor allem vom Beruf, von der zuständigen Stelle und von der individuellen Situation ab.",
    en: "A recognition procedure can take several months. Its length depends notably on the profession, the competent authority and the applicant's individual situation.",
  },
  earlyPara2: {
    fr: "C'est pourquoi nous intégrons cette étape le plus tôt possible dans votre parcours. Cela permet de mieux coordonner :",
    de: "Deshalb binden wir diesen Schritt so früh wie möglich in Ihren Weg ein. So lassen sich die folgenden Etappen besser abstimmen:",
    en: "That is why we bring this step into your journey as early as possible. It makes the following stages easier to coordinate:",
  },
  flow: [
    { fr: "Reconnaissance", de: "Anerkennung", en: "Recognition" },
    { fr: "Emploi", de: "Anstellung", en: "Employment" },
    { fr: "Visa", de: "Visum", en: "Visa" },
    { fr: "Arrivée en Allemagne", de: "Ankunft in Deutschland", en: "Arrival in Germany" },
    { fr: "Intégration", de: "Integration", en: "Integration" },
  ],

  roleTitle: { fr: "Notre rôle", de: "Unsere Rolle", en: "Our role" },
  roleText: {
    fr: "Nous ne décidons pas de l'équivalence de votre diplôme. Cette décision appartient à l'autorité compétente en Allemagne. Notre rôle est de vous aider à identifier la bonne procédure, à préparer votre dossier et à anticiper les étapes de votre parcours.",
    de: "Wir entscheiden nicht über die Gleichwertigkeit Ihres Abschlusses. Diese Entscheidung liegt bei der zuständigen Stelle in Deutschland. Unsere Rolle ist es, Ihnen zu helfen, das richtige Verfahren zu finden, Ihren Antrag vorzubereiten und die Etappen Ihres Wegs vorauszudenken.",
    en: "We do not decide on the equivalence of your qualification. That decision belongs to the competent authority in Germany. Our role is to help you identify the right procedure, prepare your file and anticipate the stages of your journey.",
  },

  finalTitle: {
    fr: "Un dossier bien préparé, c'est du temps gagné.",
    de: "Ein gut vorbereiteter Antrag spart Zeit.",
    en: "A well-prepared file saves time.",
  },
  finalText: {
    fr: "Karriere Fähre vous accompagne de votre projet jusqu'à votre intégration en Allemagne.",
    de: "Karriere Fähre begleitet Sie von Ihrem Vorhaben bis zu Ihrer Integration in Deutschland.",
    en: "Karriere Fähre supports you from your project through to your integration in Germany.",
  },
  ctaEvaluer: { fr: "Évaluer mon profil", de: "Mein Profil bewerten", en: "Assess my profile" },
  ctaContact: {
    fr: "Parler à Karriere Fähre",
    de: "Mit Karriere Fähre sprechen",
    en: "Talk to Karriere Fähre",
  },
};
