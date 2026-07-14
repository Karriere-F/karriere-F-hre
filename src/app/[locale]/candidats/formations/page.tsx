import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { SubNavLinks } from "@/components/marketing/sub-nav-links";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.formations;

export const generateMetadata = () => metadataFromNamespace("formations", "/candidats/formations");

export default async function FormationsPage() {
  const t = await getTranslations("formations");
  const content = await getPageContent<Content>("formations");

  const levels = ["levelA1", "levelA2", "levelB1", "levelB2", "levelPrep"] as const;

  return (
    <div>
      <PageHero title={content.title} subtitle={content.subtitle} image="/images/german-courses.jpg" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 sm:grid-cols-2">
        <div className="lift-on-hover animate-fade-up rounded-lg border border-brand-grid p-8 bg-brand-white">
          <h2 className="text-xl font-serif text-brand-black mb-3">{content.fastTrack.title}</h2>
          <p className="text-brand-ink-secondary leading-relaxed mb-6">{content.fastTrack.body}</p>
          <Link
            href="/candidate/signup"
            className="press inline-flex rounded-full border border-brand-gold px-5 py-2.5 text-brand-gold-text hover:bg-brand-gold hover:text-brand-white transition-colors duration-150 text-sm"
          >
            {content.fastTrack.title}
          </Link>
        </div>

        <div
          className="lift-on-hover animate-fade-up rounded-lg border border-brand-grid p-8 bg-brand-white"
          style={{ animationDelay: "80ms" }}
        >
          <h2 className="text-xl font-serif text-brand-black mb-3">{content.fullTraining.title}</h2>
          <p className="text-brand-ink-secondary leading-relaxed mb-6">{content.fullTraining.body}</p>

          <h3 className="text-brand-gold-text font-semibold text-sm mb-2">
            {content.fullTraining.levelsTitle}
          </h3>
          <ul className="text-sm text-brand-ink-secondary space-y-1 mb-6">
            {levels.map((key) => (
              <li key={key}>{content.fullTraining[key]}</li>
            ))}
          </ul>

          <h3 className="text-brand-gold-text font-semibold text-sm mb-2">
            {content.fullTraining.examsTitle}
          </h3>
          <p className="text-sm text-brand-ink-secondary mb-6">{content.fullTraining.examsBody}</p>

          <h3 className="text-brand-gold-text font-semibold text-sm mb-2">
            {content.fullTraining.includesTitle}
          </h3>
          <ul className="text-sm text-brand-ink-secondary space-y-1 list-disc list-inside">
            <li>{content.fullTraining.includes1}</li>
            <li>{content.fullTraining.includes2}</li>
            <li>{content.fullTraining.includes3}</li>
            <li>{content.fullTraining.includes4}</li>
            <li>{content.fullTraining.includes5}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <SubNavLinks
          links={[
            { href: "/candidats/formations/allemand", label: t("linkAllemand") },
            { href: "/candidats/formations/examens", label: t("linkExamens") },
            { href: "/candidats/formations/integration", label: t("linkIntegration") },
          ]}
        />
      </div>

      <div className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-center text-brand-ink-secondary text-sm">
          {content.pricingNote}
        </div>
      </div>
    </div>
  );
}
