import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@i18n/navigation";
import type { Locale } from "@i18n/routing";
import { ACTIVE_SECTOR_PATH, SECTEURS_UI, SECTOR_IMAGES, type Sector } from "@/lib/secteurs";
import { tr } from "@/lib/localized";

export function SectorGrid({ sectors, locale }: { sectors: Sector[]; locale: Locale }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sectors.map((s) => {
        const Icon = s.icon;
        const name = tr(s.name, locale);
        const href = ACTIVE_SECTOR_PATH[s.slug as keyof typeof ACTIVE_SECTOR_PATH];

        if (s.active && href) {
          const image = SECTOR_IMAGES[s.slug];

          // Active sector without a photo yet: a branded, clickable card
          // (icon + name + Choisir). It upgrades to the photo card below the
          // moment a SECTOR_IMAGES entry is added.
          if (!image) {
            return (
              <Link
                key={s.slug}
                href={href}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-brand-black/10 bg-brand-black p-6 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 hover:border-brand-gold/60 hover:shadow-[0_20px_40px_-18px_rgba(17,17,17,0.45)] motion-reduce:hover:translate-y-0"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold-light">
                  <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div className="mt-auto pt-6">
                  <h3 className="font-serif text-xl text-brand-white">{name}</h3>
                  <span className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold-light">
                    {tr(SECTEURS_UI.choose, locale)}
                    <ArrowRight
                      size={15}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={s.slug}
              href={href}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-brand-grid transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 hover:border-brand-gold/60 hover:shadow-[0_20px_40px_-18px_rgba(17,17,17,0.45)] motion-reduce:hover:translate-y-0"
            >
              <Image
                src={image}
                alt={name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                style={{ objectPosition: "center 22%" }}
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05] motion-reduce:group-hover:scale-100"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/25 to-transparent"
              />
              <div className="relative p-6">
                <h3 className="font-serif text-xl text-brand-white drop-shadow-sm">{name}</h3>
                <span className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold-light">
                  {tr(SECTEURS_UI.choose, locale)}
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          );
        }

        return (
          <div
            key={s.slug}
            aria-disabled="true"
            className="flex aspect-[4/5] flex-col items-center justify-center rounded-2xl border border-dashed border-brand-grid bg-brand-card/40 p-6 text-center"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-black/[0.04] text-brand-ink-muted">
              <Icon size={22} strokeWidth={2} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-serif text-lg text-brand-ink-secondary">{name}</h3>
            <span className="mt-4 inline-flex w-fit items-center rounded-full bg-brand-black/[0.05] px-3 py-1 text-xs font-medium text-brand-ink-muted">
              {tr(SECTEURS_UI.comingSoon, locale)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
