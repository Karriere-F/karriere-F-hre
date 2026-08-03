import Image from "next/image";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
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
    { slug: "medecins", label: content.metierMedecins, alt: "Un médecin en blouse blanche, stéthoscope au cou, dans un hôpital allemand" },
    { slug: "infirmiers", label: content.metierInfirmiers, alt: "Une infirmière en tenue de soins dans un service hospitalier" },
    { slug: "personnel-sante", label: content.metierPersonnelSante, alt: "Un membre du personnel de santé en tenue blanche dans un service hospitalier" },
    { slug: "ingenieurs", label: content.metierIngenieurs, alt: "Une ingénieure casquée devant des plans et des écrans techniques" },
    { slug: "electriciens", label: content.metierElectriciens, alt: "Un électricien intervenant sur une armoire électrique" },
    { slug: "techniciens", img: "techniciens-v2", label: content.metierTechniciens, alt: "Un technicien devant une armoire électrique industrielle" },
    { slug: "btp", label: content.metierBtp, alt: "Un ouvrier du bâtiment sur un chantier de construction" },
    { slug: "hotellerie", img: "hotellerie-v2", label: content.metierHotellerie, alt: "Un serveur et une réceptionniste dans un établissement hôtelier" },
    { slug: "industrie", label: content.metierIndustrie, alt: "Une opératrice sur une machine-outil dans une usine" },
    { slug: "logistique", img: "logistique-v2", label: content.metierLogistique, alt: "Un agent logistique devant un camion en chargement dans un entrepôt" },
  ];

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
      {/* Section 1 — Hero: full-bleed image, text over a left gradient */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-black">
        <Image
          src="/images/parcours-allemagne.jpg"
          alt="Un technicien, une infirmière, un cadre, un ingénieur et un chef marchent vers une ville allemande au lever du soleil"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/92 via-brand-black/70 to-brand-black/25" />
        <div className="relative w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl">
            <h1
              className="animate-fade-up font-serif text-brand-white leading-[1.06] text-balance"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.025em" }}
            >
              {content.heroTitle}
            </h1>
            <p
              className="animate-fade-up mt-6 text-brand-white/85 text-base leading-relaxed text-justify [hyphens:none]"
              style={{ animationDelay: "80ms" }}
            >
              {content.heroSubtitle}
            </p>
            <p
              className="animate-fade-up mt-6 font-serif text-2xl text-brand-gold-light leading-snug text-balance"
              style={{ animationDelay: "120ms" }}
            >
              {content.heroClosing}
            </p>
          </div>
          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-4 sm:flex-nowrap"
            style={{ animationDelay: "160ms" }}
          >
            <Link
              href="/postuler"
              className="press whitespace-nowrap rounded-full bg-brand-gold px-7 py-3.5 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
            >
              {content.heroCtaStart}
            </Link>
            <Link
              href="/a-propos/methode"
              className="press whitespace-nowrap rounded-full bg-brand-gold px-7 py-3.5 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
            >
              {content.heroCtaDiscover}
            </Link>
          </div>
          <ul
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-x-8 gap-y-2.5 sm:flex-nowrap"
            style={{ animationDelay: "200ms" }}
          >
            {[content.heroTrust1, content.heroTrust2, content.heroTrust3].map((tm) => (
              <li
                key={tm}
                className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-brand-white/90"
              >
                <Check size={16} strokeWidth={3} aria-hidden="true" className="text-brand-gold-light" />
                {tm}
              </li>
            ))}
          </ul>
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
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
              {content.metiersTitle}
            </h2>
            <p className="mt-4 text-brand-ink-secondary leading-relaxed text-pretty">
              {content.metiersLead}
            </p>
          </div>

          <ul className="mt-10 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {metiers.map(({ slug, img, label, alt }, i) => (
              <li
                key={slug}
                className="animate-fade-up group relative aspect-[4/5] overflow-hidden rounded-xl"
                style={{ animationDelay: `${Math.min(i, 9) * 45}ms` }}
              >
                <Image
                  src={`/images/metiers/${img ?? slug}.jpg`}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover object-center transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/25 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 font-serif text-base sm:text-lg text-brand-white leading-tight">
                  {label}
                </h3>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-brand-ink-secondary/80">{content.metiersSource}</p>
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
