import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";
import { DATENSCHUTZ, CONFIDENTIALITE, type Block } from "@/lib/datenschutz-content";
import type { Locale } from "@i18n/routing";

const POLICY = { de: DATENSCHUTZ, fr: CONFIDENTIALITE } as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("legal");
  const doc = POLICY[locale as "de" | "fr"];
  return buildMetadata({
    pathname: "/confidentialite",
    locale,
    title: doc ? doc.title : t("privacyTitle"),
    description: t("privacyPlaceholder"),
  });
}

function BlockView({ block }: { block: Block }) {
  if ("p" in block) {
    return <p className="text-brand-ink-secondary leading-relaxed">{block.p}</p>;
  }
  if ("h4" in block) {
    return <h4 className="mt-6 font-serif text-lg text-brand-black">{block.h4}</h4>;
  }
  if ("lines" in block) {
    return (
      <div className="rounded-lg bg-brand-card p-5 ring-1 ring-brand-black/5">
        {block.lines.map((line, i) => (
          <p key={i} className={i === 0 ? "font-semibold text-brand-black" : "text-brand-ink-secondary"}>
            {line}
          </p>
        ))}
      </div>
    );
  }
  return (
    <ul className="ml-1 space-y-1.5">
      {block.ul.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-brand-ink-secondary leading-relaxed">
          <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ConfidentialitePage() {
  const t = await getTranslations("legal");
  const locale = (await getLocale()) as Locale;
  const doc = POLICY[locale as "de" | "fr"];

  if (!doc) {
    return (
      <div>
        <PageHero title={t("privacyTitle")} />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-brand-ink-secondary leading-relaxed">{t("privacyPlaceholder")}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero title={doc.title} subtitle={doc.updated} wide />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {doc.sections.map((section) => (
            <section key={section.num}>
              <h2 className="font-serif text-xl sm:text-2xl text-brand-black leading-snug">
                <span className="text-brand-gold-text">{section.num}.</span> {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.blocks.map((block, i) => (
                  <BlockView key={i} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-14 font-serif text-lg text-brand-gold-text">{doc.signature}</p>
      </div>
    </div>
  );
}
