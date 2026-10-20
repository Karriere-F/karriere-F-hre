import Image from "next/image";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, Check, Compass, ListChecks, Languages, Globe, Eye, Handshake } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { MethodSteps } from "@/components/entreprises/method-steps";
import { buildMetadata } from "@/lib/seo";
import { tr } from "@/lib/localized";
import { APROPOS as A } from "@/lib/a-propos-content";
import type { Locale } from "@i18n/routing";

const btnOutline =
  "press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/a-propos",
    locale,
    title: tr(A.seoTitle, locale),
    description: tr(A.seoDescription, locale),
  });
}

export default async function AProposPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const L = (x: { fr: string; de: string; en: string }) => tr(x, locale);

  const faqItems = A.faq.map((f) => ({ q: L(f.q), a: L(f.a) }));

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("aPropos"), pathname: "/a-propos" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:pt-16 lg:pb-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
                {L(A.heroEyebrow)}
              </p>
              <h1 className="animate-fade-up mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.7rem] text-brand-black leading-tight">
                {L(A.heroTitleL1)}
                <br />
                {L(A.heroTitleL2)}
              </h1>
              <p className="animate-fade-up mt-6 text-lg text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]" style={{ animationDelay: "80ms" }}>
                {L(A.heroLead)}
              </p>
              <p className="animate-fade-up mt-4 text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]" style={{ animationDelay: "120ms" }}>
                {L(A.heroBody1)}
              </p>
              <p className="animate-fade-up mt-4 text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]" style={{ animationDelay: "140ms" }}>
                {L(A.heroBody2)}
              </p>
              <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "180ms" }}>
                <Link href="/evaluation" className={btnOutline}>
                  {L(A.heroCtaPrimary)}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/a-propos/methode" className={btnOutline}>
                  {L(A.heroCtaSecondary)}
                </Link>
              </div>
            </div>
            <div className="animate-fade-up relative lg:-mr-12 xl:-mr-24" style={{ animationDelay: "120ms" }}>
              <Image
                src="/images/cofondateurs.webp"
                alt={L(A.heroPhotoAlt)}
                width={1600}
                height={1067}
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

      {/* 01 — Notre histoire */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.histoireKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
            {L(A.histoireTitle)}
          </h2>
          <div className="mt-6 space-y-4">
            {A.histoireBody.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed text-justify-hyphen ${i === 1 ? "font-semibold text-brand-black" : "text-brand-ink-secondary"}`}
              >
                {L(p)}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Notre mission */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.missionKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-[1.75rem] xl:text-[2.3rem] text-brand-black leading-snug" style={{ textWrap: "wrap" }}>
            {L(A.missionTitle)}
          </h2>
          <div className="mt-6 space-y-4">
            {A.missionBody.map((p, i) => (
              <p key={i} className="text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">{L(p)}</p>
            ))}
          </div>
          <p className="mt-10 font-serif text-lg text-brand-black">{L(A.missionEngagementsIntro)}</p>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {A.missionEngagements.map((e, i) => (
              <div
                key={i}
                className="group animate-fade-up relative flex flex-col overflow-hidden rounded-2xl bg-brand-white p-7 pt-8 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(17,17,17,0.1)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-100 bg-brand-gold transition-transform duration-300 lg:scale-x-0 lg:group-hover:scale-x-100"
                />
                <span className="font-serif text-2xl text-brand-gold-text">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-xl text-brand-black">{L(e.title)}</h3>
                <p className="mt-3 text-brand-ink-secondary leading-relaxed">{L(e.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Les cofondateurs */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.foundersKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">
            {(() => {
              const t = L(A.foundersTitle);
              const i = t.indexOf(". ");
              return i === -1 ? t : (
                <>
                  {t.slice(0, i + 1)}
                  <br />
                  {t.slice(i + 2)}
                </>
              );
            })()}
          </h2>
          <div className="mt-6 space-y-4">
            {A.foundersIntro.map((p, i) => {
              const t = L(p);
              const ci = i === 0 ? t.indexOf(": ") : -1;
              return (
                <p key={i} className="text-brand-ink-secondary leading-relaxed text-justify-hyphen">
                  {ci === -1 ? (
                    t
                  ) : (
                    <>
                      {t.slice(0, ci + 2)}
                      <strong className="font-semibold text-brand-black">{t.slice(ci + 2)}</strong>
                    </>
                  )}
                </p>
              );
            })}
          </div>

          {/* Portraits — même format et mêmes dimensions pour les deux, nom sous la photo,
              photo fixe pendant la lecture. Le gabarit de colonnes s'inverse selon le côté
              pour que la photo occupe toujours la colonne étroite (dimensions identiques). */}
          <div className="mt-20 space-y-24 lg:mt-24 lg:space-y-32">
            {A.founders.map((f, idx) => {
              const photoLeft = idx % 2 === 0;
              const photoBlock = (
                <div key="photo">
                  <div className="lg:sticky lg:top-28">
                    <div
                      className="relative mx-auto max-w-sm overflow-hidden rounded-2xl shadow-[0_16px_50px_rgba(17,17,17,0.12)] lg:mx-0 lg:max-w-none"
                      style={{ aspectRatio: f.aspect }}
                    >
                      <Image
                        src={f.photo}
                        alt={L(f.photoAlt)}
                        fill
                        sizes="(min-width: 1024px) 30vw, 90vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl text-brand-black">{f.name}</h3>
                    <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold-text">{L(f.role)}</p>
                  </div>
                </div>
              );
              const textBlock = (
                <div key="text">
                  <p className="font-serif text-xl sm:text-2xl text-brand-black leading-snug text-balance">{L(f.tagline)}</p>
                  <div className="mt-8 space-y-5">
                    {f.bio.map((p, i) => {
                      const t = L(p);
                      const ci = t.indexOf(": ");
                      if (ci > 0 && ci <= 24) {
                        return (
                          <p key={i} className="text-brand-ink-secondary leading-relaxed text-justify-hyphen">
                            <strong className="font-semibold text-brand-black">{t.slice(0, ci + 1)}</strong>
                            {t.slice(ci + 1)}
                          </p>
                        );
                      }
                      return (
                        <p key={i} className="text-brand-ink-secondary leading-relaxed text-justify-hyphen">{t}</p>
                      );
                    })}
                  </div>
                </div>
              );
              return (
                <div
                  key={f.name}
                  className={`grid gap-10 lg:items-start lg:gap-16 ${
                    photoLeft
                      ? "lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]"
                      : "lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)]"
                  }`}
                >
                  {photoLeft ? [photoBlock, textBlock] : [textBlock, photoBlock]}
                </div>
              );
            })}
          </div>

          {/* Une ambition commune */}
          <div className="mt-20 rounded-2xl border border-brand-gold/40 bg-brand-gold/10 p-8 sm:p-12 lg:mt-28">
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-black leading-snug">{L(A.foundersAmbitionTitle)}</h3>
            <div className="mt-5 space-y-4">
              {A.foundersAmbition.map((p, i) => (
                <p key={i} className="text-brand-ink-secondary leading-relaxed text-left">{L(p)}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Notre approche */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.approcheKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
            {L(A.approcheTitle)}
          </h2>
          <p className="mt-4 text-brand-ink-secondary leading-relaxed">{L(A.approcheIntro)}</p>

          <div className="mt-10 max-w-4xl space-y-4">
            {A.approcheSteps.map((step, i) => (
              <div
                key={step.num}
                className="animate-fade-up flex gap-5 rounded-2xl bg-brand-white p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="font-serif text-2xl text-brand-gold-text">{step.num}</span>
                <div>
                  <h3 className="font-serif text-xl text-brand-black">{L(step.title)}</h3>
                  <p className="mt-2 text-brand-ink-secondary leading-relaxed">{L(step.body)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-4xl rounded-lg border-l-4 border-brand-gold bg-brand-gold/10 p-5">
            <p className="text-sm text-brand-ink-secondary leading-relaxed">{L(A.approcheDisclaimer)}</p>
          </div>

          <div className="mt-8">
            <Link href="/a-propos/methode" className={btnOutline}>
              {L(A.approcheCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — Nos domaines d'accompagnement */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.domainesKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
            {L(A.domainesTitle)}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {A.domaines.map((d, i) => (
              <div
                key={i}
                className="group relative flex flex-col rounded-2xl bg-brand-card p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(17,17,17,0.1)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(d.kicker)}</p>
                <h3 className="mt-2 font-serif text-2xl text-brand-black">{L(d.name)}</h3>
                <p className="mt-3 flex-1 text-brand-ink-secondary leading-relaxed">{L(d.body)}</p>
                <Link
                  href={d.href as "/ausbildung-allemagne"}
                  className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand-gold-text after:absolute after:inset-0 after:content-['']"
                >
                  {L(d.cta)}
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Nos valeurs */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.valeursKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
            {L(A.valeursTitle)}
          </h2>
          <MethodSteps steps={A.valeurs.map((v) => ({ title: L(v.title), body: L(v.body) }))} />
        </div>
      </section>

      {/* 07 — Un recrutement responsable */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            {/* Narrative */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.responsableKicker)}</p>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
                {L(A.responsableTitle)}
              </h2>
              <p className="mt-6 text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">{L(A.responsableIntro1)}</p>
              <p className="mt-4 text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">{L(A.responsableBody1)}</p>
              <p className="mt-4 text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">{L(A.responsableBody2)}</p>
            </div>

            {/* Charte d'engagements */}
            <div className="relative overflow-hidden rounded-2xl bg-brand-card p-8 pt-9 shadow-[0_10px_40px_rgba(17,17,17,0.08)] ring-1 ring-brand-black/5 sm:p-10 sm:pt-11">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-brand-gold" />
              <p className="font-serif text-lg text-brand-black">{L(A.responsableIntro2)}</p>
              <ul className="mt-6 space-y-4">
                {A.responsableBullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-black">
                      <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <span className="text-brand-black leading-relaxed">{L(b)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — Nos partenaires */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.partenairesKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
            {L(A.partenairesTitle)}
          </h2>
          <div className="mt-6 space-y-4">
            {A.partenairesBody.map((p, i) => (
              <p key={i} className="text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">{L(p)}</p>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-brand-white p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="font-serif text-lg text-brand-black">{L(A.partenairesPrompt)}</p>
              <p className="mt-1 text-brand-ink-secondary leading-relaxed">{L(A.partenairesPromptText)}</p>
            </div>
            <Link href="/partenaires" className={`${btnOutline} mt-5 w-full sm:mt-0 sm:w-auto sm:shrink-0`}>
              {L(A.partenairesCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 09 — Pourquoi choisir */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.pourquoiKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
            {L(A.pourquoiTitle)}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {A.pourquoi.map((p, i) => {
              const Icon = [Compass, ListChecks, Languages, Globe, Eye, Handshake][i] ?? Compass;
              return (
                <div
                  key={i}
                  className="group animate-fade-up rounded-2xl bg-brand-card p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(17,17,17,0.1)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/12 text-brand-gold-text transition-[transform,background-color,color] duration-300 ease-out group-hover:-rotate-6 group-hover:scale-105 group-hover:bg-brand-gold group-hover:text-brand-black motion-reduce:transition-none motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100">
                    <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg text-brand-black">{L(p.title)}</h3>
                  <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{L(p.body)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 — FAQ */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{L(A.faqKicker)}</p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
            {L(A.faqTitle)}
          </h2>
          <div className="mt-8 max-w-3xl space-y-4">
            {A.faq.map((f, i) => (
              <details
                key={i}
                className="animate-fade-up group rounded-lg border border-brand-grid bg-brand-white p-5"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-brand-black marker:content-none">
                  {L(f.q)}
                  <span className="shrink-0 text-brand-gold-text transition-transform duration-150 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-brand-ink-secondary leading-relaxed">{L(f.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — Conclusion */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
            {L(A.finalTitle)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-ink-secondary leading-relaxed">{L(A.finalText1)}</p>
          <p className="mx-auto mt-3 max-w-2xl text-brand-ink-secondary leading-relaxed">{L(A.finalText2)}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/evaluation" className={btnOutline}>
              {L(A.finalCtaPrimary)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contact" className={btnOutline}>
              {L(A.finalCtaSecondary)}
            </Link>
          </div>
          <p className="mt-10 font-serif text-lg text-brand-gold-text">{L(A.tagline)}</p>
        </div>
      </section>
    </div>
  );
}
