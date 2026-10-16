import type { ReactNode } from "react";
import Image from "next/image";
import { ParallaxImage } from "@/components/motion/parallax-image";

// Shared hero for interior pages. When an image is provided it bleeds in from the
// right and fades into the page background (matching the home and /parcours heroes)
// rather than sitting in a framed card. `imagePosition` tunes the crop per page.
export function PageHero({
  title,
  subtitle,
  kicker,
  image,
  imageAlt,
  imagePosition = "center 30%",
  imageWidthClass = "w-[52%]",
  alignTop = false,
  wide = false,
  subtitleGapClass = "mt-4",
  subtitleClassName = "",
}: {
  title: ReactNode;
  subtitle?: string;
  kicker?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  /** Desktop width of the bleeding hero photo (Tailwind width class). */
  imageWidthClass?: string;
  /** Top-align the hero text (instead of vertically centering it). */
  alignTop?: boolean;
  /** Widen the hero text column (title + subtitle). */
  wide?: boolean;
  /** Top margin of the subtitle (Tailwind), to push it lower under the title. */
  subtitleGapClass?: string;
  /** Extra classes for the subtitle paragraph (e.g. "text-justify"). */
  subtitleClassName?: string;
}) {
  const eyebrow = kicker ? (
    <p className="animate-fade-up mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
      {kicker}
    </p>
  ) : null;

  if (!image) {
    const textWidth = wide ? "max-w-5xl" : "max-w-2xl";
    return (
      <section className="bg-brand-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {eyebrow}
          <h1 className={`animate-fade-up font-serif text-3xl sm:text-4xl lg:text-[2.7rem] text-brand-black text-balance leading-tight ${textWidth}`}>
            {title}
          </h1>
          {subtitle && (
            <p
              className={`animate-fade-up mt-4 text-brand-ink-secondary ${textWidth} ${subtitleClassName}`}
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
      <div className={`pointer-events-none absolute inset-y-0 right-0 hidden lg:block ${imageWidthClass}`}>
        <ParallaxImage
          src={image}
          alt={imageAlt ?? ""}
          priority
          sizes="52vw"
          imgClassName="object-cover"
          objectPosition={imagePosition}
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`py-12 lg:flex lg:min-h-[460px] lg:flex-col ${wide ? "max-w-3xl" : "max-w-xl"} ${
            alignTop ? "lg:justify-start lg:pt-14 lg:pb-20" : "lg:justify-center lg:py-20"
          }`}
        >
          {eyebrow}
          <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-[2.7rem] text-brand-black text-balance leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p
              className={`animate-fade-up text-brand-ink-secondary ${subtitleGapClass} ${wide ? "max-w-2xl" : "max-w-lg"} ${subtitleClassName}`}
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
