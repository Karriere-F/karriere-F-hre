import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, GraduationCap, Layers, TrendingUp, Briefcase } from "lucide-react";
import { Link } from "@i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { getPageContent } from "@/lib/content/get-page-content";
import { metadataFromNamespace } from "@/lib/seo";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/constants";
import type { Locale } from "@i18n/routing";
import type frMessages from "@messages/fr.json";

type Content = typeof frMessages.ausbildung;
type Href = React.ComponentProps<typeof Link>["href"];

export const generateMetadata = () => metadataFromNamespace("ausbildung", "/ausbildung-allemagne");

const BRANCH_ICONS = [Briefcase, Layers, TrendingUp, GraduationCap];

function NumHead({ num, kicker, title }: { num: string; kicker: string; title: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="font-serif text-3xl leading-none text-brand-gold-text/60">{num}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-text">{kicker}</p>
        <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">
          {title}
        </h2>
      </div>
    </div>
  );
}

function GoldCta({ href, label }: { href: Href; label: string }) {
  return (
    <Link
      href={href}
      className="press mt-8 inline-flex h-[52px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black"
    >
      {label}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}

export default async function AusbildungHubPage() {
  const t = await getTranslations("ausbildung");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const content = await getPageContent<Content>("ausbildung");
  const h = content.hub;
  const wa = whatsappLink(WHATSAPP_NUMBERS[0].e164);

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: tNav("home"), pathname: "/" },
          { name: t("title"), pathname: "/ausbildung-allemagne" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Image
            src="/images/ausbildung-hero.jpg"
            alt="Un étudiant en pleine composition dans une salle de classe, formation Ausbildung en Allemagne"
            fill
            priority
            sizes="52vw"
            className="object-cover object-[58%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/15 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-white to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-white to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-14 lg:flex lg:min-h-[540px] lg:max-w-3xl lg:flex-col lg:justify-center lg:py-20">
            <h1 className="animate-fade-up font-serif text-4xl sm:text-5xl text-brand-black leading-[1.08]">
              {h.heroTitle.split(/(?<=\.)\s+/).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-lg text-brand-ink-secondary leading-relaxed"
              style={{ animationDelay: "80ms" }}
            >
              {h.heroSubtitle}
            </p>
            <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "140ms" }}>
              <Link
                href="/evaluation"
                className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-text transition-colors hover:bg-brand-gold hover:text-brand-black"
              >
                {h.heroPrimary}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/secteurs"
                className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-black/25 px-8 font-bold text-brand-black transition-colors hover:border-brand-gold hover:text-brand-gold-text"
              >
                {h.heroSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — Choose a trade */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-6xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <NumHead num={h.s1Num} kicker={h.s1Kicker} title={h.s1Title} />
          <p className="mt-5 max-w-2xl text-brand-ink-secondary leading-relaxed">{h.s1Text}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {h.s1Sectors.map((s) => (
              <div key={s.name} className="rounded-2xl border border-brand-grid bg-brand-white p-6">
                <h3 className="font-serif text-lg text-brand-black">{s.name}</h3>
                <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed">{s.items}</p>
              </div>
            ))}
          </div>
          <GoldCta href="/secteurs" label={h.s1Cta} />
        </div>
      </section>

      {/* 02 — Prepare */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <NumHead num={h.s2Num} kicker={h.s2Kicker} title={h.s2Title} />
          <p className="mt-5 text-brand-ink-secondary leading-relaxed">{h.s2Text}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2">
            {h.s2Flow.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                {i > 0 && <ArrowRight size={15} aria-hidden="true" className="text-brand-gold/60" />}
                <span className="rounded-full border border-brand-grid bg-brand-card px-4 py-1.5 text-sm font-medium text-brand-black">
                  {step}
                </span>
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm text-brand-ink-secondary leading-relaxed">{h.s2Note}</p>
          <GoldCta href="/evaluation" label={h.s2Cta} />
        </div>
      </section>

      {/* 03 — Learn and work (dual system) */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <NumHead num={h.s3Num} kicker={h.s3Kicker} title={h.s3Title} />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {h.s3Steps.map((s, i) => (
              <div key={s.label} className="relative rounded-2xl border border-brand-grid bg-brand-white p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-lg text-brand-black">{s.label}</h3>
                <p className="mt-1.5 text-sm text-brand-ink-secondary leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
          <GoldCta href="/ausbildung-allemagne/conditions" label={h.s3Cta} />
        </div>
      </section>

      {/* 04 — Paid */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <NumHead num={h.s4Num} kicker={h.s4Kicker} title={h.s4Title} />
          <p className="mt-5 max-w-2xl text-brand-ink-secondary leading-relaxed">{h.s4Text}</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-grid">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-brand-grid bg-brand-card text-left">
                  <th className="px-5 py-3 font-semibold text-brand-black">{h.s4ColYear}</th>
                  <th className="px-5 py-3 text-right font-semibold text-brand-black">{h.s4ColAmount}</th>
                </tr>
              </thead>
              <tbody>
                {h.s4Rows.map((r) => (
                  <tr key={r.year} className="border-b border-brand-grid/60 last:border-0">
                    <td className="px-5 py-3.5 text-brand-ink-secondary">{r.year}</td>
                    <td className="px-5 py-3.5 text-right font-semibold text-brand-black">{r.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-brand-ink-muted leading-relaxed">{h.s4Note}</p>
          <p className="mt-2 text-xs text-brand-ink-muted">
            <a
              href="https://www.arbeitsagentur.de/arbeiten-in-deutschland/ausbildung-in-deutschland"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-gold-text"
            >
              {h.s4Source}
            </a>
          </p>
          <GoldCta href="/ausbildung-allemagne/conditions" label={h.s4Cta} />
        </div>
      </section>

      {/* 05 — Recognised trade */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-4xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <NumHead num={h.s5Num} kicker={h.s5Kicker} title={h.s5Title} />
          <p className="mt-5 max-w-2xl text-brand-ink-secondary leading-relaxed">{h.s5Text}</p>
          <GoldCta href="/ausbildung-allemagne/apres-ausbildung" label={h.s5Cta} />
        </div>
      </section>

      {/* 06 — After the Ausbildung */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="max-w-3xl font-serif text-2xl sm:text-3xl text-brand-white text-balance leading-snug">
            {h.s6Title}
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold-light">
            Ausbildung
            <ArrowRight size={15} aria-hidden="true" />
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {h.s6Branches.map((b, i) => {
              const Icon = BRANCH_ICONS[i] ?? Briefcase;
              return (
                <div key={b.label} className="rounded-2xl border border-brand-white/12 bg-brand-white/[0.04] p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-white/10 text-brand-gold-light">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-white">{b.label}</h3>
                  <p className="mt-2 text-sm text-brand-white/70 leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 — Career vision */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.s7Title}</h2>
          <div className="mt-10 space-y-6">
            {[
              { label: h.s7Traj1Label, steps: h.s7Traj1 },
              { label: h.s7Traj2Label, steps: h.s7Traj2 },
            ].map((traj) => (
              <div key={traj.label} className="rounded-2xl border border-brand-grid bg-brand-white p-6">
                <p className="font-serif text-lg text-brand-gold-text">{traj.label}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
                  {traj.steps.map((s, i) => (
                    <span key={s} className="flex items-center gap-2">
                      {i > 0 && <ArrowRight size={15} aria-hidden="true" className="text-brand-gold/60" />}
                      <span className="rounded-full border border-brand-grid bg-brand-card px-3.5 py-1.5 text-sm text-brand-black">
                        {s}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl rounded-2xl border border-brand-gold/30 bg-brand-gold/[0.06] p-6 text-sm text-brand-ink-secondary leading-relaxed">
            {h.s7Disclaimer}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white">
        <div className="mx-auto max-w-3xl border-t border-brand-grid px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black text-balance leading-snug">{h.faqTitle}</h2>
          <div className="mt-8 divide-y divide-brand-grid border-y border-brand-grid">
            {h.faq.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-brand-black [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-brand-gold-text transition-transform duration-200 group-open:rotate-90"
                  />
                </summary>
                <p className="mt-3 text-sm text-brand-ink-secondary leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Converter */}
      <section className="bg-brand-black text-brand-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-white text-balance leading-snug">{h.finalTitle}</h2>
          <p className="mt-4 text-brand-white/70 leading-relaxed">{h.finalText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/evaluation"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-gold px-8 font-bold text-brand-gold-light transition-colors hover:bg-brand-gold hover:text-brand-black"
            >
              {h.finalPrimary}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/parcours"
              className="press inline-flex h-[54px] items-center justify-center gap-2 rounded-md border border-brand-white/30 px-8 font-bold text-brand-white transition-colors hover:border-brand-white hover:bg-brand-white/10"
            >
              {h.finalSecondary}
            </Link>
          </div>
          <p className="mt-6">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-gold-light hover:underline">
              WhatsApp
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
