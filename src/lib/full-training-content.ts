import type { LocalizedText } from "./localized";

// Full content for /cours-allemand/full-training. Trilingual and factual.
// Hours, weeks and group sizes are the programme's own figures. Exam success
// and certification remain subject to the certifying body; no guarantee is made.

type LT = LocalizedText;

export const FULL_PAGE: {
  heroKicker: LT;
  heroTitle: LT;
  heroIntro: LT;
  heroStats: LT[];
  heroCtaPrimary: LT;
  heroCtaSecondary: LT;

  progKicker: LT;
  progTitle: LT;
  progLead: LT;
  levels: { tag: LT; hours: LT; sub: LT; body: LT }[];

  rhythmKicker: LT;
  rhythmTitle: LT;
  rhythmLead: LT;
  rhythmPoints: LT[];
  rhythmNote: LT;
  durationLabel: LT;
  durationItems: LT[];
  durationTotal: LT;
  durationTotalNote: LT;

  methodKicker: LT;
  methodTitle: LT;
  methodLead: LT;
  skills: { label: LT; text: LT }[];
  priorityLabel: LT;
  priorityText1: LT;
  priorityText2: LT;

  workKicker: LT;
  workTitle: LT;
  workText1: LT;
  workText2: LT;
  workText3: LT;
  workTags: LT;

  examKicker: LT;
  examTitle: LT;
  examLead: LT;
  examItems: { label: LT; text: LT }[];
  examNote: LT;

  beforeKicker: LT;
  beforeTitle: LT;
  beforeText1: LT;
  beforeText2: LT;
  beforeCta: LT;

  faqTitle: LT;
  faq: { q: LT; a: LT }[];

  finalKicker: LT;
  finalTitle: LT;
  finalText: LT;
  finalCtaPrimary: LT;
  finalCtaSecondary: LT;
} = {
  // SECTION 1 — HERO
  heroKicker: { fr: "Full Training · A1 → B2", de: "Full Training · A1 → B2", en: "Full Training · A1 → B2" },
  heroTitle: {
    fr: "Le parcours complet d'allemand, de A1 à B2.",
    de: "Der vollständige Deutschweg, von A1 bis B2.",
    en: "The complete German path, from A1 to B2.",
  },
  heroIntro: {
    fr: "Une formation intensive pour progresser étape par étape, développer vos compétences linguistiques et vous préparer à communiquer en allemand dans la vie quotidienne et professionnelle.",
    de: "Eine intensive Ausbildung, um Schritt für Schritt voranzukommen, Ihre Sprachkenntnisse zu entwickeln und sich auf die Kommunikation auf Deutsch im Alltag und im Beruf vorzubereiten.",
    en: "Intensive training to progress step by step, build your language skills and prepare to communicate in German in daily and professional life.",
  },
  heroStats: [
    { fr: "800 heures de cours", de: "800 Unterrichtsstunden", en: "800 hours of classes" },
    { fr: "80 heures de préparation à l'examen", de: "80 Stunden Prüfungsvorbereitung", en: "80 hours of exam preparation" },
    { fr: "Groupes de 5 à 7 participants maximum", de: "Gruppen von höchstens 5 bis 7 Teilnehmenden", en: "Groups of 5 to 7 participants maximum" },
  ],
  heroCtaPrimary: { fr: "Commencer mon inscription", de: "Anmeldung starten", en: "Start my registration" },
  heroCtaSecondary: { fr: "Découvrir le programme", de: "Das Programm entdecken", en: "Discover the programme" },

  // SECTION 2 — LE PROGRAMME
  progKicker: { fr: "Full Training · A1 → B2", de: "Full Training · A1 → B2", en: "Full Training · A1 → B2" },
  progTitle: {
    fr: "Quatre niveaux, puis la préparation à l'examen.",
    de: "Vier Niveaus, dann die Prüfungsvorbereitung.",
    en: "Four levels, then exam preparation.",
  },
  progLead: {
    fr: "Le Full Training vous accompagne du niveau débutant au niveau avancé. La progression est organisée en quatre niveaux successifs, avec des objectifs linguistiques et un volume horaire adaptés à chaque étape.",
    de: "Das Full Training begleitet Sie vom Anfänger- bis zum fortgeschrittenen Niveau. Die Progression ist in vier aufeinanderfolgende Niveaus gegliedert, mit sprachlichen Zielen und einem Stundenumfang, die an jede Etappe angepasst sind.",
    en: "The Full Training takes you from beginner to advanced level. Progression is organised into four successive levels, with language goals and class hours suited to each stage.",
  },
  levels: [
    {
      tag: { fr: "A1 · Débutant", de: "A1 · Anfänger", en: "A1 · Beginner" },
      hours: { fr: "160 heures · 8 semaines", de: "160 Stunden · 8 Wochen", en: "160 hours · 8 weeks" },
      sub: { fr: "Sous-niveaux : A1.1 et A1.2", de: "Teilstufen: A1.1 und A1.2", en: "Sub-levels: A1.1 and A1.2" },
      body: {
        fr: "Vous apprenez à comprendre et à utiliser des expressions familières, à vous présenter, à poser des questions simples et à communiquer dans des situations quotidiennes élémentaires.",
        de: "Sie lernen, vertraute Ausdrücke zu verstehen und zu verwenden, sich vorzustellen, einfache Fragen zu stellen und in elementaren Alltagssituationen zu kommunizieren.",
        en: "You learn to understand and use familiar expressions, introduce yourself, ask simple questions and communicate in basic everyday situations.",
      },
    },
    {
      tag: { fr: "A2 · Élémentaire", de: "A2 · Grundlegend", en: "A2 · Elementary" },
      hours: { fr: "160 heures · 8 semaines", de: "160 Stunden · 8 Wochen", en: "160 hours · 8 weeks" },
      sub: { fr: "Sous-niveaux : A2.1 et A2.2", de: "Teilstufen: A2.1 und A2.2", en: "Sub-levels: A2.1 and A2.2" },
      body: {
        fr: "Vous apprenez à comprendre des phrases fréquentes, à échanger des informations simples et à communiquer dans des situations habituelles liées notamment à la famille, aux achats, au travail et à votre environnement immédiat.",
        de: "Sie lernen, häufige Sätze zu verstehen, einfache Informationen auszutauschen und in gewohnten Situationen zu kommunizieren, die unter anderem Familie, Einkäufe, Arbeit und Ihr unmittelbares Umfeld betreffen.",
        en: "You learn to understand frequent phrases, exchange simple information and communicate in routine situations relating to family, shopping, work and your immediate environment.",
      },
    },
    {
      tag: { fr: "B1 · Intermédiaire", de: "B1 · Mittelstufe", en: "B1 · Intermediate" },
      hours: { fr: "240 heures · 12 semaines", de: "240 Stunden · 12 Wochen", en: "240 hours · 12 weeks" },
      sub: { fr: "Sous-niveaux : B1.1 et B1.2", de: "Teilstufen: B1.1 und B1.2", en: "Sub-levels: B1.1 and B1.2" },
      body: {
        fr: "Vous développez votre autonomie linguistique. Vous apprenez à vous débrouiller dans de nombreuses situations du quotidien, à raconter une expérience, à expliquer un projet et à exprimer votre opinion de manière simple et cohérente.",
        de: "Sie entwickeln Ihre sprachliche Selbstständigkeit. Sie lernen, sich in vielen Alltagssituationen zurechtzufinden, eine Erfahrung zu erzählen, ein Vorhaben zu erklären und Ihre Meinung einfach und zusammenhängend auszudrücken.",
        en: "You build linguistic autonomy. You learn to cope in many everyday situations, recount an experience, explain a plan and express your opinion simply and coherently.",
      },
    },
    {
      tag: { fr: "B2 · Avancé", de: "B2 · Fortgeschritten", en: "B2 · Advanced" },
      hours: { fr: "240 heures · 12 semaines", de: "240 Stunden · 12 Wochen", en: "240 hours · 12 weeks" },
      sub: { fr: "Sous-niveaux : B2.1 et B2.2", de: "Teilstufen: B2.1 und B2.2", en: "Sub-levels: B2.1 and B2.2" },
      body: {
        fr: "Vous approfondissez votre capacité à comprendre des textes et des échanges complexes, à participer à des conversations avec davantage de spontanéité et à présenter clairement vos idées et vos arguments.",
        de: "Sie vertiefen Ihre Fähigkeit, komplexe Texte und Gespräche zu verstehen, mit mehr Spontaneität an Unterhaltungen teilzunehmen und Ihre Ideen und Argumente klar darzustellen.",
        en: "You deepen your ability to understand complex texts and exchanges, take part in conversations with more spontaneity and present your ideas and arguments clearly.",
      },
    },
  ],

  // SECTION 3 — LE RYTHME
  rhythmKicker: { fr: "Une progression structurée", de: "Eine strukturierte Progression", en: "A structured progression" },
  rhythmTitle: {
    fr: "Un rythme intensif pour avancer régulièrement.",
    de: "Ein intensiver Rhythmus, um regelmäßig voranzukommen.",
    en: "An intensive pace to progress steadily.",
  },
  rhythmLead: {
    fr: "La formation repose sur un rythme régulier qui vous permet de travailler les différentes compétences linguistiques et de progresser d'un niveau au suivant.",
    de: "Die Ausbildung beruht auf einem regelmäßigen Rhythmus, der es Ihnen ermöglicht, die verschiedenen Sprachkompetenzen zu üben und von einem Niveau zum nächsten voranzukommen.",
    en: "The training is built on a regular pace that lets you work on the different language skills and move from one level to the next.",
  },
  rhythmPoints: [
    { fr: "4 heures de cours par jour", de: "4 Unterrichtsstunden pro Tag", en: "4 hours of class per day" },
    { fr: "5 jours par semaine", de: "5 Tage pro Woche", en: "5 days per week" },
    { fr: "20 heures de cours par semaine", de: "20 Unterrichtsstunden pro Woche", en: "20 hours of class per week" },
    { fr: "5 à 7 participants maximum par groupe", de: "5 bis 7 Teilnehmende höchstens pro Gruppe", en: "5 to 7 participants maximum per group" },
  ],
  rhythmNote: {
    fr: "Ce format favorise la pratique régulière, les échanges en groupe et le suivi de votre progression.",
    de: "Dieses Format fördert regelmäßige Praxis, den Austausch in der Gruppe und die Begleitung Ihrer Fortschritte.",
    en: "This format encourages regular practice, group exchanges and the tracking of your progress.",
  },
  durationLabel: { fr: "La durée du parcours", de: "Die Dauer des Wegs", en: "The duration of the path" },
  durationItems: [
    { fr: "A1 : 8 semaines", de: "A1: 8 Wochen", en: "A1: 8 weeks" },
    { fr: "A2 : 8 semaines", de: "A2: 8 Wochen", en: "A2: 8 weeks" },
    { fr: "B1 : 12 semaines", de: "B1: 12 Wochen", en: "B1: 12 weeks" },
    { fr: "B2 : 12 semaines", de: "B2: 12 Wochen", en: "B2: 12 weeks" },
    { fr: "Préparation à l'examen : 4 semaines", de: "Prüfungsvorbereitung: 4 Wochen", en: "Exam preparation: 4 weeks" },
  ],
  durationTotal: {
    fr: "800 heures de cours + 80 heures de préparation à l'examen",
    de: "800 Unterrichtsstunden + 80 Stunden Prüfungsvorbereitung",
    en: "800 hours of classes + 80 hours of exam preparation",
  },
  durationTotalNote: {
    fr: "Soit environ 44 semaines de formation et de préparation, selon le calendrier effectif des cours.",
    de: "Das sind etwa 44 Wochen Ausbildung und Vorbereitung, je nach tatsächlichem Kursplan.",
    en: "That is about 44 weeks of training and preparation, depending on the actual course schedule.",
  },

  // SECTION 4 — MÉTHODE
  methodKicker: { fr: "Les quatre compétences linguistiques", de: "Die vier sprachlichen Kompetenzen", en: "The four language skills" },
  methodTitle: {
    fr: "Comprendre, parler, lire et écrire en allemand.",
    de: "Deutsch verstehen, sprechen, lesen und schreiben.",
    en: "Understand, speak, read and write in German.",
  },
  methodLead: {
    fr: "Pour maîtriser une langue, il faut développer les quatre compétences linguistiques. Elles sont complémentaires et sont travaillées tout au long de la formation.",
    de: "Um eine Sprache zu beherrschen, müssen die vier sprachlichen Kompetenzen entwickelt werden. Sie ergänzen sich und werden während der gesamten Ausbildung geübt.",
    en: "To master a language, you need to develop the four language skills. They are complementary and are practised throughout the training.",
  },
  skills: [
    {
      label: { fr: "Sprechen — Parler", de: "Sprechen", en: "Sprechen — Speaking" },
      text: {
        fr: "Développer votre expression orale, apprendre à répondre spontanément, poser des questions et participer à des conversations.",
        de: "Ihren mündlichen Ausdruck entwickeln, spontan antworten lernen, Fragen stellen und an Gesprächen teilnehmen.",
        en: "Build your spoken expression, learn to respond spontaneously, ask questions and take part in conversations.",
      },
    },
    {
      label: { fr: "Hören — Écouter", de: "Hören", en: "Hören — Listening" },
      text: {
        fr: "Comprendre des dialogues, des conversations et des informations orales adaptées à votre niveau.",
        de: "Dialoge, Gespräche und mündliche Informationen verstehen, die an Ihr Niveau angepasst sind.",
        en: "Understand dialogues, conversations and spoken information suited to your level.",
      },
    },
    {
      label: { fr: "Lesen — Lire", de: "Lesen", en: "Lesen — Reading" },
      text: {
        fr: "Comprendre des textes, des messages, des consignes et des documents de difficulté progressive.",
        de: "Texte, Nachrichten, Anweisungen und Dokumente mit zunehmendem Schwierigkeitsgrad verstehen.",
        en: "Understand texts, messages, instructions and documents of progressive difficulty.",
      },
    },
    {
      label: { fr: "Schreiben — Écrire", de: "Schreiben", en: "Schreiben — Writing" },
      text: {
        fr: "Construire des phrases correctes, rédiger des messages et organiser vos idées par écrit.",
        de: "Korrekte Sätze bilden, Nachrichten verfassen und Ihre Ideen schriftlich ordnen.",
        en: "Build correct sentences, write messages and organise your ideas in writing.",
      },
    },
  ],
  priorityLabel: { fr: "Notre priorité : la pratique", de: "Unsere Priorität: die Praxis", en: "Our priority: practice" },
  priorityText1: {
    fr: "Nous accordons une attention particulière à l'expression orale à travers les dialogues, les exercices de conversation, les questions-réponses et les mises en situation.",
    de: "Wir legen besonderes Augenmerk auf den mündlichen Ausdruck durch Dialoge, Konversationsübungen, Frage-Antwort-Sequenzen und Rollenspiele.",
    en: "We pay particular attention to speaking through dialogues, conversation exercises, questions and answers, and role-plays.",
  },
  priorityText2: {
    fr: "L'objectif est de vous aider à utiliser l'allemand de manière de plus en plus autonome, et pas uniquement à connaître les règles de grammaire.",
    de: "Ziel ist es, Ihnen zu helfen, Deutsch zunehmend selbstständig zu verwenden, und nicht nur die Grammatikregeln zu kennen.",
    en: "The goal is to help you use German more and more independently, not only to know the grammar rules.",
  },

  // SECTION 5 — VIE PROFESSIONNELLE
  workKicker: { fr: "Au-delà de la grammaire", de: "Über die Grammatik hinaus", en: "Beyond grammar" },
  workTitle: {
    fr: "Apprendre l'allemand pour mieux communiquer.",
    de: "Deutsch lernen, um besser zu kommunizieren.",
    en: "Learning German to communicate better.",
  },
  workText1: {
    fr: "La langue est un outil essentiel pour comprendre son environnement, échanger avec les autres et progresser dans son projet professionnel.",
    de: "Die Sprache ist ein wesentliches Werkzeug, um sein Umfeld zu verstehen, sich mit anderen auszutauschen und im beruflichen Projekt voranzukommen.",
    en: "Language is an essential tool for understanding your environment, exchanging with others and progressing in your professional project.",
  },
  workText2: {
    fr: "Au fil de la formation, vous développez les bases nécessaires pour comprendre des informations, expliquer vos idées et communiquer avec davantage d'assurance.",
    de: "Im Laufe der Ausbildung entwickeln Sie die nötigen Grundlagen, um Informationen zu verstehen, Ihre Ideen zu erklären und mit mehr Sicherheit zu kommunizieren.",
    en: "Through the training, you build the foundations needed to understand information, explain your ideas and communicate with more confidence.",
  },
  workText3: {
    fr: "Selon votre niveau et votre projet, des exercices peuvent également vous aider à enrichir votre vocabulaire et à vous familiariser avec des situations de communication professionnelle.",
    de: "Je nach Niveau und Projekt können Übungen Ihnen auch helfen, Ihren Wortschatz zu erweitern und sich mit beruflichen Kommunikationssituationen vertraut zu machen.",
    en: "Depending on your level and project, exercises can also help you enrich your vocabulary and become familiar with professional communication situations.",
  },
  workTags: {
    fr: "Sprechen · Wortschatz · Verstehen · Kommunizieren",
    de: "Sprechen · Wortschatz · Verstehen · Kommunizieren",
    en: "Sprechen · Wortschatz · Verstehen · Kommunizieren",
  },

  // SECTION 6 — PRÉPARATION À L'EXAMEN
  examKicker: { fr: "80 heures · 4 semaines", de: "80 Stunden · 4 Wochen", en: "80 hours · 4 weeks" },
  examTitle: {
    fr: "Préparez-vous à passer votre examen B2.",
    de: "Bereiten Sie sich auf Ihre B2-Prüfung vor.",
    en: "Prepare to sit your B2 exam.",
  },
  examLead: {
    fr: "Après la formation linguistique, un module dédié permet de se familiariser avec le format de l'examen choisi et de travailler les compétences évaluées.",
    de: "Nach der Sprachausbildung ermöglicht ein eigenes Modul, sich mit dem Format der gewählten Prüfung vertraut zu machen und die bewerteten Kompetenzen zu üben.",
    en: "After the language training, a dedicated module lets you become familiar with the chosen exam format and work on the assessed skills.",
  },
  examItems: [
    {
      label: { fr: "Compréhension écrite", de: "Leseverstehen", en: "Reading comprehension" },
      text: {
        fr: "Apprendre à identifier les informations importantes et à traiter différents types de textes.",
        de: "Lernen, wichtige Informationen zu erkennen und verschiedene Textarten zu bearbeiten.",
        en: "Learn to identify key information and handle different types of texts.",
      },
    },
    {
      label: { fr: "Compréhension orale", de: "Hörverstehen", en: "Listening comprehension" },
      text: {
        fr: "S'entraîner à comprendre des dialogues, des annonces et des enregistrements dans les conditions de l'examen.",
        de: "Üben, Dialoge, Ansagen und Aufnahmen unter Prüfungsbedingungen zu verstehen.",
        en: "Practise understanding dialogues, announcements and recordings under exam conditions.",
      },
    },
    {
      label: { fr: "Expression écrite", de: "Schriftlicher Ausdruck", en: "Written expression" },
      text: {
        fr: "Organiser ses idées, structurer ses textes et répondre aux consignes demandées.",
        de: "Ideen ordnen, Texte strukturieren und den geforderten Anweisungen entsprechen.",
        en: "Organise your ideas, structure your texts and respond to the given instructions.",
      },
    },
    {
      label: { fr: "Expression orale", de: "Mündlicher Ausdruck", en: "Spoken expression" },
      text: {
        fr: "Présenter un sujet, argumenter, répondre aux questions et interagir avec un interlocuteur.",
        de: "Ein Thema präsentieren, argumentieren, auf Fragen antworten und mit einem Gesprächspartner interagieren.",
        en: "Present a topic, argue, answer questions and interact with a conversation partner.",
      },
    },
    {
      label: { fr: "Gestion du temps", de: "Zeitmanagement", en: "Time management" },
      text: {
        fr: "S'exercer au format des épreuves et apprendre à répartir son temps efficacement.",
        de: "Das Format der Prüfungsteile üben und lernen, die Zeit effizient einzuteilen.",
        en: "Practise the format of the test sections and learn to manage your time efficiently.",
      },
    },
  ],
  examNote: {
    fr: "La préparation porte sur le format de l'examen retenu, selon les possibilités proposées dans le programme. Le passage de l'examen officiel et l'obtention du certificat restent soumis aux conditions de l'organisme certificateur.",
    de: "Die Vorbereitung bezieht sich auf das Format der gewählten Prüfung, je nach den im Programm angebotenen Möglichkeiten. Das Ablegen der offiziellen Prüfung und der Erwerb des Zertifikats bleiben den Bedingungen der zertifizierenden Stelle unterworfen.",
    en: "Preparation covers the format of the chosen exam, according to the options offered in the programme. Sitting the official exam and obtaining the certificate remain subject to the conditions of the certifying body.",
  },

  // SECTION 7 — AVANT DE COMMENCER
  beforeKicker: { fr: "Votre niveau de départ", de: "Ihr Ausgangsniveau", en: "Your starting level" },
  beforeTitle: {
    fr: "Chaque parcours commence par une évaluation.",
    de: "Jeder Weg beginnt mit einer Einstufung.",
    en: "Every path begins with an assessment.",
  },
  beforeText1: {
    fr: "Vous débutez en allemand ou vous avez déjà acquis certaines bases ? Une évaluation préalable permet de mieux comprendre votre niveau et de vérifier si le Full Training correspond à vos besoins.",
    de: "Sie beginnen mit Deutsch oder haben bereits einige Grundlagen erworben? Eine vorherige Einstufung hilft, Ihr Niveau besser zu verstehen und zu prüfen, ob das Full Training zu Ihren Bedürfnissen passt.",
    en: "New to German or with some basics already? A prior assessment helps us understand your level and check whether the Full Training matches your needs.",
  },
  beforeText2: {
    fr: "Nous pouvons ainsi discuter de votre situation, de votre objectif et du parcours adapté.",
    de: "So können wir über Ihre Situation, Ihr Ziel und den passenden Weg sprechen.",
    en: "We can then discuss your situation, your goal and the right path.",
  },
  beforeCta: { fr: "Demander une évaluation", de: "Eine Einstufung anfragen", en: "Request an assessment" },

  // SECTION 8 — FAQ
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
  faq: [
    {
      q: { fr: "À qui s'adresse le Full Training ?", de: "An wen richtet sich das Full Training?", en: "Who is the Full Training for?" },
      a: {
        fr: "Le Full Training s'adresse aux candidats qui souhaitent développer leurs compétences en allemand, du niveau débutant jusqu'au B2, dans le cadre d'un programme structuré.",
        de: "Das Full Training richtet sich an Kandidatinnen und Kandidaten, die ihre Deutschkenntnisse vom Anfänger- bis zum B2-Niveau im Rahmen eines strukturierten Programms entwickeln möchten.",
        en: "The Full Training is for candidates who want to build their German skills, from beginner up to B2, within a structured programme.",
      },
    },
    {
      q: { fr: "Combien de temps dure la formation ?", de: "Wie lange dauert die Ausbildung?", en: "How long does the training last?" },
      a: {
        fr: "Le programme prévoit 800 heures de cours réparties sur quatre niveaux, suivies de 80 heures de préparation à l'examen. À raison de 20 heures par semaine, cela représente environ 44 semaines au total. Le calendrier effectif peut varier.",
        de: "Das Programm sieht 800 Unterrichtsstunden über vier Niveaus vor, gefolgt von 80 Stunden Prüfungsvorbereitung. Bei 20 Stunden pro Woche sind das insgesamt etwa 44 Wochen. Der tatsächliche Zeitplan kann variieren.",
        en: "The programme provides 800 hours of classes across four levels, followed by 80 hours of exam preparation. At 20 hours a week, that is about 44 weeks in total. The actual schedule may vary.",
      },
    },
    {
      q: { fr: "Combien d'heures de cours y a-t-il par semaine ?", de: "Wie viele Unterrichtsstunden gibt es pro Woche?", en: "How many class hours are there per week?" },
      a: {
        fr: "Le programme prévoit 20 heures de cours par semaine, à raison de quatre heures par jour et cinq jours par semaine.",
        de: "Das Programm sieht 20 Unterrichtsstunden pro Woche vor, bei vier Stunden pro Tag und fünf Tagen pro Woche.",
        en: "The programme provides 20 hours of class per week, at four hours a day, five days a week.",
      },
    },
    {
      q: { fr: "Les groupes sont-ils nombreux ?", de: "Sind die Gruppen groß?", en: "Are the groups large?" },
      a: {
        fr: "Les groupes sont prévus pour accueillir entre cinq et sept participants maximum, afin de favoriser les échanges et la pratique.",
        de: "Die Gruppen sind für höchstens fünf bis sieben Teilnehmende ausgelegt, um Austausch und Praxis zu fördern.",
        en: "Groups are designed for five to seven participants at most, to encourage exchange and practice.",
      },
    },
    {
      q: { fr: "Le B2 est-il obligatoire pour travailler en Allemagne ?", de: "Ist B2 Pflicht, um in Deutschland zu arbeiten?", en: "Is B2 mandatory to work in Germany?" },
      a: {
        fr: "Le niveau requis dépend du métier, de l'employeur et des conditions applicables au projet. Certains postes ou parcours exigent un niveau B2, mais ce n'est pas une règle universelle.",
        de: "Das erforderliche Niveau hängt vom Beruf, vom Arbeitgeber und von den für das Projekt geltenden Bedingungen ab. Manche Stellen oder Wege verlangen B2, aber das ist keine allgemeingültige Regel.",
        en: "The level required depends on the profession, the employer and the conditions applicable to the project. Some positions or paths require B2, but this is not a universal rule.",
      },
    },
    {
      q: { fr: "La formation comprend-elle la préparation à l'examen ?", de: "Umfasst die Ausbildung die Prüfungsvorbereitung?", en: "Does the training include exam preparation?" },
      a: {
        fr: "Oui. Le programme prévoit un module de 80 heures consacré à la préparation de l'examen retenu.",
        de: "Ja. Das Programm sieht ein Modul von 80 Stunden für die Vorbereitung der gewählten Prüfung vor.",
        en: "Yes. The programme includes an 80-hour module dedicated to preparing for the chosen exam.",
      },
    },
    {
      q: { fr: "La formation garantit-elle l'obtention du B2 ?", de: "Garantiert die Ausbildung das Erreichen von B2?", en: "Does the training guarantee reaching B2?" },
      a: {
        fr: "Non. La formation et la préparation à l'examen visent à développer vos compétences, mais la réussite dépend notamment de votre progression et de vos résultats à l'examen officiel.",
        de: "Nein. Ausbildung und Prüfungsvorbereitung sollen Ihre Kompetenzen entwickeln, doch der Erfolg hängt unter anderem von Ihrem Fortschritt und Ihren Ergebnissen in der offiziellen Prüfung ab.",
        en: "No. The training and exam preparation aim to build your skills, but success depends notably on your progress and your results in the official exam.",
      },
    },
  ],

  // SECTION 9 — CTA FINAL
  finalKicker: { fr: "Prêt à commencer ?", de: "Bereit anzufangen?", en: "Ready to begin?" },
  finalTitle: {
    fr: "Donnez une structure à votre apprentissage de l'allemand.",
    de: "Geben Sie Ihrem Deutschlernen eine Struktur.",
    en: "Give your German learning a structure.",
  },
  finalText: {
    fr: "Découvrez le programme Full Training et vérifiez si ce parcours correspond à votre niveau et à votre projet.",
    de: "Entdecken Sie das Full-Training-Programm und prüfen Sie, ob dieser Weg zu Ihrem Niveau und Ihrem Projekt passt.",
    en: "Discover the Full Training programme and check whether this path matches your level and your project.",
  },
  finalCtaPrimary: { fr: "Commencer mon inscription", de: "Anmeldung starten", en: "Start my registration" },
  finalCtaSecondary: { fr: "Revenir au programme", de: "Zurück zum Programm", en: "Back to the programme" },
};
