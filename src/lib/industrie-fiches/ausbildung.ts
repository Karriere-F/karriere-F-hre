// Ausbildung-path Industrie fiches (train in Germany). Populated from verified
// public German data; see industrie-fiche-types.ts for the shape and SALARY_NOTE.

import type { IndustrieFiche } from "../industrie-fiche-types";
import { SALARY_NOTE } from "../industrie-fiche-types";

export const IND_FICHES_AUSBILDUNG: Record<string, IndustrieFiche> = {
  "mechatroniker": {
    slug: "mechatroniker",
    title: {
      fr: "Mécatronicien (Mechatroniker)",
      de: "Mechatroniker",
      en: "Mechatronics technician (Mechatroniker)",
    },
    intro: {
      fr: "Un métier d'avenir au coeur de l'industrie allemande, où la mécanique, l'électronique et l'automatisation se rejoignent.",
      de: "Ein Zukunftsberuf im Herzen der deutschen Industrie, in dem Mechanik, Elektronik und Automatisierung zusammenkommen.",
      en: "A future-focused profession at the heart of German industry, where mechanics, electronics and automation come together.",
    },
    image: "mechatroniker",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le mécatronicien assemble, câble et met en service des systèmes mécatroniques qui combinent mécanique, électronique et commande ou automatisation. Il assure aussi la maintenance des lignes de production automatisées.",
          de: "Der Mechatroniker baut, verdrahtet und nimmt mechatronische Systeme in Betrieb, die Mechanik, Elektronik und Steuerung oder Automatisierung verbinden. Er wartet außerdem automatisierte Produktionslinien.",
          en: "The mechatronics technician assembles, wires and commissions mechatronic systems that combine mechanics, electronics and control or automation. They also maintain automated production lines.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage sous convention M+E, la rémunération est d'environ 1 270 à 1 690 €/mois selon l'année et la région (minimum légal 682/805/921/955 €). Le salaire d'entrée après le diplôme est d'environ 3 320 €/mois et le salaire médian, tous niveaux d'expérience confondus, d'environ 4 105 €/mois (quartiles 3 407 à 4 922 €) (source : Entgeltatlas, Bundesagentur für Arbeit, 2025). Dans les entreprises M+E, la convention IG Metall ajoute prime de congés, prime de Noël et primes d'équipe sur une semaine de 35 heures.",
          de: "In der Ausbildung nach M+E-Tarif liegt die Vergütung bei etwa 1.270 bis 1.690 €/Monat je nach Jahr und Region (gesetzlicher Mindestwert 682/805/921/955 €). Das Einstiegsgehalt nach dem Abschluss beträgt rund 3.320 €/Monat, der Median über alle Erfahrungsstufen etwa 4.105 €/Monat (Quartile 3.407 bis 4.922 €) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025). In M+E-Betrieben ergänzt der IG-Metall-Tarif Urlaubsgeld, Weihnachtsgeld und Schichtzulagen bei einer 35-Stunden-Woche.",
          en: "In an M+E tariff apprenticeship, pay is around 1,270 to 1,690 €/month depending on the year and region (statutory minimum 682/805/921/955 €). The entry salary after the diploma is about 3,320 €/month, and the median across all experience levels about 4,105 €/month (quartiles 3,407 to 4,922 €) (source: Entgeltatlas, Federal Employment Agency, 2025). In M+E firms, the IG Metall tariff adds holiday pay, Christmas pay and shift bonuses on a 35-hour week.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3,5 ans en alternance, entre l'entreprise et l'école professionnelle (Berufsschule), et se conclut par l'examen de la chambre (IHK).",
          de: "Die Ausbildung dauert 3,5 Jahre im dualen System, zwischen Betrieb und Berufsschule, und endet mit der IHK-Abschlussprüfung.",
          en: "Training lasts 3.5 years in the dual system, split between the company and the vocational school (Berufsschule), and ends with the chamber (IHK) final exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Parmi les employeurs : RWE, TK Elevator (thyssenkrupp), Bosch, Siemens, BMW, Volkswagen, Continental et ZF.",
          de: "Zu den Arbeitgebern zählen RWE, TK Elevator (thyssenkrupp), Bosch, Siemens, BMW, Volkswagen, Continental und ZF.",
          en: "Employers include RWE, TK Elevator (thyssenkrupp), Bosch, Siemens, BMW, Volkswagen, Continental and ZF.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts : la mécatronique est un métier en tension reconnu en Allemagne (source : Bundesagentur für Arbeit, 2025).",
          de: "Die Perspektiven sind stark: Die Mechatronik ist ein in Deutschland anerkannter Engpassberuf (Quelle: Bundesagentur für Arbeit, 2025).",
          en: "Prospects are strong: mechatronics is a recognised shortage occupation in Germany (source: Federal Employment Agency, 2025).",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez vous spécialiser (automatisation, robotique), passer un diplôme de Techniker ou de Meister, puis évoluer vers un poste de chef d'équipe.",
          de: "Sie können sich spezialisieren (Automatisierung, Robotik), einen Techniker- oder Meisterabschluss machen und sich zum Teamleiter weiterentwickeln.",
          en: "You can specialise (automation, robotics), earn a Techniker or Meister qualification, and progress to a team leader role.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et l'atelier se déroulent en allemand. Le niveau B2 est la norme pour réussir ; c'est celui que nous visons dans notre formation linguistique.",
          de: "Berufsschule, Prüfung und Werkstatt finden auf Deutsch statt. Das Niveau B2 ist der Standard für den Erfolg; genau dieses Niveau streben wir in unserer Sprachausbildung an.",
          en: "The vocational school, the exam and the workshop all take place in German. Level B2 is the standard for success, and that is the level we aim for in our language training.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme de la chambre (IHK) est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Diplomanerkennung erforderlich: Sie werden direkt in Deutschland ausgebildet, und der IHK-Abschluss ist bundesweit anerkannt. Nötig sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Sekundarschulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the chamber (IHK) diploma is recognised nationwide. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
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
          fr: "Quelle est la différence avec l'électronicien ?",
          de: "Was ist der Unterschied zum Elektroniker?",
          en: "What is the difference from an electronics technician?",
        },
        a: {
          fr: "Le mécatronicien couvre à la fois la mécanique, l'électronique et les automatismes, alors que l'électronicien se concentre sur la partie électrique et électronique.",
          de: "Der Mechatroniker deckt Mechanik, Elektronik und Automatisierung zugleich ab, während der Elektroniker sich auf den elektrischen und elektronischen Teil konzentriert.",
          en: "The mechatronics technician covers mechanics, electronics and automation at once, whereas the electronics technician focuses on the electrical and electronic side.",
        },
      },
      {
        q: {
          fr: "Faut-il un bac technique ?",
          de: "Braucht man ein technisches Abitur?",
          en: "Do I need a technical secondary diploma?",
        },
        a: {
          fr: "Un parcours technique est utile mais pas indispensable : l'entreprise et l'école professionnelle vous forment au métier.",
          de: "Ein technischer Hintergrund ist hilfreich, aber nicht zwingend: Betrieb und Berufsschule bilden Sie im Beruf aus.",
          en: "A technical background is useful but not essential: the company and the vocational school train you for the job.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "industriemechaniker": {
    slug: "industriemechaniker",
    title: {
      fr: "Mécanicien industriel (Industriemechaniker)",
      de: "Industriemechaniker",
      en: "Industrial mechanic (Industriemechaniker)",
    },
    intro: {
      fr: "Un métier industriel de base, solide et recherché, pour celles et ceux qui aiment faire tourner les machines.",
      de: "Ein solider, gefragter industrieller Grundberuf für alle, die Maschinen am Laufen halten wollen.",
      en: "A solid, sought-after core industrial trade for those who like to keep machines running.",
    },
    image: "industriemechaniker",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le mécanicien industriel fabrique, assemble et entretient des machines et des équipements de production. Il règle, répare et maintient les installations en état de marche.",
          de: "Der Industriemechaniker fertigt, montiert und wartet Maschinen und Produktionsanlagen. Er stellt ein, repariert und hält die Anlagen betriebsbereit.",
          en: "The industrial mechanic manufactures, assembles and maintains machines and production equipment. They adjust, repair and keep plant running.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage M+E, la rémunération est d'environ 1 270 à 1 690 €/mois (minimum légal 682/805/921/955 €). Le salaire d'entrée est d'environ 2 000 à 2 600 €/mois et le salaire médian, tous niveaux d'expérience confondus, d'environ 4 060 à 4 220 €/mois (quartiles 3 572 à 4 977 €, plus élevé à Brême environ 4 442 €, plus bas en Saxe environ 3 148 €) (source : Entgeltatlas, Bundesagentur für Arbeit, 2025). Dans les entreprises M+E, la convention IG Metall ajoute prime de congés, prime de Noël et primes d'équipe sur une semaine de 35 heures.",
          de: "In der M+E-Ausbildung liegt die Vergütung bei etwa 1.270 bis 1.690 €/Monat (gesetzlicher Mindestwert 682/805/921/955 €). Das Einstiegsgehalt beträgt rund 2.000 bis 2.600 €/Monat, der Median über alle Erfahrungsstufen etwa 4.060 bis 4.220 €/Monat (Quartile 3.572 bis 4.977 €, höher in Bremen rund 4.442 €, niedriger in Sachsen rund 3.148 €) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025). In M+E-Betrieben ergänzt der IG-Metall-Tarif Urlaubsgeld, Weihnachtsgeld und Schichtzulagen bei einer 35-Stunden-Woche.",
          en: "In an M+E apprenticeship, pay is around 1,270 to 1,690 €/month (statutory minimum 682/805/921/955 €). The entry salary is about 2,000 to 2,600 €/month, and the median across all experience levels about 4,060 to 4,220 €/month (quartiles 3,572 to 4,977 €, higher in Bremen around 4,442 €, lower in Saxony around 3,148 €) (source: Entgeltatlas, Federal Employment Agency, 2025). In M+E firms, the IG Metall tariff adds holiday pay, Christmas pay and shift bonuses on a 35-hour week.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3,5 ans en alternance, entre l'entreprise et l'école professionnelle, et se conclut par l'examen de la chambre (IHK).",
          de: "Die Ausbildung dauert 3,5 Jahre im dualen System, zwischen Betrieb und Berufsschule, und endet mit der IHK-Abschlussprüfung.",
          en: "Training lasts 3.5 years in the dual system, between the company and the vocational school, and ends with the chamber (IHK) final exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Parmi les employeurs : Siemens, Bosch, Daimler Truck, MAN, thyssenkrupp, Krones, ainsi que le Mittelstand de la construction mécanique.",
          de: "Zu den Arbeitgebern zählen Siemens, Bosch, Daimler Truck, MAN, thyssenkrupp, Krones sowie der Mittelstand des Maschinenbaus.",
          en: "Employers include Siemens, Bosch, Daimler Truck, MAN, thyssenkrupp, Krones, as well as the mechanical engineering Mittelstand.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts : c'est un métier industriel de base marqué par une pénurie durable dans la construction mécanique.",
          de: "Die Perspektiven sind stark: ein industrieller Grundberuf mit anhaltendem Fachkräftemangel im Maschinenbau.",
          en: "Prospects are strong: a core industrial trade with a lasting shortage in mechanical engineering.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers la maintenance, passer un diplôme de Techniker ou de Meister, puis prendre la conduite d'une équipe.",
          de: "Sie können in die Instandhaltung wechseln, einen Techniker- oder Meisterabschluss machen und die Leitung eines Teams übernehmen.",
          en: "You can move into maintenance, earn a Techniker or Meister qualification, and take on team leadership.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et l'atelier se déroulent en allemand. Le niveau B2 est la norme pour réussir ; c'est celui que nous visons dans notre formation linguistique.",
          de: "Berufsschule, Prüfung und Werkstatt finden auf Deutsch statt. Das Niveau B2 ist der Standard für den Erfolg; genau dieses Niveau streben wir in unserer Sprachausbildung an.",
          en: "The vocational school, the exam and the workshop all take place in German. Level B2 is the standard for success, and that is the level we aim for in our language training.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme de la chambre (IHK) est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Diplomanerkennung erforderlich: Sie werden direkt in Deutschland ausgebildet, und der IHK-Abschluss ist bundesweit anerkannt. Nötig sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Sekundarschulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the chamber (IHK) diploma is recognised nationwide. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
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
          fr: "Travaille-t-on en atelier ou sur ligne de production ?",
          de: "Arbeitet man in der Werkstatt oder an der Produktionslinie?",
          en: "Do you work in the workshop or on the production line?",
        },
        a: {
          fr: "Les deux : selon l'entreprise, vous travaillez en atelier de fabrication comme sur les lignes de production à entretenir.",
          de: "Beides: je nach Betrieb arbeiten Sie sowohl in der Fertigungswerkstatt als auch an den zu wartenden Produktionslinien.",
          en: "Both: depending on the company, you work in the manufacturing workshop as well as on the production lines to be maintained.",
        },
      },
      {
        q: {
          fr: "Le métier demande-t-il de la force et de la précision ?",
          de: "Erfordert der Beruf Kraft und Präzision?",
          en: "Does the job require strength and precision?",
        },
        a: {
          fr: "Oui, il combine le port de charges et un travail précis sur les machines ; la formation vous prépare aux deux.",
          de: "Ja, er verbindet das Heben von Lasten mit präziser Arbeit an den Maschinen; die Ausbildung bereitet Sie auf beides vor.",
          en: "Yes, it combines lifting loads with precise work on machines; the training prepares you for both.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "zerspanungsmechaniker": {
    slug: "zerspanungsmechaniker",
    title: {
      fr: "Usineur CNC (Zerspanungsmechaniker)",
      de: "Zerspanungsmechaniker",
      en: "CNC machining technician (Zerspanungsmechaniker)",
    },
    intro: {
      fr: "Un métier de précision au coeur de la mécanique allemande, où chaque pièce se mesure au centième.",
      de: "Ein Präzisionsberuf im Kern der deutschen Mechanik, in dem jedes Teil auf den Hundertstel genau gefertigt wird.",
      en: "A precision trade at the core of German engineering, where every part is measured to a hundredth of a millimetre.",
    },
    image: "zerspanungsmechaniker",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'usineur CNC produit des pièces métalliques de précision par tournage, fraisage, perçage et rectification sur machines conventionnelles et à commande numérique. Il programme et règle les machines CNC.",
          de: "Der Zerspanungsmechaniker fertigt Präzisionsmetallteile durch Drehen, Fräsen, Bohren und Schleifen an konventionellen und CNC-Maschinen. Er programmiert und rüstet die CNC-Maschinen.",
          en: "The CNC machining technician produces precision metal parts by turning, milling, drilling and grinding on conventional and CNC machines. They program and set up the CNC machines.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage, la rémunération est d'environ 1 240 à 1 560 €/mois sous convention (moins hors convention ; minimum légal 682/805/921/955 €). Le salaire d'entrée est d'environ 2 580 €/mois (environ 31 000 €/an) et le salaire médian, tous niveaux d'expérience confondus, d'environ 4 000 €/mois (variante rectification environ 3 902 €) (source : Entgeltatlas, Bundesagentur für Arbeit, 2025). Dans les entreprises M+E, la convention IG Metall ajoute prime de congés, prime de Noël et primes d'équipe sur une semaine de 35 heures.",
          de: "In der Ausbildung liegt die Vergütung bei etwa 1.240 bis 1.560 €/Monat nach Tarif (weniger ohne Tarif; gesetzlicher Mindestwert 682/805/921/955 €). Das Einstiegsgehalt beträgt rund 2.580 €/Monat (etwa 31.000 €/Jahr), der Median über alle Erfahrungsstufen etwa 4.000 €/Monat (Variante Schleifen rund 3.902 €) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025). In M+E-Betrieben ergänzt der IG-Metall-Tarif Urlaubsgeld, Weihnachtsgeld und Schichtzulagen bei einer 35-Stunden-Woche.",
          en: "In an apprenticeship, pay is around 1,240 to 1,560 €/month under tariff (less without tariff; statutory minimum 682/805/921/955 €). The entry salary is about 2,580 €/month (roughly 31,000 €/year), and the median across all experience levels about 4,000 €/month (grinding variant around 3,902 €) (source: Entgeltatlas, Federal Employment Agency, 2025). In M+E firms, the IG Metall tariff adds holiday pay, Christmas pay and shift bonuses on a 35-hour week.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3,5 ans en alternance, entre l'entreprise et l'école professionnelle, et se conclut par l'examen de la chambre (IHK).",
          de: "Die Ausbildung dauert 3,5 Jahre im dualen System, zwischen Betrieb und Berufsschule, und endet mit der IHK-Abschlussprüfung.",
          en: "Training lasts 3.5 years in the dual system, between the company and the vocational school, and ends with the chamber (IHK) final exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Parmi les employeurs : Bosch, ZF, Trumpf, DMG Mori, ainsi que de nombreux ateliers d'usinage (Lohnfertiger) du Mittelstand.",
          de: "Zu den Arbeitgebern zählen Bosch, ZF, Trumpf, DMG Mori sowie zahlreiche Lohnfertiger des Mittelstands.",
          en: "Employers include Bosch, ZF, Trumpf, DMG Mori, as well as many machining workshops (Lohnfertiger) in the Mittelstand.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande est forte et durable. À noter : ce métier ne figure plus sur la liste officielle des métiers en pénurie certifiés depuis 2024, on parle donc de forte demande plutôt que de pénurie certifiée.",
          de: "Die Nachfrage ist stark und dauerhaft. Hinweis: Dieser Beruf steht seit 2024 nicht mehr auf der offiziellen Liste der zertifizierten Engpassberufe, daher spricht man von hoher Nachfrage statt von zertifiziertem Mangel.",
          en: "Demand is strong and lasting. Note: this occupation has no longer been on the official list of certified shortage occupations since 2024, so we speak of high demand rather than certified shortage.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez vous orienter vers la programmation CNC, passer un diplôme de Techniker ou de Meister, ou évoluer vers le contrôle qualité.",
          de: "Sie können sich zur CNC-Programmierung orientieren, einen Techniker- oder Meisterabschluss machen oder in die Qualitätskontrolle wechseln.",
          en: "You can move towards CNC programming, earn a Techniker or Meister qualification, or progress into quality control.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et l'atelier se déroulent en allemand. Le niveau B2 est la norme pour réussir ; c'est celui que nous visons dans notre formation linguistique.",
          de: "Berufsschule, Prüfung und Werkstatt finden auf Deutsch statt. Das Niveau B2 ist der Standard für den Erfolg; genau dieses Niveau streben wir in unserer Sprachausbildung an.",
          en: "The vocational school, the exam and the workshop all take place in German. Level B2 is the standard for success, and that is the level we aim for in our language training.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme de la chambre (IHK) est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Diplomanerkennung erforderlich: Sie werden direkt in Deutschland ausgebildet, und der IHK-Abschluss ist bundesweit anerkannt. Nötig sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Sekundarschulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the chamber (IHK) diploma is recognised nationwide. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
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
          fr: "Faut-il déjà savoir programmer une CNC ?",
          de: "Muss man bereits eine CNC programmieren können?",
          en: "Do I already need to know how to program a CNC?",
        },
        a: {
          fr: "Non : la programmation des machines CNC est apprise pendant la formation.",
          de: "Nein: Die Programmierung der CNC-Maschinen wird während der Ausbildung erlernt.",
          en: "No: programming CNC machines is learned during the training.",
        },
      },
      {
        q: {
          fr: "Quelles qualités sont importantes ?",
          de: "Welche Fähigkeiten sind wichtig?",
          en: "Which skills matter?",
        },
        a: {
          fr: "La précision et la lecture de plans sont essentielles, car les pièces se mesurent au centième de millimètre.",
          de: "Präzision und das Lesen technischer Zeichnungen sind entscheidend, da die Teile auf den Hundertstelmillimeter genau gefertigt werden.",
          en: "Precision and reading technical drawings are essential, as parts are measured to a hundredth of a millimetre.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "elektroniker-betriebstechnik": {
    slug: "elektroniker-betriebstechnik",
    title: {
      fr: "Électronicien de maintenance industrielle (Elektroniker für Betriebstechnik)",
      de: "Elektroniker für Betriebstechnik",
      en: "Industrial maintenance electronics technician (Elektroniker für Betriebstechnik)",
    },
    intro: {
      fr: "Un métier très recherché, porté par la transition énergétique, pour celles et ceux qui font vivre l'électricité industrielle.",
      de: "Ein sehr gefragter Beruf, getragen von der Energiewende, für alle, die die industrielle Elektrotechnik am Leben halten.",
      en: "A highly sought-after profession, driven by the energy transition, for those who keep industrial electricity alive.",
    },
    image: "elektroniker-betriebstechnik",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'électronicien de maintenance industrielle installe, câble, met en service et entretient les systèmes électriques industriels, les armoires de commande, les entraînements et l'automatisation. Il garantit la sécurité électrique des installations.",
          de: "Der Elektroniker für Betriebstechnik installiert, verdrahtet, nimmt in Betrieb und wartet industrielle Elektroanlagen, Schaltschränke, Antriebe und Automatisierung. Er sichert die elektrische Sicherheit der Anlagen.",
          en: "The industrial maintenance electronics technician installs, wires, commissions and maintains industrial electrical systems, control cabinets, drives and automation. They ensure the electrical safety of the plant.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage, la rémunération est d'environ 880 à 1 542 €/mois selon le secteur et la convention (minimum légal 682/805/921/955 €). Le salaire d'entrée est d'environ 2 880 à 3 600 €/mois (souvent environ 3 200 €) et le salaire médian, tous niveaux d'expérience confondus, d'environ 4 137 €/mois (plus élevé en Basse-Saxe, Bade-Wurtemberg et Hesse, environ 4 200 à 4 433 €, plus bas en Thuringe environ 3 248 €) (source : Entgeltatlas, Bundesagentur für Arbeit, 2025). Dans les entreprises M+E, la convention IG Metall ajoute prime de congés, prime de Noël et primes d'équipe sur une semaine de 35 heures.",
          de: "In der Ausbildung liegt die Vergütung bei etwa 880 bis 1.542 €/Monat je nach Branche und Tarif (gesetzlicher Mindestwert 682/805/921/955 €). Das Einstiegsgehalt beträgt rund 2.880 bis 3.600 €/Monat (oft etwa 3.200 €), der Median über alle Erfahrungsstufen etwa 4.137 €/Monat (höher in Niedersachsen, Baden-Württemberg und Hessen, rund 4.200 bis 4.433 €, niedriger in Thüringen rund 3.248 €) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025). In M+E-Betrieben ergänzt der IG-Metall-Tarif Urlaubsgeld, Weihnachtsgeld und Schichtzulagen bei einer 35-Stunden-Woche.",
          en: "In an apprenticeship, pay is around 880 to 1,542 €/month depending on the sector and tariff (statutory minimum 682/805/921/955 €). The entry salary is about 2,880 to 3,600 €/month (often around 3,200 €), and the median across all experience levels about 4,137 €/month (higher in Lower Saxony, Baden-Württemberg and Hesse, around 4,200 to 4,433 €, lower in Thuringia around 3,248 €) (source: Entgeltatlas, Federal Employment Agency, 2025). In M+E firms, the IG Metall tariff adds holiday pay, Christmas pay and shift bonuses on a 35-hour week.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3,5 ans en alternance, entre l'entreprise et l'école professionnelle, et se conclut par l'examen de la chambre (IHK).",
          de: "Die Ausbildung dauert 3,5 Jahre im dualen System, zwischen Betrieb und Berufsschule, und endet mit der IHK-Abschlussprüfung.",
          en: "Training lasts 3.5 years in the dual system, between the company and the vocational school, and ends with the chamber (IHK) final exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Parmi les employeurs : RWE, Siemens, BASF et les parcs chimiques, les usines automobiles, les opérateurs de maintenance et les énergéticiens.",
          de: "Zu den Arbeitgebern zählen RWE, Siemens, BASF und die Chemieparks, Automobilwerke, Instandhaltungsdienstleister und Energieversorger.",
          en: "Employers include RWE, Siemens, BASF and the chemical parks, car plants, maintenance operators and energy utilities.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts : les métiers de l'électricité comptent parmi les plus recherchés, renforcés par la transition énergétique.",
          de: "Die Perspektiven sind sehr stark: Elektroberufe gehören zu den gefragtesten und werden durch die Energiewende zusätzlich gestärkt.",
          en: "Prospects are very strong: electrical trades are among the most sought-after, further reinforced by the energy transition.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez passer un diplôme de Techniker ou de Meister, vous spécialiser en automatisation ou en sécurité électrique, puis prendre la conduite d'une équipe.",
          de: "Sie können einen Techniker- oder Meisterabschluss machen, sich auf Automatisierung oder elektrische Sicherheit spezialisieren und die Leitung eines Teams übernehmen.",
          en: "You can earn a Techniker or Meister qualification, specialise in automation or electrical safety, and take on team leadership.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et l'atelier se déroulent en allemand. Le niveau B2 est la norme pour réussir ; c'est celui que nous visons dans notre formation linguistique.",
          de: "Berufsschule, Prüfung und Werkstatt finden auf Deutsch statt. Das Niveau B2 ist der Standard für den Erfolg; genau dieses Niveau streben wir in unserer Sprachausbildung an.",
          en: "The vocational school, the exam and the workshop all take place in German. Level B2 is the standard for success, and that is the level we aim for in our language training.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme de la chambre (IHK) est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Diplomanerkennung erforderlich: Sie werden direkt in Deutschland ausgebildet, und der IHK-Abschluss ist bundesweit anerkannt. Nötig sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Sekundarschulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the chamber (IHK) diploma is recognised nationwide. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
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
          fr: "Est-ce un métier à risque ?",
          de: "Ist es ein gefährlicher Beruf?",
          en: "Is it a hazardous job?",
        },
        a: {
          fr: "Le travail sur les installations électriques suit des règles de sécurité strictes, et une formation dédiée vous y prépare.",
          de: "Die Arbeit an Elektroanlagen folgt strengen Sicherheitsregeln, und eine gezielte Ausbildung bereitet Sie darauf vor.",
          en: "Work on electrical systems follows strict safety rules, and dedicated training prepares you for it.",
        },
      },
      {
        q: {
          fr: "Quelle est la différence avec l'électricien du bâtiment ?",
          de: "Was ist der Unterschied zum Elektriker im Bau?",
          en: "What is the difference from a building electrician?",
        },
        a: {
          fr: "Ici, le travail porte sur l'industrie et les automatismes, alors que l'électricien du bâtiment intervient sur les installations des logements et des bâtiments.",
          de: "Hier geht es um Industrie und Automatisierung, während der Elektriker im Bau an den Installationen von Wohnungen und Gebäuden arbeitet.",
          en: "Here the work is on industry and automation, whereas the building electrician works on installations in homes and buildings.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "anlagenmechaniker": {
    slug: "anlagenmechaniker",
    title: {
      fr: "Mécanicien d'installations industrielles (Anlagenmechaniker)",
      de: "Anlagenmechaniker",
      en: "Industrial plant mechanic (Anlagenmechaniker)",
    },
    intro: {
      fr: "Un métier robuste au coeur de l'industrie de procédés, pour construire et entretenir les grandes installations.",
      de: "Ein robuster Beruf im Herzen der Prozessindustrie, um große Anlagen zu bauen und zu warten.",
      en: "A sturdy trade at the heart of process industry, building and maintaining large plant.",
    },
    image: "anlagenmechaniker",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Dans sa variante industrielle, le mécanicien d'installations construit, assemble et entretient de grandes installations, tuyauteries et appareils dans l'industrie de procédés. Cette variante se distingue du métier artisanal SHK (sanitaire et chauffage).",
          de: "In seiner industriellen Variante baut, montiert und wartet der Anlagenmechaniker große Anlagen, Rohrleitungen und Apparate in der Prozessindustrie. Diese Variante unterscheidet sich vom Handwerksberuf SHK (Sanitär und Heizung).",
          en: "In its industrial variant, the plant mechanic builds, assembles and maintains large plant, piping and apparatus in the process industry. This variant is distinct from the SHK sanitary and heating craft trade.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "En apprentissage, la rémunération est d'environ 1 010 à 1 175 €/mois et plus sous convention (minimum légal 682/805/921/955 €). Le salaire d'entrée est d'environ 2 840 à 3 200 €/mois et le salaire médian, tous niveaux d'expérience confondus, d'environ 4 120 €/mois (source : Entgeltatlas via Brutto-Netto-Gehaltsrechner, 2026). Dans les entreprises M+E, la convention IG Metall ajoute prime de congés, prime de Noël et primes d'équipe sur une semaine de 35 heures.",
          de: "In der Ausbildung liegt die Vergütung bei etwa 1.010 bis 1.175 €/Monat und mehr nach Tarif (gesetzlicher Mindestwert 682/805/921/955 €). Das Einstiegsgehalt beträgt rund 2.840 bis 3.200 €/Monat, der Median über alle Erfahrungsstufen etwa 4.120 €/Monat (Quelle: Entgeltatlas über Brutto-Netto-Gehaltsrechner, 2026). In M+E-Betrieben ergänzt der IG-Metall-Tarif Urlaubsgeld, Weihnachtsgeld und Schichtzulagen bei einer 35-Stunden-Woche.",
          en: "In an apprenticeship, pay is around 1,010 to 1,175 €/month and more under tariff (statutory minimum 682/805/921/955 €). The entry salary is about 2,840 to 3,200 €/month, and the median across all experience levels about 4,120 €/month (source: Entgeltatlas via Brutto-Netto-Gehaltsrechner, 2026). In M+E firms, the IG Metall tariff adds holiday pay, Christmas pay and shift bonuses on a 35-hour week.",
        },
      },
      {
        heading: { fr: "Durée et parcours", de: "Dauer und Ablauf", en: "Duration and path" },
        body: {
          fr: "La formation dure 3,5 ans en alternance, entre l'entreprise et l'école professionnelle, et se conclut par l'examen de la chambre (IHK).",
          de: "Die Ausbildung dauert 3,5 Jahre im dualen System, zwischen Betrieb und Berufsschule, und endet mit der IHK-Abschlussprüfung.",
          en: "Training lasts 3.5 years in the dual system, between the company and the vocational school, and ends with the chamber (IHK) final exam.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Parmi les employeurs : les parcs chimiques (BASF, Bayer), les énergéticiens et les constructeurs d'installations (Anlagenbau).",
          de: "Zu den Arbeitgebern zählen die Chemieparks (BASF, Bayer), Energieversorger und Anlagenbauer (Anlagenbau).",
          en: "Employers include the chemical parks (BASF, Bayer), energy utilities and plant constructors (Anlagenbau).",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts dans la construction et la maintenance d'installations industrielles.",
          de: "Die Perspektiven sind stark im Bau und in der Instandhaltung industrieller Anlagen.",
          en: "Prospects are strong in the construction and maintenance of industrial plant.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez vous spécialiser en soudure, passer un diplôme de Techniker ou de Meister, ou vous orienter vers la tuyauterie et la chaudronnerie.",
          de: "Sie können sich auf das Schweißen spezialisieren, einen Techniker- oder Meisterabschluss machen oder sich auf Rohrleitungsbau und Behälterbau orientieren.",
          en: "You can specialise in welding, earn a Techniker or Meister qualification, or move towards piping and boilermaking.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "L'école professionnelle, l'examen et l'atelier se déroulent en allemand. Le niveau B2 est la norme pour réussir ; c'est celui que nous visons dans notre formation linguistique.",
          de: "Berufsschule, Prüfung und Werkstatt finden auf Deutsch statt. Das Niveau B2 ist der Standard für den Erfolg; genau dieses Niveau streben wir in unserer Sprachausbildung an.",
          en: "The vocational school, the exam and the workshop all take place in German. Level B2 is the standard for success, and that is the level we aim for in our language training.",
        },
      },
      {
        heading: { fr: "Reconnaissance et accès", de: "Anerkennung und Zugang", en: "Recognition and access" },
        body: {
          fr: "Pour une Ausbildung, aucune reconnaissance de diplôme n'est requise : vous vous formez directement en Allemagne et le diplôme de la chambre (IHK) est reconnu dans tout le pays. Il faut un contrat d'Ausbildung, le niveau d'allemand attendu et, en général, un diplôme de fin d'études secondaires.",
          de: "Für eine Ausbildung ist keine Diplomanerkennung erforderlich: Sie werden direkt in Deutschland ausgebildet, und der IHK-Abschluss ist bundesweit anerkannt. Nötig sind ein Ausbildungsvertrag, das erwartete Sprachniveau und in der Regel ein Sekundarschulabschluss.",
          en: "For an Ausbildung, no diploma recognition is required: you train directly in Germany and the chamber (IHK) diploma is recognised nationwide. You need an Ausbildung contract, the expected German level and, generally, a secondary school leaving certificate.",
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
          fr: "Quelle est la différence avec la variante SHK (sanitaire et chauffage) ?",
          de: "Was ist der Unterschied zur Variante SHK (Sanitär und Heizung)?",
          en: "What is the difference from the SHK (sanitary and heating) variant?",
        },
        a: {
          fr: "Ici, il s'agit de la variante industrielle, centrée sur la tuyauterie et les installations, et non de la variante artisanale sanitaire et chauffage.",
          de: "Hier handelt es sich um die industrielle Variante mit Schwerpunkt Rohrleitungsbau und Anlagen, nicht um die handwerkliche Variante Sanitär und Heizung.",
          en: "Here it is the industrial variant, centred on piping and plant, not the sanitary and heating craft variant.",
        },
      },
      {
        q: {
          fr: "Le travail se fait-il en hauteur et sur sites industriels ?",
          de: "Arbeitet man in der Höhe und auf Industrieanlagen?",
          en: "Does the work involve heights and industrial sites?",
        },
        a: {
          fr: "Oui, le métier se pratique sur de grands sites industriels et implique souvent du travail en hauteur, dans le respect des règles de sécurité.",
          de: "Ja, der Beruf wird auf großen Industrieanlagen ausgeübt und umfasst oft Arbeiten in der Höhe unter Beachtung der Sicherheitsregeln.",
          en: "Yes, the job takes place on large industrial sites and often involves work at height, in line with safety rules.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
