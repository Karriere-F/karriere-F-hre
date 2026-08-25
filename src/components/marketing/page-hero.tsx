import Image from "next/image";

// Shared hero for interior pages. When an image is provided it bleeds in from the
// right and fades into the page background (matching the home and /parcours heroes)
// rather than sitting in a framed card. `imagePosition` tunes the crop per page.
export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  imagePosition = "center 30%",
}: {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}) {
  if (!image) {
    return (
      <section className="bg-brand-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h1 className="animate-fade-up max-w-2xl font-serif text-3xl sm:text-4xl text-brand-black">
            {title}
          </h1>
          {subtitle && (
            <p
              className="animate-fade-up mt-4 max-w-2xl text-brand-ink-secondary"
              style={{ animationDelay: "80ms" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-brand-card">
      {/* Desktop photo: bleeds in from the right, fades into the page */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="52vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-card via-brand-card/15 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-card to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-card to-transparent" />
      </div>

      {/* Mobile photo: above the text */}
      <div className="relative -mb-2 aspect-[16/11] w-full lg:hidden">
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-card to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl py-12 lg:flex lg:min-h-[460px] lg:flex-col lg:justify-center lg:py-20">
          <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl text-brand-black">
            {title}
          </h1>
          {subtitle && (
            <p
              className="animate-fade-up mt-4 max-w-lg text-brand-ink-secondary"
              style={{ animationDelay: "80ms" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
