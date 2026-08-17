import type { ComponentProps } from "react";
import { getLocale } from "next-intl/server";
import { Link, getPathname } from "../../../i18n/navigation";
import type { Locale } from "../../../i18n/routing";
import { BreadcrumbJsonLd } from "../seo/breadcrumb-json-ld";
import { PageHero } from "./page-hero";

type PathnameHref = Parameters<typeof getPathname>[0]["href"];

export async function SimplePage({
  title,
  subtitle,
  image,
  sections,
  cta,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  sections: { title: string; body: string }[];
  cta?: { label: string; href: ComponentProps<typeof Link>["href"] };
  // Full trail including home and this page. Every page built on SimplePage is a leaf
  // two or three levels deep, which is exactly where breadcrumbs earn their keep in
  // search results -- so callers should always pass it.
  breadcrumb?: { name: string; pathname: PathnameHref }[];
}) {
  const locale = (await getLocale()) as Locale;

  return (
    <div>
      {breadcrumb && <BreadcrumbJsonLd locale={locale} items={breadcrumb} />}
      <PageHero title={title} subtitle={subtitle} image={image} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {sections.map((s, i) => (
          <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
            <h2 className="text-xl font-serif text-brand-black mb-3">{s.title}</h2>
            <p className="text-brand-ink-secondary leading-relaxed whitespace-pre-line">
              {s.body}
            </p>
          </div>
        ))}
        {cta && (
          <Link
            href={cta.href}
            className="press inline-flex rounded-full bg-brand-gold px-6 py-3 text-brand-black font-medium hover:bg-brand-gold-light transition-colors duration-150"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </div>
  );
}
