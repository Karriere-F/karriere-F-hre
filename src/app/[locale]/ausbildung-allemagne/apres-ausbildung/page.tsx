import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Reveal } from "@/components/ausbildung/conditions-motion";
import { PracticeCase } from "@/components/ausbildung/practice-case";
import { StudyPaths } from "@/components/ausbildung/study-paths";
import { StartJourney } from "@/components/ausbildung/start-journey";
import { Link } from "@i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { APRES_PAGE as A } from "@/lib/apres-content";
import type { Locale } from "@i18n/routing";

const GOLD_BTN =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/ausbildung-allemagne/apres-ausbildung",
    locale,
    title: tr(A.heroTitle, locale),
    description: tr(A.heroIntro, locale),
  });
}

export default async function ApresAusbildungPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const alt = "Un jeune professionnel qualifié au travail après son Ausbildung en Allemagne";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: A.faq.map((f) => ({
      "@type": "Question",
      name: tr(f.q, locale),
      acceptedAnswer: { "@type": "Answer", text: tr(f.a, locale) },
    })),
  };

  // Horizontal chip flow (wraps on small screens), used for the case schemas
  // and the "experience" progression. No icons, arrows carry the direction.
  const chipFlow = (items: string[]) => (
    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-3">
      {items.map((s, i) => (
        <span key={`${s}-${i}`} className="flex items-center gap-2.5">
          {i > 0 && <ArrowRight size={16} aria-hidden="true" className="shrink-0 text-brand-gold/70" />}
          <span className="rounded-full border border-brand-gold/40 bg-brand-white px-4 py-2 text-sm font-medium text-brand-black">
            {s}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("ausbildung"), pathname: "/ausbildung-allemagne" },
          { name: tNav("ausApres"), pathname: "/ausbildung-allemagne/apres-ausbildung" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1 — HERO */}
      <section className="relative overflow-hidden bg-brand-card">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Image src="/images/apres-ausbildung-hero.jpg" alt={alt} fill priority sizes="52vw" className="object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-card via-brand-card/15 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-card to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-card to-transparent" />
        </div>

        <div className="relative -mb-2 aspect-[16/11] w-full lg:hidden">
          <Image src="/images/apres-ausbildung-hero.jpg" alt={alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-card to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl py-12 lg:flex lg:min-h-[480px] lg:flex-col lg:justify-start lg:pt-14 lg:pb-20">
            <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-brand-black text-balance leading-tight">
              {tr(A.heroTitle, locale)}
            </h1>
            <p className="animate-fade-up mt-5 max-w-lg text-justify text-brand-ink-secondary leading-relaxed" style={{ animationDelay: "80ms" }}>
              {tr(A.heroIntro, locale)}
            </p>
            <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "140ms" }}>
              <Link href="/ausbildung-allemagne/evaluation" className={GOLD_BTN}>
                {tr(A.ctaEvaluer, locale)}
              </Link>
              <Link href="/secteurs" className={GOLD_BTN}>
                {tr(A.ctaMetiers, locale)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — L'AUSBILDUNG, UN POINT DE DÉPART */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
              {tr(A.startTitle, locale)}
            </h2>
            <p className="mt-4 text-justify text-brand-ink-secondary leading-relaxed">{tr(A.startText, locale)}</p>
          </Reveal>

          <StartJourney
            baseLabel={tr(A.startBaseLabel, locale)}
            steps={A.startFlow.map((s) => ({ label: tr(s.label, locale), desc: tr(s.desc, locale) }))}
            branchLabel={tr(A.startBranchLabel, locale)}
            branches={A.startOutcomes.map((o) => ({ label: tr(o.label, locale), desc: tr(o.desc, locale) }))}
          />
        </div>
      </section>

      {/* 3 & 4 — CAS PRATIQUES */}
      {A.cases.map((c, ci) => (
        <section key={ci} className={ci % 2 === 0 ? "bg-brand-card" : "bg-brand-white"}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-brand-gold-text">{tr(c.tag, locale)}</p>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
                {tr(c.title, locale)}
              </h2>
              <p className="mt-4 max-w-2xl text-brand-ink-secondary leading-relaxed">{tr(c.persona, locale)}</p>
            </Reveal>

            <PracticeCase
              steps={c.steps.map((st) => ({
                num: st.num,
                label: tr(st.label, locale),
                sublabel: tr(st.sublabel, locale),
                body: tr(st.body, locale),
              }))}
              climb={c.schema.map((s) => tr(s, locale))}
            />
          </div>
        </section>
      ))}

      {/* 5 — COMPARAISON */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
              {tr(A.compareTitle, locale)}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b border-brand-grid">
                  <th className="py-3 pr-4 text-sm font-medium text-brand-ink-muted" />
                  <th className="py-3 px-4 font-serif text-lg text-brand-black">{tr(A.compareCols.pflege, locale)}</th>
                  <th className="py-3 pl-4 font-serif text-lg text-brand-black">{tr(A.compareCols.technique, locale)}</th>
                </tr>
              </thead>
              <tbody>
                {A.compareRows.map((r, i) => (
                  <tr key={i} className="border-b border-brand-grid/60 align-top">
                    <th scope="row" className="py-4 pr-4 text-sm font-semibold text-brand-gold-text whitespace-nowrap">
                      {tr(r.label, locale)}
                    </th>
                    <td className="py-4 px-4 text-sm text-brand-ink-secondary">{tr(r.pflege, locale)}</td>
                    <td className="py-4 pl-4 text-sm text-brand-ink-secondary">{tr(r.technique, locale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-sm text-brand-ink-muted leading-relaxed">{tr(A.compareNote, locale)}</p>
          </Reveal>
        </div>
      </section>

      {/* 6 — CE QUI CHANGE AVEC L'EXPÉRIENCE */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
              {tr(A.expTitle, locale)}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            {chipFlow(A.expFlow.map((s) => tr(s, locale)))}
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-brand-ink-secondary leading-relaxed">{tr(A.expNote, locale)}</p>
          </Reveal>
        </div>
      </section>

      {/* 7 — ÉTUDES APRÈS UNE AUSBILDUNG */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
              {tr(A.studiesTitle, locale)}
            </h2>
            <p className="mt-4 text-brand-ink-secondary leading-relaxed">{tr(A.studiesIntro, locale)}</p>
          </Reveal>
          <StudyPaths
            anchor={tr(A.studiesAnchor, locale)}
            paths={A.studiesFamilies.map((f) => ({ label: tr(f.label, locale), text: tr(f.text, locale) }))}
          />
        </div>
      </section>

      {/* 8 — ACCOMPAGNEMENT KARRIERE FÄHRE */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
              {tr(A.supportTitle, locale)}
            </h2>
            <p className="mt-4 text-brand-ink-secondary leading-relaxed">{tr(A.supportText, locale)}</p>
          </Reveal>
          {/* Numbered progression rail: four nodes on a single connecting line */}
          <div className="mt-12">
            <p className="text-center text-xs uppercase tracking-widest text-brand-gold-text">
              {tr(A.supportAnchor, locale)}
            </p>
            <div className="relative mt-8">
              <div
                aria-hidden="true"
                className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-brand-gold/30 lg:block"
              />
              <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {A.support.map((s, i) => (
                  <div
                    key={i}
                    className="animate-fade-up flex flex-col items-center text-center"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold bg-brand-white font-serif text-lg font-bold text-brand-gold-text">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 font-serif text-base text-brand-black leading-snug">{tr(s.label, locale)}</h3>
                    <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed">{tr(s.text, locale)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — CTA FINAL */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black text-balance leading-tight">
            {tr(A.finalTitle, locale)}
          </h2>
          <p className="mt-4 text-lg text-brand-ink-secondary leading-relaxed">{tr(A.finalText, locale)}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/ausbildung-allemagne/evaluation" className={GOLD_BTN}>
              {tr(A.ctaEvaluer, locale)}
            </Link>
            <Link href="/secteurs" className={GOLD_BTN}>
              {tr(A.ctaMetiers, locale)}
            </Link>
          </div>
        </div>
      </section>

      {/* 10 — FAQ */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
              {tr(A.faqTitle, locale)}
            </h2>
          </Reveal>
          <dl className="mt-8 divide-y divide-brand-grid/70 border-y border-brand-grid/70">
            {A.faq.map((f, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="py-6">
                  <dt className="font-serif text-lg text-brand-black leading-snug">{tr(f.q, locale)}</dt>
                  <dd className="mt-2 text-brand-ink-secondary leading-relaxed">{tr(f.a, locale)}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
