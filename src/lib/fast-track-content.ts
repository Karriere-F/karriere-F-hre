import type { LocalizedText } from "./localized";

// Full content for /cours-allemand/fast-track. Trilingual and factual.
// For candidates who already hold a B2 certificate. Hiring, recognition and visa
// decisions rest with employers and competent authorities; no guarantee is made.

type LT = LocalizedText;

export const FAST_PAGE: {
  heroKicker: LT;
  heroTitle: LT;
  heroIntro: LT;
  heroCtaPrimary: LT;
  heroCtaSecondary: LT;

  conceptKicker: LT;
  conceptTitle: LT;
  conceptTitleL1: LT;
  conceptTitleL2: LT;
  conceptText1: LT;
  conceptText2: LT;
  includesLabel: LT;
  includes: { label: LT; text: LT }[];

  pathKicker: LT;
  pathTitle: LT;
  pathSteps: { title: LT; body: LT }[];
  pathNote: LT;

  profilesKicker: LT;
  profilesTitle: LT;
  profilesLead: LT;
  profilesItems: LT[];
  profilesNote: LT;

  certKicker: LT;
  certTitle: LT;
  certText: LT;
  certCta: LT;

  faqTitle: LT;
  faq: { q: LT; a: LT }[];

  finalKicker: LT;
  finalTitle: LT;
  finalText: LT;
  finalCtaPrimary: LT;
  finalNote: LT;

  apply: {
    heroKicker: LT;
    heroTitle: LT;
    heroIntro: LT;
    secIdentity: LT;
    secB2: LT;
    secParcours: LT;
    secProjet: LT;
    secDocs: LT;
    prenom: LT;
    nom: LT;
    email: LT;
    whatsapp: LT;
    pays: LT;
    b2Confirm: LT;
    b2Organisme: LT;
    b2Annee: LT;
    formation: LT;
    metier: LT;
    experience: LT;
    objectif: LT;
    objectifChoose: LT;
    objectifEmploi: LT;
    objectifAusbildung: LT;
    objectifLesDeux: LT;
    domaine: LT;
    emploiRecherche: LT;
    cvLien: LT;
    diplomesLien: LT;
    message: LT;
    docsNote: LT;
    required: LT;
    submit: LT;
    submitting: LT;
    errorGeneric: LT;
    errorB2: LT;
    errorDocs: LT;
    successTitle: LT;
    successText: LT;
  };
} = {
  // SECTION 1 — HERO
  heroKicker: {
    fr: "Fast Track · Pour les candidats déjà au niveau B2",
    de: "Fast Track · Für Kandidaten bereits auf B2-Niveau",
    en: "Fast Track · For candidates already at B2 level",
  },
  heroTitle: {
    fr: "Vous avez le B2. Préparez la suite.",
    de: "Sie haben das B2. Bereiten Sie den nächsten Schritt vor.",
    en: "You have B2. Prepare what comes next.",
  },
  heroIntro: {
    fr: "Un parcours destiné aux candidats déjà titulaires d'un certificat B2 qui souhaitent renforcer leur allemand professionnel, se préparer aux entretiens et construire leur projet de carrière en Allemagne.",
    de: "Ein Weg für Kandidatinnen und Kandidaten, die bereits ein B2-Zertifikat besitzen und ihr berufliches Deutsch stärken, sich auf Gespräche vorbereiten und ihr Karriereprojekt in Deutschland aufbauen möchten.",
    en: "A path for candidates who already hold a B2 certificate and want to strengthen their professional German, prepare for interviews and build their career project in Germany.",
  },
  heroCtaPrimary: { fr: "Candidater au Fast Track", de: "Für den Fast Track bewerben", en: "Apply to the Fast Track" },
  heroCtaSecondary: { fr: "Découvrir le parcours", de: "Den Weg entdecken", en: "Discover the path" },

  // SECTION 2 — LE CONCEPT
  conceptKicker: { fr: "Fast Track", de: "Fast Track", en: "Fast Track" },
  conceptTitle: {
    fr: "Déjà au niveau B2 ? Passez à la pratique professionnelle.",
    de: "Schon auf B2-Niveau? Gehen Sie zur beruflichen Praxis über.",
    en: "Already at B2? Move on to professional practice.",
  },
  conceptTitleL1: {
    fr: "Déjà au niveau B2 ?",
    de: "Schon auf B2-Niveau?",
    en: "Already at B2?",
  },
  conceptTitleL2: {
    fr: "Passez à la pratique professionnelle.",
    de: "Gehen Sie zur beruflichen Praxis über.",
    en: "Move on to professional practice.",
  },
  conceptText1: {
    fr: "Un certificat B2 est une base importante. Pour convaincre un employeur, il faut également savoir s'exprimer spontanément, expliquer son parcours, présenter ses compétences et comprendre les échanges professionnels.",
    de: "Ein B2-Zertifikat ist eine wichtige Grundlage. Um einen Arbeitgeber zu überzeugen, muss man sich auch spontan ausdrücken, seinen Werdegang erklären, seine Kompetenzen darstellen und die berufliche Kommunikation verstehen können.",
    en: "A B2 certificate is an important foundation. To convince an employer, you also need to express yourself spontaneously, explain your background, present your skills and understand professional exchanges.",
  },
  conceptText2: {
    fr: "Le Fast Track vous aide à consolider ces compétences et à préparer les prochaines étapes de votre projet.",
    de: "Der Fast Track hilft Ihnen, diese Kompetenzen zu festigen und die nächsten Schritte Ihres Projekts vorzubereiten.",
    en: "The Fast Track helps you consolidate these skills and prepare the next steps of your project.",
  },
  includesLabel: { fr: "Ce que comprend le Fast Track", de: "Was der Fast Track umfasst", en: "What the Fast Track includes" },
  includes: [
    {
      label: { fr: "Cours d'intégration", de: "Integrationskurs", en: "Integration course" },
      text: {
        fr: "Familiarisez-vous avec les codes professionnels allemands, la communication en entreprise et les réalités de la vie quotidienne en Allemagne.",
        de: "Machen Sie sich mit den deutschen beruflichen Gepflogenheiten, der Kommunikation im Unternehmen und dem Alltag in Deutschland vertraut.",
        en: "Become familiar with German professional codes, workplace communication and the realities of daily life in Germany.",
      },
    },
    {
      label: { fr: "Fachsprache & Wortschatz", de: "Fachsprache & Wortschatz", en: "Fachsprache & Wortschatz" },
      text: {
        fr: "Développez le vocabulaire technique et les expressions liés à votre métier, à votre expérience et aux situations professionnelles que vous pourriez rencontrer.",
        de: "Bauen Sie den Fachwortschatz und die Ausdrücke aus, die mit Ihrem Beruf, Ihrer Erfahrung und den beruflichen Situationen zusammenhängen, denen Sie begegnen könnten.",
        en: "Build the technical vocabulary and expressions related to your profession, your experience and the work situations you may encounter.",
      },
    },
    {
      label: { fr: "Simulations professionnelles", de: "Berufliche Simulationen", en: "Professional simulations" },
      text: {
        fr: "Entraînez-vous à comprendre des consignes, expliquer une situation, répondre à des questions et communiquer avec des collègues dans des situations proches de la réalité.",
        de: "Üben Sie, Anweisungen zu verstehen, eine Situation zu erklären, auf Fragen zu antworten und mit Kolleginnen und Kollegen in realitätsnahen Situationen zu kommunizieren.",
        en: "Practise understanding instructions, explaining a situation, answering questions and communicating with colleagues in situations close to reality.",
      },
    },
    {
      label: { fr: "Vorstellungsgespräch-Training", de: "Vorstellungsgespräch-Training", en: "Vorstellungsgespräch training" },
      text: {
        fr: "Préparez vos entretiens avec des employeurs allemands : présentation personnelle, motivation, parcours, compétences, questions professionnelles et échanges spontanés.",
        de: "Bereiten Sie Ihre Gespräche mit deutschen Arbeitgebern vor: Selbstvorstellung, Motivation, Werdegang, Kompetenzen, berufliche Fragen und spontane Gespräche.",
        en: "Prepare your interviews with German employers: self-presentation, motivation, background, skills, professional questions and spontaneous exchanges.",
      },
    },
    {
      label: { fr: "Coaching personnalisé", de: "Individuelles Coaching", en: "Personalised coaching" },
      text: {
        fr: "Identifiez les points à améliorer et travaillez votre expression orale, votre clarté et votre capacité à présenter votre expérience de manière convaincante.",
        de: "Erkennen Sie die zu verbessernden Punkte und arbeiten Sie an Ihrem mündlichen Ausdruck, Ihrer Klarheit und Ihrer Fähigkeit, Ihre Erfahrung überzeugend darzustellen.",
        en: "Identify the points to improve and work on your speaking, your clarity and your ability to present your experience convincingly.",
      },
    },
  ],

  // SECTION 3 — PARCOURS
  pathKicker: { fr: "De l'évaluation à la candidature", de: "Von der Einschätzung zur Bewerbung", en: "From assessment to application" },
  pathTitle: {
    fr: "Un accompagnement structuré, adapté à votre profil.",
    de: "Eine strukturierte Begleitung, auf Ihr Profil abgestimmt.",
    en: "Structured support, tailored to your profile.",
  },
  pathSteps: [
    {
      title: { fr: "Confirmation de votre niveau", de: "Bestätigung Ihres Niveaus", en: "Confirmation of your level" },
      body: {
        fr: "Nous évaluons vos compétences orales et écrites pour mieux comprendre votre niveau réel, vos points forts et les aspects à renforcer.",
        de: "Wir prüfen Ihre mündlichen und schriftlichen Kompetenzen, um Ihr tatsächliches Niveau, Ihre Stärken und die zu stärkenden Aspekte besser zu verstehen.",
        en: "We assess your spoken and written skills to better understand your actual level, your strengths and the aspects to strengthen.",
      },
    },
    {
      title: { fr: "Préparation ciblée", de: "Gezielte Vorbereitung", en: "Targeted preparation" },
      body: {
        fr: "Nous travaillons votre allemand professionnel, votre vocabulaire métier et votre capacité à communiquer dans des situations de recrutement et de travail.",
        de: "Wir arbeiten an Ihrem beruflichen Deutsch, Ihrem Fachwortschatz und Ihrer Fähigkeit, in Bewerbungs- und Arbeitssituationen zu kommunizieren.",
        en: "We work on your professional German, your occupational vocabulary and your ability to communicate in recruitment and work situations.",
      },
    },
    {
      title: { fr: "Préparation du dossier", de: "Vorbereitung der Unterlagen", en: "Preparing your file" },
      body: {
        fr: "Nous examinons votre profil, vos qualifications, votre expérience et vos documents afin de préparer une candidature cohérente avec votre projet.",
        de: "Wir prüfen Ihr Profil, Ihre Qualifikationen, Ihre Erfahrung und Ihre Unterlagen, um eine zu Ihrem Projekt passende Bewerbung vorzubereiten.",
        en: "We review your profile, qualifications, experience and documents to prepare an application consistent with your project.",
      },
    },
    {
      title: { fr: "Mise en relation avec les entreprises", de: "Vermittlung an Unternehmen", en: "Connecting with companies" },
      body: {
        fr: "Lorsque votre profil correspond à une opportunité disponible, nous pouvons le présenter à une entreprise partenaire et vous accompagner dans le processus de recrutement.",
        de: "Wenn Ihr Profil zu einer verfügbaren Gelegenheit passt, können wir es einem Partnerunternehmen vorstellen und Sie im Bewerbungsprozess begleiten.",
        en: "When your profile matches an available opportunity, we can present it to a partner company and support you through the recruitment process.",
      },
    },
    {
      title: { fr: "Accompagnement des démarches", de: "Begleitung der Formalitäten", en: "Support with the formalities" },
      body: {
        fr: "Selon votre situation et le poste visé, nous vous accompagnons dans les étapes préparatoires liées à la reconnaissance des qualifications, aux formalités de visa et à la préparation du départ.",
        de: "Je nach Ihrer Situation und der angestrebten Stelle begleiten wir Sie bei den vorbereitenden Schritten zur Anerkennung der Qualifikationen, den Visaformalitäten und der Vorbereitung der Ausreise.",
        en: "Depending on your situation and the target position, we support you through the preparatory steps linked to qualification recognition, visa formalities and departure preparation.",
      },
    },
  ],
  pathNote: {
    fr: "La décision d'embauche appartient à l'employeur. Les décisions relatives à la reconnaissance et au visa relèvent des organismes et autorités compétents.",
    de: "Die Einstellungsentscheidung liegt beim Arbeitgeber. Entscheidungen über Anerkennung und Visum liegen bei den zuständigen Stellen und Behörden.",
    en: "The hiring decision rests with the employer. Decisions on recognition and visa rest with the competent bodies and authorities.",
  },

  // SECTION 4 — POUR QUELS PROFILS
  profilesKicker: { fr: "Votre expérience est un atout", de: "Ihre Erfahrung ist ein Pluspunkt", en: "Your experience is an asset" },
  profilesTitle: {
    fr: "Le Fast Track s'adresse aux candidats qui souhaitent valoriser leur profil.",
    de: "Der Fast Track richtet sich an Kandidaten, die ihr Profil zur Geltung bringen möchten.",
    en: "The Fast Track is for candidates who want to make the most of their profile.",
  },
  profilesLead: {
    fr: "Ce parcours est conçu pour les personnes qui disposent déjà d'un certificat B2 et souhaitent se préparer davantage à leur projet professionnel en Allemagne. Il peut notamment convenir aux :",
    de: "Dieser Weg ist für Personen gedacht, die bereits ein B2-Zertifikat besitzen und sich stärker auf ihr berufliches Projekt in Deutschland vorbereiten möchten. Er kann insbesondere passen für:",
    en: "This path is designed for people who already hold a B2 certificate and want to prepare further for their professional project in Germany. It may suit in particular:",
  },
  profilesItems: [
    {
      fr: "Professionnels qualifiés disposant d'une expérience dans leur métier.",
      de: "Qualifizierte Fachkräfte mit Erfahrung in ihrem Beruf.",
      en: "Qualified professionals with experience in their field.",
    },
    {
      fr: "Candidats dont la qualification doit être examinée au regard des exigences allemandes.",
      de: "Kandidaten, deren Qualifikation im Hinblick auf die deutschen Anforderungen geprüft werden muss.",
      en: "Candidates whose qualification must be examined against German requirements.",
    },
    {
      fr: "Candidats souhaitant améliorer leur communication professionnelle avant un entretien.",
      de: "Kandidaten, die ihre berufliche Kommunikation vor einem Gespräch verbessern möchten.",
      en: "Candidates wishing to improve their professional communication before an interview.",
    },
    {
      fr: "Profils qui ont besoin d'une préparation linguistique ciblée plutôt que d'un parcours complet de A1 à B2.",
      de: "Profile, die eine gezielte sprachliche Vorbereitung brauchen statt eines vollständigen Wegs von A1 bis B2.",
      en: "Profiles that need targeted language preparation rather than a full A1 to B2 path.",
    },
  ],
  profilesNote: {
    fr: "L'adéquation du parcours dépend de votre niveau réel, de votre expérience, de votre métier et de votre objectif.",
    de: "Die Eignung des Wegs hängt von Ihrem tatsächlichen Niveau, Ihrer Erfahrung, Ihrem Beruf und Ihrem Ziel ab.",
    en: "Whether the path fits depends on your actual level, your experience, your profession and your goal.",
  },

  // SECTION 5 — PAS ENCORE LE CERTIFICAT
  certKicker: { fr: "Vous n'avez pas encore passé l'examen ?", de: "Haben Sie die Prüfung noch nicht abgelegt?", en: "Haven't taken the exam yet?" },
  certTitle: { fr: "Commencez par évaluer votre niveau.", de: "Beginnen Sie damit, Ihr Niveau einzuschätzen.", en: "Start by assessing your level." },
  certText: {
    fr: "Si vous pensez avoir le niveau B2 sans disposer encore d'un certificat officiel, nous pouvons examiner votre situation et vous orienter vers une préparation adaptée à vos besoins.",
    de: "Wenn Sie glauben, das B2-Niveau zu haben, aber noch kein offizielles Zertifikat besitzen, können wir Ihre Situation prüfen und Sie zu einer auf Ihre Bedürfnisse abgestimmten Vorbereitung leiten.",
    en: "If you believe you have the B2 level but do not yet hold an official certificate, we can review your situation and guide you to preparation suited to your needs.",
  },
  certCta: { fr: "Faire évaluer mon niveau", de: "Mein Niveau einschätzen lassen", en: "Have my level assessed" },

  // SECTION 6 — FAQ
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
  faq: [
    {
      q: { fr: "Le Fast Track est-il destiné aux débutants ?", de: "Ist der Fast Track für Anfänger gedacht?", en: "Is the Fast Track meant for beginners?" },
      a: {
        fr: "Non. Le Fast Track s'adresse exclusivement aux candidats titulaires d'un certificat B2 officiel. Si vous débutez en allemand ou si vous devez encore atteindre ce niveau, le Full Training A1 → B2 est le parcours adapté.",
        de: "Nein. Der Fast Track richtet sich ausschließlich an Kandidaten mit einem offiziellen B2-Zertifikat. Wenn Sie mit Deutsch beginnen oder dieses Niveau noch erreichen müssen, ist das Full Training A1 → B2 der passende Weg.",
        en: "No. The Fast Track is exclusively for candidates who hold an official B2 certificate. If you are starting out in German or still need to reach that level, the Full Training A1 → B2 is the right path.",
      },
    },
    {
      q: { fr: "Que comprend le programme Fast Track ?", de: "Was umfasst das Fast-Track-Programm?", en: "What does the Fast Track programme include?" },
      a: {
        fr: "Le programme associe cours d'intégration, perfectionnement de l'allemand professionnel (Fachsprache), enrichissement du vocabulaire métier, simulations de situations professionnelles, préparation aux entretiens d'embauche et coaching. L'objectif est de vous préparer aux exigences linguistiques et professionnelles de votre projet en Allemagne.",
        de: "Das Programm verbindet Integrationskurs, Vertiefung des beruflichen Deutschs (Fachsprache), Erweiterung des Fachwortschatzes, Simulationen beruflicher Situationen, Vorbereitung auf Vorstellungsgespräche und Coaching. Ziel ist es, Sie auf die sprachlichen und beruflichen Anforderungen Ihres Projekts in Deutschland vorzubereiten.",
        en: "The programme combines an integration course, advanced professional German (Fachsprache), occupational vocabulary, simulations of work situations, interview preparation and coaching. The goal is to prepare you for the language and professional requirements of your project in Germany.",
      },
    },
    {
      q: { fr: "Pourquoi les cours d'intégration sont-ils importants ?", de: "Warum sind die Integrationskurse wichtig?", en: "Why are the integration courses important?" },
      a: {
        fr: "Travailler en Allemagne demande plus que des connaissances linguistiques. Les cours d'intégration vous aident à mieux comprendre la vie quotidienne, les habitudes professionnelles, les règles de communication et les attentes dans un environnement allemand. Vous vous préparez ainsi à votre futur cadre de vie et de travail.",
        de: "In Deutschland zu arbeiten erfordert mehr als Sprachkenntnisse. Die Integrationskurse helfen Ihnen, den Alltag, die beruflichen Gepflogenheiten, die Kommunikationsregeln und die Erwartungen in einem deutschen Umfeld besser zu verstehen. So bereiten Sie sich auf Ihren künftigen Lebens- und Arbeitsrahmen vor.",
        en: "Working in Germany takes more than language skills. The integration courses help you better understand daily life, professional habits, communication rules and expectations in a German environment. You thus prepare for your future living and working context.",
      },
    },
    {
      q: { fr: "Qu'est-ce que la Fachsprache ?", de: "Was ist die Fachsprache?", en: "What is Fachsprache?" },
      a: {
        fr: "La Fachsprache est le vocabulaire spécialisé utilisé dans un métier. Selon votre domaine, vous travaillez les termes techniques, les expressions professionnelles, la compréhension des consignes et la communication avec vos futurs collègues. Le contenu est adapté autant que possible à votre profil et au métier visé.",
        de: "Die Fachsprache ist der in einem Beruf verwendete Fachwortschatz. Je nach Bereich arbeiten Sie an Fachbegriffen, beruflichen Ausdrücken, dem Verstehen von Anweisungen und der Kommunikation mit Ihren künftigen Kolleginnen und Kollegen. Der Inhalt wird so weit wie möglich an Ihr Profil und den angestrebten Beruf angepasst.",
        en: "Fachsprache is the specialised vocabulary used in a profession. Depending on your field, you work on technical terms, professional expressions, understanding instructions and communicating with your future colleagues. The content is adapted as far as possible to your profile and the target profession.",
      },
    },
    {
      q: { fr: "Le certificat B2 suffit-il pour travailler en Allemagne ?", de: "Reicht das B2-Zertifikat, um in Deutschland zu arbeiten?", en: "Is a B2 certificate enough to work in Germany?" },
      a: {
        fr: "Pas nécessairement. Le B2 constitue une base linguistique importante, mais les exigences varient selon le métier, l'employeur et, pour certaines professions réglementées, les conditions spécifiques d'exercice. Le Fast Track vise à renforcer votre communication professionnelle et votre préparation à la candidature.",
        de: "Nicht unbedingt. Das B2 ist eine wichtige sprachliche Grundlage, doch die Anforderungen hängen vom Beruf, vom Arbeitgeber und, bei bestimmten reglementierten Berufen, von den spezifischen Ausübungsbedingungen ab. Der Fast Track soll Ihre berufliche Kommunikation und Ihre Bewerbungsvorbereitung stärken.",
        en: "Not necessarily. B2 is an important language foundation, but requirements vary with the profession, the employer and, for certain regulated professions, the specific conditions of practice. The Fast Track aims to strengthen your professional communication and application readiness.",
      },
    },
    {
      q: { fr: "Le Fast Track garantit-il un emploi en Allemagne ?", de: "Garantiert der Fast Track eine Stelle in Deutschland?", en: "Does the Fast Track guarantee a job in Germany?" },
      a: {
        fr: "Non. Le programme vous prépare à présenter votre profil et à participer au processus de recrutement. Une embauche dépend de votre qualification, de votre expérience, des postes disponibles et de la décision de l'employeur. La délivrance d'un visa relève également des autorités compétentes.",
        de: "Nein. Das Programm bereitet Sie darauf vor, Ihr Profil zu präsentieren und am Bewerbungsprozess teilzunehmen. Eine Einstellung hängt von Ihrer Qualifikation, Ihrer Erfahrung, den verfügbaren Stellen und der Entscheidung des Arbeitgebers ab. Die Erteilung eines Visums liegt ebenfalls bei den zuständigen Behörden.",
        en: "No. The programme prepares you to present your profile and take part in the recruitment process. Being hired depends on your qualification, your experience, available positions and the employer's decision. Issuing a visa also rests with the competent authorities.",
      },
    },
    {
      q: { fr: "Karriere Fähre m'accompagne-t-elle dans la reconnaissance de mon diplôme ?", de: "Begleitet mich Karriere Fähre bei der Anerkennung meines Abschlusses?", en: "Does Karriere Fähre support me with the recognition of my diploma?" },
      a: {
        fr: "Karriere Fähre peut vous orienter et vous accompagner dans la préparation de votre dossier et les démarches nécessaires. La décision de reconnaissance appartient toutefois à l'organisme compétent.",
        de: "Karriere Fähre kann Sie bei der Vorbereitung Ihrer Unterlagen und den nötigen Schritten orientieren und begleiten. Die Anerkennungsentscheidung liegt jedoch bei der zuständigen Stelle.",
        en: "Karriere Fähre can guide and support you in preparing your file and the necessary steps. The recognition decision, however, rests with the competent body.",
      },
    },
    {
      q: { fr: "Puis-je intégrer le Fast Track sans certificat B2 ?", de: "Kann ich ohne B2-Zertifikat in den Fast Track einsteigen?", en: "Can I join the Fast Track without a B2 certificate?" },
      a: {
        fr: "Non. Un certificat B2 officiel est une condition obligatoire d'admission au Fast Track. Si vous ne possédez pas encore ce certificat, vous devez d'abord atteindre le niveau requis et obtenir une certification reconnue. Le Full Training A1 → B2 est conçu pour vous accompagner dans cette progression.",
        de: "Nein. Ein offizielles B2-Zertifikat ist eine verpflichtende Aufnahmebedingung für den Fast Track. Wenn Sie dieses Zertifikat noch nicht besitzen, müssen Sie zuerst das erforderliche Niveau erreichen und eine anerkannte Zertifizierung erhalten. Das Full Training A1 → B2 ist darauf ausgelegt, Sie bei dieser Entwicklung zu begleiten.",
        en: "No. An official B2 certificate is a mandatory admission condition for the Fast Track. If you do not yet hold this certificate, you must first reach the required level and obtain a recognised certification. The Full Training A1 → B2 is designed to support you in that progression.",
      },
    },
  ],

  // SECTION 7 — CTA FINAL
  finalKicker: { fr: "Fast Track · Votre prochaine étape", de: "Fast Track · Ihr nächster Schritt", en: "Fast Track · Your next step" },
  finalTitle: {
    fr: "Votre B2 est acquis. Préparez-vous au monde professionnel allemand.",
    de: "Ihr B2 steht. Bereiten Sie sich auf die deutsche Arbeitswelt vor.",
    en: "Your B2 is secured. Prepare for the German professional world.",
  },
  finalText: {
    fr: "Renforcez votre Fachsprache, découvrez les codes professionnels allemands et préparez vos entretiens grâce à notre accompagnement.",
    de: "Stärken Sie Ihre Fachsprache, lernen Sie die deutschen beruflichen Gepflogenheiten kennen und bereiten Sie Ihre Gespräche mit unserer Begleitung vor.",
    en: "Strengthen your Fachsprache, discover German professional codes and prepare your interviews with our support.",
  },
  finalCtaPrimary: { fr: "Candidater au Fast Track", de: "Für den Fast Track bewerben", en: "Apply to the Fast Track" },
  finalNote: {
    fr: "Le certificat B2 officiel est obligatoire pour intégrer le Fast Track.",
    de: "Das offizielle B2-Zertifikat ist für die Aufnahme in den Fast Track verpflichtend.",
    en: "An official B2 certificate is required to join the Fast Track.",
  },

  // PAGE D'INSCRIPTION / CANDIDATURE
  apply: {
    heroKicker: { fr: "Candidature · Fast Track", de: "Bewerbung · Fast Track", en: "Application · Fast Track" },
    heroTitle: { fr: "Candidater au Fast Track", de: "Für den Fast Track bewerben", en: "Apply to the Fast Track" },
    heroIntro: {
      fr: "Renseignez votre dossier de candidature. Après l'envoi, vous recevez une confirmation de réception ; Karriere Fähre examine ensuite votre profil et détermine les prochaines étapes.",
      de: "Füllen Sie Ihre Bewerbung aus. Nach dem Absenden erhalten Sie eine Empfangsbestätigung; Karriere Fähre prüft anschließend Ihr Profil und legt die nächsten Schritte fest.",
      en: "Fill in your application. After sending it, you receive a confirmation of receipt; Karriere Fähre then reviews your profile and determines the next steps.",
    },
    secIdentity: { fr: "Identité et coordonnées", de: "Identität und Kontaktdaten", en: "Identity and contact details" },
    secB2: { fr: "Certificat B2 officiel", de: "Offizielles B2-Zertifikat", en: "Official B2 certificate" },
    secParcours: { fr: "Formation, métier et expérience", de: "Ausbildung, Beruf und Erfahrung", en: "Education, profession and experience" },
    secProjet: { fr: "Votre projet en Allemagne", de: "Ihr Projekt in Deutschland", en: "Your project in Germany" },
    secDocs: { fr: "Documents utiles", de: "Nützliche Dokumente", en: "Useful documents" },
    prenom: { fr: "Prénom", de: "Vorname", en: "First name" },
    nom: { fr: "Nom", de: "Nachname", en: "Last name" },
    email: { fr: "E-mail", de: "E-Mail", en: "Email" },
    whatsapp: { fr: "WhatsApp / téléphone", de: "WhatsApp / Telefon", en: "WhatsApp / phone" },
    pays: { fr: "Pays de résidence", de: "Wohnsitzland", en: "Country of residence" },
    b2Confirm: {
      fr: "Je possède un certificat B2 officiel (condition obligatoire).",
      de: "Ich besitze ein offizielles B2-Zertifikat (verpflichtende Bedingung).",
      en: "I hold an official B2 certificate (mandatory condition).",
    },
    b2Organisme: { fr: "Organisme (Goethe, telc, ÖSD…)", de: "Institut (Goethe, telc, ÖSD…)", en: "Body (Goethe, telc, ÖSD…)" },
    b2Annee: { fr: "Année d'obtention", de: "Jahr des Erwerbs", en: "Year obtained" },
    formation: { fr: "Formation / diplômes", de: "Ausbildung / Abschlüsse", en: "Education / qualifications" },
    metier: { fr: "Métier (si applicable)", de: "Beruf (falls zutreffend)", en: "Profession (if applicable)" },
    experience: { fr: "Expérience professionnelle", de: "Berufserfahrung", en: "Professional experience" },
    objectif: { fr: "Votre objectif", de: "Ihr Ziel", en: "Your goal" },
    objectifChoose: { fr: "Sélectionnez votre objectif", de: "Ziel auswählen", en: "Select your goal" },
    objectifEmploi: { fr: "Emploi qualifié", de: "Fachkräftebeschäftigung", en: "Skilled employment" },
    objectifAusbildung: { fr: "Ausbildung (formation professionnelle)", de: "Ausbildung", en: "Ausbildung (vocational training)" },
    objectifLesDeux: { fr: "Les deux / je ne sais pas encore", de: "Beides / noch unentschieden", en: "Both / not sure yet" },
    domaine: { fr: "Domaine professionnel visé", de: "Angestrebtes Berufsfeld", en: "Target professional field" },
    emploiRecherche: { fr: "Emploi recherché ou Ausbildung", de: "Gesuchte Stelle oder Ausbildung", en: "Position sought or Ausbildung" },
    cvLien: { fr: "Votre CV (PDF)", de: "Ihr Lebenslauf (PDF)", en: "Your CV (PDF)" },
    diplomesLien: { fr: "Vos diplômes (PDF)", de: "Ihre Abschlüsse (PDF)", en: "Your qualifications (PDF)" },
    message: { fr: "Message (facultatif)", de: "Nachricht (optional)", en: "Message (optional)" },
    docsNote: {
      fr: "Téléchargez vos documents au format PDF (5 Mo maximum par fichier). Les originaux vous seront demandés lors de l'examen de votre dossier.",
      de: "Laden Sie Ihre Dokumente im PDF-Format hoch (max. 5 MB pro Datei). Die Originale werden bei der Prüfung Ihres Dossiers angefordert.",
      en: "Upload your documents as PDF (5 MB maximum per file). Originals will be requested when your file is reviewed.",
    },
    required: { fr: "Champs obligatoires", de: "Pflichtfelder", en: "Required fields" },
    submit: { fr: "Envoyer ma candidature", de: "Bewerbung absenden", en: "Send my application" },
    submitting: { fr: "Envoi…", de: "Senden…", en: "Sending…" },
    errorGeneric: {
      fr: "Une erreur est survenue. Vérifiez vos informations et réessayez.",
      de: "Ein Fehler ist aufgetreten. Prüfen Sie Ihre Angaben und versuchen Sie es erneut.",
      en: "An error occurred. Check your details and try again.",
    },
    errorB2: {
      fr: "Le certificat B2 officiel est une condition obligatoire pour candidater au Fast Track.",
      de: "Das offizielle B2-Zertifikat ist eine verpflichtende Bedingung für die Bewerbung zum Fast Track.",
      en: "An official B2 certificate is a mandatory condition to apply to the Fast Track.",
    },
    errorDocs: {
      fr: "Le CV et les diplômes sont obligatoires, au format PDF (5 Mo maximum par fichier).",
      de: "Lebenslauf und Abschlüsse sind verpflichtend, im PDF-Format (max. 5 MB pro Datei).",
      en: "The CV and qualifications are required, in PDF format (5 MB maximum per file).",
    },
    successTitle: { fr: "Candidature bien reçue.", de: "Bewerbung erhalten.", en: "Application received." },
    successText: {
      fr: "Merci. Nous avons bien reçu votre candidature au Fast Track. Karriere Fähre examine votre dossier et revient vers vous avec les prochaines étapes.",
      de: "Danke. Wir haben Ihre Bewerbung zum Fast Track erhalten. Karriere Fähre prüft Ihr Dossier und meldet sich mit den nächsten Schritten.",
      en: "Thank you. We have received your Fast Track application. Karriere Fähre is reviewing your file and will get back to you with the next steps.",
    },
  },
};
