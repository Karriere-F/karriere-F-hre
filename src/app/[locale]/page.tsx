import Image from "next/image";
import type { Metadata } from "next";
import { Fragment } from "react";
import { Check, ArrowRight } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { HeroParcours } from "@/components/home/hero-parcours";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "../../../i18n/routing";
import type frMessages from "../../../messages/fr.json";

type HomeContent = typeof frMessages.home;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home");
  const locale = (await getLocale()) as Locale;
  return buildMetadata({
    pathname: "/",
    locale,
    title: t("heroTitle"),
    description: t("heroSubtitle"),
  });
}

export default async function HomePage() {
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");
  const content = await getPageContent<HomeContent>("home");

  const metiers = [
    { slug: "sante", img: "sante-equipe", sector: "/secteurs/sante", label: content.metierSante, alt: "Une équipe soignante africaine souriante dans un couloir d'hôpital en Allemagne" },
    { slug: "ingenieurs", img: "ingenieurs-v2", sector: "/secteurs/ingenierie", label: content.metierIngenieurs, alt: "Une ingénieure casquée devant des plans et des écrans techniques" },
    { slug: "informaticiens", img: "informaticiens", sector: "/secteurs/informatique", label: content.metierInformaticiens, alt: "Un informaticien à son poste, code affiché sur ses écrans" },
    { slug: "techniciens", img: "techniciens-v2", sector: "/secteurs/industrie", label: content.metierTechniciens, alt: "Un technicien devant une armoire électrique industrielle" },
    { slug: "btp", img: "btp", sector: "/secteurs/construction", label: content.metierBtp, alt: "Un ouvrier du bâtiment sur un chantier de construction" },
    { slug: "hotellerie", img: "hotellerie-v2", sector: "/secteurs/hotellerie", label: content.metierHotellerie, alt: "Un serveur et une réceptionniste dans un établissement hôtelier" },
    { slug: "industrie", img: "industrie-v3", sector: "/secteurs/industrie", label: content.metierIndustrie, alt: "Une opératrice en atelier industriel, bras croisés devant les machines" },
    { slug: "logistique", img: "logistique-v2", sector: "/secteurs/logistique", label: content.metierLogistique, alt: "Un agent logistique devant un camion en chargement dans un entrepôt" },
  ] as const;

  const methodSteps = [
    {
      img: "prepare",
      title: content.stepPrepareTitle,
      chips: [content.prep1, content.prep2, content.prep3, content.prep4],
      alt: "La salle de cours de Karriere Fähre à Douala, prête pour la formation en allemand",
    },
    {
      img: "construire",
      title: content.stepConstruireTitle,
      chips: [content.constr1, content.constr2, content.constr3, content.constr4],
      alt: "Un candidat en entretien individuel avec une conseillère Karriere Fähre",
    },
    {
      img: "reussir",
      title: content.stepReussirTitle,
      chips: [content.reuss1, content.reuss2, content.reuss3],
      alt: "Un candidat accueilli par une responsable devant une entreprise allemande",
    },
  ];

  const trustPoints = [content.trust1, content.trust2, content.trust3, content.trust4, content.trust5];

  const steps = [
    [content.acc1Title, content.acc1Body],
    [content.acc2Title, content.acc2Body],
    [content.acc3Title, content.acc3Body],
    [content.acc4Title, content.acc4Body],
    [content.acc5Title, content.acc5Body],
    [content.acc6Title, content.acc6Body],
    [content.acc7Title, content.acc7Body],
  ];

  return (
    <div className="flex flex-col">
      {/* Section 1 — Hero: editorial multi-trade photo bleeding in from the right, text left,
          with the animated Africa → Germany journey banded across the bottom */}
      <section className="relative overflow-hidden bg-brand-white">
        {/* Upper region — text + photo */}
        <div className="relative">
        {/* Desktop photo: full-bleed on the right, faded into the page on its left and edges */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[72%] lg:block">
          <Image
            src="/images/hero-equipe.jpg"
            alt="Une infirmière, un ouvrier du bâtiment, un informaticien, un cuisinier et un technicien industriel africains au travail en Allemagne"
            fill
            priority
            sizes="72vw"
            className="object-cover object-[50%_42%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/15 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-brand-white to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-white via-brand-white/85 to-transparent" />
          {/* Handwritten brand sign-off, bottom-right of the photo */}
          <div className="absolute bottom-5 right-8 text-right font-script leading-[1.1]">
            <span className="block text-3xl text-brand-black">Karriere Fähre.</span>
            <span className="block text-2xl text-brand-gold-text">
              L&apos;exigence allemande. Votre réussite.
            </span>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile photo: above the text */}
          <div className="relative -mx-4 aspect-[16/11] sm:-mx-6 lg:hidden">
            <Image
              src="/images/hero-equipe.jpg"
              alt="Une infirmière, un ouvrier du bâtiment, un informaticien, un cuisinier et un technicien industriel africains au travail en Allemagne"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[55%_45%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-white via-brand-white/85 to-transparent" />
            {/* Handwritten brand sign-off, bottom-right of the photo */}
            <div className="absolute bottom-3 right-4 max-w-[85%] text-right font-script leading-[1.1]">
              <span className="block text-2xl text-brand-black">Karriere Fähre.</span>
              <span className="block text-xl text-brand-gold-text">
                L&apos;exigence allemande. Votre réussite.
              </span>
            </div>
          </div>

          {/* Text block */}
          <div className="max-w-xl py-12 lg:flex lg:min-h-[600px] lg:max-w-xl lg:flex-col lg:justify-center lg:py-20">
            <h1
              className="animate-fade-up font-sans font-bold uppercase text-brand-black text-balance whitespace-normal lg:whitespace-pre-line"
              style={{ fontSize: "clamp(2.375rem, 5vw, 4.25rem)", letterSpacing: "-0.02em", lineHeight: 1.05, animationDelay: "60ms" }}
            >
              {content.heroTitle}
            </h1>
            <p
              className="animate-fade-up mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-semibold uppercase tracking-[0.1em] text-brand-gold-text"
              style={{ animationDelay: "100ms" }}
            >
              {content.heroTags.split(" · ").map((w, i) => (
                <Fragment key={w}>
                  {i > 0 && (
                    <span aria-hidden="true" className="text-brand-gold-text">
                      ·
                    </span>
                  )}
                  <span>{w}</span>
                </Fragment>
              ))}
            </p>
            <p
              className="animate-fade-up mt-6 max-w-xl text-brand-ink-secondary leading-relaxed whitespace-normal lg:whitespace-pre-line"
              style={{ animationDelay: "140ms" }}
            >
              {content.heroSubtitle}
            </p>
            <div
              className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "180ms" }}
            >
              <Link
                href="/postuler"
                className="press inline-flex h-[54px] items-center justify-center rounded-md bg-brand-gold px-8 font-semibold text-brand-black transition-colors duration-200 hover:bg-brand-gold-light"
              >
                {content.heroCtaStart}
              </Link>
              <Link
                href="/secteurs"
                className="press inline-flex h-[54px] items-center justify-center rounded-md border border-brand-gold px-8 font-semibold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black"
              >
                {content.heroCtaDiscover}
              </Link>
            </div>

          </div>
        </div>
        </div>

        {/* La Traversée — the Africa → Germany journey, animated across the bottom of the hero */}
        <div className="relative border-t border-brand-grid">
          <div className="mx-auto max-w-5xl px-4 pb-14 pt-11 sm:px-6 lg:px-8">
            <HeroParcours
              stops={[
                { label: content.tw1L, sublabel: content.tw1S },
                { label: content.tw2L, sublabel: content.tw2S },
                { label: content.tw3L, sublabel: content.tw3S },
                { label: content.tw4L, sublabel: content.tw4S },
                { label: content.tw5L, sublabel: content.tw5S },
                { label: content.tw6L, sublabel: content.tw6S },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Two audience doors */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div
            id="portes"
            className="animate-fade-up scroll-mt-28 grid gap-4 sm:gap-5 sm:grid-cols-2"
            style={{ animationDelay: "160ms" }}
          >
            {/* Candidat door */}
            <Link
              href="/candidats"
              className="group relative block overflow-hidden rounded-2xl min-h-[440px] sm:min-h-[520px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-card"
            >
              <Image
                src="/images/candidats-soins-technique.jpg"
                alt="Une infirmière et un technicien, prêts pour une carrière qualifiée en Allemagne"
                fill
                priority
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover object-[center_20%] transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/92 via-brand-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-light">
                  {tNav("candidats")}
                </span>
                <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-brand-white max-w-md leading-snug">
                  {content.door1Title}
                </h2>
                <p className="mt-3 max-w-md text-sm sm:text-base text-brand-white/80 leading-relaxed">
                  {content.door1Body}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-medium text-brand-white">
                  {t("ctaCandidate")}
                  <span
                    aria-hidden="true"
                    className="text-brand-gold-light transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1 motion-reduce:transition-none"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>

            {/* Entreprise door */}
            <Link
              href="/entreprises"
              className="group relative block overflow-hidden rounded-2xl min-h-[440px] sm:min-h-[520px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-card"
            >
              <Image
                src="/images/entreprises-allemandes.jpg"
                alt="L'équipe d'une entreprise allemande dans ses bureaux modernes"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover object-[center_25%] transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/92 via-brand-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-light">
                  {tNav("entreprises")}
                </span>
                <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-brand-white max-w-md leading-snug">
                  {content.door2Title}
                </h2>
                <p className="mt-3 max-w-md text-sm sm:text-base text-brand-white/80 leading-relaxed">
                  {content.door2Body}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-medium text-brand-white">
                  {t("ctaEmployer")}
                  <span
                    aria-hidden="true"
                    className="text-brand-gold-light transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1 motion-reduce:transition-none"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 — Métiers qui recrutent : real photo per profession */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
              {content.metiersTitle}
            </h2>
            <p className="mt-4 text-brand-ink-secondary leading-relaxed text-justify [hyphens:none]">
              {content.metiersLead}
            </p>
            <p className="mt-4 font-semibold text-brand-black leading-relaxed text-justify [hyphens:none]">
              {content.metiersLead2}
            </p>
          </div>

          <ul className="mt-10 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
            {metiers.map(({ slug, img, sector, label, alt }, i) => (
              <li
                key={slug}
                className="animate-fade-up"
                style={{ animationDelay: `${Math.min(i, 9) * 45}ms` }}
              >
                <Link
                  href={sector}
                  aria-label={label}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-xl outline-none ring-brand-gold/70 transition-shadow duration-200 focus-visible:ring-2 hover:shadow-[0_16px_36px_-18px_rgba(17,17,17,0.5)]"
                >
                  <Image
                    src={`/images/metiers/${img ?? slug}.jpg`}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover object-center transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/25 to-transparent" />
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-white/15 text-brand-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <h3 className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 font-serif text-base sm:text-lg text-brand-white leading-tight">
                    {label}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3 — Pourquoi Karriere Fähre : méthode, promotion, équipe */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Une méthode claire — three photographed steps with a real flow */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black leading-tight text-balance">
              {content.methodeTitle1}
              <br className="hidden sm:block" />{" "}
              <span className="text-brand-gold-text">{content.methodeTitle2}</span>
            </h2>
            <p className="mt-4 max-w-3xl text-brand-ink-secondary leading-relaxed text-pretty">
              {content.methodeLead}
            </p>

            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-stretch md:gap-3">
              {methodSteps.map((step, i) => (
                <Fragment key={step.title}>
                  <div
                    className="animate-fade-up flex flex-1 flex-col overflow-hidden rounded-2xl bg-brand-white shadow-[0_6px_28px_-10px_rgba(17,17,17,0.18)] ring-1 ring-black/[0.04]"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={`/images/pourquoi/${step.img}.jpg`}
                        alt={step.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h4 className="font-serif text-xl text-brand-black">
                        <span className="text-brand-gold-text">{i + 1}.</span> {step.title}
                      </h4>
                      <ul className="mt-4 space-y-2.5">
                        {step.chips.map((chip) => (
                          <li key={chip} className="flex items-center gap-2.5 text-brand-black">
                            <Check
                              size={18}
                              strokeWidth={2}
                              aria-hidden="true"
                              className="shrink-0 text-brand-gold-text"
                            />
                            {chip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {i < methodSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="flex items-center justify-center text-brand-gold md:px-0.5"
                    >
                      <ArrowRight className="hidden md:block" size={26} strokeWidth={2} />
                      <ArrowRight className="rotate-90 md:hidden" size={22} strokeWidth={2} />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          {/* Notre première promotion est en cours */}
          <div className="animate-fade-up mt-16 sm:mt-20">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold/12 px-3 py-1 text-sm font-medium text-brand-gold-text">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
              </span>
              {content.promoBadge}
            </span>
            <h3 className="mt-4 font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
              {content.promoTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-brand-ink-secondary leading-relaxed text-pretty">
              {content.promoText}
            </p>
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src="/images/pourquoi/promotion.jpg"
                alt="La première promotion de candidats Karriere Fähre en cours d'allemand à Douala"
                fill
                sizes="(min-width: 1024px) 1000px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* L'équipe + garanties + CTA */}
          <div className="mt-16 sm:mt-20 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="animate-fade-up relative aspect-[16/10] overflow-hidden rounded-2xl lg:aspect-[4/3]">
              <Image
                src="/images/pourquoi/equipe.jpg"
                alt="L'équipe de Karriere Fähre à Douala"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "80ms" }}>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
                {content.teamTitle}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check
                      size={20}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-brand-gold-text"
                    />
                    <span className="text-brand-black">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/postuler"
                className="press mt-8 inline-flex rounded-full bg-brand-gold px-7 py-3.5 font-medium text-brand-black hover:bg-brand-gold-light transition-colors duration-150"
              >
                {content.ctaCandidature}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The founder as the human bridge — dual German-Cameroonian, the trust anchor */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid gap-10 lg:grid-cols-12 items-center">
          <div className="animate-fade-up lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
              <Image
                src="/images/about-founder.jpg"
                alt="La fondatrice de Karriere Fähre"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="animate-fade-up lg:col-span-7" style={{ animationDelay: "80ms" }}>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black leading-snug text-balance">
              {content.why1Title}
            </h2>
            <p className="mt-4 max-w-xl text-brand-ink-secondary leading-relaxed text-pretty">
              {content.why1Body}
            </p>
            <Link
              href="/a-propos/notre-histoire"
              className="mt-6 inline-flex items-center gap-2 font-medium text-brand-gold-text hover:gap-3 transition-[gap] duration-200"
            >
              {content.founderCta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Notre accompagnement — a real, ordered sequence, so the numbers are earned */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance">
              {content.processTitle}
            </h2>
            <p className="mt-3 text-brand-ink-secondary leading-relaxed text-pretty">
              {content.processLead}
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_1fr] lg:gap-14 items-start">
            <div className="animate-fade-up lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/german-courses.jpg"
                  alt="Des candidats en formation, carnet en main"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <ol className="relative border-l border-brand-grid ml-3 sm:ml-4">
              {steps.map(([title, body], i) => (
                <li
                  key={title}
                  className="animate-fade-up relative pl-8 sm:pl-10 pb-9 last:pb-0"
                  style={{ animationDelay: `${Math.min(i, 8) * 50}ms` }}
                >
                  <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold text-brand-black font-serif text-xs font-bold ring-4 ring-brand-card">
                    {i + 1}
                  </span>
                  <h3 className="font-medium text-brand-black leading-snug">{title}</h3>
                  <p className="mt-1.5 max-w-xl text-sm text-brand-ink-secondary leading-relaxed">
                    {body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Closing — the one deliberate dark band, restating the two doors */}
      <section className="relative bg-brand-black text-brand-white overflow-hidden">
        <Image
          src="/images/home-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/85 to-brand-black/75" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col items-center text-center gap-5">
          <h2 className="font-serif text-2xl sm:text-3xl max-w-xl text-balance">
            {content.finalCtaTitle}
          </h2>
          <p className="text-brand-white/80 max-w-lg leading-relaxed text-pretty">
            {content.finalCtaSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link
              href="/candidats"
              className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
            >
              {t("ctaCandidate")}
            </Link>
            <Link
              href="/entreprises"
              className="press rounded-full border border-brand-white/30 px-6 py-3 text-brand-white/85 hover:border-brand-gold-light hover:text-brand-gold-light transition-colors duration-150"
            >
              {t("ctaEmployer")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
