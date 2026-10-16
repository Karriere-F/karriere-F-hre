import Image from "next/image";
import type { Metadata } from "next";
import { Fragment } from "react";
import { Check, ArrowRight } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { HeroParcours } from "@/components/home/hero-parcours";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { tr } from "@/lib/localized";
import { ACCUEIL as A } from "@/lib/accueil-content";
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
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<HomeContent>("home");
  const L = (x: { fr: string; de: string; en: string }) => tr(x, locale);

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

  return (
    <div className="flex flex-col">
      {/* Section 1 — Hero: editorial multi-trade photo bleeding in from the right, text left,
          with the animated Africa → Germany journey banded across the bottom */}
      <section className="relative overflow-hidden bg-brand-white">
        {/* Upper region — text + photo */}
        <div className="relative">
        {/* Desktop photo: full-bleed on the right, faded into the page on its left and edges */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[72%] lg:block">
          <ParallaxImage
            src="/images/hero-equipe.jpg"
            alt="Une infirmière, un ouvrier du bâtiment, un informaticien, un cuisinier et un technicien industriel africains au travail en Allemagne"
            priority
            sizes="72vw"
            imgClassName="object-cover"
            objectPosition="50% 42%"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/15 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-brand-white to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-white via-brand-white/85 to-transparent" />
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
              className="animate-fade-up mt-10 max-w-xl text-justify text-brand-ink-secondary leading-relaxed [white-space:normal]"
              style={{ animationDelay: "140ms" }}
            >
              {content.heroSubtitle.replace(/\n/g, " ")}
            </p>
            <div
              className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "180ms" }}
            >
              <Link
                href="/evaluation"
                className="press inline-flex h-[54px] items-center justify-center rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
              >
                {content.heroCtaStart}
              </Link>
              <Link
                href="/parcours"
                className="press inline-flex h-[54px] items-center justify-center rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
              >
                {content.heroCtaDiscover}
              </Link>
            </div>

          </div>
        </div>
        </div>

        {/* La Traversée — the Africa → Germany journey, animated across the bottom of the hero */}
        <div className="relative">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
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
                src="/images/candidats-soins-technique.webp"
                alt="Une infirmière et un technicien, prêts pour une carrière qualifiée en Allemagne"
                fill
                priority
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover object-[center_20%] transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/45 to-brand-black/85" />
              <div className="absolute inset-0 flex flex-col p-7 sm:p-8">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold-light drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                  {tNav("candidats")}
                </span>
                <div className="flex flex-1 flex-col items-center justify-end text-center">
                  <h2 className="font-serif text-2xl sm:text-3xl text-brand-white max-w-md leading-snug">
                    {content.door1Title}
                  </h2>
                  <p className="mt-3 max-w-md text-sm sm:text-base text-brand-white/85 leading-relaxed">
                    {content.door1Body}
                  </p>
                  <span className="press mt-6 inline-flex items-center gap-2 rounded-md border border-brand-gold bg-brand-black/40 px-6 py-3 font-bold text-brand-gold-light backdrop-blur-sm transition-colors duration-200 group-hover:bg-brand-gold group-hover:text-brand-black">
                    {t("ctaCandidate")}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1 motion-reduce:transition-none"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Entreprise door */}
            <Link
              href="/entreprises"
              className="group relative block overflow-hidden rounded-2xl min-h-[440px] sm:min-h-[520px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-card"
            >
              <Image
                src="/images/entreprises-allemandes.webp"
                alt="L'équipe d'une entreprise allemande dans ses bureaux modernes"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover object-[center_25%] transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/45 to-brand-black/85" />
              <div className="absolute inset-0 flex flex-col p-7 sm:p-8">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold-light drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                  {tNav("entreprises")}
                </span>
                <div className="flex flex-1 flex-col items-center justify-end text-center">
                  <h2 className="font-serif text-2xl sm:text-3xl text-brand-white max-w-md leading-snug">
                    {content.door2Title}
                  </h2>
                  <p className="mt-3 max-w-md text-sm sm:text-base text-brand-white/85 leading-relaxed">
                    {content.door2Body}
                  </p>
                  <span className="press mt-6 inline-flex items-center gap-2 rounded-md border border-brand-gold bg-brand-black/40 px-6 py-3 font-bold text-brand-gold-light backdrop-blur-sm transition-colors duration-200 group-hover:bg-brand-gold group-hover:text-brand-black">
                    {t("ctaEmployer")}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1 motion-reduce:transition-none"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 03 — Les parcours professionnels */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
              {L(A.parcoursKicker)}
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
              {L(A.parcoursTitleL1)}
              <br />
              {L(A.parcoursTitleL2)}
            </h2>
            <p className="mt-4 text-brand-ink-secondary leading-relaxed">{L(A.parcoursLead)}</p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {A.parcours.map((p, i) => (
              <div
                key={p.num}
                className="group animate-fade-up relative flex flex-col rounded-2xl bg-brand-card p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(17,17,17,0.1)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="font-serif text-3xl text-brand-gold-text">{p.num}</span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-brand-black">{L(p.title)}</h3>
                <p className="mt-3 text-brand-ink-secondary leading-relaxed">{L(p.body)}</p>
                <p className="mt-4 text-sm text-brand-ink-muted leading-relaxed">{L(p.pour)}</p>
                <Link
                  href={p.href as "/ausbildung-allemagne"}
                  className="mt-auto inline-flex items-center gap-2 pt-6 font-bold text-brand-gold-text after:absolute after:inset-0 after:content-['']"
                >
                  {L(p.cta)}
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="font-serif text-lg text-brand-black">{L(A.parcoursPrompt)}</p>
            <Link
              href="/evaluation"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {L(A.finalCtaEvaluer)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 04 — Cours d'allemand */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
              {L(A.coursKicker)}
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
              {L(A.coursTitle)}
            </h2>
            <p className="mt-4 text-brand-ink-secondary leading-relaxed">{L(A.coursLead)}</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {A.coursItems.map((c, i) => (
              <div
                key={i}
                className="animate-fade-up rounded-2xl bg-brand-white p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <h3 className="font-serif text-xl text-brand-black">{L(c.title)}</h3>
                <p className="mt-3 text-brand-ink-secondary leading-relaxed">{L(c.body)}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/cours-allemand"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {L(A.coursCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/cours-allemand/test-niveau"
              className="press inline-flex h-[54px] items-center justify-center rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {L(A.coursCtaNiveau)}
            </Link>
          </div>
        </div>
      </section>

      {/* Section 05 — Les métiers accessibles */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
              {L(A.metiersKicker)}
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
              {L(A.metiersTitle)}
            </h2>
            <p className="mt-4 text-brand-ink-secondary leading-relaxed">{L(A.metiersLead)}</p>
            <p className="mt-4 text-brand-ink-secondary leading-relaxed">{L(A.metiersText)}</p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
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

          <div className="mt-10 flex justify-center">
            <Link
              href="/secteurs"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {L(A.metiersCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 06 — Une méthode claire */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
              {L(A.methodeTitleL1)}
              <br />
              {L(A.methodeTitleL2)}
            </h2>
            <p className="mt-4 text-brand-ink-secondary leading-relaxed">{L(A.methodeLead)}</p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {A.methodeSteps.map((step, i) => {
              const photo = ["prepare", "construire", "reussir"][i];
              const photoAlt = [
                "Préparation du projet et évaluation du profil avec un conseiller Karriere Fähre",
                "Construction du dossier de candidature et coaching avant les entretiens",
                "Préparation au départ et à l'intégration professionnelle en Allemagne",
              ][i];
              return (
                <div
                  key={step.num}
                  className="animate-fade-up flex flex-col overflow-hidden rounded-2xl bg-brand-white shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={`/images/pourquoi/${photo}.jpg`}
                      alt={photoAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-black/70 font-serif text-lg text-brand-gold-light backdrop-blur-sm">
                      {step.num}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-serif text-xl text-brand-black">{L(step.title)}</h3>
                    <ul className="mt-5 space-y-3">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check
                            size={18}
                            strokeWidth={2}
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-brand-gold-text"
                          />
                          <span className="text-brand-ink-secondary leading-relaxed">{L(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load-bearing: what KF does and does not guarantee */}
          <div className="mx-auto mt-10 max-w-3xl rounded-lg border-l-4 border-brand-gold bg-brand-gold/10 p-5">
            <p className="text-sm text-brand-ink-secondary leading-relaxed">{L(A.methodeDisclaimer)}</p>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/a-propos/methode"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {L(A.methodeCta)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 07 — L'équipe et nos engagements */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {L(A.equipeKicker)}
          </p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
            {L(A.equipeTitle)}
          </h2>
          <p className="mt-4 text-brand-ink-secondary leading-relaxed">{L(A.equipeText1)}</p>
          <p className="mt-4 text-brand-ink-secondary leading-relaxed">{L(A.equipeText2)}</p>

          <div className="mt-10 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[26rem]">
              <Image
                src="/images/pourquoi/equipe.jpg"
                alt="L'équipe de Karriere Fähre à Douala"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex h-full flex-col">
              <p className="font-serif text-lg text-brand-black">{L(A.equipeEngagementsIntro)}</p>
              <ul className="mt-6 space-y-4">
                {A.equipeEngagements.map((e, i) => {
                  const body = L(e.body);
                  const sep = locale === "fr" ? " : " : ": ";
                  return (
                    <li key={i} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                      />
                      <p className="text-brand-ink-secondary leading-relaxed">
                        <span className="font-bold text-brand-black">{L(e.title)}</span>
                        {sep}
                        {body.charAt(0).toLowerCase() + body.slice(1)}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/a-propos"
                className="press mt-8 inline-flex h-[54px] w-fit items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black lg:mt-auto lg:pt-0"
              >
                {L(A.equipeCta)}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 08 — Appel à l'action final */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {L(A.finalKicker)}
          </p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug text-balance">
            {L(A.finalTitle)}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-brand-ink-secondary leading-relaxed">
            {L(A.finalText)}
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-brand-white p-7 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5">
            <h3 className="font-serif text-xl text-brand-black">{L(A.finalStepTitle)}</h3>
            <p className="mt-3 text-brand-ink-secondary leading-relaxed">{L(A.finalStepText)}</p>
            <Link
              href="/evaluation"
              className="press mt-6 inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {L(A.finalCtaEvaluer)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <p className="mt-8 text-brand-ink-secondary">
            {L(A.finalEntrepriseLead)}{" "}
            <Link
              href="/entreprises/demande-recrutement"
              className="font-semibold text-brand-gold-text underline underline-offset-4 hover:no-underline"
            >
              {L(A.finalEntrepriseLink)}
            </Link>
          </p>
        </div>
      </section>

    </div>
  );
}
