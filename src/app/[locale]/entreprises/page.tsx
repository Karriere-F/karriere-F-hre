import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { MethodSteps } from "@/components/entreprises/method-steps";
import { FlipCards } from "@/components/entreprises/flip-cards";
import { HeroCarousel } from "@/components/entreprises/hero-carousel";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { ENT_MAIN as E } from "@/lib/entreprises-main-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/entreprises",
    locale,
    title: tr(E.heroTitle, locale),
    description: tr(E.heroIntro1, locale),
  });
}

const btnOutline =
  "press inline-flex min-h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-6 py-3 text-center font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";
const justify = "text-justify-hyphen";

export default async function EntreprisesPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("entreprises"), pathname: "/entreprises" },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:pt-20 lg:pb-24">
          {/* Titre pleine largeur, au-dessus de la photo */}
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {L(E.heroKicker)}
          </p>
          <h1 className="animate-fade-up font-serif text-3xl lg:text-[2.1rem] xl:text-[2.6rem] text-brand-black leading-tight lg:whitespace-nowrap">
            {L(E.heroTitle)}
          </h1>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
            <div>
              <p className={`animate-fade-up text-lg text-brand-ink-secondary leading-relaxed ${justify}`} style={{ animationDelay: "80ms" }}>
                {L(E.heroIntro1)}
              </p>
              <p className={`animate-fade-up mt-3 text-brand-ink-secondary leading-relaxed ${justify}`} style={{ animationDelay: "120ms" }}>
                {L(E.heroIntro2)}
              </p>
              <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "160ms" }}>
                <Link href="/entreprises/demande-recrutement" className={btnOutline}>
                  {L(E.heroCtaPrimary)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="#solutions" className={btnOutline}>
                  {L(E.heroCtaSecondary)}
                  <ArrowDown size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Photo agrandie, fondue dans le décor */}
            <div className="animate-fade-up relative lg:-mt-10 lg:-mr-12 xl:-mr-24" style={{ animationDelay: "120ms" }}>
              <HeroCarousel
                slides={[
                  { src: "/images/ent-hero-1.webp", alt: L({ fr: "Électricien industriel contrôlant une armoire électrique", de: "Industrieelektriker prüft einen Schaltschrank", en: "Industrial electrician checking an electrical cabinet" }) },
                  { src: "/images/ent-hero-2.webp", alt: L({ fr: "Soignante accompagnant une personne âgée en maison de retraite", de: "Pflegekraft begleitet eine ältere Person im Pflegeheim", en: "Caregiver assisting an elderly resident in a care home" }) },
                  { src: "/images/ent-hero-3.webp", alt: L({ fr: "Cheffe de cuisine dressant une assiette au restaurant", de: "Köchin richtet einen Teller im Restaurant an", en: "Chef plating a dish in a restaurant" }) },
                  { src: "/images/ent-hero-4.webp", alt: L({ fr: "Responsable logistique sur un quai de chargement", de: "Logistikmitarbeiter an der Laderampe", en: "Logistics worker at a loading dock" }) },
                  { src: "/images/ent-hero-5.webp", alt: L({ fr: "Maçon travaillant sur un chantier de construction", de: "Maurer auf einer Baustelle", en: "Mason working on a construction site" }) },
                  { src: "/images/ent-hero-6.webp", alt: L({ fr: "Mécanicien réparant le moteur d'un camion", de: "Mechaniker repariert einen Lkw-Motor", en: "Mechanic repairing a truck engine" }) },
                ]}
              />
            </div>
          </div>

          <div className="animate-fade-up mt-10 flex flex-wrap gap-3 lg:flex-nowrap" style={{ animationDelay: "200ms" }}>
            {E.heroReperes.map((r) => (
              <span key={L(r)} className="whitespace-nowrap rounded-full bg-brand-gold/12 px-4 py-2 text-sm font-semibold text-brand-black">
                {L(r)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — DEUX SOLUTIONS */}
      <section id="solutions" className="scroll-mt-24 bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.solKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug lg:whitespace-nowrap">{L(E.solTitle)}</h2>
            <p className="mt-4 text-lg text-brand-ink-secondary leading-relaxed">{L(E.solLead)}</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Fachkräfte — claire */}
            <div className="group relative animate-fade-up flex flex-col rounded-2xl bg-brand-card p-8 shadow-[0_8px_30px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(17,17,17,0.12)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-10">
              <span className="self-start rounded-full bg-brand-gold px-4 py-1.5 font-serif text-sm font-bold text-brand-black">Fachkräfte</span>
              <h3 className="mt-5 font-serif text-2xl text-brand-black leading-snug">{L(E.fachTitle)}</h3>
              <p className="mt-4 font-medium text-brand-black">{L(E.fachQuestion)}</p>
              <p className={`mt-3 text-brand-ink-secondary leading-relaxed ${justify}`}>{L(E.fachBody)}</p>
              <div className="mt-8 pt-2">
                <Link
                  href="/entreprises/fachkraefte"
                  className={`${btnOutline} after:absolute after:inset-0 after:content-[''] group-hover:bg-brand-gold group-hover:text-brand-black`}
                >
                  {L(E.fachCta)}
                  <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Ausbildung — noir + or */}
            <div className="group relative animate-fade-up flex flex-col rounded-2xl bg-brand-black p-8 text-brand-white shadow-[0_8px_30px_rgba(17,17,17,0.12)] ring-1 ring-brand-gold/20 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(17,17,17,0.28)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-10" style={{ animationDelay: "80ms" }}>
              <span className="self-start rounded-full border border-brand-gold px-4 py-1.5 font-serif text-sm font-bold text-brand-gold-light">Ausbildung</span>
              <h3 className="mt-5 font-serif text-2xl leading-snug">{L(E.ausTitle)}</h3>
              <p className="mt-4 font-medium text-brand-white">{L(E.ausQuestion)}</p>
              <p className={`mt-3 text-brand-white/80 leading-relaxed ${justify}`}>{L(E.ausBody)}</p>
              <div className="mt-8 pt-2">
                <Link
                  href="/entreprises/ausbildung"
                  className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-light transition-colors duration-200 after:absolute after:inset-0 after:content-[''] hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black group-hover:bg-brand-gold group-hover:text-brand-black"
                >
                  {L(E.ausCta)}
                  <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — NOTRE DIFFÉRENCE */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.whyKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug lg:whitespace-nowrap">{L(E.whyTitle)}</h2>
          </div>
          <p className={`mt-4 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(E.whyIntro)}</p>

          <MethodSteps steps={E.whyPoints.map((p) => ({ title: L(p.title), body: L(p.body) }))} />
          <div className="mt-10">
            <Link href="/entreprises/methode" className={btnOutline}>
              {L(E.whyCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MÉTHODE EN UN COUP D'ŒIL */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.methodKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug lg:whitespace-nowrap">{L(E.methodTitle)}</h2>
          </div>

          <FlipCards
            steps={E.methodSteps.map((step) => ({ label: L(step.label), body: L(step.body) }))}
            hint={L({ fr: "Voir le détail", de: "Details ansehen", en: "See detail" })}
          />
          <div className="mt-10">
            <Link href="/entreprises/methode" className={btnOutline}>
              {L(E.methodCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SECTEURS */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.secKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(E.secTitle)}</h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {E.sectors.map((s) => (
              <span key={L(s)} className="rounded-full border border-brand-grid bg-brand-white px-5 py-2.5 text-sm font-medium text-brand-black shadow-[0_6px_24px_rgba(17,17,17,0.04)]">
                {L(s)}
              </span>
            ))}
          </div>
          <p className={`mt-8 text-brand-ink-secondary leading-relaxed ${justify}`}>{L(E.secNote)}</p>
          <div className="mt-8">
            <Link href="/entreprises/secteurs" className={btnOutline}>
              {L(E.secCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — UN CADRE CLAIR */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.frameKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-[2.1rem] xl:text-[2.5rem] text-brand-black leading-snug lg:whitespace-nowrap">{L(E.frameTitle)}</h2>
          </div>
          <div className="mt-4 space-y-3">
            <p className={`text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(E.frameText1)}</p>
            <p className={`text-brand-ink-secondary leading-relaxed ${justify}`}>{L(E.frameText2)}</p>
          </div>
          <div className="mt-8">
            <Link href="/entreprises/fachkraefte" className={btnOutline}>
              {L(E.frameCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA FINAL */}
      <section className="bg-brand-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.finalKicker)}</p>
          <h2 className="max-w-2xl font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(E.finalTitle)}</h2>
          <p className="max-w-2xl text-lg text-brand-ink-secondary leading-relaxed">{L(E.finalText)}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/entreprises/demande-recrutement" className={btnOutline}>
              {L(E.finalCtaPrimary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contact" className={btnOutline}>
              {L(E.finalCtaSecondary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
