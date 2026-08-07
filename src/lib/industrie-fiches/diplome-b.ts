import type { IndustrieFiche } from "../industrie-fiche-types";
import { SALARY_NOTE } from "../industrie-fiche-types";

export const IND_FICHES_DIPLOME_B: Record<string, IndustrieFiche> = {
  "usineur-cnc": {
    slug: "usineur-cnc",
    image: "usineur-cnc",
    title: {
      fr: "Usineur, opérateur CNC",
      de: "Zerspanungsmechaniker / CNC-Fachkraft",
      en: "CNC machinist",
    },
    intro: {
      fr: "Un métier de précision et de haute technologie, très demandé dans l'industrie allemande, où votre savoir-faire trouve tout de suite sa place.",
      de: "Ein Präzisions- und Hightech-Beruf, der in der deutschen Industrie stark gefragt ist und in dem Ihr Können sofort zählt.",
      en: "A precision, high-tech trade in strong demand across German industry, where your skills matter from day one.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'usineur produit des pièces de précision par tournage, fraisage et rectification. Il règle et programme les machines à commande numérique (CNC), lit les plans et contrôle les tolérances.",
          de: "Der Zerspanungsmechaniker fertigt Präzisionsteile durch Drehen, Fräsen und Schleifen. Er richtet CNC-Maschinen ein, programmiert sie, liest technische Zeichnungen und prüft die Toleranzen.",
          en: "The CNC machinist produces precision parts by turning, milling and grinding. They set up and program computer numerical control (CNC) machines, read technical drawings and check tolerances.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "La médiane, tous niveaux d'expérience confondus, se situe autour de 3 900 à 4 067 €/mois (moyenne environ 3 923 €), avec environ 3 790 € à l'Ouest et environ 3 150 € à l'Est ; l'entrée démarre autour de 2 800 € (source : Entgeltatlas, Bundesagentur für Arbeit, 2025). La rémunération est souvent régie par la convention IG Metall (prime de vacances, prime de Noël, majorations de poste, semaine de 35 heures).",
          de: "Der Median über alle Erfahrungsstufen liegt bei rund 3.900 bis 4.067 €/Monat (Durchschnitt etwa 3.923 €), im Westen bei etwa 3.790 €, im Osten bei etwa 3.150 € ; der Einstieg beginnt bei rund 2.800 € (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025). Die Vergütung folgt oft dem IG-Metall-Tarif (Urlaubsgeld, Weihnachtsgeld, Schichtzulagen, 35-Stunden-Woche).",
          en: "The median across all experience levels is around 3,900 to 4,067 €/month (average about 3,923 €), roughly 3,790 € in the west and about 3,150 € in the east ; entry level starts around 2,800 € (source: Entgeltatlas, Bundesagentur für Arbeit, 2025). Pay is often set by the IG Metall collective agreement (holiday pay, Christmas pay, shift bonuses, 35-hour week).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "De grands industriels recrutent régulièrement : Bosch, ZF, Continental, Mahle, BMW, Mercedes-Benz, Audi, Volkswagen, Trumpf, DMG Mori, Liebherr, Krones, MTU Aero Engines, Airbus, Aesculap et Karl Storz.",
          de: "Große Industrieunternehmen stellen regelmäßig ein: Bosch, ZF, Continental, Mahle, BMW, Mercedes-Benz, Audi, Volkswagen, Trumpf, DMG Mori, Liebherr, Krones, MTU Aero Engines, Airbus, Aesculap und Karl Storz.",
          en: "Major industrial firms hire regularly: Bosch, ZF, Continental, Mahle, BMW, Mercedes-Benz, Audi, Volkswagen, Trumpf, DMG Mori, Liebherr, Krones, MTU Aero Engines, Airbus, Aesculap and Karl Storz.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande reste forte pour ce métier. Il ne figure toutefois plus sur la liste officielle des métiers en pénurie certifiés depuis 2024 : on parle donc de forte demande, pas de pénurie certifiée.",
          de: "Die Nachfrage nach diesem Beruf bleibt hoch. Seit 2024 steht er allerdings nicht mehr auf der offiziellen Liste der zertifizierten Engpassberufe: es handelt sich also um starke Nachfrage, nicht um einen zertifizierten Engpass.",
          en: "Demand for this trade stays strong. Since 2024, however, it is no longer on the official list of certified shortage occupations, so this is strong demand rather than a certified shortage.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez vous spécialiser dans la programmation CNC 5 axes, passer un Techniker ou un Meister, rejoindre le contrôle qualité ou devenir chef d'atelier.",
          de: "Sie können sich auf die 5-Achsen-CNC-Programmierung spezialisieren, einen Techniker oder Meister machen, in die Qualitätskontrolle wechseln oder Werkstattleiter werden.",
          en: "You can specialise in 5-axis CNC programming, earn a Techniker or Meister qualification, move into quality control or become a workshop supervisor.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Sur le terrain, les consignes de sécurité, les instructions de travail et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "In der Praxis sind Sicherheitshinweise, Arbeitsanweisungen und Dokumentation auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und das ist das Niveau, das wir anstreben.",
          en: "On the shop floor, safety rules, work instructions and documentation are in German. B2 is the standard employers expect, and it is the level we aim for.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Ce métier n'est pas réglementé : vous n'avez pas besoin d'une reconnaissance pour l'exercer, mais le visa de travailleur qualifié demande une qualification reconnue équivalente à la formation allemande. Nous faisons évaluer votre diplôme et votre expérience, et engageons la procédure de reconnaissance (Anerkennung) avec vous.",
          de: "Dieser Beruf ist nicht reglementiert: Sie benötigen für die Ausübung keine Anerkennung, doch das Visum für Fachkräfte verlangt eine anerkannte Qualifikation, die der deutschen Ausbildung gleichwertig ist. Wir lassen Ihren Abschluss und Ihre Erfahrung bewerten und leiten das Anerkennungsverfahren gemeinsam mit Ihnen ein.",
          en: "This trade is not regulated: you do not need recognition to practise it, but the skilled worker visa requires a recognised qualification equivalent to German training. We have your diploma and experience assessed and start the recognition procedure (Anerkennung) with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte (carte d'opportunité) pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ce métier. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Fachkräftevisum mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit erlaubt, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte für die Arbeitssuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diesen Beruf nicht. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognised qualification, the recognition partnership that since March 2024 lets you enter and work while completing recognition on site (A2 level required), and the Chancenkarte (opportunity card) to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to this trade. We check your eligibility and build the application with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, stellen Ihr Profil bei deutschen Arbeitgebern heraus, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, get your qualification recognised, present your profile to German employers, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Faut-il déjà savoir programmer les machines ?",
          de: "Muss man die Maschinen bereits programmieren können ?",
          en: "Do you already need to know how to program the machines ?",
        },
        a: {
          fr: "C'est un atout, mais pas indispensable : la programmation CNC s'apprend, et une solide base en usinage compte souvent davantage au départ.",
          de: "Es ist ein Vorteil, aber keine Voraussetzung: Die CNC-Programmierung lässt sich erlernen, und eine solide Grundlage in der Zerspanung zählt am Anfang oft mehr.",
          en: "It is an asset but not essential: CNC programming can be learned, and a solid machining foundation often counts for more at the start.",
        },
      },
      {
        q: {
          fr: "Quels secteurs recrutent le plus ?",
          de: "Welche Branchen stellen am meisten ein ?",
          en: "Which sectors hire the most ?",
        },
        a: {
          fr: "L'automobile, l'aéronautique et le médical figurent parmi les secteurs qui recrutent le plus d'usineurs.",
          de: "Die Automobilindustrie, die Luftfahrt und die Medizintechnik gehören zu den Branchen, die am meisten Zerspanungsmechaniker einstellen.",
          en: "Automotive, aerospace and medical technology are among the sectors that hire the most machinists.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "metallier": {
    slug: "metallier",
    image: "metallier",
    title: {
      fr: "Métallier, chaudronnier",
      de: "Metallbauer / Konstruktionsmechaniker",
      en: "Metal fabricator, structural steelworker",
    },
    intro: {
      fr: "Un métier de fabrication solide et recherché, où votre maîtrise de l'acier construit ce qui tient debout dans l'industrie allemande.",
      de: "Ein solider, gefragter Fertigungsberuf, in dem Ihre Beherrschung des Stahls das baut, was in der deutschen Industrie Bestand hat.",
      en: "A sound, sought-after fabrication trade where your command of steel builds what stands firm in German industry.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le métallier fabrique et assemble des structures métalliques et des constructions acier : découpe, formage, soudage et montage de charpentes, d'appareils et d'ouvrages.",
          de: "Der Metallbauer fertigt und montiert Metallkonstruktionen und Stahlbauten: Zuschneiden, Umformen, Schweißen und Montage von Tragwerken, Apparaten und Bauteilen.",
          en: "The metal fabricator makes and assembles metal structures and steel constructions: cutting, forming, welding and erecting frameworks, apparatus and structural work.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "La médiane, tous niveaux d'expérience confondus, est d'environ 3 606 €/mois (quartiles 3 047 à 4 294 €) ; la moyenne du Konstruktionsmechaniker est d'environ 3 495 €, l'entrée d'environ 2 500 €, avec environ 3 590 € à l'Ouest et environ 2 990 € à l'Est (source : Entgeltatlas, Bundesagentur für Arbeit, 2024). Dans l'industrie, la rémunération dépend souvent de la convention IG Metall.",
          de: "Der Median über alle Erfahrungsstufen liegt bei rund 3.606 €/Monat (Quartile 3.047 bis 4.294 €) ; der Durchschnitt des Konstruktionsmechanikers beträgt etwa 3.495 €, der Einstieg etwa 2.500 €, im Westen rund 3.590 € und im Osten rund 2.990 € (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2024). In der Industrie folgt die Vergütung oft dem IG-Metall-Tarif.",
          en: "The median across all experience levels is about 3,606 €/month (quartiles 3,047 to 4,294 €) ; the Konstruktionsmechaniker average is about 3,495 €, entry level about 2,500 €, roughly 3,590 € in the west and about 2,990 € in the east (source: Entgeltatlas, Bundesagentur für Arbeit, 2024). In industry, pay is often set by the IG Metall collective agreement.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "La construction métallique et la charpente (Stahlbau), la construction navale, la construction d'installations (Anlagenbau), les fabricants de grues et de structures acier, les carrosseries ferroviaires et la construction mécanique recrutent régulièrement.",
          de: "Stahlbau, Schiffbau, Anlagenbau, Hersteller von Kranen und Stahlkonstruktionen, Schienenfahrzeugbau und Maschinenbau stellen regelmäßig ein.",
          en: "Structural steel and steelwork (Stahlbau), shipbuilding, plant construction (Anlagenbau), makers of cranes and steel structures, rail vehicle bodies and mechanical engineering hire regularly.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande est forte : la construction métallique fait partie des domaines en tension.",
          de: "Die Nachfrage ist hoch: Der Metallbau gehört zu den angespannten Bereichen.",
          en: "Demand is strong: metal construction is one of the fields under pressure.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez vous spécialiser en soudure, passer un Techniker ou un Meister, ou évoluer vers le montage et la construction.",
          de: "Sie können sich auf das Schweißen spezialisieren, einen Techniker oder Meister machen oder sich in Richtung Montage und Konstruktion weiterentwickeln.",
          en: "You can specialise in welding, earn a Techniker or Meister qualification, or move into assembly and construction.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Sur le terrain, les consignes de sécurité, les instructions de travail et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "In der Praxis sind Sicherheitshinweise, Arbeitsanweisungen und Dokumentation auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und das ist das Niveau, das wir anstreben.",
          en: "On the shop floor, safety rules, work instructions and documentation are in German. B2 is the standard employers expect, and it is the level we aim for.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Ce métier n'est pas réglementé : vous n'avez pas besoin d'une reconnaissance pour l'exercer, mais le visa de travailleur qualifié demande une qualification reconnue équivalente à la formation allemande. Nous faisons évaluer votre diplôme et votre expérience, et engageons la procédure de reconnaissance (Anerkennung) avec vous.",
          de: "Dieser Beruf ist nicht reglementiert: Sie benötigen für die Ausübung keine Anerkennung, doch das Visum für Fachkräfte verlangt eine anerkannte Qualifikation, die der deutschen Ausbildung gleichwertig ist. Wir lassen Ihren Abschluss und Ihre Erfahrung bewerten und leiten das Anerkennungsverfahren gemeinsam mit Ihnen ein.",
          en: "This trade is not regulated: you do not need recognition to practise it, but the skilled worker visa requires a recognised qualification equivalent to German training. We have your diploma and experience assessed and start the recognition procedure (Anerkennung) with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte (carte d'opportunité) pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ce métier. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Fachkräftevisum mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit erlaubt, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte für die Arbeitssuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diesen Beruf nicht. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognised qualification, the recognition partnership that since March 2024 lets you enter and work while completing recognition on site (A2 level required), and the Chancenkarte (opportunity card) to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to this trade. We check your eligibility and build the application with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, stellen Ihr Profil bei deutschen Arbeitgebern heraus, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, get your qualification recognised, present your profile to German employers, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quelle différence entre Metallbauer et Konstruktionsmechaniker ?",
          de: "Was ist der Unterschied zwischen Metallbauer und Konstruktionsmechaniker ?",
          en: "What is the difference between Metallbauer and Konstruktionsmechaniker ?",
        },
        a: {
          fr: "Le Metallbauer relève de l'artisanat, tandis que le Konstruktionsmechaniker relève de l'industrie ; les gestes sont proches, mais le contexte de travail diffère.",
          de: "Der Metallbauer gehört zum Handwerk, der Konstruktionsmechaniker zur Industrie ; die Tätigkeiten ähneln sich, doch der Arbeitskontext ist ein anderer.",
          en: "The Metallbauer belongs to the crafts sector while the Konstruktionsmechaniker belongs to industry ; the tasks are similar, but the working context differs.",
        },
      },
      {
        q: {
          fr: "Travaille-t-on en atelier ou sur chantier ?",
          de: "Arbeitet man in der Werkstatt oder auf der Baustelle ?",
          en: "Do you work in a workshop or on site ?",
        },
        a: {
          fr: "Les deux : selon les commandes, le travail se fait en atelier de fabrication et sur chantier de montage.",
          de: "Beides: Je nach Auftrag findet die Arbeit in der Fertigungswerkstatt und auf der Montagebaustelle statt.",
          en: "Both: depending on the orders, the work is done in the fabrication workshop and on the assembly site.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "conducteur-ligne": {
    slug: "conducteur-ligne",
    image: "conducteur-ligne",
    title: {
      fr: "Conducteur de machines et d'installations",
      de: "Maschinen- und Anlagenführer",
      en: "Machine and plant operator",
    },
    intro: {
      fr: "Une porte d'entrée fiable dans la production allemande, où votre sérieux fait tourner les lignes jour après jour.",
      de: "Ein verlässlicher Einstieg in die deutsche Produktion, in dem Ihre Zuverlässigkeit die Anlagen Tag für Tag am Laufen hält.",
      en: "A reliable way into German manufacturing, where your dependability keeps the lines running day after day.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le conducteur de machines règle, conduit et surveille des machines et des lignes de production, approvisionne en matières, contrôle la production et traite les petits incidents. C'est une qualification de 2 ans, une bonne porte d'entrée dans la production.",
          de: "Der Maschinen- und Anlagenführer richtet Maschinen und Produktionslinien ein, bedient und überwacht sie, versorgt sie mit Material, kontrolliert die Produktion und behebt kleine Störungen. Es ist eine 2-jährige Qualifikation und ein guter Einstieg in die Produktion.",
          en: "The machine operator sets up, runs and monitors machines and production lines, supplies materials, checks output and handles minor faults. It is a 2-year qualification and a good way into production.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "La médiane, tous niveaux d'expérience confondus, est d'environ 3 610 €/mois (fourchette environ 2 879 à 4 543 €) ; en métallurgie et plasturgie elle atteint environ 3 758 €, l'entrée est d'environ 3 200 € et le niveau senior d'environ 4 390 €, avec environ 3 750 € à l'Ouest et environ 2 971 € à l'Est (source : Entgeltatlas, Bundesagentur für Arbeit, 2025). Dans l'industrie, la rémunération dépend souvent de la convention IG Metall.",
          de: "Der Median über alle Erfahrungsstufen liegt bei rund 3.610 €/Monat (Spanne etwa 2.879 bis 4.543 €) ; in der Metall- und Kunststoffverarbeitung erreicht er etwa 3.758 €, der Einstieg liegt bei rund 3.200 € und die Seniorstufe bei rund 4.390 €, im Westen bei etwa 3.750 € und im Osten bei etwa 2.971 € (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025). In der Industrie folgt die Vergütung oft dem IG-Metall-Tarif.",
          en: "The median across all experience levels is about 3,610 €/month (range about 2,879 to 4,543 €) ; in metal and plastics processing it reaches about 3,758 €, entry level is about 3,200 € and senior level about 4,390 €, roughly 3,750 € in the west and about 2,971 € in the east (source: Entgeltatlas, Bundesagentur für Arbeit, 2025). In industry, pay is often set by the IG Metall collective agreement.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Les fabricants des secteurs métallurgie et plasturgie, l'agroalimentaire et l'industrie de transformation recrutent régulièrement.",
          de: "Hersteller aus der Metall- und Kunststoffverarbeitung, die Lebensmittelindustrie und die verarbeitende Industrie stellen regelmäßig ein.",
          en: "Manufacturers in metal and plastics processing, the food industry and the processing industry hire regularly.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande est large et régulière dans la production. C'est un métier de volume, pas une pénurie certifiée.",
          de: "Die Nachfrage in der Produktion ist breit und beständig. Es ist ein Volumenberuf, kein zertifizierter Engpass.",
          en: "Demand in production is broad and steady. It is a high-volume trade, not a certified shortage.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez progresser du réglage à la conduite de ligne, évoluer vers une Fachkraft ou un Industriemechaniker, puis vers un poste de chef d'équipe.",
          de: "Sie können sich vom Einrichten zur Anlagenführung entwickeln, zur Fachkraft oder zum Industriemechaniker aufsteigen und dann Teamleiter werden.",
          en: "You can progress from setup to line operation, move up to a Fachkraft or Industriemechaniker qualification, then to a team leader role.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Sur le terrain, les consignes de sécurité, les instructions de travail et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "In der Praxis sind Sicherheitshinweise, Arbeitsanweisungen und Dokumentation auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und das ist das Niveau, das wir anstreben.",
          en: "On the shop floor, safety rules, work instructions and documentation are in German. B2 is the standard employers expect, and it is the level we aim for.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Ce métier n'est pas réglementé : vous n'avez pas besoin d'une reconnaissance pour l'exercer, mais le visa de travailleur qualifié demande une qualification reconnue équivalente à la formation allemande. Nous faisons évaluer votre diplôme et votre expérience, et engageons la procédure de reconnaissance (Anerkennung) avec vous.",
          de: "Dieser Beruf ist nicht reglementiert: Sie benötigen für die Ausübung keine Anerkennung, doch das Visum für Fachkräfte verlangt eine anerkannte Qualifikation, die der deutschen Ausbildung gleichwertig ist. Wir lassen Ihren Abschluss und Ihre Erfahrung bewerten und leiten das Anerkennungsverfahren gemeinsam mit Ihnen ein.",
          en: "This trade is not regulated: you do not need recognition to practise it, but the skilled worker visa requires a recognised qualification equivalent to German training. We have your diploma and experience assessed and start the recognition procedure (Anerkennung) with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte (carte d'opportunité) pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ce métier. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Fachkräftevisum mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit erlaubt, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte für die Arbeitssuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diesen Beruf nicht. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognised qualification, the recognition partnership that since March 2024 lets you enter and work while completing recognition on site (A2 level required), and the Chancenkarte (opportunity card) to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to this trade. We check your eligibility and build the application with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, stellen Ihr Profil bei deutschen Arbeitgebern heraus, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, get your qualification recognised, present your profile to German employers, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le travail se fait-il en horaires postés ?",
          de: "Arbeitet man im Schichtbetrieb ?",
          en: "Is the work done in shifts ?",
        },
        a: {
          fr: "Oui, la production fonctionne souvent en horaires postés, ce qui ouvre droit à des majorations de poste selon la convention.",
          de: "Ja, die Produktion läuft oft im Schichtbetrieb, was je nach Tarif Anspruch auf Schichtzulagen gibt.",
          en: "Yes, production often runs on shifts, which entitles you to shift bonuses depending on the collective agreement.",
        },
      },
      {
        q: {
          fr: "Ce métier est-il accessible sans longue formation ?",
          de: "Ist dieser Beruf ohne lange Ausbildung zugänglich ?",
          en: "Is this trade accessible without long training ?",
        },
        a: {
          fr: "Oui : il repose sur une qualification plus courte (2 ans), ce qui en fait une bonne porte d'entrée dans la production.",
          de: "Ja: Er beruht auf einer kürzeren Qualifikation (2 Jahre), was ihn zu einem guten Einstieg in die Produktion macht.",
          en: "Yes: it is based on a shorter qualification (2 years), which makes it a good entry point into production.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "technicien-qualite": {
    slug: "technicien-qualite",
    image: "technicien-qualite",
    title: {
      fr: "Technicien qualité",
      de: "Qualitätsprüfer / Qualitätstechniker",
      en: "Quality technician",
    },
    intro: {
      fr: "Un métier de rigueur et de confiance, où votre œil exigeant garantit la qualité qui fait la réputation de l'industrie allemande.",
      de: "Ein Beruf der Sorgfalt und des Vertrauens, in dem Ihr geschultes Auge die Qualität sichert, die den Ruf der deutschen Industrie ausmacht.",
      en: "A trade built on rigour and trust, where your exacting eye safeguards the quality that defines German industry's reputation.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le technicien qualité contrôle la qualité des produits et des procédés : contrôle à réception, en cours de production et final, mesure et métrologie, documentation et audits (ISO, IATF).",
          de: "Der Qualitätsprüfer kontrolliert die Qualität von Produkten und Prozessen: Wareneingangs-, Fertigungs- und Endprüfung, Messen und Messtechnik, Dokumentation und Audits (ISO, IATF).",
          en: "The quality technician checks the quality of products and processes: incoming, in-process and final inspection, measurement and metrology, documentation and audits (ISO, IATF).",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Une fourchette prudente se situe entre environ 3 600 et 5 200 €/mois : le contrôleur de matériaux, métier certifié le plus proche, affiche une médiane, tous niveaux confondus, d'environ 4 319 € (quartiles 3 638 à 5 155 €), avec une entrée d'environ 2 300 à 3 200 € (source : Entgeltatlas, Bundesagentur für Arbeit, 2024). Certains portails affichent des médianes plus élevées, à considérer avec prudence.",
          de: "Eine vorsichtige Spanne liegt zwischen etwa 3.600 und 5.200 €/Monat: Der Werkstoffprüfer, der am nächsten liegende zertifizierte Beruf, weist einen Median über alle Stufen von etwa 4.319 € auf (Quartile 3.638 bis 5.155 €), mit einem Einstieg von etwa 2.300 bis 3.200 € (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2024). Einige Portale zeigen höhere Mediane, die mit Vorsicht zu betrachten sind.",
          en: "A cautious range is between about 3,600 and 5,200 €/month: the materials tester, the closest certified occupation, shows a median across all levels of about 4,319 € (quartiles 3,638 to 5,155 €), with entry level about 2,300 to 3,200 € (source: Entgeltatlas, Bundesagentur für Arbeit, 2024). Some portals show higher medians, to be treated with caution.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Les équipementiers automobiles, la construction mécanique, l'aéronautique, les dispositifs médicaux et tout fabricant certifié ISO ou IATF recrutent régulièrement.",
          de: "Automobilzulieferer, Maschinenbau, Luftfahrt, Medizinprodukte und jeder nach ISO oder IATF zertifizierte Hersteller stellen regelmäßig ein.",
          en: "Automotive suppliers, mechanical engineering, aerospace, medical devices and any ISO or IATF certified manufacturer hire regularly.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande est régulière et suit le secteur industriel. Ce n'est pas une pénurie certifiée.",
          de: "Die Nachfrage ist beständig und folgt der Industriekonjunktur. Es ist kein zertifizierter Engpass.",
          en: "Demand is steady and follows the industrial sector. It is not a certified shortage.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez progresser de technicien qualité à ingénieur qualité, devenir auditeur, puis responsable qualité.",
          de: "Sie können sich vom Qualitätstechniker zum Qualitätsingenieur entwickeln, Auditor werden und dann Qualitätsleiter.",
          en: "You can progress from quality technician to quality engineer, become an auditor, then quality manager.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Pour ce métier, le B2 est fortement recommandé : la documentation, la communication d'audit et les rapports 8D se font en allemand. C'est le niveau que nous visons avec vous.",
          de: "Für diesen Beruf wird B2 dringend empfohlen: Dokumentation, Audit-Kommunikation und 8D-Berichte laufen auf Deutsch. Dieses Niveau streben wir mit Ihnen an.",
          en: "For this trade B2 is strongly recommended: documentation, audit communication and 8D reports are in German. That is the level we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Ce métier n'est pas réglementé : vous n'avez pas besoin d'une reconnaissance pour l'exercer, mais le visa de travailleur qualifié demande une qualification reconnue équivalente à la formation allemande. Nous faisons évaluer votre diplôme et votre expérience, et engageons la procédure de reconnaissance (Anerkennung) avec vous.",
          de: "Dieser Beruf ist nicht reglementiert: Sie benötigen für die Ausübung keine Anerkennung, doch das Visum für Fachkräfte verlangt eine anerkannte Qualifikation, die der deutschen Ausbildung gleichwertig ist. Wir lassen Ihren Abschluss und Ihre Erfahrung bewerten und leiten das Anerkennungsverfahren gemeinsam mit Ihnen ein.",
          en: "This trade is not regulated: you do not need recognition to practise it, but the skilled worker visa requires a recognised qualification equivalent to German training. We have your diploma and experience assessed and start the recognition procedure (Anerkennung) with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte (carte d'opportunité) pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ce métier. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Fachkräftevisum mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit erlaubt, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte für die Arbeitssuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diesen Beruf nicht. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognised qualification, the recognition partnership that since March 2024 lets you enter and work while completing recognition on site (A2 level required), and the Chancenkarte (opportunity card) to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to this trade. We check your eligibility and build the application with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, stellen Ihr Profil bei deutschen Arbeitgebern heraus, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, get your qualification recognised, present your profile to German employers, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quels outils de mesure faut-il maîtriser ?",
          de: "Welche Messmittel muss man beherrschen ?",
          en: "Which measuring tools do you need to master ?",
        },
        a: {
          fr: "Les outils courants de mesure et de métrologie (pied à coulisse, micromètre, machines de mesure tridimensionnelle) sont au cœur du métier.",
          de: "Die gängigen Mess- und Prüfmittel (Messschieber, Mikrometer, Koordinatenmessmaschinen) stehen im Mittelpunkt des Berufs.",
          en: "The common measuring and metrology tools (calliper, micrometer, coordinate measuring machines) are at the heart of the job.",
        },
      },
      {
        q: {
          fr: "La documentation en allemand est-elle vraiment importante ?",
          de: "Ist die Dokumentation auf Deutsch wirklich wichtig ?",
          en: "Is documentation in German really important ?",
        },
        a: {
          fr: "Oui : rapports, procédures et communication d'audit se font en allemand, ce qui rend le B2 fortement recommandé pour ce métier.",
          de: "Ja: Berichte, Verfahren und Audit-Kommunikation laufen auf Deutsch, weshalb B2 für diesen Beruf dringend empfohlen wird.",
          en: "Yes: reports, procedures and audit communication are in German, which makes B2 strongly recommended for this trade.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
