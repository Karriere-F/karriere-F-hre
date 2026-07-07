import { PageHero } from "@/components/marketing/page-hero";
import { getPageContent } from "@/lib/content/get-page-content";
import type frMessages from "../../../../messages/fr.json";

type AboutContent = typeof frMessages.about;

export default async function AboutPage() {
  const content = await getPageContent<AboutContent>("about");

  return (
    <div>
      <PageHero title={content.title} subtitle={content.intro} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 sm:grid-cols-2">
        <div className="animate-fade-up">
          <h2 className="text-xl font-serif text-brand-black mb-3">
            {content.missionTitle}
          </h2>
          <p className="text-brand-ink-secondary leading-relaxed">{content.missionBody}</p>
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "80ms" }}>
          <h2 className="text-xl font-serif text-brand-black mb-3">
            {content.founderTitle}
          </h2>
          <p className="text-brand-ink-secondary leading-relaxed">{content.founderBody}</p>
        </div>
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
    </div>
  );
}
