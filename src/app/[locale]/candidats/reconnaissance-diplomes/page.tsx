import { Fragment } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Reveal } from "@/components/ausbildung/conditions-motion";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { RECONNAISSANCE_PAGE as R } from "@/lib/reconnaissance-content";
import type { Locale } from "@i18n/routing";

const GOLD_BTN =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/candidats/reconnaissance-diplomes",
    locale,
    title: tr(R.heroKicker, locale),
    description: tr(R.heroSubtitle, locale),
  });
}

export default async function CandidatsDiplomesPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("candidats"), pathname: "/candidats" },
          { name: tr(R.heroKicker, locale), pathname: "/candidats/reconnaissance-diplomes" },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold-text">
            {tr(R.heroKicker, locale)}
          </p>
          <h1 className="animate-fade-up mt-4 font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-brand-black text-balance leading-tight" style={{ animationDelay: "60ms" }}>
            {tr(R.heroTitle, locale)}
          </h1>
          <p className="animate-fade-up mt-5 max-w-2xl text-lg text-brand-ink-secondary leading-relaxed" style={{ animationDelay: "120ms" }}>
            {tr(R.heroSubtitle, locale)}
          </p>
        </div>
      </section>

      {/* Why recognition matters */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
              {tr(R.whyTitle, locale)}
            </h2>
          </Reveal>
          <div className="mt-6 space-y-5">
            {R.whyParas.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-brand-ink-secondary leading-relaxed">{tr(p, locale)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we help — four steps */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
              {tr(R.stepsTitle, locale)}
            </h2>
            <p className="mt-4 max-w-2xl text-brand-ink-secondary leading-relaxed">{tr(R.stepsIntro, locale)}</p>
            <p className="mt-6 font-medium text-brand-black">{tr(R.stepsLead, locale)}</p>
          </Reveal>
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {R.steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.06}>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-lg font-semibold text-brand-gold-text/60">{s.num}</span>
                  <h3 className="font-serif text-lg text-brand-black leading-snug">{tr(s.label, locale)}</h3>
                </div>
                <p className="mt-1.5 sm:pl-11 text-brand-ink-secondary leading-relaxed">{tr(s.body, locale)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Think early — timeline + our role */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
              {tr(R.earlyTitle, locale)}
            </h2>
            <p className="mt-4 text-brand-ink-secondary leading-relaxed">{tr(R.earlyPara1, locale)}</p>
            <p className="mt-4 text-brand-ink-secondary leading-relaxed">{tr(R.earlyPara2, locale)}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-3">
              {R.flow.map((f, i) => (
                <Fragment key={i}>
                  {i > 0 && <ArrowRight size={16} aria-hidden="true" className="shrink-0 text-brand-gold/70" />}
                  <span className="rounded-full border border-brand-gold/40 bg-brand-card px-4 py-2 text-sm font-medium text-brand-black">
                    {tr(f, locale)}
                  </span>
                </Fragment>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <div className="rounded-2xl border border-brand-gold/40 bg-brand-gold/[0.06] p-6 sm:p-7">
              <h3 className="font-serif text-lg text-brand-gold-text">{tr(R.roleTitle, locale)}</h3>
              <p className="mt-2 text-brand-ink-secondary leading-relaxed">{tr(R.roleText, locale)}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black text-balance leading-tight">
            {tr(R.finalTitle, locale)}
          </h2>
          <p className="mt-4 text-lg text-brand-ink-secondary leading-relaxed">{tr(R.finalText, locale)}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/evaluation" className={GOLD_BTN}>
              {tr(R.ctaEvaluer, locale)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contact" className={GOLD_BTN}>
              {tr(R.ctaContact, locale)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
