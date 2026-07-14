import type { ComponentProps } from "react";
import { Link } from "../../../i18n/navigation";
import { PageHero } from "./page-hero";

export function SimplePage({
  title,
  subtitle,
  image,
  sections,
  cta,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  sections: { title: string; body: string }[];
  cta?: { label: string; href: ComponentProps<typeof Link>["href"] };
}) {
  return (
    <div>
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
