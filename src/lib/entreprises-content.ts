import type { LocalizedText } from "./localized";

// Full content for /entreprises. Trilingual and factual. Language level, recognition,
// the accelerated procedure (§ 81a) and the Anerkennungspartnerschaft are all presented
// as conditional and decided by the competent authorities — never as automatic or
// universally available. No fabricated figures, testimonials or client logos.

type LT = LocalizedText;

export const ENTREPRISES_PAGE: {
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
  fachTag: LT;
  fachTitle: LT;
  fachQuestion: LT;
  fachBody: LT;
  fachItems: LT[];
  fachCta: LT;
  ausTag: LT;
  ausTitle: LT;
  ausQuestion: LT;
  ausBody: LT;
  ausItems: LT[];
  ausCta: LT;
  solNote: LT;

  whyKicker: LT;
  whyTitle: LT;
  whyIntro1: LT;
  whyIntro2: LT;
  whyPoints: { title: LT; body: LT }[];
  anchorTitle: LT;
  anchorText1: LT;
  anchorText2: LT;

  procKicker: LT;
  procTitle: LT;
  procSteps: { title: LT; body: LT }[];
  procCta: LT;

  secKicker: LT;
  secTitle: LT;
  secLead: LT;
  sectors: { label: LT; text: LT }[];
  secNote: LT;
  secCta: LT;

  legalKicker: LT;
  legalTitle: LT;
  legalIntro: LT;
  legalPillars: { title: LT; body: LT }[];
  legalNote: LT;
  legalCta: LT;

  collabKicker: LT;
  collabTitle: LT;
  kfLabel: LT;
  kfItems: LT[];
  employerLabel: LT;
  employerItems: LT[];
  engagements: { label: LT; text: LT }[];

  faqTitle: LT;
  faq: { q: LT; a: LT }[];

  contactKicker: LT;
  contactTitle: LT;
  contactText1: LT;
  contactText2: LT;
  contactNote: LT;
  form: {
    entreprise: LT;
    interlocuteur: LT;
    email: LT;
    telephone: LT;
    besoin: LT;
    besoinChoose: LT;
    besoinFach: LT;
    besoinAzubis: LT;
    besoinLesDeux: LT;
    besoinEtude: LT;
    secteur: LT;
    postes: LT;
    dateEntree: LT;
    message: LT;
    submit: LT;
    submitting: LT;
    required: LT;
    error: LT;
    successTitle: LT;
    successText: LT;
  };
} = {
  // SECTION 1 — HERO
  heroKicker: {
    fr: "Recrutement international · Allemagne",
    de: "Internationale Rekrutierung · Deutschland",
    en: "International recruitment · Germany",
  },
  heroTitle: {
    fr: "Recrutez des professionnels qualifiés. Préparez vos futurs Azubis.",
    de: "Rekrutieren Sie qualifizierte Fachkräfte. Bereiten Sie Ihre künftigen Azubis vor.",
    en: "Recruit qualified professionals. Prepare your future Azubis.",
  },
  heroIntro1: {
    fr: "Karriere Fähre accompagne les entreprises allemandes dans la recherche, la présélection et la préparation de candidats au Cameroun et, selon les besoins, dans d'autres pays d'Afrique centrale.",
    de: "Karriere Fähre begleitet deutsche Unternehmen bei der Suche, Vorauswahl und Vorbereitung von Kandidaten in Kamerun und, je nach Bedarf, in weiteren Ländern Zentralafrikas.",
    en: "Karriere Fähre supports German companies in sourcing, pre-selecting and preparing candidates in Cameroon and, depending on needs, in other countries of Central Africa.",
  },
  heroIntro2: {
    fr: "De la définition du profil à la préparation linguistique et professionnelle, jusqu'aux démarches convenues et à l'intégration, nous construisons avec vous un processus adapté à votre entreprise.",
    de: "Von der Profildefinition über die sprachliche und berufliche Vorbereitung bis zu den vereinbarten Schritten und der Integration bauen wir gemeinsam mit Ihnen einen auf Ihr Unternehmen zugeschnittenen Prozess auf.",
    en: "From defining the profile to language and professional preparation, through the agreed steps and integration, we build a process tailored to your company with you.",
  },
  heroCtaPrimary: {
    fr: "Parler de mon besoin de recrutement",
    de: "Über meinen Personalbedarf sprechen",
    en: "Discuss my recruitment need",
  },
  heroCtaSecondary: { fr: "Découvrir notre méthode", de: "Unsere Methode entdecken", en: "Discover our method" },
  heroReperes: [
    { fr: "Fachkräfte", de: "Fachkräfte", en: "Fachkräfte" },
    { fr: "Ausbildung", de: "Ausbildung", en: "Ausbildung" },
    { fr: "Deutsch & Fachsprache", de: "Deutsch & Fachsprache", en: "Deutsch & Fachsprache" },
    { fr: "Accompagnement des démarches", de: "Begleitung der Formalitäten", en: "Support with formalities" },
  ],

  // SECTION 2 — DEUX SOLUTIONS
  solKicker: { fr: "Votre besoin", de: "Ihr Bedarf", en: "Your need" },
  solTitle: {
    fr: "Recruter un professionnel ou former un apprenti ?",
    de: "Eine Fachkraft einstellen oder einen Auszubildenden ausbilden?",
    en: "Recruit a professional or train an apprentice?",
  },
  solLead: {
    fr: "Le bon parcours dépend du poste à pourvoir, des compétences recherchées et du temps dont vous disposez pour préparer votre recrutement.",
    de: "Der richtige Weg hängt von der zu besetzenden Stelle, den gesuchten Kompetenzen und der Zeit ab, die Ihnen für die Vorbereitung Ihrer Einstellung zur Verfügung steht.",
    en: "The right path depends on the position to fill, the skills sought and the time you have to prepare your recruitment.",
  },
  fachTag: { fr: "Fachkräfte", de: "Fachkräfte", en: "Fachkräfte" },
  fachTitle: {
    fr: "Recruter des professionnels qualifiés",
    de: "Qualifizierte Fachkräfte einstellen",
    en: "Recruit qualified professionals",
  },
  fachQuestion: {
    fr: "Vous recherchez un collaborateur déjà qualifié ou expérimenté pour renforcer votre équipe ?",
    de: "Suchen Sie eine bereits qualifizierte oder erfahrene Mitarbeiterin oder einen Mitarbeiter zur Verstärkung Ihres Teams?",
    en: "Looking for an already qualified or experienced employee to strengthen your team?",
  },
  fachBody: {
    fr: "Nous identifions des profils correspondant à vos critères et les préparons au processus de recrutement allemand. Notre accompagnement comprend notamment :",
    de: "Wir identifizieren Profile, die Ihren Kriterien entsprechen, und bereiten sie auf den deutschen Einstellungsprozess vor. Unsere Begleitung umfasst insbesondere:",
    en: "We identify profiles matching your criteria and prepare them for the German recruitment process. Our support includes in particular:",
  },
  fachItems: [
    { fr: "La recherche et la présélection des candidats.", de: "Die Suche und Vorauswahl der Kandidaten.", en: "Sourcing and pre-selecting candidates." },
    {
      fr: "L'examen préliminaire de leur parcours et de leurs documents.",
      de: "Die vorläufige Prüfung ihres Werdegangs und ihrer Unterlagen.",
      en: "A preliminary review of their background and documents.",
    },
    {
      fr: "La préparation linguistique et le vocabulaire professionnel, selon les besoins.",
      de: "Die sprachliche Vorbereitung und den beruflichen Wortschatz, je nach Bedarf.",
      en: "Language preparation and professional vocabulary, as needed.",
    },
    {
      fr: "Le coaching et la préparation aux entretiens.",
      de: "Das Coaching und die Vorbereitung auf Gespräche.",
      en: "Coaching and interview preparation.",
    },
    {
      fr: "L'accompagnement dans les démarches de reconnaissance et de séjour applicables.",
      de: "Die Begleitung bei den anwendbaren Anerkennungs- und Aufenthaltsverfahren.",
      en: "Support with the applicable recognition and residence procedures.",
    },
  ],
  fachCta: { fr: "Recruter une Fachkraft", de: "Eine Fachkraft einstellen", en: "Recruit a Fachkraft" },
  ausTag: { fr: "Ausbildung", de: "Ausbildung", en: "Ausbildung" },
  ausTitle: { fr: "Recruter vos futurs Azubis", de: "Ihre künftigen Azubis gewinnen", en: "Recruit your future Azubis" },
  ausQuestion: {
    fr: "Vous disposez de places d'Ausbildung et souhaitez accueillir de jeunes candidats internationaux motivés ?",
    de: "Sie haben Ausbildungsplätze und möchten motivierte junge internationale Kandidaten aufnehmen?",
    en: "You have Ausbildung places and want to welcome motivated young international candidates?",
  },
  ausBody: {
    fr: "Nous vous accompagnons dans la recherche de profils adaptés, leur préparation linguistique et leur candidature auprès de votre entreprise. Notre accompagnement comprend notamment :",
    de: "Wir begleiten Sie bei der Suche nach passenden Profilen, ihrer sprachlichen Vorbereitung und ihrer Bewerbung bei Ihrem Unternehmen. Unsere Begleitung umfasst insbesondere:",
    en: "We support you in finding suitable profiles, their language preparation and their application to your company. Our support includes in particular:",
  },
  ausItems: [
    {
      fr: "L'analyse du parcours scolaire et de la motivation.",
      de: "Die Analyse des schulischen Werdegangs und der Motivation.",
      en: "Reviewing the school background and motivation.",
    },
    { fr: "La présélection selon vos critères.", de: "Die Vorauswahl nach Ihren Kriterien.", en: "Pre-selection according to your criteria." },
    {
      fr: "La formation en allemand et la préparation aux exigences de l'Ausbildung.",
      de: "Die Deutschausbildung und die Vorbereitung auf die Anforderungen der Ausbildung.",
      en: "German training and preparation for the requirements of the Ausbildung.",
    },
    {
      fr: "La préparation aux entretiens avec votre entreprise.",
      de: "Die Vorbereitung auf die Gespräche mit Ihrem Unternehmen.",
      en: "Preparation for interviews with your company.",
    },
    {
      fr: "L'accompagnement des démarches administratives et de l'arrivée, selon le parcours convenu.",
      de: "Die Begleitung der behördlichen Schritte und der Ankunft, gemäß dem vereinbarten Weg.",
      en: "Support with administrative steps and arrival, according to the agreed path.",
    },
  ],
  ausCta: { fr: "Recruter des Azubis", de: "Azubis gewinnen", en: "Recruit Azubis" },
  solNote: {
    fr: "Dans les deux cas, vous conservez la décision finale de recrutement. Les possibilités dépendent du profil, du métier et des conditions applicables.",
    de: "In beiden Fällen behalten Sie die endgültige Einstellungsentscheidung. Die Möglichkeiten hängen vom Profil, vom Beruf und von den geltenden Bedingungen ab.",
    en: "In both cases, you keep the final hiring decision. The possibilities depend on the profile, the profession and the applicable conditions.",
  },

  // SECTION 3 — POURQUOI
  whyKicker: { fr: "Notre différence", de: "Unser Unterschied", en: "Our difference" },
  whyTitle: {
    fr: "Le travail de préparation commence avant le recrutement.",
    de: "Die Vorbereitungsarbeit beginnt vor der Einstellung.",
    en: "The preparation work begins before recruitment.",
  },
  whyIntro1: {
    fr: "Transmettre un CV ne suffit pas. Le candidat doit correspondre à votre besoin, comprendre les exigences du poste et pouvoir communiquer dans son futur environnement professionnel.",
    de: "Einen Lebenslauf weiterzuleiten genügt nicht. Die Kandidatin oder der Kandidat muss zu Ihrem Bedarf passen, die Anforderungen der Stelle verstehen und im künftigen beruflichen Umfeld kommunizieren können.",
    en: "Forwarding a CV is not enough. The candidate must match your need, understand the requirements of the role and be able to communicate in their future work environment.",
  },
  whyIntro2: {
    fr: "Karriere Fähre intervient en amont pour structurer cette préparation.",
    de: "Karriere Fähre setzt im Vorfeld an, um diese Vorbereitung zu strukturieren.",
    en: "Karriere Fähre steps in upstream to structure this preparation.",
  },
  whyPoints: [
    {
      title: { fr: "Une présélection ciblée", de: "Eine gezielte Vorauswahl", en: "Targeted pre-selection" },
      body: {
        fr: "Nous partons de vos critères : qualification, expérience, compétences, motivation, langue et calendrier de recrutement.",
        de: "Wir gehen von Ihren Kriterien aus: Qualifikation, Erfahrung, Kompetenzen, Motivation, Sprache und Einstellungszeitplan.",
        en: "We start from your criteria: qualification, experience, skills, motivation, language and recruitment timeline.",
      },
    },
    {
      title: { fr: "Un allemand orienté métier", de: "Berufsorientiertes Deutsch", en: "Job-focused German" },
      body: {
        fr: "Nos cours et préparations accordent une place importante au Sprechen, à la Fachsprache, au vocabulaire métier et à la communication professionnelle.",
        de: "Unsere Kurse und Vorbereitungen räumen dem Sprechen, der Fachsprache, dem Fachwortschatz und der beruflichen Kommunikation einen wichtigen Platz ein.",
        en: "Our courses and preparation give an important place to Sprechen, Fachsprache, occupational vocabulary and professional communication.",
      },
    },
    {
      title: { fr: "Des candidats préparés aux entretiens", de: "Auf Gespräche vorbereitete Kandidaten", en: "Candidates prepared for interviews" },
      body: {
        fr: "Le coaching et les simulations permettent aux candidats de travailler leur présentation, leurs réponses et leur capacité à communiquer spontanément.",
        de: "Coaching und Simulationen ermöglichen den Kandidaten, ihre Selbstvorstellung, ihre Antworten und ihre Fähigkeit zur spontanen Kommunikation zu üben.",
        en: "Coaching and simulations let candidates work on their presentation, their answers and their ability to communicate spontaneously.",
      },
    },
    {
      title: { fr: "Un interlocuteur pour coordonner les étapes", de: "Ein Ansprechpartner zur Koordination der Schritte", en: "One contact to coordinate the steps" },
      body: {
        fr: "Nous vous accompagnons dans la préparation des dossiers et la coordination des démarches convenues, en tenant compte du parcours administratif applicable.",
        de: "Wir begleiten Sie bei der Vorbereitung der Unterlagen und der Koordination der vereinbarten Schritte unter Berücksichtigung des anwendbaren Verwaltungswegs.",
        en: "We support you in preparing the files and coordinating the agreed steps, taking into account the applicable administrative path.",
      },
    },
  ],
  anchorTitle: { fr: "Notre ancrage en Afrique centrale", de: "Unsere Verankerung in Zentralafrika", en: "Our roots in Central Africa" },
  anchorText1: {
    fr: "Basés au Cameroun, nous travaillons au contact des candidats pendant les étapes de sélection et de préparation. Cette proximité facilite les échanges, le suivi des dossiers et la compréhension du parcours de chaque candidat.",
    de: "Mit Sitz in Kamerun arbeiten wir während der Auswahl- und Vorbereitungsphasen in direktem Kontakt mit den Kandidaten. Diese Nähe erleichtert den Austausch, die Begleitung der Dossiers und das Verständnis des Werdegangs jeder Kandidatin und jedes Kandidaten.",
    en: "Based in Cameroon, we work in direct contact with candidates during the selection and preparation stages. This proximity makes exchanges, file follow-up and understanding each candidate's background easier.",
  },
  anchorText2: {
    fr: "Notre priorité reste la correspondance entre votre besoin réel et le profil présenté.",
    de: "Unsere Priorität bleibt die Übereinstimmung zwischen Ihrem tatsächlichen Bedarf und dem vorgestellten Profil.",
    en: "Our priority remains the match between your real need and the profile presented.",
  },

  // SECTION 4 — PROCESSUS
  procKicker: {
    fr: "De la définition du besoin à l'intégration",
    de: "Von der Bedarfsdefinition bis zur Integration",
    en: "From defining the need to integration",
  },
  procTitle: {
    fr: "Six étapes pour organiser votre recrutement international.",
    de: "Sechs Schritte, um Ihre internationale Rekrutierung zu organisieren.",
    en: "Six steps to organise your international recruitment.",
  },
  procSteps: [
    {
      title: { fr: "Définir votre besoin", de: "Ihren Bedarf definieren", en: "Define your need" },
      body: {
        fr: "Nous échangeons sur le poste ou l'Ausbildungsplatz, les qualifications requises, l'expérience, le niveau d'allemand, les conditions proposées et la date d'entrée souhaitée.",
        de: "Wir sprechen über die Stelle oder den Ausbildungsplatz, die erforderlichen Qualifikationen, die Erfahrung, das Deutschniveau, die angebotenen Bedingungen und den gewünschten Eintrittstermin.",
        en: "We discuss the position or Ausbildungsplatz, the required qualifications, experience, level of German, the conditions offered and the desired start date.",
      },
    },
    {
      title: { fr: "Identifier les profils adaptés", de: "Passende Profile identifizieren", en: "Identify suitable profiles" },
      body: {
        fr: "Nous recherchons des candidats correspondant aux critères définis ensemble.",
        de: "Wir suchen Kandidaten, die den gemeinsam definierten Kriterien entsprechen.",
        en: "We search for candidates matching the criteria defined together.",
      },
    },
    {
      title: { fr: "Présélectionner et examiner les dossiers", de: "Vorauswahl treffen und Dossiers prüfen", en: "Pre-select and review files" },
      body: {
        fr: "Nous évaluons la cohérence du parcours, les documents disponibles, la motivation et les compétences linguistiques.",
        de: "Wir bewerten die Stimmigkeit des Werdegangs, die verfügbaren Unterlagen, die Motivation und die Sprachkenntnisse.",
        en: "We assess the consistency of the background, the available documents, motivation and language skills.",
      },
    },
    {
      title: { fr: "Préparer les candidats", de: "Die Kandidaten vorbereiten", en: "Prepare the candidates" },
      body: {
        fr: "Selon le profil et le projet, la préparation comprend l'allemand, la Fachsprache, des simulations professionnelles et le coaching aux entretiens.",
        de: "Je nach Profil und Projekt umfasst die Vorbereitung Deutsch, Fachsprache, berufliche Simulationen und Gesprächscoaching.",
        en: "Depending on the profile and project, preparation includes German, Fachsprache, professional simulations and interview coaching.",
      },
    },
    {
      title: { fr: "Organiser les entretiens et votre décision", de: "Gespräche und Ihre Entscheidung organisieren", en: "Organise interviews and your decision" },
      body: {
        fr: "Nous vous présentons les profils retenus et coordonnons les échanges. Vous rencontrez les candidats et choisissez celui ou ceux que vous souhaitez recruter.",
        de: "Wir stellen Ihnen die ausgewählten Profile vor und koordinieren den Austausch. Sie treffen die Kandidaten und wählen aus, wen Sie einstellen möchten.",
        en: "We present the shortlisted profiles and coordinate the exchanges. You meet the candidates and choose whom you wish to recruit.",
      },
    },
    {
      title: { fr: "Coordonner les démarches et préparer l'arrivée", de: "Die Schritte koordinieren und die Ankunft vorbereiten", en: "Coordinate the steps and prepare arrival" },
      body: {
        fr: "Après votre décision, nous accompagnons les étapes convenues concernant les documents, la reconnaissance éventuelle, le visa et la préparation à l'arrivée. L'intégration est préparée avec vous selon le périmètre de la mission.",
        de: "Nach Ihrer Entscheidung begleiten wir die vereinbarten Schritte zu den Unterlagen, einer etwaigen Anerkennung, dem Visum und der Vorbereitung der Ankunft. Die Integration wird gemäß dem Umfang des Auftrags mit Ihnen vorbereitet.",
        en: "After your decision, we support the agreed steps regarding documents, possible recognition, the visa and arrival preparation. Integration is prepared with you according to the scope of the assignment.",
      },
    },
  ],
  procCta: {
    fr: "Discuter de mon processus de recrutement",
    de: "Über meinen Rekrutierungsprozess sprechen",
    en: "Discuss my recruitment process",
  },

  // SECTION 5 — SECTEURS
  secKicker: { fr: "Votre secteur", de: "Ihre Branche", en: "Your sector" },
  secTitle: {
    fr: "Une recherche adaptée à votre activité.",
    de: "Eine auf Ihre Tätigkeit abgestimmte Suche.",
    en: "A search tailored to your activity.",
  },
  secLead: {
    fr: "Les qualifications recherchées, le vocabulaire professionnel et les exigences linguistiques varient selon les métiers. Nous définissons donc les critères de recherche à partir du poste et des possibilités de recrutement.",
    de: "Die gesuchten Qualifikationen, der berufliche Wortschatz und die sprachlichen Anforderungen variieren je nach Beruf. Wir definieren die Suchkriterien daher ausgehend von der Stelle und den Rekrutierungsmöglichkeiten.",
    en: "The qualifications sought, professional vocabulary and language requirements vary by profession. We therefore define the search criteria based on the position and recruitment possibilities.",
  },
  sectors: [
    {
      label: { fr: "Santé & soins", de: "Gesundheit & Pflege", en: "Health & care" },
      text: {
        fr: "Pflege, établissements de santé et professions de soins, selon la qualification et les conditions de reconnaissance applicables.",
        de: "Pflege, Gesundheitseinrichtungen und Pflegeberufe, je nach Qualifikation und geltenden Anerkennungsbedingungen.",
        en: "Pflege, healthcare facilities and care professions, depending on qualification and applicable recognition conditions.",
      },
    },
    {
      label: { fr: "Industrie & technique", de: "Industrie & Technik", en: "Industry & technical" },
      text: {
        fr: "Métiers techniques, production, maintenance, électricité et électronique.",
        de: "Technische Berufe, Produktion, Instandhaltung, Elektrik und Elektronik.",
        en: "Technical trades, production, maintenance, electrical and electronics.",
      },
    },
    {
      label: { fr: "BTP & artisanat", de: "Bau & Handwerk", en: "Construction & crafts" },
      text: {
        fr: "Métiers du bâtiment et profils techniques, selon les qualifications recherchées.",
        de: "Bauberufe und technische Profile, je nach gesuchten Qualifikationen.",
        en: "Construction trades and technical profiles, according to the qualifications sought.",
      },
    },
    {
      label: { fr: "Logistique & transport", de: "Logistik & Transport", en: "Logistics & transport" },
      text: {
        fr: "Profils de logistique et de transport, en tenant compte des exigences du poste et des autorisations éventuellement nécessaires.",
        de: "Logistik- und Transportprofile unter Berücksichtigung der Stellenanforderungen und gegebenenfalls erforderlicher Genehmigungen.",
        en: "Logistics and transport profiles, taking into account the requirements of the role and any authorisations needed.",
      },
    },
    {
      label: { fr: "Hôtellerie & restauration", de: "Hotellerie & Gastronomie", en: "Hospitality & catering" },
      text: {
        fr: "Métiers de service, de cuisine et de restauration selon vos besoins.",
        de: "Service-, Küchen- und Gastronomieberufe je nach Ihrem Bedarf.",
        en: "Service, kitchen and catering trades according to your needs.",
      },
    },
    {
      label: { fr: "IT & métiers spécialisés", de: "IT & Spezialberufe", en: "IT & specialised trades" },
      text: {
        fr: "Profils informatiques et autres métiers qualifiés, lorsque les compétences recherchées correspondent aux profils disponibles.",
        de: "IT-Profile und andere qualifizierte Berufe, wenn die gesuchten Kompetenzen den verfügbaren Profilen entsprechen.",
        en: "IT profiles and other qualified trades, when the skills sought match the available profiles.",
      },
    },
  ],
  secNote: {
    fr: "Les recrutements possibles sont définis au cas par cas en fonction des besoins de l'entreprise, des qualifications, de la disponibilité des candidats et des conditions légales applicables.",
    de: "Mögliche Einstellungen werden im Einzelfall anhand des Unternehmensbedarfs, der Qualifikationen, der Verfügbarkeit der Kandidaten und der geltenden gesetzlichen Bedingungen festgelegt.",
    en: "Possible recruitments are defined case by case based on the company's needs, qualifications, candidate availability and applicable legal conditions.",
  },
  secCta: { fr: "Présenter mon besoin sectoriel", de: "Meinen Branchenbedarf vorstellen", en: "Present my sector need" },

  // SECTION 6 — CADRE LÉGAL
  legalKicker: { fr: "Sécuriser le parcours", de: "Den Weg absichern", en: "Securing the path" },
  legalTitle: {
    fr: "Le bon profil doit aussi suivre la bonne voie administrative.",
    de: "Das richtige Profil muss auch den richtigen Verwaltungsweg gehen.",
    en: "The right profile must also follow the right administrative path.",
  },
  legalIntro: {
    fr: "Le recrutement international dépend de la qualification du candidat, du métier, de la situation de reconnaissance et des conditions de séjour. Il n'existe pas une procédure unique adaptée à tous les profils.",
    de: "Die internationale Rekrutierung hängt von der Qualifikation des Kandidaten, vom Beruf, von der Anerkennungssituation und von den Aufenthaltsbedingungen ab. Es gibt kein einheitliches Verfahren für alle Profile.",
    en: "International recruitment depends on the candidate's qualification, the profession, the recognition situation and the residence conditions. There is no single procedure suited to every profile.",
  },
  legalPillars: [
    {
      title: {
        fr: "Reconnaissance des qualifications — Anerkennung",
        de: "Anerkennung der Qualifikationen",
        en: "Recognition of qualifications — Anerkennung",
      },
      body: {
        fr: "Nous vous accompagnons dans la préparation des documents et l'orientation vers la procédure applicable. La décision de reconnaissance appartient à l'organisme compétent.",
        de: "Wir begleiten Sie bei der Vorbereitung der Unterlagen und der Orientierung zum anwendbaren Verfahren. Die Anerkennungsentscheidung liegt bei der zuständigen Stelle.",
        en: "We support you in preparing the documents and guiding you to the applicable procedure. The recognition decision rests with the competent body.",
      },
    },
    {
      title: {
        fr: "Partenariat de reconnaissance — Anerkennungspartnerschaft",
        de: "Anerkennungspartnerschaft",
        en: "Recognition partnership — Anerkennungspartnerschaft",
      },
      body: {
        fr: "Cette voie peut être envisagée pour certains professionnels, lorsque les conditions requises sont réunies et que l'employeur et le candidat s'engagent dans la procédure correspondante.",
        de: "Dieser Weg kann für bestimmte Fachkräfte in Betracht gezogen werden, wenn die erforderlichen Bedingungen erfüllt sind und sich Arbeitgeber und Kandidat auf das entsprechende Verfahren einlassen.",
        en: "This route may be considered for certain professionals, when the required conditions are met and the employer and candidate commit to the corresponding procedure.",
      },
    },
    {
      title: {
        fr: "Procédure accélérée — § 81a AufenthG",
        de: "Beschleunigtes Verfahren — § 81a AufenthG",
        en: "Accelerated procedure — § 81a AufenthG",
      },
      body: {
        fr: "Lorsqu'elle est applicable, la procédure accélérée pour les travailleurs qualifiés peut être engagée par l'employeur auprès de l'autorité compétente. Son utilisation dépend du dossier et des conditions légales.",
        de: "Sofern anwendbar, kann das beschleunigte Fachkräfteverfahren vom Arbeitgeber bei der zuständigen Behörde eingeleitet werden. Seine Nutzung hängt vom Dossier und von den gesetzlichen Bedingungen ab.",
        en: "Where applicable, the accelerated procedure for skilled workers can be initiated by the employer with the competent authority. Its use depends on the file and the legal conditions.",
      },
    },
    {
      title: { fr: "Visa pour une Ausbildung", de: "Visum für eine Ausbildung", en: "Visa for an Ausbildung" },
      body: {
        fr: "Le recrutement d'un Azubi issu d'un pays tiers relève d'un parcours de séjour distinct, avec ses propres conditions, notamment concernant la place de formation et les connaissances linguistiques.",
        de: "Die Einstellung eines Azubis aus einem Drittland folgt einem eigenen Aufenthaltsweg mit eigenen Bedingungen, insbesondere hinsichtlich des Ausbildungsplatzes und der Sprachkenntnisse.",
        en: "Recruiting an Azubi from a third country follows a distinct residence path with its own conditions, notably regarding the training place and language skills.",
      },
    },
  ],
  legalNote: {
    fr: "Notre rôle est de vous aider à préparer et coordonner les démarches prévues dans notre mission. Les décisions finales relèvent des autorités et organismes compétents.",
    de: "Unsere Rolle ist es, Sie bei der Vorbereitung und Koordination der im Auftrag vorgesehenen Schritte zu unterstützen. Die endgültigen Entscheidungen liegen bei den zuständigen Behörden und Stellen.",
    en: "Our role is to help you prepare and coordinate the steps provided for in our assignment. Final decisions rest with the competent authorities and bodies.",
  },
  legalCta: { fr: "Échanger sur mon dossier", de: "Über mein Dossier sprechen", en: "Discuss my file" },

  // SECTION 7 — COLLABORATION
  collabKicker: { fr: "Qui fait quoi ?", de: "Wer macht was?", en: "Who does what?" },
  collabTitle: {
    fr: "Un partenariat efficace repose sur des responsabilités définies.",
    de: "Eine wirksame Partnerschaft beruht auf klar definierten Verantwortlichkeiten.",
    en: "An effective partnership rests on defined responsibilities.",
  },
  kfLabel: { fr: "Ce que prend en charge Karriere Fähre", de: "Was Karriere Fähre übernimmt", en: "What Karriere Fähre handles" },
  kfItems: [
    {
      fr: "La recherche et la présélection des candidats selon les critères convenus.",
      de: "Die Suche und Vorauswahl der Kandidaten nach den vereinbarten Kriterien.",
      en: "Sourcing and pre-selecting candidates according to the agreed criteria.",
    },
    {
      fr: "La préparation linguistique et professionnelle prévue pour le parcours.",
      de: "Die für den Weg vorgesehene sprachliche und berufliche Vorbereitung.",
      en: "The language and professional preparation planned for the path.",
    },
    { fr: "Le coaching et la préparation aux entretiens.", de: "Das Coaching und die Vorbereitung auf Gespräche.", en: "Coaching and interview preparation." },
    {
      fr: "L'examen préliminaire des documents et la préparation du dossier.",
      de: "Die vorläufige Prüfung der Unterlagen und die Vorbereitung des Dossiers.",
      en: "The preliminary review of documents and preparation of the file.",
    },
    {
      fr: "La coordination des démarches et de la préparation à l'arrivée incluses dans la mission.",
      de: "Die Koordination der Schritte und der Ankunftsvorbereitung, die im Auftrag enthalten sind.",
      en: "Coordinating the steps and arrival preparation included in the assignment.",
    },
  ],
  employerLabel: { fr: "Ce que vous apportez en tant qu'employeur", de: "Was Sie als Arbeitgeber einbringen", en: "What you provide as the employer" },
  employerItems: [
    {
      fr: "Une description précise du poste ou de l'Ausbildung et des compétences recherchées.",
      de: "Eine genaue Beschreibung der Stelle oder der Ausbildung und der gesuchten Kompetenzen.",
      en: "A precise description of the position or Ausbildung and the skills sought.",
    },
    {
      fr: "Les conditions proposées : rémunération, horaires, lieu de travail et principales responsabilités.",
      de: "Die angebotenen Bedingungen: Vergütung, Arbeitszeiten, Arbeitsort und wesentliche Aufgaben.",
      en: "The conditions offered: pay, working hours, workplace and main responsibilities.",
    },
    {
      fr: "Un interlocuteur pour les échanges et les décisions de recrutement.",
      de: "Einen Ansprechpartner für den Austausch und die Einstellungsentscheidungen.",
      en: "A contact person for exchanges and recruitment decisions.",
    },
    {
      fr: "La participation aux entretiens et la décision finale de sélection.",
      de: "Die Teilnahme an den Gesprächen und die endgültige Auswahlentscheidung.",
      en: "Participation in interviews and the final selection decision.",
    },
    {
      fr: "Les documents et engagements nécessaires aux démarches applicables.",
      de: "Die für die anwendbaren Schritte erforderlichen Unterlagen und Zusagen.",
      en: "The documents and commitments required for the applicable steps.",
    },
    {
      fr: "Une préparation à l'accueil et à l'intégration dans votre entreprise.",
      de: "Eine Vorbereitung auf die Aufnahme und Integration in Ihrem Unternehmen.",
      en: "Preparation for welcoming and integrating into your company.",
    },
  ],
  engagements: [
    {
      label: { fr: "Transparence", de: "Transparenz", en: "Transparency" },
      text: {
        fr: "Les prestations, les responsabilités, les coûts et le calendrier prévisionnel sont définis ensemble.",
        de: "Leistungen, Verantwortlichkeiten, Kosten und der voraussichtliche Zeitplan werden gemeinsam festgelegt.",
        en: "Services, responsibilities, costs and the provisional timeline are defined together.",
      },
    },
    {
      label: { fr: "Préparation", de: "Vorbereitung", en: "Preparation" },
      text: {
        fr: "Les candidats sont accompagnés selon le parcours convenu avant les étapes décisives.",
        de: "Die Kandidaten werden gemäß dem vereinbarten Weg vor den entscheidenden Schritten begleitet.",
        en: "Candidates are supported according to the agreed path before the decisive steps.",
      },
    },
    {
      label: { fr: "Conformité", de: "Konformität", en: "Compliance" },
      text: {
        fr: "Chaque dossier doit suivre les exigences légales applicables au profil et au poste.",
        de: "Jedes Dossier muss den für Profil und Stelle geltenden gesetzlichen Anforderungen entsprechen.",
        en: "Each file must follow the legal requirements applicable to the profile and the position.",
      },
    },
    {
      label: { fr: "Suivi", de: "Begleitung", en: "Follow-up" },
      text: {
        fr: "Les étapes, les responsabilités et les modalités d'accompagnement sont établies dès le début de la collaboration.",
        de: "Die Schritte, Verantwortlichkeiten und Begleitmodalitäten werden zu Beginn der Zusammenarbeit festgelegt.",
        en: "The steps, responsibilities and support arrangements are set from the start of the collaboration.",
      },
    },
  ],

  // SECTION 8 — FAQ
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
  faq: [
    {
      q: {
        fr: "Quel est le délai pour recruter un candidat à l'international ?",
        de: "Wie lange dauert die internationale Rekrutierung eines Kandidaten?",
        en: "How long does it take to recruit a candidate internationally?",
      },
      a: {
        fr: "Le délai dépend du profil recherché, du niveau d'allemand, de la préparation nécessaire, des exigences de reconnaissance et du traitement administratif. Nous définissons un calendrier prévisionnel après l'analyse de votre besoin, sans garantir une date d'arrivée indépendante des décisions des autorités.",
        de: "Die Dauer hängt vom gesuchten Profil, vom Deutschniveau, von der nötigen Vorbereitung, von den Anerkennungsanforderungen und von der behördlichen Bearbeitung ab. Wir legen nach der Analyse Ihres Bedarfs einen voraussichtlichen Zeitplan fest, ohne ein von den Behördenentscheidungen unabhängiges Ankunftsdatum zu garantieren.",
        en: "The timeline depends on the profile sought, the level of German, the preparation needed, recognition requirements and administrative processing. We set a provisional timeline after analysing your need, without guaranteeing an arrival date independent of the authorities' decisions.",
      },
    },
    {
      q: {
        fr: "Les candidats possèdent-ils déjà le niveau d'allemand requis ?",
        de: "Haben die Kandidaten bereits das erforderliche Deutschniveau?",
        en: "Do candidates already have the required level of German?",
      },
      a: {
        fr: "Le niveau est défini en fonction du poste ou de l'Ausbildung. Selon le parcours, nous recherchons des candidats déjà préparés ou organisons une formation et une préparation linguistique adaptées.",
        de: "Das Niveau wird je nach Stelle oder Ausbildung festgelegt. Je nach Weg suchen wir bereits vorbereitete Kandidaten oder organisieren eine passende Ausbildung und sprachliche Vorbereitung.",
        en: "The level is defined according to the position or the Ausbildung. Depending on the path, we look for candidates already prepared or organise suitable training and language preparation.",
      },
    },
    {
      q: {
        fr: "Pouvez-vous accompagner la reconnaissance des diplômes et les démarches de visa ?",
        de: "Begleiten Sie die Anerkennung der Abschlüsse und die Visa-Schritte?",
        en: "Can you support diploma recognition and visa procedures?",
      },
      a: {
        fr: "Nous pouvons accompagner la préparation des documents et la coordination des démarches prévues dans notre mission. La reconnaissance et la délivrance du visa relèvent des organismes et autorités compétents.",
        de: "Wir können die Vorbereitung der Unterlagen und die Koordination der im Auftrag vorgesehenen Schritte begleiten. Anerkennung und Visumserteilung liegen bei den zuständigen Stellen und Behörden.",
        en: "We can support preparing the documents and coordinating the steps provided for in our assignment. Recognition and issuing the visa rest with the competent bodies and authorities.",
      },
    },
    {
      q: {
        fr: "Dans quels secteurs pouvez-vous recruter ?",
        de: "In welchen Branchen können Sie rekrutieren?",
        en: "In which sectors can you recruit?",
      },
      a: {
        fr: "Nous étudions les demandes dans les secteurs présentés sur cette page, selon les besoins de l'entreprise, les profils disponibles et la faisabilité du recrutement.",
        de: "Wir prüfen Anfragen in den auf dieser Seite vorgestellten Branchen, je nach Unternehmensbedarf, verfügbaren Profilen und Machbarkeit der Rekrutierung.",
        en: "We examine requests in the sectors presented on this page, depending on the company's needs, available profiles and the feasibility of recruitment.",
      },
    },
    {
      q: { fr: "Comment sont définis les coûts ?", de: "Wie werden die Kosten festgelegt?", en: "How are the costs defined?" },
      a: {
        fr: "Le coût dépend du profil, du nombre de recrutements, du niveau de préparation et du périmètre de la mission. Nous clarifions les prestations et les conditions financières avant le démarrage du projet.",
        de: "Die Kosten hängen vom Profil, von der Zahl der Einstellungen, vom Vorbereitungsgrad und vom Umfang des Auftrags ab. Wir klären Leistungen und finanzielle Bedingungen vor dem Projektstart.",
        en: "The cost depends on the profile, the number of recruitments, the level of preparation and the scope of the assignment. We clarify the services and financial conditions before the project starts.",
      },
    },
    {
      q: { fr: "Le recrutement est-il garanti ?", de: "Ist die Einstellung garantiert?", en: "Is recruitment guaranteed?" },
      a: {
        fr: "Non. Nous nous engageons sur les prestations définies dans notre accord, pas sur une décision d'embauche, une reconnaissance ou l'obtention d'un visa. La sélection appartient à l'employeur et les décisions administratives aux autorités compétentes.",
        de: "Nein. Wir verpflichten uns auf die in unserer Vereinbarung festgelegten Leistungen, nicht auf eine Einstellungsentscheidung, eine Anerkennung oder die Erteilung eines Visums. Die Auswahl liegt beim Arbeitgeber, die behördlichen Entscheidungen bei den zuständigen Stellen.",
        en: "No. We commit to the services defined in our agreement, not to a hiring decision, a recognition or the granting of a visa. Selection rests with the employer and administrative decisions with the competent authorities.",
      },
    },
  ],

  // SECTION 9 — CONTACT
  contactKicker: { fr: "Parlons de votre besoin", de: "Sprechen wir über Ihren Bedarf", en: "Let's talk about your need" },
  contactTitle: { fr: "Quel poste souhaitez-vous pourvoir ?", de: "Welche Stelle möchten Sie besetzen?", en: "Which position do you want to fill?" },
  contactText1: {
    fr: "Vous recherchez des professionnels qualifiés, souhaitez recruter des Azubis ou voulez examiner la faisabilité d'un projet de recrutement international ?",
    de: "Suchen Sie qualifizierte Fachkräfte, möchten Sie Azubis gewinnen oder die Machbarkeit eines internationalen Rekrutierungsprojekts prüfen?",
    en: "Are you looking for qualified professionals, want to recruit Azubis, or want to examine the feasibility of an international recruitment project?",
  },
  contactText2: {
    fr: "Présentez-nous votre besoin. Nous pourrons examiner avec vous les profils recherchés, la préparation nécessaire et les prochaines étapes.",
    de: "Stellen Sie uns Ihren Bedarf vor. Wir können gemeinsam die gesuchten Profile, die nötige Vorbereitung und die nächsten Schritte prüfen.",
    en: "Tell us about your need. We can review with you the profiles sought, the preparation needed and the next steps.",
  },
  contactNote: {
    fr: "Votre demande permet de préparer un premier échange ciblé. Les conditions et prestations seront précisées avant tout engagement.",
    de: "Ihre Anfrage dient der Vorbereitung eines ersten gezielten Austauschs. Bedingungen und Leistungen werden vor jeder Verpflichtung präzisiert.",
    en: "Your request helps prepare a first focused exchange. Conditions and services will be clarified before any commitment.",
  },
  form: {
    entreprise: { fr: "Entreprise", de: "Unternehmen", en: "Company" },
    interlocuteur: { fr: "Nom et fonction de votre interlocuteur", de: "Name und Funktion Ihres Ansprechpartners", en: "Name and role of your contact" },
    email: { fr: "Adresse e-mail professionnelle", de: "Geschäftliche E-Mail-Adresse", en: "Professional email address" },
    telephone: { fr: "Téléphone (facultatif)", de: "Telefon (optional)", en: "Phone (optional)" },
    besoin: { fr: "Votre besoin", de: "Ihr Bedarf", en: "Your need" },
    besoinChoose: { fr: "Sélectionnez votre besoin", de: "Bedarf auswählen", en: "Select your need" },
    besoinFach: { fr: "Recrutement de Fachkräfte", de: "Rekrutierung von Fachkräften", en: "Recruiting Fachkräfte" },
    besoinAzubis: { fr: "Recrutement d'Azubis", de: "Rekrutierung von Azubis", en: "Recruiting Azubis" },
    besoinLesDeux: { fr: "Les deux", de: "Beides", en: "Both" },
    besoinEtude: {
      fr: "Étude d'un projet de recrutement international",
      de: "Prüfung eines internationalen Rekrutierungsprojekts",
      en: "Studying an international recruitment project",
    },
    secteur: { fr: "Secteur d'activité", de: "Branche", en: "Sector" },
    postes: { fr: "Postes ou nombre de candidats recherchés", de: "Stellen oder Anzahl gesuchter Kandidaten", en: "Positions or number of candidates sought" },
    dateEntree: { fr: "Date d'entrée souhaitée (facultatif)", de: "Gewünschter Eintrittstermin (optional)", en: "Desired start date (optional)" },
    message: { fr: "Votre message", de: "Ihre Nachricht", en: "Your message" },
    submit: { fr: "Envoyer ma demande", de: "Anfrage senden", en: "Send my request" },
    submitting: { fr: "Envoi…", de: "Senden…", en: "Sending…" },
    required: { fr: "Champs obligatoires", de: "Pflichtfelder", en: "Required fields" },
    error: {
      fr: "Une erreur est survenue. Vérifiez vos informations et réessayez.",
      de: "Ein Fehler ist aufgetreten. Prüfen Sie Ihre Angaben und versuchen Sie es erneut.",
      en: "An error occurred. Check your details and try again.",
    },
    successTitle: { fr: "Demande bien reçue.", de: "Anfrage erhalten.", en: "Request received." },
    successText: {
      fr: "Merci. Nous avons bien reçu votre demande de recrutement et revenons vers vous pour préparer un premier échange ciblé.",
      de: "Danke. Wir haben Ihre Rekrutierungsanfrage erhalten und melden uns, um einen ersten gezielten Austausch vorzubereiten.",
      en: "Thank you. We have received your recruitment request and will get back to you to prepare a first focused exchange.",
    },
  },
};
