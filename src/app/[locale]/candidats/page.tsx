import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { ComparisonTable } from "@/components/marketing/comparison-table";
import { SubNavLinks } from "@/components/marketing/sub-nav-links";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.candidats;
type FormationsContent = typeof frMessages.formations;

export const generateMetadata = () => metadataFromNamespace("candidats", "/candidats");

export default async function CandidatsPage() {
  const t = await getTranslations("candidats");
  const tFormations = await getTranslations("formations");
  const tFaq = await getTranslations("candidatsFaq");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("candidats");
  const formations = await getPageContent<FormationsContent>("formations");


  const faqItems = [1, 2, 3, 4, 5, 6].map((i) => ({
    q: tFaq(`q${i}` as "q1"),
    a: tFaq(`a${i}` as "a1"),
  }));

  const voies = [
    {
      title: content.voie1Title,
      sub: content.voie1Sub,
      body: content.voie1Body,
      tags: [content.voie1Tag1, content.voie1Tag2, content.voie1Tag3],
    },
    {
      flag: content.voie2Flag,
      title: content.voie2Title,
      sub: content.voie2Sub,
      body: content.voie2Body,
      tags: [content.voie2Tag1, content.voie2Tag2, content.voie2Tag3],
      reco: true,
    },
    {
      title: content.voie3Title,
      sub: content.voie3Sub,
      body: content.voie3Body,
      tags: [content.voie3Tag1, content.voie3Tag2, content.voie3Tag3],
    },
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("candidats"), pathname: "/candidats" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      <PageHero title={content.title} subtitle={content.subtitle} image="/images/services-candidates.jpg" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8 mb-4">
        <div className="flex flex-wrap gap-4">
          <a
            href="#eligibilite"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaEligibility}
          </a>
          <a
            href="#voies"
            className="press rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.ctaVoies}
          </a>
        </div>
      </div>

      {/* Les 3 voies */}
      <AnchorSection
        id="voies"
        white
        eyebrow={content.voiesEyebrow}
        title={content.voiesTitle}
        lead={content.voiesLead}
      >
        <div className="grid gap-6 sm:grid-cols-3 mb-10">
          {voies.map((v, i) => (
            <div
              key={v.title}
              className={`animate-fade-up relative rounded-xl border p-6 ${
                v.reco ? "border-brand-gold shadow-md" : "border-brand-grid"
              } bg-brand-card`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {v.flag && (
                <span className="absolute -top-3 left-6 rounded-full bg-brand-gold text-brand-black text-xs font-bold px-3 py-1">
                  {v.flag}
                </span>
              )}
              <h3 className="font-serif text-lg text-brand-black">{v.title}</h3>
              <p className="text-brand-gold-text text-xs font-semibold mb-3">{v.sub}</p>
              <p className="text-sm text-brand-ink-secondary mb-3">{v.body}</p>
              <ul className="text-xs text-brand-ink-secondary space-y-1">
                {v.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ComparisonTable
          columns={[content.tableCriterion, content.tableCol1, content.tableCol2, content.tableCol3]}
          rows={[
            { label: content.tableRow1Label, values: [content.tableRow1Val1, content.tableRow1Val2, content.tableRow1Val3] },
            { label: content.tableRow2Label, values: [content.tableRow2Val1, content.tableRow2Val2, content.tableRow2Val3] },
            { label: content.tableRow3Label, values: [content.tableRow3Val1, content.tableRow3Val2, content.tableRow3Val3] },
            { label: content.tableRow4Label, values: [content.tableRow4Val1, content.tableRow4Val2, content.tableRow4Val3] },
            { label: content.tableRow5Label, values: [content.tableRow5Val1, content.tableRow5Val2, content.tableRow5Val3] },
            { label: content.tableRow6Label, values: [content.tableRow6Val1, content.tableRow6Val2, content.tableRow6Val3] },
          ]}
        />
        <p className="text-xs text-brand-ink-muted mt-4 max-w-2xl">{content.tableNote}</p>
      </AnchorSection>

      {/* Éligibilité + quiz */}
      <AnchorSection
        id="eligibilite"
        eyebrow={content.eligibiliteEyebrow}
        title={content.eligibiliteTitle}
        lead={content.eligibiliteLead}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [content.crit1Title, content.crit1Body],
            [content.crit2Title, content.crit2Body],
            [content.crit3Title, content.crit3Body],
            [content.crit4Title, content.crit4Body],
          ].map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up rounded-lg border border-brand-grid bg-brand-white p-5"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h4 className="text-brand-black font-medium mb-1">{title}</h4>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/book-appointment"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaEval}
          </Link>
        </div>
      </AnchorSection>

      {/* Accompagnement 360 */}
      <AnchorSection
        id="accompagnement"
        white
        eyebrow={content.accompagnementEyebrow}
        title={content.accompagnementTitle}
        lead={content.accompagnementLead}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [content.acc1Title, content.acc1Body],
            [content.acc2Title, content.acc2Body],
            [content.acc3Title, content.acc3Body],
            [content.acc4Title, content.acc4Body],
            [content.acc5Title, content.acc5Body],
            [content.acc6Title, content.acc6Body],
            [content.acc7Title, content.acc7Body],
          ].map(([title, body], i) => (
            <div
              key={title}
              className={`lift-on-hover animate-fade-up relative rounded-lg border border-brand-grid bg-brand-card p-5 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
            >
              <span className="absolute top-3 right-4 font-serif text-2xl text-brand-gold/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="text-brand-black font-medium mb-1.5 max-w-[90%]">{title}</h4>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Formations */}
      <AnchorSection
        id="formations"
        white
        eyebrow={content.formationsEyebrow}
        title={content.formationsTitle}
        lead={content.formationsLead}
      >
        <div className="grid gap-6 sm:grid-cols-2 mb-6">
          <div className="lift-on-hover animate-fade-up rounded-lg border border-brand-grid p-8 bg-brand-card">
            <h3 className="text-xl font-serif text-brand-black mb-3">{formations.fastTrack.title}</h3>
            <p className="text-brand-ink-secondary leading-relaxed mb-6">{formations.fastTrack.body}</p>
            <Link
              href="/candidate/signup"
              className="press inline-flex rounded-full border border-brand-gold px-5 py-2.5 text-brand-gold-text hover:bg-brand-gold hover:text-brand-white transition-colors duration-150 text-sm"
            >
              {formations.fastTrack.title}
            </Link>
          </div>
          <div
            className="lift-on-hover animate-fade-up rounded-lg bg-brand-black text-brand-white p-8"
            style={{ animationDelay: "80ms" }}
          >
            <h3 className="text-xl font-serif mb-3">{formations.fullTraining.title}</h3>
            <p className="text-brand-white/75 leading-relaxed mb-6">{formations.fullTraining.body}</p>
            {/* The level-by-level breakdown and the exam bodies used to be repeated here.
                They now live only on /cours-allemand -- two pages spelling out the same
                A1→B2 path would compete for the same query. This stays a teaser. */}
            <Link
              href="/cours-allemand"
              className="press inline-flex rounded-full border border-brand-gold-light px-5 py-2.5 text-brand-gold-light hover:bg-brand-gold-light hover:text-brand-black transition-colors duration-150 text-sm"
            >
              {tFormations("linkAllemand")}
            </Link>
          </div>
        </div>
        <p className="text-brand-ink-muted text-sm mb-8">{formations.pricingNote}</p>
        <SubNavLinks
          links={[
            { href: "/cours-allemand", label: tFormations("linkAllemand") },
            { href: "/cours-allemand/preparation-examens", label: tFormations("linkExamens") },
            { href: "/candidats/formations/integration", label: tFormations("linkIntegration") },
            { href: "/candidats/reconnaissance-diplomes", label: t("linkDiplomes") },
            { href: "/candidats/vivre-en-allemagne", label: t("linkVivre") },
          ]}
        />
      </AnchorSection>

      {/* Blog preview */}
      <AnchorSection
        id="blog"
        eyebrow={content.blogEyebrow}
        title={content.blogTitle}
        lead={content.blogLead}
      >
        <BlogTeaser locale={locale} />
      </AnchorSection>

      {/* FAQ */}
      <AnchorSection id="faq" white eyebrow={content.faqEyebrow} title={content.faqTitle}>
        <div className="max-w-3xl space-y-4">
          {faqItems.map((item, i) => (
            <details
              key={item.q}
              className="animate-fade-up group rounded-lg border border-brand-grid bg-brand-card p-5"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <summary className="cursor-pointer text-brand-black font-medium marker:content-none flex items-center justify-between gap-4">
                {item.q}
                <span className="text-brand-gold-text transition-transform duration-150 group-open:rotate-45 shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-3 text-brand-ink-secondary leading-relaxed text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </AnchorSection>

      {/* Final CTA */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif max-w-xl">{content.finalTitle}</h2>
          <p className="text-brand-white/80 max-w-lg">{content.finalText}</p>
          <Link
            href="/candidate/signup"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.finalCta}
          </Link>
        </div>
      </section>
    </div>
  );
}

async function BlogTeaser({ locale }: { locale: Locale }) {
  const t = await getTranslations("blog");
  return (
    <div className="rounded-lg border border-brand-grid bg-brand-card p-8 text-center">
      <p className="text-brand-ink-muted text-sm mb-4">{t("comingSoon")}</p>
      <Link
        href="/blog"
        className="press inline-flex rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
      >
        {locale === "de" ? "Zum Blog" : locale === "en" ? "Go to blog" : "Voir le blog"}
      </Link>
    </div>
  );
}
