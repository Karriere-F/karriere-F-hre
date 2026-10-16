import { Link } from "@i18n/navigation";
import { ArrowRight } from "lucide-react";
import { tr } from "@/lib/localized";
import type { Locale } from "@i18n/routing";

const goldBtn =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";

// Appel à l'action vers les cours d'allemand, à placer en fin de page.
export function CoursAllemandCta({ locale }: { locale: Locale }) {
  return (
    <section className="bg-brand-card">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
          {tr(
            { fr: "L'allemand, la clé de votre projet", de: "Deutsch, der Schlüssel zu Ihrem Projekt", en: "German, the key to your project" },
            locale,
          )}
        </p>
        <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">
          {tr(
            {
              fr: "Un bon niveau d'allemand ouvre les portes de votre carrière.",
              de: "Gute Deutschkenntnisse öffnen die Türen zu Ihrer Karriere.",
              en: "A good level of German opens the doors to your career.",
            },
            locale,
          )}
        </h2>
        <p className="mt-5 text-lg text-brand-ink-secondary leading-relaxed">
          {tr(
            {
              fr: "Que vous visiez une Ausbildung, un emploi qualifié ou la Chancenkarte, la langue est déterminante. Découvrez nos parcours d'allemand adaptés à votre objectif, du niveau débutant jusqu'au niveau professionnel.",
              de: "Ob Ausbildung, qualifizierte Beschäftigung oder Chancenkarte, die Sprache ist entscheidend. Entdecken Sie unsere Deutschkurse, die auf Ihr Ziel abgestimmt sind, vom Anfänger- bis zum Berufsniveau.",
              en: "Whether you aim for an Ausbildung, skilled employment or the Chancenkarte, language is decisive. Discover our German courses tailored to your goal, from beginner to professional level.",
            },
            locale,
          )}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/cours-allemand" className={goldBtn}>
            {tr({ fr: "Découvrir nos cours d'allemand", de: "Unsere Deutschkurse entdecken", en: "Discover our German courses" }, locale)}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link href="/cours-allemand/test-niveau" className={goldBtn}>
            {tr({ fr: "Tester mon niveau", de: "Mein Niveau testen", en: "Test my level" }, locale)}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
