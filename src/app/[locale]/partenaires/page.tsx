import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.partenaires;

export const generateMetadata = () => metadataFromNamespace("partenaires", "/partenaires");

export default async function PartenairesPage() {
  const t = await getTranslations("partenaires");
  const content = await getPageContent<Content>("partenaires");

  return (
    <div>
      <PageHero title={content.title} subtitle={content.subtitle} image="/images/partners.jpg" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-brand-ink-secondary leading-relaxed mb-8">{content.growingBody}</p>
        <Link
          href="/entreprises/partenariat"
          className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
        >
          {t("cta")}
        </Link>
      </div>
    </div>
  );
}
