import type { LocalizedText } from "./localized";

// Full content for /cours-allemand (hub page). Trilingual and factual.
// Language-requirement statements are general and hedged: the exact thresholds
// depend on the profession, the employer and the residence pathway, and are
// verified case by case. No guarantee of employment, Ausbildung place or visa.

type LT = LocalizedText;

export const COURS_PAGE: {
  heroKicker: LT;
  heroTitle: LT;
  heroTitleL1: LT;
  heroTitleL2: LT;
  heroIntro: LT;
  heroCta: LT;

  parcoursKicker: LT;
  parcoursTitle: LT;
  parcoursLead: LT;
  fullBadge: LT;
  fullTitle: LT;
  fullBody: LT;
  fullDuration: LT;
  fullCta: LT;
  fastBadge: LT;
  fastTitle: LT;
  fastTitleL1: LT;
  fastTitleL2: LT;
  fastBody1: LT;
  fastBody2: LT;
  fastCta: LT;

  approachKicker: LT;
  approachTitle: LT;
  approachLead: LT;
  approachItems: { label: LT; text: LT }[];
  approachNote: LT;

  levelKicker: LT;
  levelTitle: LT;
  levelLead: LT;
  levelCards: { tag: LT; title: LT; body: LT; linkLabel: LT; href: string }[];
  levelNote: LT;

  prepKicker: LT;
  prepTitle: LT;
  prepLead: LT;
  prepItems: { label: LT; text: LT }[];

  testKicker: LT;
  testTitle: LT;
  testBody: LT;
  testPoints: LT[];
  testCta: LT;
  testNote: LT;

  stepsKicker: LT;
  steps: { num: string; title: LT; body: LT }[];

  faqTitle: LT;
  faq: { q: LT; a: LT }[];

  finalKicker: LT;
  finalTitle: LT;
  finalText: LT;
  finalCtaPrimary: LT;
  finalCtaSecondary: LT;
} = {
  // SECTION 1 — HERO
  heroKicker: { fr: "Cours d'allemand", de: "Deutschkurse", en: "German courses" },
  heroTitle: {
    fr: "L'allemand pour votre projet professionnel en Allemagne.",
    de: "Deutsch für Ihr berufliches Projekt in Deutschland.",
    en: "German for your professional project in Germany.",
  },
  heroTitleL1: {
    fr: "L'allemand pour votre projet",
    de: "Deutsch für Ihr berufliches",
    en: "German for your professional",
  },
  heroTitleL2: {
    fr: "professionnel en Allemagne.",
    de: "Projekt in Deutschland.",
    en: "project in Germany.",
  },
  heroIntro: {
    fr: "Karriere Fähre propose deux parcours adaptés à votre niveau : une formation complète de A1 à B2 ou un parcours de perfectionnement pour les candidats qui possèdent déjà le B2.",
    de: "Karriere Fähre bietet zwei auf Ihr Niveau abgestimmte Wege: eine vollständige Ausbildung von A1 bis B2 oder einen Vertiefungsweg für Kandidatinnen und Kandidaten, die bereits das B2 besitzen.",
    en: "Karriere Fähre offers two paths tailored to your level: complete training from A1 to B2, or an advanced track for candidates who already hold B2.",
  },
  heroCta: {
    fr: "Découvrir les deux parcours",
    de: "Beide Wege entdecken",
    en: "Explore both paths",
  },

  // SECTION 2 — LES DEUX PARCOURS
  parcoursKicker: { fr: "Choisissez votre parcours", de: "Wählen Sie Ihren Weg", en: "Choose your path" },
  parcoursTitle: {
    fr: "Deux parcours selon votre niveau d'allemand",
    de: "Zwei Wege je nach Ihrem Deutschniveau",
    en: "Two paths depending on your level of German",
  },
  parcoursLead: {
    fr: "Vous débutez ou vous possédez déjà le niveau B2 ? Découvrez la formation qui correspond à votre situation et à votre projet professionnel.",
    de: "Fangen Sie bei null an oder besitzen Sie bereits das Niveau B2? Entdecken Sie die Ausbildung, die zu Ihrer Situation und Ihrem beruflichen Projekt passt.",
    en: "Starting out or already at B2? Discover the training that matches your situation and your professional project.",
  },
  fullBadge: { fr: "A1 → B2", de: "A1 → B2", en: "A1 → B2" },
  fullTitle: { fr: "Le parcours complet", de: "Der vollständige Weg", en: "The complete path" },
  fullBody: {
    fr: "Vous débutez en allemand ou vous possédez déjà quelques bases ? Progressez étape par étape jusqu'au B2 grâce à une formation structurée, avec une attention particulière portée à l'expression orale (Sprechen) et à la communication professionnelle.",
    de: "Sie beginnen mit Deutsch oder besitzen bereits einige Grundlagen? Entwickeln Sie sich Schritt für Schritt bis zum B2 mit einer strukturierten Ausbildung, mit besonderem Augenmerk auf das Sprechen und die berufliche Kommunikation.",
    en: "New to German or with a few basics already? Progress step by step up to B2 through structured training, with particular attention to speaking (Sprechen) and professional communication.",
  },
  fullDuration: {
    fr: "Durée indicative : environ 10 mois.",
    de: "Richtwert für die Dauer: etwa 10 Monate.",
    en: "Indicative duration: around 10 months.",
  },
  fullCta: { fr: "Découvrir le Full Training", de: "Full Training entdecken", en: "Discover the Full Training" },
  fastBadge: { fr: "B2 déjà certifié", de: "B2 bereits zertifiziert", en: "B2 already certified" },
  fastTitle: {
    fr: "Perfectionnez votre allemand professionnel",
    de: "Vervollkommnen Sie Ihr berufliches Deutsch",
    en: "Perfect your professional German",
  },
  fastTitleL1: {
    fr: "Perfectionnez votre allemand",
    de: "Vervollkommnen Sie Ihr",
    en: "Perfect your professional",
  },
  fastTitleL2: {
    fr: "professionnel",
    de: "berufliches Deutsch",
    en: "German",
  },
  fastBody1: {
    fr: "Vous possédez déjà un certificat B2 ? Renforcez votre expression orale, développez votre vocabulaire métier et préparez-vous aux échanges professionnels en Allemagne.",
    de: "Sie besitzen bereits ein B2-Zertifikat? Stärken Sie Ihren mündlichen Ausdruck, bauen Sie Ihren Fachwortschatz aus und bereiten Sie sich auf die berufliche Kommunikation in Deutschland vor.",
    en: "Already hold a B2 certificate? Strengthen your speaking, build your professional vocabulary and prepare for workplace communication in Germany.",
  },
  fastBody2: {
    fr: "Le parcours met l'accent sur la pratique, les simulations et la préparation aux entretiens professionnels.",
    de: "Der Weg legt den Schwerpunkt auf Praxis, Simulationen und die Vorbereitung auf berufliche Gespräche.",
    en: "The path focuses on practice, simulations and preparation for professional interviews.",
  },
  fastCta: { fr: "Découvrir le Fast Track", de: "Fast Track entdecken", en: "Discover the Fast Track" },

  // SECTION 3 — NOTRE APPROCHE PÉDAGOGIQUE
  approachKicker: { fr: "Apprendre pour communiquer", de: "Lernen, um zu kommunizieren", en: "Learning to communicate" },
  approachTitle: {
    fr: "L'allemand ne se limite pas à la grammaire.",
    de: "Deutsch beschränkt sich nicht auf Grammatik.",
    en: "German is more than grammar.",
  },
  approachLead: {
    fr: "Connaître les règles est essentiel. Savoir les utiliser dans une conversation réelle l'est tout autant. Chez Karriere Fähre, nous accordons une place centrale au Sprechen : parler, comprendre, répondre spontanément et s'exprimer avec davantage d'assurance.",
    de: "Die Regeln zu kennen ist wesentlich. Sie in einem echten Gespräch anzuwenden ebenso. Bei Karriere Fähre räumen wir dem Sprechen einen zentralen Platz ein: sprechen, verstehen, spontan antworten und sich mit mehr Sicherheit ausdrücken.",
    en: "Knowing the rules is essential. Using them in a real conversation matters just as much. At Karriere Fähre, Sprechen takes centre stage: speaking, understanding, responding spontaneously and expressing yourself with greater confidence.",
  },
  approachItems: [
    {
      label: { fr: "Sprechen", de: "Sprechen", en: "Sprechen" },
      text: {
        fr: "Développer l'expression orale et apprendre à communiquer dans des situations concrètes.",
        de: "Den mündlichen Ausdruck entwickeln und lernen, in konkreten Situationen zu kommunizieren.",
        en: "Build spoken expression and learn to communicate in concrete situations.",
      },
    },
    {
      label: { fr: "Wortschatz", de: "Wortschatz", en: "Wortschatz" },
      text: {
        fr: "Enrichir son vocabulaire et consolider les structures nécessaires pour s'exprimer plus précisément.",
        de: "Den Wortschatz erweitern und die Strukturen festigen, die für einen präziseren Ausdruck nötig sind.",
        en: "Enrich your vocabulary and consolidate the structures needed to express yourself more precisely.",
      },
    },
    {
      label: { fr: "Fachsprache", de: "Fachsprache", en: "Fachsprache" },
      text: {
        fr: "Développer le vocabulaire spécifique à son futur métier et apprendre à utiliser les expressions professionnelles adaptées.",
        de: "Den fachspezifischen Wortschatz des künftigen Berufs entwickeln und lernen, die passenden beruflichen Ausdrücke zu verwenden.",
        en: "Develop the vocabulary specific to your future profession and learn to use the right professional expressions.",
      },
    },
    {
      label: { fr: "Kommunikation im Beruf", de: "Kommunikation im Beruf", en: "Kommunikation im Beruf" },
      text: {
        fr: "S'entraîner à comprendre des consignes, poser des questions, expliquer une situation et communiquer avec ses collègues.",
        de: "Üben, Anweisungen zu verstehen, Fragen zu stellen, eine Situation zu erklären und mit Kolleginnen und Kollegen zu kommunizieren.",
        en: "Practise understanding instructions, asking questions, explaining a situation and communicating with colleagues.",
      },
    },
  ],
  approachNote: {
    fr: "Les activités professionnelles et les exercices proposés sont adaptés au parcours et aux objectifs du candidat.",
    de: "Die beruflichen Aktivitäten und Übungen werden an den Weg und die Ziele der Kandidatin oder des Kandidaten angepasst.",
    en: "The professional activities and exercises are adapted to each candidate's path and goals.",
  },

  // SECTION 4 — POURQUOI LE NIVEAU COMPTE
  levelKicker: { fr: "Votre projet professionnel", de: "Ihr berufliches Projekt", en: "Your professional project" },
  levelTitle: {
    fr: "Le niveau d'allemand dépend de votre projet.",
    de: "Das Deutschniveau hängt von Ihrem Projekt ab.",
    en: "The level of German depends on your project.",
  },
  levelLead: {
    fr: "L'allemand joue un rôle important dans la formation, le recrutement et l'intégration en Allemagne. Le niveau requis varie toutefois selon le métier, l'employeur et la voie de séjour envisagée.",
    de: "Deutsch spielt bei Ausbildung, Einstellung und Integration in Deutschland eine wichtige Rolle. Das erforderliche Niveau hängt jedoch vom Beruf, vom Arbeitgeber und vom angestrebten Aufenthaltsweg ab.",
    en: "German plays an important role in training, recruitment and integration in Germany. The level required, however, varies with the profession, the employer and the residence pathway considered.",
  },
  levelCards: [
    {
      tag: { fr: "Emploi qualifié", de: "Fachkräfte", en: "Skilled employment" },
      title: { fr: "Un niveau adapté au poste", de: "Ein auf die Stelle abgestimmtes Niveau", en: "A level suited to the role" },
      body: {
        fr: "Il n'existe pas de niveau B2 légal unique pour tous les emplois qualifiés. Les exigences dépendent notamment du métier, de l'employeur et, pour certaines professions réglementées, des conditions d'exercice et de reconnaissance.",
        de: "Es gibt kein einheitliches gesetzliches B2-Niveau für alle Fachkräfte. Die Anforderungen hängen insbesondere vom Beruf, vom Arbeitgeber und, bei bestimmten reglementierten Berufen, von den Ausübungs- und Anerkennungsbedingungen ab.",
        en: "There is no single legal B2 level for all skilled jobs. Requirements depend on the profession, the employer and, for certain regulated professions, the conditions of practice and recognition.",
      },
      linkLabel: { fr: "Comprendre les conditions", de: "Die Bedingungen verstehen", en: "Understand the conditions" },
      href: "/visa-allemagne/travailleur-qualifie",
    },
    {
      tag: { fr: "Ausbildung", de: "Ausbildung", en: "Ausbildung" },
      title: { fr: "L'allemand pour se former", de: "Deutsch, um sich auszubilden", en: "German to train" },
      body: {
        fr: "Pour le visa de formation professionnelle, le niveau B1 est généralement requis lorsque l'établissement n'a pas déjà évalué les connaissances linguistiques et qu'aucun cours préparatoire n'est prévu. Certains employeurs ou secteurs peuvent exiger un niveau supérieur.",
        de: "Für das Visum zur Berufsausbildung wird in der Regel das Niveau B1 verlangt, wenn die Einrichtung die Sprachkenntnisse nicht bereits geprüft hat und kein Vorbereitungskurs vorgesehen ist. Manche Arbeitgeber oder Branchen können ein höheres Niveau verlangen.",
        en: "For the vocational-training visa, B1 is generally required when the institution has not already assessed language skills and no preparatory course is planned. Some employers or sectors may require a higher level.",
      },
      linkLabel: { fr: "Découvrir l'Ausbildung", de: "Die Ausbildung entdecken", en: "Discover the Ausbildung" },
      href: "/ausbildung-allemagne",
    },
    {
      tag: { fr: "Chancenkarte", de: "Chancenkarte", en: "Chancenkarte" },
      title: { fr: "L'allemand comme atout", de: "Deutsch als Pluspunkt", en: "German as an asset" },
      body: {
        fr: "Les conditions linguistiques dépendent de la voie d'accès à la Chancenkarte. Pour la voie fondée sur un système de points, un niveau A1 en allemand ou B2 en anglais est notamment requis, avec au moins six points. Une autre voie existe pour certains titulaires de qualifications reconnues.",
        de: "Die sprachlichen Voraussetzungen hängen vom Zugangsweg zur Chancenkarte ab. Für den punktebasierten Weg wird unter anderem ein Niveau A1 in Deutsch oder B2 in Englisch verlangt, mit mindestens sechs Punkten. Für bestimmte Inhaber anerkannter Qualifikationen besteht ein weiterer Weg.",
        en: "Language conditions depend on the Chancenkarte access route. For the points-based route, A1 in German or B2 in English is required, among other criteria, with at least six points. Another route exists for certain holders of recognised qualifications.",
      },
      linkLabel: { fr: "Comprendre la Chancenkarte", de: "Die Chancenkarte verstehen", en: "Understand the Chancenkarte" },
      href: "/visa-allemagne/chancenkarte",
    },
  ],
  levelNote: {
    fr: "Ces informations sont générales. Les exigences applicables doivent être vérifiées pour chaque projet.",
    de: "Diese Angaben sind allgemein. Die geltenden Anforderungen müssen für jedes Projekt geprüft werden.",
    en: "This information is general. The applicable requirements must be checked for each project.",
  },

  // SECTION 5 — PRÉPARATION PROFESSIONNELLE
  prepKicker: { fr: "Au-delà des cours de langue", de: "Über den Sprachkurs hinaus", en: "Beyond the language course" },
  prepTitle: {
    fr: "Se préparer aux échanges professionnels en Allemagne.",
    de: "Sich auf die berufliche Kommunikation in Deutschland vorbereiten.",
    en: "Preparing for professional exchanges in Germany.",
  },
  prepLead: {
    fr: "La maîtrise de l'allemand est une étape importante. Il faut également savoir présenter son parcours, expliquer sa motivation et communiquer dans un contexte professionnel. Selon le parcours et le projet du candidat, la préparation peut inclure les éléments suivants.",
    de: "Die Beherrschung des Deutschen ist ein wichtiger Schritt. Ebenso gilt es, den eigenen Werdegang darzustellen, die Motivation zu erläutern und im beruflichen Kontext zu kommunizieren. Je nach Weg und Projekt der Kandidatin oder des Kandidaten kann die Vorbereitung die folgenden Elemente umfassen.",
    en: "Mastering German is an important step. You also need to present your background, explain your motivation and communicate in a professional context. Depending on the candidate's path and project, preparation may include the following elements.",
  },
  prepItems: [
    {
      label: { fr: "Vorstellungsgespräch", de: "Vorstellungsgespräch", en: "Vorstellungsgespräch" },
      text: {
        fr: "Préparation aux entretiens : présentation personnelle, parcours, motivation et réponses aux questions de l'employeur.",
        de: "Vorbereitung auf Gespräche: Selbstvorstellung, Werdegang, Motivation und Antworten auf die Fragen des Arbeitgebers.",
        en: "Interview preparation: self-presentation, background, motivation and answers to the employer's questions.",
      },
    },
    {
      label: { fr: "Coaching", de: "Coaching", en: "Coaching" },
      text: {
        fr: "Accompagnement ciblé pour identifier les difficultés et améliorer l'expression, la clarté des réponses et la confiance à l'oral.",
        de: "Gezielte Begleitung, um Schwierigkeiten zu erkennen und Ausdruck, Klarheit der Antworten und mündliche Sicherheit zu verbessern.",
        en: "Targeted support to identify difficulties and improve expression, clarity of answers and spoken confidence.",
      },
    },
    {
      label: { fr: "Simulation", de: "Simulation", en: "Simulation" },
      text: {
        fr: "Mises en situation et entretiens blancs pour s'entraîner dans des conditions proches de la réalité.",
        de: "Rollenspiele und Probegespräche, um unter realitätsnahen Bedingungen zu üben.",
        en: "Role-plays and mock interviews to practise in conditions close to reality.",
      },
    },
    {
      label: { fr: "Intégration", de: "Integration", en: "Integration" },
      text: {
        fr: "Préparation aux codes professionnels, à la communication en entreprise et aux réalités de la vie quotidienne en Allemagne.",
        de: "Vorbereitung auf die beruflichen Gepflogenheiten, die Kommunikation im Unternehmen und den Alltag in Deutschland.",
        en: "Preparation for professional codes, workplace communication and the realities of daily life in Germany.",
      },
    },
  ],

  // SECTION 6 — TEST DE POSITIONNEMENT
  testKicker: { fr: "Connaître son niveau", de: "Das eigene Niveau kennen", en: "Know your level" },
  testTitle: {
    fr: "Commencez par évaluer votre niveau d'allemand.",
    de: "Beginnen Sie damit, Ihr Deutschniveau einzuschätzen.",
    en: "Start by assessing your level of German.",
  },
  testBody: {
    fr: "Avant de choisir votre groupe, nous évaluons vos connaissances à l'oral et à l'écrit afin de déterminer votre niveau de départ et de vous orienter vers le parcours adapté.",
    de: "Bevor Sie Ihre Gruppe wählen, prüfen wir Ihre mündlichen und schriftlichen Kenntnisse, um Ihr Ausgangsniveau zu bestimmen und Sie zum passenden Weg zu leiten.",
    en: "Before you choose your group, we assess your spoken and written knowledge to determine your starting level and guide you to the right path.",
  },
  testPoints: [
    {
      fr: "Vous débutez de zéro ? Votre formation peut commencer au niveau A1.",
      de: "Fangen Sie bei null an? Ihre Ausbildung kann auf dem Niveau A1 beginnen.",
      en: "Starting from zero? Your training can begin at level A1.",
    },
    {
      fr: "Vous avez déjà étudié l'allemand ? L'évaluation permet de mieux identifier vos acquis et les compétences à renforcer.",
      de: "Haben Sie bereits Deutsch gelernt? Die Einstufung hilft, Ihre Kenntnisse und die zu stärkenden Kompetenzen besser zu erkennen.",
      en: "Already studied German? The assessment helps identify what you know and the skills to strengthen.",
    },
  ],
  testCta: { fr: "Passer le test de positionnement", de: "Einstufungstest machen", en: "Take the placement test" },
  testNote: {
    fr: "Le test de positionnement sert à l'orientation pédagogique. Il ne remplace pas un certificat officiel de langue.",
    de: "Der Einstufungstest dient der pädagogischen Orientierung. Er ersetzt kein offizielles Sprachzertifikat.",
    en: "The placement test is for teaching guidance. It does not replace an official language certificate.",
  },

  // SECTION 7 — COMMENT COMMENCER
  stepsKicker: { fr: "Votre parcours en trois étapes", de: "Ihr Weg in drei Schritten", en: "Your path in three steps" },
  steps: [
    {
      num: "01",
      title: { fr: "Évaluez votre niveau", de: "Schätzen Sie Ihr Niveau ein", en: "Assess your level" },
      body: {
        fr: "Identifiez votre point de départ et vos besoins linguistiques.",
        de: "Bestimmen Sie Ihren Ausgangspunkt und Ihren sprachlichen Bedarf.",
        en: "Identify your starting point and your language needs.",
      },
    },
    {
      num: "02",
      title: { fr: "Choisissez votre formation", de: "Wählen Sie Ihre Ausbildung", en: "Choose your training" },
      body: {
        fr: "Optez pour le Full Training ou le Fast Track selon votre niveau et votre objectif.",
        de: "Entscheiden Sie sich je nach Niveau und Ziel für das Full Training oder den Fast Track.",
        en: "Opt for the Full Training or the Fast Track depending on your level and goal.",
      },
    },
    {
      num: "03",
      title: { fr: "Préparez votre projet", de: "Bereiten Sie Ihr Projekt vor", en: "Prepare your project" },
      body: {
        fr: "Progressez en allemand et travaillez les compétences nécessaires à votre projet professionnel.",
        de: "Entwickeln Sie Ihr Deutsch und arbeiten Sie an den für Ihr berufliches Projekt nötigen Kompetenzen.",
        en: "Progress in German and work on the skills your professional project requires.",
      },
    },
  ],

  // SECTION 8 — FAQ
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
  faq: [
    {
      q: {
        fr: "Puis-je commencer l'allemand sans aucune connaissance ?",
        de: "Kann ich Deutsch ohne Vorkenntnisse beginnen?",
        en: "Can I start German with no prior knowledge?",
      },
      a: {
        fr: "Oui. Le Full Training est conçu pour les candidats qui commencent au niveau A1, sous réserve des conditions d'admission au programme.",
        de: "Ja. Das Full Training ist für Kandidatinnen und Kandidaten gedacht, die auf dem Niveau A1 beginnen, vorbehaltlich der Aufnahmebedingungen des Programms.",
        en: "Yes. The Full Training is designed for candidates who start at level A1, subject to the programme's admission conditions.",
      },
    },
    {
      q: {
        fr: "Quelle est la durée du Full Training ?",
        de: "Wie lange dauert das Full Training?",
        en: "How long does the Full Training last?",
      },
      a: {
        fr: "La durée indicative est d'environ 10 mois. Elle doit être confirmée lors de l'inscription en fonction de l'organisation de la formation.",
        de: "Der Richtwert liegt bei etwa 10 Monaten. Er wird bei der Anmeldung je nach Organisation der Ausbildung bestätigt.",
        en: "The indicative duration is around 10 months. It is confirmed at enrolment according to how the training is organised.",
      },
    },
    {
      q: {
        fr: "Puis-je intégrer directement le Fast Track ?",
        de: "Kann ich direkt in den Fast Track einsteigen?",
        en: "Can I join the Fast Track directly?",
      },
      a: {
        fr: "Le Fast Track s'adresse aux candidats disposant déjà d'un certificat B2. Votre profil et vos besoins seront examinés avant de confirmer le parcours approprié.",
        de: "Der Fast Track richtet sich an Kandidatinnen und Kandidaten, die bereits ein B2-Zertifikat besitzen. Ihr Profil und Ihr Bedarf werden geprüft, bevor der passende Weg bestätigt wird.",
        en: "The Fast Track is for candidates who already hold a B2 certificate. Your profile and needs are reviewed before the appropriate path is confirmed.",
      },
    },
    {
      q: {
        fr: "Le B2 est-il obligatoire pour travailler ou suivre une Ausbildung en Allemagne ?",
        de: "Ist B2 Pflicht, um in Deutschland zu arbeiten oder eine Ausbildung zu machen?",
        en: "Is B2 mandatory to work or do an Ausbildung in Germany?",
      },
      a: {
        fr: "Non, pas dans tous les cas. Les exigences varient selon le métier, l'employeur, la formation et les règles applicables au séjour. Certains projets nécessitent un niveau supérieur au minimum généralement demandé.",
        de: "Nein, nicht in allen Fällen. Die Anforderungen hängen vom Beruf, vom Arbeitgeber, von der Ausbildung und von den geltenden Aufenthaltsregeln ab. Manche Projekte erfordern ein höheres als das allgemein verlangte Mindestniveau.",
        en: "No, not in every case. Requirements vary with the profession, the employer, the training and the applicable residence rules. Some projects require a level above the commonly requested minimum.",
      },
    },
    {
      q: {
        fr: "La formation garantit-elle un emploi ou un visa ?",
        de: "Garantiert die Ausbildung eine Stelle oder ein Visum?",
        en: "Does the training guarantee a job or a visa?",
      },
      a: {
        fr: "Non. La formation vise à améliorer vos compétences linguistiques et votre préparation professionnelle. Une embauche, une place en Ausbildung ou un visa dépend également des critères de sélection et des décisions des employeurs et des autorités compétentes.",
        de: "Nein. Die Ausbildung soll Ihre Sprachkenntnisse und Ihre berufliche Vorbereitung verbessern. Eine Einstellung, ein Ausbildungsplatz oder ein Visum hängt auch von den Auswahlkriterien und den Entscheidungen der Arbeitgeber und zuständigen Behörden ab.",
        en: "No. The training aims to improve your language skills and professional readiness. Being hired, obtaining an Ausbildung place or a visa also depends on selection criteria and the decisions of employers and the competent authorities.",
      },
    },
    {
      q: {
        fr: "Le test de positionnement délivre-t-il un certificat officiel ?",
        de: "Stellt der Einstufungstest ein offizielles Zertifikat aus?",
        en: "Does the placement test deliver an official certificate?",
      },
      a: {
        fr: "Non. Il sert à déterminer votre niveau pédagogique de départ. Lorsqu'un certificat officiel est exigé, vous devez présenter un certificat accepté par l'organisme ou l'autorité concernée.",
        de: "Nein. Er dient dazu, Ihr pädagogisches Ausgangsniveau zu bestimmen. Wird ein offizielles Zertifikat verlangt, müssen Sie ein von der betreffenden Stelle oder Behörde anerkanntes Zertifikat vorlegen.",
        en: "No. It serves to determine your starting level for teaching purposes. When an official certificate is required, you must present one accepted by the relevant body or authority.",
      },
    },
  ],

  // SECTION 9 — CTA FINAL
  finalKicker: { fr: "Prêt à commencer ?", de: "Bereit anzufangen?", en: "Ready to begin?" },
  finalTitle: {
    fr: "Choisissez le parcours adapté à votre niveau.",
    de: "Wählen Sie den zu Ihrem Niveau passenden Weg.",
    en: "Choose the path suited to your level.",
  },
  finalText: {
    fr: "Commencez par évaluer votre allemand pour identifier la formation qui correspond le mieux à votre situation.",
    de: "Schätzen Sie zunächst Ihr Deutsch ein, um die Ausbildung zu finden, die am besten zu Ihrer Situation passt.",
    en: "Start by assessing your German to identify the training that best matches your situation.",
  },
  finalCtaPrimary: { fr: "Passer le test de positionnement", de: "Einstufungstest machen", en: "Take the placement test" },
  finalCtaSecondary: { fr: "Découvrir les deux parcours", de: "Beide Wege entdecken", en: "Explore both paths" },
};
