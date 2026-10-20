import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, ArrowDown, Check } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { HeroCarousel } from "@/components/entreprises/hero-carousel";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { ENT_PARTENARIAT as E } from "@/lib/entreprises-partenariat-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/entreprises/partenariat",
    locale,
    title: tr(E.heroTitle, locale),
    description: tr(E.heroIntro1, locale),
  });
}

const btnOutline =
  "press inline-flex min-h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-6 py-3 text-center font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";
const btnOutlineDark =
  "press inline-flex min-h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-6 py-3 text-center font-bold text-brand-gold-light transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";
const justify = "text-justify-hyphen";

export default async function EntreprisesPartenariatPage() {
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
          { name: L(E.heroTitle), pathname: "/entreprises/partenariat" },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:pt-20 lg:pb-24">
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {L(E.heroKicker)}
          </p>
          <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black leading-tight">
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
              <p className="animate-fade-up mt-6 font-serif text-xl text-brand-black" style={{ animationDelay: "150ms" }}>
                {L(E.heroBold)}
              </p>
              <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "180ms" }}>
                <Link href="/entreprises/demande-recrutement" className={btnOutline}>
                  {L(E.heroCtaPrimary)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="#zusammenarbeit" className={btnOutline}>
                  {L(E.heroCtaSecondary)}
                  <ArrowDown size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

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

          <div className="animate-fade-up mt-10 flex flex-wrap gap-3 lg:flex-nowrap" style={{ animationDelay: "210ms" }}>
            {E.heroReperes.map((r) => (
              <span key={L(r)} className="whitespace-nowrap rounded-full bg-brand-gold/12 px-4 py-2 text-sm font-semibold text-brand-black">
                {L(r)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — PARTENARIAT */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.partnerKicker)}</p>
          <h2 className="mt-3 max-w-4xl font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(E.partnerTitle)}</h2>
          <div className="mt-6 max-w-4xl space-y-4">
            {E.partnerBody.map((p, i) => (
              <p key={i} className={`text-brand-ink-secondary leading-relaxed ${justify}`}>{L(p)}</p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — DEUX VOIES */}
      <section id="zusammenarbeit" className="scroll-mt-24 bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.solKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(E.solTitle)}</h2>
            <p className="mt-4 text-lg text-brand-ink-secondary leading-relaxed">{L(E.solLead)}</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Fachkräfte — claire */}
            <div className="group relative animate-fade-up flex flex-col rounded-2xl bg-brand-white p-8 shadow-[0_8px_30px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(17,17,17,0.12)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-10">
              <span className="self-start rounded-full bg-brand-gold px-4 py-1.5 font-serif text-sm font-bold text-brand-black">Fachkräfte</span>
              <h3 className="mt-5 font-serif text-2xl text-brand-black leading-snug">{L(E.fachTitle)}</h3>
              <p className="mt-4 font-medium text-brand-black">{L(E.fachQuestion)}</p>
              <p className={`mt-3 text-brand-ink-secondary leading-relaxed ${justify}`}>{L(E.fachBody1)}</p>
              <p className={`mt-3 text-brand-ink-secondary leading-relaxed ${justify}`}>{L(E.fachBody2)}</p>
              <p className={`mt-4 text-brand-ink-secondary leading-relaxed ${justify}`}>
                <strong className="font-semibold text-brand-black">{L(E.zielLabel)}</strong> {L(E.fachZiel)}
              </p>
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
              <p className={`mt-3 text-brand-white/80 leading-relaxed ${justify}`}>{L(E.ausBody1)}</p>
              <p className={`mt-3 text-brand-white/80 leading-relaxed ${justify}`}>{L(E.ausBody2)}</p>
              <p className={`mt-4 text-brand-white/80 leading-relaxed ${justify}`}>
                <strong className="font-semibold text-brand-gold-light">{L(E.zielLabel)}</strong> {L(E.ausZiel)}
              </p>
              <div className="mt-8 pt-2">
                <Link
                  href="/entreprises/ausbildung"
                  className="press inline-flex min-h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-6 py-3 text-center font-bold text-brand-gold-light transition-colors duration-200 after:absolute after:inset-0 after:content-[''] hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black group-hover:bg-brand-gold group-hover:text-brand-black"
                >
                  {L(E.ausCta)}
                  <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESSUS */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.procKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(E.procTitle)}</h2>
            <p className={`mt-4 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(E.procIntro)}</p>
          </div>

          <ol className="mt-12 space-y-10">
            {E.procSteps.map((step) => (
              <li key={step.num} className="animate-fade-up grid gap-5 border-t border-brand-grid pt-8 sm:grid-cols-[auto_1fr] sm:gap-8">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 font-serif text-xl font-bold text-brand-gold-text">
                  {step.num}
                </span>
                <div className="max-w-3xl">
                  <h3 className="font-serif text-xl text-brand-black leading-snug">{L(step.title)}</h3>
                  <div className="mt-3 space-y-3">
                    {step.body.map((b, j) => (
                      <p key={j} className={`text-brand-ink-secondary leading-relaxed ${justify}`}>{L(b)}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 5 — ATTENTES MUTUELLES */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.expectKicker)}</p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Ce que nous attendons */}
            <div className="rounded-2xl bg-brand-white p-8 shadow-[0_8px_30px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 sm:p-10">
              <h2 className="font-serif text-2xl text-brand-black leading-snug">{L(E.weTitle)}</h2>
              <p className={`mt-3 text-brand-ink-secondary leading-relaxed ${justify}`}>{L(E.weIntro)}</p>
              <ul className="mt-6 divide-y divide-brand-grid">
                {E.weItems.map((it, i) => (
                  <li key={i} className="py-4 first:pt-0 last:pb-0">
                    <h3 className="font-semibold text-brand-black">{L(it.title)}</h3>
                    <p className={`mt-1.5 text-sm text-brand-ink-secondary leading-relaxed ${justify}`}>{L(it.body)}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ce que vous pouvez attendre */}
            <div className="rounded-2xl bg-brand-white p-8 shadow-[0_8px_30px_rgba(17,17,17,0.05)] ring-1 ring-brand-gold/25 sm:p-10">
              <h2 className="font-serif text-2xl text-brand-black leading-snug">{L(E.giveTitle)}</h2>
              <p className={`mt-3 text-brand-ink-secondary leading-relaxed ${justify}`}>{L(E.giveIntro)}</p>
              <ul className="mt-6 divide-y divide-brand-grid">
                {E.giveItems.map((it, i) => (
                  <li key={i} className="py-4 first:pt-0 last:pb-0">
                    <h3 className="font-semibold text-brand-black">{L(it.title)}</h3>
                    <p className={`mt-1.5 text-sm text-brand-ink-secondary leading-relaxed ${justify}`}>{L(it.body)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CADRE & TRANSPARENCE */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(E.frameKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(E.frameTitle)}</h2>
            <p className={`mt-4 text-lg text-brand-ink-secondary leading-relaxed ${justify}`}>{L(E.frameIntro1)}</p>
            <p className="mt-4 font-medium text-brand-black">{L(E.frameIntro2)}</p>
            <ul className="mt-5 space-y-3">
              {E.frameChecklist.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold-text" />
                  <span className="text-brand-ink-secondary leading-relaxed">{L(c)}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-6 text-brand-ink-secondary leading-relaxed ${justify}`}>{L(E.frameAfter)}</p>
          </div>

          <div className="mt-12 max-w-4xl rounded-2xl bg-brand-card p-8 ring-1 ring-brand-black/5 sm:p-10">
            <h3 className="font-serif text-xl text-brand-black leading-snug">{L(E.transTitle)}</h3>
            <div className="mt-4 space-y-3">
              {E.transBody.map((p, i) => (
                <p key={i} className={`text-brand-ink-secondary leading-relaxed ${justify}`}>{L(p)}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA FINAL */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-light">{L(E.finalKicker)}</p>
          <h2 className="max-w-3xl font-serif text-2xl sm:text-3xl lg:text-4xl leading-snug">{L(E.finalTitle)}</h2>
          <div className="max-w-2xl space-y-3">
            {E.finalBody.map((p, i) => (
              <p key={i} className="text-lg text-brand-white/80 leading-relaxed">{L(p)}</p>
            ))}
          </div>
          <p className="mt-2 font-serif text-xl text-brand-gold-light">{L(E.finalBold)}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/entreprises/demande-recrutement" className={btnOutlineDark}>
              {L(E.finalCtaPrimary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contact" className={btnOutlineDark}>
              {L(E.finalCtaSecondary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
