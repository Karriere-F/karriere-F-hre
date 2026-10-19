import type { LocalizedText } from "./localized";

// Condensed, commercial orientation page /entreprises. Presents and routes to the
// specialised pages (Fachkräfte, Ausbildung, Méthode, Secteurs) and the request form.
// Hedged legal wording; no fabricated figures, testimonials or client logos.
type LT = LocalizedText;

export const ENT_MAIN: {
  heroKicker: LT;
  heroTitle: LT;
  heroIntro1: LT;
  heroIntro2: LT;
  heroCtaPrimary: LT;
  heroCtaSecondary: LT;
  heroReperes: LT[];

  solKicker: LT;
  solTitle: LT;
  solLead: LT;
  fachTitle: LT;
  fachQuestion: LT;
  fachBody: LT;
  fachCta: LT;
  ausTitle: LT;
  ausQuestion: LT;
  ausBody: LT;
  ausCta: LT;

  whyKicker: LT;
  whyTitle: LT;
  whyIntro: LT;
  whyPoints: { title: LT; body: LT }[];
  whyCta: LT;

  methodKicker: LT;
  methodTitle: LT;
  methodSteps: { label: LT; body: LT }[];
  methodCta: LT;

  secKicker: LT;
  secTitle: LT;
  sectors: LT[];
  secNote: LT;
  secCta: LT;

  frameKicker: LT;
  frameTitle: LT;
  frameText1: LT;
  frameText2: LT;
  frameCta: LT;

  finalKicker: LT;
  finalTitle: LT;
  finalText: LT;
  finalCtaPrimary: LT;
  finalCtaSecondary: LT;
} = {
  heroKicker: {
    fr: "Recrutement international · Allemagne",
    de: "Internationale Rekrutierung · Deutschland",
    en: "International recruitment · Germany",
  },
  heroTitle: {
    fr: "Des talents internationaux, préparés pour votre entreprise.",
    de: "Internationale Talente, vorbereitet für Ihr Unternehmen.",
    en: "International talent, prepared for your company.",
  },
  heroIntro1: {
    fr: "Karriere Fähre accompagne les entreprises allemandes dans la recherche et la préparation de candidats qualifiés au Cameroun et, selon les besoins, dans d'autres pays d'Afrique centrale.",
    de: "Karriere Fähre begleitet deutsche Unternehmen bei der Suche und Vorbereitung qualifizierter Kandidaten in Kamerun und je nach Bedarf, in weiteren Ländern Zentralafrikas.",
    en: "Karriere Fähre supports German companies in sourcing and preparing qualified candidates in Cameroon and, depending on needs, in other countries of Central Africa.",
  },
  heroIntro2: {
    fr: "Nous combinons présélection, préparation linguistique et professionnelle, coaching et accompagnement des démarches convenues pour construire un processus adapté à votre besoin.",
    de: "Wir verbinden Vorauswahl, sprachliche und berufliche Vorbereitung, Coaching und Begleitung der vereinbarten Schritte zu einem auf Ihren Bedarf zugeschnittenen Prozess.",
    en: "We combine pre-selection, language and professional preparation, coaching and support with the agreed steps to build a process tailored to your need.",
  },
  heroCtaPrimary: { fr: "Décrire mon besoin de recrutement", de: "Meinen Personalbedarf beschreiben", en: "Describe my recruitment need" },
  heroCtaSecondary: { fr: "Découvrir nos solutions", de: "Unsere Lösungen entdecken", en: "Discover our solutions" },
  heroReperes: [
    { fr: "Fachkräfte", de: "Fachkräfte", en: "Fachkräfte" },
    { fr: "Ausbildung", de: "Ausbildung", en: "Ausbildung" },
    { fr: "Deutsch & Fachsprache", de: "Deutsch & Fachsprache", en: "Deutsch & Fachsprache" },
    { fr: "Intégration", de: "Integration", en: "Integration" },
  ],

  solKicker: { fr: "Votre besoin", de: "Ihr Bedarf", en: "Your need" },
  solTitle: {
    fr: "Quelle solution de recrutement convient à votre entreprise ?",
    de: "Welche Rekrutierungslösung passt zu Ihrem Unternehmen?",
    en: "Which recruitment solution fits your company?",
  },
  solLead: {
    fr: "Deux parcours, selon que vous recherchez des professionnels déjà qualifiés ou que vous souhaitez offrir une Ausbildung à de futurs talents.",
    de: "Zwei Wege, je nachdem, ob Sie bereits qualifizierte Fachkräfte suchen oder Talenten eine Ausbildung ermöglichen möchten.",
    en: "Two paths, depending on whether you seek already qualified skilled workers or want to offer talents an Ausbildung.",
  },
  fachTitle: { fr: "Recruter des professionnels qualifiés", de: "Qualifizierte Fachkräfte einstellen", en: "Recruit qualified professionals" },
  fachQuestion: {
    fr: "Vous recherchez des collaborateurs qualifiés, avec les compétences et l'expérience adaptées à votre entreprise ?",
    de: "Sie suchen qualifizierte Mitarbeiter mit den passenden Kompetenzen und Erfahrungen für Ihr Unternehmen?",
    en: "Looking for qualified staff with the right skills and experience for your company?",
  },
  fachBody: {
    fr: "Nous identifions des candidats adaptés, correspondant à vos exigences, et les préparons spécifiquement à votre processus de candidature et de recrutement.",
    de: "Wir identifizieren geeignete Kandidaten, die Ihren Anforderungen entsprechen, und bereiten sie gezielt auf Ihren Bewerbungs- und Einstellungsprozess vor.",
    en: "We identify suitable candidates matching your requirements and prepare them specifically for your application and hiring process.",
  },
  fachCta: { fr: "Découvrir le recrutement de Fachkräfte", de: "Fachkräfte-Rekrutierung entdecken", en: "Discover Fachkräfte recruitment" },
  ausTitle: { fr: "Recruter vos futurs Azubis", de: "Ihre künftigen Azubis gewinnen", en: "Recruit your future Azubis" },
  ausQuestion: {
    fr: "Vous souhaitez attirer des apprentis motivés et les former durablement dans votre entreprise ?",
    de: "Sie möchten motivierte Auszubildende gewinnen und langfristig in Ihrem Unternehmen ausbilden?",
    en: "Want to attract motivated apprentices and train them long-term in your company?",
  },
  ausBody: {
    fr: "Nous vous accompagnons de la recherche de candidats adaptés à la préparation linguistique, jusqu'à la réussite du pourvoi de vos places d'Ausbildung.",
    de: "Wir begleiten Sie von der Suche nach geeigneten Kandidaten über die sprachliche Vorbereitung bis hin zur erfolgreichen Besetzung Ihrer Ausbildungsplätze.",
    en: "We support you from sourcing suitable candidates through language preparation to successfully filling your Ausbildung places.",
  },
  ausCta: { fr: "Découvrir le recrutement d'Azubis", de: "Azubi-Rekrutierung entdecken", en: "Discover Azubi recruitment" },

  whyKicker: { fr: "Pourquoi Karriere Fähre ?", de: "Warum Karriere Fähre?", en: "Why Karriere Fähre?" },
  whyTitle: { fr: "La préparation commence avant la candidature.", de: "Die Vorbereitung beginnt vor der Bewerbung.", en: "Preparation begins before the application." },
  whyIntro: {
    fr: "Un bon recrutement ne repose pas uniquement sur un CV. Le profil doit correspondre à votre besoin et le candidat doit être préparé aux exigences linguistiques, professionnelles et relationnelles du poste.",
    de: "Eine gute Einstellung beruht nicht nur auf einem Lebenslauf. Das Profil muss zu Ihrem Bedarf passen, und der Kandidat muss auf die sprachlichen, beruflichen und zwischenmenschlichen Anforderungen der Stelle vorbereitet sein.",
    en: "Good recruitment does not rest on a CV alone. The profile must match your need and the candidate must be prepared for the language, professional and interpersonal requirements of the role.",
  },
  whyPoints: [
    {
      title: { fr: "Une présélection ciblée", de: "Eine gezielte Vorauswahl", en: "Targeted pre-selection" },
      body: {
        fr: "Nous recherchons des candidats adaptés selon les critères que vous définissez.",
        de: "Wir suchen passende Kandidaten anhand Ihrer vorgegebenen Kriterien.",
        en: "We search for suitable candidates based on the criteria you set.",
      },
    },
    {
      title: { fr: "Un allemand orienté métier", de: "Berufsorientiertes Deutsch", en: "Job-focused German" },
      body: {
        fr: "Nous travaillons de manière ciblée le Sprechen, la Fachsprache et le vocabulaire professionnel, adaptés à votre besoin spécifique.",
        de: "Wir trainieren gezielt das Sprechen, die Fachsprache und den beruflichen Wortschatz, abgestimmt auf Ihren individuellen Bedarf.",
        en: "We train speaking, Fachsprache and professional vocabulary in a targeted way, tailored to your specific need.",
      },
    },
    {
      title: { fr: "La rencontre personnelle", de: "Das persönliche Kennenlernen", en: "A personal meeting" },
      body: {
        fr: "Vous avez la possibilité de vérifier vous-même le niveau et la motivation des candidats lors d'un entretien vidéo en direct.",
        de: "Sie haben die Möglichkeit, den Wissensstand und die Motivation der Kandidaten in einem Live-Videogespräch selbst zu überprüfen.",
        en: "You can check candidates' knowledge level and motivation yourself in a live video interview.",
      },
    },
    {
      title: { fr: "Un accompagnement coordonné", de: "Eine koordinierte Begleitung", en: "Coordinated support" },
      body: {
        fr: "Nous vous accompagnons de façon fiable à travers toutes les étapes, de la préparation des candidats aux formalités administratives jusqu'à une intégration réussie.",
        de: "Wir begleiten Sie zuverlässig durch alle Phasen von der Vorbereitung der Kandidaten über die behördlichen Formalitäten bis hin zur erfolgreichen Integration.",
        en: "We support you reliably through every phase, from preparing the candidates to the administrative formalities and a successful integration.",
      },
    },
  ],
  whyCta: { fr: "Comprendre notre méthode", de: "Unsere Methode verstehen", en: "Understand our method" },

  methodKicker: { fr: "Un processus structuré", de: "Ein strukturierter Prozess", en: "A structured process" },
  methodTitle: { fr: "De votre besoin à l'arrivée du candidat.", de: "Von Ihrem Bedarf bis zur Ankunft des Kandidaten.", en: "From your need to the candidate's arrival." },
  methodSteps: [
    {
      label: { fr: "Besoin", de: "Bedarf", en: "Need" },
      body: { fr: "Définition du poste, des compétences et du calendrier.", de: "Definition der Stelle, der Kompetenzen und des Zeitplans.", en: "Defining the role, skills and timeline." },
    },
    {
      label: { fr: "Sélection", de: "Auswahl", en: "Selection" },
      body: { fr: "Recherche et présélection des profils.", de: "Suche und Vorauswahl der Profile.", en: "Sourcing and pre-selecting profiles." },
    },
    {
      label: { fr: "Préparation", de: "Vorbereitung", en: "Preparation" },
      body: { fr: "Allemand, Fachsprache et coaching selon le besoin.", de: "Deutsch, Fachsprache und Coaching je nach Bedarf.", en: "German, Fachsprache and coaching as needed." },
    },
    {
      label: { fr: "Entretien", de: "Gespräch", en: "Interview" },
      body: { fr: "Rencontre avec les candidats et décision de l'employeur.", de: "Treffen mit den Kandidaten und Entscheidung des Arbeitgebers.", en: "Meeting the candidates and the employer's decision." },
    },
    {
      label: { fr: "Démarches", de: "Formalitäten", en: "Formalities" },
      body: { fr: "Préparation et coordination des formalités applicables.", de: "Vorbereitung und Koordination der geltenden Formalitäten.", en: "Preparing and coordinating the applicable formalities." },
    },
    {
      label: { fr: "Intégration", de: "Integration", en: "Integration" },
      body: { fr: "Préparation de l'arrivée et accompagnement convenu.", de: "Vorbereitung der Ankunft und vereinbarte Begleitung.", en: "Preparing arrival and the agreed support." },
    },
  ],
  methodCta: { fr: "Voir les six étapes en détail", de: "Die sechs Schritte im Detail ansehen", en: "See the six steps in detail" },

  secKicker: { fr: "Votre activité", de: "Ihre Tätigkeit", en: "Your activity" },
  secTitle: { fr: "Des solutions adaptées à votre secteur.", de: "Auf Ihre Branche abgestimmte Lösungen.", en: "Solutions tailored to your sector." },
  sectors: [
    { fr: "Santé et soins", de: "Gesundheit und Pflege", en: "Health and care" },
    { fr: "Industrie et technique", de: "Industrie und Technik", en: "Industry and technical" },
    { fr: "BTP et artisanat", de: "Bau und Handwerk", en: "Construction and crafts" },
    { fr: "Logistique et transport", de: "Logistik und Transport", en: "Logistics and transport" },
    { fr: "Hôtellerie et restauration", de: "Hotellerie und Gastronomie", en: "Hospitality and catering" },
    { fr: "IT et métiers spécialisés", de: "IT und Spezialberufe", en: "IT and specialised trades" },
  ],
  secNote: {
    fr: "Nous étudions chaque demande selon les compétences recherchées, la disponibilité des candidats et les exigences du métier.",
    de: "Wir prüfen jede Anfrage nach den gesuchten Kompetenzen, der Verfügbarkeit der Kandidaten und den Anforderungen des Berufs.",
    en: "We study each request based on the skills sought, candidate availability and the requirements of the profession.",
  },
  secCta: { fr: "Explorer nos secteurs", de: "Unsere Branchen erkunden", en: "Explore our sectors" },

  frameKicker: { fr: "Transparence & conformité", de: "Transparenz & Konformität", en: "Transparency & compliance" },
  frameTitle: {
    fr: "Chaque recrutement suit le parcours adapté à sa situation.",
    de: "Jede Einstellung folgt dem zu ihrer Situation passenden Weg.",
    en: "Each recruitment follows the path suited to its situation.",
  },
  frameText1: {
    fr: "Reconnaissance des qualifications, visa, formation professionnelle et intégration : les démarches dépendent du candidat, du poste et du cadre légal applicable.",
    de: "Anerkennung der Qualifikationen, Visum, Berufsausbildung und Integration: Die Schritte hängen vom Kandidaten, von der Stelle und vom geltenden rechtlichen Rahmen ab.",
    en: "Recognition of qualifications, visa, vocational training and integration: the steps depend on the candidate, the position and the applicable legal framework.",
  },
  frameText2: {
    fr: "Nous vous aidons à préparer les étapes prévues dans notre mission. Les décisions de recrutement appartiennent à votre entreprise ; les décisions de reconnaissance et de séjour relèvent des organismes et autorités compétents.",
    de: "Wir helfen Ihnen, die im Auftrag vorgesehenen Schritte vorzubereiten. Die Einstellungsentscheidungen liegen bei Ihrem Unternehmen; die Entscheidungen über Anerkennung und Aufenthalt bei den zuständigen Stellen und Behörden.",
    en: "We help you prepare the steps provided for in our assignment. Hiring decisions rest with your company; recognition and residence decisions rest with the competent bodies and authorities.",
  },
  frameCta: { fr: "Comprendre les démarches", de: "Die Schritte verstehen", en: "Understand the steps" },

  finalKicker: { fr: "Parlons de votre besoin", de: "Sprechen wir über Ihren Bedarf", en: "Let's talk about your need" },
  finalTitle: { fr: "Quel poste souhaitez-vous pourvoir ?", de: "Welche Stelle möchten Sie besetzen?", en: "Which position do you want to fill?" },
  finalText: {
    fr: "Présentez-nous votre besoin en personnel ou vos places d'Ausbildung. Nous pourrons examiner ensemble les profils recherchés, les exigences linguistiques et les prochaines étapes.",
    de: "Stellen Sie uns Ihren Personalbedarf oder Ihre Ausbildungsplätze vor. Wir können gemeinsam die gesuchten Profile, die sprachlichen Anforderungen und die nächsten Schritte prüfen.",
    en: "Tell us about your staffing need or your Ausbildung places. We can review together the profiles sought, the language requirements and the next steps.",
  },
  finalCtaPrimary: { fr: "Décrire mon besoin de recrutement", de: "Meinen Personalbedarf beschreiben", en: "Describe my recruitment need" },
  finalCtaSecondary: { fr: "Nous contacter", de: "Kontakt aufnehmen", en: "Contact us" },
};
