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
    <section className="relative bg-brand-black text-brand-white overflow-hidden">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/40" />
        </>
      )}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
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
