import Image from "next/image";
import { PageHero } from "@/components/marketing/page-hero";
import { getPageContent } from "@/lib/content/get-page-content";
import type frMessages from "../../../../messages/fr.json";

type AboutContent = typeof frMessages.about;

export default async function AboutPage() {
  const content = await getPageContent<AboutContent>("about");

  return (
    <div>
      <PageHero title={content.title} subtitle={content.intro} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-up mb-16">
          <h2 className="text-xl font-serif text-brand-black mb-3">
            {content.missionTitle}
          </h2>
          <p className="text-brand-ink-secondary leading-relaxed max-w-2xl">
            {content.missionBody}
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 items-center">
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
            <h2 className="text-xl font-serif text-brand-black mb-3">
              {content.founderTitle}
            </h2>
            <p className="text-brand-ink-secondary leading-relaxed">{content.founderBody}</p>
          </div>
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
