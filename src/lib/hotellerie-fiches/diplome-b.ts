import type { HotellerieFiche } from "../hotellerie-fiche-types";
import { SALARY_NOTE } from "../hotellerie-fiche-types";

export const HOT_FICHES_DIPLOME_B: Record<string, HotellerieFiche> = {
  receptionniste: {
    slug: "receptionniste",
    title: {
      fr: "Réceptionniste d'hôtel",
      de: "Rezeptionist / Empfang",
      en: "Hotel receptionist",
    },
    intro: {
      fr: "Visage de l'hôtel, le réceptionniste occupe un poste central et recherché, avec de vraies perspectives d'évolution en Allemagne.",
      de: "Als Gesicht des Hotels nimmt der Rezeptionist eine zentrale und gefragte Stelle mit echten Aufstiegschancen in Deutschland ein.",
      en: "The face of the hotel, the receptionist holds a central, sought-after role with real prospects for progression in Germany.",
    },
    image: "receptionniste",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le réceptionniste accueille les clients et gère les arrivées et les départs (check-in et check-out), les réservations, la facturation et les demandes.",
          de: "Der Rezeptionist empfängt die Gäste und kümmert sich um An- und Abreisen (Check-in und Check-out), Reservierungen, die Rechnungsstellung und Anfragen.",
          en: "The receptionist welcomes guests and handles arrivals and departures (check-in and check-out), reservations, billing and requests.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Environ 2 200 à 3 000 €/mois, avec une médiane d'environ 2 541 €/mois selon les portails (tous niveaux d'expérience confondus) ; l'entrée se situe vers 2 300 à 2 630 € et monte vers 3 000 € avec l'ancienneté, l'Ouest à environ 2 910 € et l'Est à environ 2 630 € (source : StepStone, gehalt.de, 2026). La rémunération suit les conventions régionales DEHOGA et le salaire minimum légal, reste généralement inférieure à celle de l'industrie, et ce poste en contact avec la clientèle est complété par les pourboires.",
          de: "Etwa 2.200 bis 3.000 €/Monat, mit einem Median von rund 2.541 €/Monat laut den Portalen (über alle Erfahrungsstufen hinweg); der Einstieg liegt bei etwa 2.300 bis 2.630 € und steigt mit der Betriebszugehörigkeit auf rund 3.000 €, der Westen bei etwa 2.910 €, der Osten bei etwa 2.630 € (Quelle: StepStone, gehalt.de, 2026). Die Vergütung folgt den regionalen DEHOGA-Tarifverträgen und dem gesetzlichen Mindestlohn, liegt in der Regel unter der Industrie, und diese Stelle mit Gästekontakt wird durch Trinkgeld ergänzt.",
          en: "About 2,200 to 3,000 €/month, with a median of around 2,541 €/month according to the portals (across all experience levels); entry sits around 2,300 to 2,630 € and rises towards 3,000 € with seniority, the West at about 2,910 € and the East at about 2,630 € (source: StepStone, gehalt.de, 2026). Pay follows regional DEHOGA agreements and the statutory minimum wage, is generally lower than in industry, and this guest-facing role is supplemented by tips.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Des hôtels de toutes catégories recrutent, surtout dans les villes et les pôles d'affaires.",
          de: "Hotels aller Kategorien stellen ein, vor allem in Städten und Geschäftszentren.",
          en: "Hotels of every category are hiring, especially in cities and business hubs.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande est forte : la réception fait partie des postes les plus recherchés en hôtellerie.",
          de: "Die Nachfrage ist hoch: Die Rezeption gehört zu den gefragtesten Stellen im Hotelgewerbe.",
          en: "Demand is strong: reception is among the most sought-after roles in hospitality.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers chef de réception, front-office manager, puis direction d'hôtel.",
          de: "Sie können sich zum Chef de Réception, zum Front-Office-Manager und weiter bis zur Hoteldirektion entwickeln.",
          en: "You can progress to head receptionist, front-office manager and on to hotel management.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Rôle central en contact avec la clientèle, le B2 et l'anglais sont indispensables ; une autre langue (français, espagnol) est un atout. Le B2 est la norme attendue par les employeurs et le niveau que nous visons avec vous.",
          de: "Als zentrale Stelle mit Gästekontakt sind B2 und Englisch unverzichtbar; eine weitere Sprache (Französisch, Spanisch) ist ein Vorteil. B2 ist der von den Arbeitgebern erwartete Standard und das Ziel, das wir mit Ihnen anstreben.",
          en: "A central guest-facing role where B2 and English are essential; another language (French, Spanish) is an asset. B2 is the standard employers expect and the level we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Les métiers de l'hôtellerie-restauration ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. Nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Die Berufe im Gastgewerbe sind nicht reglementiert: Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation als gleichwertig zur deutschen Ausbildung erforderlich. Wir lassen sie bewerten und leiten das Verfahren mit Ihnen ein.",
          en: "Hospitality professions are not regulated: for the skilled worker visa, a recognition (Anerkennung) of your qualification as equivalent to German training is required. We have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit erlaubt, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitssuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Berechtigung und stellen den Antrag mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with recognised qualification, the recognition partnership, which since March 2024 lets you enter and work while finalising recognition on site (A2 level required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these professions. We check your eligibility and build the application with you.",
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
          de: "Wir bilden Sie im Deutschen bis zum nötigen Niveau aus, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, have your qualification recognised, present your profile to German employers, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Quelles langues faut-il ?",
          de: "Welche Sprachen sind nötig?",
          en: "Which languages are needed?",
        },
        a: {
          fr: "L'allemand B2 et l'anglais sont indispensables ; une autre langue comme le français ou l'espagnol est un plus.",
          de: "Deutsch B2 und Englisch sind unverzichtbar; eine weitere Sprache wie Französisch oder Spanisch ist ein Plus.",
          en: "German B2 and English are essential; another language such as French or Spanish is a plus.",
        },
      },
      {
        q: {
          fr: "Quels sont les horaires ?",
          de: "Wie sind die Arbeitszeiten?",
          en: "What are the working hours?",
        },
        a: {
          fr: "Le travail se fait souvent en rotation, y compris le soir et le week-end.",
          de: "Die Arbeit erfolgt oft im Schichtdienst, auch abends und am Wochenende.",
          en: "The work is often organised in rotating shifts, including evenings and weekends.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  gouvernante: {
    slug: "gouvernante",
    title: {
      fr: "Gouvernant(e) (housekeeping)",
      de: "Hausdame / Housekeeping",
      en: "Housekeeping supervisor",
    },
    intro: {
      fr: "Métier d'organisation et d'encadrement, le housekeeping offre une progression concrète du personnel d'étage vers la fonction de gouvernant(e) en Allemagne.",
      de: "Als Organisations- und Führungsberuf bietet das Housekeeping einen konkreten Aufstieg vom Etagenpersonal bis zur Hausdame in Deutschland.",
      en: "A role of organisation and supervision, housekeeping offers a concrete path from floor staff up to housekeeping supervisor in Germany.",
    },
    image: "gouvernante",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le gouvernant ou la gouvernante organise et contrôle la propreté des chambres et des espaces, encadre le personnel d'étage et gère les stocks.",
          de: "Die Hausdame (Housekeeping-Leitung) organisiert und kontrolliert die Sauberkeit der Zimmer und Bereiche, führt das Etagenpersonal und verwaltet die Bestände.",
          en: "The housekeeping supervisor organises and checks the cleanliness of rooms and common areas, manages the floor staff and controls supplies.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Au niveau des étages, environ 2 000 à 2 360 €/mois ; au niveau gouvernant(e) et encadrement (Hausdame), une moyenne d'environ 2 900 €/mois (fourchette de 27 600 à 40 000 €/an), jusqu'à environ 4 000 €/mois dans le luxe (source : gehalt.de, meingehalt.net, 2026). La rémunération suit les conventions régionales DEHOGA et le salaire minimum légal et reste généralement inférieure à celle de l'industrie ; ce poste hors contact direct avec la clientèle n'est pas complété par des pourboires.",
          de: "Auf Etagenebene etwa 2.000 bis 2.360 €/Monat; als Hausdame und Führungskraft ein Durchschnitt von rund 2.900 €/Monat (Spanne von 27.600 bis 40.000 €/Jahr), bis zu etwa 4.000 €/Monat in der Luxushotellerie (Quelle: gehalt.de, meingehalt.net, 2026). Die Vergütung folgt den regionalen DEHOGA-Tarifverträgen und dem gesetzlichen Mindestlohn und liegt in der Regel unter der Industrie; diese Stelle ohne direkten Gästekontakt wird nicht durch Trinkgeld ergänzt.",
          en: "At floor level, about 2,000 to 2,360 €/month; at supervisor level (Hausdame), an average of around 2,900 €/month (a range of 27,600 to 40,000 €/year), up to about 4,000 €/month in luxury hotels (source: gehalt.de, meingehalt.net, 2026). Pay follows regional DEHOGA agreements and the statutory minimum wage and is generally lower than in industry; this role away from direct guest contact is not supplemented by tips.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Des hôtels de toutes catégories recrutent, et la demande d'encadrement est forte dans les grands établissements et le haut de gamme.",
          de: "Hotels aller Kategorien stellen ein, und der Bedarf an Führungskräften ist in großen Häusern und im gehobenen Segment hoch.",
          en: "Hotels of every category are hiring, and demand for supervisors is strong in large establishments and the upper end of the market.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande est forte au niveau opérationnel, avec une vraie progression de valet ou femme de chambre vers gouvernant(e).",
          de: "Die Nachfrage ist auf operativer Ebene hoch, mit einem echten Aufstieg vom Zimmermädchen oder Zimmerkellner zur Hausdame.",
          en: "Demand is strong at the operational level, with a real path from room attendant up to housekeeping supervisor.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers gouvernant(e) général(e), responsable housekeeping, puis direction des opérations.",
          de: "Sie können sich zur leitenden Hausdame, zur Housekeeping-Leiterin und weiter bis zur Operationsleitung entwickeln.",
          en: "You can progress to head housekeeper, housekeeping manager and on to operations management.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Le travail d'étage peut démarrer avec un allemand pratique, mais l'encadrement (Hausdame) demande le B2 pour diriger les équipes et coordonner avec la réception ; l'anglais aide dans les établissements internationaux. Le B2 reste la cible que nous visons avec vous.",
          de: "Die Etagenarbeit kann mit praktischen Deutschkenntnissen beginnen, aber die Leitung (Hausdame) erfordert B2, um Teams zu führen und sich mit der Rezeption abzustimmen; Englisch hilft in internationalen Häusern. B2 bleibt das Ziel, das wir mit Ihnen anstreben.",
          en: "Floor work can start with practical German, but supervision (Hausdame) requires B2 to lead teams and coordinate with reception; English helps in international establishments. B2 remains the target we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Les métiers de l'hôtellerie-restauration ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. Nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Die Berufe im Gastgewerbe sind nicht reglementiert: Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation als gleichwertig zur deutschen Ausbildung erforderlich. Wir lassen sie bewerten und leiten das Verfahren mit Ihnen ein.",
          en: "Hospitality professions are not regulated: for the skilled worker visa, a recognition (Anerkennung) of your qualification as equivalent to German training is required. We have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit erlaubt, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitssuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Berechtigung und stellen den Antrag mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with recognised qualification, the recognition partnership, which since March 2024 lets you enter and work while finalising recognition on site (A2 level required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these professions. We check your eligibility and build the application with you.",
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
          de: "Wir bilden Sie im Deutschen bis zum nötigen Niveau aus, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, have your qualification recognised, present your profile to German employers, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Peut-on évoluer vers l'encadrement ?",
          de: "Kann man in die Führung aufsteigen?",
          en: "Can you move up into supervision?",
        },
        a: {
          fr: "Oui, on progresse du poste d'étage vers gouvernant(e) puis responsable housekeeping.",
          de: "Ja, man steigt von der Etagenstelle zur Hausdame und weiter zur Housekeeping-Leitung auf.",
          en: "Yes, you progress from a floor role to housekeeping supervisor and then housekeeping manager.",
        },
      },
      {
        q: {
          fr: "Le métier est-il physique ?",
          de: "Ist der Beruf körperlich?",
          en: "Is the work physically demanding?",
        },
        a: {
          fr: "Oui, le travail d'étage est physique et demande de l'endurance.",
          de: "Ja, die Etagenarbeit ist körperlich und verlangt Ausdauer.",
          en: "Yes, floor work is physical and requires stamina.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  barman: {
    slug: "barman",
    title: {
      fr: "Barman / barmaid",
      de: "Barkeeper / Barmixer",
      en: "Bartender",
    },
    intro: {
      fr: "Métier de contact et de savoir-faire, le service de bar reste demandé dans l'hôtellerie et les grandes villes allemandes.",
      de: "Als Beruf des Kontakts und des Könnens bleibt der Barservice in der Hotellerie und den großen deutschen Städten gefragt.",
      en: "A profession of contact and craft, bar service remains in demand in hospitality and Germany's major cities.",
    },
    image: "barman",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le barman ou la barmaid prépare et sert boissons et cocktails, conseille les clients et gère le bar et les stocks.",
          de: "Der Barkeeper oder die Barkeeperin bereitet Getränke und Cocktails zu und serviert sie, berät die Gäste und verwaltet die Bar und die Bestände.",
          en: "The bartender prepares and serves drinks and cocktails, advises guests and manages the bar and its stock.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Environ 1 900 à 2 600 €/mois, avec une médiane d'environ 2 254 €/mois (tous niveaux d'expérience confondus), plus les pourboires qui complètent nettement le revenu ; l'entrée se situe vers 1 800 à 2 400 €, l'Ouest à environ 2 294 €, l'Est à environ 2 117 €, la Bavière étant la mieux payée (source : Entgeltatlas via meingehalt.net, StepStone, 2025). La rémunération suit les conventions régionales DEHOGA et le salaire minimum légal et reste généralement inférieure à celle de l'industrie.",
          de: "Etwa 1.900 bis 2.600 €/Monat, mit einem Median von rund 2.254 €/Monat (über alle Erfahrungsstufen hinweg), dazu das Trinkgeld, das das Einkommen deutlich ergänzt; der Einstieg liegt bei etwa 1.800 bis 2.400 €, der Westen bei etwa 2.294 €, der Osten bei etwa 2.117 €, wobei Bayern am besten zahlt (Quelle: Entgeltatlas über meingehalt.net, StepStone, 2025). Die Vergütung folgt den regionalen DEHOGA-Tarifverträgen und dem gesetzlichen Mindestlohn und liegt in der Regel unter der Industrie.",
          en: "About 1,900 to 2,600 €/month, with a median of around 2,254 €/month (across all experience levels), plus tips that clearly supplement earnings; entry sits around 1,800 to 2,400 €, the West at about 2,294 €, the East at about 2,117 €, with Bavaria paying the most (source: Entgeltatlas via meingehalt.net, StepStone, 2025). Pay follows regional DEHOGA agreements and the statutory minimum wage and is generally lower than in industry.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Bars d'hôtels, bars et clubs, restaurants et lieux d'événements recrutent, surtout à Munich, Berlin et Hambourg.",
          de: "Hotelbars, Bars und Clubs, Restaurants und Eventlocations stellen ein, vor allem in München, Berlin und Hamburg.",
          en: "Hotel bars, bars and clubs, restaurants and event venues are hiring, especially in Munich, Berlin and Hamburg.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande est soutenue : le service de bar fait partie des besoins du secteur.",
          de: "Die Nachfrage ist stabil: Der Barservice gehört zum Bedarf der Branche.",
          en: "Demand is steady: bar service is part of the sector's needs.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers chef barman, responsable de bar, puis gérant.",
          de: "Sie können sich zum Chef-Barkeeper, zum Barleiter und weiter zum Betriebsleiter entwickeln.",
          en: "You can progress to head bartender, bar manager and on to venue manager.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Métier en contact avec la clientèle, le B2 et l'anglais sont vivement recommandés, surtout dans les bars d'hôtels internationaux. Le B2 est la norme attendue par les employeurs et le niveau que nous visons avec vous.",
          de: "Als Beruf mit Gästekontakt sind B2 und Englisch sehr zu empfehlen, besonders in internationalen Hotelbars. B2 ist der von den Arbeitgebern erwartete Standard und das Niveau, das wir mit Ihnen anstreben.",
          en: "A guest-facing profession where B2 and English are strongly recommended, especially in international hotel bars. B2 is the standard employers expect and the level we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Les métiers de l'hôtellerie-restauration ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. Nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Die Berufe im Gastgewerbe sind nicht reglementiert: Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation als gleichwertig zur deutschen Ausbildung erforderlich. Wir lassen sie bewerten und leiten das Verfahren mit Ihnen ein.",
          en: "Hospitality professions are not regulated: for the skilled worker visa, a recognition (Anerkennung) of your qualification as equivalent to German training is required. We have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit erlaubt, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitssuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Berechtigung und stellen den Antrag mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with recognised qualification, the recognition partnership, which since March 2024 lets you enter and work while finalising recognition on site (A2 level required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these professions. We check your eligibility and build the application with you.",
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
          de: "Wir bilden Sie im Deutschen bis zum nötigen Niveau aus, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, have your qualification recognised, present your profile to German employers, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Les pourboires sont-ils importants ?",
          de: "Ist das Trinkgeld wichtig?",
          en: "Do tips matter?",
        },
        a: {
          fr: "Oui, ils constituent un complément notable au revenu.",
          de: "Ja, es stellt eine spürbare Ergänzung des Einkommens dar.",
          en: "Yes, they are a notable supplement to earnings.",
        },
      },
      {
        q: {
          fr: "Où recrute-t-on le plus ?",
          de: "Wo wird am meisten eingestellt?",
          en: "Where is hiring strongest?",
        },
        a: {
          fr: "Dans les grandes villes et l'hôtellerie, notamment Munich, Berlin et Hambourg.",
          de: "In den großen Städten und im Hotelgewerbe, insbesondere München, Berlin und Hamburg.",
          en: "In the major cities and in hospitality, particularly Munich, Berlin and Hamburg.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },

  patissier: {
    slug: "patissier",
    title: {
      fr: "Pâtissier",
      de: "Konditor",
      en: "Pastry chef",
    },
    intro: {
      fr: "Métier d'atelier et de précision, la pâtisserie recherche des professionnels qualifiés pour ses hôtels, confiseries et tables gastronomiques.",
      de: "Als Werkstatt- und Präzisionsberuf sucht die Konditorei qualifizierte Fachkräfte für ihre Hotels, Konditoreien und Gourmetküchen.",
      en: "A workshop craft built on precision, pastry making seeks qualified professionals for its hotels, confectioneries and fine-dining kitchens.",
    },
    image: "patissier",
    sections: [
      {
        heading: { fr: "Le métier", de: "Der Beruf", en: "The profession" },
        body: {
          fr: "Le pâtissier réalise gâteaux, entremets, desserts et confiseries, et maîtrise les techniques de pâtisserie et l'hygiène.",
          de: "Der Konditor stellt Kuchen, Torten, Desserts und Süßwaren her und beherrscht die Konditortechniken und die Hygiene.",
          en: "The pastry chef makes cakes, gâteaux, desserts and confectionery, mastering pastry techniques and hygiene.",
        },
      },
      {
        heading: { fr: "Salaire", de: "Gehalt", en: "Salary" },
        body: {
          fr: "Environ 2 000 à 2 800 €/mois, avec une moyenne d'environ 2 566 €/mois (tous niveaux d'expérience confondus) ; l'entrée se situe vers 2 000 € et l'expérience mène à 2 700 à 2 800 €, la Rhénanie-Palatinat étant parmi les mieux payées (environ 2 786 €) (source : Entgeltatlas, Bundesagentur für Arbeit, 2025). La rémunération suit les conventions régionales DEHOGA et le salaire minimum légal et reste généralement inférieure à celle de l'industrie ; ce poste en atelier n'est pas complété par des pourboires.",
          de: "Etwa 2.000 bis 2.800 €/Monat, mit einem Durchschnitt von rund 2.566 €/Monat (über alle Erfahrungsstufen hinweg); der Einstieg liegt bei etwa 2.000 € und mit Erfahrung sind 2.700 bis 2.800 € möglich, wobei Rheinland-Pfalz zu den bestbezahlten Regionen gehört (etwa 2.786 €) (Quelle: Entgeltatlas, Bundesagentur für Arbeit, 2025). Die Vergütung folgt den regionalen DEHOGA-Tarifverträgen und dem gesetzlichen Mindestlohn und liegt in der Regel unter der Industrie; diese Werkstattstelle wird nicht durch Trinkgeld ergänzt.",
          en: "About 2,000 to 2,800 €/month, with an average of around 2,566 €/month (across all experience levels); entry sits around 2,000 € and experience leads to 2,700 to 2,800 €, with Rhineland-Palatinate among the best paid (about 2,786 €) (source: Entgeltatlas, Bundesagentur für Arbeit, 2025). Pay follows regional DEHOGA agreements and the statutory minimum wage and is generally lower than in industry; this workshop role is not supplemented by tips.",
        },
      },
      {
        heading: {
          fr: "Entreprises qui recrutent",
          de: "Unternehmen, die einstellen",
          en: "Employers hiring",
        },
        body: {
          fr: "Pâtisseries d'hôtels, pâtisseries et confiseries (Konditoreien), boulangeries avec salon de thé, restauration gastronomique et traiteurs recrutent.",
          de: "Hotelpâtisserien, Konditoreien, Bäckereien mit Café, Gourmetgastronomie und Caterer stellen ein.",
          en: "Hotel pastry kitchens, pastry shops and confectioneries (Konditoreien), bakeries with a tea room, fine dining and caterers are hiring.",
        },
      },
      {
        heading: { fr: "Débouchés", de: "Perspektiven", en: "Prospects" },
        body: {
          fr: "La demande est réelle : les pâtissiers qualifiés sont recherchés, même si la rémunération se situe dans le bas de la fourchette du secteur.",
          de: "Die Nachfrage ist real: Qualifizierte Konditoren sind gefragt, auch wenn die Vergütung im unteren Bereich der Branche liegt.",
          en: "Demand is real: qualified pastry chefs are sought after, even if pay sits at the lower end of the sector's range.",
        },
      },
      {
        heading: {
          fr: "Évolution de carrière",
          de: "Karriereentwicklung",
          en: "Career progression",
        },
        body: {
          fr: "Vous pouvez évoluer vers chef pâtissier, Konditormeister, puis création et gestion d'atelier.",
          de: "Sie können sich zum Chefkonditor, zum Konditormeister und weiter bis zur Gründung und Leitung einer eigenen Werkstatt entwickeln.",
          en: "You can progress to head pastry chef, Konditormeister (master pastry chef) and on to founding and running your own workshop.",
        },
      },
      {
        heading: {
          fr: "Niveau d'allemand",
          de: "Sprachniveau",
          en: "Language level",
        },
        body: {
          fr: "Métier surtout en atelier et non au contact direct de la clientèle, le B2 reste la cible pour l'intégration en équipe et la documentation. C'est le niveau que nous visons avec vous.",
          de: "Als überwiegend in der Werkstatt und ohne direkten Gästekontakt ausgeübter Beruf bleibt B2 das Ziel für die Teamintegration und die Dokumentation. Das ist das Niveau, das wir mit Ihnen anstreben.",
          en: "A profession practised mainly in the workshop and not in direct contact with guests, where B2 remains the target for team integration and documentation. This is the level we aim for with you.",
        },
      },
      {
        heading: {
          fr: "Reconnaissance du diplôme",
          de: "Anerkennung des Abschlusses",
          en: "Diploma recognition",
        },
        body: {
          fr: "Les métiers de l'hôtellerie-restauration ne sont pas réglementés : pour le visa de travailleur qualifié, une reconnaissance de votre qualification (Anerkennung) équivalente à la formation allemande est nécessaire. Nous la faisons évaluer et engageons la procédure avec vous.",
          de: "Die Berufe im Gastgewerbe sind nicht reglementiert: Für das Visum für Fachkräfte ist eine Anerkennung Ihrer Qualifikation als gleichwertig zur deutschen Ausbildung erforderlich. Wir lassen sie bewerten und leiten das Verfahren mit Ihnen ein.",
          en: "Hospitality professions are not regulated: for the skilled worker visa, a recognition (Anerkennung) of your qualification as equivalent to German training is required. We have it assessed and start the procedure with you.",
        },
      },
      {
        heading: { fr: "Visa", de: "Visum", en: "Visa" },
        body: {
          fr: "Les voies principales sont le visa de travailleur qualifié avec qualification reconnue, le partenariat de reconnaissance qui permet depuis mars 2024 d'entrer et de travailler tout en finalisant la reconnaissance sur place (niveau A2 requis), et la Chancenkarte pour venir chercher un emploi. La Carte bleue européenne, réservée aux profils universitaires, ne s'applique pas à ces métiers. Nous vérifions votre éligibilité et montons le dossier avec vous.",
          de: "Die wichtigsten Wege sind das Visum für Fachkräfte mit anerkannter Qualifikation, die Anerkennungspartnerschaft, die seit März 2024 die Einreise und Arbeit erlaubt, während die Anerkennung vor Ort abgeschlossen wird (Niveau A2 erforderlich), und die Chancenkarte zur Arbeitssuche. Die Blaue Karte EU, die akademischen Profilen vorbehalten ist, gilt für diese Berufe nicht. Wir prüfen Ihre Berechtigung und stellen den Antrag mit Ihnen zusammen.",
          en: "The main routes are the skilled worker visa with recognised qualification, the recognition partnership, which since March 2024 lets you enter and work while finalising recognition on site (A2 level required), and the Chancenkarte to come and look for a job. The EU Blue Card, reserved for university profiles, does not apply to these professions. We check your eligibility and build the application with you.",
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
          de: "Wir bilden Sie im Deutschen bis zum nötigen Niveau aus, lassen Ihre Qualifikation anerkennen, präsentieren Ihr Profil bei deutschen Arbeitgebern, bereiten den Visumantrag vor und begleiten Sie bis zu Ihrer Ankunft.",
          en: "We train you in German up to the level you need, have your qualification recognised, present your profile to German employers, prepare the visa application and support you all the way to your arrival.",
        },
      },
    ],
    faq: [
      {
        q: {
          fr: "Est-ce un métier d'atelier ?",
          de: "Ist es ein Werkstattberuf?",
          en: "Is it a workshop profession?",
        },
        a: {
          fr: "Oui, il s'exerce surtout en laboratoire de pâtisserie.",
          de: "Ja, er wird vor allem in der Backstube ausgeübt.",
          en: "Yes, it is practised mainly in the pastry workshop.",
        },
      },
      {
        q: {
          fr: "Quelle évolution possible ?",
          de: "Welche Entwicklung ist möglich?",
          en: "What progression is possible?",
        },
        a: {
          fr: "Chef pâtissier, puis Konditormeister avec la maîtrise.",
          de: "Chefkonditor und danach Konditormeister mit dem Meisterabschluss.",
          en: "Head pastry chef, then Konditormeister with the master qualification.",
        },
      },
    ],
    sourceNote: SALARY_NOTE,
  },
};
