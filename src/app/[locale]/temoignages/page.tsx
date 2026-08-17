import { PageHero } from "@/components/marketing/page-hero";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.temoignages;

export const generateMetadata = () => metadataFromNamespace("temoignages", "/temoignages");

export default async function TemoignagesPage() {
  const content = await getPageContent<Content>("temoignages");

  return (
    <div>
      <PageHero title={content.title} subtitle={content.subtitle} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-brand-ink-secondary leading-relaxed">{content.placeholder}</p>
      </div>
    </div>
  );
}
