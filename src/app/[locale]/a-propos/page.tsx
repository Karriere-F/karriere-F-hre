import Image from "next/image";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { SubNavLinks } from "@/components/marketing/sub-nav-links";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type AProposContent = typeof frMessages.aPropos;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("aPropos");
  return buildMetadata({
    pathname: "/a-propos",
    locale,
    title: t("title"),
    description: t("intro"),
  });
}

export default async function AProposPage() {
  const t = await getTranslations("aPropos");
  const tFaq = await getTranslations("aProposFaq");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<AProposContent>("aPropos");

  const faqItems = [1, 2, 3, 4, 5].map((i) => ({
    q: tFaq(`q${i}` as "q1"),
    a: tFaq(`a${i}` as "a1"),
  }));

  const distingue = [
    [content.dist1Title, content.dist1Body],
    [content.dist2Title, content.dist2Body],
    [content.dist3Title, content.dist3Body],
    [content.dist4Title, content.dist4Body],
  ];

  const equipe = [
    { role: content.equipe1Role },
    { role: content.equipe2Role },
    { role: content.equipe3Role },
  ];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("aPropos"), pathname: "/a-propos" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      <PageHero title={content.title} subtitle={content.intro} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-up mb-16">
          <h2 className="text-xl font-serif text-brand-black mb-3">{content.missionTitle}</h2>
          <p className="text-brand-ink-secondary leading-relaxed max-w-2xl">
            {content.missionBody}
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 items-center mb-16">
          <div
            className="animate-fade-up relative rounded-lg overflow-hidden aspect-[4/3]"
            style={{ animationDelay: "80ms" }}
          >
            <Image
              src="/images/about-founder.jpg"
              alt=""
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "140ms" }}>
            <h2 className="text-xl font-serif text-brand-black mb-3">{content.founderTitle}</h2>
            <p className="text-brand-ink-secondary leading-relaxed">{content.founderBody}</p>
          </div>
        </div>
        <SubNavLinks
          links={[
            { href: "/a-propos/notre-histoire", label: t("linkHistoire") },
            { href: "/a-propos/methode", label: t("linkMethode") },
            { href: "/partenaires", label: t("linkPartenaires") },
          ]}
        />
      </div>

      <div className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-xl font-serif text-brand-black mb-6">{content.valuesTitle}</h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {[content.value1, content.value2, content.value3].map((v, i) => (
              <li
                key={i}
                className="lift-on-hover animate-fade-up rounded-lg bg-brand-white border border-brand-grid p-5 text-brand-ink-secondary text-sm"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ce qui nous distingue */}
      <AnchorSection
        id="distingue"
        white
        eyebrow={content.distingueEyebrow}
        title={content.distingueTitle}
        lead={content.distingueLead}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {distingue.map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up rounded-lg border border-brand-grid bg-brand-card p-5"
              style={{ animationDelay: `${i * 60}ms` }}
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

      {/* Éthique */}
      <section id="ethique" className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-widest text-brand-gold-text font-semibold mb-2">
            {content.ethiqueEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-black mb-8 max-w-2xl">
            {content.ethiqueTitle}
          </h2>
          <div className="rounded-2xl border border-brand-gold bg-brand-gold/10 p-8 max-w-3xl">
            <h3 className="font-serif text-lg text-brand-black mb-3">{content.ethiqueHeading}</h3>
            <p className="text-sm text-brand-ink-secondary mb-3">{content.ethiqueBody1}</p>
            <p className="text-sm text-brand-ink-secondary mb-4">{content.ethiqueBody2}</p>
            <p className="text-xs text-brand-ink-muted italic">{content.ethiqueNote}</p>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <AnchorSection
        id="equipe"
        eyebrow={content.equipeEyebrow}
        title={content.equipeTitle}
        lead={content.equipeLead}
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {equipe.map((member, i) => (
            <div
              key={member.role}
              className="animate-fade-up rounded-xl border border-brand-grid bg-brand-white p-6 text-center"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-brand-black text-brand-gold-light font-serif text-xl flex items-center justify-center">
                KF
              </div>
              <p className="text-brand-gold-text text-xs font-semibold mb-1">{member.role}</p>
              <p className="text-sm text-brand-ink-muted italic">{content.equipePlaceholder}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-brand-ink-muted italic mt-8">{content.equipeNote}</p>
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

      {/* Two doors */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif max-w-xl">{content.doorsTitle}</h2>
          <p className="text-brand-white/80 max-w-lg">{content.doorsText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/candidats"
              className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
            >
              {content.doorsCandidat}
            </Link>
            <Link
              href="/entreprises"
              className="press rounded-full border border-brand-white/30 px-6 py-3 text-brand-white/80 hover:border-brand-gold-light hover:text-brand-gold-light transition-colors duration-150"
            >
              {content.doorsEntreprise}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
