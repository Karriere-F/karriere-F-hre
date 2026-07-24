import { PageHero } from "@/components/marketing/page-hero";
import { AnchorSection } from "@/components/marketing/anchor-section";
import { Link, getPathname } from "@i18n/navigation";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.blogPartir;

// Rendered by /blog/categorie/[slug] for the "partir-en-allemagne" slug -- the blog's
// first developed piece. Generalized to Africa, with Cameroun as the concrete case.
export function PartirAfriqueArticle({
  content,
  locale,
}: {
  content: Content;
  locale: Locale;
}) {
  const contactHref = getPathname({ href: "/contact", locale });

  const conditions = [
    [content.cond1Title, content.cond1Body],
    [content.cond2Title, content.cond2Body],
    [content.cond3Title, content.cond3Body],
  ];
  const roles = [content.role1, content.role2, content.role3, content.role4, content.role5];

  return (
    <div>
      <PageHero title={content.title} subtitle={content.subtitle} />

      {/* L'Allemagne recrute partout */}
      <AnchorSection id="contexte" white title={content.s1Title}>
        <p className="text-brand-ink-secondary max-w-3xl">{content.s1Body}</p>
      </AnchorSection>

      {/* Trois conditions */}
      <AnchorSection id="conditions" title={content.condTitle} lead={content.condLead}>
        <div className="grid gap-4 sm:grid-cols-3">
          {conditions.map(([title, body], i) => (
            <div
              key={title}
              className="animate-fade-up rounded-xl border border-brand-grid bg-brand-white p-6"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="h-8 w-8 shrink-0 rounded-lg bg-brand-gold text-brand-black font-serif font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <h3 className="font-serif text-lg text-brand-black">{title}</h3>
              </div>
              <p className="text-sm text-brand-ink-secondary">{body}</p>
            </div>
          ))}
        </div>
      </AnchorSection>

      {/* La démarche, pays par pays */}
      <AnchorSection id="demarche" white title={content.demTitle}>
        <p className="text-brand-ink-secondary max-w-3xl">{content.demBody}</p>
      </AnchorSection>

      {/* Cas particulier : le Cameroun */}
      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl border-l-4 border-brand-gold bg-brand-gold/10 p-6 sm:p-8 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif text-brand-black mb-3">{content.camTitle}</h2>
            <p className="text-brand-ink-secondary mb-4 font-medium">{content.camIntro}</p>
            <p className="text-brand-ink-secondary mb-3">{content.camBody1}</p>
            <p className="text-brand-ink-secondary mb-4">{content.camBody2}</p>
            <p className="text-xs text-brand-ink-muted italic">{content.camNote}</p>
          </div>
        </div>
      </section>

      {/* Notre rôle */}
      <AnchorSection id="notre-role" white title={content.roleTitle} lead={content.roleLead}>
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
          <Link
            href="/postuler"
            className="press rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.finalCta}
          </Link>
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
