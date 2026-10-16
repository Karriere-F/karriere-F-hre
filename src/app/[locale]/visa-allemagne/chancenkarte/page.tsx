import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { CoursAllemandCta } from "@/components/marketing/cours-allemand-cta";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.visaChancenkarte;

export const generateMetadata = () =>
  metadataFromNamespace("visaChancenkarte", "/visa-allemagne/chancenkarte");

export default async function ChancenkartePage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("visaChancenkarte");

  const quoi = [
    [content.quoi1Title, content.quoi1Body],
    [content.quoi2Title, content.quoi2Body],
    [content.quoi3Title, content.quoi3Body],
  ];

  const base = [
    [content.base1Title, content.base1Body],
    [content.base2Title, content.base2Body],
    [content.base3Title, content.base3Body],
  ];

  // Point values from § 20a AufenthG, sourced + attributed in pointsNote. These stay in
  // the CMS registry so they can be refreshed if the law's schedule changes.
  const points = [
    [content.p1Label, content.p1Val],
    [content.p2Label, content.p2Val],
    [content.p3Label, content.p3Val],
    [content.p4Label, content.p4Val],
    [content.p5Label, content.p5Val],
    [content.p6Label, content.p6Val],
    [content.p7Label, content.p7Val],
    [content.p8Label, content.p8Val],
    [content.p9Label, content.p9Val],
    [content.p10Label, content.p10Val],
    [content.p11Label, content.p11Val],
    [content.p12Label, content.p12Val],
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("visa"), pathname: "/visa-allemagne" },
          { name: content.title, pathname: "/visa-allemagne/chancenkarte" },
        ]}
      />

      {/* Hero — titre pleine largeur, photo entière fondue à droite */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:pt-16 lg:pb-4">
          <h1 className="animate-fade-up font-serif text-3xl lg:text-[2.1rem] xl:text-[2.6rem] text-brand-black leading-tight lg:whitespace-nowrap">
            {content.title}
          </h1>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
            <div>
              <p className="animate-fade-up text-lg text-brand-ink-secondary leading-relaxed text-justify [hyphens:none] lg:mt-10" style={{ animationDelay: "80ms" }}>
                {content.subtitle}
              </p>
            </div>
            <div className="animate-fade-up relative lg:-mr-16 xl:-mr-28" style={{ animationDelay: "120ms" }}>
              <Image
                src="/images/chancenkarte-hero.webp"
                alt="Une candidate brandit sa Chancenkarte devant la porte de Brandebourg à Berlin"
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

      {/* C'est quoi */}
      <AnchorSection
        id="c-est-quoi"
        white
        full
        eyebrow={content.quoiEyebrow}
        title={content.quoiTitle}
        lead={content.quoiLead}
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {quoi.map(([title, body], i) => (
            <div
              key={title}
              className="group animate-fade-up rounded-2xl bg-brand-card p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(17,17,17,0.1)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="font-serif text-lg text-brand-black mb-2">{title}</h3>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Conditions de base */}
      <AnchorSection
        id="conditions"
        wide
        eyebrow={content.baseEyebrow}
        title={content.baseTitle}
        lead={content.baseLead}
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {base.map(([title, body], i) => (
            <div
              key={title}
              className="group animate-fade-up flex gap-3 rounded-2xl bg-brand-white p-6 shadow-[0_6px_24px_rgba(17,17,17,0.05)] ring-1 ring-brand-black/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(17,17,17,0.1)] hover:ring-2 hover:ring-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-brand-gold-text font-bold shrink-0">✓</span>
              <div>
                <h4 className="text-brand-black font-medium text-sm mb-1">{title}</h4>
                <p className="text-sm text-brand-ink-secondary">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Système à points */}
      <AnchorSection
        id="points"
        white
        full
        eyebrow={content.pointsEyebrow}
        title={content.pointsTitle}
        lead={content.pointsLead}
      >
        <div className="max-w-3xl overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-brand-grid bg-brand-card p-3 text-left font-serif font-semibold text-brand-black">
                  {content.pointsCol1}
                </th>
                <th className="border border-brand-grid bg-brand-card p-3 text-center font-serif font-semibold text-brand-black w-20">
                  {content.pointsCol2}
                </th>
              </tr>
            </thead>
            <tbody>
              {points.map(([label, value], i) => (
                <tr key={i}>
                  <td className="border border-brand-grid p-3 text-brand-ink-secondary">{label}</td>
                  <td className="border border-brand-grid p-3 text-center font-serif font-bold text-brand-gold-text">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-brand-ink-muted max-w-5xl italic">{content.pointsNote}</p>
      </AnchorSection>

      {/* Notre rôle */}
      <AnchorSection id="notre-role" full eyebrow={content.roleEyebrow} title={content.roleTitle}>
        <div>
          <p className="text-lg text-brand-ink-secondary mb-6 leading-relaxed">{content.roleBody}</p>
          <Link
            href="/postuler"
            className="press inline-flex rounded-full border border-brand-gold px-6 py-3 text-brand-gold-text font-medium transition-colors duration-150 hover:bg-brand-gold hover:text-brand-black active:bg-brand-gold active:text-brand-black"
          >
            {content.roleCta}
          </Link>
        </div>

        {/* Load-bearing: official German criteria, not a Karriere Fähre promise. */}
        <div className="mt-8 rounded-lg border-l-4 border-brand-gold bg-brand-gold/10 p-5 max-w-5xl">
          <p className="text-sm text-brand-ink-secondary">{content.disclaimer}</p>
        </div>
      </AnchorSection>

      {/* CTA final */}
      <section className="bg-brand-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="max-w-4xl font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">{content.finalTitle}</h2>
          <p className="max-w-3xl text-lg text-brand-ink-secondary leading-relaxed">{content.finalText}</p>
          <Link
            href="/postuler"
            className="press rounded-full border border-brand-gold px-6 py-3 text-brand-gold-text font-bold hover:bg-brand-gold hover:text-brand-black transition-colors duration-150"
          >
            {content.finalCta}
          </Link>
        </div>
      </section>

      <CoursAllemandCta locale={locale} />
    </div>
  );
}
