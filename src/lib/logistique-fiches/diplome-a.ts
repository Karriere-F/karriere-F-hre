import type { LogistiqueFiche } from "../logistique-fiche-types";
import { SALARY_NOTE } from "../logistique-fiche-types";

export const LOG_FICHES_DIPLOME_A: Record<string, LogistiqueFiche> = {
  "conducteur-poids-lourd": {
    slug: "conducteur-poids-lourd",
    image: "conducteur-poids-lourd",
    title: {
      fr: "Conducteur poids lourd",
      de: "Berufskraftfahrer",
      en: "Truck driver",
    },
    intro: {
      fr: "Un métier en pénurie en Allemagne, où votre expérience de la route peut devenir un emploi stable et bien payé.",
      de: "Ein Mangelberuf in Deutschland, in dem Ihre Fahrerfahrung zu einer stabilen und gut bezahlten Stelle werden kann.",
      en: "A shortage occupation in Germany, where your experience on the road can become a stable and well paid job.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le conducteur poids lourd transporte des marchandises en camion, charge et arrime le fret, planifie les itinéraires et respecte les temps de conduite et de repos.",
          de: "Der Berufskraftfahrer transportiert Waren mit dem Lkw, lädt und sichert die Fracht, plant die Routen und hält die Lenk- und Ruhezeiten ein.",
          en: "The truck driver transports goods by lorry, loads and secures the freight, plans routes and respects driving and rest times.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée médian est d'environ 2 770 €/mois, souvent 2 900 à 3 400 € avec les permis C/CE, et le salaire médian tous niveaux d'expérience confondus est d'environ 3 048 €/mois (fourchette 2 614 à 3 614 €) (source : Entgeltatlas, Bundesagentur für Arbeit, 2026).",
          de: "Das mittlere Einstiegsgehalt liegt bei etwa 2.770 €/Monat, mit den Führerscheinklassen C/CE oft 2.900 bis 3.400 €, und der Median über alle Erfahrungsstufen liegt bei etwa 3.048 €/Monat (Spanne 2.614 bis 3.614 €) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2026).",
          en: "The median entry salary is around 2,770 €/month, often 2,900 to 3,400 € with the C/CE licences, and the median across all experience levels is around 3,048 €/month (range 2,614 to 3,614 €) (source: Entgeltatlas, Bundesagentur für Arbeit, 2026).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Parmi les employeurs figurent DHL Freight, DACHSER, DB Schenker, Kühne und Nagel, Hellmann et Rhenus.",
          de: "Zu den Arbeitgebern gehören DHL Freight, DACHSER, DB Schenker, Kühne und Nagel, Hellmann und Rhenus.",
          en: "Employers include DHL Freight, DACHSER, DB Schenker, Kühne und Nagel, Hellmann and Rhenus.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont très forts : le conducteur routier est un métier officiellement en pénurie (Engpassberuf) reconnu par la Bundesagentur für Arbeit, avec un déficit de plusieurs dizaines de milliers de conducteurs (source : Bundesagentur für Arbeit, 2024).",
          de: "Die Perspektiven sind sehr gut: Der Berufskraftfahrer ist ein offiziell von der Bundesagentur für Arbeit anerkannter Engpassberuf, mit einem Mangel von mehreren Zehntausend Fahrern (Quelle: Bundesagentur für Arbeit, 2024).",
          en: "Prospects are very strong: the truck driver is officially a shortage occupation (Engpassberuf) recognised by the Federal Employment Agency, with a shortfall of several tens of thousands of drivers (source: Bundesagentur für Arbeit, 2024).",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez devenir conducteur spécialisé (matières dangereuses, citerne), formateur ou affréteur (Disponent).",
          de: "Sie können sich zum Spezialfahrer (Gefahrgut, Tank), Ausbilder oder Disponenten weiterentwickeln.",
          en: "You can move up to specialised driver (dangerous goods, tanker), trainer or freight planner (Disponent).",
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
          de: "Im Berufsalltag sind Sicherheitshinweise, Anweisungen und Dokumentation auf Deutsch. B2 ist das von den Arbeitgebern erwartete Niveau, und genau dieses Niveau streben wir an.",
          en: "On the ground, safety instructions, directions and documentation are in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Pour conduire un poids lourd, votre permis étranger doit être converti (Umschreibung) et, pour les classes C/CE, l'examen allemand est en général à repasser ; il faut aussi la qualification de conducteur professionnel (Grundqualifikation, code 95) et une visite médicale. La voie la plus simple est souvent de se former en Allemagne, qui intègre permis et qualification. Nous vous orientons et engageons les démarches avec vous.",
          de: "Um einen Lkw zu fahren, muss Ihr ausländischer Führerschein umgeschrieben werden, und für die Klassen C/CE ist die deutsche Prüfung in der Regel erneut abzulegen; hinzu kommen die Grundqualifikation als Berufskraftfahrer (Schlüsselzahl 95) und eine ärztliche Untersuchung. Der einfachste Weg ist oft eine Ausbildung in Deutschland, die Führerschein und Qualifikation verbindet. Wir beraten Sie und leiten die Schritte gemeinsam mit Ihnen ein.",
          en: "To drive a heavy vehicle, your foreign licence must be converted (Umschreibung) and, for the C/CE classes, the German test generally has to be retaken; you also need the professional driver qualification (Grundqualifikation, code 95) and a medical examination. The simplest route is often to train in Germany, which combines licence and qualification. We guide you and start the procedures with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die es seit März 2024 erlaubt, einzureisen und zu arbeiten, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Voraussetzungen und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (level A2 required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these occupations. We check your eligibility and build the file with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumsantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, get your qualification recognised, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Mon permis étranger suffit-il pour conduire un poids lourd en Allemagne ?",
          de: "Reicht mein ausländischer Führerschein aus, um in Deutschland einen Lkw zu fahren?",
          en: "Is my foreign licence enough to drive a truck in Germany?",
        },
        a: {
          fr: "Non : le permis étranger doit être converti et, pour le poids lourd, un nouvel examen est le plus souvent nécessaire, en plus du code 95.",
          de: "Nein: Der ausländische Führerschein muss umgeschrieben werden, und für den Lkw ist meistens eine neue Prüfung erforderlich, zusätzlich zur Schlüsselzahl 95.",
          en: "No: the foreign licence must be converted and, for the heavy vehicle, a new test is usually required, on top of code 95.",
        },
      },
      {
        q: {
          fr: "Qu'est-ce que le code 95 ?",
          de: "Was ist die Schlüsselzahl 95?",
          en: "What is code 95?",
        },
        a: {
          fr: "C'est la qualification obligatoire de conducteur professionnel, inscrite sur le permis, sans laquelle vous ne pouvez pas conduire à titre professionnel.",
          de: "Das ist die verpflichtende Berufskraftfahrerqualifikation, die im Führerschein eingetragen wird und ohne die Sie nicht gewerblich fahren dürfen.",
          en: "It is the compulsory professional driver qualification entered on the licence, without which you cannot drive professionally.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "cariste": {
    slug: "cariste",
    image: "cariste",
    title: {
      fr: "Cariste",
      de: "Staplerfahrer",
      en: "Forklift operator",
    },
    intro: {
      fr: "Un métier d'entrepôt recherché en Allemagne, où une formation courte peut ouvrir un emploi durable dès votre arrivée.",
      de: "Ein gefragter Lagerberuf in Deutschland, bei dem eine kurze Ausbildung schon bei Ihrer Ankunft eine dauerhafte Stelle eröffnen kann.",
      en: "A sought after warehouse role in Germany, where a short training can open a lasting job as soon as you arrive.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le cariste conduit des chariots élévateurs pour déplacer, charger et stocker les marchandises, et gère les flux dans l'entrepôt.",
          de: "Der Staplerfahrer bedient Gabelstapler, um Waren zu bewegen, zu verladen und einzulagern, und steuert die Warenflüsse im Lager.",
          en: "The forklift operator drives lift trucks to move, load and store goods, and manages the flows inside the warehouse.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire médian tous niveaux d'expérience confondus est d'environ 3 094 €/mois (fourchette 2 617 à 3 745 €), sur la base du métier proche de la logistique d'entrepôt (source : Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          de: "Der Median über alle Erfahrungsstufen liegt bei etwa 3.094 €/Monat (Spanne 2.617 bis 3.745 €), auf Basis des verwandten Berufs der Lagerlogistik (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          en: "The median across all experience levels is around 3,094 €/month (range 2,617 to 3,745 €), based on the closely related warehouse logistics occupation (source: Entgeltatlas, Bundesagentur für Arbeit, 2025).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Parmi les employeurs figurent Amazon, DHL, Kaufland, Lidl et le groupe Schwarz, dm, ainsi que de nombreux prestataires logistiques (3PL).",
          de: "Zu den Arbeitgebern gehören Amazon, DHL, Kaufland, Lidl und die Schwarz Gruppe, dm sowie zahlreiche Logistikdienstleister (3PL).",
          en: "Employers include Amazon, DHL, Kaufland, Lidl and the Schwarz group, dm, as well as many logistics providers (3PL).",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts, portés par une demande de volume élevée dans la logistique.",
          de: "Die Perspektiven sind gut, getragen von einer hohen Mengennachfrage in der Logistik.",
          en: "Prospects are strong, driven by high volume demand in logistics.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers Fachkraft für Lagerlogistik, chef d'équipe, puis responsable d'entrepôt.",
          de: "Sie können sich zur Fachkraft für Lagerlogistik, zum Teamleiter und weiter zum Lagerleiter entwickeln.",
          en: "You can progress to Fachkraft für Lagerlogistik, team leader and then warehouse manager.",
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
          de: "Im Berufsalltag sind Sicherheitshinweise, Anweisungen und Dokumentation auf Deutsch. B2 ist das von den Arbeitgebern erwartete Niveau, und genau dieses Niveau streben wir an.",
          en: "On the ground, safety instructions, directions and documentation are in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Les métiers de la logistique et de l'entrepôt ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. En plus de cette reconnaissance, le permis cariste (Staplerschein) s'obtient en Allemagne par une formation courte, que nous organisons avec l'employeur.",
          de: "Die Berufe in Logistik und Lager sind nicht reglementiert: Für das Fachkräftevisum ist eine Anerkennung Ihrer Qualifikation gleichwertig zur deutschen Ausbildung erforderlich. Zusätzlich zu dieser Anerkennung wird der Staplerschein in Deutschland durch eine kurze Schulung erworben, die wir mit dem Arbeitgeber organisieren.",
          en: "Logistics and warehouse occupations are not regulated: for the skilled worker visa, a recognition of your qualification (Anerkennung) equivalent to the German training is required. In addition to this recognition, the forklift licence (Staplerschein) is obtained in Germany through a short course, which we arrange with the employer.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die es seit März 2024 erlaubt, einzureisen und zu arbeiten, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Voraussetzungen und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (level A2 required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these occupations. We check your eligibility and build the file with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumsantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, get your qualification recognised, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Faut-il un permis spécial pour être cariste ?",
          de: "Braucht man einen besonderen Schein, um Staplerfahrer zu sein?",
          en: "Do you need a special licence to be a forklift operator?",
        },
        a: {
          fr: "Oui, le permis cariste (Staplerschein) est obligatoire, mais il s'obtient en Allemagne par une formation courte.",
          de: "Ja, der Staplerschein ist verpflichtend, wird aber in Deutschland durch eine kurze Schulung erworben.",
          en: "Yes, the forklift licence (Staplerschein) is required, but it is obtained in Germany through a short course.",
        },
      },
      {
        q: {
          fr: "Le travail se fait-il en équipe et en horaires postés ?",
          de: "Wird in Schichten und im Team gearbeitet?",
          en: "Is the work done in teams and in shifts?",
        },
        a: {
          fr: "Oui, le travail en équipe et en horaires postés est fréquent dans les entrepôts.",
          de: "Ja, Team- und Schichtarbeit ist in Lagern häufig.",
          en: "Yes, team work and shift work are common in warehouses.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "magasinier": {
    slug: "magasinier",
    image: "magasinier",
    title: {
      fr: "Magasinier, préparateur de commandes",
      de: "Lagerist / Kommissionierer",
      en: "Warehouse worker, order picker",
    },
    intro: {
      fr: "Une porte d'entrée accessible dans la logistique allemande, avec de vraies possibilités d'évoluer vers un diplôme reconnu.",
      de: "Ein zugänglicher Einstieg in die deutsche Logistik, mit echten Möglichkeiten, sich zu einem anerkannten Abschluss weiterzuentwickeln.",
      en: "An accessible way into German logistics, with real opportunities to progress toward a recognised qualification.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le magasinier réceptionne, contrôle, stocke et prépare les commandes, emballe et prépare les expéditions.",
          de: "Der Lagerist nimmt Waren an, kontrolliert, lagert und kommissioniert Bestellungen, verpackt und bereitet die Versendungen vor.",
          en: "The warehouse worker receives, checks, stores and picks orders, packs and prepares shipments.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 2 100 à 2 500 €/mois, et le salaire moyen tous niveaux d'expérience confondus est d'environ 2 866 €/mois (source : Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          de: "Das Einstiegsgehalt liegt bei etwa 2.100 bis 2.500 €/Monat, und der Median über alle Erfahrungsstufen liegt bei etwa 2.866 €/Monat (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025).",
          en: "The entry salary is around 2,100 to 2,500 €/month, and the median across all experience levels is around 2,866 €/month (source: Entgeltatlas, Bundesagentur für Arbeit, 2025).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Les recrutements se concentrent dans les centres de distribution du commerce, le e-commerce, les prestataires logistiques (3PL) et la logistique industrielle.",
          de: "Die Einstellungen konzentrieren sich auf Handelsverteilzentren, den E-Commerce, Logistikdienstleister (3PL) und die Industrielogistik.",
          en: "Hiring is concentrated in retail distribution centres, e-commerce, logistics providers (3PL) and industrial logistics.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts, portés par une demande de volume élevée.",
          de: "Die Perspektiven sind gut, getragen von einer hohen Mengennachfrage.",
          en: "Prospects are strong, driven by high volume demand.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers cariste, Fachlagerist puis Fachkraft für Lagerlogistik, et chef d'équipe.",
          de: "Sie können sich zum Staplerfahrer, zum Fachlagerist und weiter zur Fachkraft für Lagerlogistik sowie zum Teamleiter entwickeln.",
          en: "You can progress to forklift operator, Fachlagerist then Fachkraft für Lagerlogistik, and team leader.",
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
          de: "Im Berufsalltag sind Sicherheitshinweise, Anweisungen und Dokumentation auf Deutsch. B2 ist das von den Arbeitgebern erwartete Niveau, und genau dieses Niveau streben wir an.",
          en: "On the ground, safety instructions, directions and documentation are in German. B2 is the standard employers expect, and that is the level we aim for.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Les métiers de la logistique et de l'entrepôt ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. Nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Die Berufe in Logistik und Lager sind nicht reglementiert: Für das Fachkräftevisum ist eine Anerkennung Ihrer Qualifikation gleichwertig zur deutschen Ausbildung erforderlich. Wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "Logistics and warehouse occupations are not regulated: for the skilled worker visa, a recognition of your qualification (Anerkennung) equivalent to the German training is required. We have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die es seit März 2024 erlaubt, einzureisen und zu arbeiten, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Voraussetzungen und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (level A2 required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these occupations. We check your eligibility and build the file with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumsantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, get your qualification recognised, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Ce métier est-il accessible sans longue formation ?",
          de: "Ist dieser Beruf ohne lange Ausbildung zugänglich?",
          en: "Is this job accessible without long training?",
        },
        a: {
          fr: "Oui, il est accessible avec une reconnaissance de qualification ou une expérience pertinente.",
          de: "Ja, er ist mit einer Anerkennung der Qualifikation oder einschlägiger Erfahrung zugänglich.",
          en: "Yes, it is accessible with a recognition of qualification or relevant experience.",
        },
      },
      {
        q: {
          fr: "Peut-on évoluer vers un diplôme reconnu ?",
          de: "Kann man sich zu einem anerkannten Abschluss weiterentwickeln?",
          en: "Can you progress toward a recognised qualification?",
        },
        a: {
          fr: "Oui, vous pouvez évoluer vers Fachlagerist ou Fachkraft für Lagerlogistik.",
          de: "Ja, Sie können sich zum Fachlagerist oder zur Fachkraft für Lagerlogistik weiterentwickeln.",
          en: "Yes, you can progress toward Fachlagerist or Fachkraft für Lagerlogistik.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  "agent-transit": {
    slug: "agent-transit",
    image: "agent-transit",
    title: {
      fr: "Agent de transit et douane",
      de: "Speditionskaufmann",
      en: "Freight forwarding and customs agent",
    },
    intro: {
      fr: "Un métier de bureau au coeur de la logistique internationale, où l'organisation et le contact client font toute la valeur.",
      de: "Ein Bürojob im Herzen der internationalen Logistik, in dem Organisation und Kundenkontakt den ganzen Wert ausmachen.",
      en: "An office role at the heart of international logistics, where organisation and client contact make all the value.",
    },
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "L'agent de transit organise le transport de marchandises, réserve les transporteurs, prépare les documents de transport et de douane et conseille les clients.",
          de: "Der Speditionskaufmann organisiert den Warentransport, bucht die Frachtführer, erstellt die Transport- und Zolldokumente und berät die Kunden.",
          en: "The freight forwarding agent organises the transport of goods, books the carriers, prepares transport and customs documents and advises clients.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Le salaire d'entrée est d'environ 2 500 à 2 950 €/mois ; avec l'expérience, une moyenne d'environ 3 662 €/mois pouvant monter vers 4 600 €, Hambourg étant la région la mieux payée (environ 4 101 €), chiffres de portails à considérer avec prudence (source : aubi-plus, meingehalt.net, 2025).",
          de: "Das Einstiegsgehalt liegt bei etwa 2.500 bis 2.950 €/Monat; mit Erfahrung ein Durchschnitt von etwa 3.662 €/Monat, der bis gegen 4.600 € steigen kann, wobei Hamburg die am besten bezahlte Region ist (etwa 4.101 €), Portalzahlen, die mit Vorsicht zu betrachten sind (Quelle: aubi-plus, meingehalt.net, 2025).",
          en: "The entry salary is around 2,500 to 2,950 €/month; with experience, an average of around 3,662 €/month that can rise toward 4,600 €, with Hamburg the best paid region (around 4,101 €), portal figures to be treated with caution (source: aubi-plus, meingehalt.net, 2025).",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Parmi les employeurs figurent DB Schenker, Kühne und Nagel, DACHSER, Hellmann, DHL Global Forwarding, Rhenus et Fiege.",
          de: "Zu den Arbeitgebern gehören DB Schenker, Kühne und Nagel, DACHSER, Hellmann, DHL Global Forwarding, Rhenus und Fiege.",
          en: "Employers include DB Schenker, Kühne und Nagel, DACHSER, Hellmann, DHL Global Forwarding, Rhenus and Fiege.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "Les débouchés sont forts et réguliers dans la logistique commerciale.",
          de: "Die Perspektiven sind gut und beständig in der kaufmännischen Logistik.",
          en: "Prospects are strong and steady in commercial logistics.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers affréteur (Disponent), Fachwirt, puis responsable d'exploitation.",
          de: "Sie können sich zum Disponenten, zum Fachwirt und weiter zum Betriebsleiter entwickeln.",
          en: "You can progress to freight planner (Disponent), Fachwirt, then operations manager.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Dans ce rôle commercial et de relation client, le B2 est essentiel, et l'anglais est un vrai plus. C'est le niveau que nous visons.",
          de: "In dieser kaufmännischen und kundenorientierten Rolle ist B2 unerlässlich, und Englisch ist ein echter Pluspunkt. Genau dieses Niveau streben wir an.",
          en: "In this commercial and client facing role, B2 is essential, and English is a real plus. That is the level we aim for.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Les métiers de la logistique et de l'entrepôt ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. Nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Die Berufe in Logistik und Lager sind nicht reglementiert: Für das Fachkräftevisum ist eine Anerkennung Ihrer Qualifikation gleichwertig zur deutschen Ausbildung erforderlich. Wir lassen sie bewerten und leiten das Verfahren gemeinsam mit Ihnen ein.",
          en: "Logistics and warehouse occupations are not regulated: for the skilled worker visa, a recognition of your qualification (Anerkennung) equivalent to the German training is required. We have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die es seit März 2024 erlaubt, einzureisen und zu arbeiten, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitsuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Voraussetzungen und stellen den Antrag gemeinsam mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with a recognised qualification, the recognition partnership which since March 2024 allows you to enter and work while completing recognition on site (level A2 required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these occupations. We check your eligibility and build the file with you.",
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
          de: "Wir bringen Ihnen Deutsch bis zum erforderlichen Niveau bei, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumsantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, get your qualification recognised, present your profile to German employers, prepare the visa file and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Est-ce un métier de bureau ?",
          de: "Ist das ein Bürojob?",
          en: "Is this an office job?",
        },
        a: {
          fr: "Oui, il repose sur la coordination et la documentation du transport.",
          de: "Ja, er beruht auf der Koordination und der Dokumentation des Transports.",
          en: "Yes, it is based on the coordination and documentation of transport.",
        },
      },
      {
        q: {
          fr: "L'anglais est-il utile ?",
          de: "Ist Englisch nützlich?",
          en: "Is English useful?",
        },
        a: {
          fr: "Oui, le transport est international et l'anglais est un vrai atout au quotidien.",
          de: "Ja, der Transport ist international und Englisch ist im Alltag ein echter Vorteil.",
          en: "Yes, transport is international and English is a real asset day to day.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
