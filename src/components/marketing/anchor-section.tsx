export function AnchorSection({
  id,
  eyebrow,
  title,
  lead,
  white,
  wide,
  full,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  white?: boolean;
  /** Widen the title and lead column (max-w-4xl instead of max-w-2xl). */
  wide?: boolean;
  /** Let the title and lead span the full container width (no max). */
  full?: boolean;
  children?: React.ReactNode;
}) {
  const textWidth = full ? "" : wide ? "max-w-4xl" : "max-w-2xl";
  return (
    <section id={id} className={white ? "bg-brand-white" : "bg-brand-card"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-brand-gold-text font-semibold mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className={`text-2xl sm:text-3xl font-serif text-brand-black mb-3 ${textWidth}`}>{title}</h2>
        {lead && <p className={`text-brand-ink-secondary mb-10 ${textWidth}`}>{lead}</p>}
        {children}
      </div>
    </section>
  );
}
