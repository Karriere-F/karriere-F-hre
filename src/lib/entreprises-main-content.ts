import type { LocalizedText } from "./localized";

// Commercial orientation page /entreprises for German employers. Presents the offer
// (identify, prepare, select, support), routes to the specialised pages and the
// request form. Hedged legal wording: no fabricated figures, testimonials or client
// logos; no prices; no guaranteed placement/visa; no fixed delays. B2 is Karriere
// Fähre's preparation standard; diploma translation is never presented as official
// recognition.
type LT = LocalizedText;

export const ENT_MAIN: {
  seoTitle: LT;
  seoDescription: LT;

  heroKicker: LT;
  heroTitle: LT;
  heroIntro1: LT;
  heroIntro2: LT;
  heroIntro3: LT;
  heroCtaPrimary: LT;
  heroCtaSecondary: LT;
  heroReperes: LT[];

  solKicker: LT;
  solTitle: LT;
  solLead: LT;
  fachTitle: LT;
  fachQuestion: LT;
  fachBody: LT;
  fachCta: LT;
  ausTitle: LT;
  ausQuestion: LT;
  ausBody: LT;
  ausCta: LT;

  whyKicker: LT;
  whyTitle: LT;
  whyIntro: LT;
  whyPoints: { title: LT; body: LT }[];
  whyCta: LT;

  methodKicker: LT;
  methodTitle: LT;
  methodSteps: { label: LT; body: LT }[];
  methodCta: LT;

  secKicker: LT;
  secTitle: LT;
  sectors: LT[];
  secNote: LT;
  secCta: LT;

  frameKicker: LT;
  frameTitle: LT;
  frameText1: LT;
  frameText2: LT;
  frameText3: LT;
  frameText4: LT;
  frameCta: LT;

  finalKicker: LT;
  finalTitle: LT;
  finalText: LT;
  finalCtaPrimary: LT;
  finalCtaSecondary: LT;
} = {
  // SEO (decoupled from the H1; the layout appends " | Karriere Fähre").
  seoTitle: {
    fr: "Recrutement international en Allemagne",
    de: "Internationale Fachkräfte rekrutieren",
    en: "International Recruitment Germany",
  },
  seoDescription: {
    fr: "Recrutement de talents au Cameroun pour les entreprises allemandes. Présélection, allemand B2, dossiers allemands et accompagnement.",
    de: "Wir unterstützen deutsche Unternehmen bei der Rekrutierung aus Kamerun: Vorauswahl, Deutschvorbereitung, Bewerbungsunterlagen und Integration.",
    en: "Recruit talent from Cameroon for German companies. Candidate screening, German language preparation, application dossiers and integration support.",
  },

  heroKicker: {
    fr: "Recrutement international · Allemagne",
    de: "Internationale Rekrutierung · Deutschland",
    en: "International recruitment · Germany",
  },
  heroTitle: {
    fr: "Des talents préparés. Des recrutements structurés. Une intégration accompagnée.",
    de: "Vorbereitete Talente. Strukturierte Rekrutierung. Begleitete Integration.",
    en: "Prepared talent. Structured recruitment. Supported integration.",
  },
  heroIntro1: {
    fr: "Karriere Fähre accompagne les entreprises allemandes dans l'identification et le recrutement de talents qualifiés au Cameroun et, selon les besoins, dans d'autres pays d'Afrique centrale.",
    de: "Karriere Fähre unterstützt deutsche Unternehmen bei der Identifizierung und Rekrutierung qualifizierter Talente in Kamerun und, je nach Bedarf, in weiteren Ländern Zentralafrikas.",
    en: "Karriere Fähre supports German companies in identifying and recruiting qualified talent in Cameroon and, depending on needs, in other countries of Central Africa.",
  },
  heroIntro2: {
    fr: "Grâce à notre réseau local de candidats et de partenaires, nous identifions les profils, étudions leurs qualifications, évaluons leur niveau d'allemand et les préparons aux exigences de votre entreprise.",
    de: "Über unser lokales Netzwerk aus Kandidaten und Partnern identifizieren wir geeignete Profile, prüfen ihre Qualifikationen, bewerten ihr Deutschniveau und bereiten sie auf die Anforderungen Ihres Unternehmens vor.",
    en: "Through our local network of candidates and partners, we identify suitable profiles, review their qualifications, assess their German level and prepare them for your company's requirements.",
  },
  heroIntro3: {
    fr: "Nous constituons des dossiers de candidature adaptés aux pratiques allemandes, facilitons les échanges directs avec les candidats et accompagnons leur parcours jusqu'à leur arrivée et leur intégration en Allemagne.",
    de: "Wir erstellen Bewerbungsunterlagen nach deutschen Gepflogenheiten, ermöglichen den direkten Austausch mit den Kandidaten und begleiten ihren Weg bis zur Ankunft und Integration in Deutschland.",
    en: "We build application dossiers aligned with German practices, enable direct exchanges with candidates and support their journey through to their arrival and integration in Germany.",
  },
  heroCtaPrimary: { fr: "Décrire mon besoin de recrutement", de: "Meinen Personalbedarf beschreiben", en: "Describe my recruitment need" },
  heroCtaSecondary: { fr: "Découvrir nos solutions", de: "Unsere Lösungen entdecken", en: "Discover our solutions" },
  heroReperes: [
    { fr: "Fachkräfte", de: "Fachkräfte", en: "Fachkräfte" },
    { fr: "Ausbildung", de: "Ausbildung", en: "Ausbildung" },
    { fr: "Allemand professionnel", de: "Berufsbezogenes Deutsch", en: "Professional German" },
    { fr: "Préparation des candidats", de: "Vorbereitung der Kandidaten", en: "Candidate preparation" },
    { fr: "Intégration en Allemagne", de: "Integration in Deutschland", en: "Integration in Germany" },
  ],

  solKicker: { fr: "Votre besoin", de: "Ihr Bedarf", en: "Your need" },
  solTitle: {
    fr: "Quelle solution correspond à votre entreprise ?",
    de: "Welche Lösung passt zu Ihrem Unternehmen?",
    en: "Which solution fits your company?",
  },
  solLead: {
    fr: "Chaque recrutement commence par une compréhension précise de votre besoin. Nous vous accompagnons selon que vous recherchez des professionnels qualifiés ou souhaitez accueillir de futurs apprentis dans votre entreprise.",
    de: "Jede Rekrutierung beginnt mit einem genauen Verständnis Ihres Bedarfs. Wir begleiten Sie, je nachdem, ob Sie qualifizierte Fachkräfte suchen oder künftige Auszubildende in Ihrem Unternehmen aufnehmen möchten.",
    en: "Every recruitment starts with a precise understanding of your need. We support you whether you are looking for qualified professionals or wish to welcome future apprentices into your company.",
  },
  fachTitle: { fr: "Recruter des professionnels qualifiés", de: "Qualifizierte Fachkräfte rekrutieren", en: "Recruit qualified professionals" },
  fachQuestion: {
    fr: "Vous recherchez des collaborateurs possédant les qualifications, l'expérience et les compétences adaptées à vos postes ?",
    de: "Sie suchen Mitarbeitende mit den passenden Qualifikationen, der Erfahrung und den Kompetenzen für Ihre Stellen?",
    en: "Looking for staff with the qualifications, experience and skills suited to your positions?",
  },
  fachBody: {
    fr: "Karriere Fähre identifie et étudie les profils, évalue leur parcours et leur niveau d'allemand, puis sélectionne les candidats correspondant aux critères que vous avez définis. Nous préparons leurs dossiers de candidature en allemand et facilitons les entretiens directs afin que vous puissiez évaluer personnellement les candidats.",
    de: "Karriere Fähre identifiziert und prüft die Profile, bewertet Werdegang und Deutschniveau und wählt anschließend die Kandidaten aus, die den von Ihnen definierten Kriterien entsprechen. Wir bereiten die Bewerbungsunterlagen auf Deutsch vor und ermöglichen direkte Gespräche, damit Sie die Kandidaten persönlich beurteilen können.",
    en: "Karriere Fähre identifies and reviews profiles, assesses background and German level, then selects candidates matching the criteria you have defined. We prepare their application dossiers in German and facilitate direct interviews so you can assess candidates personally.",
  },
  fachCta: { fr: "Découvrir le recrutement de Fachkräfte", de: "Fachkräfte-Rekrutierung entdecken", en: "Discover Fachkräfte recruitment" },
  ausTitle: { fr: "Accueillir et former vos futurs apprentis", de: "Ihre künftigen Auszubildenden gewinnen und ausbilden", en: "Welcome and train your future apprentices" },
  ausQuestion: {
    fr: "Vous souhaitez intégrer de nouveaux apprentis et former durablement de futurs collaborateurs dans votre entreprise ?",
    de: "Sie möchten neue Auszubildende aufnehmen und künftige Mitarbeitende langfristig in Ihrem Unternehmen ausbilden?",
    en: "Would you like to take on new apprentices and train future staff in your company for the long term?",
  },
  ausBody: {
    fr: "Nous vous accompagnons dans l'identification des candidats, l'étude de leur parcours, l'évaluation de leur allemand et leur préparation linguistique selon les exigences de leur projet d'Ausbildung.",
    de: "Wir begleiten Sie bei der Identifizierung der Kandidaten, der Prüfung ihres Werdegangs, der Bewertung ihres Deutschniveaus und ihrer sprachlichen Vorbereitung entsprechend den Anforderungen ihres Ausbildungsvorhabens.",
    en: "We support you in identifying candidates, reviewing their background, assessing their German and preparing them linguistically according to the requirements of their Ausbildung project.",
  },
  ausCta: { fr: "Découvrir le recrutement d'Azubis", de: "Azubi-Rekrutierung entdecken", en: "Discover Azubi recruitment" },

  whyKicker: { fr: "Pourquoi Karriere Fähre ?", de: "Warum Karriere Fähre?", en: "Why Karriere Fähre?" },
  whyTitle: { fr: "La préparation commence avant la candidature.", de: "Die Vorbereitung beginnt vor der Bewerbung.", en: "Preparation begins before the application." },
  whyIntro: {
    fr: "Un bon recrutement ne repose pas uniquement sur un CV. Il faut comprendre le parcours du candidat, évaluer ses compétences, étudier sa motivation et vérifier l'adéquation de son profil avec les exigences de votre entreprise.",
    de: "Eine gute Rekrutierung beruht nicht allein auf einem Lebenslauf. Es gilt, den Werdegang des Kandidaten zu verstehen, seine Kompetenzen zu bewerten, seine Motivation zu prüfen und die Passung seines Profils mit den Anforderungen Ihres Unternehmens zu beurteilen.",
    en: "Good recruitment does not rest on a CV alone. You need to understand the candidate's background, assess their skills, examine their motivation and check how well their profile fits your company's requirements.",
  },
  whyPoints: [
    {
      title: { fr: "Un réseau local de candidats", de: "Ein lokales Kandidatennetzwerk", en: "A local candidate network" },
      body: {
        fr: "Nous identifions les talents grâce aux candidatures directes et à nos partenariats avec des écoles, des universités et des centres de formation au Cameroun.",
        de: "Wir identifizieren Talente über Direktbewerbungen und unsere Partnerschaften mit Schulen, Hochschulen und Ausbildungszentren in Kamerun.",
        en: "We identify talent through direct applications and our partnerships with schools, universities and training centres in Cameroon.",
      },
    },
    {
      title: { fr: "Une étude approfondie des profils", de: "Eine gründliche Prüfung der Profile", en: "A thorough review of profiles" },
      body: {
        fr: "Nous examinons les diplômes, le parcours académique, l'expérience professionnelle et les motivations. Nous cherchons à vérifier l'authenticité des documents présentés.",
        de: "Wir prüfen Abschlüsse, den schulischen Werdegang, die Berufserfahrung und die Motivation. Wir bemühen uns, die Echtheit der vorgelegten Dokumente zu prüfen.",
        en: "We examine qualifications, academic background, professional experience and motivation. We seek to verify the authenticity of the documents provided.",
      },
    },
    {
      title: { fr: "Une préparation linguistique ciblée", de: "Eine gezielte sprachliche Vorbereitung", en: "Targeted language preparation" },
      body: {
        fr: "Nous évaluons le niveau d'allemand et préparons les candidats jusqu'au B2, avec un travail ciblé sur l'expression orale, le vocabulaire professionnel et la Fachsprache. Les exigences spécifiques de chaque employeur restent déterminantes.",
        de: "Wir bewerten das Deutschniveau und bereiten die Kandidaten gezielt auf das Niveau B2 vor, mit Schwerpunkt auf Sprechfertigkeit, berufsbezogenem Wortschatz und Fachsprache. Die spezifischen Anforderungen jedes Arbeitgebers bleiben maßgeblich.",
        en: "We assess the German level and prepare candidates up to B2, with focused work on speaking, professional vocabulary and Fachsprache. Each employer's specific requirements remain decisive.",
      },
    },
    {
      title: { fr: "Des dossiers adaptés au marché allemand", de: "Unterlagen für den deutschen Arbeitsmarkt", en: "Dossiers suited to the German market" },
      body: {
        fr: "Nous préparons les CV au format allemand et faisons traduire en allemand les documents requis, notamment les actes de naissance, les diplômes de fin d'études et les relevés de notes. Les dossiers peuvent également comporter des vidéos de présentation.",
        de: "Wir erstellen tabellarische Lebensläufe im deutschen Format und lassen die erforderlichen Dokumente, darunter Geburtsurkunden, Abschlusszeugnisse und Notenübersichten, ins Deutsche übersetzen. Die Unterlagen können auch Vorstellungsvideos enthalten.",
        en: "We prepare CVs in the German tabular format and arrange the German translation of the required documents, including birth certificates, school-leaving certificates and academic transcripts. Dossiers can also include presentation videos.",
      },
    },
    {
      title: { fr: "Une rencontre directe avec les candidats", de: "Ein direktes Kennenlernen der Kandidaten", en: "A direct meeting with candidates" },
      body: {
        fr: "Vous pouvez échanger directement avec les candidats lors d'entretiens vidéo, examiner leur motivation et apprécier vous-même leurs compétences.",
        de: "In Videogesprächen tauschen Sie sich direkt mit den Kandidaten aus, prüfen ihre Motivation und beurteilen ihre Kompetenzen selbst.",
        en: "In video interviews, you exchange directly with candidates, examine their motivation and assess their skills yourself.",
      },
    },
    {
      title: { fr: "Un accompagnement au-delà du recrutement", de: "Eine Begleitung über die Rekrutierung hinaus", en: "Support beyond recruitment" },
      body: {
        fr: "Notre accompagnement peut se poursuivre après l'arrivée en Allemagne, avec une aide à l'installation, aux démarches courantes et à l'intégration dans la société allemande.",
        de: "Unsere Begleitung kann nach der Ankunft in Deutschland fortgesetzt werden, mit Unterstützung beim Ankommen, bei alltäglichen Behördengängen und bei der Integration in die deutsche Gesellschaft.",
        en: "Our support can continue after arrival in Germany, with help settling in, with everyday administrative matters and with integration into German society.",
      },
    },
  ],
  whyCta: { fr: "Comprendre notre méthode", de: "Unsere Methode verstehen", en: "Understand our method" },

  methodKicker: { fr: "Un processus structuré", de: "Ein strukturierter Prozess", en: "A structured process" },
  methodTitle: { fr: "De votre besoin à l'intégration du candidat.", de: "Von Ihrem Bedarf bis zur Integration des Kandidaten.", en: "From your need to the candidate's integration." },
  methodSteps: [
    {
      label: { fr: "Comprendre votre besoin", de: "Ihren Bedarf verstehen", en: "Understand your need" },
      body: {
        fr: "Nous échangeons avec vous pour définir le poste, les qualifications, les compétences techniques, l'expérience, les exigences linguistiques et le calendrier souhaité.",
        de: "Wir stimmen mit Ihnen die Stelle, die Qualifikationen, die fachlichen Kompetenzen, die Erfahrung, die sprachlichen Anforderungen und den gewünschten Zeitrahmen ab.",
        en: "We discuss the position, qualifications, technical skills, experience, language requirements and desired timeline with you.",
      },
    },
    {
      label: { fr: "Identifier et présélectionner", de: "Identifizieren und vorauswählen", en: "Identify and pre-select" },
      body: {
        fr: "Nous recherchons dans notre banque de candidats les profils correspondant à vos critères. Si aucun candidat adapté n'est immédiatement disponible, nous vous en informons et convenons ensemble d'un délai de recherche approprié.",
        de: "Wir suchen in unserem Kandidatenpool nach Profilen, die Ihren Kriterien entsprechen. Ist nicht sofort ein geeigneter Kandidat verfügbar, informieren wir Sie und vereinbaren gemeinsam einen angemessenen Suchzeitraum.",
        en: "We search our candidate pool for profiles matching your criteria. If no suitable candidate is immediately available, we tell you and agree together on an appropriate search period.",
      },
    },
    {
      label: { fr: "Évaluer et préparer", de: "Bewerten und vorbereiten", en: "Assess and prepare" },
      body: {
        fr: "Nous étudions les dossiers, les diplômes, les parcours et les expériences. Nous évaluons le niveau d'allemand et orientons les candidats vers une préparation linguistique adaptée à leur projet et aux exigences du poste.",
        de: "Wir prüfen die Unterlagen, Abschlüsse, Werdegänge und Erfahrungen. Wir bewerten das Deutschniveau und leiten die Kandidaten zu einer sprachlichen Vorbereitung, die zu ihrem Vorhaben und den Anforderungen der Stelle passt.",
        en: "We review dossiers, qualifications, backgrounds and experience. We assess the German level and guide candidates towards language preparation suited to their project and the requirements of the position.",
      },
    },
    {
      label: { fr: "Organiser les entretiens", de: "Gespräche organisieren", en: "Organise interviews" },
      body: {
        fr: "Nous facilitons les échanges vidéo entre votre entreprise et les candidats présélectionnés. Vous pouvez ainsi évaluer directement leurs compétences, leur communication et leur motivation.",
        de: "Wir ermöglichen Videogespräche zwischen Ihrem Unternehmen und den vorausgewählten Kandidaten. So beurteilen Sie direkt deren Kompetenzen, Kommunikation und Motivation.",
        en: "We facilitate video exchanges between your company and the pre-selected candidates. You can assess their skills, communication and motivation directly.",
      },
    },
    {
      label: { fr: "Coordonner les démarches convenues", de: "Die vereinbarten Schritte koordinieren", en: "Coordinate the agreed steps" },
      body: {
        fr: "Nous accompagnons la préparation des étapes administratives prévues dans notre mission, en tenant compte du profil du candidat, du poste et du cadre réglementaire applicable.",
        de: "Wir begleiten die Vorbereitung der im Auftrag vorgesehenen behördlichen Schritte, unter Berücksichtigung des Kandidatenprofils, der Stelle und des geltenden rechtlichen Rahmens.",
        en: "We support the preparation of the administrative steps provided for in our assignment, taking into account the candidate's profile, the position and the applicable regulatory framework.",
      },
    },
    {
      label: { fr: "Préparer l'arrivée et l'intégration", de: "Ankunft und Integration begleiten", en: "Prepare arrival and integration" },
      body: {
        fr: "Nous accompagnons le candidat dans son installation en Allemagne, ses démarches courantes et son intégration dans son nouvel environnement.",
        de: "Wir begleiten den Kandidaten beim Ankommen in Deutschland, bei alltäglichen Behördengängen und bei der Integration in sein neues Umfeld.",
        en: "We support the candidate in settling into Germany, in everyday administrative matters and in integrating into their new environment.",
      },
    },
  ],
  methodCta: { fr: "Voir notre méthode en détail", de: "Unsere Methode im Detail ansehen", en: "See our method in detail" },

  secKicker: { fr: "Votre activité", de: "Ihre Tätigkeit", en: "Your activity" },
  secTitle: { fr: "Des solutions adaptées à votre secteur.", de: "Auf Ihre Branche abgestimmte Lösungen.", en: "Solutions tailored to your sector." },
  sectors: [
    { fr: "Santé et soins", de: "Gesundheit und Pflege", en: "Health and care" },
    { fr: "Industrie et technique", de: "Industrie und Technik", en: "Industry and engineering" },
    { fr: "BTP et artisanat", de: "Bau und Handwerk", en: "Construction and crafts" },
    { fr: "Logistique et transport", de: "Logistik und Transport", en: "Logistics and transport" },
    { fr: "Hôtellerie et restauration", de: "Hotellerie und Gastronomie", en: "Hospitality and catering" },
    { fr: "Informatique et métiers spécialisés", de: "IT und Spezialberufe", en: "IT and specialised trades" },
  ],
  secNote: {
    fr: "Chaque demande fait l'objet d'une étude individuelle afin de déterminer les profils et le parcours de préparation adaptés.",
    de: "Jede Anfrage wird einzeln geprüft, um die passenden Profile und den geeigneten Vorbereitungsweg zu bestimmen.",
    en: "Each request is studied individually to determine the suitable profiles and preparation path.",
  },
  secCta: { fr: "Explorer nos secteurs", de: "Unsere Branchen erkunden", en: "Explore our sectors" },

  frameKicker: { fr: "Transparence et conformité", de: "Transparenz und Konformität", en: "Transparency and compliance" },
  frameTitle: {
    fr: "Un cadre clair pour chaque collaboration.",
    de: "Ein klarer Rahmen für jede Zusammenarbeit.",
    en: "A clear framework for every collaboration.",
  },
  frameText1: {
    fr: "Le recrutement international implique plusieurs étapes qui dépendent du candidat, du poste et des exigences réglementaires applicables.",
    de: "Internationale Rekrutierung umfasst mehrere Schritte, die vom Kandidaten, von der Stelle und von den geltenden rechtlichen Anforderungen abhängen.",
    en: "International recruitment involves several steps that depend on the candidate, the position and the applicable regulatory requirements.",
  },
  frameText2: {
    fr: "Nous vous accompagnons dans la préparation des étapes convenues, notamment lorsque des questions de qualifications, de reconnaissance de diplômes, de visa ou d'installation doivent être examinées.",
    de: "Wir begleiten Sie bei der Vorbereitung der vereinbarten Schritte, insbesondere wenn Fragen der Qualifikationen, der Anerkennung von Abschlüssen, des Visums oder des Ankommens zu klären sind.",
    en: "We support you in preparing the agreed steps, in particular when questions of qualifications, recognition of diplomas, visa or settling in need to be examined.",
  },
  frameText3: {
    fr: "Notre collaboration est formalisée par un contrat ou une convention précisant les prestations convenues, les engagements et les responsabilités de chaque partie.",
    de: "Unsere Zusammenarbeit wird in einem Vertrag oder einer Vereinbarung festgehalten, die die vereinbarten Leistungen, die Verpflichtungen und die Verantwortlichkeiten jeder Partei festlegt.",
    en: "Our collaboration is formalised in a contract or agreement setting out the agreed services, the commitments and the responsibilities of each party.",
  },
  frameText4: {
    fr: "Les décisions de recrutement appartiennent à votre entreprise. Les décisions relatives à la reconnaissance des qualifications et au séjour relèvent des organismes et autorités compétents.",
    de: "Die Einstellungsentscheidungen liegen bei Ihrem Unternehmen. Die Entscheidungen über die Anerkennung der Qualifikationen und den Aufenthalt liegen bei den zuständigen Stellen und Behörden.",
    en: "Hiring decisions rest with your company. Decisions on the recognition of qualifications and on residence rest with the competent bodies and authorities.",
  },
  frameCta: { fr: "Comprendre les démarches", de: "Die Schritte verstehen", en: "Understand the steps" },

  finalKicker: { fr: "Parlons de votre besoin", de: "Sprechen wir über Ihren Bedarf", en: "Let's talk about your need" },
  finalTitle: { fr: "Quel poste souhaitez-vous pourvoir ?", de: "Welche Stelle möchten Sie besetzen?", en: "Which position do you want to fill?" },
  finalText: {
    fr: "Présentez-nous votre besoin en personnel ou vos places d'Ausbildung. Nous examinerons ensemble les qualifications recherchées, les compétences attendues, les exigences linguistiques et les prochaines étapes possibles.",
    de: "Stellen Sie uns Ihren Personalbedarf oder Ihre Ausbildungsplätze vor. Wir prüfen gemeinsam die gesuchten Qualifikationen, die erwarteten Kompetenzen, die sprachlichen Anforderungen und die möglichen nächsten Schritte.",
    en: "Tell us about your staffing need or your Ausbildung places. We will review together the qualifications sought, the skills expected, the language requirements and the possible next steps.",
  },
  finalCtaPrimary: { fr: "Décrire mon besoin de recrutement", de: "Meinen Personalbedarf beschreiben", en: "Describe my recruitment need" },
  finalCtaSecondary: { fr: "Nous contacter", de: "Kontakt aufnehmen", en: "Contact us" },
};
