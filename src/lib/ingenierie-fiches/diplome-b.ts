import type { IngenierieFiche } from "../ingenierie-fiche-types";
import { SALARY_NOTE } from "../ingenierie-fiche-types";

export const ING_FICHES_DIPLOME_B: Record<string, IngenierieFiche> = {
  "ingenieur-energie": {
    slug: "ingenieur-energie",
    image: "ingenieur-energie",
    title: {
      fr: "Ingénieur énergie et énergies renouvelables",
      de: "Energietechnik-Ingenieur",
      en: "Energy and renewable energy engineer",
    },
    intro: {
      fr: "Votre expertise énergétique porte directement la transition allemande vers un avenir plus durable.",
      de: "Ihre Kompetenz in der Energietechnik trägt die deutsche Energiewende ganz konkret voran.",
      en: "Your energy expertise directly powers Germany's transition toward a more sustainable future.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'ingénieur énergie conçoit et développe des systèmes énergétiques, solaires, éoliens et de réseau. Il pilote la transition énergétique au coeur des projets qui transforment la production et la distribution d'électricité.",
          de: "Der Energietechnik-Ingenieur entwickelt und plant Energiesysteme, Solar-, Wind- und Netzanlagen. Er treibt die Energiewende im Zentrum der Projekte voran, die Stromerzeugung und Stromverteilung verändern.",
          en: "The energy engineer designs and develops energy, solar, wind and grid systems. They drive the energy transition at the heart of projects that transform how electricity is produced and distributed.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée va d'environ 4 329 €/mois (selon les portails) à environ 4 700 €/mois, et le salaire médian, tous niveaux d'expérience confondus, atteint environ 5 155 €/mois selon les portails (environ 63 922 €/an) et environ 5 722 €/mois selon l'Entgeltatlas, une médiane calculée sur tous les niveaux d'expérience (source : gehalt.de, Entgeltatlas, StepStone, 2025 et 2026).",
          de: "Das Einstiegsgehalt reicht von rund 4.329 €/Monat (laut Portalen) bis etwa 4.700 €/Monat, und das mittlere Gehalt über alle Erfahrungsstufen hinweg liegt laut Portalen bei rund 5.155 €/Monat (etwa 63.922 €/Jahr) sowie bei rund 5.722 €/Monat laut Entgeltatlas, ein über alle Erfahrungsstufen berechneter Median (Quelle: gehalt.de, Entgeltatlas, StepStone, 2025 und 2026).",
          en: "Entry salary ranges from about 4,329 €/month (according to job portals) to about 4,700 €/month, and the median salary across all experience levels reaches about 5,155 €/month according to the portals (about 63,922 €/year) and about 5,722 €/month according to the Entgeltatlas, a median calculated across all experience levels (source: gehalt.de, Entgeltatlas, StepStone, 2025 and 2026).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Parmi les employeurs figurent Enercon, Nordex, Vestas Deutschland, Siemens Gamesa, Enerparc, BayWa r.e., EnBW, RWE, E.ON, Amprion, TenneT, 50Hertz, ABO Energy, Juwi, wpd, ainsi que de nombreux Stadtwerke (régies municipales).",
          de: "Zu den Arbeitgebern zählen Enercon, Nordex, Vestas Deutschland, Siemens Gamesa, Enerparc, BayWa r.e., EnBW, RWE, E.ON, Amprion, TenneT, 50Hertz, ABO Energy, Juwi, wpd sowie zahlreiche Stadtwerke.",
          en: "Employers include Enercon, Nordex, Vestas Deutschland, Siemens Gamesa, Enerparc, BayWa r.e., EnBW, RWE, E.ON, Amprion, TenneT, 50Hertz, ABO Energy, Juwi, wpd, as well as many Stadtwerke (municipal utilities).",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "L'énergie figure parmi les plus fortes tensions de l'ingénierie, avec environ 284 postes vacants pour 100 chômeurs en énergie et électrotechnique, portée par la transition énergétique (source : VDI, IW Ingenieurmonitor, 2025). La pénurie d'ingénieurs (Ingenieurmangel) reste aiguë, avec environ 333 postes ouverts pour 100 chômeurs, tous domaines confondus (source : VDI, IW Ingenieurmonitor, 2024).",
          de: "Die Energiebranche gehört zu den Feldern mit dem stärksten Fachkräftemangel, mit rund 284 offenen Stellen je 100 Arbeitslosen in Energie- und Elektrotechnik, getragen von der Energiewende (Quelle: VDI, IW Ingenieurmonitor, 2025). Der Ingenieurmangel bleibt akut, mit rund 333 offenen Stellen je 100 Arbeitslosen über alle Bereiche hinweg (Quelle: VDI, IW Ingenieurmonitor, 2024).",
          en: "Energy is among the tightest fields in engineering, with about 284 vacancies per 100 unemployed people in energy and electrical engineering, driven by the energy transition (source: VDI, IW Ingenieurmonitor, 2025). The engineer shortage (Ingenieurmangel) remains acute, with about 333 open positions per 100 unemployed engineers across all fields (source: VDI, IW Ingenieurmonitor, 2024).",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers chef de projet, expert réseau ou expert renouvelables, puis vers la direction technique.",
          de: "Sie können sich zum Projektleiter, Netz- oder Erneuerbare-Energien-Experten und weiter in die technische Leitung entwickeln.",
          en: "You can progress to project manager, grid or renewables expert, and then into technical management.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Le B2 est le niveau attendu par les employeurs et ouvre le marché de l'ingénierie ; l'anglais suffit dans certaines équipes de recherche et développement et les grands groupes internationaux. C'est le B2 que nous visons avec vous.",
          de: "B2 ist das von den Arbeitgebern erwartete Niveau und öffnet den Ingenieurmarkt; in manchen Forschungs- und Entwicklungsteams und in großen internationalen Konzernen genügt Englisch. Gemeinsam mit Ihnen streben wir das B2 an.",
          en: "B2 is the level employers expect and it opens the engineering market; English is enough in some research and development teams and large international groups. B2 is what we aim for with you.",
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
          de: "Ingenieurwesen ist kein für die Ausübung reglementierter Beruf: Ihr Abschluss wird über die Datenbank anabin und, falls nötig, über eine Zeugnisbewertung der ZAB geprüft. Der Titel Ingenieur ist durch die Gesetze der Länder geschützt und seine Führung kann eine Genehmigung erfordern, die für eine Anstellung jedoch nicht nötig ist. Wir lassen Ihren Abschluss bewerten und beraten Sie.",
          en: "Engineering is not a regulated profession in order to work: your degree is assessed via the anabin database and, if needed, a statement of comparability from the ZAB. The title of Ingenieur is protected by the laws of the Länder and using it may require authorisation, but this is not required to be employed. We have your degree assessed and guide you through it.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Diplômé de l'université, vous accédez à la Carte bleue européenne : le seuil de salaire 2025 est d'environ 48 300 € brut par an, abaissé à environ 43 760 € pour les métiers en tension comme l'ingénierie (source : cadres juridiques d'immigration, 2025). Le visa de travailleur qualifié pour diplôme académique et la Chancenkarte (carte d'opportunité) sont d'autres voies. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Als Hochschulabsolvent haben Sie Zugang zur Blauen Karte EU: Die Gehaltsschwelle 2025 liegt bei rund 48.300 € brutto pro Jahr, gesenkt auf rund 43.760 € für Mangelberufe wie das Ingenieurwesen (Quelle: aufenthaltsrechtliche Rahmenbedingungen, 2025). Das Visum für Fachkräfte mit akademischem Abschluss und die Chancenkarte sind weitere Wege. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "As a university graduate, you have access to the EU Blue Card: the 2025 salary threshold is about 48,300 € gross per year, lowered to about 43,760 € for shortage occupations such as engineering (source: immigration legal frameworks, 2025). The skilled worker visa for an academic degree and the Chancenkarte (opportunity card) are other routes. We check your eligibility and prepare the file with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihren Abschluss bewerten, präsentieren Ihr Profil vorteilhaft bei deutschen Arbeitgebern, bereiten den Antrag für die Blaue Karte oder das Visum vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, have your degree assessed, present your profile favourably to German employers, prepare the Blue Card or visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quels secteurs recrutent le plus dans l'énergie ?",
          de: "Welche Bereiche stellen in der Energiebranche am meisten ein?",
          en: "Which sectors hire the most in energy?",
        },
        a: {
          fr: "L'éolien, le solaire et les réseaux électriques sont les plus porteurs, tirés par la transition énergétique.",
          de: "Windkraft, Solar und Stromnetze sind am tragfähigsten, getragen von der Energiewende.",
          en: "Wind, solar and electricity grids are the most promising, driven by the energy transition.",
        },
      },
      {
        q: {
          fr: "L'anglais suffit-il pour commencer ?",
          de: "Reicht Englisch für den Anfang?",
          en: "Is English enough to start?",
        },
        a: {
          fr: "L'anglais suffit souvent en recherche et développement, mais le B2 en allemand ouvre l'ensemble du marché de l'ingénierie.",
          de: "In Forschung und Entwicklung genügt oft Englisch, aber ein B2 in Deutsch öffnet den gesamten Ingenieurmarkt.",
          en: "English is often enough in research and development, but a B2 in German opens up the entire engineering market.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "ingenieur-procedes": {
    slug: "ingenieur-procedes",
    image: "ingenieur-procedes",
    title: {
      fr: "Ingénieur procédés et chimie",
      de: "Verfahrenstechnik- und Chemieingenieur",
      en: "Process and chemical engineer",
    },
    intro: {
      fr: "Votre maîtrise des procédés industriels trouve en Allemagne un terrain d'application à la hauteur de vos compétences.",
      de: "Ihre Beherrschung industrieller Prozesse findet in Deutschland ein Anwendungsfeld, das Ihren Fähigkeiten gerecht wird.",
      en: "Your command of industrial processes finds in Germany a field of application worthy of your skills.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'ingénieur procédés conçoit et optimise des procédés industriels de transformation dans la chimie, la pharmacie et l'agroalimentaire. Il garantit des lignes de production efficaces, sûres et conformes.",
          de: "Der Verfahrensingenieur entwickelt und optimiert industrielle Umwandlungsprozesse in Chemie, Pharma und Lebensmittelindustrie. Er sorgt für effiziente, sichere und regelkonforme Produktionslinien.",
          en: "The process engineer designs and optimises industrial transformation processes in chemicals, pharmaceuticals and food. They ensure efficient, safe and compliant production lines.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 4 000 €/mois (grille chimie IG BCE, environ 48 000 €/an), et le salaire médian, tous niveaux d'expérience confondus, atteint environ 6 087 €/mois selon les portails (environ 75 483 €/an) et environ 6 846 €/mois selon l'Entgeltatlas, une médiane calculée sur tous les niveaux d'expérience (source : gehalt.de, Entgeltatlas, GDCh, 2025).",
          de: "Das Einstiegsgehalt liegt bei rund 4.000 €/Monat (Chemie-Tarif IG BCE, etwa 48.000 €/Jahr), und das mittlere Gehalt über alle Erfahrungsstufen hinweg erreicht laut Portalen rund 6.087 €/Monat (etwa 75.483 €/Jahr) sowie rund 6.846 €/Monat laut Entgeltatlas, ein über alle Erfahrungsstufen berechneter Median (Quelle: gehalt.de, Entgeltatlas, GDCh, 2025).",
          en: "Entry salary is about 4,000 €/month (IG BCE chemical pay scale, about 48,000 €/year), and the median salary across all experience levels reaches about 6,087 €/month according to the portals (about 75,483 €/year) and about 6,846 €/month according to the Entgeltatlas, a median calculated across all experience levels (source: gehalt.de, Entgeltatlas, GDCh, 2025).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Parmi les employeurs figurent BASF, Bayer, Evonik, Covestro, Wacker Chemie, Henkel, Lanxess, Boehringer Ingelheim, Linde, ThyssenKrupp Uhde, Bilfinger, ainsi que les secteurs agroalimentaire, pharmaceutique et du traitement de l'eau.",
          de: "Zu den Arbeitgebern zählen BASF, Bayer, Evonik, Covestro, Wacker Chemie, Henkel, Lanxess, Boehringer Ingelheim, Linde, ThyssenKrupp Uhde, Bilfinger sowie die Lebensmittel-, Pharma- und Wasseraufbereitungsbranche.",
          en: "Employers include BASF, Bayer, Evonik, Covestro, Wacker Chemie, Henkel, Lanxess, Boehringer Ingelheim, Linde, ThyssenKrupp Uhde, Bilfinger, as well as the food, pharmaceutical and water-treatment sectors.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande structurelle est réelle, mais c'est le domaine le plus exposé au ralentissement actuel de la chimie : les postes en ingénierie chimie et plasturgie ont reculé d'environ 25 pour cent sur un an au 3e trimestre 2025, un point que nous présentons honnêtement (source : VDI, IW Ingenieurmonitor, 2025). La pénurie d'ingénieurs (Ingenieurmangel) reste néanmoins aiguë tous domaines confondus, avec environ 333 postes ouverts pour 100 chômeurs (source : VDI, IW Ingenieurmonitor, 2024).",
          de: "Die strukturelle Nachfrage ist real, doch ist dies der am stärksten vom aktuellen Abschwung der Chemie betroffene Bereich: Die Stellen in der Chemie- und Kunststofftechnik gingen im 3. Quartal 2025 um rund 25 Prozent im Jahresvergleich zurück, ein Punkt, den wir ehrlich darlegen (Quelle: VDI, IW Ingenieurmonitor, 2025). Der Ingenieurmangel bleibt über alle Bereiche hinweg dennoch akut, mit rund 333 offenen Stellen je 100 Arbeitslosen (Quelle: VDI, IW Ingenieurmonitor, 2024).",
          en: "Structural demand is real, but this is the field most exposed to the current slowdown in chemicals: positions in chemical and plastics engineering fell by about 25 percent year on year in the third quarter of 2025, a point we present honestly (source: VDI, IW Ingenieurmonitor, 2025). The engineer shortage (Ingenieurmangel) nonetheless remains acute across all fields, with about 333 open positions per 100 unemployed engineers (source: VDI, IW Ingenieurmonitor, 2024).",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers chef de projet, ingénieur d'exploitation, expert procédés, puis vers la direction d'usine.",
          de: "Sie können sich zum Projektleiter, Betriebsingenieur, Prozessexperten und weiter in die Werkleitung entwickeln.",
          en: "You can progress to project manager, operations engineer, process expert, and then into plant management.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Le B2 est le niveau attendu par les employeurs et ouvre le marché de l'ingénierie ; l'anglais suffit dans certaines équipes de recherche et développement et les grands groupes internationaux. C'est le B2 que nous visons avec vous.",
          de: "B2 ist das von den Arbeitgebern erwartete Niveau und öffnet den Ingenieurmarkt; in manchen Forschungs- und Entwicklungsteams und in großen internationalen Konzernen genügt Englisch. Gemeinsam mit Ihnen streben wir das B2 an.",
          en: "B2 is the level employers expect and it opens the engineering market; English is enough in some research and development teams and large international groups. B2 is what we aim for with you.",
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
          de: "Ingenieurwesen ist kein für die Ausübung reglementierter Beruf: Ihr Abschluss wird über die Datenbank anabin und, falls nötig, über eine Zeugnisbewertung der ZAB geprüft. Der Titel Ingenieur ist durch die Gesetze der Länder geschützt und seine Führung kann eine Genehmigung erfordern, die für eine Anstellung jedoch nicht nötig ist. Wir lassen Ihren Abschluss bewerten und beraten Sie.",
          en: "Engineering is not a regulated profession in order to work: your degree is assessed via the anabin database and, if needed, a statement of comparability from the ZAB. The title of Ingenieur is protected by the laws of the Länder and using it may require authorisation, but this is not required to be employed. We have your degree assessed and guide you through it.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Diplômé de l'université, vous accédez à la Carte bleue européenne : le seuil de salaire 2025 est d'environ 48 300 € brut par an, abaissé à environ 43 760 € pour les métiers en tension comme l'ingénierie (source : cadres juridiques d'immigration, 2025). Le visa de travailleur qualifié pour diplôme académique et la Chancenkarte (carte d'opportunité) sont d'autres voies. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Als Hochschulabsolvent haben Sie Zugang zur Blauen Karte EU: Die Gehaltsschwelle 2025 liegt bei rund 48.300 € brutto pro Jahr, gesenkt auf rund 43.760 € für Mangelberufe wie das Ingenieurwesen (Quelle: aufenthaltsrechtliche Rahmenbedingungen, 2025). Das Visum für Fachkräfte mit akademischem Abschluss und die Chancenkarte sind weitere Wege. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "As a university graduate, you have access to the EU Blue Card: the 2025 salary threshold is about 48,300 € gross per year, lowered to about 43,760 € for shortage occupations such as engineering (source: immigration legal frameworks, 2025). The skilled worker visa for an academic degree and the Chancenkarte (opportunity card) are other routes. We check your eligibility and prepare the file with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihren Abschluss bewerten, präsentieren Ihr Profil vorteilhaft bei deutschen Arbeitgebern, bereiten den Antrag für die Blaue Karte oder das Visum vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, have your degree assessed, present your profile favourably to German employers, prepare the Blue Card or visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Les entreprises sous convention (IG BCE) payent-elles mieux ?",
          de: "Zahlen tarifgebundene Unternehmen (IG BCE) besser?",
          en: "Do companies under collective agreement (IG BCE) pay better?",
        },
        a: {
          fr: "Oui, les entreprises de la chimie sous convention IG BCE offrent généralement une rémunération et des avantages plus élevés.",
          de: "Ja, tarifgebundene Chemieunternehmen nach IG BCE bieten in der Regel höhere Vergütung und bessere Leistungen.",
          en: "Yes, chemical companies bound by the IG BCE agreement generally offer higher pay and benefits.",
        },
      },
      {
        q: {
          fr: "Le secteur recrute-t-il malgré le ralentissement ?",
          de: "Stellt die Branche trotz des Abschwungs ein?",
          en: "Is the sector hiring despite the slowdown?",
        },
        a: {
          fr: "La demande de fond reste présente, mais le cycle est bas : nous vous présentons la situation honnêtement.",
          de: "Die Grundnachfrage bleibt bestehen, aber der Zyklus ist niedrig: Wir stellen Ihnen die Lage ehrlich dar.",
          en: "Underlying demand remains, but the cycle is low: we present the situation to you honestly.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "ingenieur-production": {
    slug: "ingenieur-production",
    image: "ingenieur-production",
    title: {
      fr: "Ingénieur production et fabrication",
      de: "Produktions- und Fertigungsingenieur",
      en: "Production and manufacturing engineer",
    },
    intro: {
      fr: "L'industrie allemande recherche des ingénieurs capables de rendre la production plus efficace, et c'est votre métier.",
      de: "Die deutsche Industrie sucht Ingenieure, die die Produktion effizienter machen, und genau das ist Ihr Beruf.",
      en: "German industry is looking for engineers who can make production more efficient, and that is exactly your profession.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'ingénieur production industrialise et optimise la production, les méthodes, la qualité et les flux, souvent selon les principes du lean. Il fait le lien entre le bureau d'études et l'atelier pour fabriquer mieux, plus vite et à moindre coût.",
          de: "Der Produktionsingenieur industrialisiert und optimiert Produktion, Methoden, Qualität und Materialflüsse, oft nach den Prinzipien des Lean. Er verbindet Konstruktion und Werkstatt, um besser, schneller und kostengünstiger zu fertigen.",
          en: "The production engineer industrialises and optimises production, methods, quality and flows, often following lean principles. They bridge engineering design and the shop floor to manufacture better, faster and at lower cost.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 50 000 €/an (environ 4 200 €/mois), le salaire moyen d'environ 58 300 €/an (environ 4 858 €/mois), et il peut atteindre environ 79 200 €/an pour les profils expérimentés (source : Jobtensor, gehaltsreporter.de, 2025).",
          de: "Das Einstiegsgehalt liegt bei rund 50.000 €/Jahr (etwa 4.200 €/Monat), das Durchschnittsgehalt bei rund 58.300 €/Jahr (etwa 4.858 €/Monat) und kann für erfahrene Profile bis zu rund 79.200 €/Jahr erreichen (Quelle: Jobtensor, gehaltsreporter.de, 2025).",
          en: "Entry salary is about 50,000 €/year (about 4,200 €/month), the average salary is about 58,300 €/year (about 4,858 €/month), and it can reach up to about 79,200 €/year for experienced profiles (source: Jobtensor, gehaltsreporter.de, 2025).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Parmi les employeurs figurent Volkswagen, Mercedes-Benz, BMW, Bosch, Continental, ZF, Schaeffler, Trumpf, Siemens, Krones, Festo, ainsi que le Mittelstand industriel du Bade-Wurtemberg et de Bavière.",
          de: "Zu den Arbeitgebern zählen Volkswagen, Mercedes-Benz, BMW, Bosch, Continental, ZF, Schaeffler, Trumpf, Siemens, Krones, Festo sowie der industrielle Mittelstand in Baden-Württemberg und Bayern.",
          en: "Employers include Volkswagen, Mercedes-Benz, BMW, Bosch, Continental, ZF, Schaeffler, Trumpf, Siemens, Krones, Festo, as well as the industrial Mittelstand of Baden-Württemberg and Bavaria.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La tension structurelle est forte, avec environ 222 postes vacants pour 100 chômeurs en génie mécanique et automobile, et les postes en construction mécanique en hausse d'environ 3,6 pour cent sur un an (source : VDI, IW Ingenieurmonitor, 2025). La pénurie d'ingénieurs (Ingenieurmangel) reste aiguë tous domaines confondus, avec environ 333 postes ouverts pour 100 chômeurs (source : VDI, IW Ingenieurmonitor, 2024).",
          de: "Der strukturelle Fachkräftemangel ist stark, mit rund 222 offenen Stellen je 100 Arbeitslosen im Maschinenbau und in der Fahrzeugtechnik, und die Stellen im Maschinenbau stiegen um rund 3,6 Prozent im Jahresvergleich (Quelle: VDI, IW Ingenieurmonitor, 2025). Der Ingenieurmangel bleibt über alle Bereiche hinweg akut, mit rund 333 offenen Stellen je 100 Arbeitslosen (Quelle: VDI, IW Ingenieurmonitor, 2024).",
          en: "Structural tightness is strong, with about 222 vacancies per 100 unemployed people in mechanical and automotive engineering, and positions in mechanical engineering up by about 3.6 percent year on year (source: VDI, IW Ingenieurmonitor, 2025). The engineer shortage (Ingenieurmangel) remains acute across all fields, with about 333 open positions per 100 unemployed engineers (source: VDI, IW Ingenieurmonitor, 2024).",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers responsable de production, responsable méthodes ou lean, puis vers la direction industrielle.",
          de: "Sie können sich zum Produktionsleiter, Methoden- oder Lean-Verantwortlichen und weiter in die industrielle Leitung entwickeln.",
          en: "You can progress to production manager, methods or lean manager, and then into industrial management.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Le B2 est le niveau attendu par les employeurs et ouvre le marché de l'ingénierie ; l'anglais suffit dans certaines équipes de recherche et développement et les grands groupes internationaux. C'est le B2 que nous visons avec vous.",
          de: "B2 ist das von den Arbeitgebern erwartete Niveau und öffnet den Ingenieurmarkt; in manchen Forschungs- und Entwicklungsteams und in großen internationalen Konzernen genügt Englisch. Gemeinsam mit Ihnen streben wir das B2 an.",
          en: "B2 is the level employers expect and it opens the engineering market; English is enough in some research and development teams and large international groups. B2 is what we aim for with you.",
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
          de: "Ingenieurwesen ist kein für die Ausübung reglementierter Beruf: Ihr Abschluss wird über die Datenbank anabin und, falls nötig, über eine Zeugnisbewertung der ZAB geprüft. Der Titel Ingenieur ist durch die Gesetze der Länder geschützt und seine Führung kann eine Genehmigung erfordern, die für eine Anstellung jedoch nicht nötig ist. Wir lassen Ihren Abschluss bewerten und beraten Sie.",
          en: "Engineering is not a regulated profession in order to work: your degree is assessed via the anabin database and, if needed, a statement of comparability from the ZAB. The title of Ingenieur is protected by the laws of the Länder and using it may require authorisation, but this is not required to be employed. We have your degree assessed and guide you through it.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Diplômé de l'université, vous accédez à la Carte bleue européenne : le seuil de salaire 2025 est d'environ 48 300 € brut par an, abaissé à environ 43 760 € pour les métiers en tension comme l'ingénierie (source : cadres juridiques d'immigration, 2025). Le visa de travailleur qualifié pour diplôme académique et la Chancenkarte (carte d'opportunité) sont d'autres voies. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Als Hochschulabsolvent haben Sie Zugang zur Blauen Karte EU: Die Gehaltsschwelle 2025 liegt bei rund 48.300 € brutto pro Jahr, gesenkt auf rund 43.760 € für Mangelberufe wie das Ingenieurwesen (Quelle: aufenthaltsrechtliche Rahmenbedingungen, 2025). Das Visum für Fachkräfte mit akademischem Abschluss und die Chancenkarte sind weitere Wege. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "As a university graduate, you have access to the EU Blue Card: the 2025 salary threshold is about 48,300 € gross per year, lowered to about 43,760 € for shortage occupations such as engineering (source: immigration legal frameworks, 2025). The skilled worker visa for an academic degree and the Chancenkarte (opportunity card) are other routes. We check your eligibility and prepare the file with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihren Abschluss bewerten, präsentieren Ihr Profil vorteilhaft bei deutschen Arbeitgebern, bereiten den Antrag für die Blaue Karte oder das Visum vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, have your degree assessed, present your profile favourably to German employers, prepare the Blue Card or visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "En quoi consiste concrètement le métier ?",
          de: "Worin besteht der Beruf konkret?",
          en: "What does the profession consist of in practice?",
        },
        a: {
          fr: "Il couvre l'industrialisation de la production, les méthodes et l'amélioration continue des lignes de fabrication.",
          de: "Er umfasst die Industrialisierung der Produktion, die Methoden und die kontinuierliche Verbesserung der Fertigungslinien.",
          en: "It covers the industrialisation of production, methods and the continuous improvement of manufacturing lines.",
        },
      },
      {
        q: {
          fr: "Quels secteurs recrutent le plus ?",
          de: "Welche Bereiche stellen am meisten ein?",
          en: "Which sectors hire the most?",
        },
        a: {
          fr: "L'automobile, la construction de machines et l'industrie manufacturière recrutent le plus fortement.",
          de: "Die Automobilbranche, der Maschinenbau und die verarbeitende Industrie stellen am stärksten ein.",
          en: "The automotive sector, machine building and manufacturing industry hire the most strongly.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "ingenieur-qualite": {
    slug: "ingenieur-qualite",
    image: "ingenieur-qualite",
    title: {
      fr: "Ingénieur qualité",
      de: "Qualitätsingenieur",
      en: "Quality engineer",
    },
    intro: {
      fr: "Garante de la fiabilité des produits allemands, la qualité offre un métier transversal où votre rigueur fait la différence.",
      de: "Als Garant für die Zuverlässigkeit deutscher Produkte bietet die Qualität einen bereichsübergreifenden Beruf, in dem Ihre Sorgfalt den Unterschied macht.",
      en: "As the guarantor of the reliability of German products, quality offers a cross-cutting profession where your rigour makes the difference.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'ingénieur qualité garantit la qualité des produits et des procédés, met en oeuvre les normes (ISO 9001, IATF 16949) et pilote les audits et l'amélioration continue. Il protège la réputation et la conformité de l'entreprise.",
          de: "Der Qualitätsingenieur sichert die Qualität von Produkten und Prozessen, setzt Normen um (ISO 9001, IATF 16949) und steuert Audits und kontinuierliche Verbesserung. Er schützt Ruf und Konformität des Unternehmens.",
          en: "The quality engineer ensures the quality of products and processes, implements standards (ISO 9001, IATF 16949) and manages audits and continuous improvement. They protect the reputation and compliance of the company.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée se situe entre environ 48 500 et 50 000 €/an, et le salaire médian, tous niveaux d'expérience confondus, atteint environ 5 204 €/mois selon les portails (environ 64 526 €/an) (source : gehalt.de, jobted.de, 2025).",
          de: "Das Einstiegsgehalt liegt zwischen rund 48.500 und 50.000 €/Jahr, und das mittlere Gehalt über alle Erfahrungsstufen hinweg erreicht laut Portalen rund 5.204 €/Monat (etwa 64.526 €/Jahr) (Quelle: gehalt.de, jobted.de, 2025).",
          en: "Entry salary is between about 48,500 and 50,000 €/year, and the median salary across all experience levels reaches about 5,204 €/month according to the portals (about 64,526 €/year) (source: gehalt.de, jobted.de, 2025).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Parmi les employeurs figurent Bosch, Continental, ZF, Mahle, les dispositifs médicaux et la pharmacie (norme ISO 13485), l'aéronautique (Airbus, MTU), l'électronique et le Mittelstand certifié ISO 9001 ou IATF 16949.",
          de: "Zu den Arbeitgebern zählen Bosch, Continental, ZF, Mahle, die Medizintechnik und Pharma (Norm ISO 13485), die Luftfahrt (Airbus, MTU), die Elektronik und der nach ISO 9001 oder IATF 16949 zertifizierte Mittelstand.",
          en: "Employers include Bosch, Continental, ZF, Mahle, medical devices and pharmaceuticals (ISO 13485 standard), aerospace (Airbus, MTU), electronics and the Mittelstand certified to ISO 9001 or IATF 16949.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande est régulière et transversale, dans la famille du génie mécanique et automobile, avec environ 222 postes vacants pour 100 chômeurs (source : VDI, IW Ingenieurmonitor, 2025). La pénurie d'ingénieurs (Ingenieurmangel) reste aiguë tous domaines confondus, avec environ 333 postes ouverts pour 100 chômeurs (source : VDI, IW Ingenieurmonitor, 2024).",
          de: "Die Nachfrage ist stetig und bereichsübergreifend, in der Familie des Maschinenbaus und der Fahrzeugtechnik, mit rund 222 offenen Stellen je 100 Arbeitslosen (Quelle: VDI, IW Ingenieurmonitor, 2025). Der Ingenieurmangel bleibt über alle Bereiche hinweg akut, mit rund 333 offenen Stellen je 100 Arbeitslosen (Quelle: VDI, IW Ingenieurmonitor, 2024).",
          en: "Demand is steady and cross-cutting, within the mechanical and automotive engineering family, with about 222 vacancies per 100 unemployed people (source: VDI, IW Ingenieurmonitor, 2025). The engineer shortage (Ingenieurmangel) remains acute across all fields, with about 333 open positions per 100 unemployed engineers (source: VDI, IW Ingenieurmonitor, 2024).",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers responsable qualité, auditeur, responsable assurance qualité, puis vers la direction qualité.",
          de: "Sie können sich zum Qualitätsleiter, Auditor, Leiter der Qualitätssicherung und weiter in die Qualitätsleitung entwickeln.",
          en: "You can progress to quality manager, auditor, quality assurance manager, and then into quality leadership.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Le B2 est le niveau attendu par les employeurs et ouvre le marché de l'ingénierie ; l'anglais suffit dans certaines équipes de recherche et développement et les grands groupes internationaux. C'est le B2 que nous visons avec vous.",
          de: "B2 ist das von den Arbeitgebern erwartete Niveau und öffnet den Ingenieurmarkt; in manchen Forschungs- und Entwicklungsteams und in großen internationalen Konzernen genügt Englisch. Gemeinsam mit Ihnen streben wir das B2 an.",
          en: "B2 is the level employers expect and it opens the engineering market; English is enough in some research and development teams and large international groups. B2 is what we aim for with you.",
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
          de: "Ingenieurwesen ist kein für die Ausübung reglementierter Beruf: Ihr Abschluss wird über die Datenbank anabin und, falls nötig, über eine Zeugnisbewertung der ZAB geprüft. Der Titel Ingenieur ist durch die Gesetze der Länder geschützt und seine Führung kann eine Genehmigung erfordern, die für eine Anstellung jedoch nicht nötig ist. Wir lassen Ihren Abschluss bewerten und beraten Sie.",
          en: "Engineering is not a regulated profession in order to work: your degree is assessed via the anabin database and, if needed, a statement of comparability from the ZAB. The title of Ingenieur is protected by the laws of the Länder and using it may require authorisation, but this is not required to be employed. We have your degree assessed and guide you through it.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Diplômé de l'université, vous accédez à la Carte bleue européenne : le seuil de salaire 2025 est d'environ 48 300 € brut par an, abaissé à environ 43 760 € pour les métiers en tension comme l'ingénierie (source : cadres juridiques d'immigration, 2025). Le visa de travailleur qualifié pour diplôme académique et la Chancenkarte (carte d'opportunité) sont d'autres voies. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Als Hochschulabsolvent haben Sie Zugang zur Blauen Karte EU: Die Gehaltsschwelle 2025 liegt bei rund 48.300 € brutto pro Jahr, gesenkt auf rund 43.760 € für Mangelberufe wie das Ingenieurwesen (Quelle: aufenthaltsrechtliche Rahmenbedingungen, 2025). Das Visum für Fachkräfte mit akademischem Abschluss und die Chancenkarte sind weitere Wege. Wir prüfen Ihre Berechtigung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "As a university graduate, you have access to the EU Blue Card: the 2025 salary threshold is about 48,300 € gross per year, lowered to about 43,760 € for shortage occupations such as engineering (source: immigration legal frameworks, 2025). The skilled worker visa for an academic degree and the Chancenkarte (opportunity card) are other routes. We check your eligibility and prepare the file with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihren Abschluss bewerten, präsentieren Ihr Profil vorteilhaft bei deutschen Arbeitgebern, bereiten den Antrag für die Blaue Karte oder das Visum vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the useful level, have your degree assessed, present your profile favourably to German employers, prepare the Blue Card or visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quelles normes faut-il maîtriser ?",
          de: "Welche Normen muss man beherrschen?",
          en: "Which standards do you need to master?",
        },
        a: {
          fr: "Les normes ISO 9001 et IATF 16949, ainsi que la norme ISO 13485 selon le secteur médical.",
          de: "Die Normen ISO 9001 und IATF 16949 sowie die Norm ISO 13485 je nach Medizinbereich.",
          en: "The ISO 9001 and IATF 16949 standards, as well as the ISO 13485 standard depending on the medical sector.",
        },
      },
      {
        q: {
          fr: "Quels secteurs recrutent le plus ?",
          de: "Welche Bereiche stellen am meisten ein?",
          en: "Which sectors hire the most?",
        },
        a: {
          fr: "L'automobile, le médical et l'aéronautique recrutent le plus régulièrement des ingénieurs qualité.",
          de: "Die Automobilbranche, die Medizintechnik und die Luftfahrt stellen am regelmäßigsten Qualitätsingenieure ein.",
          en: "The automotive, medical and aerospace sectors most regularly hire quality engineers.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
