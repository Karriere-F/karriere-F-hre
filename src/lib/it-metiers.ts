// IT / tech-sector professions and their detailed fiches. Static, trilingual and
// grounded in public German data (salaries: StepStone / Gehalt.de / Bundesagentur
// für Arbeit; shortage figures: Bitkom), never invented. Numbers are given as
// ranges with a source note and a disclaimer on every fiche, because the private
// salary portals differ and self-label their year. New fiches are added under
// IT_FICHES as their content is researched; list items without a fiche route to
// "Postuler" until their fiche is written.

import type { LocalizedText } from "./localized";

export { tr } from "./localized";
export type { LocalizedText };

export type ItMetier = {
  slug: string;
  /** Display name (German title kept for the Ausbildung path, the searched term). */
  name: LocalizedText;
  /** Short gloss shown under the name. */
  note: LocalizedText;
};

export type FicheSection = { heading: LocalizedText; body: LocalizedText };
export type FicheFaq = { q: LocalizedText; a: LocalizedText };

export type ItFiche = {
  slug: string;
  title: LocalizedText;
  intro: LocalizedText;
  image?: string; // filename in /public/images/metiers/informatique
  video?: string; // optional embed URL (YouTube), rendered when present
  sections: FicheSection[];
  faq: FicheFaq[];
  sourceNote: LocalizedText;
};

// Path 1, "Je veux faire une Ausbildung" (train in Germany). German titles are
// the real, searched terms; the note carries the local-language gloss.
export const IT_AUSBILDUNG_METIERS: ItMetier[] = [
  {
    slug: "fachinformatiker-anwendungsentwicklung",
    name: { fr: "Fachinformatiker Anwendungsentwicklung", de: "Fachinformatiker Anwendungsentwicklung", en: "Fachinformatiker Anwendungsentwicklung" },
    note: { fr: "Développement d'applications", de: "Anwendungsentwicklung", en: "Application development" },
  },
  {
    slug: "fachinformatiker-systemintegration",
    name: { fr: "Fachinformatiker Systemintegration", de: "Fachinformatiker Systemintegration", en: "Fachinformatiker Systemintegration" },
    note: { fr: "Intégration systèmes et réseaux", de: "Systemintegration", en: "System integration" },
  },
  {
    slug: "it-system-elektroniker",
    name: { fr: "IT-System-Elektroniker", de: "IT-System-Elektroniker", en: "IT-System-Elektroniker" },
    note: { fr: "Électronicien des systèmes IT", de: "IT-Systeme installieren", en: "IT systems electronics" },
  },
  {
    slug: "kaufmann-digitalisierungsmanagement",
    name: { fr: "Kaufmann für Digitalisierungsmanagement", de: "Kaufmann für Digitalisierungsmanagement", en: "Kaufmann für Digitalisierungsmanagement" },
    note: { fr: "Gestion de la digitalisation", de: "Digitalisierungsmanagement", en: "Digitalisation management" },
  },
  {
    slug: "matse",
    name: { fr: "Mathematisch-technischer Softwareentwickler (MATSE)", de: "Mathematisch-technischer Softwareentwickler (MATSE)", en: "Mathematisch-technischer Softwareentwickler (MATSE)" },
    note: { fr: "Développement logiciel mathématique", de: "Wissenschaftliche Programmierung", en: "Scientific programming" },
  },
];

