import type { IngenierieFiche } from "../ingenierie-fiche-types";
import { SALARY_NOTE } from "../ingenierie-fiche-types";

export const ING_FICHES_DIPLOME_A: Record<string, IngenierieFiche> = {
  "ingenieur-mecanique": {
    slug: "ingenieur-mecanique",
    image: "ingenieur-mecanique",
    title: {
      fr: "Ingénieur en génie mécanique",
      de: "Maschinenbauingenieur",
      en: "Mechanical engineer",
    },
    intro: {
      fr: "Vos compétences en construction mécanique sont recherchées dans le premier secteur industriel allemand, et nous vous aidons à y accéder.",
      de: "Ihre Kompetenzen im Maschinenbau sind im größten Industriezweig Deutschlands gefragt, und wir helfen Ihnen beim Einstieg.",
      en: "Your mechanical engineering skills are sought after in Germany's largest industrial sector, and we help you get there.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'ingénieur en génie mécanique conçoit, calcule et développe des machines, des systèmes et des composants, de la conception à la production.",
          de: "Der Maschinenbauingenieur entwirft, berechnet und entwickelt Maschinen, Systeme und Komponenten, von der Konstruktion bis zur Produktion.",
          en: "The mechanical engineer designs, calculates and develops machines, systems and components, from concept through to production.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 4 540 € par mois, et le salaire médian, tous niveaux d'expérience confondus, d'environ 6 412 € par mois (environ 77 000 € par an) (source : Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          de: "Das Einstiegsgehalt liegt bei rund 4.540 € pro Monat, das mittlere Gehalt über alle Erfahrungsstufen hinweg bei rund 6.412 € pro Monat (etwa 77.000 € pro Jahr) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          en: "The starting salary is around 4,540 € per month, and the median salary, across all experience levels, around 6,412 € per month (about 77,000 € per year) (source: Entgeltatlas, Bundesagentur für Arbeit, 2025).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Bosch, Siemens, ThyssenKrupp, SEW-Eurodrive, Trumpf, GEA, Krones, Voith et ZF Friedrichshafen recrutent, car la construction mécanique et d'installations (Maschinen- und Anlagenbau) est le premier secteur industriel.",
          de: "Bosch, Siemens, ThyssenKrupp, SEW-Eurodrive, Trumpf, GEA, Krones, Voith und ZF Friedrichshafen stellen ein, denn der Maschinen- und Anlagenbau ist der größte Industriezweig.",
          en: "Bosch, Siemens, ThyssenKrupp, SEW-Eurodrive, Trumpf, GEA, Krones, Voith and ZF Friedrichshafen are hiring, as machine and plant engineering (Maschinen- und Anlagenbau) is the leading industrial sector.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts, parmi les plus gros viviers de postes vacants en ingénierie.",
          de: "Die Perspektiven sind stark und gehören zu den größten Reservoirs an offenen Ingenieurstellen.",
          en: "Prospects are strong, among the largest pools of open engineering positions.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers chef de projet, responsable de bureau d'études, expert technique ou management.",
          de: "Sie können sich zum Projektleiter, Leiter der Konstruktionsabteilung, technischen Experten oder ins Management entwickeln.",
          en: "You can progress to project manager, head of the design office, technical expert or management.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Le B2 est le niveau attendu par les employeurs et ouvre le marché de l'ingénierie ; l'anglais est réaliste dans certaines équipes de recherche et développement et les grands groupes internationaux. C'est le B2 que nous visons avec vous.",
          de: "B2 ist das von den Arbeitgebern erwartete Niveau und öffnet den Ingenieurmarkt; Englisch ist in manchen Teams in Forschung und Entwicklung sowie in großen internationalen Konzernen realistisch. Auf B2 arbeiten wir mit Ihnen hin.",
          en: "B2 is the level employers expect and it opens the engineering market; English is realistic in some research and development teams and in large international groups. B2 is what we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "L'ingénierie n'est pas une profession réglementée pour travailler : votre diplôme est évalué via la base anabin et, si besoin, une attestation de comparabilité de la ZAB. Le titre d'Ingenieur est protégé par les lois des Länder et son usage peut nécessiter une autorisation, mais celle-ci n'est pas requise pour être employé. Nous faisons évaluer votre diplôme et vous orientons.",
          de: "Ingenieurwesen ist für die Ausübung kein reglementierter Beruf: Ihr Abschluss wird über die anabin-Datenbank und bei Bedarf durch eine Zeugnisbewertung der ZAB geprüft. Die Bezeichnung Ingenieur ist durch die Gesetze der Länder geschützt und ihre Führung kann eine Genehmigung erfordern, diese ist jedoch für eine Anstellung nicht notwendig. Wir lassen Ihren Abschluss bewerten und beraten Sie.",
          en: "Engineering is not a regulated profession for working: your degree is assessed through the anabin database and, if needed, a ZAB statement of comparability. The title Ingenieur is protected by the laws of the Länder and its use may require authorisation, but this is not required to be employed. We have your degree assessed and guide you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Diplômé de l'université, vous accédez à la Carte bleue européenne : le seuil de salaire 2025 est d'environ 48 300 € brut par an, abaissé à environ 43 760 € pour les métiers en tension comme l'ingénierie (source : cadres juridiques d'immigration, 2025). Le visa de travailleur qualifié pour diplôme académique et la Chancenkarte (carte d'opportunité) sont d'autres voies. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Als Hochschulabsolvent haben Sie Zugang zur Blauen Karte EU: Die Gehaltsschwelle 2025 liegt bei rund 48.300 € brutto pro Jahr, gesenkt auf etwa 43.760 € für Engpassberufe wie das Ingenieurwesen (Quelle: einwanderungsrechtliche Rahmenregelungen, 2025). Das Visum für Fachkräfte mit akademischem Abschluss und die Chancenkarte sind weitere Wege. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "As a university graduate, you qualify for the EU Blue Card: the 2025 salary threshold is around 48,300 € gross per year, lowered to about 43,760 € for shortage occupations such as engineering (source: immigration legal frameworks, 2025). The qualified worker visa for an academic degree and the Chancenkarte (opportunity card) are other routes. We check your eligibility and build the application with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons évaluer votre diplôme, valorisons votre profil auprès des employeurs allemands, préparons le dossier de Carte bleue ou de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihren Abschluss bewerten, präsentieren Ihr Profil deutschen Arbeitgebern, bereiten den Antrag für die Blaue Karte oder das Visum vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, have your degree assessed, present your profile to German employers, prepare the Blue Card or visa application and support you through to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Mon diplôme étranger est-il reconnu ?",
          de: "Wird mein ausländischer Abschluss anerkannt?",
          en: "Is my foreign degree recognised?",
        },
        a: {
          fr: "Votre diplôme est évalué via la base anabin et, si besoin, une attestation de comparabilité de la ZAB, ce dont nous nous chargeons avec vous.",
          de: "Ihr Abschluss wird über die anabin-Datenbank und bei Bedarf durch eine Zeugnisbewertung der ZAB geprüft, worum wir uns gemeinsam mit Ihnen kümmern.",
          en: "Your degree is assessed through the anabin database and, if needed, a ZAB statement of comparability, which we handle with you.",
        },
      },
      {
        q: {
          fr: "L'anglais suffit-il ?",
          de: "Reicht Englisch aus?",
          en: "Is English enough?",
        },
        a: {
          fr: "L'anglais suffit dans certaines équipes de recherche et développement, mais c'est le B2 en allemand qui ouvre réellement le marché.",
          de: "Englisch reicht in manchen Teams in Forschung und Entwicklung, doch erst B2 in Deutsch öffnet den Markt wirklich.",
          en: "English is enough in some research and development teams, but it is B2 in German that truly opens the market.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "ingenieur-electrotechnique": {
    slug: "ingenieur-electrotechnique",
    image: "ingenieur-electrotechnique",
    title: {
      fr: "Ingénieur en électrotechnique",
      de: "Elektroingenieur",
      en: "Electrical engineer",
    },
    intro: {
      fr: "Portée par la transition énergétique, l'électrotechnique offre une demande soutenue que nous vous aidons à saisir en Allemagne.",
      de: "Getragen von der Energiewende bietet die Elektrotechnik eine anhaltende Nachfrage, die wir Ihnen in Deutschland zu nutzen helfen.",
      en: "Driven by the energy transition, electrical engineering offers sustained demand that we help you seize in Germany.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'ingénieur en électrotechnique conçoit et développe des systèmes électriques et électroniques, l'énergie, les réseaux et l'automatisation.",
          de: "Der Elektroingenieur entwirft und entwickelt elektrische und elektronische Systeme, Energie, Netze und Automatisierung.",
          en: "The electrical engineer designs and develops electrical and electronic systems, energy, grids and automation.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 4 500 € par mois, et le salaire médian, tous niveaux confondus, d'environ 6 488 € par mois, avec une fourchette d'environ 52 762 à 72 349 € par an (25e au 75e centile) ; l'Ouest est à environ 6 609 € et l'Est à environ 5 341 € (source : Entgeltatlas via meingehalt.net, StepStone, 2026).",
          de: "Das Einstiegsgehalt liegt bei rund 4.500 € pro Monat, das mittlere Gehalt über alle Stufen hinweg bei rund 6.488 € pro Monat, mit einer Spanne von etwa 52.762 bis 72.349 € pro Jahr (25. bis 75. Perzentil); der Westen liegt bei rund 6.609 €, der Osten bei rund 5.341 € (Quelle: Entgeltatlas via meingehalt.net, StepStone, 2026).",
          en: "The starting salary is around 4,500 € per month, and the median salary, across all levels, around 6,488 € per month, with a range of about 52,762 to 72,349 € per year (25th to 75th percentile); the West is around 6,609 € and the East around 5,341 € (source: Entgeltatlas via meingehalt.net, StepStone, 2026).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Siemens, Siemens Energy, Bosch, ABB, Infineon, Phoenix Contact et SMA Solar recrutent, ainsi que les gestionnaires de réseaux (E.ON, EnBW, RWE, TenneT) et l'électronique automobile.",
          de: "Siemens, Siemens Energy, Bosch, ABB, Infineon, Phoenix Contact und SMA Solar stellen ein, ebenso die Netzbetreiber (E.ON, EnBW, RWE, TenneT) und die Automobilelektronik.",
          en: "Siemens, Siemens Energy, Bosch, ABB, Infineon, Phoenix Contact and SMA Solar are hiring, as are the grid operators (E.ON, EnBW, RWE, TenneT) and automotive electronics.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts, portés par la transition énergétique et l'extension des réseaux.",
          de: "Die Perspektiven sind sehr stark, getragen von der Energiewende und dem Netzausbau.",
          en: "Prospects are very strong, driven by the energy transition and grid expansion.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers chef de projet, responsable technique, expert énergie ou expert automatisation.",
          de: "Sie können sich zum Projektleiter, technischen Leiter, Energieexperten oder Automatisierungsexperten entwickeln.",
          en: "You can progress to project manager, technical lead, energy expert or automation expert.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Le B2 est le niveau attendu par les employeurs et ouvre le marché de l'ingénierie ; l'anglais est courant dans les semi-conducteurs, la recherche et développement et les groupes internationaux. C'est le B2 que nous visons avec vous.",
          de: "B2 ist das von den Arbeitgebern erwartete Niveau und öffnet den Ingenieurmarkt; Englisch ist bei Halbleitern, in Forschung und Entwicklung sowie in internationalen Konzernen verbreitet. Auf B2 arbeiten wir mit Ihnen hin.",
          en: "B2 is the level employers expect and it opens the engineering market; English is common in semiconductors, research and development and international groups. B2 is what we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "L'ingénierie n'est pas une profession réglementée pour travailler : votre diplôme est évalué via la base anabin et, si besoin, une attestation de comparabilité de la ZAB. Le titre d'Ingenieur est protégé par les lois des Länder et son usage peut nécessiter une autorisation, mais celle-ci n'est pas requise pour être employé. Nous faisons évaluer votre diplôme et vous orientons.",
          de: "Ingenieurwesen ist für die Ausübung kein reglementierter Beruf: Ihr Abschluss wird über die anabin-Datenbank und bei Bedarf durch eine Zeugnisbewertung der ZAB geprüft. Die Bezeichnung Ingenieur ist durch die Gesetze der Länder geschützt und ihre Führung kann eine Genehmigung erfordern, diese ist jedoch für eine Anstellung nicht notwendig. Wir lassen Ihren Abschluss bewerten und beraten Sie.",
          en: "Engineering is not a regulated profession for working: your degree is assessed through the anabin database and, if needed, a ZAB statement of comparability. The title Ingenieur is protected by the laws of the Länder and its use may require authorisation, but this is not required to be employed. We have your degree assessed and guide you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Diplômé de l'université, vous accédez à la Carte bleue européenne : le seuil de salaire 2025 est d'environ 48 300 € brut par an, abaissé à environ 43 760 € pour les métiers en tension comme l'ingénierie (source : cadres juridiques d'immigration, 2025). Le visa de travailleur qualifié pour diplôme académique et la Chancenkarte (carte d'opportunité) sont d'autres voies. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Als Hochschulabsolvent haben Sie Zugang zur Blauen Karte EU: Die Gehaltsschwelle 2025 liegt bei rund 48.300 € brutto pro Jahr, gesenkt auf etwa 43.760 € für Engpassberufe wie das Ingenieurwesen (Quelle: einwanderungsrechtliche Rahmenregelungen, 2025). Das Visum für Fachkräfte mit akademischem Abschluss und die Chancenkarte sind weitere Wege. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "As a university graduate, you qualify for the EU Blue Card: the 2025 salary threshold is around 48,300 € gross per year, lowered to about 43,760 € for shortage occupations such as engineering (source: immigration legal frameworks, 2025). The qualified worker visa for an academic degree and the Chancenkarte (opportunity card) are other routes. We check your eligibility and build the application with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons évaluer votre diplôme, valorisons votre profil auprès des employeurs allemands, préparons le dossier de Carte bleue ou de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihren Abschluss bewerten, präsentieren Ihr Profil deutschen Arbeitgebern, bereiten den Antrag für die Blaue Karte oder das Visum vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, have your degree assessed, present your profile to German employers, prepare the Blue Card or visa application and support you through to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quels sont les secteurs porteurs ?",
          de: "Welche Branchen sind zukunftsträchtig?",
          en: "Which sectors are growing?",
        },
        a: {
          fr: "L'énergie, les réseaux et les semi-conducteurs concentrent l'essentiel de la demande en électrotechnique.",
          de: "Energie, Netze und Halbleiter bündeln den Großteil der Nachfrage in der Elektrotechnik.",
          en: "Energy, grids and semiconductors concentrate most of the demand in electrical engineering.",
        },
      },
      {
        q: {
          fr: "Mon diplôme est-il reconnu ?",
          de: "Wird mein Abschluss anerkannt?",
          en: "Is my degree recognised?",
        },
        a: {
          fr: "Votre diplôme est évalué via la base anabin et, si besoin, une attestation de comparabilité de la ZAB, ce dont nous nous chargeons avec vous.",
          de: "Ihr Abschluss wird über die anabin-Datenbank und bei Bedarf durch eine Zeugnisbewertung der ZAB geprüft, worum wir uns gemeinsam mit Ihnen kümmern.",
          en: "Your degree is assessed through the anabin database and, if needed, a ZAB statement of comparability, which we handle with you.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "ingenieur-genie-civil": {
    slug: "ingenieur-genie-civil",
    image: "ingenieur-genie-civil",
    title: {
      fr: "Ingénieur en génie civil",
      de: "Bauingenieur",
      en: "Civil engineer",
    },
    intro: {
      fr: "Le génie civil affiche la plus forte tension de toute l'ingénierie allemande, et nous vous aidons à y trouver votre place.",
      de: "Das Bauingenieurwesen weist den größten Fachkräftemangel im gesamten Ingenieurwesen Deutschlands auf, und wir helfen Ihnen, dort Ihren Platz zu finden.",
      en: "Civil engineering shows the tightest labour shortage of all German engineering, and we help you find your place in it.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'ingénieur en génie civil conçoit et dimensionne des ouvrages (bâtiments, ponts, infrastructures), planifie et suit les chantiers.",
          de: "Der Bauingenieur entwirft und bemisst Bauwerke (Gebäude, Brücken, Infrastruktur), plant Baustellen und begleitet sie.",
          en: "The civil engineer designs and dimensions structures (buildings, bridges, infrastructure), plans and supervises construction sites.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 4 180 € par mois (fourchette d'environ 3 480 à 4 380 €, soit environ 47 000 à 57 000 € par an), et le salaire médian, tous niveaux confondus, d'environ 6 264 € par mois (source : Entgeltatlas via ingenieur.de, gehaltsatlas.com, 2024 et 2025).",
          de: "Das Einstiegsgehalt liegt bei rund 4.180 € pro Monat (Spanne von etwa 3.480 bis 4.380 €, also rund 47.000 bis 57.000 € pro Jahr), das mittlere Gehalt über alle Stufen hinweg bei rund 6.264 € pro Monat (Quelle: Entgeltatlas via ingenieur.de, gehaltsatlas.com, 2024 und 2025).",
          en: "The starting salary is around 4,180 € per month (a range of about 3,480 to 4,380 €, or roughly 47,000 to 57,000 € per year), and the median salary, across all levels, around 6,264 € per month (source: Entgeltatlas via ingenieur.de, gehaltsatlas.com, 2024 and 2025).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Hochtief, Strabag, Max Bögl, Ed. Züblin, Goldbeck et Bilfinger recrutent, ainsi que les bureaux d'études (Arcadis, WSP, Ramboll), Deutsche Bahn, Autobahn GmbH et les administrations du bâtiment.",
          de: "Hochtief, Strabag, Max Bögl, Ed. Züblin, Goldbeck und Bilfinger stellen ein, ebenso die Ingenieurbüros (Arcadis, WSP, Ramboll), die Deutsche Bahn, die Autobahn GmbH und die Bauverwaltungen.",
          en: "Hochtief, Strabag, Max Bögl, Ed. Züblin, Goldbeck and Bilfinger are hiring, as are the engineering consultancies (Arcadis, WSP, Ramboll), Deutsche Bahn, Autobahn GmbH and the building authorities.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Le génie civil affiche le plus fort taux de tension de toute l'ingénierie, avec environ 306 postes vacants pour 100 chômeurs (source : VDI, IW Ingenieurmonitor, 2025).",
          de: "Das Bauingenieurwesen weist die höchste Engpassquote im gesamten Ingenieurwesen auf, mit rund 306 offenen Stellen je 100 Arbeitslosen (Quelle: VDI, IW Ingenieurmonitor, 2025).",
          en: "Civil engineering shows the highest shortage ratio of all engineering, with about 306 vacancies per 100 unemployed (source: VDI, IW Ingenieurmonitor, 2025).",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers chef de projet, ingénieur structure, chef de chantier ou direction de travaux.",
          de: "Sie können sich zum Projektleiter, Tragwerksplaner, Bauleiter oder in die Bauoberleitung entwickeln.",
          en: "You can progress to project manager, structural engineer, site manager or construction director.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Le génie civil s'appuie sur les normes allemandes (DIN, Eurocodes) et le contact avec les autorités, si bien que le B2 est de fait indispensable ; l'anglais reste l'exception, surtout en bureau d'études international. C'est le B2 que nous visons avec vous.",
          de: "Das Bauingenieurwesen stützt sich auf deutsche Normen (DIN, Eurocodes) und den Kontakt mit den Behörden, sodass B2 faktisch unerlässlich ist; Englisch bleibt die Ausnahme, vor allem in internationalen Ingenieurbüros. Auf B2 arbeiten wir mit Ihnen hin.",
          en: "Civil engineering relies on German standards (DIN, Eurocodes) and contact with the authorities, so B2 is effectively indispensable; English remains the exception, mainly in international engineering consultancies. B2 is what we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "L'ingénierie n'est pas une profession réglementée pour travailler : votre diplôme est évalué via la base anabin et, si besoin, une attestation de comparabilité de la ZAB. Le titre d'Ingenieur est protégé par les lois des Länder et son usage peut nécessiter une autorisation, mais celle-ci n'est pas requise pour être employé. Nous faisons évaluer votre diplôme et vous orientons.",
          de: "Ingenieurwesen ist für die Ausübung kein reglementierter Beruf: Ihr Abschluss wird über die anabin-Datenbank und bei Bedarf durch eine Zeugnisbewertung der ZAB geprüft. Die Bezeichnung Ingenieur ist durch die Gesetze der Länder geschützt und ihre Führung kann eine Genehmigung erfordern, diese ist jedoch für eine Anstellung nicht notwendig. Wir lassen Ihren Abschluss bewerten und beraten Sie.",
          en: "Engineering is not a regulated profession for working: your degree is assessed through the anabin database and, if needed, a ZAB statement of comparability. The title Ingenieur is protected by the laws of the Länder and its use may require authorisation, but this is not required to be employed. We have your degree assessed and guide you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Diplômé de l'université, vous accédez à la Carte bleue européenne : le seuil de salaire 2025 est d'environ 48 300 € brut par an, abaissé à environ 43 760 € pour les métiers en tension comme l'ingénierie (source : cadres juridiques d'immigration, 2025). Le visa de travailleur qualifié pour diplôme académique et la Chancenkarte (carte d'opportunité) sont d'autres voies. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Als Hochschulabsolvent haben Sie Zugang zur Blauen Karte EU: Die Gehaltsschwelle 2025 liegt bei rund 48.300 € brutto pro Jahr, gesenkt auf etwa 43.760 € für Engpassberufe wie das Ingenieurwesen (Quelle: einwanderungsrechtliche Rahmenregelungen, 2025). Das Visum für Fachkräfte mit akademischem Abschluss und die Chancenkarte sind weitere Wege. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "As a university graduate, you qualify for the EU Blue Card: the 2025 salary threshold is around 48,300 € gross per year, lowered to about 43,760 € for shortage occupations such as engineering (source: immigration legal frameworks, 2025). The qualified worker visa for an academic degree and the Chancenkarte (opportunity card) are other routes. We check your eligibility and build the application with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons évaluer votre diplôme, valorisons votre profil auprès des employeurs allemands, préparons le dossier de Carte bleue ou de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihren Abschluss bewerten, präsentieren Ihr Profil deutschen Arbeitgebern, bereiten den Antrag für die Blaue Karte oder das Visum vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, have your degree assessed, present your profile to German employers, prepare the Blue Card or visa application and support you through to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "L'allemand est-il indispensable ?",
          de: "Ist Deutsch unerlässlich?",
          en: "Is German indispensable?",
        },
        a: {
          fr: "Oui : les normes et les échanges avec les autorités se font en allemand, ce qui rend le B2 de fait nécessaire dans le génie civil.",
          de: "Ja: Normen und der Austausch mit den Behörden erfolgen auf Deutsch, was B2 im Bauingenieurwesen faktisch notwendig macht.",
          en: "Yes: standards and dealings with the authorities are in German, which makes B2 effectively necessary in civil engineering.",
        },
      },
      {
        q: {
          fr: "Quels secteurs recrutent ?",
          de: "Welche Branchen stellen ein?",
          en: "Which sectors are hiring?",
        },
        a: {
          fr: "Le bâtiment, les infrastructures et le rail concentrent les recrutements en génie civil.",
          de: "Hochbau, Infrastruktur und Bahn bündeln die Einstellungen im Bauingenieurwesen.",
          en: "Building, infrastructure and rail concentrate the hiring in civil engineering.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "ingenieur-automobile": {
    slug: "ingenieur-automobile",
    image: "ingenieur-automobile",
    title: {
      fr: "Ingénieur automobile",
      de: "Fahrzeugingenieur",
      en: "Automotive engineer",
    },
    intro: {
      fr: "L'industrie automobile allemande se transforme vers l'électrique et le logiciel, et nous vous aidons à y bâtir votre carrière.",
      de: "Die deutsche Automobilindustrie wandelt sich hin zu Elektro und Software, und wir helfen Ihnen, dort Ihre Karriere aufzubauen.",
      en: "The German automotive industry is shifting towards electric and software, and we help you build your career there.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'ingénieur automobile conçoit et développe des véhicules, des motorisations et des systèmes, de l'étude aux essais.",
          de: "Der Fahrzeugingenieur entwirft und entwickelt Fahrzeuge, Antriebe und Systeme, von der Auslegung bis zur Erprobung.",
          en: "The automotive engineer designs and develops vehicles, powertrains and systems, from study through to testing.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 4 618 à 4 770 € par mois (environ 55 000 à 57 000 € par an), et le salaire médian d'environ 5 456 € par mois selon les portails, avec une fourchette d'environ 52 798 à 69 243 € par an (source : jobvector, meingehalt.net, 2025 et 2026).",
          de: "Das Einstiegsgehalt liegt bei rund 4.618 bis 4.770 € pro Monat (etwa 55.000 bis 57.000 € pro Jahr), das mittlere Gehalt bei rund 5.456 € pro Monat laut den Portalen, mit einer Spanne von etwa 52.798 bis 69.243 € pro Jahr (Quelle: jobvector, meingehalt.net, 2025 und 2026).",
          en: "The starting salary is around 4,618 to 4,770 € per month (about 55,000 to 57,000 € per year), and the median salary around 5,456 € per month according to the job portals, with a range of about 52,798 to 69,243 € per year (source: jobvector, meingehalt.net, 2025 and 2026).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Volkswagen, Mercedes-Benz, BMW, Audi, Porsche, Bosch, Continental, ZF, Schaeffler, Mahle et Brose recrutent, ainsi que les bureaux d'ingénierie (Bertrandt, EDAG, IAV, FEV).",
          de: "Volkswagen, Mercedes-Benz, BMW, Audi, Porsche, Bosch, Continental, ZF, Schaeffler, Mahle und Brose stellen ein, ebenso die Ingenieurdienstleister (Bertrandt, EDAG, IAV, FEV).",
          en: "Volkswagen, Mercedes-Benz, BMW, Audi, Porsche, Bosch, Continental, ZF, Schaeffler, Mahle and Brose are hiring, as are the engineering service providers (Bertrandt, EDAG, IAV, FEV).",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande structurelle reste forte mais le secteur est en transformation (électrique, restructurations) : forte demande, plus volatile.",
          de: "Die strukturelle Nachfrage bleibt stark, doch die Branche befindet sich im Wandel (Elektro, Restrukturierungen): hohe Nachfrage, aber volatiler.",
          en: "Structural demand remains strong but the sector is in transformation (electric, restructurings): high demand, more volatile.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers chef de projet, expert (motorisation, châssis, électronique) ou management en recherche et développement.",
          de: "Sie können sich zum Projektleiter, Experten (Antrieb, Fahrwerk, Elektronik) oder ins Management in Forschung und Entwicklung entwickeln.",
          en: "You can progress to project manager, expert (powertrain, chassis, electronics) or management in research and development.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Le B2 est le niveau attendu par les employeurs et ouvre le marché de l'ingénierie ; l'automobile et la recherche et développement des grands groupes comptent parmi les environnements les plus anglophones. C'est le B2 que nous visons avec vous.",
          de: "B2 ist das von den Arbeitgebern erwartete Niveau und öffnet den Ingenieurmarkt; die Automobilbranche und die Forschung und Entwicklung der großen Konzerne gehören zu den englischsprachigsten Umfeldern. Auf B2 arbeiten wir mit Ihnen hin.",
          en: "B2 is the level employers expect and it opens the engineering market; automotive and the research and development of large groups are among the most English-speaking environments. B2 is what we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "L'ingénierie n'est pas une profession réglementée pour travailler : votre diplôme est évalué via la base anabin et, si besoin, une attestation de comparabilité de la ZAB. Le titre d'Ingenieur est protégé par les lois des Länder et son usage peut nécessiter une autorisation, mais celle-ci n'est pas requise pour être employé. Nous faisons évaluer votre diplôme et vous orientons.",
          de: "Ingenieurwesen ist für die Ausübung kein reglementierter Beruf: Ihr Abschluss wird über die anabin-Datenbank und bei Bedarf durch eine Zeugnisbewertung der ZAB geprüft. Die Bezeichnung Ingenieur ist durch die Gesetze der Länder geschützt und ihre Führung kann eine Genehmigung erfordern, diese ist jedoch für eine Anstellung nicht notwendig. Wir lassen Ihren Abschluss bewerten und beraten Sie.",
          en: "Engineering is not a regulated profession for working: your degree is assessed through the anabin database and, if needed, a ZAB statement of comparability. The title Ingenieur is protected by the laws of the Länder and its use may require authorisation, but this is not required to be employed. We have your degree assessed and guide you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Diplômé de l'université, vous accédez à la Carte bleue européenne : le seuil de salaire 2025 est d'environ 48 300 € brut par an, abaissé à environ 43 760 € pour les métiers en tension comme l'ingénierie (source : cadres juridiques d'immigration, 2025). Le visa de travailleur qualifié pour diplôme académique et la Chancenkarte (carte d'opportunité) sont d'autres voies. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Als Hochschulabsolvent haben Sie Zugang zur Blauen Karte EU: Die Gehaltsschwelle 2025 liegt bei rund 48.300 € brutto pro Jahr, gesenkt auf etwa 43.760 € für Engpassberufe wie das Ingenieurwesen (Quelle: einwanderungsrechtliche Rahmenregelungen, 2025). Das Visum für Fachkräfte mit akademischem Abschluss und die Chancenkarte sind weitere Wege. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "As a university graduate, you qualify for the EU Blue Card: the 2025 salary threshold is around 48,300 € gross per year, lowered to about 43,760 € for shortage occupations such as engineering (source: immigration legal frameworks, 2025). The qualified worker visa for an academic degree and the Chancenkarte (opportunity card) are other routes. We check your eligibility and build the application with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons évaluer votre diplôme, valorisons votre profil auprès des employeurs allemands, préparons le dossier de Carte bleue ou de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihren Abschluss bewerten, präsentieren Ihr Profil deutschen Arbeitgebern, bereiten den Antrag für die Blaue Karte oder das Visum vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, have your degree assessed, present your profile to German employers, prepare the Blue Card or visa application and support you through to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le secteur automobile recrute-t-il malgré la transition ?",
          de: "Stellt die Automobilbranche trotz des Wandels ein?",
          en: "Is the automotive sector hiring despite the transition?",
        },
        a: {
          fr: "Oui, mais il évolue vers l'électrique et le logiciel, où se concentrent désormais de nombreux besoins.",
          de: "Ja, aber sie entwickelt sich hin zu Elektro und Software, wo sich nun viele Bedarfe bündeln.",
          en: "Yes, but it is shifting towards electric and software, where much of the demand now concentrates.",
        },
      },
      {
        q: {
          fr: "L'anglais est-il accepté ?",
          de: "Wird Englisch akzeptiert?",
          en: "Is English accepted?",
        },
        a: {
          fr: "Souvent en recherche et développement, mais le B2 en allemand reste ce qui ouvre le marché.",
          de: "Häufig in Forschung und Entwicklung, doch B2 in Deutsch bleibt das, was den Markt öffnet.",
          en: "Often in research and development, but B2 in German remains what opens the market.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "ingenieur-mecatronique": {
    slug: "ingenieur-mecatronique",
    image: "ingenieur-mecatronique",
    title: {
      fr: "Ingénieur mécatronique et automatisation",
      de: "Mechatronik- und Automatisierungsingenieur",
      en: "Mechatronics and automation engineer",
    },
    intro: {
      fr: "Au coeur de l'Industrie 4.0 et de la robotique, la mécatronique offre des perspectives que nous vous aidons à concrétiser en Allemagne.",
      de: "Im Zentrum von Industrie 4.0 und Robotik bietet die Mechatronik Perspektiven, die wir Ihnen in Deutschland zu verwirklichen helfen.",
      en: "At the heart of Industry 4.0 and robotics, mechatronics offers prospects that we help you realise in Germany.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'ingénieur mécatronique conçoit des systèmes automatisés et robotisés mêlant mécanique, électronique et logiciel de commande.",
          de: "Der Mechatronikingenieur entwirft automatisierte und robotisierte Systeme, die Mechanik, Elektronik und Steuerungssoftware verbinden.",
          en: "The mechatronics engineer designs automated and robotic systems combining mechanics, electronics and control software.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 4 792 à 4 848 € par mois (environ 57 000 à 58 000 € par an), le salaire médian d'environ 5 377 € par mois en mécatronique selon les portails et d'environ 6 356 € par mois en automatisation selon l'Entgeltatlas, un profil expérimenté atteignant environ 67 000 € par an (source : Entgeltatlas via ingenieur.de, jobvector, meingehalt.net, 2024 à 2026).",
          de: "Das Einstiegsgehalt liegt bei rund 4.792 bis 4.848 € pro Monat (etwa 57.000 bis 58.000 € pro Jahr), das mittlere Gehalt bei rund 5.377 € pro Monat in der Mechatronik laut den Portalen und bei rund 6.356 € pro Monat in der Automatisierung laut Entgeltatlas, wobei ein erfahrenes Profil rund 67.000 € pro Jahr erreicht (Quelle: Entgeltatlas via ingenieur.de, jobvector, meingehalt.net, 2024 bis 2026).",
          en: "The starting salary is around 4,792 to 4,848 € per month (about 57,000 to 58,000 € per year), the median salary around 5,377 € per month in mechatronics according to the job portals and around 6,356 € per month in automation according to the Entgeltatlas, an experienced profile reaching about 67,000 € per year (source: Entgeltatlas via ingenieur.de, jobvector, meingehalt.net, 2024 to 2026).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Siemens (Digital Industries), Bosch Rexroth, Festo, Beckhoff, KUKA, SEW-Eurodrive et Pilz recrutent, ainsi que les constructeurs de machines et les intégrateurs Industrie 4.0.",
          de: "Siemens (Digital Industries), Bosch Rexroth, Festo, Beckhoff, KUKA, SEW-Eurodrive und Pilz stellen ein, ebenso die Maschinenbauer und die Industrie-4.0-Integratoren.",
          en: "Siemens (Digital Industries), Bosch Rexroth, Festo, Beckhoff, KUKA, SEW-Eurodrive and Pilz are hiring, as are machine builders and Industry 4.0 integrators.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts, au coeur de l'Industrie 4.0 et de la robotique.",
          de: "Die Perspektiven sind stark, im Zentrum von Industrie 4.0 und Robotik.",
          en: "Prospects are strong, at the heart of Industry 4.0 and robotics.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers chef de projet automatisation, expert robotique ou responsable ingénierie.",
          de: "Sie können sich zum Projektleiter Automatisierung, Robotikexperten oder Leiter Engineering entwickeln.",
          en: "You can progress to automation project manager, robotics expert or engineering lead.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Le B2 est le niveau attendu par les employeurs et ouvre le marché de l'ingénierie ; l'anglais est réaliste en recherche et développement, en robotique et chez les grands éditeurs internationaux. C'est le B2 que nous visons avec vous.",
          de: "B2 ist das von den Arbeitgebern erwartete Niveau und öffnet den Ingenieurmarkt; Englisch ist in Forschung und Entwicklung, in der Robotik und bei den großen internationalen Herstellern realistisch. Auf B2 arbeiten wir mit Ihnen hin.",
          en: "B2 is the level employers expect and it opens the engineering market; English is realistic in research and development, in robotics and at the large international vendors. B2 is what we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "L'ingénierie n'est pas une profession réglementée pour travailler : votre diplôme est évalué via la base anabin et, si besoin, une attestation de comparabilité de la ZAB. Le titre d'Ingenieur est protégé par les lois des Länder et son usage peut nécessiter une autorisation, mais celle-ci n'est pas requise pour être employé. Nous faisons évaluer votre diplôme et vous orientons.",
          de: "Ingenieurwesen ist für die Ausübung kein reglementierter Beruf: Ihr Abschluss wird über die anabin-Datenbank und bei Bedarf durch eine Zeugnisbewertung der ZAB geprüft. Die Bezeichnung Ingenieur ist durch die Gesetze der Länder geschützt und ihre Führung kann eine Genehmigung erfordern, diese ist jedoch für eine Anstellung nicht notwendig. Wir lassen Ihren Abschluss bewerten und beraten Sie.",
          en: "Engineering is not a regulated profession for working: your degree is assessed through the anabin database and, if needed, a ZAB statement of comparability. The title Ingenieur is protected by the laws of the Länder and its use may require authorisation, but this is not required to be employed. We have your degree assessed and guide you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Diplômé de l'université, vous accédez à la Carte bleue européenne : le seuil de salaire 2025 est d'environ 48 300 € brut par an, abaissé à environ 43 760 € pour les métiers en tension comme l'ingénierie (source : cadres juridiques d'immigration, 2025). Le visa de travailleur qualifié pour diplôme académique et la Chancenkarte (carte d'opportunité) sont d'autres voies. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Als Hochschulabsolvent haben Sie Zugang zur Blauen Karte EU: Die Gehaltsschwelle 2025 liegt bei rund 48.300 € brutto pro Jahr, gesenkt auf etwa 43.760 € für Engpassberufe wie das Ingenieurwesen (Quelle: einwanderungsrechtliche Rahmenregelungen, 2025). Das Visum für Fachkräfte mit akademischem Abschluss und die Chancenkarte sind weitere Wege. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "As a university graduate, you qualify for the EU Blue Card: the 2025 salary threshold is around 48,300 € gross per year, lowered to about 43,760 € for shortage occupations such as engineering (source: immigration legal frameworks, 2025). The qualified worker visa for an academic degree and the Chancenkarte (opportunity card) are other routes. We check your eligibility and build the application with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons évaluer votre diplôme, valorisons votre profil auprès des employeurs allemands, préparons le dossier de Carte bleue ou de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihren Abschluss bewerten, präsentieren Ihr Profil deutschen Arbeitgebern, bereiten den Antrag für die Blaue Karte oder das Visum vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, have your degree assessed, present your profile to German employers, prepare the Blue Card or visa application and support you through to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quelle différence avec l'ingénieur mécanique ou électrique ?",
          de: "Was ist der Unterschied zum Maschinenbau- oder Elektroingenieur?",
          en: "What is the difference from a mechanical or electrical engineer?",
        },
        a: {
          fr: "La mécatronique combine les trois disciplines, mécanique, électronique et logiciel, avec l'automatisation.",
          de: "Die Mechatronik verbindet die drei Disziplinen, Mechanik, Elektronik und Software, mit der Automatisierung.",
          en: "Mechatronics combines the three disciplines, mechanics, electronics and software, with automation.",
        },
      },
      {
        q: {
          fr: "Quels sont les secteurs concernés ?",
          de: "Welche Branchen sind betroffen?",
          en: "Which sectors are concerned?",
        },
        a: {
          fr: "La robotique, la construction de machines et l'Industrie 4.0 concentrent les besoins en mécatronique.",
          de: "Robotik, Maschinenbau und Industrie 4.0 bündeln den Bedarf in der Mechatronik.",
          en: "Robotics, machine building and Industry 4.0 concentrate the demand in mechatronics.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
