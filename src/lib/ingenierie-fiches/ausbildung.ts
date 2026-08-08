// Ausbildung-path Ingénierie fiches (train in Germany): vocational technical
// design and surveying roles. Populated from verified public German data; see
// ingenierie-fiche-types.ts for the shape and SALARY_NOTE. These are NOT academic
// engineering degrees, so the EU Blue Card does not apply to them.

import type { IngenierieFiche } from "../ingenierie-fiche-types";
import { SALARY_NOTE } from "../ingenierie-fiche-types";

// Shared blocks reused across the four vocational fiches.
const LANG: IngenierieFiche["sections"][number] = {
  heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
  body: {
    fr: "L'école professionnelle, l'examen et le bureau d'études se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
    de: "Berufsschule, Prüfung und Konstruktionsbüro finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
    en: "The vocational school, the exam and the design office all take place in German. B2 is the standard employers expect, and it is the level we aim for.",
  },
};

const RECO: IngenierieFiche["sections"][number] = {
  heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
  body: {
    fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
    de: "Für eine Ausbildung ist keine Anerkennung eines Abschlusses erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Erforderlich sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Schulabschluss.",
    en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the qualification is recognised throughout the country. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
  },
};

const VISA: IngenierieFiche["sections"][number] = {
  heading: { fr: "Visa", de: "Visum", en: "Visa" },
  body: {
    fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Ces métiers étant vocationnels, la Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas. Nous vérifions votre éligibilité et montons le dossier avec vous.",
    de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel für Fachkräfte, um in Deutschland zu arbeiten. Da es sich um Ausbildungsberufe handelt, gilt die akademischen Profilen vorbehaltene Blaue Karte EU hier nicht. Wir prüfen Ihre Voraussetzungen und stellen den Antrag gemeinsam mit Ihnen zusammen.",
    en: "Entry is via the vocational training visa (Ausbildung). Once qualified, you switch to a skilled worker permit to work in Germany. As these are vocational roles, the EU Blue Card, reserved for university profiles, does not apply. We check your eligibility and prepare the application with you.",
  },
};

const SUPPORT: IngenierieFiche["sections"][number] = {
  heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
  body: {
    fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
    de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, finden das Unternehmen und den Ausbildungsvertrag, bereiten die Visumsunterlagen vor und begleiten Sie bis zur Ankunft.",
    en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa file and support you all the way to your arrival.",
  },
};

