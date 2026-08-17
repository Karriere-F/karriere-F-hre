import { getLocale } from "next-intl/server";
import { PageHero } from "@/components/marketing/page-hero";
import { Link, getPathname } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.postuler;

export const generateMetadata = () => metadataFromNamespace("postuler", "/postuler");

export default async function PostulerPage() {
  const content = await getPageContent<Content>("postuler");
  const locale = (await getLocale()) as Locale;
  const candidatsFaqHref = `${getPathname({ href: "/candidats", locale })}#faq`;

  return (
    <div>
      <PageHero title={content.title} subtitle={content.subtitle} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="animate-fade-up text-brand-ink-secondary leading-relaxed mb-8">{content.body}</p>
        <div className="animate-fade-up flex flex-wrap justify-center gap-4" style={{ animationDelay: "80ms" }}>
          <Link
            href="/candidate/signup"
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {content.cta}
          </Link>
          <a
            href={candidatsFaqHref}
            className="press inline-flex rounded-full border border-brand-black px-6 py-3 text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors duration-150"
          >
            {content.ctaSecondary}
          </a>
        </div>
      </div>
    </div>
  );
}
