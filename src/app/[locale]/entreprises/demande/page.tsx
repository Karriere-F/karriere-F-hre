import { PageHero } from "@/components/marketing/page-hero";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.entreprisesDemande;

export const generateMetadata = () =>
  metadataFromNamespace("entreprisesDemande", "/entreprises/demande");

export default async function EntreprisesDemandePage() {
  const content = await getPageContent<Content>("entreprisesDemande");

  return (
    <div>
      <PageHero title={content.title} subtitle={content.subtitle} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="animate-fade-up">
          <h2 className="text-xl font-serif text-brand-black mb-3">{content.section1Title}</h2>
          <p className="text-brand-ink-secondary leading-relaxed">{content.section1Body}</p>
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "60ms" }}>
          <h2 className="text-xl font-serif text-brand-black mb-3">{content.section2Title}</h2>
          <p className="text-brand-ink-secondary leading-relaxed">{content.section2Body}</p>
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
          <h2 className="text-xl font-serif text-brand-black mb-3">{content.section3Title}</h2>
          <p className="text-brand-ink-secondary leading-relaxed">{content.section3Body}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/employer/signup"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.cta}
          </Link>
          <Link
            href="/book-appointment"
            className="press inline-flex rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.ctaSecondary}
          </Link>
        </div>
      </div>
    </div>
  );
}
