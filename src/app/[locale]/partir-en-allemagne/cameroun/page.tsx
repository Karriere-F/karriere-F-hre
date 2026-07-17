import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { getPathname } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.partirCameroun;

export const generateMetadata = () =>
  metadataFromNamespace("partirCameroun", "/partir-en-allemagne/cameroun");

export default async function PartirCamerounPage() {
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("partirCameroun");

  const eligibiliteHref = `${getPathname({ href: "/candidats", locale })}#eligibilite`;
  const contactHref = getPathname({ href: "/contact", locale });

  const etapes = [
    [content.etape1Title, content.etape1Body],
    [content.etape2Title, content.etape2Body],
    [content.etape3Title, content.etape3Body],
    [content.etape4Title, content.etape4Body],
  ];

  const roles = [content.role1, content.role2, content.role3, content.role4, content.role5];

  return (
    <div>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: tNav("partir"), pathname: "/partir-en-allemagne" },
          { name: content.title, pathname: "/partir-en-allemagne/cameroun" },
        ]}
      />

      <PageHero title={content.title} subtitle={content.subtitle} />

      {/* Avantage : présence locale */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-widest text-brand-gold-light font-semibold mb-2">
            {content.avantageEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 max-w-2xl">{content.avantageTitle}</h2>
          <p className="text-brand-white/75 max-w-2xl mb-3">{content.avantageBody1}</p>
          <p className="text-brand-white/60 text-sm max-w-2xl">{content.avantageBody2}</p>
        </div>
      </section>

      {/* Parcours */}
      <AnchorSection
        id="parcours"
        white
        eyebrow={content.parcoursEyebrow}
        title={content.parcoursTitle}
      >
        <ol className="space-y-4 max-w-3xl">
          {etapes.map(([title, body], i) => (
            <li
              key={title}
              className="animate-fade-up flex gap-5 rounded-xl border border-brand-grid bg-brand-card p-6"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="shrink-0 h-10 w-10 rounded-lg bg-brand-gold text-brand-black font-serif font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif text-lg text-brand-black mb-1">{title}</h3>
                <p className="text-sm text-brand-ink-secondary">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </AnchorSection>

      {/* Visa depuis le Cameroun */}
      <AnchorSection
        id="visa"
        eyebrow={content.visaEyebrow}
        title={content.visaTitle}
      >
        <div className="max-w-3xl">
          <p className="text-brand-ink-secondary mb-3">{content.visaBody1}</p>
          <p className="text-brand-ink-secondary mb-4">{content.visaBody2}</p>
          {/* Load-bearing: official procedure, decision belongs to the German embassy. */}
          <div className="rounded-lg border-l-4 border-brand-gold bg-brand-gold/10 p-5">
            <p className="text-sm text-brand-ink-secondary">{content.visaNote}</p>
          </div>
        </div>
      </AnchorSection>

      {/* Notre rôle sur place */}
      <AnchorSection id="notre-role" white eyebrow={content.roleEyebrow} title={content.roleTitle}>
        <ul className="grid gap-3 sm:grid-cols-2 max-w-3xl">
          {roles.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-brand-ink-secondary rounded-lg border border-brand-grid bg-brand-card p-4"
            >
              <span className="text-brand-gold-text font-bold shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </AnchorSection>

      {/* CTA final */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-serif max-w-xl">{content.finalTitle}</h2>
          <p className="text-brand-white/80 max-w-lg">{content.finalText}</p>
          <a
            href={eligibiliteHref}
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.finalCta}
          </a>
          <p className="text-sm text-brand-white/50 mt-4">
            {content.contactNote}{" "}
            <a href={contactHref} className="text-brand-gold-light hover:underline font-medium">
              {content.contactCta}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
