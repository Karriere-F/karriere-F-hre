import type { LocalizedText } from "./localized";

// Full content for /ausbildung-allemagne/apres-ausbildung. Trilingual and factual.
// The two "cas pratique" are illustrative examples (not real clients); every
// career step is hedged ("peut", "selon les conditions") — never a guarantee.

type LT = LocalizedText;
type Step = { num: string; label: LT; sublabel: LT; body: LT };
type Case = { tag: LT; title: LT; persona: LT; steps: Step[]; schema: LT[] };

export const APRES_PAGE: {
  heroTitle: LT;
  heroIntro: LT;
  ctaEvaluer: LT;
  ctaMetiers: LT;
  startTitle: LT;
  startText: LT;
  startBaseLabel: LT;
  startBranchLabel: LT;
  startFlow: { label: LT; desc: LT }[];
  startOutcomes: { label: LT; desc: LT }[];
  cases: Case[];
  compareTitle: LT;
  compareCols: { pflege: LT; technique: LT };
  compareRows: { label: LT; pflege: LT; technique: LT }[];
  compareNote: LT;
  expTitle: LT;
  expFlow: LT[];
  expNote: LT;
  studiesTitle: LT;
  studiesIntro: LT;
  studiesAnchor: LT;
  studiesFamilies: { label: LT; text: LT }[];
  supportTitle: LT;
  supportText: LT;
  supportAnchor: LT;
  support: { label: LT; text: LT }[];
  finalTitle: LT;
  finalText: LT;
  faqTitle: LT;
  faq: { q: LT; a: LT }[];
} = {
  // 1 — HERO
  heroTitle: {
    fr: "Après l'Ausbildung, votre carrière commence vraiment.",
    de: "Nach der Ausbildung beginnt Ihre Karriere richtig.",
    en: "After the Ausbildung, your career truly begins.",
  },
  heroIntro: {
    fr: "Une Ausbildung vous permet d'obtenir une qualification professionnelle reconnue et d'entrer dans la vie active. Mais elle peut aussi être le point de départ d'une spécialisation, de nouvelles responsabilités ou, selon les conditions, d'études supérieures.",
    de: "Mit einer Ausbildung erhalten Sie einen anerkannten Berufsabschluss und steigen ins Berufsleben ein. Sie kann aber auch der Ausgangspunkt für eine Spezialisierung, neue Verantwortung oder, je nach Bedingungen, ein Studium sein.",
    en: "An Ausbildung gives you a recognised vocational qualification and gets you into working life. It can also be the starting point for a specialisation, new responsibilities or, depending on the conditions, higher education.",
  },
  ctaEvaluer: { fr: "Évaluer mon profil", de: "Mein Profil bewerten", en: "Assess my profile" },
  ctaMetiers: {
    fr: "Voir les métiers accessibles",
    de: "Zugängliche Berufe ansehen",
    en: "See the accessible professions",
  },

  // 2 — POINT DE DÉPART
  startTitle: {
    fr: "Une qualification. Plusieurs possibilités d'évolution.",
    de: "Ein Abschluss. Mehrere Entwicklungsmöglichkeiten.",
    en: "One qualification. Several ways to grow.",
  },
  startText: {
    fr: "À la fin de votre Ausbildung, vous disposez d'une qualification professionnelle qui vous permet d'exercer votre métier. Avec l'expérience et les qualifications complémentaires adaptées, votre parcours peut ensuite évoluer dans différentes directions.",
    de: "Am Ende Ihrer Ausbildung haben Sie einen Berufsabschluss, mit dem Sie Ihren Beruf ausüben können. Mit Erfahrung und passenden Zusatzqualifikationen kann sich Ihr Weg dann in verschiedene Richtungen entwickeln.",
    en: "At the end of your Ausbildung, you hold a vocational qualification that lets you practise your trade. With experience and the right further qualifications, your path can then develop in several directions.",
  },
  startBaseLabel: {
    fr: "Le parcours de base",
    de: "Der Grundweg",
    en: "The core path",
  },
  startBranchLabel: {
    fr: "Ensuite, vous pouvez évoluer dans plusieurs directions",
    de: "Danach können Sie sich in mehrere Richtungen entwickeln",
    en: "Then you can grow in several directions",
  },
  startFlow: [
    {
      label: { fr: "Vous vous formez", de: "Sie machen die Ausbildung", en: "You train" },
      desc: {
        fr: "Une formation payée, en entreprise et à l'école professionnelle.",
        de: "Eine bezahlte Ausbildung, im Betrieb und in der Berufsschule.",
        en: "A paid training, in the company and at vocational school.",
      },
    },
    {
      label: { fr: "Vous êtes qualifié", de: "Sie sind qualifiziert", en: "You get qualified" },
      desc: {
        fr: "Vous obtenez un diplôme reconnu et exercez votre métier.",
        de: "Sie erhalten einen anerkannten Abschluss und üben Ihren Beruf aus.",
        en: "You earn a recognised qualification and practise your trade.",
      },
    },
    {
      label: { fr: "Vous gagnez de l'expérience", de: "Sie sammeln Erfahrung", en: "You gain experience" },
      desc: {
        fr: "Vous travaillez et montez en compétence année après année.",
        de: "Sie arbeiten und werden Jahr für Jahr besser.",
        en: "You work and build up skill year after year.",
      },
    },
  ],
  startOutcomes: [
    {
      label: { fr: "Vous vous spécialisez", de: "Sie spezialisieren sich", en: "You specialise" },
      desc: {
        fr: "Vous approfondissez un domaine précis de votre métier.",
        de: "Sie vertiefen einen bestimmten Bereich Ihres Berufs.",
        en: "You go deeper into a specific area of your trade.",
      },
    },
    {
      label: { fr: "Vous prenez des responsabilités", de: "Sie übernehmen Verantwortung", en: "You take on responsibility" },
      desc: {
        fr: "Vous encadrez une équipe ou organisez le travail.",
        de: "Sie leiten ein Team oder organisieren die Arbeit.",
        en: "You lead a team or organise the work.",
      },
    },
    {
      label: { fr: "Vous montez en qualification", de: "Sie qualifizieren sich weiter", en: "You upskill" },
      desc: {
        fr: "Vous passez des formations comme Meister ou Techniker.",
        de: "Sie absolvieren Weiterbildungen wie Meister oder Techniker.",
        en: "You take further training such as Meister or Techniker.",
      },
    },
    {
      label: { fr: "Vous poursuivez des études", de: "Sie studieren", en: "You study further" },
      desc: {
        fr: "Vous pouvez aller à l'université, selon les conditions.",
        de: "Sie können studieren, je nach Voraussetzungen.",
        en: "You can go on to university, depending on the conditions.",
      },
    },
  ],

  // 3 & 4 — CAS PRATIQUES
  cases: [
    {
      tag: { fr: "Cas pratique 01 · Pflege", de: "Fallbeispiel 01 · Pflege", en: "Case study 01 · Pflege" },
      title: {
        fr: "De l'Ausbildung en soins à l'évolution professionnelle",
        de: "Von der Pflegeausbildung zur beruflichen Entwicklung",
        en: "From a care Ausbildung to professional growth",
      },
      persona: {
        fr: "Sarah, 24 ans (exemple), commence une Ausbildung de Pflegefachfrau en Allemagne. Après sa formation, son parcours peut évoluer progressivement.",
        de: "Sarah, 24 Jahre (Beispiel), beginnt eine Ausbildung zur Pflegefachfrau in Deutschland. Nach der Ausbildung kann sich ihr Weg schrittweise entwickeln.",
        en: "Sarah, 24 (example), starts an Ausbildung as a Pflegefachfrau in Germany. After her training, her path can develop step by step.",
      },
      steps: [
        {
          num: "01",
          label: { fr: "Professionnelle qualifiée", de: "Fachkraft", en: "Qualified professional" },
          sublabel: { fr: "Pflegefachfrau", de: "Pflegefachfrau", en: "Pflegefachfrau" },
          body: {
            fr: "Après sa qualification, Sarah peut exercer comme professionnelle qualifiée dans un hôpital, une maison de retraite ou d'autres structures de soins, selon son profil et les opportunités disponibles.",
            de: "Nach dem Abschluss kann Sarah als Fachkraft in einem Krankenhaus, einem Pflegeheim oder anderen Pflegeeinrichtungen arbeiten, je nach Profil und verfügbaren Möglichkeiten.",
            en: "Once qualified, Sarah can work as a skilled professional in a hospital, a care home or other care settings, depending on her profile and the opportunities available.",
          },
        },
        {
          num: "02",
          label: { fr: "Weiterbildung / spécialisation", de: "Weiterbildung / Spezialisierung", en: "Weiterbildung / specialisation" },
          sublabel: { fr: "Se spécialiser", de: "Sich spezialisieren", en: "Specialise" },
          body: {
            fr: "Avec de l'expérience, elle peut envisager différentes qualifications complémentaires, par exemple dans les soins intensifs, l'anesthésie, l'oncologie ou d'autres domaines spécialisés.",
            de: "Mit Erfahrung kann sie verschiedene Zusatzqualifikationen ins Auge fassen, etwa in der Intensivpflege, Anästhesie, Onkologie oder anderen Fachbereichen.",
            en: "With experience, she can consider various further qualifications, for example in intensive care, anaesthesia, oncology or other specialised fields.",
          },
        },
        {
          num: "03",
          label: { fr: "Responsabilités supplémentaires", de: "Mehr Verantwortung", en: "More responsibility" },
          sublabel: { fr: "Évoluer vers l'encadrement", de: "In die Leitung wechseln", en: "Move into team leadership" },
          body: {
            fr: "Avec l'expérience et les qualifications requises, elle peut accéder à des fonctions comportant davantage de responsabilités, par exemple dans l'organisation ou l'encadrement des soins.",
            de: "Mit Erfahrung und den nötigen Qualifikationen kann sie Funktionen mit mehr Verantwortung übernehmen, etwa in der Organisation oder Leitung der Pflege.",
            en: "With experience and the required qualifications, she can take on roles with more responsibility, for example in organising or leading care teams.",
          },
        },
        {
          num: "04",
          label: { fr: "Études supérieures possibles", de: "Studium möglich", en: "Higher education possible" },
          sublabel: { fr: "Selon les conditions d'accès", de: "Je nach Zugangsvoraussetzungen", en: "Subject to entry conditions" },
          body: {
            fr: "Selon ses qualifications, le Land concerné et les conditions de l'établissement, elle peut également envisager des études dans des domaines tels que le management des soins, la pédagogie en soins ou les sciences infirmières.",
            de: "Je nach Qualifikationen, Bundesland und Hochschulbedingungen kann sie auch ein Studium in Bereichen wie Pflegemanagement, Pflegepädagogik oder Pflegewissenschaft erwägen.",
            en: "Depending on her qualifications, the Land and the institution's conditions, she may also consider studies in fields such as care management, care education or nursing science.",
          },
        },
      ],
      schema: [
        { fr: "Ausbildung", de: "Ausbildung", en: "Ausbildung" },
        { fr: "Qualifiée", de: "Fachkraft", en: "Qualified" },
        { fr: "Spécialisation", de: "Spezialisierung", en: "Specialisation" },
        { fr: "Encadrement", de: "Leitung", en: "Leadership" },
        { fr: "Études", de: "Studium", en: "Studies" },
      ],
    },
    {
      tag: { fr: "Cas pratique 02 · Technique", de: "Fallbeispiel 02 · Technik", en: "Case study 02 · Technical" },
      title: {
        fr: "De l'Ausbildung technique à la responsabilité",
        de: "Von der technischen Ausbildung zur Verantwortung",
        en: "From a technical Ausbildung to responsibility",
      },
      persona: {
        fr: "David, 22 ans (exemple), commence une Ausbildung d'Elektroniker für Betriebstechnik. Il acquiert pendant sa formation des compétences pratiques et théoriques dans son domaine.",
        de: "David, 22 Jahre (Beispiel), beginnt eine Ausbildung zum Elektroniker für Betriebstechnik. Während der Ausbildung erwirbt er praktische und theoretische Kompetenzen in seinem Bereich.",
        en: "David, 22 (example), starts an Ausbildung as an Elektroniker für Betriebstechnik. During his training he gains practical and theoretical skills in his field.",
      },
      steps: [
        {
          num: "01",
          label: { fr: "Professionnel technique qualifié", de: "Technische Fachkraft", en: "Qualified technician" },
          sublabel: { fr: "Elektroniker", de: "Elektroniker", en: "Elektroniker" },
          body: {
            fr: "À la fin de sa formation, David peut entrer dans la vie professionnelle comme professionnel technique qualifié.",
            de: "Nach der Ausbildung kann David als technische Fachkraft ins Berufsleben einsteigen.",
            en: "At the end of his training, David can enter working life as a qualified technician.",
          },
        },
        {
          num: "02",
          label: { fr: "Weiterbildung / Techniker / Meister", de: "Weiterbildung / Techniker / Meister", en: "Weiterbildung / Techniker / Meister" },
          sublabel: { fr: "Développer ses qualifications", de: "Qualifikationen ausbauen", en: "Build up qualifications" },
          body: {
            fr: "Avec l'expérience et selon son projet, il peut préparer une Weiterbildung telle qu'un parcours de Techniker ou de Meister.",
            de: "Mit Erfahrung und je nach Ziel kann er eine Weiterbildung wie den Weg zum Techniker oder Meister vorbereiten.",
            en: "With experience and depending on his goal, he can prepare a Weiterbildung such as a Techniker or Meister path.",
          },
        },
        {
          num: "03",
          label: { fr: "Responsabilités techniques", de: "Technische Verantwortung", en: "Technical responsibility" },
          sublabel: { fr: "Prendre davantage de responsabilités", de: "Mehr Verantwortung übernehmen", en: "Take on more responsibility" },
          body: {
            fr: "Ces qualifications et l'expérience professionnelle peuvent ouvrir l'accès à des fonctions avec davantage de responsabilités techniques, d'organisation ou d'encadrement.",
            de: "Diese Qualifikationen und die Berufserfahrung können Funktionen mit mehr technischer, organisatorischer oder leitender Verantwortung eröffnen.",
            en: "These qualifications and work experience can open roles with more technical, organisational or supervisory responsibility.",
          },
        },
        {
          num: "04",
          label: { fr: "Études supérieures possibles", de: "Studium möglich", en: "Higher education possible" },
          sublabel: { fr: "Selon les conditions d'accès", de: "Je nach Zugangsvoraussetzungen", en: "Subject to entry conditions" },
          body: {
            fr: "Selon son parcours et les règles applicables, David peut également envisager des études supérieures dans des domaines comme l'électrotechnique, l'automatisation ou l'ingénierie.",
            de: "Je nach Werdegang und geltenden Regeln kann David auch ein Studium in Bereichen wie Elektrotechnik, Automatisierung oder Ingenieurwesen erwägen.",
            en: "Depending on his background and the applicable rules, David may also consider higher studies in fields such as electrical engineering, automation or engineering.",
          },
        },
      ],
      schema: [
        { fr: "Ausbildung", de: "Ausbildung", en: "Ausbildung" },
        { fr: "Qualifié", de: "Fachkraft", en: "Qualified" },
        { fr: "Techniker / Meister", de: "Techniker / Meister", en: "Techniker / Meister" },
        { fr: "Responsabilités", de: "Verantwortung", en: "Responsibility" },
        { fr: "Études", de: "Studium", en: "Studies" },
      ],
    },
  ],

  // 5 — COMPARAISON
  compareTitle: {
    fr: "Deux métiers. Une même logique d'évolution.",
    de: "Zwei Berufe. Dieselbe Entwicklungslogik.",
    en: "Two trades. The same logic of progression.",
  },
  compareCols: {
    pflege: { fr: "Pflege", de: "Pflege", en: "Pflege" },
    technique: { fr: "Technique", de: "Technik", en: "Technical" },
  },
  compareRows: [
    {
      label: { fr: "Départ", de: "Start", en: "Start" },
      pflege: { fr: "Ausbildung Pflege", de: "Ausbildung Pflege", en: "Care Ausbildung" },
      technique: { fr: "Ausbildung technique", de: "Technische Ausbildung", en: "Technical Ausbildung" },
    },
    {
      label: { fr: "Après la formation", de: "Nach der Ausbildung", en: "After training" },
      pflege: { fr: "Pflegefachfrau/-mann", de: "Pflegefachfrau/-mann", en: "Pflegefachfrau/-mann" },
      technique: { fr: "Professionnel technique qualifié", de: "Technische Fachkraft", en: "Qualified technician" },
    },
    {
      label: { fr: "Évolution", de: "Entwicklung", en: "Progression" },
      pflege: { fr: "Weiterbildung / spécialisation", de: "Weiterbildung / Spezialisierung", en: "Weiterbildung / specialisation" },
      technique: { fr: "Weiterbildung / Techniker / Meister", de: "Weiterbildung / Techniker / Meister", en: "Weiterbildung / Techniker / Meister" },
    },
    {
      label: { fr: "Responsabilités", de: "Verantwortung", en: "Responsibilities" },
      pflege: { fr: "Encadrement des soins", de: "Pflegeleitung", en: "Care leadership" },
      technique: { fr: "Responsabilités techniques", de: "Technische Verantwortung", en: "Technical responsibility" },
    },
    {
      label: { fr: "Études", de: "Studium", en: "Studies" },
      pflege: { fr: "Selon les conditions", de: "Je nach Bedingungen", en: "Subject to conditions" },
      technique: { fr: "Selon les conditions", de: "Je nach Bedingungen", en: "Subject to conditions" },
    },
  ],
  compareNote: {
    fr: "L'Ausbildung n'est pas un parcours fermé : selon le métier, plusieurs directions restent ouvertes.",
    de: "Die Ausbildung ist kein geschlossener Weg: Je nach Beruf bleiben mehrere Richtungen offen.",
    en: "The Ausbildung is not a closed path: depending on the trade, several directions stay open.",
  },

  // 6 — EXPÉRIENCE
  expTitle: {
    fr: "Plus d'expérience. Plus de possibilités.",
    de: "Mehr Erfahrung. Mehr Möglichkeiten.",
    en: "More experience. More possibilities.",
  },
  expFlow: [
    { fr: "Qualification", de: "Abschluss", en: "Qualification" },
    { fr: "Expérience", de: "Erfahrung", en: "Experience" },
    { fr: "Spécialisation", de: "Spezialisierung", en: "Specialisation" },
    { fr: "Responsabilités", de: "Verantwortung", en: "Responsibilities" },
    { fr: "Évolution professionnelle", de: "Berufliche Entwicklung", en: "Career growth" },
  ],
  expNote: {
    fr: "Votre évolution dépend du métier choisi, de votre expérience, des qualifications complémentaires obtenues et des conditions propres à chaque profession.",
    de: "Ihre Entwicklung hängt vom gewählten Beruf, Ihrer Erfahrung, den erworbenen Zusatzqualifikationen und den Bedingungen des jeweiligen Berufs ab.",
    en: "Your progression depends on the trade you choose, your experience, the further qualifications you gain and the conditions specific to each profession.",
  },

  // 7 — ÉTUDES
  studiesTitle: {
    fr: "Une Ausbildung peut aussi ouvrir d'autres perspectives.",
    de: "Eine Ausbildung kann auch weitere Perspektiven eröffnen.",
    en: "An Ausbildung can also open further perspectives.",
  },
  studiesIntro: {
    fr: "Une qualification professionnelle ne signifie pas nécessairement la fin de votre parcours de formation. Selon votre situation, vos qualifications, votre Land et les conditions d'admission, différentes possibilités de poursuite de formation ou d'études peuvent exister.",
    de: "Ein Berufsabschluss bedeutet nicht zwangsläufig das Ende Ihres Bildungswegs. Je nach Situation, Qualifikationen, Bundesland und Zulassungsbedingungen können verschiedene Wege zur Weiterbildung oder zum Studium bestehen.",
    en: "A vocational qualification does not necessarily mean the end of your education. Depending on your situation, your qualifications, your Land and the admission conditions, various paths to further training or study may exist.",
  },
  studiesAnchor: {
    fr: "Après votre Ausbildung",
    de: "Nach Ihrer Ausbildung",
    en: "After your Ausbildung",
  },
  studiesFamilies: [
    {
      label: { fr: "Weiterbildung professionnelle", de: "Berufliche Weiterbildung", en: "Professional Weiterbildung" },
      text: { fr: "Techniker, Meister, Fachwirt et parcours similaires.", de: "Techniker, Meister, Fachwirt und ähnliche Wege.", en: "Techniker, Meister, Fachwirt and similar paths." },
    },
    {
      label: { fr: "Spécialisation métier", de: "Fachliche Spezialisierung", en: "Trade specialisation" },
      text: { fr: "Des qualifications complémentaires liées au secteur.", de: "Zusatzqualifikationen im jeweiligen Bereich.", en: "Further qualifications tied to the sector." },
    },
    {
      label: { fr: "Études supérieures", de: "Hochschulstudium", en: "Higher education" },
      text: { fr: "Possibles sous certaines conditions d'accès.", de: "Möglich unter bestimmten Zugangsvoraussetzungen.", en: "Possible under certain entry conditions." },
    },
  ],

  // 8 — ACCOMPAGNEMENT
  supportTitle: {
    fr: "Votre parcours ne s'arrête pas à l'arrivée en Allemagne.",
    de: "Ihr Weg endet nicht mit der Ankunft in Deutschland.",
    en: "Your journey does not stop when you arrive in Germany.",
  },
  supportText: {
    fr: "Karriere Fähre vous aide à comprendre les différentes étapes de votre parcours et à identifier les possibilités qui correspondent à votre profil et à votre projet professionnel.",
    de: "Karriere Fähre hilft Ihnen, die verschiedenen Etappen Ihres Wegs zu verstehen und die Möglichkeiten zu erkennen, die zu Ihrem Profil und Ihrem Berufsziel passen.",
    en: "Karriere Fähre helps you understand the different stages of your path and identify the possibilities that fit your profile and your professional plan.",
  },
  supportAnchor: {
    fr: "Karriere Fähre vous accompagne",
    de: "Karriere Fähre begleitet Sie",
    en: "Karriere Fähre supports you",
  },
  support: [
    {
      label: { fr: "Orientation", de: "Orientierung", en: "Guidance" },
      text: { fr: "Comprendre les possibilités après la formation.", de: "Die Möglichkeiten nach der Ausbildung verstehen.", en: "Understand the possibilities after training." },
    },
    {
      label: { fr: "Évolution", de: "Entwicklung", en: "Growth" },
      text: { fr: "Identifier les qualifications complémentaires pertinentes.", de: "Relevante Zusatzqualifikationen erkennen.", en: "Identify the relevant further qualifications." },
    },
    {
      label: { fr: "Projet professionnel", de: "Berufsziel", en: "Career plan" },
      text: { fr: "Construire une trajectoire cohérente.", de: "Einen stimmigen Werdegang aufbauen.", en: "Build a coherent trajectory." },
    },
    {
      label: { fr: "Intégration", de: "Integration", en: "Integration" },
      text: { fr: "Mieux comprendre le monde professionnel allemand.", de: "Die deutsche Arbeitswelt besser verstehen.", en: "Better understand the German working world." },
    },
  ],

  // 9 — CTA FINAL
  finalTitle: {
    fr: "Et vous, jusqu'où voulez-vous aller ?",
    de: "Und Sie, wie weit möchten Sie gehen?",
    en: "And you, how far do you want to go?",
  },
  finalText: {
    fr: "Votre première étape peut être une Ausbildung. Votre parcours professionnel se construit ensuite avec votre expérience, vos qualifications et vos objectifs.",
    de: "Ihre erste Etappe kann eine Ausbildung sein. Ihr beruflicher Weg entsteht danach mit Ihrer Erfahrung, Ihren Qualifikationen und Ihren Zielen.",
    en: "Your first step can be an Ausbildung. Your professional path is then built with your experience, your qualifications and your goals.",
  },

  // 10 — FAQ
  faqTitle: { fr: "Questions fréquentes", de: "Häufige Fragen", en: "Frequently asked questions" },
  faq: [
    {
      q: {
        fr: "Une Ausbildung garantit-elle un emploi après la formation ?",
        de: "Garantiert eine Ausbildung einen Job nach dem Abschluss?",
        en: "Does an Ausbildung guarantee a job after training?",
      },
      a: {
        fr: "Non. Aucun acteur sérieux ne peut garantir un emploi. Une Ausbildung mène à une qualification reconnue qui améliore vos possibilités, mais l'embauche dépend des employeurs et du marché.",
        de: "Nein. Kein seriöser Anbieter kann einen Job garantieren. Eine Ausbildung führt zu einem anerkannten Abschluss, der Ihre Chancen verbessert, aber die Einstellung hängt von Arbeitgebern und Markt ab.",
        en: "No. No serious provider can guarantee a job. An Ausbildung leads to a recognised qualification that improves your chances, but hiring depends on employers and the market.",
      },
    },
    {
      q: {
        fr: "Peut-on se spécialiser après une Ausbildung ?",
        de: "Kann man sich nach einer Ausbildung spezialisieren?",
        en: "Can you specialise after an Ausbildung?",
      },
      a: {
        fr: "Oui, selon le métier. Des qualifications complémentaires (Weiterbildung) permettent souvent de développer une spécialisation avec l'expérience.",
        de: "Ja, je nach Beruf. Zusatzqualifikationen (Weiterbildung) ermöglichen oft mit Erfahrung eine Spezialisierung.",
        en: "Yes, depending on the trade. Further qualifications (Weiterbildung) often allow you to develop a specialisation with experience.",
      },
    },
    {
      q: {
        fr: "Peut-on devenir Techniker ou Meister après une Ausbildung ?",
        de: "Kann man nach einer Ausbildung Techniker oder Meister werden?",
        en: "Can you become a Techniker or Meister after an Ausbildung?",
      },
      a: {
        fr: "Dans de nombreux métiers techniques et artisanaux, oui, après une formation complémentaire et selon les conditions requises.",
        de: "In vielen technischen und handwerklichen Berufen ja, nach einer Weiterbildung und je nach den erforderlichen Bedingungen.",
        en: "In many technical and skilled trades, yes, after further training and depending on the required conditions.",
      },
    },
    {
      q: {
        fr: "Peut-on faire des études après une Ausbildung ?",
        de: "Kann man nach einer Ausbildung studieren?",
        en: "Can you study after an Ausbildung?",
      },
      a: {
        fr: "C'est possible sous certaines conditions, qui dépendent de vos qualifications, du Land et de l'établissement visé.",
        de: "Das ist unter bestimmten Bedingungen möglich, die von Ihren Qualifikationen, dem Bundesland und der Hochschule abhängen.",
        en: "It is possible under certain conditions, which depend on your qualifications, the Land and the institution.",
      },
    },
    {
      q: {
        fr: "Est-ce que tous les métiers offrent les mêmes possibilités d'évolution ?",
        de: "Bieten alle Berufe die gleichen Entwicklungsmöglichkeiten?",
        en: "Do all trades offer the same growth possibilities?",
      },
      a: {
        fr: "Non. Les possibilités varient selon le métier, la branche, la région et votre parcours.",
        de: "Nein. Die Möglichkeiten hängen von Beruf, Branche, Region und Ihrem Werdegang ab.",
        en: "No. The possibilities vary by trade, sector, region and your own background.",
      },
    },
  ],
};
