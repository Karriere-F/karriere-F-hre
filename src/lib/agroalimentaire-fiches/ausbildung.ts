// Ausbildung-path Agroalimentaire fiches (train in Germany). Populated from
// verified public German data (job titles & durations: Bundesagentur für Arbeit
// / BERUFENET; pay: Entgeltatlas, IHK, BIBB). Figures are indicative gross
// ranges; see agroalimentaire-fiche-types.ts for the shape and SALARY_NOTE.

import type { AgroFiche } from "../agroalimentaire-fiche-types";
import { SALARY_NOTE } from "../agroalimentaire-fiche-types";

export const AGRO_FICHES_AUSBILDUNG: Record<string, AgroFiche> = {
  "fachkraft-lebensmitteltechnik": {
    slug: "fachkraft-lebensmitteltechnik",
    image: "fachkraft-lebensmitteltechnik",
    title: {
      fr: "Technicien de l'industrie alimentaire (Fachkraft für Lebensmitteltechnik)",
      de: "Fachkraft für Lebensmitteltechnik",
      en: "Food technology specialist (Fachkraft für Lebensmitteltechnik)",
    },
    intro: {
      fr: "Le métier phare de l'agroalimentaire allemand : piloter la production industrielle des aliments, de la matière première au produit fini, dans un secteur essentiel qui recrute.",
      de: "Der Leitberuf der deutschen Lebensmittelbranche: die industrielle Lebensmittelproduktion vom Rohstoff bis zum Endprodukt steuern, in einer wichtigen Branche mit Bedarf.",
      en: "The flagship role of the German food industry: running industrial food production from raw material to finished product, in an essential sector that is hiring.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "La Fachkraft für Lebensmitteltechnik réceptionne les matières premières, prépare, règle et surveille les machines et les lignes de production, conduit la fabrication, contrôle la qualité et assure le conditionnement, dans le respect de l'hygiène et des normes alimentaires.",
          de: "Die Fachkraft für Lebensmitteltechnik nimmt Rohstoffe an, richtet Maschinen und Produktionslinien ein, überwacht sie, steuert die Herstellung, kontrolliert die Qualität und sorgt für die Verpackung, unter Beachtung von Hygiene und Lebensmittelstandards.",
          en: "The food technology specialist receives raw materials, sets up and monitors machines and production lines, runs manufacturing, checks quality and handles packaging, in line with hygiene and food standards.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'Ausbildung, environ 750 à 1 250 €/mois selon la branche et la région. À l'entrée après la formation, environ 2 300 à 2 700 €/mois. Le salaire médian tous niveaux d'expérience confondus est d'environ 3 450 €/mois (fourchette 2 817 à 4 196 €) selon l'Entgeltatlas de la Bundesagentur für Arbeit. Montants indicatifs.",
          de: "Während der Ausbildung etwa 750 bis 1.250 €/Monat je nach Branche und Region. Zum Einstieg nach der Ausbildung etwa 2.300 bis 2.700 €/Monat. Der Medianwert über alle Erfahrungsstufen liegt bei rund 3.450 €/Monat (Spanne 2.817 bis 4.196 €) laut Entgeltatlas der Bundesagentur für Arbeit. Richtwerte.",
          en: "During the Ausbildung, about 750 to 1,250 €/month depending on the sector and region. On entry after training, about 2,300 to 2,700 €/month. The median across all experience levels is around 3,450 €/month (range 2,817 to 4,196 €) per the Entgeltatlas of the Federal Employment Agency. Indicative figures.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans, en alternance entre l'entreprise et l'école professionnelle, et se conclut par l'examen de la chambre (IHK). Le contenu couvre la technologie alimentaire, les machines, l'hygiène et le contrôle qualité.",
          de: "Die Ausbildung dauert 3 Jahre, im Wechsel zwischen Betrieb und Berufsschule, und endet mit der IHK-Prüfung. Inhalte sind Lebensmitteltechnologie, Maschinen, Hygiene und Qualitätskontrolle.",
          en: "The training lasts 3 years, alternating between the company and the vocational school, ending with the chamber (IHK) exam. Content covers food technology, machinery, hygiene and quality control.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Grands groupes de l'agroalimentaire (produits laitiers, viande, boulangerie industrielle, boissons, plats préparés), coopératives et PME de transformation. L'industrie alimentaire est l'un des plus grands secteurs industriels allemands.",
          de: "Große Lebensmittelkonzerne (Molkerei, Fleisch, industrielle Backwaren, Getränke, Fertiggerichte), Genossenschaften und mittelständische Verarbeiter. Die Lebensmittelindustrie ist einer der größten Industriezweige Deutschlands.",
          en: "Large food groups (dairy, meat, industrial bakery, beverages, ready meals), cooperatives and mid-sized processors. The food industry is one of Germany's largest industrial sectors.",
        },
      },
      {
        heading: { fr: "Débouchés et évolution", de: "Perspektiven und Aufstieg", en: "Prospects and progression" },
        body: {
          fr: "Emploi stable et demande soutenue. Évolutions vers le pilotage de ligne, la maintenance, le contrôle qualité, ou l'encadrement avec des qualifications complémentaires (Techniker, Meister Lebensmitteltechnik).",
          de: "Sicherer Arbeitsplatz und stabile Nachfrage. Entwicklung in die Anlagenführung, Instandhaltung, Qualitätskontrolle oder Führung mit Weiterbildungen (Techniker, Meister Lebensmitteltechnik).",
          en: "Stable employment and steady demand. Progression into line management, maintenance, quality control, or supervision with further qualifications (Techniker, Meister Lebensmitteltechnik).",
        },
      },
      {
        heading: { fr: "Niveau d'allemand et visa", de: "Deutschniveau und Visum", en: "German level and visa" },
        body: {
          fr: "Le niveau B2 est le standard, notamment pour l'hygiène et la sécurité. Il faut un contrat d'Ausbildung et un visa de formation (§ 16a). Nous vous formons jusqu'au B2 à Douala et gérons les démarches.",
          de: "B2 ist der Standard, besonders für Hygiene und Sicherheit. Erforderlich sind ein Ausbildungsvertrag und ein Ausbildungsvisum (§ 16a). Wir bilden Sie in Douala bis B2 aus und übernehmen die Formalitäten.",
          en: "B2 is the standard, especially for hygiene and safety. You need an Ausbildung contract and a training visa (§ 16a). We train you to B2 in Douala and handle the paperwork.",
        },
      },
    ],
    faq: [
      {
        q: { fr: "Ce métier est-il technique ?", de: "Ist der Beruf technisch?", en: "Is this a technical role?" },
        a: {
          fr: "Oui : il combine production alimentaire, conduite de machines et contrôle qualité. Il convient aux profils intéressés par l'industrie et la technique.",
          de: "Ja: Er verbindet Lebensmittelproduktion, Maschinenführung und Qualitätskontrolle. Geeignet für Profile mit Interesse an Industrie und Technik.",
          en: "Yes: it combines food production, machine operation and quality control. Suited to profiles interested in industry and technology.",
        },
      },
      {
        q: { fr: "L'Ausbildung est-elle rémunérée ?", de: "Wird die Ausbildung vergütet?", en: "Is the Ausbildung paid?" },
        a: {
          fr: "Oui, dès la première année, avec une progression chaque année selon la branche et la région.",
          de: "Ja, ab dem ersten Jahr, mit jährlicher Steigerung je nach Branche und Region.",
          en: "Yes, from the first year, rising each year depending on the sector and region.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  milchtechnologe: {
    slug: "milchtechnologe",
    image: "milchtechnologe",
    title: {
      fr: "Technologue laitier (Milchtechnologe/-technologin)",
      de: "Milchtechnologe/-technologin",
      en: "Dairy technologist (Milchtechnologe/-technologin)",
    },
    intro: {
      fr: "Un métier spécialisé de la transformation du lait : fabriquer lait, fromage, beurre, yaourt et crème à l'échelle industrielle, dans un secteur laitier fort en Allemagne.",
      de: "Ein spezialisierter Beruf der Milchverarbeitung: Milch, Käse, Butter, Joghurt und Sahne industriell herstellen, in einer starken deutschen Milchbranche.",
      en: "A specialised dairy-processing role: producing milk, cheese, butter, yoghurt and cream at industrial scale, in Germany's strong dairy sector.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Milchtechnologe transforme le lait cru en produits laitiers : il règle et surveille les installations, conduit les procédés (pasteurisation, fermentation, affinage), contrôle la qualité et l'hygiène et assure le conditionnement.",
          de: "Der Milchtechnologe verarbeitet Rohmilch zu Milchprodukten: Er richtet Anlagen ein und überwacht sie, steuert die Verfahren (Pasteurisierung, Fermentation, Reifung), kontrolliert Qualität und Hygiene und sorgt für die Verpackung.",
          en: "The dairy technologist turns raw milk into dairy products: setting up and monitoring plants, running processes (pasteurisation, fermentation, ripening), checking quality and hygiene and handling packaging.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'Ausbildung, environ 1 000 à 1 590 €/mois selon la région et la convention. À l'entrée après la formation, environ 2 500 à 3 000 €/mois, avec une progression sensible selon l'expérience (sources : Entgeltatlas de la Bundesagentur für Arbeit, portails de rémunération). Montants indicatifs.",
          de: "Während der Ausbildung etwa 1.000 bis 1.590 €/Monat je nach Region und Tarif. Zum Einstieg nach der Ausbildung etwa 2.500 bis 3.000 €/Monat, mit deutlicher Steigerung je nach Erfahrung (Quellen: Entgeltatlas der Bundesagentur für Arbeit, Gehaltsportale). Richtwerte.",
          en: "During the Ausbildung, about 1,000 to 1,590 €/month depending on region and agreement. On entry after training, about 2,500 to 3,000 €/month, rising notably with experience (sources: Entgeltatlas of the Federal Employment Agency, salary portals). Indicative figures.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans, en alternance entreprise / école professionnelle, avec l'examen de la chambre. Elle se déroule surtout dans les laiteries et coopératives.",
          de: "Die Ausbildung dauert 3 Jahre, im Wechsel zwischen Betrieb und Berufsschule, mit Kammerprüfung. Sie findet vor allem in Molkereien und Genossenschaften statt.",
          en: "The training lasts 3 years, alternating company / vocational school, with the chamber exam. It mainly takes place in dairies and cooperatives.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Laiteries et coopératives laitières, grands groupes de produits laitiers et fromagers. L'Allemagne est un grand producteur laitier européen, avec des besoins réguliers.",
          de: "Molkereien und Milchgenossenschaften, große Molkerei- und Käsereikonzerne. Deutschland ist ein großer Milchproduzent Europas mit regelmäßigem Bedarf.",
          en: "Dairies and dairy cooperatives, large dairy and cheese groups. Germany is a major European dairy producer with regular demand.",
        },
      },
      {
        heading: { fr: "Débouchés et évolution", de: "Perspektiven und Aufstieg", en: "Prospects and progression" },
        body: {
          fr: "Évolutions vers la conduite d'installations, le contrôle qualité, ou l'encadrement (Techniker, Meister). Une spécialisation vers le laboratoire laitier est également possible.",
          de: "Entwicklung in die Anlagenführung, Qualitätskontrolle oder Führung (Techniker, Meister). Auch eine Spezialisierung ins Milchlabor ist möglich.",
          en: "Progression into plant operation, quality control, or supervision (Techniker, Meister). Specialising into the dairy laboratory is also possible.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand et visa", de: "Deutschniveau und Visum", en: "German level and visa" },
        body: {
          fr: "Le niveau B2 est le standard. Il faut un contrat d'Ausbildung et un visa de formation (§ 16a). Nous vous formons jusqu'au B2 à Douala et gérons les démarches.",
          de: "B2 ist der Standard. Erforderlich sind ein Ausbildungsvertrag und ein Ausbildungsvisum (§ 16a). Wir bilden Sie in Douala bis B2 aus und übernehmen die Formalitäten.",
          en: "B2 is the standard. You need an Ausbildung contract and a training visa (§ 16a). We train you to B2 in Douala and handle the paperwork.",
        },
      },
    ],
    faq: [
      {
        q: { fr: "Faut-il vivre à la campagne ?", de: "Muss man auf dem Land leben?", en: "Do I have to live in the countryside?" },
        a: {
          fr: "Souvent, les laiteries sont proches des zones de production, mais il existe aussi des sites en périphérie de villes. Cela dépend de l'employeur.",
          de: "Molkereien liegen oft nahe den Produktionsgebieten, es gibt aber auch Standorte am Stadtrand. Das hängt vom Arbeitgeber ab.",
          en: "Dairies are often near production areas, but there are also sites on the edge of cities. It depends on the employer.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "milchwirtschaftlicher-laborant": {
    slug: "milchwirtschaftlicher-laborant",
    image: "milchwirtschaftlicher-laborant",
    title: {
      fr: "Laborantin en industrie laitière (Milchwirtschaftliche/r Laborant/in)",
      de: "Milchwirtschaftliche/r Laborant/in",
      en: "Dairy laboratory technician (Milchwirtschaftliche/r Laborant/in)",
    },
    intro: {
      fr: "Le métier de l'analyse et de la qualité dans l'industrie laitière : garantir la sécurité et la conformité des produits par les contrôles de laboratoire.",
      de: "Der Beruf der Analytik und Qualität in der Milchwirtschaft: Sicherheit und Konformität der Produkte durch Laborkontrollen sichern.",
      en: "The analysis and quality role in the dairy industry: ensuring product safety and compliance through laboratory testing.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le laborantin de l'industrie laitière prélève des échantillons et réalise des analyses chimiques, physiques et microbiologiques du lait et des produits laitiers, documente les résultats et veille au respect des normes d'hygiène et de qualité.",
          de: "Der milchwirtschaftliche Laborant nimmt Proben und führt chemische, physikalische und mikrobiologische Analysen von Milch und Milchprodukten durch, dokumentiert die Ergebnisse und achtet auf Hygiene- und Qualitätsstandards.",
          en: "The dairy laboratory technician takes samples and performs chemical, physical and microbiological analyses of milk and dairy products, documents the results and ensures hygiene and quality standards.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "La rémunération suit les conventions de branche de l'industrie laitière et se rapproche des métiers techniques du secteur (voir la fiche Technologue laitier). Les repères publics figurent dans l'Entgeltatlas de la Bundesagentur für Arbeit ; les montants sont indicatifs et varient selon la région, l'employeur et l'expérience.",
          de: "Die Vergütung folgt den Branchentarifen der Milchwirtschaft und liegt nahe den technischen Berufen der Branche (siehe Milchtechnologe). Öffentliche Anhaltspunkte bietet der Entgeltatlas der Bundesagentur für Arbeit; die Angaben sind Richtwerte und variieren nach Region, Arbeitgeber und Erfahrung.",
          en: "Pay follows the dairy-industry collective agreements and is close to the sector's technical roles (see the Dairy technologist profile). Public benchmarks are in the Entgeltatlas of the Federal Employment Agency; figures are indicative and vary by region, employer and experience.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans, en alternance entreprise / école professionnelle, avec l'examen de la chambre. Elle met l'accent sur l'analyse de laboratoire et le contrôle qualité.",
          de: "Die Ausbildung dauert 3 Jahre, im Wechsel zwischen Betrieb und Berufsschule, mit Kammerprüfung. Der Schwerpunkt liegt auf Laboranalytik und Qualitätskontrolle.",
          en: "The training lasts 3 years, alternating company / vocational school, with the chamber exam. It focuses on laboratory analysis and quality control.",
        },
      },
      {
        heading: { fr: "Débouchés et évolution", de: "Perspektiven und Aufstieg", en: "Prospects and progression" },
        body: {
          fr: "Laboratoires de laiteries, coopératives et instituts de contrôle. Évolutions vers l'assurance qualité, la responsabilité de laboratoire ou une spécialisation avec des qualifications complémentaires.",
          de: "Labore von Molkereien, Genossenschaften und Prüfinstituten. Entwicklung in die Qualitätssicherung, Laborleitung oder eine Spezialisierung mit Weiterbildungen.",
          en: "Laboratories of dairies, cooperatives and testing institutes. Progression into quality assurance, laboratory management or specialisation with further qualifications.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand et visa", de: "Deutschniveau und Visum", en: "German level and visa" },
        body: {
          fr: "Le niveau B2 est le standard, la rigueur documentaire et l'hygiène étant essentielles. Il faut un contrat d'Ausbildung et un visa de formation (§ 16a). Nous vous formons jusqu'au B2 à Douala et gérons les démarches.",
          de: "B2 ist der Standard, da Dokumentation und Hygiene entscheidend sind. Erforderlich sind ein Ausbildungsvertrag und ein Ausbildungsvisum (§ 16a). Wir bilden Sie in Douala bis B2 aus und übernehmen die Formalitäten.",
          en: "B2 is the standard, as documentation rigour and hygiene are essential. You need an Ausbildung contract and a training visa (§ 16a). We train you to B2 in Douala and handle the paperwork.",
        },
      },
    ],
    faq: [
      {
        q: { fr: "Quelle différence avec le technologue laitier ?", de: "Was ist der Unterschied zum Milchtechnologen?", en: "What's the difference from the dairy technologist?" },
        a: {
          fr: "Le laborantin se concentre sur les analyses et le contrôle qualité ; le technologue conduit la production. Les deux travaillent dans l'industrie laitière.",
          de: "Der Laborant konzentriert sich auf Analytik und Qualitätskontrolle; der Technologe steuert die Produktion. Beide arbeiten in der Milchwirtschaft.",
          en: "The technician focuses on analysis and quality control; the technologist runs production. Both work in the dairy industry.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  fleischer: {
    slug: "fleischer",
    image: "fleischer",
    title: {
      fr: "Boucher / bouchère (Fleischer/in)",
      de: "Fleischer/in",
      en: "Butcher (Fleischer/in)",
    },
    intro: {
      fr: "Un métier de l'artisanat et de la transformation alimentaire très recherché en Allemagne, de la découpe à la fabrication de produits carnés.",
      de: "Ein sehr gefragter Handwerks- und Lebensmittelverarbeitungsberuf in Deutschland, von der Zerlegung bis zur Herstellung von Fleischwaren.",
      en: "A skilled craft and food-processing trade in high demand in Germany, from cutting to making meat products.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Fleischer découpe et prépare la viande, fabrique charcuterie et produits carnés, applique les règles d'hygiène et de sécurité alimentaire et, selon l'entreprise, conseille et vend au comptoir. C'est un métier de l'artisanat (Handwerk).",
          de: "Der Fleischer zerlegt und verarbeitet Fleisch, stellt Wurst- und Fleischwaren her, wendet Hygiene- und Lebensmittelsicherheitsregeln an und berät und verkauft je nach Betrieb an der Theke. Ein Handwerksberuf.",
          en: "The butcher cuts and prepares meat, makes sausages and meat products, applies hygiene and food-safety rules and, depending on the business, advises and sells at the counter. It is a skilled craft (Handwerk).",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'Ausbildung, environ 650 à 900 €/mois selon l'année, la région et la convention. À l'entrée après la formation, environ 2 000 à 2 600 €/mois, souvent autour de 2 300 € (sources : portails de rémunération allemands, données de branche). La rémunération progresse avec la spécialisation. Montants indicatifs.",
          de: "Während der Ausbildung etwa 650 bis 900 €/Monat je nach Jahr, Region und Tarif. Zum Einstieg nach der Ausbildung etwa 2.000 bis 2.600 €/Monat, oft um 2.300 € (Quellen: deutsche Gehaltsportale, Branchendaten). Die Vergütung steigt mit der Spezialisierung. Richtwerte.",
          en: "During the Ausbildung, about 650 to 900 €/month depending on the year, region and agreement. On entry after training, about 2,000 to 2,600 €/month, often around 2,300 € (sources: German salary portals, sector data). Pay rises with specialisation. Indicative figures.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans, en alternance entreprise / école professionnelle, dans le cadre de l'artisanat (chambre des métiers, HWK). Une évolution vers le titre de maître (Fleischermeister) est possible.",
          de: "Die Ausbildung dauert 3 Jahre, im Wechsel zwischen Betrieb und Berufsschule, im Handwerk (Handwerkskammer, HWK). Eine Entwicklung zum Fleischermeister ist möglich.",
          en: "The training lasts 3 years, alternating company / vocational school, within the crafts system (chamber of crafts, HWK). Progression to master craftsman (Fleischermeister) is possible.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Boucheries artisanales, ateliers de transformation, industrie de la viande et de la charcuterie, rayons traiteur des enseignes. Le métier connaît une forte pénurie de main-d'œuvre qualifiée.",
          de: "Handwerksfleischereien, Verarbeitungsbetriebe, Fleisch- und Wurstindustrie, Frischetheken des Handels. Der Beruf hat einen starken Fachkräftemangel.",
          en: "Craft butcheries, processing workshops, the meat and sausage industry, retailers' deli counters. The trade has a strong shortage of skilled workers.",
        },
      },
      {
        heading: { fr: "Reconnaissance et évolution", de: "Anerkennung und Aufstieg", en: "Recognition and progression" },
        body: {
          fr: "La boucherie relève de l'artisanat : selon l'entreprise et la voie de visa, une reconnaissance de qualification peut être demandée. L'évolution passe par la spécialisation, la responsabilité d'atelier ou le titre de maître, qui permet de former et de diriger.",
          de: "Die Fleischerei gehört zum Handwerk: je nach Betrieb und Visumweg kann eine Anerkennung der Qualifikation verlangt werden. Der Aufstieg führt über Spezialisierung, Werkstattverantwortung oder den Meistertitel, der zum Ausbilden und Führen berechtigt.",
          en: "Butchery belongs to the crafts: depending on the business and visa route, recognition of the qualification may be required. Progression comes through specialisation, workshop responsibility or the master title, which allows training and leading.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand et visa", de: "Deutschniveau und Visum", en: "German level and visa" },
        body: {
          fr: "Le niveau B2 est le standard, l'hygiène et la sécurité alimentaire étant centrales. Il faut un contrat d'Ausbildung et un visa de formation (§ 16a). Nous vous formons jusqu'au B2 à Douala et gérons les démarches.",
          de: "B2 ist der Standard, da Hygiene und Lebensmittelsicherheit zentral sind. Erforderlich sind ein Ausbildungsvertrag und ein Ausbildungsvisum (§ 16a). Wir bilden Sie in Douala bis B2 aus und übernehmen die Formalitäten.",
          en: "B2 is the standard, as hygiene and food safety are central. You need an Ausbildung contract and a training visa (§ 16a). We train you to B2 in Douala and handle the paperwork.",
        },
      },
    ],
    faq: [
      {
        q: { fr: "Le métier recrute-t-il vraiment ?", de: "Wird in diesem Beruf wirklich eingestellt?", en: "Is there real hiring in this trade?" },
        a: {
          fr: "Oui : la boucherie connaît une forte pénurie de personnel qualifié en Allemagne, ce qui en fait une voie porteuse.",
          de: "Ja: In der Fleischerei herrscht in Deutschland ein starker Fachkräftemangel, was den Beruf zukunftssicher macht.",
          en: "Yes: butchery has a strong shortage of skilled staff in Germany, which makes it a promising path.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "brauer-maelzer": {
    slug: "brauer-maelzer",
    image: "brauer-maelzer",
    title: {
      fr: "Brasseur / malteur (Brauer/in und Mälzer/in)",
      de: "Brauer/in und Mälzer/in",
      en: "Brewer & maltster (Brauer/in und Mälzer/in)",
    },
    intro: {
      fr: "Le métier de la production de bière et de boissons, emblématique de l'Allemagne : du maltage au brassage jusqu'à l'embouteillage, avec une vraie technicité.",
      de: "Der Beruf der Bier- und Getränkeherstellung, sinnbildlich für Deutschland: vom Mälzen über das Brauen bis zur Abfüllung, mit echter Technik.",
      en: "The beer and beverage production trade, emblematic of Germany: from malting to brewing to bottling, with real technical depth.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le Brauer und Mälzer transforme les matières premières (orge, houblon, eau, levure) en bière : maltage, brassage, fermentation, filtration et embouteillage, avec le pilotage des installations et le contrôle qualité.",
          de: "Der Brauer und Mälzer verarbeitet Rohstoffe (Gerste, Hopfen, Wasser, Hefe) zu Bier: Mälzen, Brauen, Gärung, Filtration und Abfüllung, mit Anlagensteuerung und Qualitätskontrolle.",
          en: "The brewer and maltster turns raw materials (barley, hops, water, yeast) into beer: malting, brewing, fermentation, filtration and bottling, with plant control and quality checks.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pendant l'Ausbildung, environ 980 €/mois la 1re année, 1 140 € la 2e et 1 330 € la 3e. À l'entrée après la formation, environ 2 960 à 3 400 €/mois selon la convention et la région (sources : portails de rémunération allemands, données de branche). Montants indicatifs.",
          de: "Während der Ausbildung etwa 980 €/Monat im 1., 1.140 € im 2. und 1.330 € im 3. Jahr. Zum Einstieg nach der Ausbildung etwa 2.960 bis 3.400 €/Monat je nach Tarif und Region (Quellen: deutsche Gehaltsportale, Branchendaten). Richtwerte.",
          en: "During the Ausbildung, about 980 €/month in year 1, 1,140 € in year 2 and 1,330 € in year 3. On entry after training, about 2,960 to 3,400 €/month depending on the agreement and region (sources: German salary portals, sector data). Indicative figures.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans, en alternance entreprise / école professionnelle, avec l'examen de la chambre. Elle se déroule dans les brasseries et malteries.",
          de: "Die Ausbildung dauert 3 Jahre, im Wechsel zwischen Betrieb und Berufsschule, mit Kammerprüfung. Sie findet in Brauereien und Mälzereien statt.",
          en: "The training lasts 3 years, alternating company / vocational school, with the chamber exam. It takes place in breweries and maltings.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Brasseries artisanales et industrielles, malteries, groupes de boissons. L'Allemagne compte un très grand nombre de brasseries, avec des besoins réguliers en personnel qualifié.",
          de: "Handwerks- und Industriebrauereien, Mälzereien, Getränkekonzerne. Deutschland hat sehr viele Brauereien, mit regelmäßigem Bedarf an Fachkräften.",
          en: "Craft and industrial breweries, maltings, beverage groups. Germany has a very large number of breweries, with regular demand for skilled staff.",
        },
      },
      {
        heading: { fr: "Débouchés et évolution", de: "Perspektiven und Aufstieg", en: "Prospects and progression" },
        body: {
          fr: "Évolutions vers la conduite d'installations, le contrôle qualité, la responsabilité de production, ou le titre de maître brasseur (Braumeister) via des qualifications complémentaires.",
          de: "Entwicklung in die Anlagenführung, Qualitätskontrolle, Produktionsverantwortung oder zum Braumeister über Weiterbildungen.",
          en: "Progression into plant operation, quality control, production responsibility, or the master brewer title (Braumeister) through further qualifications.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand et visa", de: "Deutschniveau und Visum", en: "German level and visa" },
        body: {
          fr: "Le niveau B2 est le standard. Il faut un contrat d'Ausbildung et un visa de formation (§ 16a). Nous vous formons jusqu'au B2 à Douala et gérons les démarches.",
          de: "B2 ist der Standard. Erforderlich sind ein Ausbildungsvertrag und ein Ausbildungsvisum (§ 16a). Wir bilden Sie in Douala bis B2 aus und übernehmen die Formalitäten.",
          en: "B2 is the standard. You need an Ausbildung contract and a training visa (§ 16a). We train you to B2 in Douala and handle the paperwork.",
        },
      },
    ],
    faq: [
      {
        q: { fr: "Est-ce un métier technique ou artisanal ?", de: "Ist es ein technischer oder handwerklicher Beruf?", en: "Is it a technical or craft trade?" },
        a: {
          fr: "Les deux : il allie savoir-faire de fabrication et pilotage d'installations, avec un fort contrôle qualité.",
          de: "Beides: Er verbindet Herstellungs-Know-how mit Anlagensteuerung und starker Qualitätskontrolle.",
          en: "Both: it combines production know-how with plant control and strong quality checks.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
