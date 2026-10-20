import type { LocalizedText } from "./localized";

// Relationship-focused partner page.
// Page /entreprises/partenariat (DE: /unternehmen/partnerschaft):
// "Partnerunternehmen werden". Relationship-focused partnership page: hero +
// shared vision, partnership of equals (three principles), what sets a KF
// partnership apart, final invitation to talk. Warm, hedged wording; no public
// pricing, no fabricated figures or guarantees.
type LT = LocalizedText;

export const ENT_PARTENARIAT: {
  heroKicker: LT;
  heroTitle: LT;
  heroTagline: LT;
  heroIntro: LT[];
  heroCta: LT;

  augenKicker: LT;
  augenTitle: LT;
  augenBody: LT[];
  principlesLead: LT;
  principles: { title: LT; body: LT }[];

  distinctKicker: LT;
  distinctTitle: LT;
  distinctBody: LT[];
  distinctBold: LT;
  distinctAfter: LT;

  finalKicker: LT;
  finalTitle: LT;
  finalBody: LT[];
  finalLead: LT;
  finalBold: LT;
  finalCta: LT;
} = {
  // ── HERO ──────────────────────────────────────────────────────────────
  heroKicker: {
    fr: "Partenariat avec Karriere Fähre",
    de: "Partnerschaft mit Karriere Fähre",
    en: "Partnership with Karriere Fähre",
  },
  heroTitle: {
    fr: "Devenir entreprise partenaire",
    de: "Partnerunternehmen werden",
    en: "Become a partner company",
  },
  heroTagline: {
    fr: "Accomplir plus, ensemble.",
    de: "Gemeinsam mehr erreichen.",
    en: "Achieve more, together.",
  },
  heroIntro: [
    {
      fr: "Un partenariat réussi commence par une vision commune de ce que l'on souhaite accomplir sur le long terme.",
      de: "Eine erfolgreiche Partnerschaft beginnt mit einer gemeinsamen Vorstellung davon, was man langfristig erreichen möchte.",
      en: "A successful partnership begins with a shared vision of what you want to achieve in the long term.",
    },
    {
      fr: "Karriere Fähre souhaite collaborer avec des entreprises allemandes qui façonnent activement la coopération internationale, ouvrent de nouvelles perspectives et misent sur des relations fiables.",
      de: "Karriere Fähre möchte mit deutschen Unternehmen zusammenarbeiten, die internationale Zusammenarbeit aktiv gestalten, neue Perspektiven eröffnen und auf verlässliche Beziehungen setzen.",
      en: "Karriere Fähre wants to work with German companies that actively shape international cooperation, open up new perspectives and rely on dependable relationships.",
    },
    {
      fr: "Nous croyons aux partenariats fondés sur la confiance mutuelle, une communication claire et des objectifs communs, et qui évoluent avec les besoins de chacun.",
      de: "Wir glauben an Partnerschaften, die auf gegenseitigem Vertrauen, klarer Kommunikation und gemeinsamen Zielen beruhen, und die sich mit den Bedürfnissen aller Beteiligten weiterentwickeln.",
      en: "We believe in partnerships built on mutual trust, clear communication and shared goals, and that evolve with the needs of everyone involved.",
    },
  ],
  heroCta: { fr: "Demander un partenariat", de: "Partnerschaft anfragen", en: "Request a partnership" },

  // ── PARTENARIAT D'ÉGAL À ÉGAL ─────────────────────────────────────────
  augenKicker: { fr: "Collaboration", de: "Zusammenarbeit", en: "Working together" },
  augenTitle: {
    fr: "Un partenariat d'égal à égal",
    de: "Eine Partnerschaft auf Augenhöhe",
    en: "A partnership of equals",
  },
  augenBody: [
    {
      fr: "Être partenaires signifie pour nous bien plus que se contacter en cas de besoin. Cela veut dire bâtir une collaboration dans laquelle chaque partie apporte son expérience, ses attentes et ses possibilités.",
      de: "Partner zu sein bedeutet für uns mehr, als bei Bedarf miteinander in Kontakt zu treten. Es bedeutet, eine Zusammenarbeit aufzubauen, in der beide Seiten ihre Erfahrungen, Erwartungen und Möglichkeiten einbringen.",
      en: "Being partners means, to us, more than getting in touch when needed. It means building a collaboration in which both sides bring their experience, expectations and possibilities.",
    },
    {
      fr: "Nous voulons apprendre à connaître nos entreprises partenaires, comprendre leurs perspectives et créer une base sur laquelle des projets communs peuvent se développer durablement.",
      de: "Wir möchten unsere Partnerunternehmen kennenlernen, ihre Perspektiven verstehen und eine Grundlage schaffen, auf der sich gemeinsame Vorhaben langfristig entwickeln können.",
      en: "We want to get to know our partner companies, understand their perspectives and create a foundation on which joint projects can develop over the long term.",
    },
  ],
  principlesLead: {
    fr: "Trois principes sont au cœur de cette démarche :",
    de: "Dabei stehen drei Prinzipien im Mittelpunkt:",
    en: "Three principles are at the heart of this:",
  },
  principles: [
    {
      title: { fr: "Confiance et fiabilité", de: "Vertrauen und Verlässlichkeit", en: "Trust and reliability" },
      body: {
        fr: "Nous accordons de l'importance à une communication ouverte, à des accords clairs et à un respect mutuel. Ce qui est convenu doit être clair et compréhensible pour les deux parties.",
        de: "Wir legen Wert auf offene Kommunikation, nachvollziehbare Absprachen und einen respektvollen Umgang. Was vereinbart wird, soll für beide Seiten klar und verständlich sein.",
        en: "We value open communication, clear agreements and respectful interaction. What is agreed should be clear and understandable for both sides.",
      },
    },
    {
      title: { fr: "Des objectifs communs", de: "Gemeinsame Ziele", en: "Shared goals" },
      body: {
        fr: "Un bon partenariat naît lorsque les attentes sont alignées tôt et que chaque partie sait quelle contribution elle peut apporter. Nous voulons définir des objectifs communs et orienter la collaboration en conséquence.",
        de: "Eine gute Partnerschaft entsteht, wenn Erwartungen frühzeitig abgestimmt werden und beide Seiten wissen, welchen Beitrag sie leisten können. Wir möchten gemeinsame Ziele definieren und die Zusammenarbeit daran ausrichten.",
        en: "A good partnership emerges when expectations are aligned early and both sides know what they can contribute. We want to define shared goals and guide the collaboration accordingly.",
      },
    },
    {
      title: { fr: "Une vision à long terme", de: "Langfristiges Denken", en: "Long-term thinking" },
      body: {
        fr: "Nous misons sur des relations qui peuvent aller au-delà de projets isolés. Une collaboration continue permet d'échanger des expériences, de faire évoluer les processus et d'ouvrir ensemble de nouvelles possibilités.",
        de: "Wir setzen auf Beziehungen, die über einzelne Projekte hinausgehen können. Eine kontinuierliche Zusammenarbeit ermöglicht es, Erfahrungen auszutauschen, Abläufe weiterzuentwickeln und neue Möglichkeiten gemeinsam zu erschließen.",
        en: "We rely on relationships that can go beyond individual projects. Continuous collaboration makes it possible to share experience, refine processes and open up new possibilities together.",
      },
    },
  ],

  // ── CE QUI DISTINGUE ──────────────────────────────────────────────────
  distinctKicker: { fr: "Ce qui vous attend", de: "Was Sie erwartet", en: "What to expect" },
  distinctTitle: {
    fr: "Ce qui distingue un partenariat avec Karriere Fähre",
    de: "Was eine Partnerschaft mit Karriere Fähre auszeichnet",
    en: "What sets a partnership with Karriere Fähre apart",
  },
  distinctBody: [
    {
      fr: "Nous souhaitons bâtir un réseau d'entreprises qui participent à la création de perspectives professionnelles internationales et s'intéressent à une collaboration structurée.",
      de: "Wir möchten ein Netzwerk von Unternehmen aufbauen, die internationale berufliche Perspektiven mitgestalten und an einer strukturierten Zusammenarbeit interessiert sind.",
      en: "We want to build a network of companies that help shape international career perspectives and are interested in a structured collaboration.",
    },
    {
      fr: "En tant qu'entreprise partenaire, vous bénéficiez d'un échange direct avec nous, d'un interlocuteur dédié et d'une collaboration guidée par les objectifs définis ensemble.",
      de: "Als Partnerunternehmen profitieren Sie von einem direkten Austausch mit uns, einer persönlichen Ansprechperson und einer Zusammenarbeit, die sich an den gemeinsam vereinbarten Zielen orientiert.",
      en: "As a partner company, you benefit from direct exchange with us, a personal contact and a collaboration guided by the goals defined together.",
    },
    {
      fr: "Nous prenons le temps de comprendre vos attentes, d'explorer les possibilités et de discuter en toute transparence du cadre d'une collaboration.",
      de: "Wir nehmen uns Zeit, Ihre Erwartungen zu verstehen, Möglichkeiten auszuloten und die Rahmenbedingungen einer Zusammenarbeit transparent zu besprechen.",
      en: "We take the time to understand your expectations, explore possibilities and discuss the framework of a collaboration transparently.",
    },
  ],
  distinctBold: {
    fr: "Chaque partenariat commence par un échange.",
    de: "Jede Partnerschaft beginnt mit einem Gespräch.",
    en: "Every partnership begins with a conversation.",
  },
  distinctAfter: {
    fr: "À partir de là, nous développons ensemble les prochaines étapes, adaptées à votre entreprise et à vos attentes.",
    de: "Daraus entwickeln wir gemeinsam die nächsten Schritte, passend zu Ihrem Unternehmen und Ihren Vorstellungen.",
    en: "From there, we develop the next steps together, tailored to your company and your vision.",
  },

  // ── CTA FINAL ─────────────────────────────────────────────────────────
  finalKicker: { fr: "Parlons-en", de: "Sprechen wir darüber", en: "Let's talk" },
  finalTitle: {
    fr: "Un partenariat correspond-il à votre entreprise ?",
    de: "Passt eine Partnerschaft zu Ihrem Unternehmen?",
    en: "Is a partnership right for your company?",
  },
  finalBody: [
    {
      fr: "Vous souhaitez vous connecter avec Karriere Fähre, développer des perspectives communes ou en savoir plus sur une collaboration possible ?",
      de: "Sie möchten sich mit Karriere Fähre vernetzen, gemeinsame Perspektiven entwickeln oder mehr über eine mögliche Zusammenarbeit erfahren?",
      en: "Would you like to connect with Karriere Fähre, develop shared perspectives or learn more about a possible collaboration?",
    },
    {
      fr: "Alors nous serons ravis de faire votre connaissance et celle de votre entreprise.",
      de: "Dann freuen wir uns darauf, Sie und Ihr Unternehmen kennenzulernen.",
      en: "Then we look forward to getting to know you and your company.",
    },
  ],
  finalLead: {
    fr: "Découvrons ensemble les possibilités qui peuvent s'ouvrir.",
    de: "Lassen Sie uns herausfinden, welche gemeinsamen Möglichkeiten sich eröffnen.",
    en: "Let's find out which shared opportunities can open up.",
  },
  finalBold: {
    fr: "Nous nous réjouissons d'échanger avec vous.",
    de: "Wir freuen uns auf den Austausch mit Ihnen.",
    en: "We look forward to the conversation with you.",
  },
  finalCta: { fr: "Demander un partenariat", de: "Partnerschaft anfragen", en: "Request a partnership" },
};
