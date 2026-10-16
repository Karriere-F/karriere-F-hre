import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { CONDITIONS_PAGE as C } from "@/lib/conditions-content";
import { Reveal, DualSystemDiagram } from "@/components/ausbildung/conditions-motion";
import type { Locale } from "@i18n/routing";

const GOLD_BTN =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/ausbildung-allemagne/conditions",
    locale,
    title: tr(C.heroTitle, locale),
    description: tr(C.heroSubtitle, locale),
  });
}

export default async function AusbildungConditionsPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const alt =
    "Un candidat prépare son dossier d'Ausbildung, mur « Bildung. Zukunft. Perspektiven. »";

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("ausbildung"), pathname: "/ausbildung-allemagne" },
          { name: tNav("ausConditions"), pathname: "/ausbildung-allemagne/conditions" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-card">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Image src="/images/condition-ausbildung.jpg" alt={alt} fill priority sizes="52vw" className="object-cover" style={{ objectPosition: "center 40%" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-card via-brand-card/15 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-card to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-card to-transparent" />
        </div>

        <div className="relative -mb-2 aspect-[16/11] w-full lg:hidden">
          <Image src="/images/condition-ausbildung.jpg" alt={alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: "center 40%" }} />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-card to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl py-12 lg:flex lg:min-h-[480px] lg:flex-col lg:justify-start lg:pt-14 lg:pb-20">
            <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-brand-black text-balance leading-tight">
              {tr(C.heroTitle, locale)}
            </h1>
            <p className="animate-fade-up mt-5 max-w-lg text-brand-ink-secondary leading-relaxed" style={{ animationDelay: "80ms" }}>
              {tr(C.heroSubtitle, locale)}
            </p>
            <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "140ms" }}>
              <Link href="/ausbildung-allemagne/evaluation" className={GOLD_BTN}>
                {tr(C.ctaEvaluer, locale)}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/secteurs" className={GOLD_BTN}>
                {tr(C.ctaMetiers, locale)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 questions, uniform spacing; 04 highlighted as a tinted panel */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="space-y-12">
            {[
              {
                num: "01",
                title: tr(C.blocks[0].title, locale),
                content: <p className="text-brand-ink-secondary leading-relaxed">{tr(C.blocks[0].body, locale)}</p>,
              },
              {
                num: "02",
                title: tr(C.blocks[1].title, locale),
                content: <p className="text-brand-ink-secondary leading-relaxed">{tr(C.blocks[1].body, locale)}</p>,
              },
              {
                num: "03",
                title: tr(C.blocks[2].title, locale),
                content: (
                  <div>
                    <p className="text-brand-ink-secondary leading-relaxed">{tr(C.blocks[2].body, locale)}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {C.durations.map((d) => (
                        <span
                          key={tr(d, locale)}
                          className="rounded-full border border-brand-gold/40 bg-brand-gold/[0.06] px-4 py-1.5 text-sm font-semibold text-brand-gold-text"
                        >
                          {tr(d, locale)}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-brand-ink-muted">{tr(C.durationsNote, locale)}</p>
                  </div>
                ),
              },
            ].map((it, i) => (
              <Reveal key={`a${i}`} delay={i * 0.05}>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-lg font-semibold text-brand-gold-text/60">{it.num}</span>
                  <h2 className="font-serif text-xl sm:text-2xl text-brand-black text-balance leading-snug">
                    {it.title}
                  </h2>
                </div>
                <div className="mt-4 sm:pl-11">{it.content}</div>
              </Reveal>
            ))}

            {/* 04 — dual system schema */}
            <Reveal>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-semibold text-brand-gold-text/60">04</span>
                <h2 className="font-serif text-xl sm:text-2xl text-brand-black text-balance leading-snug">
                  {tr(C.blocks[3].title, locale)}
                </h2>
              </div>
              <p className="mt-4 sm:pl-11 text-brand-ink-secondary leading-relaxed">
                {tr(C.blocks[3].body, locale)}
              </p>
              <div className="mt-6 sm:pl-11">
                <DualSystemDiagram
                  entreprise={{ label: tr(C.dualDiagram.entreprise.label, locale), desc: tr(C.dualDiagram.entreprise.desc, locale) }}
                  berufsschule={{ label: tr(C.dualDiagram.berufsschule.label, locale), desc: tr(C.dualDiagram.berufsschule.desc, locale) }}
                  alternance={tr(C.dualDiagram.alternance, locale)}
                  examens={{ label: tr(C.dualDiagram.examens.label, locale), desc: tr(C.dualDiagram.examens.desc, locale) }}
                  qualification={{ label: tr(C.dualDiagram.qualification.label, locale), desc: tr(C.dualDiagram.qualification.desc, locale) }}
                />
              </div>
            </Reveal>

            {[
              {
                num: "05",
                title: tr(C.blocks[4].title, locale),
                content: (
                  <div>
                    <p className="text-brand-ink-secondary leading-relaxed">{tr(C.blocks[4].body, locale)}</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      {C.revenues.map((r) => (
                        <div key={tr(r.label, locale)} className="rounded-xl border border-brand-grid bg-brand-card/50 p-4">
                          <h3 className="font-serif text-base text-brand-gold-text">{tr(r.label, locale)}</h3>
                          <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed">{tr(r.text, locale)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                num: "06",
                title: tr(C.blocks[5].title, locale),
                content: (
                  <div>
                    <p className="text-brand-ink-secondary leading-relaxed">{tr(C.blocks[5].body, locale)}</p>
                    <Link href="/ausbildung-allemagne/apres-ausbildung" className={`${GOLD_BTN} mt-6`}>
                      {tr(C.afterCta, locale)}
                      <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                  </div>
                ),
              },
            ].map((it, i) => (
              <Reveal key={`b${i}`} delay={i * 0.05}>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-lg font-semibold text-brand-gold-text/60">{it.num}</span>
                  <h2 className="font-serif text-xl sm:text-2xl text-brand-black text-balance leading-snug">
                    {it.title}
                  </h2>
                </div>
                <div className="mt-4 sm:pl-11">{it.content}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final premium CTA */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black text-balance leading-tight">
            {tr(C.finalTitle, locale)}
          </h2>
          <p className="mt-4 text-lg text-brand-ink-secondary leading-relaxed">{tr(C.finalText, locale)}</p>
          <div className="mt-8 flex justify-center">
            <Link href="/ausbildung-allemagne/evaluation" className={GOLD_BTN}>
              {tr(C.ctaEvaluer, locale)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
