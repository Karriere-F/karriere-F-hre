import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@i18n/navigation";
import { StepPanel } from "@/components/ausbildung/step-panel";
import { SECTORS_ALL } from "@/lib/secteurs";
import { tr } from "@/lib/localized";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.ausbildung;
type Href = React.ComponentProps<typeof Link>["href"];

export const generateMetadata = () => metadataFromNamespace("ausbildung", "/ausbildung-allemagne");

function GoldCta({ href, label }: { href: Href; label: string }) {
  return (
    <Link
      href={href}
      className="press mt-8 inline-flex h-[52px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
    >
      {label}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}

export default async function AusbildungHubPage() {
  const t = await getTranslations("ausbildung");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("ausbildung");
  const h = content.hub;

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/ausbildung-allemagne" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] lg:block">
          <Image
            src="/images/ausbildung-hero.jpg"
            alt="Un étudiant en pleine composition dans une salle de classe, formation Ausbildung en Allemagne"
            fill
            priority
            sizes="60vw"
            className="object-cover object-[58%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/15 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-white to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-white to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-14 lg:flex lg:min-h-[540px] lg:max-w-3xl lg:flex-col lg:justify-start lg:pt-14 lg:pb-20">
            <h1 className="animate-fade-up font-serif text-4xl sm:text-5xl text-brand-black leading-[1.08]">
              {h.heroTitle.split(/(?<=\.)\s+/).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p
              className="animate-fade-up mt-6 lg:mt-12 max-w-2xl text-justify text-brand-ink-secondary leading-relaxed whitespace-normal lg:whitespace-pre-line"
              style={{ animationDelay: "80ms" }}
            >
              {h.heroSubtitle}
            </p>
            <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "140ms" }}>
              <Link
                href="/ausbildung-allemagne/evaluation"
                className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
              >
                {h.heroPrimary}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/secteurs"
                className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
              >
                {h.heroSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 01 → 05 — the Ausbildung journey, as refined animated step cards */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <ol className="space-y-6 sm:space-y-7">
            {/* 01 — Choose a trade — text left, sectors in a single column on the right */}
            <StepPanel
              num={h.s1Num}
              kicker={h.s1Kicker}
              title={h.s1Title}
              intro={h.s1Text}
              introClassName="text-justify"
              cta={<GoldCta href="/secteurs" label={h.s1Cta} />}
              ctaBottom
              gridCols="lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
              aside={
                <ul className="space-y-3.5">
                  {SECTORS_ALL.map((s) => (
                    <li
                      key={s.slug}
                      className="flex items-center gap-3 font-serif text-lg text-brand-gold-text"
                    >
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-black" />
                      {tr(s.name, locale)}
                    </li>
                  ))}
                </ul>
              }
            />

            {/* 02 — Prepare — full width, the dossier steps as one horizontal flow line */}
            <StepPanel
              num={h.s2Num}
              kicker={h.s2Kicker}
              title={h.s2Title}
              intro={h.s2Text}
              introClassName="text-justify"
              footer={
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2.5">
                    {h.s2Flow.map((step, i) => (
                      <span key={step} className="flex items-center gap-3">
                        {i > 0 && (
                          <ArrowRight size={16} aria-hidden="true" className="text-brand-gold/50" />
                        )}
                        <span className="font-serif text-lg text-brand-gold-text">{step}</span>
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 max-w-2xl text-sm text-brand-ink-secondary leading-relaxed">
                    {h.s2Note}
                  </p>
                  <GoldCta href="/evaluation" label={h.s2Cta} />
                </div>
              }
            />

            {/* 03 — Learn and work — full-width title, sub-steps on the right below it */}
            <StepPanel
              num={h.s3Num}
              kicker={h.s3Kicker}
              title={
                h.s3Title.includes("rapidement") && h.s3Title.includes("professionnel") ? (
                  <>
                    {h.s3Title.slice(0, h.s3Title.indexOf("rapidement"))}
                    <br />
                    {h.s3Title.slice(h.s3Title.indexOf("rapidement"), h.s3Title.indexOf("professionnel"))}
                    <br />
                    {h.s3Title.slice(h.s3Title.indexOf("professionnel"))}
                  </>
                ) : (
                  h.s3Title
                )
              }
              cta={<GoldCta href="/ausbildung-allemagne/conditions" label={h.s3Cta} />}
              ctaBottom
              gridCols="lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
              aside={
                <ul className="space-y-4">
                  {h.s3Steps.map((s) => (
                    <li key={s.label} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-black"
                      />
                      <div>
                        <h4 className="font-serif text-lg text-brand-gold-text">{s.label}</h4>
                        <p className="mt-0.5 text-sm text-brand-ink-secondary leading-relaxed">{s.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              }
            />

            {/* 04 — Paid */}
            <StepPanel
              num={h.s4Num}
              kicker={h.s4Kicker}
              title={
                h.s4Title.includes("en travaillant") ? (
                  <>
                    {h.s4Title.slice(0, h.s4Title.indexOf("en travaillant"))}
                    <br />
                    {h.s4Title.slice(h.s4Title.indexOf("en travaillant"))}
                  </>
                ) : (
                  h.s4Title
                )
              }
              intro={h.s4Text}
              introClassName="text-justify"
              cta={<GoldCta href="/ausbildung-allemagne/conditions" label={h.s4Cta} />}
              ctaBottom
              aside={
                <div className="max-w-sm lg:ml-auto">
                  <div className="overflow-hidden rounded-xl border border-brand-grid bg-brand-white">
                    <table className="w-full border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-brand-grid bg-brand-card text-left">
                          <th className="px-3.5 py-2.5 font-semibold text-brand-black">{h.s4ColYear}</th>
                          <th className="px-3.5 py-2.5 text-right font-semibold text-brand-black">{h.s4ColAmount}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {h.s4Rows.map((r) => (
                          <tr key={r.year} className="border-b border-brand-grid/60 last:border-0">
                            <td className="px-3.5 py-2.5 text-brand-ink-secondary">{r.year}</td>
                            <td className="px-3.5 py-2.5 text-right font-semibold text-brand-black">{r.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-xs text-brand-ink-muted leading-relaxed">{h.s4Note}</p>
                  <p className="mt-2 text-xs text-brand-ink-muted">
                    <a
                      href="https://www.arbeitsagentur.de/arbeiten-in-deutschland/ausbildung-in-deutschland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-brand-gold-text"
                    >
                      {h.s4Source}
                    </a>
                  </p>
                </div>
              }
            />

            {/* 05 — Recognised trade */}
            <StepPanel
              num={h.s5Num}
              kicker={h.s5Kicker}
              title={
                h.s5Title.includes("expérience") ? (
                  <>
                    {h.s5Title.slice(0, h.s5Title.indexOf("expérience"))}
                    <br />
                    {h.s5Title.slice(h.s5Title.indexOf("expérience"))}
                  </>
                ) : (
                  h.s5Title
                )
              }
              intro={h.s5Text}
              introClassName="text-justify"
              cta={<GoldCta href="/ausbildung-allemagne/apres-ausbildung" label={h.s5Cta} />}
            />
          </ol>
        </div>
      </section>

      {/* FAQ — title + blended photo on the left, questions aligned at the top-right */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black text-balance leading-snug">
              {h.faqTitle}
            </h2>
            <div className="mt-8">
              {h.faq.map((f) => (
                <details key={f.q} className="group border-b border-brand-grid py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-brand-black [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-brand-gold-text transition-transform duration-200 group-open:rotate-90"
                    />
                  </summary>
                  <p className="mt-3 text-sm text-brand-ink-secondary leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — Converter */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.finalTitle}</h2>
          <p className="mt-4 text-brand-ink-secondary leading-relaxed">{h.finalText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/ausbildung-allemagne/evaluation"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {h.finalPrimary}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/parcours"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {h.finalSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* 09 — CTA cours d'allemand */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
            {tr({ fr: "L'allemand, la clé de votre réussite", de: "Deutsch, der Schlüssel zu Ihrem Erfolg", en: "German, the key to your success" }, locale)}
          </p>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">
            {tr({ fr: "Une Ausbildung se vit et se réussit en allemand.", de: "Eine Ausbildung lebt und gelingt auf Deutsch.", en: "An Ausbildung is lived and succeeds in German." }, locale)}
          </h2>
          <p className="mt-5 text-lg text-brand-ink-secondary leading-relaxed">
            {tr(
              {
                fr: "La formation en alternance, en entreprise comme à l'école professionnelle, se déroule en allemand. Préparez-vous avec nos parcours de langue, du niveau débutant jusqu'au niveau professionnel.",
                de: "Die duale Ausbildung findet im Betrieb wie in der Berufsschule auf Deutsch statt. Bereiten Sie sich mit unseren Sprachkursen vor, vom Anfänger bis zum Berufsniveau.",
                en: "Dual training, in the company and at the vocational school, takes place in German. Prepare with our language courses, from beginner to professional level.",
              },
              locale,
            )}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/cours-allemand"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {tr({ fr: "Découvrir nos cours d'allemand", de: "Unsere Deutschkurse entdecken", en: "Discover our German courses" }, locale)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/cours-allemand/test-niveau"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors duration-200 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
            >
              {tr({ fr: "Tester mon niveau", de: "Mein Niveau testen", en: "Test my level" }, locale)}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
