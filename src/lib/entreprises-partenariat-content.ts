import type { LocalizedText } from "./localized";

// Page /entreprises/partenariat (DE: /unternehmen/partnerschaft):
// "Partnerunternehmen werden". Full partnership-oriented page: hero, partnership
// intro, two ways (Fachkräfte / Ausbildung), 6-step process, mutual expectations
// (two columns), clear framework + transparency, final CTA. Hedged legal wording;
// no public pricing, no fabricated figures, testimonials or client logos.
type LT = LocalizedText;

export const ENT_PARTENARIAT: {
  heroKicker: LT;
  heroTitle: LT;
  heroIntro1: LT;
  heroIntro2: LT;
  heroBold: LT;
  heroCtaPrimary: LT;
  heroCtaSecondary: LT;
  heroReperes: LT[];

  partnerKicker: LT;
  partnerTitle: LT;
  partnerBody: LT[];

  solKicker: LT;
  solTitle: LT;
  solLead: LT;
  fachTitle: LT;
  fachQuestion: LT;
  fachBody1: LT;
  fachBody2: LT;
  fachZiel: LT;
  fachCta: LT;
  ausTitle: LT;
  ausQuestion: LT;
  ausBody1: LT;
  ausBody2: LT;
  ausZiel: LT;
  ausCta: LT;
  zielLabel: LT;

  procKicker: LT;
  procTitle: LT;
  procIntro: LT;
  procSteps: { num: string; title: LT; body: LT[] }[];

  expectKicker: LT;
  weTitle: LT;
  weIntro: LT;
  weItems: { title: LT; body: LT }[];
  giveTitle: LT;
  giveIntro: LT;
  giveItems: { title: LT; body: LT }[];

  frameKicker: LT;
  frameTitle: LT;
  frameIntro1: LT;
  frameIntro2: LT;
  frameChecklist: LT[];
  frameAfter: LT;
  transTitle: LT;
  transBody: LT[];

  finalKicker: LT;
  finalTitle: LT;
  finalBody: LT[];
  finalBold: LT;
  finalCtaPrimary: LT;
  finalCtaSecondary: LT;
} = {
  // ── HERO ──────────────────────────────────────────────────────────────
  heroKicker: {
    fr: "Recrutement international depuis le Cameroun",
    de: "Internationale Rekrutierung aus Kamerun",
    en: "International recruitment from Cameroon",
  },
  heroTitle: {
    fr: "Devenir entreprise partenaire",
    de: "Partnerunternehmen werden",
    en: "Become a partner company",
  },
  heroIntro1: {
    fr: "Karriere Fähre accompagne les entreprises allemandes dans le recrutement de professionnels qualifiés et d'apprentis motivés. Nous relions les besoins en personnel des entreprises allemandes à des candidats adaptés au Cameroun et accompagnons le processus de recrutement, de l'analyse du besoin jusqu'aux étapes convenues de l'intégration professionnelle.",
    de: "Karriere Fähre unterstützt deutsche Unternehmen bei der Gewinnung internationaler Fachkräfte und motivierter Auszubildender. Wir verbinden den Personalbedarf deutscher Unternehmen mit geeigneten Kandidaten aus Kamerun und begleiten den Rekrutierungsprozess von der Bedarfsanalyse bis zu den vereinbarten Schritten der beruflichen Integration.",
    en: "Karriere Fähre supports German companies in recruiting qualified professionals and motivated apprentices. We connect the staffing needs of German companies with suitable candidates in Cameroon and accompany the recruitment process, from the needs analysis to the agreed steps of professional integration.",
  },
  heroIntro2: {
    fr: "Notre exigence : une collaboration structurée, transparente et pensée sur le long terme, qui répond aux besoins de votre entreprise comme aux prérequis des candidats.",
    de: "Unser Anspruch ist eine strukturierte, transparente und langfristig ausgerichtete Zusammenarbeit, die den Anforderungen Ihres Unternehmens und den Voraussetzungen der Kandidaten gerecht wird.",
    en: "Our commitment is a structured, transparent and long-term collaboration that meets the requirements of your company and the prerequisites of the candidates.",
  },
  heroBold: {
    fr: "Révéler ensemble les potentiels internationaux.",
    de: "Gemeinsam internationale Potenziale erschließen.",
    en: "Unlocking international potential together.",
  },
  heroCtaPrimary: { fr: "Demander un partenariat", de: "Partnerschaft anfragen", en: "Request a partnership" },
  heroCtaSecondary: { fr: "Découvrir notre collaboration", de: "Unsere Zusammenarbeit entdecken", en: "Discover how we work" },
  heroReperes: [
    { fr: "Fachkräfte", de: "Fachkräfte", en: "Fachkräfte" },
    { fr: "Ausbildung", de: "Ausbildung", en: "Ausbildung" },
    { fr: "Deutsch & Fachsprache", de: "Deutsch & Fachsprache", en: "Deutsch & Fachsprache" },
    { fr: "Integration", de: "Integration", en: "Integration" },
  ],

  // ── PARTNERSHIP INTRO ─────────────────────────────────────────────────
  partnerKicker: { fr: "Un partenariat durable", de: "Eine dauerhafte Partnerschaft", en: "A lasting partnership" },
  partnerTitle: {
    fr: "Un partenariat qui va au-delà de simples embauches",
    de: "Eine Partnerschaft, die über einzelne Einstellungen hinausgeht",
    en: "A partnership that goes beyond individual hires",
  },
  partnerBody: [
    {
      fr: "Le recrutement international ne se limite pas à la recherche de bons candidats. Il demande une mise en cohérence attentive entre les besoins en personnel de votre entreprise, les prérequis professionnels et personnels des candidats ainsi que le cadre linguistique, organisationnel et administratif.",
      de: "Internationale Rekrutierung ist mehr als die Suche nach geeigneten Bewerbern. Sie erfordert eine sorgfältige Abstimmung zwischen dem Personalbedarf Ihres Unternehmens, den fachlichen und persönlichen Voraussetzungen der Kandidaten sowie den sprachlichen, organisatorischen und behördlichen Rahmenbedingungen.",
      en: "International recruitment is more than the search for suitable applicants. It requires careful alignment between your company's staffing needs, the professional and personal prerequisites of the candidates and the linguistic, organisational and administrative framework.",
    },
    {
      fr: "C'est pourquoi Karriere Fähre mise sur une collaboration de partenaire, avec des exigences clairement définies, des processus lisibles et des responsabilités transparentes.",
      de: "Karriere Fähre setzt deshalb auf eine partnerschaftliche Zusammenarbeit mit klar definierten Anforderungen, nachvollziehbaren Abläufen und transparenten Zuständigkeiten.",
      en: "That is why Karriere Fähre relies on a true partnership, with clearly defined requirements, transparent processes and clear responsibilities.",
    },
    {
      fr: "Nous souhaitons aider les entreprises à anticiper leurs besoins en personnel, à faire connaissance avec des candidats adaptés et à prendre des décisions d'embauche éclairées.",
      de: "Wir möchten Unternehmen dabei unterstützen, ihren Personalbedarf vorausschauend zu planen, geeignete Kandidaten kennenzulernen und fundierte Einstellungsentscheidungen zu treffen.",
      en: "We want to help companies plan their staffing needs ahead of time, get to know suitable candidates and make well-founded hiring decisions.",
    },
    {
      fr: "Que vous recherchiez à court terme des professionnels qualifiés ou que vous souhaitiez pourvoir durablement vos places d'apprentissage avec de jeunes talents motivés, nous adaptons le parcours de recrutement à votre besoin concret.",
      de: "Ob Sie kurzfristig qualifizierte Fachkräfte suchen oder Ihre Ausbildungsplätze langfristig mit motivierten Nachwuchskräften besetzen möchten: Wir stimmen den Rekrutierungsweg auf Ihren konkreten Bedarf ab.",
      en: "Whether you are looking for qualified professionals in the short term or want to fill your apprenticeship places with motivated young talent for the long term, we align the recruitment path with your specific need.",
    },
  ],

  // ── TWO WAYS ──────────────────────────────────────────────────────────
  solKicker: { fr: "Votre besoin", de: "Ihr Bedarf", en: "Your need" },
  solTitle: {
    fr: "Deux voies de collaboration",
    de: "Zwei Wege der Zusammenarbeit",
    en: "Two ways to collaborate",
  },
  solLead: {
    fr: "Selon que vous recherchez des professionnels déjà qualifiés ou que vous souhaitez pourvoir des places d'apprentissage.",
    de: "Je nachdem, ob Sie bereits qualifizierte Fachkräfte suchen oder Ausbildungsplätze besetzen möchten.",
    en: "Depending on whether you are seeking already qualified professionals or want to fill apprenticeship places.",
  },
  zielLabel: { fr: "Notre objectif :", de: "Unser Ziel:", en: "Our goal:" },

  fachTitle: {
    fr: "Recruter des collaborateurs qualifiés de façon ciblée",
    de: "Qualifizierte Mitarbeiter gezielt gewinnen",
    en: "Win qualified staff in a targeted way",
  },
  fachQuestion: {
    fr: "Vous recherchez des professionnels internationaux dotés des qualifications adaptées, d'une expérience professionnelle et de la motivation nécessaire ?",
    de: "Sie suchen internationale Fachkräfte, die über passende Qualifikationen, berufliche Erfahrungen und die erforderliche Motivation verfügen?",
    en: "Are you looking for international professionals with the right qualifications, professional experience and the motivation required?",
  },
  fachBody1: {
    fr: "Nous vous accompagnons dans la définition du profil recherché, la recherche de candidats adaptés, la présélection et la préparation au processus de candidature.",
    de: "Wir unterstützen Sie bei der Definition des Anforderungsprofils, der Suche nach geeigneten Kandidaten, der Vorauswahl und der Vorbereitung auf den Bewerbungsprozess.",
    en: "We support you in defining the required profile, sourcing suitable candidates, pre-selecting them and preparing them for the application process.",
  },
  fachBody2: {
    fr: "Nous tenons compte des exigences techniques du poste, des qualifications détenues, des connaissances linguistiques et, le cas échéant, des procédures de reconnaissance nécessaires.",
    de: "Dabei berücksichtigen wir die fachlichen Anforderungen der Position, die vorhandenen Qualifikationen, die Sprachkenntnisse und gegebenenfalls erforderliche Anerkennungsverfahren.",
    en: "We take into account the technical requirements of the position, the qualifications held, the language skills and, where applicable, the necessary recognition procedures.",
  },
  fachZiel: {
    fr: "vous présenter des profils de candidats adaptés aux besoins de votre entreprise, dont les prérequis sont exposés en toute transparence.",
    de: "Ihnen geeignete Kandidatenprofile vorzustellen, die zu den Anforderungen Ihres Unternehmens passen und deren Voraussetzungen transparent dargestellt werden.",
    en: "to present you with suitable candidate profiles that match your company's requirements and whose prerequisites are set out transparently.",
  },
  fachCta: { fr: "Découvrir le recrutement de Fachkräfte", de: "Fachkräfte-Rekrutierung entdecken", en: "Discover Fachkräfte recruitment" },

  ausTitle: {
    fr: "Attirer tôt des apprentis motivés",
    de: "Motivierte Auszubildende frühzeitig gewinnen",
    en: "Win motivated apprentices early",
  },
  ausQuestion: {
    fr: "Vous souhaitez pourvoir vos places d'apprentissage avec des candidats internationaux motivés et former durablement de jeunes talents qualifiés dans votre entreprise ?",
    de: "Sie möchten Ihre Ausbildungsplätze mit motivierten internationalen Kandidaten besetzen und qualifizierte Nachwuchskräfte langfristig in Ihrem Unternehmen entwickeln?",
    en: "Do you want to fill your apprenticeship places with motivated international candidates and develop qualified young talent in your company for the long term?",
  },
  ausBody1: {
    fr: "Nous vous accompagnons dans la recherche de candidats adaptés, l'examen du profil scolaire, l'appréciation de la motivation et la préparation linguistique.",
    de: "Wir begleiten Sie bei der Suche nach geeigneten Bewerbern, der Prüfung des schulischen Profils, der Einschätzung der Motivation und der sprachlichen Vorbereitung.",
    en: "We support you in finding suitable applicants, reviewing the academic profile, assessing motivation and preparing the candidates linguistically.",
  },
  ausBody2: {
    fr: "Ensemble, nous mettons en cohérence les exigences de votre entreprise formatrice avec les prérequis scolaires, les connaissances en allemand et les étapes nécessaires jusqu'au début de l'apprentissage.",
    de: "Gemeinsam stimmen wir die Anforderungen Ihres Ausbildungsbetriebs mit den schulischen Voraussetzungen, den Deutschkenntnissen und den notwendigen Schritten bis zum Ausbildungsbeginn ab.",
    en: "Together we align the requirements of your training company with the academic prerequisites, the German language skills and the steps needed up to the start of the apprenticeship.",
  },
  ausZiel: {
    fr: "une préparation solide des candidats et une base fiable pour votre décision de sélection.",
    de: "eine fundierte Vorbereitung der Kandidaten und eine verlässliche Grundlage für Ihre Auswahlentscheidung.",
    en: "a sound preparation of the candidates and a reliable basis for your selection decision.",
  },
  ausCta: { fr: "Découvrir le recrutement d'Azubis", de: "Azubi-Rekrutierung entdecken", en: "Discover Azubi recruitment" },

  // ── PROCESS ───────────────────────────────────────────────────────────
  procKicker: { fr: "Notre processus", de: "Unser Ablauf", en: "Our process" },
  procTitle: {
    fr: "De la déclaration du besoin à la sélection des candidats",
    de: "Von der Personalbedarfsmeldung bis zur Bewerberauswahl",
    en: "From the staffing request to the candidate selection",
  },
  procIntro: {
    fr: "Notre processus de recrutement suit une structure claire. Chaque étape est adaptée aux besoins de votre entreprise et à la situation des candidats.",
    de: "Unser Rekrutierungsprozess folgt einer klaren Struktur. Die einzelnen Schritte werden an die Anforderungen Ihres Unternehmens und die Situation der Kandidaten angepasst.",
    en: "Our recruitment process follows a clear structure. Each step is adapted to your company's requirements and the candidates' situation.",
  },
  procSteps: [
    {
      num: "01",
      title: { fr: "Besoin en personnel et profil recherché", de: "Personalbedarf und Anforderungsprofil", en: "Staffing need and required profile" },
      body: [
        {
          fr: "Vous nous indiquez le poste à pourvoir, les qualifications requises ainsi que le cadre et le calendrier qui s'appliquent à vous.",
          de: "Sie teilen uns mit, welche Position Sie besetzen möchten, welche Qualifikationen erforderlich sind und welche Rahmenbedingungen sowie welcher Zeitplan für Sie gelten.",
          en: "You tell us which position you want to fill, which qualifications are required and which conditions and timeline apply to you.",
        },
        {
          fr: "Ensemble, nous définissons le profil recherché et clarifions les critères essentiels pour la recherche de candidats.",
          de: "Gemeinsam definieren wir das Anforderungsprofil und klären die wesentlichen Kriterien für die Kandidatensuche.",
          en: "Together we define the required profile and clarify the essential criteria for the candidate search.",
        },
      ],
    },
    {
      num: "02",
      title: { fr: "Recherche et présélection des candidats", de: "Kandidatensuche und Vorauswahl", en: "Candidate search and pre-selection" },
      body: [
        {
          fr: "Nous identifions des candidats adaptés, comparons leurs profils à vos exigences et examinons les dossiers de candidature disponibles.",
          de: "Wir identifizieren geeignete Kandidaten, gleichen ihre Profile mit Ihren Anforderungen ab und prüfen die vorliegenden Bewerbungsunterlagen.",
          en: "We identify suitable candidates, match their profiles against your requirements and review the application documents available.",
        },
        {
          fr: "Nous tenons compte en particulier du parcours scolaire et professionnel, des qualifications détenues, des expériences pertinentes et de l'adéquation générale avec le poste envisagé.",
          de: "Dabei berücksichtigen wir insbesondere den schulischen und beruflichen Werdegang, vorhandene Qualifikationen, relevante Erfahrungen und die grundsätzliche Eignung für die vorgesehene Position.",
          en: "We pay particular attention to the academic and professional background, existing qualifications, relevant experience and the general suitability for the intended position.",
        },
      ],
    },
    {
      num: "03",
      title: { fr: "Préparation linguistique et professionnelle", de: "Sprachliche und fachliche Vorbereitung", en: "Language and professional preparation" },
      body: [
        {
          fr: "Selon les besoins, nous aidons les candidats à améliorer de façon ciblée leur allemand, leurs compétences en langue professionnelle et leur aisance en entretien.",
          de: "Je nach Bedarf unterstützen wir die Kandidaten dabei, ihre Deutschkenntnisse, ihre berufssprachlichen Kompetenzen und ihre Sicherheit im Vorstellungsgespräch gezielt zu verbessern.",
          en: "As needed, we help candidates improve their German, their job-related language skills and their confidence in interviews in a targeted way.",
        },
        {
          fr: "La préparation s'appuie sur les exigences du poste ou de l'apprentissage concerné ainsi que sur les prérequis individuels des candidats.",
          de: "Die Vorbereitung orientiert sich an den Anforderungen der jeweiligen Stelle oder Ausbildung sowie an den individuellen Voraussetzungen der Kandidaten.",
          en: "The preparation is based on the requirements of the respective position or apprenticeship and on the individual prerequisites of the candidates.",
        },
      ],
    },
    {
      num: "04",
      title: { fr: "Présentation des candidats adaptés", de: "Vorstellung geeigneter Kandidaten", en: "Presentation of suitable candidates" },
      body: [
        {
          fr: "Nous vous présentons les candidats présélectionnés dont les qualifications et les objectifs professionnels correspondent à votre profil recherché.",
          de: "Wir präsentieren Ihnen die vorausgewählten Kandidaten, deren Qualifikationen und berufliche Ziele zu Ihrem Anforderungsprofil passen.",
          en: "We present the pre-selected candidates whose qualifications and professional goals match your required profile.",
        },
        {
          fr: "Vous recevez les informations convenues sur chaque profil et pouvez décider, sur cette base, quels candidats vous souhaitez rencontrer plus en détail.",
          de: "Sie erhalten die vereinbarten Informationen zu den jeweiligen Profilen und können auf dieser Grundlage entscheiden, welche Kandidaten Sie näher kennenlernen möchten.",
          en: "You receive the agreed information on each profile and can decide, on that basis, which candidates you would like to get to know further.",
        },
      ],
    },
    {
      num: "05",
      title: { fr: "Entretiens et sélection", de: "Vorstellungsgespräche und Auswahl", en: "Interviews and selection" },
      body: [
        {
          fr: "Vous faites généralement connaissance avec les candidats en ligne et pouvez vous faire une idée personnelle de leurs qualifications, de leur motivation et de leur adéquation.",
          de: "Sie lernen die Kandidaten in der Regel online kennen und können sich persönlich ein Bild von ihren Qualifikationen, ihrer Motivation und ihrer Eignung machen.",
          en: "You usually get to know the candidates online and can form your own impression of their qualifications, motivation and suitability.",
        },
        {
          fr: "Une rencontre en personne ou un rendez-vous sur place au Cameroun peut également être organisé après concertation.",
          de: "Ein persönliches Kennenlernen oder ein Termin vor Ort in Kamerun lässt sich nach individueller Abstimmung ebenfalls organisieren.",
          en: "A personal meeting or an appointment on site in Cameroon can also be arranged by individual agreement.",
        },
        {
          fr: "La décision finale concernant l'embauche ou l'attribution d'une place d'apprentissage vous appartient, en tant qu'employeur.",
          de: "Die endgültige Entscheidung über die Einstellung oder die Vergabe eines Ausbildungsplatzes treffen Sie als Arbeitgeber.",
          en: "The final decision on hiring or awarding an apprenticeship place rests with you as the employer.",
        },
      ],
    },
    {
      num: "06",
      title: { fr: "Formalités et étapes suivantes", de: "Formalitäten und weitere Schritte", en: "Formalities and next steps" },
      body: [
        {
          fr: "Après votre décision favorable, nous coordonnons les étapes convenues et adaptons notre accompagnement à vos souhaits ainsi qu'à la situation individuelle du candidat.",
          de: "Nach Ihrer positiven Entscheidung koordinieren wir die vereinbarten weiteren Schritte und passen unsere Begleitung an Ihre Wünsche sowie an die individuelle Situation des Kandidaten an.",
          en: "After your positive decision, we coordinate the agreed next steps and adapt our support to your wishes and to the candidate's individual situation.",
        },
        {
          fr: "Cela peut inclure, selon le cas et l'étendue des prestations convenues, la mise au point des documents nécessaires, la préparation aux démarches administratives et l'organisation de l'arrivée.",
          de: "Dazu können, abhängig vom jeweiligen Fall und dem vereinbarten Leistungsumfang, die Abstimmung der erforderlichen Unterlagen, die Vorbereitung auf behördliche Verfahren und die organisatorische Planung der Einreise gehören.",
          en: "Depending on the case and the agreed scope of services, this may include aligning the required documents, preparing for administrative procedures and organising the arrival.",
        },
        {
          fr: "Les mesures concrètes et les responsabilités sont définies ensemble au préalable.",
          de: "Die konkreten Maßnahmen und Zuständigkeiten werden vorab gemeinsam festgelegt.",
          en: "The concrete measures and responsibilities are defined together in advance.",
        },
      ],
    },
  ],

  // ── MUTUAL EXPECTATIONS (two columns) ─────────────────────────────────
  expectKicker: { fr: "Une répartition claire des rôles", de: "Eine klare Rollenverteilung", en: "A clear division of roles" },
  weTitle: {
    fr: "Ce que nous attendons de nos entreprises partenaires",
    de: "Was wir von unseren Partnerunternehmen erwarten",
    en: "What we expect from our partner companies",
  },
  weIntro: {
    fr: "Un recrutement international réussi repose sur la confiance mutuelle, des responsabilités claires et un cadre transparent.",
    de: "Eine erfolgreiche internationale Rekrutierung beruht auf gegenseitigem Vertrauen, klaren Zuständigkeiten und transparenten Rahmenbedingungen.",
    en: "Successful international recruitment rests on mutual trust, clear responsibilities and a transparent framework.",
  },
  weItems: [
    {
      title: { fr: "Un profil de poste clair", de: "Ein klares Anforderungsprofil", en: "A clear required profile" },
      body: {
        fr: "Nous avons besoin d'indications précises sur le poste, les qualifications requises, les missions et les attentes vis-à-vis des candidats. Pour les places d'apprentissage, les exigences du métier et de l'entreprise formatrice sont particulièrement importantes.",
        de: "Wir benötigen nachvollziehbare Angaben zur Position, zu den erforderlichen Qualifikationen, zu den Aufgaben und zu den Erwartungen an die Kandidaten. Bei Ausbildungsplätzen sind insbesondere die Anforderungen des Ausbildungsberufs und des Ausbildungsbetriebs relevant.",
        en: "We need clear information about the position, the required qualifications, the tasks and the expectations of the candidates. For apprenticeship places, the requirements of the training occupation and the training company are particularly relevant.",
      },
    },
    {
      title: { fr: "Des conditions d'emploi transparentes", de: "Transparente Beschäftigungsbedingungen", en: "Transparent employment conditions" },
      body: {
        fr: "Les conditions essentielles du poste ou de l'apprentissage proposé doivent être communiquées clairement. Cela comprend notamment les missions, le lieu de travail, les horaires, la rémunération ou l'indemnité d'apprentissage et les autres conditions pertinentes.",
        de: "Die wesentlichen Bedingungen der angebotenen Stelle oder Ausbildung sollen klar kommuniziert werden. Dazu gehören insbesondere Aufgaben, Arbeitsort, Arbeitszeiten, Vergütung beziehungsweise Ausbildungsvergütung und weitere relevante Rahmenbedingungen.",
        en: "The essential conditions of the position or apprenticeship offered should be communicated clearly. This includes in particular the tasks, place of work, working hours, pay or training allowance and other relevant conditions.",
      },
    },
    {
      title: { fr: "Une communication fiable", de: "Verlässliche Kommunikation", en: "Reliable communication" },
      body: {
        fr: "Des retours rapides, des accords fermes et des informations transparentes facilitent la coordination du processus de recrutement et permettent une planification réaliste.",
        de: "Zeitnahe Rückmeldungen, verbindliche Absprachen und transparente Informationen erleichtern die Koordination des Rekrutierungsprozesses und ermöglichen eine realistische Planung.",
        en: "Timely feedback, binding agreements and transparent information make it easier to coordinate the recruitment process and allow realistic planning.",
      },
    },
    {
      title: { fr: "Un accueil et une intégration appropriés", de: "Eine angemessene Einarbeitung und Integration", en: "Appropriate onboarding and integration" },
      body: {
        fr: "Les collaborateurs et apprentis internationaux ont besoin d'interlocuteurs clairs et d'une introduction structurée à leurs nouvelles missions. Nous apprécions les entreprises qui soutiennent activement cette transition.",
        de: "Internationale Mitarbeiter und Auszubildende benötigen klare Ansprechpartner und eine strukturierte Einführung in ihre neuen beruflichen Aufgaben. Wir begrüßen Unternehmen, die diesen Übergang aktiv unterstützen.",
        en: "International employees and apprentices need clear contacts and a structured introduction to their new professional tasks. We welcome companies that actively support this transition.",
      },
    },
    {
      title: { fr: "Le respect des règles en vigueur", de: "Die Einhaltung der geltenden Vorschriften", en: "Compliance with applicable regulations" },
      body: {
        fr: "Toutes les parties doivent respecter les dispositions applicables en matière de droit du travail, de droit professionnel et de droit de séjour. Les autorisations et reconnaissances nécessaires sont à vérifier selon la situation individuelle.",
        de: "Alle Beteiligten müssen die jeweils geltenden arbeitsrechtlichen, berufsrechtlichen und aufenthaltsrechtlichen Vorgaben beachten. Erforderliche Genehmigungen und Anerkennungen sind entsprechend der individuellen Situation zu prüfen.",
        en: "All parties must observe the applicable labour, professional and residence regulations. Required permits and recognitions must be checked according to the individual situation.",
      },
    },
  ],
  giveTitle: {
    fr: "Ce que vous pouvez attendre de Karriere Fähre",
    de: "Was Sie von Karriere Fähre erwarten können",
    en: "What you can expect from Karriere Fähre",
  },
  giveIntro: {
    fr: "Nous nous considérons comme le partenaire coordinateur entre votre entreprise et des candidats internationaux adaptés. Nos prestations dépendent du parcours de recrutement convenu et du besoin concret.",
    de: "Wir verstehen uns als koordinierender Partner zwischen Ihrem Unternehmen und geeigneten internationalen Kandidaten. Unsere Leistungen richten sich nach dem vereinbarten Rekrutierungsweg und dem konkreten Bedarf.",
    en: "We see ourselves as the coordinating partner between your company and suitable international candidates. Our services depend on the agreed recruitment path and the specific need.",
  },
  giveItems: [
    {
      title: { fr: "Une recherche de candidats ciblée", de: "Gezielte Kandidatensuche", en: "Targeted candidate search" },
      body: {
        fr: "Nous orientons la recherche selon les critères définis ensemble et tenons compte des exigences du poste ou de l'apprentissage concerné.",
        de: "Wir orientieren die Suche an den gemeinsam definierten Kriterien und berücksichtigen die Anforderungen der jeweiligen Stelle oder Ausbildung.",
        en: "We guide the search by the jointly defined criteria and take into account the requirements of the respective position or apprenticeship.",
      },
    },
    {
      title: { fr: "Un examen structuré des dossiers", de: "Strukturierte Prüfung der Bewerbungsunterlagen", en: "Structured review of application documents" },
      body: {
        fr: "Nous vérifions les documents disponibles quant à leur complétude et leur cohérence dans le cadre des prestations convenues. La vérification finale de l'authenticité et de la reconnaissance juridique des documents reste du ressort des organismes compétents, sauf disposition expresse contraire.",
        de: "Wir prüfen die vorliegenden Unterlagen auf Vollständigkeit und Plausibilität im Rahmen unserer vereinbarten Leistungen. Die abschließende Prüfung der Echtheit und rechtlichen Anerkennung von Dokumenten bleibt den jeweils zuständigen Stellen vorbehalten, soweit sie nicht ausdrücklich anderweitig geregelt ist.",
        en: "We check the documents provided for completeness and plausibility within the scope of our agreed services. The final verification of the authenticity and legal recognition of documents remains with the competent authorities, unless expressly agreed otherwise.",
      },
    },
    {
      title: { fr: "Une préparation individuelle", de: "Individuelle Vorbereitung", en: "Individual preparation" },
      body: {
        fr: "Nous aidons les candidats, si nécessaire, dans la préparation linguistique, la communication professionnelle et la préparation aux entretiens.",
        de: "Wir unterstützen die Kandidaten bei Bedarf bei der sprachlichen Vorbereitung, der berufsbezogenen Kommunikation und der Vorbereitung auf Vorstellungsgespräche.",
        en: "Where needed, we support candidates with language preparation, job-related communication and interview preparation.",
      },
    },
    {
      title: { fr: "La coordination de la communication", de: "Koordination der Kommunikation", en: "Coordination of communication" },
      body: {
        fr: "Nous facilitons les échanges entre vous et les candidats, coordonnons les étapes convenues et veillons à une communication lisible tout au long du processus.",
        de: "Wir unterstützen den Austausch zwischen Ihnen und den Kandidaten, stimmen vereinbarte Schritte ab und sorgen für eine nachvollziehbare Kommunikation während des Prozesses.",
        en: "We facilitate the exchange between you and the candidates, coordinate the agreed steps and ensure clear communication throughout the process.",
      },
    },
    {
      title: { fr: "Un accompagnement dans le cadre convenu", de: "Begleitung im vereinbarten Rahmen", en: "Support within the agreed scope" },
      body: {
        fr: "Après votre sélection, nous coordonnons les mesures convenues. L'étendue de notre soutien dépend du projet, des prérequis individuels et des accords contractuels.",
        de: "Nach Ihrer Auswahl koordinieren wir die vereinbarten weiteren Maßnahmen. Der Umfang unserer Unterstützung richtet sich nach dem jeweiligen Projekt, den individuellen Voraussetzungen und den vertraglichen Vereinbarungen.",
        en: "After your selection, we coordinate the agreed measures. The extent of our support depends on the project, the individual prerequisites and the contractual agreements.",
      },
    },
  ],

  // ── FRAMEWORK + TRANSPARENCY ──────────────────────────────────────────
  frameKicker: { fr: "Un cadre clair", de: "Klare Rahmenbedingungen", en: "A clear framework" },
  frameTitle: {
    fr: "Une collaboration au cadre clair",
    de: "Eine Zusammenarbeit mit klaren Rahmenbedingungen",
    en: "A collaboration with a clear framework",
  },
  frameIntro1: {
    fr: "Chaque entreprise a ses propres besoins en personnel. C'est pourquoi nous privilégions une concertation individuelle plutôt qu'un modèle standard rigide.",
    de: "Jedes Unternehmen hat einen eigenen Personalbedarf. Deshalb legen wir Wert auf eine individuelle Abstimmung statt auf ein starres Standardmodell.",
    en: "Every company has its own staffing needs. That is why we favour individual coordination rather than a rigid standard model.",
  },
  frameIntro2: {
    fr: "Avant le début de la collaboration, nous clarifions ensemble :",
    de: "Vor Beginn der Zusammenarbeit klären wir gemeinsam:",
    en: "Before the collaboration begins, we clarify together:",
  },
  frameChecklist: [
    { fr: "le besoin en personnel concret et le profil de candidat souhaité", de: "den konkreten Personalbedarf und das gewünschte Kandidatenprofil", en: "the specific staffing need and the desired candidate profile" },
    { fr: "les prestations de recrutement et de préparation prévues", de: "die vorgesehenen Rekrutierungs- und Vorbereitungsleistungen", en: "the planned recruitment and preparation services" },
    { fr: "les tâches et responsabilités respectives", de: "die jeweiligen Aufgaben und Verantwortlichkeiten", en: "the respective tasks and responsibilities" },
    { fr: "le déroulement prévisionnel dans le temps", de: "den voraussichtlichen zeitlichen Ablauf", en: "the expected timeline" },
    { fr: "les documents nécessaires et, le cas échéant, les procédures requises", de: "die erforderlichen Unterlagen und gegebenenfalls notwendigen Verfahren", en: "the required documents and any necessary procedures" },
    { fr: "les prestations convenues et les éventuels frais", de: "die vereinbarten Leistungen und etwaigen Kosten", en: "the agreed services and any costs" },
    { fr: "les canaux de communication et les prochaines étapes", de: "die Kommunikationswege und die nächsten Schritte", en: "the communication channels and the next steps" },
  ],
  frameAfter: {
    fr: "Les résultats de cette concertation constituent la base d'une collaboration transparente et fiable.",
    de: "Die Ergebnisse dieser Abstimmung bilden die Grundlage für eine transparente und verlässliche Zusammenarbeit.",
    en: "The results of this coordination form the basis for a transparent and reliable collaboration.",
  },
  transTitle: {
    fr: "Transparence et attentes réalistes",
    de: "Transparenz und realistische Erwartungen",
    en: "Transparency and realistic expectations",
  },
  transBody: [
    {
      fr: "Un recrutement international dépend de plusieurs facteurs : la disponibilité de candidats adaptés, les qualifications individuelles, les connaissances linguistiques, les éventuelles procédures de reconnaissance ainsi que les décisions des employeurs et des autorités compétents.",
      de: "Eine internationale Rekrutierung hängt von verschiedenen Faktoren ab. Dazu gehören die Verfügbarkeit geeigneter Kandidaten, die individuellen Qualifikationen, die Sprachkenntnisse, gegebenenfalls erforderliche Anerkennungsverfahren sowie die Entscheidungen der zuständigen Arbeitgeber und Behörden.",
      en: "International recruitment depends on several factors, including the availability of suitable candidates, the individual qualifications, the language skills, any recognition procedures required and the decisions of the competent employers and authorities.",
    },
    {
      fr: "Karriere Fähre s'engage à une communication transparente sur les possibilités, les prérequis et les limites de chaque projet.",
      de: "Karriere Fähre verpflichtet sich zu einer transparenten Kommunikation über die Möglichkeiten, Voraussetzungen und Grenzen des jeweiligen Vorhabens.",
      en: "Karriere Fähre is committed to transparent communication about the possibilities, prerequisites and limits of each project.",
    },
    {
      fr: "Une candidature, une embauche, une place d'apprentissage, une reconnaissance ou la délivrance d'un visa ne peuvent être garanties de façon générale. Les décisions correspondantes sont prises par les organismes compétents sur la base des règles en vigueur et de chaque cas particulier.",
      de: "Eine Bewerbung, eine Einstellung, ein Ausbildungsplatz, eine Anerkennung oder die Erteilung eines Visums können nicht pauschal garantiert werden. Die jeweiligen Entscheidungen treffen die zuständigen Stellen auf Grundlage der geltenden Vorschriften und des Einzelfalls.",
      en: "An application, a hire, an apprenticeship place, a recognition or the issuance of a visa cannot be guaranteed in general. The respective decisions are made by the competent authorities on the basis of the applicable regulations and the individual case.",
    },
  ],

  // ── FINAL CTA ─────────────────────────────────────────────────────────
  finalKicker: { fr: "Construire un partenariat durable", de: "Eine langfristige Partnerschaft aufbauen", en: "Build a long-term partnership" },
  finalTitle: {
    fr: "Développer ensemble le parcours de recrutement adapté",
    de: "Gemeinsam den passenden Rekrutierungsweg entwickeln",
    en: "Develop the right recruitment path together",
  },
  finalBody: [
    {
      fr: "Vous souhaitez recruter des professionnels qualifiés, pourvoir vos places d'apprentissage avec des candidats internationaux motivés ou anticiper vos besoins futurs en personnel ?",
      de: "Sie möchten qualifizierte Fachkräfte gewinnen, Ihre Ausbildungsplätze mit motivierten internationalen Kandidaten besetzen oder Ihren zukünftigen Personalbedarf vorausschauend planen?",
      en: "Do you want to win qualified professionals, fill your apprenticeship places with motivated international candidates or plan your future staffing needs ahead of time?",
    },
    {
      fr: "Parlons de vos besoins. Nous apprenons à connaître votre besoin, vous présentons les formes de collaboration possibles et définissons avec vous les prochaines étapes.",
      de: "Lassen Sie uns über Ihre Anforderungen sprechen. Wir lernen Ihren Bedarf kennen, erläutern Ihnen die möglichen Formen der Zusammenarbeit und stimmen mit Ihnen die nächsten Schritte ab.",
      en: "Let's talk about your requirements. We get to know your need, explain the possible forms of collaboration and agree the next steps with you.",
    },
  ],
  finalBold: {
    fr: "Karriere Fähre, votre partenaire pour un recrutement structuré depuis le Cameroun.",
    de: "Karriere Fähre, Ihr Partner für die strukturierte Rekrutierung aus Kamerun.",
    en: "Karriere Fähre, your partner for structured recruitment from Cameroon.",
  },
  finalCtaPrimary: { fr: "Déclarer mon besoin en personnel", de: "Jetzt Personalbedarf anmelden", en: "Register your staffing need" },
  finalCtaSecondary: { fr: "Demander un partenariat", de: "Partnerschaft anfragen", en: "Request a partnership" },
};
