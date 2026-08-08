// Ausbildung-path Construction fiches (train in Germany). Populated from verified
// public German data; see construction-fiche-types.ts for the shape and SALARY_NOTE.

import type { ConstructionFiche } from "../construction-fiche-types";
import { SALARY_NOTE } from "../construction-fiche-types";

export const CONSTR_FICHES_AUSBILDUNG: Record<string, ConstructionFiche> = {
  "maurer": {
    slug: "maurer",
    title: {
      fr: "Maçon (Maurer)",
      de: "Maurer",
      en: "Bricklayer (Maurer)",
    },
    intro: {
      fr: "Un métier de bâtisseur solide et recherché, au coeur du gros oeuvre allemand.",
      de: "Ein solider, gefragter Bauberuf im Herzen des deutschen Hochbaus.",
      en: "A solid, sought-after building trade at the heart of German shell construction.",
    },
    image: "maurer",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le maçon élève des murs et des structures en brique, en bloc et en béton sur les chantiers de gros oeuvre. Il lit les plans et travaille au millimètre, dans le respect de mesures précises.",
          de: "Der Maurer errichtet Wände und Bauwerke aus Ziegel, Stein und Beton auf Rohbaustellen. Er liest Pläne und arbeitet millimetergenau nach präzisen Maßen.",
          en: "The bricklayer builds walls and structures in brick, block and concrete on shell-construction sites. They read plans and work to precise measurements down to the millimetre.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage sous convention SOKA-BAU, la rémunération est d'environ 1 080 € (1re année), 1 300 € (2e, Ouest) et 1 550 € (3e, Ouest), un peu moins à l'Est (source : SOKA-BAU, 2025). Le salaire d'entrée après le diplôme est d'environ 2 600 à 2 670 €/mois, la médiane autour de 3 100 €, la moyenne environ 3 388 €, et au-delà de 3 700 € avec l'expérience (source : agrégateurs citant l'Entgeltatlas, 2025). Dans le bâtiment, la paie suit un salaire minimum de branche contraignant (Mindestlohn Bau, niveau qualifié d'environ 17,34 €/h en 2026, supérieur au minimum général), et la caisse de congés SOKA-BAU ouvre 30 jours de congés payés, un vrai atout.",
          de: "In der Ausbildung nach SOKA-BAU-Tarif liegt die Vergütung bei etwa 1.080 € (1. Jahr), 1.300 € (2. Jahr, West) und 1.550 € (3. Jahr, West), im Osten etwas weniger (Quelle: SOKA-BAU, 2025). Das Einstiegsgehalt nach dem Abschluss beträgt rund 2.600 bis 2.670 €/Monat, der Median etwa 3.100 €, der Durchschnitt rund 3.388 € und über 3.700 € mit Erfahrung (Quelle: Aggregatoren mit Verweis auf den Entgeltatlas, 2025). Am Bau folgt die Bezahlung einem verbindlichen Branchenmindestlohn (Mindestlohn Bau, Facharbeiterstufe rund 17,34 €/Std. 2026, über dem allgemeinen Mindestlohn), und die Urlaubskasse SOKA-BAU gewährt 30 bezahlte Urlaubstage, ein echter Vorteil.",
          en: "In a SOKA-BAU tariff apprenticeship, pay is about 1,080 € (year 1), 1,300 € (year 2, west) and 1,550 € (year 3, west), a little less in the east (source: SOKA-BAU, 2025). The entry salary after the diploma is around 2,600 to 2,670 €/month, the median about 3,100 €, the average about 3,388 €, and over 3,700 € with experience (source: aggregators citing the Entgeltatlas, 2025). In construction, pay follows a binding sector minimum wage (Mindestlohn Bau, skilled level about 17.34 €/h in 2026, above the general minimum), and the SOKA-BAU holiday fund grants 30 paid holiday days, a real selling point.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans en alternance, entre l'entreprise et l'école professionnelle (Berufsschule), et se conclut par l'examen final de la chambre.",
          de: "Die Ausbildung dauert 3 Jahre im dualen System, zwischen Betrieb und Berufsschule, und endet mit der Abschlussprüfung der Kammer.",
          en: "Training lasts 3 years in the dual system, split between the company and the vocational school (Berufsschule), and ends with the chamber final exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les employeurs sont les entreprises de gros oeuvre (Hochbau), les promoteurs (Bauträger), ainsi que les grands groupes et le Mittelstand du bâtiment.",
          de: "Zu den Arbeitgebern zählen Hochbauunternehmen, Bauträger sowie große Konzerne und der Mittelstand der Baubranche.",
          en: "Employers are shell-construction firms (Hochbau), property developers (Bauträger), as well as large groups and the construction Mittelstand.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts : la maçonnerie est explicitement citée comme métier en pénurie par la Bundesagentur für Arbeit (source : Bundesagentur für Arbeit, 2024).",
          de: "Die Perspektiven sind sehr stark: Das Maurerhandwerk wird von der Bundesagentur für Arbeit ausdrücklich als Engpassberuf genannt (Quelle: Bundesagentur für Arbeit, 2024).",
          en: "Prospects are very strong: bricklaying is explicitly cited as a shortage occupation by the Federal Employment Agency (source: Federal Employment Agency, 2024).",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers chef d'équipe (Vorarbeiter), puis chef de chantier (Polier), passer un diplôme de Meister ou devenir technicien du bâtiment.",
          de: "Sie können sich zum Vorarbeiter, dann zum Polier weiterentwickeln, einen Meisterabschluss machen oder Bautechniker werden.",
          en: "You can progress to team leader (Vorarbeiter), then site foreman (Polier), earn a Meister qualification or become a building technician.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le chantier se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Berufsschule, Prüfung und Baustelle finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "The vocational school, the exam and the building site all take place in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Diplomanerkennung erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Nötig sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Sekundarschulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the diploma is recognised nationwide. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel als Fachkraft, um in Deutschland zu arbeiten. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once you graduate, you switch to a skilled worker permit to work in Germany. We check your eligibility and prepare the application with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, finden den Betrieb und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le travail est-il physique et en extérieur ?",
          de: "Ist die Arbeit körperlich und im Freien?",
          en: "Is the work physical and outdoors?",
        },
        a: {
          fr: "Oui, la maçonnerie est un métier physique qui s'exerce en grande partie en extérieur, sur les chantiers, par tous les temps.",
          de: "Ja, das Maurerhandwerk ist ein körperlicher Beruf, der überwiegend im Freien auf der Baustelle und bei jedem Wetter ausgeübt wird.",
          en: "Yes, bricklaying is a physical trade carried out largely outdoors, on site, in all weathers.",
        },
      },
      {
        q: {
          fr: "La maçonnerie mène-t-elle à chef de chantier ?",
          de: "Führt das Maurerhandwerk zum Polier?",
          en: "Does bricklaying lead to site foreman?",
        },
        a: {
          fr: "Oui, avec l'expérience et une qualification de Polier ou de Meister, vous pouvez accéder à la fonction de chef de chantier.",
          de: "Ja, mit Erfahrung und einer Qualifikation als Polier oder Meister können Sie die Funktion des Bauleiters übernehmen.",
          en: "Yes, with experience and a Polier or Meister qualification, you can move up to site foreman.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "anlagenmechaniker-shk": {
    slug: "anlagenmechaniker-shk",
    title: {
      fr: "Plombier-chauffagiste (Anlagenmechaniker SHK)",
      de: "Anlagenmechaniker SHK",
      en: "Plumbing and heating technician (Anlagenmechaniker SHK)",
    },
    intro: {
      fr: "Un métier au coeur de la transition énergétique, où l'on installe le confort et le chauffage de demain.",
      de: "Ein Beruf im Herzen der Energiewende, in dem der Komfort und die Heizung von morgen installiert werden.",
      en: "A profession at the heart of the energy transition, installing the comfort and heating of tomorrow.",
    },
    image: "anlagenmechaniker-shk",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le plombier-chauffagiste installe et entretient les systèmes sanitaires, de chauffage et de climatisation. Il travaille notamment sur les pompes à chaleur et le chauffage renouvelable.",
          de: "Der Anlagenmechaniker SHK installiert und wartet Sanitär-, Heizungs- und Klimasysteme. Er arbeitet insbesondere an Wärmepumpen und erneuerbaren Heizsystemen.",
          en: "The plumbing and heating technician installs and maintains sanitary, heating and air-conditioning systems. They work in particular on heat pumps and renewable heating.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage sous convention SHK-Handwerk, la rémunération est plus basse et variable, environ 680 à 1 175 €/mois selon le Land et la convention (source : ausbildung.de, 2025). Le salaire d'entrée après le diplôme est d'environ 2 840 €/mois, et la moyenne avec l'expérience d'environ 3 999 € (source : powerus, hero-software, 2025).",
          de: "In der Ausbildung nach SHK-Handwerkstarif ist die Vergütung niedriger und uneinheitlich, etwa 680 bis 1.175 €/Monat je nach Land und Tarif (Quelle: ausbildung.de, 2025). Das Einstiegsgehalt nach dem Abschluss beträgt rund 2.840 €/Monat, der Durchschnitt mit Erfahrung etwa 3.999 € (Quelle: powerus, hero-software, 2025).",
          en: "In an SHK trade apprenticeship, pay is lower and non-uniform, about 680 to 1,175 €/month depending on the federal state and the agreement (source: ausbildung.de, 2025). The entry salary after the diploma is around 2,840 €/month, and the average with experience about 3,999 € (source: powerus, hero-software, 2025).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans et demi en alternance, entre l'entreprise et l'école professionnelle (Berufsschule), et se conclut par l'examen de la chambre.",
          de: "Die Ausbildung dauert 3,5 Jahre im dualen System, zwischen Betrieb und Berufsschule, und endet mit der Prüfung der Kammer.",
          en: "Training lasts 3.5 years in the dual system, split between the company and the vocational school (Berufsschule), and ends with the chamber exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les employeurs sont les entreprises SHK et de chauffage, ainsi que les entreprises de génie climatique et de technique du bâtiment (TGA).",
          de: "Zu den Arbeitgebern zählen SHK- und Heizungsbetriebe sowie Unternehmen der Klima- und Gebäudetechnik (TGA).",
          en: "Employers are SHK and heating firms, as well as climate-control and building-services engineering companies (TGA).",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont extrêmement forts : c'est l'un des métiers les plus recherchés, porté par la transition énergétique et l'essor des pompes à chaleur.",
          de: "Die Perspektiven sind außergewöhnlich stark: Es ist einer der gefragtesten Berufe, getragen von der Energiewende und dem Aufschwung der Wärmepumpen.",
          en: "Prospects are extremely strong: it is one of the most sought-after trades, driven by the energy transition and the rise of heat pumps.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez passer un diplôme de Meister ou de technicien, évoluer vers chef d'équipe ou vous orienter vers le conseil en énergie.",
          de: "Sie können einen Meister- oder Technikerabschluss machen, sich zum Teamleiter entwickeln oder in die Energieberatung wechseln.",
          en: "You can earn a Meister or technician qualification, progress to team leader or move into energy consulting.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le chantier se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Berufsschule, Prüfung und Baustelle finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "The vocational school, the exam and the building site all take place in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Diplomanerkennung erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Nötig sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Sekundarschulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the diploma is recognised nationwide. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel als Fachkraft, um in Deutschland zu arbeiten. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once you graduate, you switch to a skilled worker permit to work in Germany. We check your eligibility and prepare the application with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, finden den Betrieb und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Ce métier est-il vraiment au coeur de la transition énergétique ?",
          de: "Steht dieser Beruf wirklich im Zentrum der Energiewende?",
          en: "Is this trade really at the heart of the energy transition?",
        },
        a: {
          fr: "Oui, l'installation des pompes à chaleur et du chauffage renouvelable place le plombier-chauffagiste au coeur de la transition énergétique allemande.",
          de: "Ja, die Installation von Wärmepumpen und erneuerbaren Heizsystemen stellt den Anlagenmechaniker SHK ins Zentrum der deutschen Energiewende.",
          en: "Yes, installing heat pumps and renewable heating puts the plumbing and heating technician at the heart of Germany's energy transition.",
        },
      },
      {
        q: {
          fr: "Ce métier suit-il la convention du bâtiment ?",
          de: "Folgt dieser Beruf dem Bautarif?",
          en: "Does this trade follow the construction tariff?",
        },
        a: {
          fr: "Non, il suit une convention d'artisanat SHK, distincte de la convention du bâtiment (Bau-Hauptgewerbe).",
          de: "Nein, er folgt einem SHK-Handwerkstarif, der sich vom Bautarif (Bau-Hauptgewerbe) unterscheidet.",
          en: "No, it follows an SHK trade agreement, separate from the construction tariff (Bau-Hauptgewerbe).",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "elektroniker-gebaeudetechnik": {
    slug: "elektroniker-gebaeudetechnik",
    title: {
      fr: "Électricien du bâtiment (Elektroniker für Energie- und Gebäudetechnik)",
      de: "Elektroniker für Energie- und Gebäudetechnik",
      en: "Building electrician (Elektroniker für Energie- und Gebäudetechnik)",
    },
    intro: {
      fr: "Un métier technique et porteur, qui électrifie les bâtiments intelligents et l'énergie de demain.",
      de: "Ein technischer Zukunftsberuf, der intelligente Gebäude und die Energie von morgen elektrifiziert.",
      en: "A technical, future-focused trade that electrifies smart buildings and tomorrow's energy.",
    },
    image: "elektroniker-gebaeudetechnik",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'électricien du bâtiment installe et entretient les systèmes électriques des bâtiments : tableaux de distribution, éclairage, bâtiment intelligent et installations photovoltaïques. Il assure la mise en service et le dépannage des installations.",
          de: "Der Elektroniker für Energie- und Gebäudetechnik installiert und wartet die elektrischen Anlagen von Gebäuden: Verteilerschränke, Beleuchtung, Smart-Building und Photovoltaikanlagen. Er übernimmt Inbetriebnahme und Störungsbehebung.",
          en: "The building electrician installs and maintains building electrical systems: distribution boards, lighting, smart-building and photovoltaic systems. They handle commissioning and fault-finding.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage sous convention Elektro-Handwerk, la rémunération est d'environ 850 à 1 300 €/mois selon le Land et la convention (source : ausbildung.de, 2025). Le salaire d'entrée après le diplôme est d'environ 2 700 €/mois, la moyenne d'environ 3 280 €, et jusqu'à environ 4 200 € avec une longue expérience (source : durchschnittsgehalt.com, 2025).",
          de: "In der Ausbildung nach Elektro-Handwerkstarif liegt die Vergütung bei etwa 850 bis 1.300 €/Monat je nach Land und Tarif (Quelle: ausbildung.de, 2025). Das Einstiegsgehalt nach dem Abschluss beträgt rund 2.700 €/Monat, der Durchschnitt etwa 3.280 € und bis zu rund 4.200 € mit langer Erfahrung (Quelle: durchschnittsgehalt.com, 2025).",
          en: "In an electrical trade apprenticeship, pay is about 850 to 1,300 €/month depending on the federal state and the agreement (source: ausbildung.de, 2025). The entry salary after the diploma is around 2,700 €/month, the average about 3,280 €, and up to around 4,200 € with long experience (source: durchschnittsgehalt.com, 2025).",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans et demi en alternance, entre l'entreprise et l'école professionnelle (Berufsschule), et se conclut par l'examen de la chambre.",
          de: "Die Ausbildung dauert 3,5 Jahre im dualen System, zwischen Betrieb und Berufsschule, und endet mit der Prüfung der Kammer.",
          en: "Training lasts 3.5 years in the dual system, split between the company and the vocational school (Berufsschule), and ends with the chamber exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les employeurs sont les entreprises d'installation électrique, de génie climatique (TGA), ainsi que les installateurs solaires et de bâtiment intelligent.",
          de: "Zu den Arbeitgebern zählen Elektroinstallationsbetriebe, Unternehmen der Gebäudetechnik (TGA) sowie Solar- und Smart-Building-Installateure.",
          en: "Employers are electrical installation firms, building-services engineering companies (TGA), as well as solar and smart-building installers.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts, portés par la transition énergétique et l'électrification croissante des bâtiments.",
          de: "Die Perspektiven sind sehr stark, getragen von der Energiewende und der zunehmenden Elektrifizierung der Gebäude.",
          en: "Prospects are very strong, driven by the energy transition and the growing electrification of buildings.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez passer un diplôme de Meister ou de technicien, ou vous spécialiser dans l'automatisation du bâtiment.",
          de: "Sie können einen Meister- oder Technikerabschluss machen oder sich auf Gebäudeautomation spezialisieren.",
          en: "You can earn a Meister or technician qualification, or specialise in building automation.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le chantier se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Berufsschule, Prüfung und Baustelle finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "The vocational school, the exam and the building site all take place in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Diplomanerkennung erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Nötig sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Sekundarschulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the diploma is recognised nationwide. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel als Fachkraft, um in Deutschland zu arbeiten. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once you graduate, you switch to a skilled worker permit to work in Germany. We check your eligibility and prepare the application with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, finden den Betrieb und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le métier est-il encadré par des règles de sécurité ?",
          de: "Ist der Beruf durch Sicherheitsvorschriften geregelt?",
          en: "Is the trade governed by safety rules?",
        },
        a: {
          fr: "Oui, le travail sur les installations électriques est strictement encadré par des règles de sécurité, apprises pendant la formation et respectées sur chaque chantier.",
          de: "Ja, die Arbeit an elektrischen Anlagen ist streng durch Sicherheitsvorschriften geregelt, die in der Ausbildung erlernt und auf jeder Baustelle eingehalten werden.",
          en: "Yes, work on electrical systems is strictly governed by safety rules, learned during training and observed on every site.",
        },
      },
      {
        q: {
          fr: "Quelle est la différence avec l'électricien industriel ?",
          de: "Was ist der Unterschied zum Industrieelektroniker?",
          en: "What is the difference from an industrial electrician?",
        },
        a: {
          fr: "Ici, le travail porte sur le bâtiment et la technique du bâtiment, alors que l'électricien industriel intervient sur les machines et les installations de production.",
          de: "Hier liegt der Schwerpunkt auf Gebäuden und Gebäudetechnik, während der Industrieelektroniker an Maschinen und Produktionsanlagen arbeitet.",
          en: "Here the focus is on buildings and building services, whereas the industrial electrician works on machines and production plant.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "zimmerer": {
    slug: "zimmerer",
    title: {
      fr: "Charpentier (Zimmerer)",
      de: "Zimmerer",
      en: "Carpenter (Zimmerer)",
    },
    intro: {
      fr: "Un métier noble du bois, qui bâtit les charpentes et les maisons durables d'aujourd'hui.",
      de: "Ein edler Holzberuf, der die Dachstühle und die nachhaltigen Häuser von heute baut.",
      en: "A noble timber trade that builds the frames and sustainable houses of today.",
    },
    image: "zimmerer",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le charpentier construit des ouvrages en bois : ossatures, charpentes, maisons à ossature bois, escaliers et construction bois. Il assemble et pose les structures sur le chantier.",
          de: "Der Zimmerer errichtet Holzbauwerke: Ständerwerke, Dachstühle, Holzrahmenhäuser, Treppen und Holzbau. Er fügt die Strukturen zusammen und setzt sie auf der Baustelle.",
          en: "The carpenter builds timber structures: frames, roof trusses, timber-frame houses, stairs and wood construction. They assemble and erect the structures on site.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage sous convention SOKA-BAU, la rémunération est d'environ 1 080 € (1re année), 1 300 € (2e) et 1 550 € (3e) par mois (source : SOKA-BAU, 2025). Le salaire d'entrée après le diplôme démarre à environ 2 960 €/mois et augmente avec l'expérience et la région (source : powerus, ulmato, 2025). Dans le bâtiment, la paie suit un salaire minimum de branche contraignant (Mindestlohn Bau, niveau qualifié d'environ 17,34 €/h en 2026, supérieur au minimum général), et la caisse de congés SOKA-BAU ouvre 30 jours de congés payés, un vrai atout.",
          de: "In der Ausbildung nach SOKA-BAU-Tarif liegt die Vergütung bei etwa 1.080 € (1. Jahr), 1.300 € (2. Jahr) und 1.550 € (3. Jahr) pro Monat (Quelle: SOKA-BAU, 2025). Das Einstiegsgehalt nach dem Abschluss beginnt bei rund 2.960 €/Monat und steigt mit Erfahrung und Region (Quelle: powerus, ulmato, 2025). Am Bau folgt die Bezahlung einem verbindlichen Branchenmindestlohn (Mindestlohn Bau, Facharbeiterstufe rund 17,34 €/Std. 2026, über dem allgemeinen Mindestlohn), und die Urlaubskasse SOKA-BAU gewährt 30 bezahlte Urlaubstage, ein echter Vorteil.",
          en: "In a SOKA-BAU tariff apprenticeship, pay is about 1,080 € (year 1), 1,300 € (year 2) and 1,550 € (year 3) per month (source: SOKA-BAU, 2025). The entry salary after the diploma starts at around 2,960 €/month and rises with experience and region (source: powerus, ulmato, 2025). In construction, pay follows a binding sector minimum wage (Mindestlohn Bau, skilled level about 17.34 €/h in 2026, above the general minimum), and the SOKA-BAU holiday fund grants 30 paid holiday days, a real selling point.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans en alternance, entre l'entreprise et l'école professionnelle (Berufsschule), et se conclut par l'examen de la chambre.",
          de: "Die Ausbildung dauert 3 Jahre im dualen System, zwischen Betrieb und Berufsschule, und endet mit der Prüfung der Kammer.",
          en: "Training lasts 3 years in the dual system, split between the company and the vocational school (Berufsschule), and ends with the chamber exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les employeurs sont les entreprises de charpente et de construction bois (Holzbau), de couverture, ainsi que les fabricants de maisons préfabriquées en bois.",
          de: "Zu den Arbeitgebern zählen Zimmerei- und Holzbaubetriebe, Dachdeckerbetriebe sowie Hersteller von Holzfertighäusern.",
          en: "Employers are carpentry and timber-construction firms (Holzbau), roofing companies, as well as prefabricated timber house manufacturers.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts, portés par la croissance de la construction bois.",
          de: "Die Perspektiven sind stark, getragen vom Wachstum des Holzbaus.",
          en: "Prospects are strong, driven by the growth of timber construction.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers chef d'équipe, puis Polier, passer un diplôme de Meister ou devenir technicien en construction bois.",
          de: "Sie können sich zum Teamleiter, dann zum Polier weiterentwickeln, einen Meisterabschluss machen oder Techniker im Holzbau werden.",
          en: "You can progress to team leader, then Polier, earn a Meister qualification or become a timber-construction technician.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le chantier se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Berufsschule, Prüfung und Baustelle finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "The vocational school, the exam and the building site all take place in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Diplomanerkennung erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Nötig sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Sekundarschulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the diploma is recognised nationwide. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel als Fachkraft, um in Deutschland zu arbeiten. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once you graduate, you switch to a skilled worker permit to work in Germany. We check your eligibility and prepare the application with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, finden den Betrieb und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le travail se fait-il en hauteur et sur charpente ?",
          de: "Wird in der Höhe und am Dachstuhl gearbeitet?",
          en: "Is the work done at height and on frames?",
        },
        a: {
          fr: "Oui, le charpentier travaille souvent en hauteur, sur les charpentes et les toitures, avec les équipements de sécurité appris pendant la formation.",
          de: "Ja, der Zimmerer arbeitet oft in der Höhe, am Dachstuhl und auf dem Dach, mit der in der Ausbildung erlernten Sicherheitsausrüstung.",
          en: "Yes, the carpenter often works at height, on frames and roofs, using the safety equipment learned during training.",
        },
      },
      {
        q: {
          fr: "La construction bois est-elle en croissance ?",
          de: "Wächst der Holzbau?",
          en: "Is timber construction growing?",
        },
        a: {
          fr: "Oui, la construction bois est en croissance et soutient une forte demande de charpentiers qualifiés.",
          de: "Ja, der Holzbau wächst und trägt eine starke Nachfrage nach qualifizierten Zimmerern.",
          en: "Yes, timber construction is growing and underpins strong demand for skilled carpenters.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "stahlbetonbauer": {
    slug: "stahlbetonbauer",
    title: {
      fr: "Constructeur béton armé (Beton- und Stahlbetonbauer)",
      de: "Beton- und Stahlbetonbauer",
      en: "Reinforced-concrete builder (Beton- und Stahlbetonbauer)",
    },
    intro: {
      fr: "Un métier clé du gros oeuvre, qui coule les fondations des bâtiments et des ouvrages d'art.",
      de: "Ein Schlüsselberuf des Rohbaus, der die Fundamente von Gebäuden und Ingenieurbauwerken gießt.",
      en: "A key shell-construction trade that pours the foundations of buildings and civil-engineering works.",
    },
    image: "stahlbetonbauer",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le constructeur béton armé, aussi appelé coffreur-bancheur, réalise des ouvrages en béton armé : coffrage, ferraillage et bétonnage pour les bâtiments, les ponts et les ouvrages de génie civil. Il travaille avec précision, du coffrage jusqu'au coulage.",
          de: "Der Beton- und Stahlbetonbauer errichtet Stahlbetonbauwerke: Schalung, Bewehrung und Betonieren für Gebäude, Brücken und Ingenieurbauwerke. Er arbeitet präzise, von der Schalung bis zum Betonieren.",
          en: "The reinforced-concrete builder, also known as a formworker, builds reinforced-concrete structures: formwork, reinforcement and concreting for buildings, bridges and civil-engineering works. They work with precision, from formwork to pouring.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage sous convention SOKA-BAU, la rémunération est d'environ 1 080 € (1re année), 1 300 € (2e) et 1 550 € (3e) par mois (source : SOKA-BAU, 2025). Le salaire d'entrée après le diplôme est d'environ 2 690 à 2 780 €/mois, et la moyenne avec l'expérience d'environ 3 306 € (source : aubi-plus, meingehalt.net, 2025). Dans le bâtiment, la paie suit un salaire minimum de branche contraignant (Mindestlohn Bau, niveau qualifié d'environ 17,34 €/h en 2026, supérieur au minimum général), et la caisse de congés SOKA-BAU ouvre 30 jours de congés payés, un vrai atout.",
          de: "In der Ausbildung nach SOKA-BAU-Tarif liegt die Vergütung bei etwa 1.080 € (1. Jahr), 1.300 € (2. Jahr) und 1.550 € (3. Jahr) pro Monat (Quelle: SOKA-BAU, 2025). Das Einstiegsgehalt nach dem Abschluss beträgt rund 2.690 bis 2.780 €/Monat, der Durchschnitt mit Erfahrung etwa 3.306 € (Quelle: aubi-plus, meingehalt.net, 2025). Am Bau folgt die Bezahlung einem verbindlichen Branchenmindestlohn (Mindestlohn Bau, Facharbeiterstufe rund 17,34 €/Std. 2026, über dem allgemeinen Mindestlohn), und die Urlaubskasse SOKA-BAU gewährt 30 bezahlte Urlaubstage, ein echter Vorteil.",
          en: "In a SOKA-BAU tariff apprenticeship, pay is about 1,080 € (year 1), 1,300 € (year 2) and 1,550 € (year 3) per month (source: SOKA-BAU, 2025). The entry salary after the diploma is around 2,690 to 2,780 €/month, and the average with experience about 3,306 € (source: aubi-plus, meingehalt.net, 2025). In construction, pay follows a binding sector minimum wage (Mindestlohn Bau, skilled level about 17.34 €/h in 2026, above the general minimum), and the SOKA-BAU holiday fund grants 30 paid holiday days, a real selling point.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3 ans en alternance, entre l'entreprise et l'école professionnelle (Berufsschule), et se conclut par l'examen de la chambre.",
          de: "Die Ausbildung dauert 3 Jahre im dualen System, zwischen Betrieb und Berufsschule, und endet mit der Prüfung der Kammer.",
          en: "Training lasts 3 years in the dual system, split between the company and the vocational school (Berufsschule), and ends with the chamber exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les employeurs sont les entreprises de gros oeuvre et de génie civil (Rohbau, Ingenieurbau), les entreprises d'ouvrages d'art (ponts, tunnels) et les grands entrepreneurs du bâtiment.",
          de: "Zu den Arbeitgebern zählen Rohbau- und Ingenieurbauunternehmen, Betriebe für Ingenieurbauwerke (Brücken, Tunnel) sowie große Bauunternehmer.",
          en: "Employers are shell-construction and civil-engineering firms (Rohbau, Ingenieurbau), companies building structures such as bridges and tunnels, and large contractors.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts : c'est un métier clé du gros oeuvre au sein d'un secteur du bâtiment en tension.",
          de: "Die Perspektiven sind stark: Es ist ein Schlüsselberuf des Rohbaus in einer angespannten Baubranche.",
          en: "Prospects are strong: it is a key shell-construction trade within a construction sector under pressure.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez vous spécialiser dans le coffrage, évoluer vers chef d'équipe, puis Polier, et passer un diplôme de Meister.",
          de: "Sie können sich auf die Schalung spezialisieren, sich zum Teamleiter, dann zum Polier weiterentwickeln und einen Meisterabschluss machen.",
          en: "You can specialise in formwork, progress to team leader, then Polier, and earn a Meister qualification.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et le chantier se déroulent en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Berufsschule, Prüfung und Baustelle finden auf Deutsch statt. B2 ist der von den Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "The vocational school, the exam and the building site all take place in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Diplomanerkennung erforderlich: Sie werden direkt in Deutschland ausgebildet, und der Abschluss ist bundesweit anerkannt. Nötig sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Sekundarschulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the diploma is recognised nationwide. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "L'entrée se fait avec le visa de formation professionnelle (Ausbildung). À l'issue du diplôme, vous basculez vers un titre de travailleur qualifié pour exercer en Allemagne. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Einreise erfolgt mit dem Visum zur Berufsausbildung (Ausbildung). Nach dem Abschluss wechseln Sie zu einem Aufenthaltstitel als Fachkraft, um in Deutschland zu arbeiten. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "Entry is via the vocational training visa (Ausbildung). Once you graduate, you switch to a skilled worker permit to work in Germany. We check your eligibility and prepare the application with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau requis, trouvons l'entreprise et le contrat d'Ausbildung, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, finden den Betrieb und den Ausbildungsvertrag, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, find the company and the Ausbildung contract, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le travail est-il physique et de précision ?",
          de: "Ist die Arbeit körperlich und präzise?",
          en: "Is the work physical and precise?",
        },
        a: {
          fr: "Oui, c'est un métier à la fois physique et de précision : le coffrage et le ferraillage demandent rigueur et mesures exactes.",
          de: "Ja, es ist ein zugleich körperlicher und präziser Beruf: Schalung und Bewehrung verlangen Sorgfalt und genaue Maße.",
          en: "Yes, it is both physical and precise: formwork and reinforcement require rigour and exact measurements.",
        },
      },
      {
        q: {
          fr: "Quels secteurs recrutent ?",
          de: "Welche Bereiche stellen ein?",
          en: "Which sectors are hiring?",
        },
        a: {
          fr: "Le bâtiment, les ouvrages d'art (ponts, tunnels) et le génie civil recrutent des constructeurs béton armé.",
          de: "Der Hochbau, die Ingenieurbauwerke (Brücken, Tunnel) und der Tiefbau stellen Beton- und Stahlbetonbauer ein.",
          en: "Building, structural works (bridges, tunnels) and civil engineering are hiring reinforced-concrete builders.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
