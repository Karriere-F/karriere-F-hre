import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import { OCCUPATION_CATEGORIES, categoryLabel } from "@/lib/occupation-categories";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.entreprises;

export const generateMetadata = () => metadataFromNamespace("entreprises", "/entreprises");

export default async function EntreprisesPage() {
  const t = await getTranslations("entreprises");
  const tFaq = await getTranslations("entreprisesFaq");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("entreprises");

  const faqItems = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
    q: tFaq(`q${i}` as "q1"),
    a: tFaq(`a${i}` as "a1"),
  }));

  const keyFacts = [
    { big: content.kf1Big, label: content.kf1Label },
    { big: content.kf2Big, label: content.kf2Label },
    { big: content.kf3Big, label: content.kf3Label },
    { big: content.kf4Big, label: content.kf4Label },
  ];

  const segments = [
    [content.seg1Title, content.seg1Body],
    [content.seg2Title, content.seg2Body],
    [content.seg3Title, content.seg3Body],
    [content.seg4Title, content.seg4Body],
  ];

  const services = [
    ["A", content.srv1Title, content.srv1Body],
    ["B", content.srv2Title, content.srv2Body],
    ["C", content.srv3Title, content.srv3Body],
    ["D", content.srv4Title, content.srv4Body],
  ];

  const processSteps = [
    [content.proc1Title, content.proc1Body],
    [content.proc2Title, content.proc2Body],
    [content.proc3Title, content.proc3Body],
    [content.proc4Title, content.proc4Body],
    [content.proc5Title, content.proc5Body],
    [content.proc6Title, content.proc6Body],
    [content.proc7Title, content.proc7Body],
  ];

  const cadrePillars = [
    [content.cadre1Title, content.cadre1Body],
    [content.cadre2Title, content.cadre2Body],
    [content.cadre3Title, content.cadre3Body],
  ];

  const garanties = [
    [content.gar1Title, content.gar1Body],
    [content.gar2Title, content.gar2Body],
    [content.gar3Title, content.gar3Body],
    [content.gar4Title, content.gar4Body],
    [content.gar5Title, content.gar5Body],
    [content.gar6Title, content.gar6Body],
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("entreprises"), pathname: "/entreprises" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      <PageHero title={content.title} subtitle={content.subtitle} image="/images/services-companies.jpg" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8 mb-4">
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.ctaContact}
          </a>
          <a
            href="#processus"
            className="press rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.ctaProcessus}
          </a>
        </div>
      </div>

      {/* Key facts */}
      <div className="bg-brand-black border-y border-brand-gold/25">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
          {keyFacts.map((f) => (
            <div key={f.label} className="px-4 py-6 text-center">
              <div className="font-serif text-2xl text-brand-gold-light">{f.big}</div>
              <div className="text-xs text-brand-white/60 mt-1">{f.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Problème */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold mb-2">
              {content.probEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif mb-4">{content.probTitle}</h2>
            <p className="text-brand-white/75 mb-3">{content.probBody1}</p>
            <p className="text-brand-white/75">{content.probBody2}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-brand-gold/30 bg-white/5 p-5">
              <div className="font-serif text-xl text-brand-gold-light">{content.probStat1Big}</div>
              <div className="text-sm text-brand-white/60">{content.probStat1Label}</div>
            </div>
            <div className="rounded-xl border border-brand-gold/30 bg-white/5 p-5">
              <div className="font-serif text-xl text-brand-gold-light">{content.probStat2Big}</div>
              <div className="text-sm text-brand-white/60">{content.probStat2Label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <AnchorSection
        id="pourquoi"
        white
        eyebrow={content.pourquoiEyebrow}
        title={content.pourquoiTitle}
        lead={content.pourquoiLead}
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            [content.pil1Title, content.pil1Body],
            [content.pil2Title, content.pil2Body],
            [content.pil3Title, content.pil3Body],
          ].map(([title, body], i) => (
            <div
              key={title}
              className="lift-on-hover animate-fade-up rounded-xl border border-brand-grid bg-brand-card p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="font-serif text-lg text-brand-black mb-2">{title}</h3>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Secteurs */}
      <AnchorSection
        id="secteurs"
        eyebrow={content.secteursEyebrow}
        title={content.secteursTitle}
        lead={content.secteursLead}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {segments.map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up rounded-xl border border-brand-grid bg-brand-white p-6"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h4 className="font-serif text-lg text-brand-black mb-1.5">{title}</h4>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Services */}
      <AnchorSection
        id="services"
        white
        eyebrow={content.servicesEyebrow}
        title={content.servicesTitle}
        lead={content.servicesLead}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([letter, title, body], i) => (
            <div
              key={title}
              className="animate-fade-up rounded-lg border border-brand-grid bg-brand-card p-5"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="h-9 w-9 rounded-lg bg-brand-gold text-brand-black font-serif font-bold flex items-center justify-center mb-3">
                {letter}
              </div>
              <h4 className="text-brand-black font-medium mb-1">{title}</h4>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Profils */}
      <AnchorSection
        id="profils"
        eyebrow={content.profilsEyebrow}
        title={content.profilsTitle}
        lead={content.profilsLead}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(OCCUPATION_CATEGORIES).map(([cat, def], i) => {
            const Icon = def.icon;
            return (
              <div
                key={cat}
                className="animate-fade-up rounded-lg border border-brand-grid bg-brand-white p-5 flex items-center gap-4"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <span className="shrink-0 h-11 w-11 rounded-full bg-brand-gold/15 text-brand-gold-text flex items-center justify-center">
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h4 className="text-brand-black font-medium text-sm">{categoryLabel(cat, locale)}</h4>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <Link
            href="/metiers"
            className="press inline-flex rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.profilsCta}
          </Link>
        </div>
      </AnchorSection>

      {/* Pourquoi Afrique centrale */}
      <section id="pourquoi-afrique" className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold mb-2">
            {content.pourquoiAfriqueEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 max-w-2xl">{content.pourquoiAfriqueTitle}</h2>
          <p className="text-brand-white/75 max-w-2xl mb-3">{content.pourquoiAfriqueBody1}</p>
          <p className="text-brand-white/60 text-sm max-w-2xl mb-6">{content.pourquoiAfriqueBody2}</p>
          <a
            href="#profils"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.pourquoiAfriqueCta}
          </a>
        </div>
      </section>

      {/* Modèles de collaboration */}
      <AnchorSection
        id="modeles"
        white
        eyebrow={content.modelesEyebrow}
        title={content.modelesTitle}
        lead={content.modelesLead}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-brand-grid bg-brand-card p-7">
            <span className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-brand-gold text-brand-black mb-3">
              {content.modele1Badge}
            </span>
            <h3 className="font-serif text-xl text-brand-black mb-2">{content.modele1Title}</h3>
            <p className="text-sm text-brand-ink-secondary mb-4">{content.modele1Body}</p>
            <ul className="text-sm text-brand-ink-secondary space-y-1.5">
              {[content.modele1Tag1, content.modele1Tag2, content.modele1Tag3].map((tag) => (
                <li key={tag} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-brand-black text-brand-white p-7">
            <span className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full border border-brand-gold text-brand-gold-light mb-3">
              {content.modele2Badge}
            </span>
            <h3 className="font-serif text-xl mb-2">{content.modele2Title}</h3>
            <p className="text-sm text-brand-white/75 mb-4">{content.modele2Body}</p>
            <ul className="text-sm text-brand-white/75 space-y-1.5">
              {[content.modele2Tag1, content.modele2Tag2, content.modele2Tag3].map((tag) => (
                <li key={tag} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold-light shrink-0 mt-1.5" />
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnchorSection>

      {/* Processus */}
      <AnchorSection
        id="processus"
        eyebrow={content.processusEyebrow}
        title={content.processusTitle}
        lead={content.processusLead}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up rounded-lg border border-brand-grid bg-brand-white p-5"
              style={{ animationDelay: `${Math.min(i, 6) * 40}ms` }}
            >
              <div className="h-8 w-8 rounded-lg bg-brand-gold text-brand-black font-serif font-bold text-sm flex items-center justify-center mb-3">
                {i + 1}
              </div>
              <h4 className="text-brand-black font-medium text-sm mb-1">{title}</h4>
              <p className="text-xs text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Cadre légal */}
      <AnchorSection
        id="cadre"
        white
        eyebrow={content.cadreEyebrow}
        title={content.cadreTitle}
        lead={content.cadreLead}
      >
        <div className="grid gap-6 sm:grid-cols-3 mb-6">
          {cadrePillars.map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up rounded-xl border border-brand-grid bg-brand-card p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="font-serif text-lg text-brand-black mb-2">{title}</h3>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border-l-4 border-brand-gold bg-brand-gold/10 p-5 max-w-3xl">
          <p className="text-sm text-brand-ink-secondary">{content.cadreNote}</p>
        </div>
      </AnchorSection>

      {/* Qui fait quoi */}
      <AnchorSection id="roles" eyebrow={content.rolesEyebrow} title={content.rolesTitle} lead={content.rolesLead}>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-brand-gold bg-brand-white p-6">
            <h4 className="font-serif text-lg text-brand-black mb-4">{content.rolesUsTitle}</h4>
            <ul className="text-sm text-brand-ink-secondary space-y-2.5">
              {[content.rolesUs1, content.rolesUs2, content.rolesUs3, content.rolesUs4, content.rolesUs5, content.rolesUs6].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-gold-text font-bold shrink-0">✓</span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="rounded-xl border border-brand-grid bg-brand-white p-6">
            <h4 className="font-serif text-lg text-brand-black mb-4">{content.rolesYouTitle}</h4>
            <ul className="text-sm text-brand-ink-secondary space-y-2.5">
              {[content.rolesYou1, content.rolesYou2, content.rolesYou3, content.rolesYou4].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-ink-muted shrink-0">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnchorSection>

      {/* Garanties */}
      <AnchorSection
        id="garanties"
        white
        eyebrow={content.garantiesEyebrow}
        title={content.garantiesTitle}
        lead={content.garantiesLead}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {garanties.map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up flex gap-3 rounded-lg border border-brand-grid bg-brand-card p-5"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="text-brand-gold-text font-bold shrink-0">✓</span>
              <div>
                <h4 className="text-brand-black font-medium text-sm mb-1">{title}</h4>
                <p className="text-xs text-brand-ink-secondary">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* Devenir partenaire */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-xs uppercase tracking-widest text-brand-gold-text font-semibold mb-2">
            {content.partenaireEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-black mb-4">{content.partenaireTitle}</h2>
          <p className="text-brand-ink-secondary mb-6">{content.partenaireLead}</p>
          <Link
            href="/entreprises/partenariat"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.partenaireCta}
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <AnchorSection id="faq" white eyebrow={content.faqEyebrow} title={content.faqTitle}>
        <div className="max-w-3xl space-y-4">
          {faqItems.map((item, i) => (
            <details
              key={item.q}
              className="animate-fade-up group rounded-lg border border-brand-grid bg-brand-card p-5"
              style={{ animationDelay: `${i * 30}ms` }}
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

      {/* Contact / Demande */}
      <section id="contact" className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold">
            {content.contactEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif max-w-xl">{content.contactTitle}</h2>
          <p className="text-brand-white/80 max-w-lg">{content.contactLead}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/employer/signup"
              className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
            >
              {content.contactCta}
            </Link>
            <Link
              href="/book-appointment"
              className="press rounded-full border border-brand-white/30 px-6 py-3 text-brand-white/80 hover:border-brand-gold-light hover:text-brand-gold-light transition-colors duration-150"
            >
              {content.contactCtaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
