// Static registry for /metiers -- rendered as anchored sections on a single
// page (matching the founder's reference design), not separate routes per category.
// dbCategory maps each section to the matching shortage_occupations.category value so
// the page can link out to live listings; null means no occupations have been
// published in that DB category yet.
//
// Per-job duration/qualifications/remuneration figures were researched (German
// Handwerkskammer/IHK sources, Pflegeberufegesetz, aubi-plus.de, ausbildung.de) rather
// than invented -- amounts vary by Land, employer, and collective agreement, so they're
// presented as indicative ranges, not fixed figures. Where a listed occupation is not
// actually a standalone 3-year dual Ausbildung in Germany (e.g. Commis de cuisine,
// Schweißer as a stand-alone trade, Cybersecurity), that is stated plainly rather than
// implying a formal apprenticeship that doesn't exist.

import type { Locale } from "../../i18n/routing";

type LocalizedText = Record<Locale, string>;

type Job = {
  label: LocalizedText;
  de: string;
  // Whether this is a genuine dual Ausbildung (a paid 2-3.5 year vocational training),
  // as opposed to an entry-level role or an add-on certification. Drives which jobs the
  // /ausbildung-allemagne/metiers page lists.
  ausbildung: boolean;
  duration: LocalizedText;
  qualifications: LocalizedText;
  remuneration: LocalizedText;
};

export const METIER_CATEGORIES: Record<
  string,
  {
    dbCategory: string | null;
    title: LocalizedText;
    tagline: LocalizedText;
    body: LocalizedText;
    jobs: Job[];
    specialCase?: {
      title: LocalizedText;
      levelLabel: string;
      body: LocalizedText;
      steps: LocalizedText[];
    };
  }