// Path 2, "Je suis déjà diplômé" (already qualified, seeking placement). Titles in
// the reader's language, with the German market term as the gloss.
export const IT_DIPLOME_METIERS: ItMetier[] = [
  { slug: "developpeur", name: { fr: "Développeur / Software Engineer", de: "Softwareentwickler", en: "Software developer" }, note: { fr: "Développement logiciel", de: "Softwareentwicklung", en: "Software engineering" } },
  { slug: "developpeur-web", name: { fr: "Développeur web", de: "Webentwickler", en: "Web developer" }, note: { fr: "Front-end, back-end, full-stack", de: "Front-end, Back-end, Full-stack", en: "Front-end, back-end, full-stack" } },
  { slug: "administrateur-systeme", name: { fr: "Administrateur systèmes et réseaux", de: "Systemadministrator", en: "System administrator" }, note: { fr: "Infrastructure et réseaux", de: "Infrastruktur und Netzwerke", en: "Infrastructure and networks" } },
  { slug: "devops", name: { fr: "Ingénieur DevOps", de: "DevOps Engineer", en: "DevOps engineer" }, note: { fr: "Cloud, CI/CD, automatisation", de: "Cloud, CI/CD, Automatisierung", en: "Cloud, CI/CD, automation" } },
  { slug: "cloud", name: { fr: "Architecte / Ingénieur cloud", de: "Cloud Architect / Engineer", en: "Cloud architect / engineer" }, note: { fr: "AWS, Azure, Google Cloud", de: "AWS, Azure, Google Cloud", en: "AWS, Azure, Google Cloud" } },
  { slug: "data-scientist", name: { fr: "Data Scientist / Data Engineer", de: "Data Scientist / Data Engineer", en: "Data scientist / engineer" }, note: { fr: "Données et intelligence artificielle", de: "Daten und KI", en: "Data and AI" } },
  { slug: "ml-ai", name: { fr: "Ingénieur IA / Machine Learning", de: "Machine Learning / AI Engineer", en: "ML / AI engineer" }, note: { fr: "Modèles et IA appliquée", de: "Modelle und angewandte KI", en: "Models and applied AI" } },
  { slug: "cybersecurite", name: { fr: "Expert cybersécurité", de: "IT-Sicherheitsexperte", en: "Cybersecurity specialist" }, note: { fr: "Sécurité, BSI, NIS2", de: "Sicherheit, BSI, NIS2", en: "Security, BSI, NIS2" } },
  { slug: "dba", name: { fr: "Administrateur base de données", de: "Datenbankadministrator", en: "Database administrator" }, note: { fr: "SQL, Oracle, SAP HANA", de: "SQL, Oracle, SAP HANA", en: "SQL, Oracle, SAP HANA" } },
  { slug: "sap-consultant", name: { fr: "Consultant SAP / ERP", de: "SAP / ERP Consultant", en: "SAP / ERP consultant" }, note: { fr: "S/4HANA, processus métier", de: "S/4HANA, Geschäftsprozesse", en: "S/4HANA, business processes" } },
];

export const IT_UI = {
  sector: { fr: "Informatique", de: "IT", en: "IT" },
  metiers: { fr: "Métiers", de: "Berufe", en: "Occupations" },
  home: { fr: "Accueil", de: "Startseite", en: "Home" },
  hubTitle: {
    fr: "Métiers de l'informatique en Allemagne",
    de: "IT-Berufe in Deutschland",
    en: "IT professions in Germany",
  },
  hubIntro: {
    fr: "L'Allemagne manque de dizaines de milliers de professionnels de l'informatique. Deux chemins s'offrent à vous selon votre situation, dans les deux cas nous vous accompagnons de l'allemand jusqu'à votre poste et votre installation.",
    de: "In Deutschland fehlen zehntausende IT-Fachkräfte. Je nach Situation stehen Ihnen zwei Wege offen, in beiden Fällen begleiten wir Sie vom Deutsch bis zur Stelle und zur Ankunft.",
    en: "Germany is short of tens of thousands of IT professionals. Two paths are open to you depending on your situation, in both cases we support you from German all the way to your role and your arrival.",
  },
  viewFiche: { fr: "Voir la fiche", de: "Zum Berufsprofil", en: "View profile" },
  apply: { fr: "Postuler", de: "Bewerben", en: "Apply" },
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
} satisfies Record<string, LocalizedText>;

// Shared source note reused across fiches: private salary portals differ and
// self-label their year, so figures are ranges, and legal details must be checked
// against official sources.
const SALARY_NOTE: LocalizedText = {
  fr: "Fourchettes brutes indicatives issues de sources publiques allemandes (StepStone, Gehalt.de, Bundesagentur für Arbeit, Bitkom, IHK). Les portails de salaires diffèrent et actualisent leurs données ; les montants réels varient selon la région, l'employeur, la convention collective et l'expérience. Les règles de visa évoluent : vérifiez toujours votre situation auprès des autorités allemandes compétentes.",
  de: "Ungefähre Bruttospannen aus öffentlichen deutschen Quellen (StepStone, Gehalt.de, Bundesagentur für Arbeit, Bitkom, IHK). Gehaltsportale unterscheiden sich und aktualisieren ihre Daten; die tatsächlichen Beträge hängen von Region, Arbeitgeber, Tarifvertrag und Erfahrung ab. Visaregeln ändern sich: Prüfen Sie Ihren Fall stets bei den zuständigen deutschen Behörden.",
  en: "Indicative gross ranges from public German sources (StepStone, Gehalt.de, Federal Employment Agency, Bitkom, IHK). Salary portals differ and update their data; real figures depend on region, employer, collective agreement and experience. Visa rules change: always check your case with the competent German authorities.",
};

