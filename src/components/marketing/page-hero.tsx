export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-brand-black text-brand-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="animate-fade-up text-3xl sm:text-4xl font-serif max-w-2xl">{title}</h1>
        {subtitle && (
          <p
            className="animate-fade-up mt-4 max-w-xl text-brand-white/80"
            style={{ animationDelay: "80ms" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
