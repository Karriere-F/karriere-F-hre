import type { LocalizedText } from "./localized";

// Content for the premium, pedagogical "Comprendre le fonctionnement d'une
// Ausbildung" page (/ausbildung-allemagne/conditions). Trilingual, factual: no
// fabricated figures (durations are the widely-known indicative range; pay is
// described by category, the sourced minimums live on the main Ausbildung page).
export const CONDITIONS_PAGE: {
  heroTitle: LocalizedText;
  heroSubtitle: LocalizedText;
  ctaEvaluer: LocalizedText;
  ctaMetiers: LocalizedText;
  blocks: { title: LocalizedText; body: LocalizedText }[];
  durations: LocalizedText[];
  durationsNote: LocalizedText;
  dualSteps: LocalizedText[];
  dualDiagram: {
    entreprise: { label: LocalizedText; desc: LocalizedText };
    berufsschule: { label: LocalizedText; desc: LocalizedText };
    alternance: LocalizedText;
    examens: { label: LocalizedText; desc: LocalizedText };
    qualification: { label: LocalizedText; desc: LocalizedText };
  };
  revenues: { label: LocalizedText; text: LocalizedText }[];
  afterCta: LocalizedText;
  finalTitle: LocalizedText;
  finalText: LocalizedText;
  finalNote: LocalizedText;
} = {
  heroTitle: {
    fr: "Une Ausbildung, comment ça fonctionne concrètement ?",
    de: "Eine Ausbildung, wie funktioniert das konkret?",
    en: "An Ausbildung, how does it actually work?",
  },
  heroSubtitle: {
    fr: "Comprenez les conditions d'accès, le déroulement de la formation, le niveau d'allemand, les démarches et les principaux coûts avant de vous engager.",
    de: "Verstehen Sie die Zugangsvoraussetzungen, den Ablauf der Ausbildung, das Sprachniveau, die Schritte und die wichtigsten Kosten, bevor Sie sich entscheiden.",
    en: "Understand the entry conditions, how the training unfolds, the German level, the steps and the main costs before you commit.",
  },
  ctaEvaluer: { fr: "Évaluer mon profil", de: "Mein Profil bewerten", en: "Assess my profile" },
  ctaMetiers: {
    fr: "Voir les métiers accessibles",
    de: "Zugängliche Berufe ansehen",
    en: "See the accessible professions",
  },
  blocks: [
    {
      title: {
        fr: "Qui peut accéder à une Ausbildung ?",
        de: "Wer kann eine Ausbildung machen?",
        en: "Who can access an Ausbildung?",
      },
      body: {
        fr: "Un diplôme ou un niveau scolaire compatible avec le métier, votre expérience éventuelle, votre motivation et l'adéquation avec le métier visé. Chaque profil est étudié individuellement pour identifier les parcours possibles.",
        de: "Ein zum Beruf passender Abschluss oder Schulstand, Ihre etwaige Erfahrung, Ihre Motivation und die Eignung für den angestrebten Beruf. Jedes Profil wird einzeln geprüft, um mögliche Wege zu finden.",
        en: "A qualification or school level suited to the trade, any experience, your motivation and the fit with the target profession. Each profile is reviewed individually to identify possible paths.",
      },
    },
    {
      title: {
        fr: "Quel niveau d'allemand faut-il ?",
        de: "Welches Deutschniveau ist nötig?",
        en: "What German level do you need?",
      },
      body: {
        fr: "Le B2 est le niveau standard visé. Les exigences peuvent varier selon le métier, l'entreprise et les démarches administratives. Nous vous accompagnons dans votre progression jusqu'à ce niveau.",
        de: "B2 ist das angestrebte Standardniveau. Die Anforderungen können je nach Beruf, Unternehmen und Behördenverfahren variieren. Wir begleiten Sie bis zu diesem Niveau.",
        en: "B2 is the standard level we aim for. Requirements can vary by profession, employer and administrative procedures. We support you up to that level.",
      },
    },
    {
      title: {
        fr: "Combien de temps dure une Ausbildung ?",
        de: "Wie lange dauert eine Ausbildung?",
        en: "How long does an Ausbildung last?",
      },
      body: {
        fr: "La durée dépend du métier, généralement de deux à trois ans et demi. Elle peut être raccourcie dans certains cas selon votre parcours.",
        de: "Die Dauer hängt vom Beruf ab, meist zwei bis dreieinhalb Jahre. In bestimmten Fällen kann sie je nach Werdegang verkürzt werden.",
        en: "The length depends on the trade, usually two to three and a half years. It can be shortened in some cases depending on your background.",
      },
    },
    {
      title: {
        fr: "Comment se déroule la formation ?",
        de: "Wie läuft die Ausbildung ab?",
        en: "How does the training unfold?",
      },
      body: {
        fr: "Dans le système dual, vous alternez entre l'entreprise et l'école professionnelle (Berufsschule). Vous apprenez la théorie et la mettez en pratique, jusqu'aux examens et à la qualification.",
        de: "Im dualen System wechseln Sie zwischen Betrieb und Berufsschule. Sie lernen die Theorie und wenden sie an, bis zu den Prüfungen und zum Abschluss.",
        en: "In the dual system, you alternate between the company and the vocational school (Berufsschule). You learn the theory and apply it, through to the exams and qualification.",
      },
    },
    {
      title: {
        fr: "Quels sont les revenus et les coûts ?",
        de: "Wie sind Einkommen und Kosten?",
        en: "What about income and costs?",
      },
      body: {
        fr: "Trois choses à ne pas confondre :",
        de: "Drei Dinge, die man nicht verwechseln sollte:",
        en: "Three things not to confuse:",
      },
    },
    {
      title: {
        fr: "Que se passe-t-il après l'Ausbildung ?",
        de: "Was kommt nach der Ausbildung?",
        en: "What happens after the Ausbildung?",
      },
      body: {
        fr: "Emploi qualifié, évolution vers plus de responsabilités, spécialisation (Weiterbildung, Meister, Techniker) ou poursuite d'études, selon votre profil et les conditions applicables.",
        de: "Qualifizierte Anstellung, Aufstieg zu mehr Verantwortung, Spezialisierung (Weiterbildung, Meister, Techniker) oder ein Studium, je nach Profil und geltenden Bedingungen.",
        en: "Qualified employment, growth into more responsibility, specialisation (Weiterbildung, Meister, Techniker) or further study, depending on your profile and the applicable conditions.",
      },
    },
  ],
  durations: [
    { fr: "2 ans", de: "2 Jahre", en: "2 years" },
    { fr: "3 ans", de: "3 Jahre", en: "3 years" },
    { fr: "3 ans et demi", de: "3,5 Jahre", en: "3.5 years" },
  ],
  durationsNote: {
    fr: "Durées indicatives selon le métier.",
    de: "Richtwerte je nach Beruf.",
    en: "Indicative durations depending on the trade.",
  },
  dualSteps: [
    { fr: "Entreprise", de: "Betrieb", en: "Company" },
    { fr: "Berufsschule", de: "Berufsschule", en: "Berufsschule" },
    { fr: "Pratique", de: "Praxis", en: "Practice" },
    { fr: "Examens", de: "Prüfungen", en: "Exams" },
    { fr: "Qualification", de: "Abschluss", en: "Qualification" },
  ],
  dualDiagram: {
    entreprise: {
      label: { fr: "Entreprise", de: "Betrieb", en: "Company" },
      desc: {
        fr: "La pratique du métier en situation réelle, plusieurs jours par semaine.",
        de: "Die Praxis im Betrieb, mehrere Tage pro Woche.",
        en: "Hands-on practice in the company, several days a week.",
      },
    },
    berufsschule: {
      label: { fr: "Berufsschule", de: "Berufsschule", en: "Berufsschule" },
      desc: {
        fr: "La théorie et les connaissances professionnelles à l'école, un à deux jours par semaine.",
        de: "Theorie und Fachwissen in der Schule, ein bis zwei Tage pro Woche.",
        en: "Theory and professional knowledge at school, one to two days a week.",
      },
    },
    alternance: {
      fr: "Vous alternez entre les deux pendant toute la formation, de deux à trois ans et demi.",
      de: "Sie wechseln während der gesamten Ausbildung zwischen beiden, zwei bis dreieinhalb Jahre.",
      en: "You alternate between the two throughout the training, two to three and a half years.",
    },
    examens: {
      label: { fr: "Examens", de: "Prüfungen", en: "Exams" },
      desc: {
        fr: "Des épreuves théoriques et pratiques valident vos acquis.",
        de: "Theoretische und praktische Prüfungen bestätigen Ihr Können.",
        en: "Theoretical and practical exams validate what you have learned.",
      },
    },
    qualification: {
      label: { fr: "Qualification reconnue", de: "Anerkannter Abschluss", en: "Recognised qualification" },
      desc: {
        fr: "Un diplôme professionnel allemand, reconnu par les employeurs.",
        de: "Ein deutscher Berufsabschluss, von Arbeitgebern anerkannt.",
        en: "A German vocational qualification, recognised by employers.",
      },
    },
  },
  revenues: [
    {
      label: {
        fr: "Rémunération pendant l'Ausbildung",
        de: "Vergütung während der Ausbildung",
        en: "Pay during the Ausbildung",
      },
      text: {
        fr: "Une Ausbildungsvergütung versée par l'entreprise tout au long de la formation.",
        de: "Eine Ausbildungsvergütung, die das Unternehmen während der gesamten Ausbildung zahlt.",
        en: "An Ausbildungsvergütung paid by the company throughout the training.",
      },
    },
    {
      label: {
        fr: "Salaire après la qualification",
        de: "Gehalt nach dem Abschluss",
        en: "Salary after qualification",
      },
      text: {
        fr: "Une fois qualifié, votre rémunération augmente selon le métier, la branche et la région.",
        de: "Nach dem Abschluss steigt Ihr Gehalt je nach Beruf, Branche und Region.",
        en: "Once qualified, your pay rises depending on the trade, the sector and the region.",
      },
    },
    {
      label: {
        fr: "Coûts liés au projet",
        de: "Kosten des Projekts",
        en: "Project costs",
      },
      text: {
        fr: "Préparation, langue, démarches et installation. Nous les clarifions avec vous en amont.",
        de: "Vorbereitung, Sprache, Verfahren und Ankunft. Wir klären sie im Voraus mit Ihnen.",
        en: "Preparation, language, procedures and settling in. We clarify them with you in advance.",
      },
    },
  ],
  afterCta: {
    fr: "Découvrir l'après-Ausbildung",
    de: "Die Zeit nach der Ausbildung entdecken",
    en: "Discover life after the Ausbildung",
  },
  finalTitle: {
    fr: "Vous savez maintenant comment fonctionne une Ausbildung.",
    de: "Jetzt wissen Sie, wie eine Ausbildung funktioniert.",
    en: "You now know how an Ausbildung works.",
  },
  finalText: {
    fr: "La prochaine question : est-ce le bon parcours pour votre profil ?",
    de: "Die nächste Frage: Ist es der richtige Weg für Ihr Profil?",
    en: "The next question: is it the right path for your profile?",
  },
  finalNote: {
    fr: "Gratuit, 5 à 7 minutes.",
    de: "Kostenlos, 5 bis 7 Minuten.",
    en: "Free, 5 to 7 minutes.",
  },
};