// Detailed fiches, added as each profession is researched.
export const IT_FICHES: Record<string, ItFiche> = {
  "fachinformatiker-anwendungsentwicklung": {
    slug: "fachinformatiker-anwendungsentwicklung",
    title: {
      fr: "Fachinformatiker Anwendungsentwicklung : Ausbildung en Allemagne",
      de: "Fachinformatiker Anwendungsentwicklung: Ausbildung in Deutschland",
      en: "Fachinformatiker Anwendungsentwicklung: Ausbildung in Germany",
    },
    image: "fachinformatiker-anwendungsentwicklung",
    intro: {
      fr: "Formez-vous en Allemagne au développement d'applications, une Ausbildung rémunérée de trois ans, diplômante et très recherchée sur le marché.",
      de: "Werden Sie in Deutschland zum Anwendungsentwickler ausgebildet: eine vergütete, dreijährige und stark nachgefragte Ausbildung mit Abschluss.",
      en: "Train in Germany in application development, a paid three-year Ausbildung, qualifying and in strong demand on the market.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Fachinformatiker Anwendungsentwicklung conçoit, programme et fait évoluer des logiciels et des applications. Vous travaillez sur les besoins des clients ou des équipes internes, développez le code, testez et documentez.",
          de: "Der Fachinformatiker Anwendungsentwicklung entwirft, programmiert und pflegt Software und Anwendungen. Sie arbeiten an den Anforderungen der Kunden oder interner Teams, entwickeln den Code, testen und dokumentieren.",
          en: "The Fachinformatiker Anwendungsentwicklung designs, programs and maintains software and applications. You work from client or internal-team requirements, develop the code, test and document.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'Ausbildung, la rémunération légale minimale 2025 est d'environ 682 € (1re année), 805 € (2e) et 921 € (3e) par mois ; les employeurs de l'industrie payent nettement plus (souvent 1 050 à 1 200 €). Après le diplôme, le salaire d'entrée se situe autour de 2 800 à 3 500 € brut par mois (source : Gehalt.de, jobs-regional.de, 2025).",
          de: "Während der Ausbildung liegt die gesetzliche Mindestvergütung 2025 bei etwa 682 € (1. Jahr), 805 € (2.) und 921 € (3.) pro Monat; Industrieunternehmen zahlen deutlich mehr (oft 1.050 bis 1.200 €). Nach dem Abschluss liegt das Einstiegsgehalt bei rund 2.800 bis 3.500 € brutto im Monat (Quelle: Gehalt.de, jobs-regional.de, 2025).",
          en: "During the Ausbildung, the 2025 legal minimum allowance is about 682 € (year 1), 805 € (year 2) and 921 € (year 3) per month; industry employers pay considerably more (often 1,050 to 1,200 €). After graduation, the entry salary is around 2,800 to 3,500 € gross per month (source: Gehalt.de, jobs-regional.de, 2025).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "L'Ausbildung dure trois ans en alternance entre l'entreprise et l'école professionnelle (Berufsschule), réductible à deux ans et demi avec une qualification préalable. Elle se conclut par l'examen de la chambre de commerce et d'industrie (IHK).",
          de: "Die Ausbildung dauert drei Jahre im Wechsel zwischen Betrieb und Berufsschule, verkürzbar auf zweieinhalb Jahre bei Vorqualifikation. Sie endet mit der Abschlussprüfung der Industrie- und Handelskammer (IHK).",
          en: "The Ausbildung lasts three years, alternating between the company and the vocational school (Berufsschule), reducible to two and a half years with prior qualification. It ends with the Chamber of Commerce and Industry (IHK) examination.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Éditeurs de logiciels, sociétés de services numériques, industrie et Mittelstand recrutent des développeurs formés en Allemagne. Parmi les grands noms : SAP, Siemens, Bosch, Deutsche Telekom et de nombreuses entreprises de taille intermédiaire.",
          de: "Softwarehäuser, IT-Dienstleister, Industrie und Mittelstand stellen in Deutschland ausgebildete Entwickler ein. Zu den großen Namen zählen SAP, Siemens, Bosch, Deutsche Telekom und viele mittelständische Unternehmen.",
          en: "Software vendors, IT service companies, industry and the Mittelstand hire developers trained in Germany. Big names include SAP, Siemens, Bosch, Deutsche Telekom and many mid-sized companies.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Le développement logiciel est l'un des domaines les plus demandés en Allemagne, avec une pénurie durable de personnel qualifié (source : Bitkom, 2025). Les débouchés sont solides et durables.",
          de: "Die Softwareentwicklung gehört zu den am stärksten nachgefragten Bereichen in Deutschland, mit anhaltendem Fachkräftemangel (Quelle: Bitkom, 2025). Die Perspektiven sind solide und langfristig.",
          en: "Software development is one of the most in-demand fields in Germany, with a lasting shortage of qualified staff (source: Bitkom, 2025). Prospects are solid and durable.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Après quelques années, vous pouvez vous spécialiser (développement web, mobile, back-end), devenir chef de projet, ou poursuivre vers une qualification supérieure (Fachwirt, études en informatique).",
          de: "Nach einigen Jahren können Sie sich spezialisieren (Web-, Mobile-, Back-end-Entwicklung), Projektleiter werden oder eine höhere Qualifikation anstreben (Fachwirt, Informatikstudium).",
          en: "After a few years, you can specialise (web, mobile, back-end development), move into project management, or pursue a higher qualification (Fachwirt, computer-science studies).",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et l'entreprise se déroulent en allemand. Le niveau B2 est la norme pour réussir ; c'est celui que nous visons dans notre formation linguistique.",
          de: "Berufsschule, Prüfung und Betrieb finden auf Deutsch statt. Das Niveau B2 ist der Standard für den Erfolg; darauf zielt unsere Sprachausbildung ab.",
          en: "The vocational school, the exam and the workplace are all in German. B2 is the standard needed to succeed; that is the level our language training targets.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Anerkennung eines Abschlusses nötig: Sie werden direkt in Deutschland ausgebildet. Erforderlich sind ein Ausbildungsvertrag, das erwartete Deutschniveau und in der Regel ein Schulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany. You need an Ausbildung contract, the expected German level and, generally, a secondary-school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung. Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel als Fachkraft, um in Deutschland zu arbeiten. Wir prüfen Ihre Eignung und erstellen die Unterlagen mit Ihnen.",
          en: "Entry is via the vocational-training (Ausbildung) visa. After graduation, you switch to a skilled-worker residence permit to work in Germany. We check your eligibility and prepare the file with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation en Allemagne.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, finden das Unternehmen und den Ausbildungsvertrag, bereiten die Visumsunterlagen vor und begleiten Sie bis zur Ankunft in Deutschland.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa file and support you all the way to your arrival in Germany.",
        },
      },
    ],
    faq: [
      {
        q: { fr: "Faut-il déjà savoir programmer ?", de: "Muss ich schon programmieren können?", en: "Do I need to know how to code already?" },
        a: {
          fr: "Non, l'Ausbildung part des bases. Une appétence pour la logique et les mathématiques aide, mais l'entreprise et l'école vous forment progressivement.",
          de: "Nein, die Ausbildung beginnt bei den Grundlagen. Interesse an Logik und Mathematik hilft, aber Betrieb und Schule bilden Sie schrittweise aus.",
          en: "No, the Ausbildung starts from the basics. An aptitude for logic and mathematics helps, but the company and school train you step by step.",
        },
      },
      {
        q: { fr: "Quelle différence avec la Systemintegration ?", de: "Was ist der Unterschied zur Systemintegration?", en: "How does it differ from Systemintegration?" },
        a: {
          fr: "L'Anwendungsentwicklung se concentre sur le développement de logiciels ; la Systemintegration porte sur les réseaux, serveurs et l'infrastructure informatique.",
          de: "Die Anwendungsentwicklung konzentriert sich auf Softwareentwicklung; die Systemintegration befasst sich mit Netzwerken, Servern und IT-Infrastruktur.",
          en: "Anwendungsentwicklung focuses on software development; Systemintegration deals with networks, servers and IT infrastructure.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
