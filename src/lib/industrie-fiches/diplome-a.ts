import type { IndustrieFiche } from "../industrie-fiche-types";
import { SALARY_NOTE } from "../industrie-fiche-types";

export const IND_FICHES_DIPLOME_A: Record<string, IndustrieFiche> = {
  soudeur: {
    slug: "soudeur",
    title: { fr: "Soudeur", de: "Schweißer", en: "Welder" },
    intro: {
      fr: "Métier de précision et de sécurité, la soudure certifiée fait partie des compétences les plus recherchées de l'industrie allemande.",
      de: "Als Präzisions- und Sicherheitsberuf gehört das zertifizierte Schweißen zu den gefragtesten Kompetenzen der deutschen Industrie.",
      en: "A precision and safety trade, certified welding is among the most sought-after skills in German industry.",
    },
    image: "soudeur",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le soudeur assemble des pièces métalliques par soudage (procédés WIG/TIG, MAG, MIG, à l'électrode), lit les descriptifs de mode opératoire de soudage et travaille selon des normes certifiées. Les certifications WIG/TIG (141), MAG (135/136) et électrode (111), selon la norme ISO 9606, rendent les soudeurs rares et très recherchés.",
          de: "Der Schweißer fügt Metallteile durch Schweißen zusammen (Verfahren WIG/TIG, MAG, MIG, Elektrode), liest Schweißanweisungen und arbeitet nach zertifizierten Normen. Die Zertifizierungen WIG/TIG (141), MAG (135/136) und Elektrode (111) nach der Norm ISO 9606 machen Schweißer selten und sehr gefragt.",
          en: "The welder joins metal parts by welding (WIG/TIG, MAG, MIG and stick electrode processes), reads welding procedure specifications and works to certified standards. The WIG/TIG (141), MAG (135/136) and electrode (111) certifications under the ISO 9606 standard make welders scarce and highly sought after.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "La médiane, tous niveaux d'expérience confondus, est d'environ 3 533 € par mois (quartiles environ 2 900 à 4 250 €) (source : Entgeltatlas, Bundesagentur für Arbeit, 2024). Les portails donnent des moyennes plus basses (soudeur WIG environ 3 316 €, Schweißfachmann certifié environ 3 841 €, source : StepStone, 2026) ; l'entrée se situe vers 2 800 à 3 000 € et les spécialistes expérimentés dépassent 4 250 €. La rémunération est souvent liée à la convention IG Metall (prime de congés, prime de Noël, majorations de poste, semaine de 35 heures).",
          de: "Der Median über alle Erfahrungsstufen liegt bei etwa 3.533 € pro Monat (Quartile etwa 2.900 bis 4.250 €) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2024). Portale nennen niedrigere Durchschnittswerte (WIG-Schweißer etwa 3.316 €, zertifizierter Schweißfachmann etwa 3.841 €, Quelle: StepStone, 2026); der Einstieg liegt bei etwa 2.800 bis 3.000 €, erfahrene Spezialisten über 4.250 €. Die Vergütung ist oft an den Tarifvertrag der IG Metall gebunden (Urlaubsgeld, Weihnachtsgeld, Schichtzulagen, 35-Stunden-Woche).",
          en: "The median across all experience levels is about 3,533 € per month (quartiles about 2,900 to 4,250 €) (source: Entgeltatlas, Federal Employment Agency, 2024). Portals report lower averages (WIG welder about 3,316 €, certified Schweißfachmann about 3,841 €, source: StepStone, 2026); entry is around 2,800 to 3,000 € and experienced specialists exceed 4,250 €. Pay is often tied to the IG Metall collective agreement (holiday pay, Christmas pay, shift bonuses, 35-hour week).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Parmi les recruteurs figurent Siemens Energy, thyssenkrupp, Linde Engineering et SMS group. Les secteurs concernés sont la construction mécanique, la construction métallique (Stahlbau), la construction d'installations (Anlagenbau) et la tuyauterie (Rohrleitungsbau).",
          de: "Zu den einstellenden Unternehmen gehören Siemens Energy, thyssenkrupp, Linde Engineering und SMS group. Betroffene Branchen sind der Maschinenbau, der Stahlbau, der Anlagenbau und der Rohrleitungsbau.",
          en: "Employers include Siemens Energy, thyssenkrupp, Linde Engineering and SMS group. The sectors concerned are mechanical engineering, steel construction (Stahlbau), plant construction (Anlagenbau) and pipework (Rohrleitungsbau).",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande est très forte et structurelle, portée par les infrastructures, l'énergie et les départs en retraite.",
          de: "Die Nachfrage ist sehr hoch und strukturell bedingt, getragen von Infrastruktur, Energie und dem Renteneintritt vieler Fachkräfte.",
          en: "Demand is very strong and structural, driven by infrastructure, energy and retirements.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers Schweißfachmann, le contrôle qualité en soudure, l'inspection ou la fonction de chef d'équipe.",
          de: "Sie können sich zum Schweißfachmann, in die Schweißnahtprüfung, zur Inspektion oder zur Teamleitung weiterentwickeln.",
          en: "You can progress to Schweißfachmann, welding quality control, inspection or team leader.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Sur le terrain, les consignes de sécurité, les instructions de travail et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons avec vous.",
          de: "Im Betrieb sind Sicherheitshinweise, Arbeitsanweisungen und Dokumentation auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und das ist das Niveau, das wir mit Ihnen anstreben.",
          en: "On site, safety instructions, work orders and documentation are in German. B2 is the standard expected by employers, and that is the level we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Ces métiers ne sont pas réglementés : vous n'avez pas besoin d'une reconnaissance pour exercer, mais le visa de travailleur qualifié demande une qualification reconnue équivalente à la formation allemande. Nous faisons évaluer votre diplôme et votre expérience, et engageons la procédure de reconnaissance (Anerkennung) avec vous.",
          de: "Diese Berufe sind nicht reglementiert: Für die Ausübung brauchen Sie keine Anerkennung, aber das Visum für Fachkräfte setzt eine anerkannte, der deutschen Ausbildung gleichwertige Qualifikation voraus. Wir lassen Ihren Abschluss und Ihre Erfahrung bewerten und leiten das Anerkennungsverfahren (Anerkennung) mit Ihnen ein.",
          en: "These occupations are not regulated: you do not need recognition to work in them, but the skilled worker visa requires a recognized qualification equivalent to the German training. We have your diploma and experience assessed and start the recognition procedure (Anerkennung) with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte (carte d'opportunité) pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit erlaubt, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte für die Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Berechtigung und stellen den Antrag mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognized qualification, the recognition partnership, which since March 2024 lets you enter and work while completing recognition on site (level A2 required), and the Chancenkarte (opportunity card) to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these trades. We check your eligibility and prepare the application with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, have your qualification recognized, present your profile to German employers, prepare the visa application and support you all the way to settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quelles certifications de soudure sont demandées ?",
          de: "Welche Schweißzertifikate werden verlangt?",
          en: "Which welding certifications are required?",
        },
        a: {
          fr: "Les employeurs recherchent surtout les procédés WIG/TIG (141), MAG (135/136) et électrode (111), certifiés selon la norme ISO 9606. Ce sont ces qualifications qui rendent votre profil rare et attractif.",
          de: "Arbeitgeber suchen vor allem die Verfahren WIG/TIG (141), MAG (135/136) und Elektrode (111), zertifiziert nach der Norm ISO 9606. Genau diese Qualifikationen machen Ihr Profil selten und attraktiv.",
          en: "Employers look above all for the WIG/TIG (141), MAG (135/136) and electrode (111) processes, certified to the ISO 9606 standard. These qualifications are what make your profile scarce and attractive.",
        },
      },
      {
        q: {
          fr: "L'anglais suffit-il sur un chantier allemand ?",
          de: "Reicht Englisch auf einer deutschen Baustelle aus?",
          en: "Is English enough on a German site?",
        },
        a: {
          fr: "Non : les consignes de sécurité et les instructions de travail sont en allemand, et une bonne compréhension est indispensable pour travailler en sécurité. C'est pourquoi nous visons le B2.",
          de: "Nein: Sicherheitshinweise und Arbeitsanweisungen sind auf Deutsch, und ein gutes Verständnis ist für sicheres Arbeiten unerlässlich. Deshalb streben wir das Niveau B2 an.",
          en: "No: safety instructions and work orders are in German, and good comprehension is essential to work safely. That is why we aim for B2.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  mecatronicien: {
    slug: "mecatronicien",
    title: {
      fr: "Mécatronicien",
      de: "Mechatroniker",
      en: "Mechatronics technician",
    },
    intro: {
      fr: "Au carrefour de la mécanique, de l'électronique et de l'informatique, le mécatronicien fait tourner les lignes de production automatisées de l'industrie allemande.",
      de: "An der Schnittstelle von Mechanik, Elektronik und Informatik hält der Mechatroniker die automatisierten Produktionslinien der deutschen Industrie am Laufen.",
      en: "At the crossroads of mechanics, electronics and computing, the mechatronics technician keeps German industry's automated production lines running.",
    },
    image: "mecatronicien",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le mécatronicien installe, entretient et dépanne des systèmes automatisés mêlant mécanique, électronique et commande. Il assure la maintenance des lignes de production et intervient sur des équipements complexes.",
          de: "Der Mechatroniker installiert, wartet und repariert automatisierte Systeme, die Mechanik, Elektronik und Steuerung verbinden. Er sorgt für die Instandhaltung der Produktionslinien und arbeitet an komplexen Anlagen.",
          en: "The mechatronics technician installs, maintains and troubleshoots automated systems combining mechanics, electronics and control. He keeps production lines maintained and works on complex equipment.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "La médiane, tous niveaux d'expérience confondus, est d'environ 4 105 € par mois (quartiles 3 407 à 4 922 €) (source : Entgeltatlas, Bundesagentur für Arbeit, 2024). Cette rémunération est souvent encadrée par la convention IG Metall (prime de congés, prime de Noël, majorations de poste, semaine de 35 heures).",
          de: "Der Median über alle Erfahrungsstufen liegt bei etwa 4.105 € pro Monat (Quartile 3.407 bis 4.922 €) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2024). Diese Vergütung ist häufig durch den Tarifvertrag der IG Metall geregelt (Urlaubsgeld, Weihnachtsgeld, Schichtzulagen, 35-Stunden-Woche).",
          en: "The median across all experience levels is about 4,105 € per month (quartiles 3,407 to 4,922 €) (source: Entgeltatlas, Federal Employment Agency, 2024). This pay is often governed by the IG Metall collective agreement (holiday pay, Christmas pay, shift bonuses, 35-hour week).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Les recruteurs incluent Siemens, Bosch et ZF, ainsi que les constructeurs automobiles, leurs équipementiers et les exploitants industriels.",
          de: "Zu den einstellenden Unternehmen zählen Siemens, Bosch und ZF sowie Automobilhersteller, ihre Zulieferer und Industriebetriebe.",
          en: "Employers include Siemens, Bosch and ZF, as well as car manufacturers, their suppliers and industrial operators.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Le métier connaît une pénurie nette : en 2024, on comptait environ 5 700 postes vacants pour environ 2 400 demandeurs d'emploi dans le domaine, soit plus de deux postes pour un candidat (source : Bundesagentur für Arbeit, 2024).",
          de: "Der Beruf weist einen klaren Mangel auf: 2024 standen etwa 5.700 offenen Stellen rund 2.400 Arbeitsuchende im Bereich gegenüber, also mehr als zwei Stellen pro Bewerber (Quelle: Bundesagentur für Arbeit, 2024).",
          en: "The trade shows a clear shortage: in 2024 there were about 5,700 vacancies for about 2,400 jobseekers in the field, more than two openings per candidate (source: Federal Employment Agency, 2024).",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers Techniker Mechatronik, vous spécialiser en automatisation et robotique, ou accéder à la fonction de chef d'équipe.",
          de: "Sie können sich zum Techniker Mechatronik weiterentwickeln, sich auf Automatisierung und Robotik spezialisieren oder eine Teamleitung übernehmen.",
          en: "You can progress to Techniker Mechatronik, specialize in automation and robotics, or move into a team leader role.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Sur le terrain, les consignes de sécurité, les instructions de travail et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons avec vous.",
          de: "Im Betrieb sind Sicherheitshinweise, Arbeitsanweisungen und Dokumentation auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und das ist das Niveau, das wir mit Ihnen anstreben.",
          en: "On site, safety instructions, work orders and documentation are in German. B2 is the standard expected by employers, and that is the level we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Ces métiers ne sont pas réglementés : vous n'avez pas besoin d'une reconnaissance pour exercer, mais le visa de travailleur qualifié demande une qualification reconnue équivalente à la formation allemande. Nous faisons évaluer votre diplôme et votre expérience, et engageons la procédure de reconnaissance (Anerkennung) avec vous.",
          de: "Diese Berufe sind nicht reglementiert: Für die Ausübung brauchen Sie keine Anerkennung, aber das Visum für Fachkräfte setzt eine anerkannte, der deutschen Ausbildung gleichwertige Qualifikation voraus. Wir lassen Ihren Abschluss und Ihre Erfahrung bewerten und leiten das Anerkennungsverfahren (Anerkennung) mit Ihnen ein.",
          en: "These occupations are not regulated: you do not need recognition to work in them, but the skilled worker visa requires a recognized qualification equivalent to the German training. We have your diploma and experience assessed and start the recognition procedure (Anerkennung) with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte (carte d'opportunité) pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit erlaubt, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte für die Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Berechtigung und stellen den Antrag mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognized qualification, the recognition partnership, which since March 2024 lets you enter and work while completing recognition on site (level A2 required), and the Chancenkarte (opportunity card) to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these trades. We check your eligibility and prepare the application with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, have your qualification recognized, present your profile to German employers, prepare the visa application and support you all the way to settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quelle est la différence avec l'électrotechnicien ?",
          de: "Was ist der Unterschied zum Elektrotechniker?",
          en: "What is the difference from the electrical technician?",
        },
        a: {
          fr: "Le mécatronicien combine mécanique, électronique et automatismes, alors que l'électrotechnicien est centré sur les installations électriques. Le mécatronicien intervient donc sur l'ensemble du système automatisé.",
          de: "Der Mechatroniker verbindet Mechanik, Elektronik und Automatisierung, während der Elektrotechniker auf elektrische Anlagen ausgerichtet ist. Der Mechatroniker arbeitet daher am gesamten automatisierten System.",
          en: "The mechatronics technician combines mechanics, electronics and automation, whereas the electrical technician focuses on electrical installations. The mechatronics technician therefore works on the whole automated system.",
        },
      },
      {
        q: {
          fr: "La documentation technique est-elle en allemand ?",
          de: "Ist die technische Dokumentation auf Deutsch?",
          en: "Is the technical documentation in German?",
        },
        a: {
          fr: "Oui : plans, schémas et manuels de maintenance sont en allemand, tout comme les échanges avec les équipes. Un bon niveau de langue est indispensable, et nous visons le B2.",
          de: "Ja: Pläne, Schaltbilder und Wartungshandbücher sind auf Deutsch, ebenso der Austausch mit den Teams. Ein gutes Sprachniveau ist unerlässlich, und wir streben B2 an.",
          en: "Yes: drawings, diagrams and maintenance manuals are in German, as are exchanges with the teams. A good language level is essential, and we aim for B2.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "technicien-maintenance": {
    slug: "technicien-maintenance",
    title: {
      fr: "Technicien de maintenance industrielle",
      de: "Instandhaltungstechniker",
      en: "Industrial maintenance technician",
    },
    intro: {
      fr: "Gardien du bon fonctionnement des usines, le technicien de maintenance industrielle est présent dans presque tous les secteurs de l'industrie allemande.",
      de: "Als Garant für den reibungslosen Betrieb der Werke ist der Instandhaltungstechniker in fast allen Branchen der deutschen Industrie gefragt.",
      en: "Guardian of smooth factory operation, the industrial maintenance technician is present in almost every sector of German industry.",
    },
    image: "technicien-maintenance",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le technicien de maintenance industrielle maintient les installations en état par la maintenance préventive et corrective. Il diagnostique et répare des systèmes mécaniques, électriques et hydrauliques.",
          de: "Der Instandhaltungstechniker hält die Industrieanlagen durch vorbeugende und korrektive Wartung in Betrieb. Er diagnostiziert und repariert mechanische, elektrische und hydraulische Systeme.",
          en: "The industrial maintenance technician keeps installations operational through preventive and corrective maintenance. He diagnoses and repairs mechanical, electrical and hydraulic systems.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "La moyenne est d'environ 3 163 € par mois (fourchette environ 2 610 à 3 548 €) ; l'entrée se situe vers 2 830 à 3 640 €, et avec une qualification supérieure (Techniker) environ 3 940 € (source : jobvector, 2025). Le terme regroupe des profils variés, ces fourchettes sont donc indicatives.",
          de: "Der Durchschnitt liegt bei etwa 3.163 € pro Monat (Spanne etwa 2.610 bis 3.548 €); der Einstieg liegt bei etwa 2.830 bis 3.640 €, mit einer höheren Qualifikation (Techniker) bei etwa 3.940 € (Quelle: jobvector, 2025). Der Begriff umfasst unterschiedliche Profile, die Spannen sind daher Richtwerte.",
          en: "The average is about 3,163 € per month (range about 2,610 to 3,548 €); entry is around 2,830 to 3,640 €, and with a higher qualification (Techniker) about 3,940 € (source: jobvector, 2025). The term covers varied profiles, so these ranges are indicative.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Presque tous les exploitants industriels recrutent : automobile, chimie, agroalimentaire, logistique et énergie.",
          de: "Nahezu alle Industriebetriebe stellen ein: Automobil, Chemie, Lebensmittel, Logistik und Energie.",
          en: "Almost all industrial operators hire: automotive, chemicals, food, logistics and energy.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Le métier fait partie de la pénurie qui touche les fonctions de maintenance, d'électricité et d'automatisation.",
          de: "Der Beruf gehört zu dem Mangel, der die Bereiche Instandhaltung, Elektrik und Automatisierung betrifft.",
          en: "The trade is part of the shortage affecting maintenance, electrical and automation roles.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers Techniker, vous spécialiser (électrotechnique, hydraulique, automatismes) ou devenir responsable maintenance.",
          de: "Sie können sich zum Techniker weiterentwickeln, sich spezialisieren (Elektrotechnik, Hydraulik, Automatisierung) oder Instandhaltungsleiter werden.",
          en: "You can progress to Techniker, specialize (electrical engineering, hydraulics, automation) or become a maintenance manager.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Sur le terrain, les consignes de sécurité, les instructions de travail et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons avec vous.",
          de: "Im Betrieb sind Sicherheitshinweise, Arbeitsanweisungen und Dokumentation auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und das ist das Niveau, das wir mit Ihnen anstreben.",
          en: "On site, safety instructions, work orders and documentation are in German. B2 is the standard expected by employers, and that is the level we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Ces métiers ne sont pas réglementés : vous n'avez pas besoin d'une reconnaissance pour exercer, mais le visa de travailleur qualifié demande une qualification reconnue équivalente à la formation allemande. Nous faisons évaluer votre diplôme et votre expérience, et engageons la procédure de reconnaissance (Anerkennung) avec vous.",
          de: "Diese Berufe sind nicht reglementiert: Für die Ausübung brauchen Sie keine Anerkennung, aber das Visum für Fachkräfte setzt eine anerkannte, der deutschen Ausbildung gleichwertige Qualifikation voraus. Wir lassen Ihren Abschluss und Ihre Erfahrung bewerten und leiten das Anerkennungsverfahren (Anerkennung) mit Ihnen ein.",
          en: "These occupations are not regulated: you do not need recognition to work in them, but the skilled worker visa requires a recognized qualification equivalent to the German training. We have your diploma and experience assessed and start the recognition procedure (Anerkennung) with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte (carte d'opportunité) pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit erlaubt, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte für die Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Berechtigung und stellen den Antrag mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognized qualification, the recognition partnership, which since March 2024 lets you enter and work while completing recognition on site (level A2 required), and the Chancenkarte (opportunity card) to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these trades. We check your eligibility and prepare the application with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, have your qualification recognized, present your profile to German employers, prepare the visa application and support you all the way to settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le travail se fait-il souvent en horaires postés ?",
          de: "Wird häufig in Schichten gearbeitet?",
          en: "Is the work often in shifts?",
        },
        a: {
          fr: "Oui : la maintenance suit le rythme de la production, et le travail en équipes (postes) est fréquent. Ces postes donnent souvent droit à des majorations prévues par la convention collective.",
          de: "Ja: Die Instandhaltung folgt dem Produktionsrhythmus, und Schichtarbeit ist häufig. Für diese Schichten gibt es oft tariflich vorgesehene Zulagen.",
          en: "Yes: maintenance follows the production rhythm, and shift work is common. These shifts often carry bonuses set by the collective agreement.",
        },
      },
      {
        q: {
          fr: "Faut-il être à la fois mécanicien et électricien ?",
          de: "Muss man zugleich Mechaniker und Elektriker sein?",
          en: "Do you need to be both a mechanic and an electrician?",
        },
        a: {
          fr: "Une bonne polyvalence entre mécanique et électricité est un atout, car les pannes touchent souvent plusieurs domaines. Vous pouvez ensuite vous spécialiser selon vos affinités.",
          de: "Eine gute Vielseitigkeit zwischen Mechanik und Elektrik ist ein Vorteil, da Störungen oft mehrere Bereiche betreffen. Später können Sie sich nach Ihren Vorlieben spezialisieren.",
          en: "Good versatility across mechanics and electrics is an asset, since breakdowns often affect several areas. You can then specialize according to your preferences.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  electrotechnicien: {
    slug: "electrotechnicien",
    title: {
      fr: "Électrotechnicien industriel",
      de: "Elektroniker / Elektrotechniker",
      en: "Industrial electrical technician",
    },
    intro: {
      fr: "Essentiel à toute usine moderne, l'électrotechnicien industriel installe et entretient les systèmes électriques et automatisés qui font tourner la production.",
      de: "Unverzichtbar für jedes moderne Werk, installiert und wartet der Elektrotechniker die elektrischen und automatisierten Systeme, die die Produktion antreiben.",
      en: "Essential to any modern plant, the industrial electrical technician installs and maintains the electrical and automation systems that keep production running.",
    },
    image: "electrotechnicien",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'électrotechnicien industriel installe, câble, met en service et entretient des installations électriques et d'automatisation, armoires et variateurs, selon les normes VDE et DGUV. Il travaille sur des équipements de puissance et de commande au cœur de l'usine.",
          de: "Der Elektrotechniker installiert, verdrahtet, nimmt in Betrieb und wartet elektrische und Automatisierungsanlagen, Schaltschränke und Frequenzumrichter, nach den Normen VDE und DGUV. Er arbeitet an Leistungs- und Steuerungstechnik im Kern des Werks.",
          en: "The industrial electrical technician installs, wires, commissions and maintains electrical and automation installations, control cabinets and drives, to VDE and DGUV standards. He works on power and control equipment at the heart of the plant.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Pour l'Elektroniker für Betriebstechnik, la médiane tous niveaux confondus se situe entre environ 4 137 et 4 296 € par mois ; la variante Industrieelektriker (formation de 2 ans) affiche une médiane d'environ 4 627 € par mois (quartiles 3 863 à 5 350 €) (source : Entgeltatlas, Bundesagentur für Arbeit, 2024). L'entrée se situe vers 3 000 à 3 200 €. La rémunération relève souvent de la convention IG Metall (prime de congés, prime de Noël, majorations de poste, semaine de 35 heures).",
          de: "Für den Elektroniker für Betriebstechnik liegt der Median über alle Erfahrungsstufen zwischen etwa 4.137 und 4.296 € pro Monat; die Variante Industrieelektriker (2-jährige Ausbildung) weist einen Median von etwa 4.627 € pro Monat auf (Quartile 3.863 bis 5.350 €) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2024). Der Einstieg liegt bei etwa 3.000 bis 3.200 €. Die Vergütung fällt oft unter den Tarifvertrag der IG Metall (Urlaubsgeld, Weihnachtsgeld, Schichtzulagen, 35-Stunden-Woche).",
          en: "For the Elektroniker für Betriebstechnik, the median across all experience levels is between about 4,137 and 4,296 € per month; the Industrieelektriker variant (2-year training) shows a median of about 4,627 € per month (quartiles 3,863 to 5,350 €) (source: Entgeltatlas, Federal Employment Agency, 2024). Entry is around 3,000 to 3,200 €. Pay often falls under the IG Metall collective agreement (holiday pay, Christmas pay, shift bonuses, 35-hour week).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Les recruteurs se trouvent dans l'industrie métallurgique et électrique, chez les énergéticiens, les exploitants d'installations et les intégrateurs d'automatismes.",
          de: "Einstellende Arbeitgeber finden sich in der Metall- und Elektroindustrie, bei Energieversorgern, Anlagenbetreibern und Systemintegratoren für Automatisierung.",
          en: "Employers are found in the metal and electrical industry, among energy providers, plant operators and automation integrators.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts, surtout côté métiers, portés par la transition énergétique ; pour la classification purement industrielle, la Bundesagentur für Arbeit parlait en 2024 d'un suivi de la situation plutôt que d'une pénurie certifiée.",
          de: "Die Perspektiven sind gut, vor allem im handwerklichen Bereich, getragen von der Energiewende; für die rein industrielle Einordnung sprach die Bundesagentur für Arbeit 2024 von einer Beobachtung der Lage statt von einem festgestellten Mangel.",
          en: "Prospects are strong, especially on the trades side, driven by the energy transition; for the purely industrial classification, the Federal Employment Agency in 2024 spoke of monitoring the situation rather than a certified shortage.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers Techniker ou Meister, vous spécialiser en automatisation ou en sécurité électrique, et accéder à la conduite d'équipe.",
          de: "Sie können sich zum Techniker oder Meister weiterentwickeln, sich auf Automatisierung oder elektrische Sicherheit spezialisieren und eine Teamleitung übernehmen.",
          en: "You can progress to Techniker or Meister, specialize in automation or electrical safety, and move into team leadership.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Sur le terrain, les consignes de sécurité, les instructions de travail et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons avec vous.",
          de: "Im Betrieb sind Sicherheitshinweise, Arbeitsanweisungen und Dokumentation auf Deutsch. B2 ist der von den Arbeitgebern erwartete Standard, und das ist das Niveau, das wir mit Ihnen anstreben.",
          en: "On site, safety instructions, work orders and documentation are in German. B2 is the standard expected by employers, and that is the level we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Ces métiers ne sont pas réglementés : vous n'avez pas besoin d'une reconnaissance pour exercer, mais le visa de travailleur qualifié demande une qualification reconnue équivalente à la formation allemande. Nous faisons évaluer votre diplôme et votre expérience, et engageons la procédure de reconnaissance (Anerkennung) avec vous.",
          de: "Diese Berufe sind nicht reglementiert: Für die Ausübung brauchen Sie keine Anerkennung, aber das Visum für Fachkräfte setzt eine anerkannte, der deutschen Ausbildung gleichwertige Qualifikation voraus. Wir lassen Ihren Abschluss und Ihre Erfahrung bewerten und leiten das Anerkennungsverfahren (Anerkennung) mit Ihnen ein.",
          en: "These occupations are not regulated: you do not need recognition to work in them, but the skilled worker visa requires a recognized qualification equivalent to the German training. We have your diploma and experience assessed and start the recognition procedure (Anerkennung) with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte (carte d'opportunité) pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit erlaubt, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte für die Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Berechtigung und stellen den Antrag mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognized qualification, the recognition partnership, which since March 2024 lets you enter and work while completing recognition on site (level A2 required), and the Chancenkarte (opportunity card) to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these trades. We check your eligibility and prepare the application with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, have your qualification recognized, present your profile to German employers, prepare the visa application and support you all the way to settling in.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Est-ce un métier à risque ?",
          de: "Ist das ein gefährlicher Beruf?",
          en: "Is it a hazardous trade?",
        },
        a: {
          fr: "Oui : le travail sur les installations électriques est encadré par des normes strictes (VDE, DGUV V3) qui protègent la sécurité. Le respect des procédures et la maîtrise de l'allemand technique sont essentiels.",
          de: "Ja: Die Arbeit an elektrischen Anlagen ist durch strenge Normen (VDE, DGUV V3) geregelt, die die Sicherheit schützen. Das Einhalten der Vorschriften und die Beherrschung des technischen Deutsch sind entscheidend.",
          en: "Yes: work on electrical installations is governed by strict standards (VDE, DGUV V3) that protect safety. Following procedures and mastering technical German are essential.",
        },
      },
      {
        q: {
          fr: "Quelle différence avec l'électricien du bâtiment ?",
          de: "Was ist der Unterschied zum Gebäudeelektriker?",
          en: "How does it differ from a building electrician?",
        },
        a: {
          fr: "L'électrotechnicien industriel travaille sur les machines, les automatismes et les installations de puissance de l'usine, alors que l'électricien du bâtiment intervient sur les installations des logements et bâtiments. Les environnements et les normes diffèrent.",
          de: "Der Elektrotechniker in der Industrie arbeitet an Maschinen, Automatisierung und Leistungsanlagen des Werks, während der Gebäudeelektriker an den Anlagen von Wohnungen und Gebäuden arbeitet. Umgebung und Normen unterscheiden sich.",
          en: "The industrial electrical technician works on the plant's machines, automation and power installations, whereas the building electrician works on the installations of homes and buildings. The environments and standards differ.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
