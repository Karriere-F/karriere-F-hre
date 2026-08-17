export function AnchorSection({
  id,
  eyebrow,
  title,
  lead,
  white,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  white?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className={white ? "bg-brand-white" : "bg-brand-card"}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-brand-gold-text font-semibold mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl font-serif text-brand-black mb-3 max-w-2xl">{title}</h2>
        {lead && <p className="text-brand-ink-secondary max-w-2xl mb-10">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
