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
          return (
            <Link
              key={s.slug}
              href={href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand-grid bg-brand-white transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-gold/60 hover:shadow-[0_12px_28px_-14px_rgba(17,17,17,0.25)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={SECTOR_IMAGES[s.slug]}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-lg text-brand-black">{name}</h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold-text">
                  {tr(SECTEURS_UI.choose, locale)}
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
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
            className="flex flex-col rounded-2xl border border-dashed border-brand-grid bg-brand-card/40 p-6"
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
