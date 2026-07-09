import { PageHero } from "./page-hero";

export function FaqPage({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: { q: string; a: string }[];
}) {
  return (
    <div>
      <PageHero title={title} subtitle={subtitle} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 space-y-4">
        {items.map((item, i) => (
          <details
            key={i}
            className="animate-fade-up group rounded-lg border border-brand-grid bg-brand-white p-5"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <summary className="cursor-pointer text-brand-black font-medium marker:content-none flex items-center justify-between gap-4">
              {item.q}
              <span className="text-brand-gold-text transition-transform duration-150 group-open:rotate-45 shrink-0">
                +
              </span>
            </summary>
            <p className="mt-3 text-brand-ink-secondary leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
