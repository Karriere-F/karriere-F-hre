import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { metadataFromNamespace } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { METHODE as M } from "@/lib/methode-content";
import type { Locale } from "@i18n/routing";

export const generateMetadata = () => metadataFromNamespace("aProposMethode", "/a-propos/methode");

const btnOutline =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";

export default async function AProposMethodePage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const L = (x: { fr: string; de: string; en: string }) => tr(x, locale);

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("aPropos"), pathname: "/a-propos" },
          { name: L(M.kicker), pathname: "/a-propos/methode" },
        ]}
      />

      {/* Intro — titre pleine largeur, texte à gauche, photo fondue à droite */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:pt-16 lg:pb-20">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {L(M.kicker)}
          </p>
          <h1 className="animate-fade-up mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.7rem] text-brand-black leading-tight">
            {L(M.titleL1)}
            <br />
            {L(M.titleL2)}
          </h1>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="animate-fade-up text-lg text-brand-ink-secondary leading-relaxed" style={{ animationDelay: "80ms" }}>
                {L(M.lead1)}
              </p>
              <p className="animate-fade-up mt-4 text-brand-ink-secondary leading-relaxed" style={{ animationDelay: "120ms" }}>
                {L(M.lead2)}
              </p>
              <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "160ms" }}>
                <Link href="/evaluation" className={btnOutline}>
                  {L(M.introCtaPrimary)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/cours-allemand" className={btnOutline}>
                  {L(M.introCtaSecondary)}
                </Link>
              </div>
            </div>
            <div className="animate-fade-up relative lg:-mr-12 xl:-mr-24" style={{ animationDelay: "120ms" }}>
              <Image
                src="/images/methode-hero.webp"
                alt="Une conseillère Karriere Fähre accompagne un candidat lors d'un entretien d'orientation dans un bureau moderne"
                width={1600}
                height={900}
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
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

      {/* Steps */}
      {M.steps.map((step, i) => (
        <section key={step.num} className={i % 2 === 0 ? "bg-brand-white" : "bg-brand-card"}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
              {/* Left — step marker + title + subtitle */}
              <div className="lg:sticky lg:top-28 self-start">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
                  {L(M.stepLabel)} {step.num}
                </p>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-brand-black leading-snug text-balance">
                  {L(step.title)}
                </h2>
                <p className="mt-4 font-serif text-lg text-brand-black">{L(step.subtitle)}</p>
              </div>

              {/* Right — body + list / paths + note + disclaimer + ctas */}
              <div>
                <p className="text-brand-ink-secondary leading-relaxed">{L(step.body)}</p>

                {step.routes && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {step.routes.map((r, j) => (
                      <div
                        key={j}
                        className="group relative flex flex-col rounded-2xl bg-brand-white p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(17,17,17,0.1)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
                          {L(r.kicker)}
                        </p>
                        <h3 className="mt-2 font-serif text-xl text-brand-black">{L(r.name)}</h3>
                        <p className="mt-3 flex-1 text-sm text-brand-ink-secondary leading-relaxed">{L(r.body)}</p>
                        <Link
                          href={r.href as "/ausbildung-allemagne"}
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-gold-text after:absolute after:inset-0 after:content-['']"
                        >
                          {L(r.cta)}
                          <ArrowRight
                            size={16}
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                )}

                {step.bullets && (
                  <>
                    {step.listIntro && (
                      <p className="mt-6 text-brand-ink-secondary leading-relaxed">{L(step.listIntro)}</p>
                    )}
                    {!step.listIntro && (
                      <p className="mt-6 font-medium text-brand-black">{L(M.defaultListIntro)}</p>
                    )}
                    <ul className="mt-4 space-y-3">
                      {step.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check size={18} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold-text" />
                          <span className="text-brand-ink-secondary leading-relaxed">{L(b)}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {step.note && (
                  <p className="mt-5 text-sm italic text-brand-ink-muted leading-relaxed">{L(step.note)}</p>
                )}

                {step.disclaimer && (
                  <div className="mt-6 rounded-lg border-l-4 border-brand-gold bg-brand-gold/10 p-5">
                    <p className="text-sm text-brand-ink-secondary leading-relaxed">{L(step.disclaimer)}</p>
                  </div>
                )}

                {step.ctas && (
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                    {step.ctas.map((c, j) => (
                      <Link key={j} href={c.href as "/parcours"} className={btnOutline}>
                        {L(c.label)}
                        {c.primary && <ArrowRight size={18} aria-hidden="true" />}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Transparency */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black leading-snug text-balance">
            {L(M.transparencyTitle)}
          </h2>
          <p className="mt-5 text-brand-ink-secondary leading-relaxed">{L(M.transparencyBody1)}</p>
          <p className="mt-4 text-brand-ink-secondary leading-relaxed">{L(M.transparencyBody2)}</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black leading-snug text-balance">
            {L(M.finalTitle)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-ink-secondary leading-relaxed">{L(M.finalText)}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/evaluation" className={btnOutline}>
              {L(M.finalCtaPrimary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contact" className={btnOutline}>
              {L(M.finalCtaSecondary)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