export const ING_FICHES_AUSBILDUNG: Record<string, IngenierieFiche> = {
  "technischer-produktdesigner": {
    slug: "technischer-produktdesigner",
    image: "technischer-produktdesigner",
    title: {
      fr: "Dessinateur-projeteur produit (Technischer Produktdesigner)",
      de: "Technischer Produktdesigner",
      en: "Technical product designer (Technischer Produktdesigner)",
    },
    intro: {
      fr: "Un métier technique et créatif, porte d'entrée de l'ingénierie allemande, très recherché dans les bureaux d'études.",
      de: "Ein technischer und kreativer Beruf, ein Einstieg in die deutsche Ingenieurwelt, in Konstruktionsbüros stark gefragt.",
      en: "A technical and creative role, a gateway into German engineering, in strong demand in design offices.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Technischer Produktdesigner crée des modèles 3D et des plans techniques de produits et de composants en CAO, en vue de leur fabrication. Il travaille en bureau d'études, au plus près des ingénieurs.",
          de: "Der Technische Produktdesigner erstellt 3D-Modelle und technische Zeichnungen von Produkten und Bauteilen per CAD, mit Blick auf die Fertigung. Er arbeitet im Konstruktionsbüro, eng mit den Ingenieuren.",
          en: "The technical product designer creates 3D models and technical drawings of products and components in CAD, ready for manufacturing. They work in the design office, close to the engineers.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage, la rémunération suit la convention, généralement de l'ordre de 1 000 à 1 200 € par mois. Après le diplôme, le salaire médian, tous niveaux d'expérience confondus, est d'environ 4 029 €/mois pour ces métiers du dessin technique ; l'entrée se situe en dessous de cette médiane (source : Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          de: "In der Ausbildung folgt die Vergütung dem Tarif, in der Regel etwa 1.000 bis 1.200 € pro Monat. Nach dem Abschluss liegt der Median über alle Erfahrungsstufen bei rund 4.029 €/Monat für diese technischen Zeichenberufe; der Einstieg liegt darunter (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          en: "During the apprenticeship, pay follows the tariff, generally around 1,000 to 1,200 € per month. After the diploma, the median across all experience levels is about 4,029 €/month for these technical drawing roles; entry sits below that median (source: Entgeltatlas, Federal Employment Agency, 2025).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans et demi en alternance entre l'entreprise et l'école professionnelle, et se conclut par l'examen de la chambre.",
          de: "Die Ausbildung dauert 3,5 Jahre im Wechsel zwischen Betrieb und Berufsschule und endet mit der Kammerprüfung.",
          en: "The training lasts 3.5 years, alternating between the company and the vocational school, and ends with the chamber exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "La construction mécanique et automobile et les bureaux d'études recrutent : Bosch, Siemens, ZF, les constructeurs de machines et de nombreux bureaux de conception (Konstruktionsbüros).",
          de: "Maschinen- und Fahrzeugbau sowie Konstruktionsbüros stellen ein: Bosch, Siemens, ZF, Maschinenbauer und viele Konstruktionsbüros.",
          en: "Mechanical and automotive engineering and design offices hire: Bosch, Siemens, ZF, machine builders and many design offices (Konstruktionsbüros).",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont solides, ce métier alimentant directement l'ingénierie, un secteur en forte tension en Allemagne.",
          de: "Die Aussichten sind solide, da dieser Beruf direkt in die stark nachgefragte Ingenieurbranche mündet.",
          en: "Prospects are solid, as this role feeds directly into engineering, a field in strong demand in Germany.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers Technicien (staatlich geprüfter Techniker), chef de projet CAO, ou poursuivre des études d'ingénieur.",
          de: "Sie können sich zum staatlich geprüften Techniker, CAD-Projektleiter weiterentwickeln oder ein Ingenieurstudium anschließen.",
          en: "You can progress to state-certified technician (Techniker), CAD project lead, or continue toward an engineering degree.",
        },
      },
      LANG,
      RECO,
      VISA,
      SUPPORT,
    ],
    faq: [
      {
        q: { fr: "Faut-il déjà maîtriser la CAO ?", de: "Muss ich CAD bereits beherrschen?", en: "Do I need to know CAD already?" },
        a: {
          fr: "Non, la formation vous apprend les logiciels de CAO ; un goût pour la technique et le dessin aide.",
          de: "Nein, die Ausbildung bringt Ihnen die CAD-Software bei; Interesse an Technik und Zeichnen hilft.",
          en: "No, the training teaches you the CAD software; an interest in technology and drawing helps.",
        },
      },
      {
        q: { fr: "Ce métier mène-t-il à l'ingénierie ?", de: "Führt dieser Beruf zur Ingenieurlaufbahn?", en: "Does this role lead to engineering?" },
        a: {
          fr: "Oui, il est une porte d'entrée : on peut évoluer vers Techniker puis, si on le souhaite, vers des études d'ingénieur.",
          de: "Ja, er ist ein Einstieg: Man kann sich zum Techniker und bei Interesse weiter zum Ingenieurstudium entwickeln.",
          en: "Yes, it is a gateway: you can move up to Techniker and, if you wish, toward engineering studies.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "technischer-systemplaner": {
    slug: "technischer-systemplaner",
    image: "technischer-systemplaner",
    title: {
      fr: "Dessinateur en installations techniques (Technischer Systemplaner)",
      de: "Technischer Systemplaner",
      en: "Technical systems planner (Technischer Systemplaner)",
    },
    intro: {
      fr: "Un métier clé de la technique du bâtiment et de l'énergie, recherché par les bureaux d'études allemands.",
      de: "Ein Schlüsselberuf der Gebäude- und Energietechnik, von deutschen Planungsbüros gesucht.",
      en: "A key role in building-services and energy technology, sought after by German planning offices.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Technischer Systemplaner conçoit et dessine en CAO les installations techniques du bâtiment (chauffage, ventilation, sanitaire, électricité) et les schémas de réseaux. Il prépare les plans qu'exécuteront les entreprises.",
          de: "Der Technische Systemplaner entwirft und zeichnet per CAD die gebäudetechnischen Anlagen (Heizung, Lüftung, Sanitär, Elektro) und Netzschemata. Er erstellt die Pläne für die ausführenden Betriebe.",
          en: "The technical systems planner designs and draws in CAD the building-services systems (heating, ventilation, plumbing, electrical) and network schematics. They prepare the plans that installation firms will carry out.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage, la rémunération suit la convention, généralement de l'ordre de 1 000 à 1 200 € par mois. Après le diplôme, le salaire médian, tous niveaux d'expérience confondus, est d'environ 4 029 €/mois pour ces métiers du dessin technique ; l'entrée se situe en dessous de cette médiane (source : Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          de: "In der Ausbildung folgt die Vergütung dem Tarif, in der Regel etwa 1.000 bis 1.200 € pro Monat. Nach dem Abschluss liegt der Median über alle Erfahrungsstufen bei rund 4.029 €/Monat für diese technischen Zeichenberufe; der Einstieg liegt darunter (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          en: "During the apprenticeship, pay follows the tariff, generally around 1,000 to 1,200 € per month. After the diploma, the median across all experience levels is about 4,029 €/month for these technical drawing roles; entry sits below that median (source: Entgeltatlas, Federal Employment Agency, 2025).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans et demi en alternance, avec une spécialité (par exemple technique du bâtiment ou électrotechnique), et se conclut par l'examen de la chambre.",
          de: "Die Ausbildung dauert 3,5 Jahre im dualen System, mit einer Fachrichtung (zum Beispiel Versorgungs- oder Elektrotechnik), und endet mit der Kammerprüfung.",
          en: "The training lasts 3.5 years in the dual system, with a specialism (for example building services or electrical engineering), and ends with the chamber exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les bureaux d'études en technique du bâtiment (TGA), les bureaux d'ingénierie (Ingenieurbüros) et les entreprises d'installation recrutent, portés par la rénovation énergétique.",
          de: "Planungsbüros der Gebäudetechnik (TGA), Ingenieurbüros und Installationsbetriebe stellen ein, getragen von der energetischen Sanierung.",
          en: "Building-services (TGA) planning offices, engineering offices (Ingenieurbüros) and installation firms hire, driven by energy-efficient renovation.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts, soutenus par la transition énergétique et les besoins en technique du bâtiment.",
          de: "Die Aussichten sind gut, getragen von der Energiewende und dem Bedarf an Gebäudetechnik.",
          en: "Prospects are strong, supported by the energy transition and the demand for building-services technology.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers Technicien (Techniker), projeteur senior, ou poursuivre des études d'ingénieur en génie climatique ou électrique.",
          de: "Sie können sich zum Techniker, Senior-Planer weiterentwickeln oder ein Studium in Versorgungs- oder Elektrotechnik anschließen.",
          en: "You can progress to technician (Techniker), senior planner, or continue toward an engineering degree in building services or electrical engineering.",
        },
      },
      LANG,
      RECO,
      VISA,
      SUPPORT,
    ],
    faq: [
      {
        q: { fr: "Quelle spécialité choisir ?", de: "Welche Fachrichtung wählen?", en: "Which specialism to choose?" },
        a: {
          fr: "Les principales sont la technique du bâtiment (chauffage, ventilation, sanitaire) et l'électrotechnique ; les deux recrutent fortement.",
          de: "Die wichtigsten sind Versorgungstechnik (Heizung, Lüftung, Sanitär) und Elektrotechnik; beide stellen stark ein.",
          en: "The main ones are building services (heating, ventilation, plumbing) and electrical engineering; both hire strongly.",
        },
      },
      {
        q: { fr: "Est-ce un métier de bureau ?", de: "Ist das ein Bürojob?", en: "Is it an office job?" },
        a: {
          fr: "Oui, principalement en bureau d'études et de planification, avec des logiciels de CAO.",
          de: "Ja, überwiegend im Planungs- und Konstruktionsbüro, mit CAD-Software.",
          en: "Yes, mainly in the planning and design office, using CAD software.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "bauzeichner": {
    slug: "bauzeichner",
    image: "bauzeichner",
    title: {
      fr: "Dessinateur en bâtiment (Bauzeichner)",
      de: "Bauzeichner",
      en: "Construction draftsperson (Bauzeichner)",
    },
    intro: {
      fr: "Un métier concret et précis, au coeur de la construction allemande, recherché par les bureaux d'architecture et d'ingénierie.",
      de: "Ein konkreter und präziser Beruf im Herzen des deutschen Bauwesens, von Architektur- und Ingenieurbüros gesucht.",
      en: "A concrete, precise role at the heart of German construction, sought after by architecture and engineering offices.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Bauzeichner réalise en CAO les plans de construction (architecture, structure, génie civil) à partir des études des architectes et des ingénieurs. Il produit des plans précis, cotés et normalisés.",
          de: "Der Bauzeichner erstellt per CAD die Baupläne (Architektur, Tragwerk, Tiefbau) auf Basis der Entwürfe von Architekten und Ingenieuren. Er liefert präzise, bemaßte und normgerechte Pläne.",
          en: "The construction draftsperson produces construction drawings in CAD (architecture, structure, civil works) from the designs of architects and engineers. They deliver precise, dimensioned, standard-compliant plans.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage, la rémunération suit la convention, généralement de l'ordre de 1 000 à 1 200 € par mois. Après le diplôme, le salaire se situe de l'ordre de 3 500 à 4 000 €/mois selon la branche et la région, dans la famille des métiers du dessin technique (source : Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          de: "In der Ausbildung folgt die Vergütung dem Tarif, in der Regel etwa 1.000 bis 1.200 € pro Monat. Nach dem Abschluss liegt das Gehalt je nach Branche und Region bei etwa 3.500 bis 4.000 €/Monat, im Umfeld der technischen Zeichenberufe (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          en: "During the apprenticeship, pay follows the tariff, generally around 1,000 to 1,200 € per month. After the diploma, pay is around 3,500 to 4,000 €/month depending on the sector and region, within the technical drawing occupations (source: Entgeltatlas, Federal Employment Agency, 2025).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans en alternance, avec une spécialité (architecture, génie civil ou structures), et se conclut par l'examen de la chambre.",
          de: "Die Ausbildung dauert 3 Jahre im dualen System, mit einer Fachrichtung (Architektur, Tief- oder Ingenieurbau), und endet mit der Kammerprüfung.",
          en: "The training lasts 3 years in the dual system, with a specialism (architecture, civil or structural engineering), and ends with the chamber exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les bureaux d'architecture et d'ingénierie (Architektur- und Ingenieurbüros), les entreprises de construction et les administrations du bâtiment recrutent.",
          de: "Architektur- und Ingenieurbüros, Bauunternehmen und Bauverwaltungen stellen ein.",
          en: "Architecture and engineering offices (Architektur- und Ingenieurbüros), construction firms and public building authorities hire.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont solides, portés par la forte demande du secteur du bâtiment en Allemagne.",
          de: "Die Aussichten sind solide, getragen von der hohen Nachfrage im deutschen Bauwesen.",
          en: "Prospects are solid, driven by strong demand in the German construction sector.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers Technicien du bâtiment (Bautechniker), projeteur, ou poursuivre des études de génie civil ou d'architecture.",
          de: "Sie können sich zum Bautechniker, Planer weiterentwickeln oder ein Studium im Bauingenieurwesen oder in Architektur anschließen.",
          en: "You can progress to building technician (Bautechniker), planner, or continue toward a civil engineering or architecture degree.",
        },
      },
      LANG,
      RECO,
      VISA,
      SUPPORT,
    ],
    faq: [
      {
        q: { fr: "Quelle différence avec l'architecte ?", de: "Was ist der Unterschied zum Architekten?", en: "How does it differ from an architect?" },
        a: {
          fr: "L'architecte ou l'ingénieur conçoit ; le Bauzeichner met les projets en plans précis et normalisés.",
          de: "Architekt oder Ingenieur entwerfen; der Bauzeichner setzt die Projekte in präzise, normgerechte Pläne um.",
          en: "The architect or engineer designs; the Bauzeichner turns the projects into precise, standard-compliant plans.",
        },
      },
      {
        q: { fr: "Est-ce un métier de bureau ?", de: "Ist das ein Bürojob?", en: "Is it an office job?" },
        a: {
          fr: "Oui, essentiellement en bureau d'études, avec parfois des visites de chantier.",
          de: "Ja, überwiegend im Planungsbüro, gelegentlich mit Baustellenbesuchen.",
          en: "Yes, mainly in the design office, sometimes with site visits.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "vermessungstechniker": {
    slug: "vermessungstechniker",
    image: "vermessungstechniker",
    title: {
      fr: "Géomètre-topographe (Vermessungstechniker)",
      de: "Vermessungstechniker",
      en: "Surveying technician (Vermessungstechniker)",
    },
    intro: {
      fr: "Un métier de terrain et de précision, essentiel à la construction et à l'aménagement, recherché en Allemagne.",
      de: "Ein Beruf im Gelände und mit Präzision, unverzichtbar für Bau und Planung, in Deutschland gesucht.",
      en: "A field-based, precision role, essential to construction and planning, in demand in Germany.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Vermessungstechniker réalise des relevés et des mesures sur le terrain, traite les géodonnées et produit des plans, des cartes et des données pour la construction et le cadastre.",
          de: "Der Vermessungstechniker führt Aufnahmen und Messungen im Gelände durch, verarbeitet Geodaten und erstellt Pläne, Karten und Daten für Bau und Kataster.",
          en: "The surveying technician carries out field surveys and measurements, processes geodata and produces plans, maps and data for construction and the land registry.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage, la rémunération suit la convention, généralement de l'ordre de 1 000 à 1 200 € par mois. Après le diplôme, le salaire se situe de l'ordre de 3 400 à 3 900 €/mois selon l'employeur et la région, dans la famille des métiers techniques (source : Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          de: "In der Ausbildung folgt die Vergütung dem Tarif, in der Regel etwa 1.000 bis 1.200 € pro Monat. Nach dem Abschluss liegt das Gehalt je nach Arbeitgeber und Region bei etwa 3.400 bis 3.900 €/Monat, im Umfeld der technischen Berufe (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          en: "During the apprenticeship, pay follows the tariff, generally around 1,000 to 1,200 € per month. After the diploma, pay is around 3,400 to 3,900 €/month depending on the employer and region, within the technical occupations (source: Entgeltatlas, Federal Employment Agency, 2025).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans en alternance, entre le terrain, le bureau et l'école professionnelle, et se conclut par l'examen de la chambre.",
          de: "Die Ausbildung dauert 3 Jahre im Wechsel zwischen Gelände, Büro und Berufsschule und endet mit der Kammerprüfung.",
          en: "The training lasts 3 years, alternating between the field, the office and the vocational school, and ends with the chamber exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les cabinets de géomètres (Vermessungsbüros), les services publics du cadastre (Kataster- und Vermessungsämter), les entreprises de construction et d'infrastructure et les fournisseurs de géodonnées recrutent.",
          de: "Vermessungsbüros, Kataster- und Vermessungsämter, Bau- und Infrastrukturunternehmen und Geodatenanbieter stellen ein.",
          en: "Surveying offices (Vermessungsbüros), public cadastral and surveying authorities (Kataster- und Vermessungsämter), construction and infrastructure firms and geodata providers hire.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont solides, portés par la construction, les infrastructures et la numérisation des géodonnées.",
          de: "Die Aussichten sind solide, getragen von Bau, Infrastruktur und der Digitalisierung der Geodaten.",
          en: "Prospects are solid, driven by construction, infrastructure and the digitalisation of geodata.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers Technicien (Techniker), responsable d'équipe de mesure, ou poursuivre des études de géodésie ou de géomatique.",
          de: "Sie können sich zum Techniker, Messtruppführer weiterentwickeln oder ein Studium in Geodäsie oder Geoinformatik anschließen.",
          en: "You can progress to technician (Techniker), survey team leader, or continue toward a geodesy or geomatics degree.",
        },
      },
      LANG,
      RECO,
      VISA,
      SUPPORT,
    ],
    faq: [
      {
        q: { fr: "Est-ce un métier de terrain ou de bureau ?", de: "Ist das ein Beruf im Gelände oder im Büro?", en: "Is it a field or office role?" },
        a: {
          fr: "Les deux : relevés et mesures sur le terrain, puis traitement des données et plans au bureau.",
          de: "Beides: Aufnahmen und Messungen im Gelände, dann Datenauswertung und Pläne im Büro.",
          en: "Both: surveys and measurements in the field, then data processing and plans in the office.",
        },
      },
      {
        q: { fr: "Faut-il de bonnes bases en mathématiques ?", de: "Braucht man gute Mathematikkenntnisse?", en: "Do I need good maths?" },
        a: {
          fr: "Oui, la géométrie et le calcul sont utiles ; la formation vous apporte les méthodes et les outils.",
          de: "Ja, Geometrie und Rechnen sind hilfreich; die Ausbildung vermittelt Methoden und Werkzeuge.",
          en: "Yes, geometry and calculation help; the training gives you the methods and tools.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