> = {
  "sante-soins": {
    dbCategory: "healthcare",
    title: { fr: "Santé & soins", de: "Gesundheit & Pflege", en: "Healthcare" },
    tagline: {
      fr: "Le secteur qui recrute le plus : hôpitaux, cliniques, EHPAD.",
      de: "Der Sektor mit dem größten Bedarf: Krankenhäuser, Kliniken, Pflegeheime.",
      en: "The sector hiring the most: hospitals, clinics, care homes.",
    },
    body: {
      fr: "Le secteur de la santé allemand recherche activement du personnel qualifié, en particulier dans les soins infirmiers. La reconnaissance du diplôme est une étape clé de ce parcours, que nous accompagnons dès le départ.",
      de: "Der deutsche Gesundheitssektor sucht aktiv qualifiziertes Personal, insbesondere in der Krankenpflege. Die Anerkennung des Abschlusses ist ein zentraler Schritt, den wir von Anfang an begleiten.",
      en: "Germany's healthcare sector is actively looking for qualified staff, especially in nursing care. Diploma recognition is a key step in this path, which we support from the start.",
    },
    jobs: [
      {
        label: { fr: "Infirmier(ère)", de: "Pflegefachkraft", en: "Nurse" },
        de: "Pflegefachkraft",
        ausbildung: true,
        duration: { fr: "3 ans", de: "3 Jahre", en: "3 years" },
        qualifications: {
          fr: "Diplôme de fin d'études secondaires (Realschule) ou Hauptschulabschluss + formation qualifiante, allemand B2",
          de: "Realschulabschluss oder Hauptschulabschluss mit abgeschlossener Berufsausbildung, Deutsch B2",
          en: "Realschule diploma, or lower secondary diploma plus a completed vocational qualification, German B2",
        },
        remuneration: {
          fr: "Environ 1 350 à 1 500 € brut/mois selon l'année (formation rémunérée dès le début, encadrée par la loi Pflegeberufegesetz)",
          de: "Rund 1.350 bis 1.500 € brutto/Monat je nach Ausbildungsjahr (von Anfang an vergütet, geregelt im Pflegeberufegesetz)",
          en: "About €1,350-1,500 gross/month depending on the year (paid from day one, set by the Pflegeberufegesetz)",
        },
      },
      {
        label: { fr: "Aide-soignant(e)", de: "Pflegehelfer", en: "Care assistant" },
        de: "Pflegehelfer",
        ausbildung: true,
        duration: { fr: "1 à 2 ans", de: "1 bis 2 Jahre", en: "1 to 2 years" },
        qualifications: {
          fr: "Accessible dès le niveau Hauptschulabschluss, allemand B1-B2",
          de: "Ab Hauptschulabschluss zugänglich, Deutsch B1-B2",
          en: "Accessible from a lower secondary diploma, German B1-B2",
        },
        remuneration: {
          fr: "Environ 900 à 1 100 € brut/mois, indicatif (varie selon le Land et l'établissement)",
          de: "Rund 900 bis 1.100 € brutto/Monat, indikativ (je nach Bundesland und Einrichtung)",
          en: "About €900-1,100 gross/month, indicative (varies by state and employer)",
        },
      },
      {
        label: { fr: "Soins aux aînés", de: "Altenpflege", en: "Elderly care" },
        de: "Altenpflege",
        ausbildung: true,
        duration: { fr: "Intégré depuis 2020 dans la formation généraliste \"Pflegefachkraft\" (3 ans)", de: "Seit 2020 Teil der generalistischen Ausbildung \"Pflegefachkraft\" (3 Jahre)", en: "Folded since 2020 into the generalist \"Pflegefachkraft\" training (3 years)" },
        qualifications: {
          fr: "Mêmes prérequis que l'infirmier(ère), avec spécialisation possible en 3e année",
          de: "Gleiche Voraussetzungen wie Pflegefachkraft, Spezialisierung im 3. Jahr möglich",
          en: "Same prerequisites as the nurse pathway, with a specialization option in year 3",
        },
        remuneration: {
          fr: "Environ 1 350 à 1 500 € brut/mois selon l'année, comme la formation Pflegefachkraft",
          de: "Rund 1.350 bis 1.500 € brutto/Monat je nach Jahr, wie bei der Pflegefachkraft-Ausbildung",
          en: "About €1,350-1,500 gross/month depending on the year, same as the Pflegefachkraft track",
        },
      },
      {
        label: { fr: "Sage-femme", de: "Hebamme", en: "Midwife" },
        de: "Hebamme",
        ausbildung: false,
        duration: { fr: "3 ans (cursus universitaire dual depuis la réforme de 2020)", de: "3 Jahre (duales Studium seit der Reform 2020)", en: "3 years (dual university program since the 2020 reform)" },
        qualifications: {
          fr: "Depuis 2020, la formation est devenue un cursus universitaire (Studium) ; diplôme équivalent à l'Abitur généralement requis",
          de: "Seit 2020 ein Hochschulstudium; in der Regel Abitur oder gleichwertiger Abschluss erforderlich",
          en: "Since 2020 this is a university-level program; an Abitur-equivalent diploma is generally required",
        },
        remuneration: {
          fr: "Indemnité versée pendant les phases pratiques, montant variable selon l'université",
          de: "Vergütung während der Praxisphasen, Höhe je nach Hochschule unterschiedlich",
          en: "A stipend is paid during practical placements, amount varies by university",
        },
      },
      {
        label: { fr: "Médico-technique", de: "MTA", en: "Medical-technical" },
        de: "MTA",
        ausbildung: true,
        duration: { fr: "3 ans", de: "3 Jahre", en: "3 years" },
        qualifications: {
          fr: "Diplôme de fin d'études secondaires (Mittlere Reife) généralement requis",
          de: "In der Regel Mittlere Reife erforderlich",
          en: "A Mittlere Reife (secondary school) diploma is generally required",
        },
        remuneration: {
          fr: "Formation en cours de réforme depuis 2023 (rémunération désormais plus largement prévue), montants variables selon l'établissement",
          de: "Ausbildung seit der MTA-Reform 2023 im Wandel (Vergütung nun breiter vorgesehen), Höhe je nach Einrichtung unterschiedlich",
          en: "Training reformed since 2023 (pay is now more widely provided), amounts vary by institution",
        },
      },
    ],
    specialCase: {
      title: {
        fr: "Cas particulier : les médecins (Arzt / Ärztin)",
        de: "Sonderfall: Ärzte (Arzt / Ärztin)",
        en: "Special case: doctors (Arzt / Ärztin)",
      },
      levelLabel: "C1",
      body: {
        fr: "Exercer la médecine en Allemagne exige l'Approbation (autorisation d'exercer). Au-delà du niveau B2 général, les médecins doivent réussir la Fachsprachprüfung, l'examen d'allemand médical de niveau C1. La reconnaissance du diplôme peut nécessiter un examen de connaissances (Kenntnisprüfung). Un permis temporaire (Berufserlaubnis) permet souvent de commencer à exercer avant l'Approbation complète.",
        de: "Um in Deutschland als Arzt zu praktizieren, ist die Approbation erforderlich. Über das allgemeine B2-Niveau hinaus müssen Ärzte die Fachsprachprüfung bestehen, die medizinische Deutschprüfung auf Niveau C1. Die Anerkennung des Abschlusses kann eine Kenntnisprüfung erfordern. Eine Berufserlaubnis ermöglicht oft die Tätigkeit vor der vollständigen Approbation.",
        en: "Practicing medicine in Germany requires the Approbation (license to practice). Beyond the general B2 level, doctors must pass the Fachsprachprüfung, the C1-level medical German exam. Diploma recognition may require a knowledge exam (Kenntnisprüfung). A temporary permit (Berufserlaubnis) often allows practice to begin before full Approbation.",
      },
      steps: [
        { fr: "Reconnaissance du diplôme", de: "Anerkennung des Abschlusses", en: "Diploma recognition" },
        { fr: "Fachsprachprüfung C1", de: "Fachsprachprüfung C1", en: "Fachsprachprüfung C1" },
        { fr: "Berufserlaubnis", de: "Berufserlaubnis", en: "Berufserlaubnis" },
        { fr: "Kenntnisprüfung (si requise)", de: "Kenntnisprüfung (falls erforderlich)", en: "Kenntnisprüfung (if required)" },
        { fr: "Approbation", de: "Approbation", en: "Approbation" },
      ],
    },
  },
  "hotellerie-restauration": {
    dbCategory: null,
    title: { fr: "Hôtellerie-restauration", de: "Hotel- und Gaststättengewerbe", en: "Hospitality & catering" },
    tagline: {
      fr: "Hôtels et restaurants en tension : cuisine, salle, réception.",
      de: "Angespannte Hotels und Restaurants: Küche, Service, Rezeption.",
      en: "Hotels and restaurants under pressure: kitchen, service, front desk.",
    },
    body: {
      fr: "L'hôtellerie-restauration allemande fait face à une pénurie de personnel qualifié depuis plusieurs années. C'est un secteur accessible avec un niveau d'allemand B2 et une expérience ou une formation dans le métier.",
      de: "Das deutsche Hotel- und Gaststättengewerbe leidet seit Jahren unter Fachkräftemangel. Mit Deutschniveau B2 und Erfahrung oder Ausbildung im Beruf ist dieser Sektor gut zugänglich.",
      en: "German hospitality has faced a staff shortage for years. It's an accessible sector with B2-level German and experience or training in the trade.",
    },
    jobs: [
      {
        label: { fr: "Cuisinier(ère)", de: "Koch", en: "Cook" },
        de: "Koch",
        ausbildung: true,
        duration: { fr: "3 ans", de: "3 Jahre", en: "3 years" },
        qualifications: { fr: "Accessible dès le niveau Hauptschulabschluss", de: "Ab Hauptschulabschluss zugänglich", en: "Accessible from a lower secondary diploma" },
        remuneration: {
          fr: "À partir de 649 € brut/mois la 1re année (minimum légal), jusqu'à environ 1 000 € en 3e année",
          de: "Ab 649 € brutto/Monat im 1. Lehrjahr (gesetzlicher Mindestlohn), bis rund 1.000 € im 3. Jahr",
          en: "From €649 gross/month in year 1 (legal minimum), up to around €1,000 in year 3",
        },
      },
      {
        label: { fr: "Commis de cuisine", de: "Küchenhilfe", en: "Kitchen assistant" },
        de: "Küchenhilfe",
        ausbildung: false,
        duration: { fr: "Poste d'entrée, pas une Ausbildung diplômante de 3 ans", de: "Einstiegsposition, keine dreijährige Ausbildung", en: "Entry-level role, not a diploma-granting 3-year apprenticeship" },
        qualifications: { fr: "Aucun diplôme requis ; une formation courte est assurée en interne", de: "Kein Abschluss erforderlich; kurze betriebsinterne Einarbeitung", en: "No diploma required; short on-the-job training" },
        remuneration: {
          fr: "Rémunéré au salaire minimum légal ou selon la convention collective de l'établissement",
          de: "Vergütung nach gesetzlichem Mindestlohn oder Haustarif",
          en: "Paid at the legal minimum wage or the establishment's collective agreement rate",
        },
      },
      {
        label: { fr: "Service en salle", de: "Restaurantfachmann", en: "Waitstaff" },
        de: "Restaurantfachmann",
        ausbildung: true,
        duration: { fr: "3 ans", de: "3 Jahre", en: "3 years" },
        qualifications: { fr: "Hauptschulabschluss ou mittlere Reife généralement demandé", de: "In der Regel Hauptschulabschluss oder mittlere Reife", en: "A lower or middle secondary diploma is generally expected" },
        remuneration: {
          fr: "Environ 878 à 1 172 € brut/mois selon l'année",
          de: "Rund 878 bis 1.172 € brutto/Monat je nach Lehrjahr",
          en: "About €878-1,172 gross/month depending on the year",
        },
      },
      {
        label: { fr: "Réception", de: "Hotelfachmann", en: "Front desk" },
        de: "Hotelfachmann",
        ausbildung: true,
        duration: { fr: "3 ans", de: "3 Jahre", en: "3 years" },
        qualifications: { fr: "Mittlere Reife recommandée", de: "Mittlere Reife empfohlen", en: "A middle secondary diploma is recommended" },
        remuneration: {
          fr: "Environ 878 à 1 172 € brut/mois selon l'année",
          de: "Rund 878 bis 1.172 € brutto/Monat je nach Lehrjahr",
          en: "About €878-1,172 gross/month depending on the year",
        },
      },
      {
        label: { fr: "Personnel d'étage", de: "Housekeeping", en: "Housekeeping" },
        de: "Housekeeping",
        ausbildung: false,
        duration: { fr: "Poste d'entrée, pas une Ausbildung diplômante dédiée", de: "Einstiegsposition, keine eigene Ausbildung", en: "Entry-level role, no dedicated apprenticeship" },
        qualifications: { fr: "Aucun diplôme requis ; formation courte en interne", de: "Kein Abschluss erforderlich; kurze betriebsinterne Einarbeitung", en: "No diploma required; short on-the-job training" },
        remuneration: {
          fr: "Rémunéré au salaire minimum légal ou selon la convention collective de l'établissement",
          de: "Vergütung nach gesetzlichem Mindestlohn oder Haustarif",
          en: "Paid at the legal minimum wage or the establishment's collective agreement rate",
        },
      },
    ],
  },
  "btp-artisanat": {
    dbCategory: "skilled_trades",
    title: { fr: "BTP & artisanat", de: "Bau & Handwerk", en: "Construction & trades" },
    tagline: {
      fr: "Artisans qualifiés très recherchés dans tout le pays.",
      de: "Qualifizierte Handwerker sind im ganzen Land sehr gefragt.",
      en: "Qualified tradespeople in high demand nationwide.",
    },
    body: {
      fr: "Le BTP et l'artisanat allemands manquent de main-d'œuvre qualifiée sur presque tout le territoire. Une expérience pratique ou une qualification reconnue est un atout majeur pour ces métiers.",
      de: "Das deutsche Bau- und Handwerksgewerbe hat fast flächendeckend zu wenig Fachkräfte. Praktische Erfahrung oder eine anerkannte Qualifikation sind für diese Berufe ein großer Vorteil.",
      en: "German construction and trades lack skilled workers almost nationwide. Hands-on experience or a recognized qualification is a major advantage for these occupations.",
    },
    jobs: [
      {
        label: { fr: "Électricien", de: "Elektroniker", en: "Electrician" },
        de: "Elektroniker",
        ausbildung: true,
        duration: { fr: "3,5 ans (réductible à 3 ou 2,5 ans selon les résultats)", de: "3,5 Jahre (bei guten Leistungen auf 3 oder 2,5 Jahre verkürzbar)", en: "3.5 years (can be shortened to 3 or 2.5 years with strong results)" },
        qualifications: { fr: "Realschulabschluss recommandé, bon niveau en mathématiques", de: "Realschulabschluss empfohlen, gute Mathematikkenntnisse", en: "A Realschule diploma is recommended, along with solid math skills" },
        remuneration: {
          fr: "Environ 800 à 1 200 € brut/mois selon l'année et l'entreprise",
          de: "Rund 800 bis 1.200 € brutto/Monat je nach Lehrjahr und Betrieb",
          en: "About €800-1,200 gross/month depending on the year and employer",
        },
      },
      {
        label: { fr: "Plombier-chauffagiste", de: "Anlagenmechaniker SHK", en: "Plumber/heating" },
        de: "Anlagenmechaniker SHK",
        ausbildung: true,
        duration: { fr: "3,5 ans", de: "3,5 Jahre", en: "3.5 years" },
        qualifications: { fr: "Hauptschulabschluss généralement suffisant", de: "Hauptschulabschluss in der Regel ausreichend", en: "A lower secondary diploma is generally sufficient" },
        remuneration: {
          fr: "Environ 700 à 1 100 € brut/mois selon l'année, indicatif",
          de: "Rund 700 bis 1.100 € brutto/Monat je nach Lehrjahr, indikativ",
          en: "About €700-1,100 gross/month depending on the year, indicative",
        },
      },
      {
        label: { fr: "Soudeur", de: "Schweißer", en: "Welder" },
        de: "Schweißer",
        ausbildung: false,
        duration: { fr: "Qualification complémentaire, pas une Ausbildung de 3 ans à part entière", de: "Zusatzqualifikation, keine eigenständige dreijährige Ausbildung", en: "An add-on certification, not a standalone 3-year apprenticeship" },
        qualifications: { fr: "S'acquiert généralement après un métier de base (ex. Anlagenmechaniker) via une certification de soudure aux normes DIN EN", de: "In der Regel nach einem Grundberuf (z. B. Anlagenmechaniker) über eine Schweißprüfung nach DIN EN erworben", en: "Usually obtained after a base trade (e.g. Anlagenmechaniker) via a DIN EN welding certification" },
        remuneration: {
          fr: "Rémunération liée au métier de base suivi ; primes possibles une fois la certification obtenue",
          de: "Vergütung richtet sich nach dem Grundberuf; nach Zertifizierung sind Zulagen möglich",
          en: "Pay follows the base trade; bonuses are possible once certified",
        },
      },
      {
        label: { fr: "Maçon", de: "Maurer", en: "Mason" },
        de: "Maurer",
        ausbildung: true,
        duration: { fr: "3 ans", de: "3 Jahre", en: "3 years" },
        qualifications: { fr: "Hauptschulabschluss suffisant", de: "Hauptschulabschluss ausreichend", en: "A lower secondary diploma is sufficient" },
        remuneration: {
          fr: "À partir de 632 € (Ouest) / 548 € (Est) brut/mois la 1re année, jusqu'à environ 1 000-1 200 € en 3e année",
          de: "Ab 632 € (West) / 548 € (Ost) brutto/Monat im 1. Jahr, bis rund 1.000-1.200 € im 3. Jahr",
          en: "From €632 (West) / €548 (East) gross/month in year 1, up to around €1,000-1,200 in year 3",
        },
      },
      {
        label: { fr: "Peintre", de: "Maler", en: "Painter" },
        de: "Maler",
        ausbildung: true,
        duration: { fr: "3 ans", de: "3 Jahre", en: "3 years" },
        qualifications: { fr: "Hauptschulabschluss suffisant", de: "Hauptschulabschluss ausreichend", en: "A lower secondary diploma is sufficient" },
        remuneration: {
          fr: "À partir de 450 € brut/mois la 1re année, jusqu'à environ 700-900 € en 3e année",
          de: "Ab 450 € brutto/Monat im 1. Jahr, bis rund 700-900 € im 3. Jahr",
          en: "From €450 gross/month in year 1, up to around €700-900 in year 3",
        },
      },
    ],
  },
  "industrie-technique": {
    dbCategory: "engineering",
    title: { fr: "Industrie & technique", de: "Industrie & Technik", en: "Industry & technical trades" },
    tagline: {
      fr: "Le moteur de l'économie allemande cherche des techniciens.",
      de: "Der Motor der deutschen Wirtschaft sucht Techniker.",
      en: "The engine of the German economy is looking for technicians.",
    },
    body: {
      fr: "L'industrie allemande, moteur de son économie, recherche des profils techniques à tous les niveaux de qualification. Nous orientons les candidats selon leur formation initiale et leur expérience.",
      de: "Die deutsche Industrie, Motor ihrer Wirtschaft, sucht technische Profile auf allen Qualifikationsstufen. Wir orientieren Kandidaten je nach Ausbildung und Erfahrung.",
      en: "German industry, the backbone of its economy, seeks technical profiles at every qualification level. We guide candidates according to their background and experience.",
    },
    jobs: [
      {
        label: { fr: "Mécatronicien", de: "Mechatroniker", en: "Mechatronics technician" },
        de: "Mechatroniker",
        ausbildung: true,
        duration: { fr: "3,5 ans", de: "3,5 Jahre", en: "3.5 years" },
        qualifications: { fr: "Realschulabschluss recommandé", de: "Realschulabschluss empfohlen", en: "A Realschule diploma is recommended" },
        remuneration: {
          fr: "Environ 900 à 1 200 € brut/mois selon l'année, indicatif",
          de: "Rund 900 bis 1.200 € brutto/Monat je nach Lehrjahr, indikativ",
          en: "About €900-1,200 gross/month depending on the year, indicative",
        },
      },
      {
        label: { fr: "Soudeur", de: "Schweißer", en: "Welder" },
        de: "Schweißer",
        ausbildung: false,
        duration: { fr: "Qualification complémentaire, pas une Ausbildung de 3 ans à part entière", de: "Zusatzqualifikation, keine eigenständige dreijährige Ausbildung", en: "An add-on certification, not a standalone 3-year apprenticeship" },
        qualifications: { fr: "S'acquiert généralement après un métier de base (ex. Konstruktionsmechaniker) via une certification de soudure aux normes DIN EN", de: "In der Regel nach einem Grundberuf (z. B. Konstruktionsmechaniker) über eine Schweißprüfung nach DIN EN erworben", en: "Usually obtained after a base trade (e.g. Konstruktionsmechaniker) via a DIN EN welding certification" },
        remuneration: {
          fr: "Rémunération liée au métier de base suivi ; primes possibles une fois la certification obtenue",
          de: "Vergütung richtet sich nach dem Grundberuf; nach Zertifizierung sind Zulagen möglich",
          en: "Pay follows the base trade; bonuses are possible once certified",
        },
      },
      {
        label: { fr: "Maintenance", de: "Instandhaltung", en: "Maintenance" },
        de: "Industriemechaniker",
        ausbildung: true,
        duration: { fr: "3,5 ans", de: "3,5 Jahre", en: "3.5 years" },
        qualifications: { fr: "Realschulabschluss recommandé", de: "Realschulabschluss empfohlen", en: "A Realschule diploma is recommended" },
        remuneration: {
          fr: "Environ 900 à 1 150 € brut/mois selon l'année, indicatif",
          de: "Rund 900 bis 1.150 € brutto/Monat je nach Lehrjahr, indikativ",
          en: "About €900-1,150 gross/month depending on the year, indicative",
        },
      },
      {
        label: { fr: "Usinage CNC", de: "Zerspanungsmechaniker", en: "CNC machining" },
        de: "Zerspanungsmechaniker",
        ausbildung: true,
        duration: { fr: "3,5 ans", de: "3,5 Jahre", en: "3.5 years" },
        qualifications: { fr: "Realschulabschluss recommandé, bon niveau en mathématiques", de: "Realschulabschluss empfohlen, gute Mathematikkenntnisse", en: "A Realschule diploma is recommended, along with solid math skills" },
        remuneration: {
          fr: "Environ 900 à 1 150 € brut/mois selon l'année, indicatif",
          de: "Rund 900 bis 1.150 € brutto/Monat je nach Lehrjahr, indikativ",
          en: "About €900-1,150 gross/month depending on the year, indicative",
        },
      },
      {
        label: { fr: "Électrotechnicien", de: "Elektroniker", en: "Electrical technician" },
        de: "Elektroniker (Automatisierungstechnik)",
        ausbildung: true,
        duration: { fr: "3,5 ans", de: "3,5 Jahre", en: "3.5 years" },
        qualifications: { fr: "Realschulabschluss recommandé", de: "Realschulabschluss empfohlen", en: "A Realschule diploma is recommended" },
        remuneration: {
          fr: "Environ 900 à 1 200 € brut/mois selon l'année, indicatif",
          de: "Rund 900 bis 1.200 € brutto/Monat je nach Lehrjahr, indikativ",
          en: "About €900-1,200 gross/month depending on the year, indicative",
        },
      },
    ],
  },
  informatique: {
    dbCategory: "it",
    title: { fr: "Informatique", de: "IT", en: "IT" },
    tagline: {
      fr: "Forte demande tech ; l'anglais est un atout, l'allemand ouvre plus de postes.",
      de: "Hohe Tech-Nachfrage; Englisch ist ein Plus, Deutsch öffnet mehr Stellen.",
      en: "Strong tech demand; English helps, German opens more roles.",
    },
    body: {
      fr: "Le secteur informatique allemand recrute à tous les niveaux, avec une attention particulière portée aux compétences techniques autant qu'au niveau d'allemand pour l'intégration en entreprise.",
      de: "Der deutsche IT-Sektor stellt auf allen Ebenen ein, mit besonderem Augenmerk sowohl auf technische Fähigkeiten als auch auf das Deutschniveau für die Integration im Unternehmen.",
      en: "Germany's IT sector hires at every level, with attention to both technical skills and German proficiency for workplace integration.",
    },
    jobs: [
      {
        label: { fr: "Développeur(se)", de: "Fachinformatiker Anwendungsentwicklung", en: "Developer" },
        de: "Fachinformatiker (Anwendungsentwicklung)",
        ausbildung: true,
        duration: { fr: "3 ans (réductible à 2-2,5 ans selon les résultats)", de: "3 Jahre (bei guten Leistungen auf 2-2,5 Jahre verkürzbar)", en: "3 years (can be shortened to 2-2.5 years with strong results)" },
        qualifications: { fr: "Mittlere Reife suffisante légalement ; un niveau Abitur/Fachabitur est souvent apprécié en pratique", de: "Rechtlich reicht die Mittlere Reife; in der Praxis wird oft Abitur/Fachabitur bevorzugt", en: "A middle secondary diploma is legally enough; in practice an Abitur is often preferred" },
        remuneration: {
          fr: "Environ 900 à 1 200 € brut/mois selon l'année",
          de: "Rund 900 bis 1.200 € brutto/Monat je nach Lehrjahr",
          en: "About €900-1,200 gross/month depending on the year",
        },
      },
      {
        label: { fr: "Admin sys/réseau", de: "Fachinformatiker Systemintegration", en: "Sysadmin" },
        de: "Fachinformatiker (Systemintegration)",
        ausbildung: true,
        duration: { fr: "3 ans", de: "3 Jahre", en: "3 years" },
        qualifications: { fr: "Mêmes prérequis que pour le développement", de: "Gleiche Voraussetzungen wie Anwendungsentwicklung", en: "Same prerequisites as the developer track" },
        remuneration: {
          fr: "Environ 885 à 1 443 € brut/mois selon l'année et l'entreprise",
          de: "Rund 885 bis 1.443 € brutto/Monat je nach Lehrjahr und Betrieb",
          en: "About €885-1,443 gross/month depending on the year and employer",
        },
      },
      {
        label: { fr: "Support IT", de: "IT-Support", en: "IT support" },
        de: "IT-Support",
        ausbildung: false,
        duration: { fr: "Souvent accessible via la spécialisation Systemintegration, ou une formation courte", de: "Oft über die Spezialisierung Systemintegration oder eine kurze Einarbeitung zugänglich", en: "Often reached via the Systemintegration specialization, or short on-the-job training" },
        qualifications: { fr: "Une Ausbildung Fachinformatiker est un atout fort mais pas toujours exigée pour les postes d'entrée", de: "Eine Fachinformatiker-Ausbildung ist ein starkes Plus, für Einstiegspositionen aber nicht immer Pflicht", en: "A Fachinformatiker apprenticeship is a strong advantage but not always required for entry roles" },
        remuneration: {
          fr: "Variable selon l'entreprise et le niveau d'expérience",
          de: "Je nach Unternehmen und Erfahrungsstand unterschiedlich",
          en: "Varies by employer and experience level",
        },
      },
      {
        label: { fr: "Data", de: "Fachinformatiker Daten- und Prozessanalyse", en: "Data" },
        de: "Fachinformatiker (Daten- und Prozessanalyse)",
        ausbildung: true,
        duration: { fr: "3 ans", de: "3 Jahre", en: "3 years" },
        qualifications: { fr: "Mêmes prérequis que pour le développement, bon niveau en analyse et en mathématiques", de: "Gleiche Voraussetzungen wie Anwendungsentwicklung, gute Analyse- und Mathematikkenntnisse", en: "Same prerequisites as the developer track, strong analytical and math skills" },
        remuneration: {
          fr: "Environ 900 à 1 200 € brut/mois selon l'année",
          de: "Rund 900 bis 1.200 € brutto/Monat je nach Lehrjahr",
          en: "About €900-1,200 gross/month depending on the year",
        },
      },
      {
        label: { fr: "Cybersécurité", de: "IT-Security", en: "Cybersecurity" },
        de: "IT-Security",
        ausbildung: false,
        duration: { fr: "Pas une Ausbildung autonome en Allemagne : spécialisation après une Ausbildung Fachinformatiker, ou via des études supérieures", de: "Keine eigenständige Ausbildung in Deutschland: Spezialisierung nach einer Fachinformatiker-Ausbildung oder über ein Studium", en: "Not a standalone apprenticeship in Germany: a specialization after a Fachinformatiker apprenticeship, or via higher education" },
        qualifications: { fr: "Un premier diplôme IT (souvent Systemintegration) est le point de départ le plus courant", de: "Ein erster IT-Abschluss (meist Systemintegration) ist der übliche Ausgangspunkt", en: "A first IT qualification (usually Systemintegration) is the most common starting point" },
        remuneration: {
          fr: "Rémunération de spécialiste, supérieure à celle d'un poste d'entrée",
          de: "Fachkräftevergütung, oberhalb des Einstiegsniveaus",
          en: "Specialist-level pay, above entry-level roles",
        },
      },
    ],
  },
  "transport-logistique": {
    dbCategory: "drivers",
    title: { fr: "Transport & logistique", de: "Transport & Logistik", en: "Transport & logistics" },
    tagline: {
      fr: "E-commerce et industrie : conducteurs et logisticiens recherchés.",
      de: "E-Commerce und Industrie: Fahrer und Logistiker gesucht.",
      en: "E-commerce and industry: drivers and logistics staff in demand.",
    },
    body: {
      fr: "La croissance du e-commerce et les besoins de l'industrie allemande créent une forte demande de conducteurs et de personnel logistique, un secteur accessible dès le niveau B2.",
      de: "Das Wachstum des E-Commerce und der Bedarf der deutschen Industrie schaffen eine starke Nachfrage nach Fahrern und Logistikpersonal, ein Sektor, der bereits ab Niveau B2 zugänglich ist.",
      en: "The growth of e-commerce and the needs of German industry create strong demand for drivers and logistics staff, a sector accessible from B2 level.",
    },
    jobs: [
      {
        label: { fr: "Conducteur PL", de: "Berufskraftfahrer", en: "Truck driver" },
        de: "Berufskraftfahrer",
        ausbildung: true,
        duration: { fr: "3 ans", de: "3 Jahre", en: "3 years" },
        qualifications: { fr: "Hauptschulabschluss suffisant, permis poids lourd requis en fin de formation", de: "Hauptschulabschluss ausreichend, Lkw-Führerschein am Ende der Ausbildung erforderlich", en: "A lower secondary diploma is enough; a truck driving licence is required by the end of training" },
        remuneration: {
          fr: "Environ 930 à 1 220 € brut/mois selon l'année, indicatif",
          de: "Rund 930 bis 1.220 € brutto/Monat je nach Lehrjahr, indikativ",
          en: "About €930-1,220 gross/month depending on the year, indicative",
        },
      },
      {
        label: { fr: "Chauffeur bus", de: "Busfahrer", en: "Bus driver" },
        de: "Busfahrer",
        ausbildung: false,
        duration: { fr: "Accès généralement direct avec permis D, pas toujours une Ausbildung dédiée de 3 ans", de: "Meist direkter Zugang mit Führerschein Klasse D, keine eigene dreijährige Ausbildung", en: "Usually direct entry with a category D licence, not always a dedicated 3-year apprenticeship" },
        qualifications: { fr: "Permis de conduire catégorie D et qualification initiale (Grundqualifikation) requis", de: "Führerschein Klasse D und Grundqualifikation erforderlich", en: "A category D driving licence and initial qualification (Grundqualifikation) are required" },
        remuneration: {
          fr: "Rémunération de poste qualifié dès l'embauche, variable selon l'employeur",
          de: "Fachkräftevergütung bereits bei Einstellung, je nach Arbeitgeber unterschiedlich",
          en: "Skilled-role pay from the start, varies by employer",
        },
      },
      {
        label: { fr: "Cariste", de: "Fachlagerist", en: "Forklift operator" },
        de: "Fachlagerist",
        ausbildung: true,
        duration: { fr: "2 ans", de: "2 Jahre", en: "2 years" },
        qualifications: { fr: "Hauptschulabschluss suffisant", de: "Hauptschulabschluss ausreichend", en: "A lower secondary diploma is sufficient" },
        remuneration: {
          fr: "Environ 1 075 à 1 222 € brut/mois selon l'année",
          de: "Rund 1.075 bis 1.222 € brutto/Monat je nach Lehrjahr",
          en: "About €1,075-1,222 gross/month depending on the year",
        },
      },
      {
        label: { fr: "Préparateur", de: "Kommissionierer", en: "Order picker" },
        de: "Kommissionierer",
        ausbildung: false,
        duration: { fr: "Poste opérationnel, généralement sans Ausbildung dédiée de 3 ans", de: "Operative Position, meist ohne eigene dreijährige Ausbildung", en: "An operational role, usually without a dedicated 3-year apprenticeship" },
        qualifications: { fr: "Accessible sans diplôme spécifique ; une formation courte est assurée en interne", de: "Ohne spezifischen Abschluss zugänglich; kurze betriebsinterne Einarbeitung", en: "Accessible without a specific diploma; short on-the-job training" },
        remuneration: {
          fr: "Rémunéré au salaire minimum légal ou selon la convention collective de l'entrepôt",
          de: "Vergütung nach gesetzlichem Mindestlohn oder Haustarif des Lagers",
          en: "Paid at the legal minimum wage or the warehouse's collective agreement rate",
        },
      },
      {
        label: { fr: "Agent logistique", de: "Fachkraft Lagerlogistik", en: "Logistics associate" },
        de: "Fachkraft für Lagerlogistik",
        ausbildung: true,
        duration: { fr: "3 ans", de: "3 Jahre", en: "3 years" },
        qualifications: { fr: "Hauptschulabschluss suffisant, bases en mathématiques utiles", de: "Hauptschulabschluss ausreichend, mathematisches Grundverständnis hilfreich", en: "A lower secondary diploma is sufficient; basic math skills help" },
        remuneration: {
          fr: "À partir de 871 € brut/mois la 1re année, indicatif",
          de: "Ab 871 € brutto/Monat im 1. Lehrjahr, indikativ",
          en: "From €871 gross/month in year 1, indicative",
        },
      },
    ],
  },
};

export type MetierCategorySlug = keyof typeof METIER_CATEGORIES;
