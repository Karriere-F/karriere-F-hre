import type { LogistiqueFiche } from "../logistique-fiche-types";
import { SALARY_NOTE } from "../logistique-fiche-types";

export const LOG_FICHES_DIPLOME_B: Record<string, LogistiqueFiche> = {
  "conducteur-bus": {
    slug: "conducteur-bus",
    image: "conducteur-bus",
    title: {
      fr: "Conducteur de bus",
      de: "Busfahrer",
      en: "Bus driver",
    },
    intro: {
      fr: "Un métier de contact et de responsabilité, très recherché dans les transports publics allemands.",
      de: "Ein verantwortungsvoller Beruf mit Publikumskontakt, im deutschen Nahverkehr stark gesucht.",
      en: "A people-facing job with real responsibility, in high demand across German public transport.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le conducteur de bus conduit des bus pour le transport de personnes, accueille les passagers, respecte les horaires et assure la sécurité à bord.",
          de: "Der Busfahrer fährt Busse im Personenverkehr, empfängt die Fahrgäste, hält den Fahrplan ein und sorgt für die Sicherheit an Bord.",
          en: "The bus driver operates buses for passenger transport, welcomes passengers, keeps to the timetable and ensures safety on board.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Salaire médian (tous niveaux d'expérience confondus) d'environ 2 850 €/mois (fourchette 2 500 à 3 225 €), entrée environ 2 640 €, expérimenté environ 3 208 €. Chez les opérateurs publics sous convention (ÖPNV), la médiane est plus élevée, environ 3 289 à 3 522 € (source : StepStone, Entgeltatlas via presse, 2026), et la convention publique (TVöD) ajoute des primes de poste (jusqu'à environ 200 €/mois).",
          de: "Median (über alle Erfahrungsstufen) rund 2.850 €/Monat (Spanne 2.500 bis 3.225 €), Einstieg etwa 2.640 €, mit Erfahrung etwa 3.208 €. Bei tarifgebundenen öffentlichen Betrieben (ÖPNV) liegt der Median höher, bei rund 3.289 bis 3.522 € (Quelle: StepStone, Entgeltatlas laut Presse, 2026), und der öffentliche Tarifvertrag (TVöD) fügt Schichtzulagen hinzu (bis zu rund 200 €/Monat).",
          en: "Median (across all experience levels) around 2,850 €/month (range 2,500 to 3,225 €), entry about 2,640 €, experienced about 3,208 €. At public operators under a collective agreement (ÖPNV), the median is higher, around 3,289 to 3,522 € (source: StepStone, Entgeltatlas via press, 2026), and the public agreement (TVöD) adds shift premiums (up to around 200 €/month).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Régies municipales et Stadtwerke (par exemple BVG à Berlin, MVG à Munich, VHH à Hambourg), autocaristes privés et sous-traitants de FlixBus.",
          de: "Kommunale Verkehrsbetriebe und Stadtwerke (zum Beispiel BVG in Berlin, MVG in München, VHH in Hamburg), private Busunternehmen und Subunternehmer von FlixBus.",
          en: "Municipal transport authorities and Stadtwerke (for example BVG in Berlin, MVG in Munich, VHH in Hamburg), private coach operators and FlixBus subcontractors.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Pénurie sévère et croissante : environ 40 pour cent des conducteurs ont plus de 55 ans et plus de 60 000 partiront d'ici 2041 (source : Bundesagentur für Arbeit et études sectorielles, 2025).",
          de: "Starker und wachsender Mangel: rund 40 Prozent der Fahrer sind über 55 Jahre alt, und mehr als 60.000 gehen bis 2041 in den Ruhestand (Quelle: Bundesagentur für Arbeit und Branchenstudien, 2025).",
          en: "Severe and growing shortage: about 40 percent of drivers are over 55 and more than 60,000 will leave by 2041 (source: Federal Employment Agency and sector studies, 2025).",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Formateur, chef de dépôt, planification et régulation du réseau.",
          de: "Ausbilder, Betriebshofleiter, Netzplanung und Betriebssteuerung.",
          en: "Trainer, depot manager, network planning and dispatch control.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Sur le terrain, les consignes de sécurité, les instructions et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Im Alltag sind Sicherheitshinweise, Anweisungen und Unterlagen auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "On the job, safety instructions, directions and documentation are in German. B2 is the standard employers expect, and it is the level we aim for.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Pour conduire un bus, votre permis étranger doit être converti (Umschreibung), le permis de classe D est requis, ainsi que la qualification de conducteur professionnel (code 95) et une visite médicale. La voie la plus simple passe souvent par une qualification obtenue en Allemagne. Nous vous orientons et engageons les démarches avec vous.",
          de: "Zum Führen eines Busses muss Ihr ausländischer Führerschein umgeschrieben werden (Umschreibung), die Fahrerlaubnis der Klasse D ist erforderlich, ebenso die Grundqualifikation für Berufskraftfahrer (Schlüsselzahl 95) und eine ärztliche Untersuchung. Der einfachste Weg führt oft über eine in Deutschland erworbene Qualifikation. Wir beraten Sie und leiten die Schritte mit Ihnen ein.",
          en: "To drive a bus, your foreign licence must be converted (Umschreibung), a category D licence is required, along with the professional driver qualification (code 95) and a medical examination. The simplest route often runs through a qualification obtained in Germany. We guide you and start the procedures with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit ermöglicht, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Voraussetzungen und stellen den Antrag mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (level A2 required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these jobs. We check your eligibility and build the file with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, get your qualification recognised, present your profile to German employers, prepare the visa file and support you through to your settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quel permis faut-il pour conduire un bus ?",
          de: "Welchen Führerschein braucht man für den Bus?",
          en: "Which licence do you need to drive a bus?",
        },
        a: {
          fr: "Le permis de classe D et la qualification de conducteur professionnel (code 95) sont requis, en plus de la conversion de votre permis étranger.",
          de: "Erforderlich sind die Fahrerlaubnis der Klasse D und die Grundqualifikation für Berufskraftfahrer (Schlüsselzahl 95), zusätzlich zur Umschreibung Ihres ausländischen Führerscheins.",
          en: "A category D licence and the professional driver qualification (code 95) are required, in addition to converting your foreign licence.",
        },
      },
      {
        q: {
          fr: "Les opérateurs publics payent-ils mieux ?",
          de: "Zahlen öffentliche Betriebe besser?",
          en: "Do public operators pay better?",
        },
        a: {
          fr: "Oui, via la convention publique (TVöD), la médiane est plus élevée et des primes de poste s'ajoutent au salaire de base.",
          de: "Ja, über den öffentlichen Tarifvertrag (TVöD) liegt der Median höher, und Schichtzulagen kommen zum Grundgehalt hinzu.",
          en: "Yes, under the public agreement (TVöD) the median is higher and shift premiums are added on top of the base pay.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "responsable-entrepot": {
    slug: "responsable-entrepot",
    image: "responsable-entrepot",
    title: {
      fr: "Responsable d'entrepôt",
      de: "Lagerleiter",
      en: "Warehouse manager",
    },
    intro: {
      fr: "Un poste d'encadrement au coeur de la logistique allemande, où l'expérience compte autant que le diplôme.",
      de: "Eine Führungsposition im Herzen der deutschen Logistik, in der Erfahrung ebenso zählt wie der Abschluss.",
      en: "A leadership role at the heart of German logistics, where experience counts as much as the qualification.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le responsable d'entrepôt dirige un entrepôt, encadre les équipes, organise les flux et les stocks, et garantit la sécurité et les délais.",
          de: "Der Lagerleiter führt ein Lager, leitet die Teams an, organisiert die Waren- und Bestandsflüsse und sichert Sicherheit und Termine.",
          en: "The warehouse manager runs a warehouse, leads the teams, organises flows and stock, and ensures safety and deadlines.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Salaire médian (tous niveaux d'expérience confondus) d'environ 3 308 €/mois (fourchette 2 733 à 4 033 €), entrée environ 3 010 €, expérimenté environ 3 733 €. D'autres sources donnent une moyenne autour de 3 750 € (source : StepStone, jobvector, 2026).",
          de: "Median (über alle Erfahrungsstufen) rund 3.308 €/Monat (Spanne 2.733 bis 4.033 €), Einstieg etwa 3.010 €, mit Erfahrung etwa 3.733 €. Andere Quellen nennen einen Durchschnitt von rund 3.750 € (Quelle: StepStone, jobvector, 2026).",
          en: "Median (across all experience levels) around 3,308 €/month (range 2,733 to 4,033 €), entry about 3,010 €, experienced about 3,733 €. Other sources give an average around 3,750 € (source: StepStone, jobvector, 2026).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "DHL et Deutsche Post, DB Schenker, DACHSER, Kühne und Nagel, Rhenus, Amazon, ainsi que le commerce et l'e-commerce avec leurs centres de distribution.",
          de: "DHL und Deutsche Post, DB Schenker, DACHSER, Kühne und Nagel, Rhenus, Amazon sowie der Handel und der E-Commerce mit ihren Verteilzentren.",
          en: "DHL and Deutsche Post, DB Schenker, DACHSER, Kühne und Nagel, Rhenus, Amazon, as well as retail and e-commerce with their distribution centres.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Forts : la logistique est un secteur en croissance qui recrute en continu des postes d'encadrement.",
          de: "Stark: Die Logistik ist eine wachsende Branche, die laufend Führungspositionen besetzt.",
          en: "Strong: logistics is a growing sector that recruits management roles continuously.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Responsable de site, responsable logistique, direction supply chain.",
          de: "Standortleiter, Logistikleiter, Leitung Supply Chain.",
          en: "Site manager, logistics manager, supply chain director.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Sur le terrain, les consignes de sécurité, les instructions et la documentation sont en allemand. Dans ce rôle d'encadrement avec documentation et sécurité, le B2 est particulièrement important, et c'est le niveau que nous visons.",
          de: "Im Alltag sind Sicherheitshinweise, Anweisungen und Unterlagen auf Deutsch. In dieser Führungsrolle mit Dokumentation und Sicherheit ist B2 besonders wichtig, und genau dieses Niveau streben wir an.",
          en: "On the job, safety instructions, directions and documentation are in German. In this management role with documentation and safety, B2 is particularly important, and it is the level we aim for.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Ces métiers de la logistique ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. On accède souvent à ce poste avec une formation de Fachkraft für Lagerlogistik et de l'expérience, ou un diplôme de Meister ou Fachwirt. Nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Diese Logistikberufe sind nicht reglementiert: Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation gleichwertig zur deutschen Ausbildung erforderlich. Häufig gelangt man mit einer Ausbildung zur Fachkraft für Lagerlogistik und Erfahrung in diese Position, oder mit einem Meister- oder Fachwirtabschluss. Wir lassen sie bewerten und leiten das Verfahren mit Ihnen ein.",
          en: "These logistics jobs are not regulated: for the skilled worker visa, recognition of your qualification (Anerkennung) equivalent to German training is required. The role is often reached with training as a Fachkraft für Lagerlogistik plus experience, or a Meister or Fachwirt qualification. We have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit ermöglicht, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Voraussetzungen und stellen den Antrag mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (level A2 required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these jobs. We check your eligibility and build the file with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, get your qualification recognised, present your profile to German employers, prepare the visa file and support you through to your settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Faut-il un permis de conduire pour ce poste ?",
          de: "Braucht man für diese Stelle einen Führerschein?",
          en: "Do you need a driving licence for this role?",
        },
        a: {
          fr: "Non : c'est un poste d'encadrement en entrepôt, aucun permis de conduire n'est requis.",
          de: "Nein: Es ist eine Führungsposition im Lager, ein Führerschein ist nicht erforderlich.",
          en: "No: it is a warehouse management role, no driving licence is required.",
        },
      },
      {
        q: {
          fr: "Quel parcours mène à ce poste ?",
          de: "Welcher Weg führt zu dieser Position?",
          en: "What path leads to this role?",
        },
        a: {
          fr: "Une formation en logistique d'entrepôt et de l'expérience, ou un diplôme de Meister ou Fachwirt.",
          de: "Eine Ausbildung in der Lagerlogistik und Erfahrung, oder ein Meister- oder Fachwirtabschluss.",
          en: "Training in warehouse logistics plus experience, or a Meister or Fachwirt qualification.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "disponent": {
    slug: "disponent",
    image: "disponent",
    title: {
      fr: "Affréteur, gestionnaire de parc",
      de: "Disponent / Fuhrparkdisponent",
      en: "Dispatcher, fleet planner",
    },
    intro: {
      fr: "Un métier d'organisation et de coordination, essentiel pour faire tourner les flottes allemandes.",
      de: "Ein Beruf der Organisation und Koordination, unverzichtbar für den Betrieb der deutschen Fuhrparks.",
      en: "A job of organisation and coordination, essential to keep German fleets running.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'affréteur planifie les transports et les tournées, affecte les conducteurs et les véhicules, suit les livraisons et coordonne clients et transporteurs.",
          de: "Der Disponent plant die Transporte und Touren, teilt Fahrer und Fahrzeuge ein, verfolgt die Lieferungen und koordiniert Kunden und Frachtführer.",
          en: "The dispatcher plans transports and routes, assigns drivers and vehicles, tracks deliveries and coordinates customers and carriers.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Salaire médian (tous niveaux d'expérience confondus) d'environ 3 275 €/mois (fourchette 2 750 à 3 791 €). Une autre source donne une médiane d'environ 3 546 € (source : StepStone, meingehalt.net, 2026).",
          de: "Median (über alle Erfahrungsstufen) rund 3.275 €/Monat (Spanne 2.750 bis 3.791 €). Eine andere Quelle nennt einen Median von rund 3.546 € (Quelle: StepStone, meingehalt.net, 2026).",
          en: "Median (across all experience levels) around 3,275 €/month (range 2,750 to 3,791 €). Another source gives a median around 3,546 € (source: StepStone, meingehalt.net, 2026).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Transitaires et exploitants de flottes (DB Schenker, DACHSER, Rhenus, DSV, Kühne und Nagel), ainsi que toute entreprise disposant de son propre parc de véhicules.",
          de: "Speditionen und Fuhrparkbetreiber (DB Schenker, DACHSER, Rhenus, DSV, Kühne und Nagel) sowie jedes Unternehmen mit eigenem Fuhrpark.",
          en: "Freight forwarders and fleet operators (DB Schenker, DACHSER, Rhenus, DSV, Kühne und Nagel), as well as any company with its own vehicle fleet.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Solides, portés par la pénurie de conducteurs qui accroît le besoin de coordination.",
          de: "Solide, getragen vom Fahrermangel, der den Koordinationsbedarf erhöht.",
          en: "Solid, driven by the driver shortage that increases the need for coordination.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Chef d'exploitation, responsable transport, responsable logistique.",
          de: "Betriebsleiter, Leiter Transport, Logistikleiter.",
          en: "Operations manager, transport manager, logistics manager.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Sur le terrain, les consignes de sécurité, les instructions et la documentation sont en allemand. Avec une coordination permanente entre conducteurs, clients et administrations, le B2 est essentiel, et c'est le niveau que nous visons.",
          de: "Im Alltag sind Sicherheitshinweise, Anweisungen und Unterlagen auf Deutsch. Bei der ständigen Abstimmung mit Fahrern, Kunden und Behörden ist B2 unverzichtbar, und genau dieses Niveau streben wir an.",
          en: "On the job, safety instructions, directions and documentation are in German. With constant coordination between drivers, customers and authorities, B2 is essential, and it is the level we aim for.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Ces métiers de la logistique ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. Nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Diese Logistikberufe sind nicht reglementiert: Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation gleichwertig zur deutschen Ausbildung erforderlich. Wir lassen sie bewerten und leiten das Verfahren mit Ihnen ein.",
          en: "These logistics jobs are not regulated: for the skilled worker visa, recognition of your qualification (Anerkennung) equivalent to German training is required. We have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit ermöglicht, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Voraussetzungen und stellen den Antrag mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (level A2 required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these jobs. We check your eligibility and build the file with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, get your qualification recognised, present your profile to German employers, prepare the visa file and support you through to your settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Faut-il un permis poids lourd ?",
          de: "Braucht man einen Lkw-Führerschein?",
          en: "Do you need a heavy goods licence?",
        },
        a: {
          fr: "Non : c'est un poste de planification et de coordination, pas de conduite.",
          de: "Nein: Es ist eine Planungs- und Koordinationsstelle, keine Fahrtätigkeit.",
          en: "No: it is a planning and coordination role, not a driving job.",
        },
      },
      {
        q: {
          fr: "Quelles compétences sont attendues ?",
          de: "Welche Kompetenzen werden erwartet?",
          en: "What skills are expected?",
        },
        a: {
          fr: "De l'organisation, la maîtrise des logiciels de planification et de bonnes qualités de communication.",
          de: "Organisationstalent, sicherer Umgang mit Planungssoftware und gute Kommunikationsfähigkeiten.",
          en: "Organisation, command of planning software and good communication skills.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "chauffeur-livreur": {
    slug: "chauffeur-livreur",
    image: "chauffeur-livreur",
    title: {
      fr: "Chauffeur-livreur",
      de: "Auslieferungsfahrer / KEP-Fahrer",
      en: "Delivery driver",
    },
    intro: {
      fr: "Un métier de terrain porté par le e-commerce, avec un besoin de recrutement continu en Allemagne.",
      de: "Ein praktischer Beruf, getragen vom E-Commerce, mit laufendem Personalbedarf in Deutschland.",
      en: "A hands-on job driven by e-commerce, with continuous hiring needs in Germany.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le chauffeur-livreur livre colis et marchandises sur une tournée, charge le véhicule, respecte les délais et soigne le contact client.",
          de: "Der Auslieferungsfahrer liefert Pakete und Waren auf einer Tour aus, belädt das Fahrzeug, hält die Termine ein und pflegt den Kundenkontakt.",
          en: "The delivery driver delivers parcels and goods on a route, loads the vehicle, keeps to deadlines and looks after customer contact.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Salaire médian (tous niveaux d'expérience confondus) d'environ 2 625 €/mois (fourchette 2 158 à 2 950 €), entrée environ 2 300 €, expérimenté environ 2 908 € (source : StepStone, 2026). Les employeurs sous convention ou de grande taille payent au-dessus du salaire minimum légal (13,90 €/h en 2026).",
          de: "Median (über alle Erfahrungsstufen) rund 2.625 €/Monat (Spanne 2.158 bis 2.950 €), Einstieg etwa 2.300 €, mit Erfahrung etwa 2.908 € (Quelle: StepStone, 2026). Tarifgebundene oder große Arbeitgeber zahlen über dem gesetzlichen Mindestlohn (13,90 €/h im Jahr 2026).",
          en: "Median (across all experience levels) around 2,625 €/month (range 2,158 to 2,950 €), entry about 2,300 €, experienced about 2,908 € (source: StepStone, 2026). Employers under a collective agreement or large employers pay above the legal minimum wage (13.90 €/h in 2026).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "DHL et Deutsche Post, Hermes, DPD, GLS, UPS, Amazon Logistics et leurs sous-traitants.",
          de: "DHL und Deutsche Post, Hermes, DPD, GLS, UPS, Amazon Logistics und ihre Subunternehmer.",
          en: "DHL and Deutsche Post, Hermes, DPD, GLS, UPS, Amazon Logistics and their subcontractors.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Très forts et continus, portés par le e-commerce.",
          de: "Sehr stark und dauerhaft, getragen vom E-Commerce.",
          en: "Very strong and continuous, driven by e-commerce.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Tournées spécialisées, chef d'équipe, planification, passage vers le poids lourd.",
          de: "Spezialtouren, Teamleiter, Disposition, Wechsel zum Lkw.",
          en: "Specialised routes, team leader, planning, move up to heavy goods.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Sur le terrain, les consignes de sécurité, les instructions et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Im Alltag sind Sicherheitshinweise, Anweisungen und Unterlagen auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "On the job, safety instructions, directions and documentation are in German. B2 is the standard employers expect, and it is the level we aim for.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Le permis de classe B suffit pour les véhicules jusqu'à 3,5 tonnes ; au-delà (3,5 à 7,5 tonnes), le permis C1 et la qualification de conducteur professionnel (code 95) sont requis. Votre permis étranger doit être converti (Umschreibung). Nous vous orientons et engageons les démarches avec vous.",
          de: "Die Fahrerlaubnis der Klasse B genügt für Fahrzeuge bis 3,5 Tonnen; darüber (3,5 bis 7,5 Tonnen) sind die Klasse C1 und die Grundqualifikation für Berufskraftfahrer (Schlüsselzahl 95) erforderlich. Ihr ausländischer Führerschein muss umgeschrieben werden (Umschreibung). Wir beraten Sie und leiten die Schritte mit Ihnen ein.",
          en: "A category B licence is enough for vehicles up to 3.5 tonnes; above that (3.5 to 7.5 tonnes), a C1 licence and the professional driver qualification (code 95) are required. Your foreign licence must be converted (Umschreibung). We guide you and start the procedures with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit ermöglicht, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Voraussetzungen und stellen den Antrag mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (level A2 required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these jobs. We check your eligibility and build the file with you.",
        },
      },
      {
        heading: {
          fr: "L'accompagnement Karriere Fähre",
          de: "Ihre Begleitung durch Karriere Fähre",
          en: "Your Karriere Fähre support",
        },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, get your qualification recognised, present your profile to German employers, prepare the visa file and support you through to your settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quel permis faut-il ?",
          de: "Welchen Führerschein braucht man?",
          en: "Which licence do you need?",
        },
        a: {
          fr: "Le permis de classe B suffit jusqu'à 3,5 tonnes ; au-delà de 3,5 tonnes, le permis C1 est requis.",
          de: "Die Klasse B genügt bis 3,5 Tonnen; über 3,5 Tonnen ist die Klasse C1 erforderlich.",
          en: "A category B licence is enough up to 3.5 tonnes; above 3.5 tonnes, a C1 licence is required.",
        },
      },
      {
        q: {
          fr: "Mon permis étranger suffit-il ?",
          de: "Reicht mein ausländischer Führerschein?",
          en: "Is my foreign licence enough?",
        },
        a: {
          fr: "Il doit être converti en Allemagne (Umschreibung) avant de pouvoir travailler.",
          de: "Er muss in Deutschland umgeschrieben werden (Umschreibung), bevor Sie arbeiten können.",
          en: "It must be converted in Germany (Umschreibung) before you can work.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
