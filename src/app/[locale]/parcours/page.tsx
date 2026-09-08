import Image from "next/image";
import { getLocale } from "next-intl/server";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Check,
  Clock,
  Compass,
  GraduationCap,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Link } from "@i18n/navigation";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import { SECTORS_ALL, ACTIVE_SECTOR_PATH, SECTOR_IMAGES } from "@/lib/secteurs";
import { tr } from "@/lib/localized";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.parcours;

export const generateMetadata = () => metadataFromNamespace("parcours", "/parcours");

export default async function ParcoursPage() {
  const content = await getPageContent<Content>("parcours");
  const locale = (await getLocale()) as Locale;

  const cards = [
    { key: "seFormer" as const, href: "/ausbildung-allemagne" as const, icon: GraduationCap, data: content.cards.seFormer },
    { key: "travailler" as const, href: "/travailler-en-allemagne" as const, icon: Briefcase, data: content.cards.travailler },
    { key: "preparer" as const, href: "/candidats" as const, icon: Compass, data: content.cards.preparer },
  ];

  const chooser = [
    { href: "/ausbildung-allemagne" as const, q: content.chooser.apprendreQ, path: content.chooser.apprendrePath, text: content.chooser.apprendreText },
    { href: "/travailler-en-allemagne" as const, q: content.chooser.qualifieQ, path: content.chooser.qualifiePath, text: content.chooser.qualifieText },
    { href: "/evaluation" as const, q: content.chooser.incertainQ, path: content.chooser.incertainPath, text: content.chooser.incertainText },
  ];

  const ways = [
    {
      icon: GraduationCap,
      href: "/ausbildung-allemagne" as const,
      name: content.twoWays.ausbildungName,
      lead: content.twoWays.ausbildungLead,
      bullets: content.twoWays.ausbildungBullets,
      cta: content.twoWays.ausbildungCta,
    },
    {
      icon: Briefcase,
      href: "/travailler-en-allemagne" as const,
      name: content.twoWays.emploiName,
      lead: content.twoWays.emploiLead,
      bullets: content.twoWays.emploiBullets,
      cta: content.twoWays.emploiCta,
    },
  ];

  const understandIcons = [BookOpen, Wallet, Clock, TrendingUp];

  return (
    <div className="flex flex-col">
      {/* 1 — Hero + three routes */}
      <section className="relative overflow-hidden bg-brand-white">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] lg:block">
            <Image
              src="/images/candidats-soins-technique.jpg"
              alt="Une infirmière et un technicien africains, prêts pour une carrière qualifiée en Allemagne"
              fill
              priority
              sizes="54vw"
              className="object-cover object-[center_10%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/15 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-white to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-white to-transparent" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl py-14 lg:flex lg:min-h-[520px] lg:flex-col lg:justify-center lg:py-20">
              <h1 className="animate-fade-up font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black text-balance leading-tight">
                {content.hero.title}
              </h1>
              <p
                className="animate-fade-up mt-6 max-w-lg text-lg text-brand-ink-secondary leading-relaxed"
                style={{ animationDelay: "80ms" }}
              >
                {content.hero.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {cards.map(({ key, href, icon: Icon, data }, i) => (
              <Link
                key={key}
                href={href}
                style={{ animationDelay: `${120 + i * 80}ms` }}
                className="lift-on-hover animate-fade-up group flex flex-col rounded-2xl border border-brand-grid bg-brand-white p-7 transition-colors hover:border-brand-gold"
              >
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold-text transition-colors duration-200 group-hover:bg-brand-gold group-hover:text-brand-black">
                    <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">
                    {data.kicker}
                  </span>
                </div>
                <h2 className="mt-4 text-center font-serif text-2xl text-brand-black">{data.name}</h2>
                <p className="mt-3 flex-1 text-sm text-brand-ink-secondary leading-relaxed text-left text-pretty">
                  {data.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black">
                  {data.cta}
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="text-brand-gold-text transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — Which path fits your situation? */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {content.chooser.title}
          </h2>
          <p className="mt-4 max-w-2xl text-brand-ink-secondary leading-relaxed">{content.chooser.intro}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {chooser.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="group flex flex-col rounded-2xl border border-brand-grid bg-brand-white p-6 transition-colors hover:border-brand-gold"
              >
                <p className="font-serif text-lg text-brand-black">{o.q}</p>
                <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold-text">
                  <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
                  {o.path}
                </p>
                <p className="mt-3 flex-1 text-sm text-brand-ink-secondary leading-relaxed">{o.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — The two main routes, side by side */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {content.twoWays.title}
          </h2>
          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
            {ways.map(({ icon: Icon, href, name, lead, bullets, cta }) => (
              <div key={name} className="flex flex-col rounded-2xl border border-brand-grid bg-brand-white p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold-text">
                    <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-brand-black">{name}</h3>
                    <p className="text-sm text-brand-ink-secondary">{lead}</p>
                  </div>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-brand-ink-secondary leading-snug">
                      <Check size={18} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold-text" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className="press mt-7 inline-flex h-[52px] items-center justify-center gap-2 self-start rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black"
                >
                  {cta}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Sectors */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {content.sectors.title}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS_ALL.map((sector, i) => {
              const item = content.sectors.items[sector.slug as keyof typeof content.sectors.items];
              const href = ACTIVE_SECTOR_PATH[sector.slug as keyof typeof ACTIVE_SECTOR_PATH];
              return (
                <div
                  key={sector.slug}
                  style={{ animationDelay: `${Math.min(i, 6) * 60}ms` }}
                  className="animate-fade-up flex flex-col overflow-hidden rounded-2xl border border-brand-grid bg-brand-white"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={SECTOR_IMAGES[sector.slug]}
                      alt={tr(sector.name, locale)}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      style={{ objectPosition: "center 18%" }}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-xl text-brand-black">{tr(sector.name, locale)}</h3>
                    <p className="mt-2 text-sm text-brand-ink-secondary leading-relaxed">{item.blurb}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-ink-muted">
                      {content.sectors.metiersLabel}
                    </p>
                    <p className="mt-1 text-sm text-brand-ink-secondary">{item.metiers}</p>
                    <Link
                      href={href}
                      className="press mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-black hover:text-brand-gold-text"
                    >
                      {content.sectors.cta}
                      <ArrowRight size={16} aria-hidden="true" className="text-brand-gold-text" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6 — Understand before you invest */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {content.understand.title}
          </h2>
          <p className="mt-5 text-brand-ink-secondary leading-relaxed">{content.understand.text}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.understand.items.map((it, i) => {
              const Icon = understandIcons[i] ?? BookOpen;
              return (
                <div key={it.label} className="rounded-xl border border-brand-grid bg-brand-white p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold-text">
                    <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold-text">
                    {it.label}
                  </p>
                  <p className="mt-2 text-sm text-brand-ink-secondary leading-snug">{it.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 — Final CTA */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
            {content.finalCta.title}
          </h2>
          <p className="mt-4 text-brand-ink-secondary leading-relaxed">{content.finalCta.subline}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/evaluation"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md bg-brand-gold px-8 font-bold text-brand-black transition-colors duration-200 hover:bg-brand-gold-light"
            >
              {content.finalCta.primary}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-grid px-8 font-bold text-brand-black transition-colors hover:border-brand-gold hover:text-brand-gold-text"
            >
              {content.finalCta.secondary}
            </Link>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold-text">
            {content.finalCta.tags}
          </p>
        </div>
      </section>
    </div>
  );
}
