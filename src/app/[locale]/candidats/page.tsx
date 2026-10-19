import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "@i18n/navigation";
import { ProcessJourney } from "@/components/entreprises/process-journey";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { CANDIDATS as C } from "@/lib/candidats-content";
import type { Locale } from "@i18n/routing";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/candidats",
    locale,
    title: tr(C.heroTitle, locale),
    description: tr(C.heroIntro, locale),
  });
}

const btnOutline =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";
const justify = "text-justify [hyphens:none]";

// Une icône par étape de l'accompagnement (dans l'ordre de accSteps)
const ACC_ICON_NAMES = ["clipboard", "route", "book", "message", "file", "plane"];
const ETAPE = { fr: "Étape", de: "Schritt", en: "Step" };

export default async function CandidatsPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const L = (t: { fr: string; de: string; en: string }) => tr(t, locale);

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("candidats"), pathname: "/candidats" },
        ]}
      />

      {/* SECTION 01 — HERO (même mise en page que Chancenkarte) */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:pt-16 lg:pb-4">
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {L(C.heroKicker)}
          </p>
          <h1 className="animate-fade-up max-w-4xl font-serif text-3xl lg:text-[2.1rem] xl:text-[2.6rem] text-brand-black leading-tight">
            {L(C.heroTitle)}
          </h1>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
            <div>
              <p className={`animate-fade-up text-lg text-brand-ink-secondary leading-relaxed ${justify} lg:mt-6`} style={{ animationDelay: "80ms" }}>
                {L(C.heroIntro)}
              </p>
              <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "160ms" }}>
                <Link href="/evaluation" className={`${btnOutline} w-full sm:flex-1`}>
                  {L(C.heroCtaPrimary)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="#parcours" className={`${btnOutline} w-full sm:flex-1`}>
                  {L(C.heroCtaSecondary)}
                  <ArrowDown size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="animate-fade-up relative lg:-mr-16 xl:-mr-28" style={{ animationDelay: "120ms" }}>
              <Image
                src="/images/candidats-soins-technique.webp"
                alt="Une soignante et un technicien, profils de candidats accompagnés vers l'Allemagne"
                width={1600}
                height={900}
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-auto w-full rounded-2xl"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-brand-card to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-brand-card to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — TROIS PARCOURS */}
      <section id="parcours" className="scroll-mt-24 bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(C.parKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(C.parTitle)}</h2>
            <p className="mt-4 text-lg text-brand-ink-secondary leading-relaxed">
              {L(C.parLead1)}
              <br />
              {L(C.parLead2)}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {C.parcours.map((p, i) => (
              <div
                key={L(p.tag)}
                className="group relative flex animate-fade-up flex-col rounded-2xl bg-brand-card p-8 shadow-[0_8px_30px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(17,17,17,0.12)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="self-start rounded-full bg-brand-gold px-4 py-1.5 font-serif text-sm font-bold text-brand-black">
                  {L(p.tag)}
                </span>
                <div className="flex flex-1 flex-col justify-center py-6">
                  <h3 className="font-serif text-2xl font-bold text-brand-black leading-snug">
                    {p.titleL1 ? (
                      <>
                        {L(p.titleL1)}
                        <br />
                        {L(p.titleL2!)}
                      </>
                    ) : (
                      L(p.title)
                    )}
                  </h3>
                  <p className="mt-4 text-lg font-medium text-brand-black leading-snug">{L(p.question)}</p>
                  <p className="mt-3 text-sm text-brand-ink-secondary leading-relaxed">{L(p.body1)}</p>
                  <p className="mt-3 text-sm text-brand-ink-secondary leading-relaxed">{L(p.body2)}</p>
                </div>
                <div className="pt-2">
                  <Link
                    href={p.href as "/ausbildung-allemagne"}
                    className={`${btnOutline} after:absolute after:inset-0 after:content-[''] group-hover:bg-brand-gold group-hover:text-brand-black`}
                  >
                    {L(p.cta)}
                    <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — ACCOMPAGNEMENT */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(C.accKicker)}</p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(C.accTitle)}</h2>
          </div>
          <ProcessJourney
            surface="bg-brand-card"
            steps={C.accSteps.map((s, i) => ({
              etape: L(ETAPE),
              title: L(s.title),
              body: L(s.body),
              icon: ACC_ICON_NAMES[i] ?? "clipboard",
            }))}
          />
        </div>
      </section>

      {/* SECTION 04 — ÉVALUATION */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(C.evalKicker)}</p>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(C.evalTitle)}</h2>
              <p className="mt-5 text-lg text-brand-ink-secondary leading-relaxed">{L(C.evalText1)}</p>
              <div className="mt-8">
                <Link href="/evaluation" className={btnOutline}>
                  {L(C.evalCta)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-6 text-sm italic text-brand-ink-muted leading-relaxed">{L(C.evalDisclaimer)}</p>
            </div>

            {/* Photo fondue dans le décor */}
            <div className="relative lg:-mr-12 xl:-mr-20">
              <Image
                src="/images/candidats-evaluation.webp"
                alt="Un candidat réfléchit à son orientation professionnelle en Allemagne"
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="h-auto w-full rounded-2xl"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-brand-white to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-brand-white to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-brand-white to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-brand-white to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — CTA FINAL */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(C.finalKicker)}</p>
          <h2 className="mt-4 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{L(C.finalTitle)}</h2>
          <p className="mt-5 text-lg text-brand-ink-secondary leading-relaxed">{L(C.finalText)}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/cours-allemand" className={btnOutline}>
              {L(C.finalCtaPrimary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/cours-allemand/test-niveau" className={btnOutline}>
              {L(C.finalCtaSecondary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
