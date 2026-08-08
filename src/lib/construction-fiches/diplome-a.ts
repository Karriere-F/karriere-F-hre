import type { ConstructionFiche } from "../construction-fiche-types";
import { SALARY_NOTE } from "../construction-fiche-types";

export const CONSTR_FICHES_DIPLOME_A: Record<string, ConstructionFiche> = {
  macon: {
    slug: "macon",
    image: "macon",
    title: {
      fr: "Maçon",
      de: "Maurer",
      en: "Bricklayer",
    },
    intro: {
      fr: "Votre savoir-faire de maçon bâtit concrètement l'Allemagne : un métier de gros oeuvre reconnu, recherché et solide.",
      de: "Ihr Können als Maurer baut Deutschland ganz konkret: ein anerkannter, gefragter und solider Rohbauberuf.",
      en: "Your bricklaying skills literally build Germany: a recognised, sought-after and solid structural trade.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le maçon réalise le gros oeuvre : il monte les murs en briques, en blocs et en béton, et coule des éléments en béton. Il lit les plans et travaille avec précision.",
          de: "Der Maurer erstellt den Rohbau: Er zieht Wände aus Ziegeln, Blöcken und Beton hoch und gießt Betonelemente. Er liest Baupläne und arbeitet präzise.",
          en: "The bricklayer carries out structural work: building walls in brick, block and concrete, and pouring concrete elements. They read plans and work with precision.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 2 600 à 2 670 € par mois, avec une médiane autour de 3 100 €, une moyenne d'environ 3 388 €, et au-delà de 3 700 € avec l'expérience (source : agrégateurs citant l'Entgeltatlas, 2025). Le minimum de branche garanti pour un ouvrier qualifié (Mindestlohn Bau) est d'environ 17,34 €/h en 2026, au-dessus du salaire minimum général, ce qui constitue un plancher sûr.",
          de: "Das Einstiegsgehalt liegt bei etwa 2.600 bis 2.670 € pro Monat, mit einem Median um 3.100 €, einem Durchschnitt von rund 3.388 € und über 3.700 € mit Erfahrung (Quelle: Aggregatoren mit Bezug auf den Entgeltatlas, 2025). Der garantierte Branchenmindestlohn für Fachkräfte (Mindestlohn Bau) beträgt 2026 rund 17,34 €/h, über dem allgemeinen Mindestlohn, und bildet eine sichere Untergrenze.",
          en: "The entry salary is around 2,600 to 2,670 € per month, with a median near 3,100 €, an average of about 3,388 €, and above 3,700 € with experience (source: aggregators citing the Entgeltatlas, 2025). The guaranteed sector minimum for skilled workers (Mindestlohn Bau) is about 17.34 €/h in 2026, above the general minimum wage, which sets a safe floor.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les entreprises de gros oeuvre (Hochbau), les promoteurs (Bauträger), ainsi que les grands groupes et le Mittelstand du bâtiment recrutent des maçons.",
          de: "Rohbau- und Hochbaufirmen, Bauträger sowie große Konzerne und der Mittelstand am Bau stellen Maurer ein.",
          en: "Structural and shell construction firms (Hochbau), property developers (Bauträger), as well as large groups and the construction Mittelstand hire bricklayers.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts : la maçonnerie est explicitement citée comme métier en pénurie (source : Bundesagentur für Arbeit, 2024).",
          de: "Die Perspektiven sind sehr gut: Das Maurerhandwerk wird ausdrücklich als Mangelberuf genannt (Quelle: Bundesagentur für Arbeit, 2024).",
          en: "Prospects are very strong: bricklaying is explicitly listed as a shortage occupation (source: Federal Employment Agency, 2024).",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers chef d'équipe (Vorarbeiter), chef de chantier (Polier), maître artisan (Meister) ou technicien du bâtiment.",
          de: "Sie können sich zum Vorarbeiter, Polier, Meister oder Bautechniker weiterentwickeln.",
          en: "You can progress to team leader (Vorarbeiter), site foreman (Polier), master craftsman (Meister) or construction technician.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Sur le chantier, les consignes de sécurité, les instructions et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Auf der Baustelle sind Sicherheitshinweise, Anweisungen und Dokumentation auf Deutsch. B2 ist der von Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "On site, safety instructions, directions and documentation are in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung des Abschlusses", en: "Diploma recognition" },
        body: {
          fr: "Ces métiers du bâtiment sont des métiers artisanaux qualifiés. Le titre de maître (Meister) n'est exigé que pour s'installer à son compte, pas pour être salarié. Pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) par la chambre des métiers est nécessaire ; nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Diese Bauberufe sind qualifizierte Handwerksberufe. Der Meistertitel ist nur für die Selbstständigkeit erforderlich, nicht für eine Anstellung. Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation durch die Handwerkskammer nötig; wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "These construction trades are skilled crafts. The master title (Meister) is only required to set up your own business, not to work as an employee. For the skilled-worker visa, recognition of your qualification (Anerkennung) by the chamber of crafts is needed; we have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Hauptwege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit ermöglicht, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitssuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled-worker visa with a recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (A2 level required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these trades. We check your eligibility and build the file with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumsantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, have your qualification recognised, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Faut-il le Meister pour travailler comme maçon en Allemagne ?",
          de: "Braucht man den Meister, um als Maurer in Deutschland zu arbeiten ?",
          en: "Do you need the Meister to work as a bricklayer in Germany ?",
        },
        a: {
          fr: "Non : le titre de maître n'est exigé que pour s'installer à son compte, pas pour être salarié dans une entreprise.",
          de: "Nein: Der Meistertitel ist nur für die Selbstständigkeit erforderlich, nicht für eine Anstellung in einem Betrieb.",
          en: "No: the master title is only required to set up your own business, not to work as an employee in a company.",
        },
      },
      {
        q: {
          fr: "Le travail est-il physique et en extérieur ?",
          de: "Ist die Arbeit körperlich und im Freien ?",
          en: "Is the work physical and outdoors ?",
        },
        a: {
          fr: "Oui, la maçonnerie est un métier physique qui s'exerce en grande partie en extérieur, sur les chantiers.",
          de: "Ja, das Maurerhandwerk ist körperlich anspruchsvoll und findet größtenteils im Freien auf Baustellen statt.",
          en: "Yes, bricklaying is a physical trade carried out largely outdoors, on construction sites.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "plombier-chauffagiste": {
    slug: "plombier-chauffagiste",
    image: "plombier-chauffagiste",
    title: {
      fr: "Plombier-chauffagiste",
      de: "Anlagenmechaniker SHK",
      en: "Plumbing and heating technician",
    },
    intro: {
      fr: "Au coeur de la transition énergétique allemande, votre métier de plombier-chauffagiste figure parmi les plus recherchés du pays.",
      de: "Im Herzen der deutschen Energiewende gehört Ihr Beruf als Anlagenmechaniker SHK zu den gefragtesten des Landes.",
      en: "At the heart of Germany's energy transition, your trade as a plumbing and heating technician is among the most sought-after in the country.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le plombier-chauffagiste installe et entretient les systèmes sanitaires, de chauffage et de climatisation. Il travaille notamment sur les pompes à chaleur et le chauffage renouvelable.",
          de: "Der Anlagenmechaniker SHK installiert und wartet Sanitär-, Heizungs- und Klimaanlagen. Er arbeitet insbesondere an Wärmepumpen und erneuerbaren Heizsystemen.",
          en: "The plumbing and heating technician installs and maintains sanitary, heating and air-conditioning systems. They work in particular on heat pumps and renewable heating.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 2 840 € par mois, et la moyenne avec l'expérience atteint environ 3 999 € (source : powerus, hero-software, 2025). Le minimum de branche garanti pour un ouvrier qualifié (Mindestlohn Bau) est d'environ 17,34 €/h en 2026, au-dessus du salaire minimum général, ce qui constitue un plancher sûr.",
          de: "Das Einstiegsgehalt liegt bei etwa 2.840 € pro Monat, und der Durchschnitt mit Erfahrung erreicht rund 3.999 € (Quelle: powerus, hero-software, 2025). Der garantierte Branchenmindestlohn für Fachkräfte (Mindestlohn Bau) beträgt 2026 rund 17,34 €/h, über dem allgemeinen Mindestlohn, und bildet eine sichere Untergrenze.",
          en: "The entry salary is around 2,840 € per month, and the average with experience reaches about 3,999 € (source: powerus, hero-software, 2025). The guaranteed sector minimum for skilled workers (Mindestlohn Bau) is about 17.34 €/h in 2026, above the general minimum wage, which sets a safe floor.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les entreprises SHK et de chauffage, ainsi que le génie climatique et la technique du bâtiment (TGA), recrutent des plombiers-chauffagistes.",
          de: "SHK- und Heizungsbetriebe sowie die Klimatechnik und die technische Gebäudeausrüstung (TGA) stellen Anlagenmechaniker SHK ein.",
          en: "SHK and heating firms, as well as climate engineering and building services (TGA), hire plumbing and heating technicians.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont extrêmement forts : c'est un des métiers les plus recherchés, porté par la transition énergétique et les pompes à chaleur.",
          de: "Die Perspektiven sind äußerst gut: Es ist einer der gefragtesten Berufe, getragen von der Energiewende und den Wärmepumpen.",
          en: "Prospects are extremely strong: it is one of the most sought-after trades, driven by the energy transition and heat pumps.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers maître artisan (Meister), technicien, chef d'équipe ou conseil en énergie.",
          de: "Sie können sich zum Meister, Techniker, Vorarbeiter oder in die Energieberatung weiterentwickeln.",
          en: "You can progress to master craftsman (Meister), technician, team leader or energy consultant.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Sur le chantier, les consignes de sécurité, les instructions et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Auf der Baustelle sind Sicherheitshinweise, Anweisungen und Dokumentation auf Deutsch. B2 ist der von Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "On site, safety instructions, directions and documentation are in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung des Abschlusses", en: "Diploma recognition" },
        body: {
          fr: "Ces métiers du bâtiment sont des métiers artisanaux qualifiés. Le titre de maître (Meister) n'est exigé que pour s'installer à son compte, pas pour être salarié. Pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) par la chambre des métiers est nécessaire ; nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Diese Bauberufe sind qualifizierte Handwerksberufe. Der Meistertitel ist nur für die Selbstständigkeit erforderlich, nicht für eine Anstellung. Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation durch die Handwerkskammer nötig; wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "These construction trades are skilled crafts. The master title (Meister) is only required to set up your own business, not to work as an employee. For the skilled-worker visa, recognition of your qualification (Anerkennung) by the chamber of crafts is needed; we have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Hauptwege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit ermöglicht, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitssuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled-worker visa with a recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (A2 level required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these trades. We check your eligibility and build the file with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumsantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, have your qualification recognised, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Ce métier est-il vraiment au coeur de la transition énergétique ?",
          de: "Steht dieser Beruf wirklich im Zentrum der Energiewende ?",
          en: "Is this trade really at the heart of the energy transition ?",
        },
        a: {
          fr: "Oui : l'installation des pompes à chaleur et du chauffage renouvelable place le plombier-chauffagiste au coeur de la transition énergétique allemande.",
          de: "Ja: Die Installation von Wärmepumpen und erneuerbaren Heizsystemen stellt den Anlagenmechaniker SHK ins Zentrum der deutschen Energiewende.",
          en: "Yes: installing heat pumps and renewable heating places the plumbing and heating technician at the heart of Germany's energy transition.",
        },
      },
      {
        q: {
          fr: "Faut-il le Meister pour être salarié ?",
          de: "Braucht man den Meister, um angestellt zu sein ?",
          en: "Do you need the Meister to be an employee ?",
        },
        a: {
          fr: "Non : le Meister n'est requis que pour s'installer à son compte, pas pour travailler comme salarié dans une entreprise.",
          de: "Nein: Der Meister ist nur für die Selbstständigkeit erforderlich, nicht für eine Anstellung in einem Betrieb.",
          en: "No: the Meister is only required to set up your own business, not to work as an employee in a company.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "electricien-batiment": {
    slug: "electricien-batiment",
    image: "electricien-batiment",
    title: {
      fr: "Électricien du bâtiment",
      de: "Elektroniker für Gebäudetechnik",
      en: "Building electrician",
    },
    intro: {
      fr: "Portée par la transition énergétique, votre expertise d'électricien du bâtiment est très recherchée sur les chantiers allemands.",
      de: "Getragen von der Energiewende ist Ihre Expertise als Elektroniker für Gebäudetechnik auf deutschen Baustellen sehr gefragt.",
      en: "Driven by the energy transition, your expertise as a building electrician is highly sought-after on German sites.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'électricien du bâtiment réalise et entretient les installations électriques du bâtiment : tableaux, éclairage, domotique et photovoltaïque.",
          de: "Der Elektroniker für Gebäudetechnik errichtet und wartet die Elektroinstallationen im Gebäude: Verteiler, Beleuchtung, Gebäudeautomation und Photovoltaik.",
          en: "The building electrician installs and maintains a building's electrical systems: distribution boards, lighting, home automation and photovoltaics.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 2 700 € par mois, avec une moyenne d'environ 3 280 €, et jusqu'à environ 4 200 € avec une longue expérience (source : durchschnittsgehalt.com, 2025). Le minimum de branche garanti pour un ouvrier qualifié (Mindestlohn Bau) est d'environ 17,34 €/h en 2026, au-dessus du salaire minimum général, ce qui constitue un plancher sûr.",
          de: "Das Einstiegsgehalt liegt bei etwa 2.700 € pro Monat, mit einem Durchschnitt von rund 3.280 € und bis zu etwa 4.200 € bei langer Erfahrung (Quelle: durchschnittsgehalt.com, 2025). Der garantierte Branchenmindestlohn für Fachkräfte (Mindestlohn Bau) beträgt 2026 rund 17,34 €/h, über dem allgemeinen Mindestlohn, und bildet eine sichere Untergrenze.",
          en: "The entry salary is around 2,700 € per month, with an average of about 3,280 €, and up to about 4,200 € with long experience (source: durchschnittsgehalt.com, 2025). The guaranteed sector minimum for skilled workers (Mindestlohn Bau) is about 17.34 €/h in 2026, above the general minimum wage, which sets a safe floor.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les entreprises d'installation électrique, le génie climatique (TGA), ainsi que les installateurs solaires et de bâtiment intelligent recrutent des électriciens du bâtiment.",
          de: "Elektroinstallationsbetriebe, die technische Gebäudeausrüstung (TGA) sowie Solar- und Smart-Building-Installateure stellen Elektroniker für Gebäudetechnik ein.",
          en: "Electrical installation firms, building services (TGA), as well as solar and smart-building installers hire building electricians.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts, portés par la transition énergétique.",
          de: "Die Perspektiven sind sehr gut und werden von der Energiewende getragen.",
          en: "Prospects are very strong, driven by the energy transition.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers maître artisan (Meister), technicien ou automatisation du bâtiment.",
          de: "Sie können sich zum Meister, Techniker oder in die Gebäudeautomation weiterentwickeln.",
          en: "You can progress to master craftsman (Meister), technician or building automation.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Sur le chantier, les consignes de sécurité, les instructions et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Auf der Baustelle sind Sicherheitshinweise, Anweisungen und Dokumentation auf Deutsch. B2 ist der von Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "On site, safety instructions, directions and documentation are in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung des Abschlusses", en: "Diploma recognition" },
        body: {
          fr: "Ces métiers du bâtiment sont des métiers artisanaux qualifiés. Le titre de maître (Meister) n'est exigé que pour s'installer à son compte, pas pour être salarié. Pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) par la chambre des métiers est nécessaire ; nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Diese Bauberufe sind qualifizierte Handwerksberufe. Der Meistertitel ist nur für die Selbstständigkeit erforderlich, nicht für eine Anstellung. Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation durch die Handwerkskammer nötig; wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "These construction trades are skilled crafts. The master title (Meister) is only required to set up your own business, not to work as an employee. For the skilled-worker visa, recognition of your qualification (Anerkennung) by the chamber of crafts is needed; we have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Hauptwege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit ermöglicht, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitssuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled-worker visa with a recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (A2 level required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these trades. We check your eligibility and build the file with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumsantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, have your qualification recognised, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le métier est-il encadré par des règles de sécurité ?",
          de: "Ist der Beruf durch Sicherheitsvorschriften geregelt ?",
          en: "Is the trade governed by safety rules ?",
        },
        a: {
          fr: "Oui : le travail sur les installations électriques est strictement encadré par des règles de sécurité qu'il faut connaître et respecter.",
          de: "Ja: Die Arbeit an Elektroinstallationen ist streng durch Sicherheitsvorschriften geregelt, die man kennen und einhalten muss.",
          en: "Yes: work on electrical installations is strictly governed by safety rules that must be known and followed.",
        },
      },
      {
        q: {
          fr: "Quelle est la différence avec l'électricien industriel ?",
          de: "Was ist der Unterschied zum Industrieelektroniker ?",
          en: "What is the difference from an industrial electrician ?",
        },
        a: {
          fr: "Ici, il s'agit du bâtiment et de la technique du bâtiment, alors que l'électricien industriel travaille sur les machines et les installations de production.",
          de: "Hier geht es um das Gebäude und die Gebäudetechnik, während der Industrieelektroniker an Maschinen und Produktionsanlagen arbeitet.",
          en: "Here the focus is on buildings and building technology, whereas the industrial electrician works on machines and production plants.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  charpentier: {
    slug: "charpentier",
    image: "charpentier",
    title: {
      fr: "Charpentier",
      de: "Zimmerer",
      en: "Carpenter",
    },
    intro: {
      fr: "Portée par la croissance de la construction bois, votre maîtrise de charpentier trouve en Allemagne un marché en pleine expansion.",
      de: "Getragen vom Wachstum des Holzbaus findet Ihr Können als Zimmerer in Deutschland einen stark wachsenden Markt.",
      en: "Carried by the growth of timber construction, your carpentry skills find an expanding market in Germany.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le charpentier réalise des ouvrages en bois : charpentes, ossatures, maisons à ossature bois, escaliers et construction bois.",
          de: "Der Zimmerer erstellt Bauwerke aus Holz: Dachstühle, Tragwerke, Holzrahmenhäuser, Treppen und Holzbau.",
          en: "The carpenter builds timber structures: roof frames, framing, timber-frame houses, staircases and wood construction.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée débute à partir d'environ 2 960 € par mois et augmente avec l'expérience et la région (en Bavière, un ouvrier qualifié atteint environ 26 €/h) (source : powerus, ulmato, 2025). Le minimum de branche garanti pour un ouvrier qualifié (Mindestlohn Bau) est d'environ 17,34 €/h en 2026, au-dessus du salaire minimum général, ce qui constitue un plancher sûr.",
          de: "Das Einstiegsgehalt beginnt bei etwa 2.960 € pro Monat und steigt mit Erfahrung und Region (in Bayern erreicht eine Fachkraft rund 26 €/h) (Quelle: powerus, ulmato, 2025). Der garantierte Branchenmindestlohn für Fachkräfte (Mindestlohn Bau) beträgt 2026 rund 17,34 €/h, über dem allgemeinen Mindestlohn, und bildet eine sichere Untergrenze.",
          en: "The entry salary starts from around 2,960 € per month and rises with experience and region (in Bavaria, a skilled worker reaches about 26 €/h) (source: powerus, ulmato, 2025). The guaranteed sector minimum for skilled workers (Mindestlohn Bau) is about 17.34 €/h in 2026, above the general minimum wage, which sets a safe floor.",
        },
      },
      {
        heading: { fr: "Entreprises qui recrutent", de: "Unternehmen, die einstellen", en: "Employers hiring" },
        body: {
          fr: "Les entreprises de charpente et de construction bois (Holzbau), la couverture et les maisons préfabriquées en bois recrutent des charpentiers.",
          de: "Zimmerei- und Holzbaubetriebe, die Bedachung und Hersteller von Holzfertighäusern stellen Zimmerer ein.",
          en: "Carpentry and timber construction firms (Holzbau), roofing and prefabricated timber house makers hire carpenters.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts, portés par la croissance de la construction bois.",
          de: "Die Perspektiven sind gut und werden vom Wachstum des Holzbaus getragen.",
          en: "Prospects are strong, driven by the growth of timber construction.",
        },
      },
      {
        heading: { fr: "Évolution de carrière", de: "Karriereentwicklung", en: "Career progression" },
        body: {
          fr: "Vous pouvez évoluer vers chef d'équipe, chef de chantier (Polier), maître artisan (Meister) ou technicien construction bois.",
          de: "Sie können sich zum Vorarbeiter, Polier, Meister oder Holzbautechniker weiterentwickeln.",
          en: "You can progress to team leader, site foreman (Polier), master craftsman (Meister) or timber construction technician.",
        },
      },
      {
        heading: { fr: "Niveau d'allemand", de: "Sprachniveau", en: "Language level" },
        body: {
          fr: "Sur le chantier, les consignes de sécurité, les instructions et la documentation sont en allemand. Le B2 est la norme attendue par les employeurs, et c'est le niveau que nous visons.",
          de: "Auf der Baustelle sind Sicherheitshinweise, Anweisungen und Dokumentation auf Deutsch. B2 ist der von Arbeitgebern erwartete Standard, und genau dieses Niveau streben wir an.",
          en: "On site, safety instructions, directions and documentation are in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: { fr: "Reconnaissance du diplôme", de: "Anerkennung des Abschlusses", en: "Diploma recognition" },
        body: {
          fr: "Ces métiers du bâtiment sont des métiers artisanaux qualifiés. Le titre de maître (Meister) n'est exigé que pour s'installer à son compte, pas pour être salarié. Pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) par la chambre des métiers est nécessaire ; nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Diese Bauberufe sind qualifizierte Handwerksberufe. Der Meistertitel ist nur für die Selbstständigkeit erforderlich, nicht für eine Anstellung. Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation durch die Handwerkskammer nötig; wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "These construction trades are skilled crafts. The master title (Meister) is only required to set up your own business, not to work as an employee. For the skilled-worker visa, recognition of your qualification (Anerkennung) by the chamber of crafts is needed; we have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die Hauptwege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit ermöglicht, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitssuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Eignung und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled-worker visa with a recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (A2 level required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these trades. We check your eligibility and build the file with you.",
        },
      },
      {
        heading: { fr: "L'accompagnement Karriere Fähre", de: "Ihre Begleitung durch Karriere Fähre", en: "Your Karriere Fähre support" },
        body: {
          fr: "Nous vous formons à l'allemand jusqu'au niveau utile, faisons reconnaître votre qualification, valorisons votre profil auprès des employeurs allemands, préparons le dossier de visa et vous accompagnons jusqu'à votre installation.",
          de: "Wir bringen Ihnen Deutsch bis zum nötigen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumsantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the required level, have your qualification recognised, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Le métier implique-t-il de travailler en hauteur ?",
          de: "Bedeutet der Beruf Arbeit in der Höhe ?",
          en: "Does the trade involve working at height ?",
        },
        a: {
          fr: "Oui : le charpentier travaille souvent en hauteur et sur charpente, ce qui demande de la vigilance et le respect des règles de sécurité.",
          de: "Ja: Der Zimmerer arbeitet oft in der Höhe und am Dachstuhl, was Aufmerksamkeit und die Einhaltung der Sicherheitsregeln erfordert.",
          en: "Yes: the carpenter often works at height and on roof frames, which demands vigilance and adherence to safety rules.",
        },
      },
      {
        q: {
          fr: "La construction bois est-elle en croissance ?",
          de: "Wächst der Holzbau ?",
          en: "Is timber construction growing ?",
        },
        a: {
          fr: "Oui : la construction bois est en croissance en Allemagne, ce qui soutient durablement la demande de charpentiers qualifiés.",
          de: "Ja: Der Holzbau wächst in Deutschland, was die Nachfrage nach qualifizierten Zimmerern dauerhaft stützt.",
          en: "Yes: timber construction is growing in Germany, which durably supports the demand for skilled carpenters.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
