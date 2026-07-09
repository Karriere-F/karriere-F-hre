import Image from "next/image";

export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="bg-brand-card">
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid gap-10 items-center ${
          image ? "lg:grid-cols-[3fr_2fr]" : ""
        }`}
      >
        <div>
          <h1 className="animate-fade-up text-3xl sm:text-4xl font-serif text-brand-black max-w-2xl">
            {title}
          </h1>
          {subtitle && (
            <p
              className="animate-fade-up mt-4 max-w-xl text-brand-ink-secondary"
              style={{ animationDelay: "80ms" }}
            >
              {subtitle}
            </p>
          )}
        </div>
        {image && (
          <div
            className="animate-fade-up relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg"
            style={{ animationDelay: "120ms" }}
          >
            <Image src={image} alt="" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
