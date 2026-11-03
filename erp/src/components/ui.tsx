import type { Tone } from "@/lib/erp/labels";

export const inputClass =
  "w-full rounded-md border border-brand-grid bg-white px-3 py-2 text-sm text-brand-black focus:border-brand-gold focus:outline-none";
export const thClass =
  "px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-brand-ink-muted";
export const tdClass = "px-3 py-2.5 text-sm text-brand-black align-top";
export const linkClass = "text-brand-black font-medium hover:text-brand-gold-text";
export const buttonClass =
  "inline-flex items-center justify-center rounded-md bg-brand-gold px-4 py-2 text-sm font-medium text-brand-black transition-colors hover:bg-brand-gold-light";
export const ghostButtonClass =
  "inline-flex items-center justify-center rounded-md border border-brand-grid bg-white px-4 py-2 text-sm font-medium text-brand-black transition-colors hover:border-brand-gold";

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-serif text-3xl text-brand-black">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-brand-ink-secondary">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function Card({
  title,
  actions,
  children,
  className = "",
}: {
  title?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-xl border border-brand-grid bg-white p-5 ${className}`}>
      {(title || actions) && (
        <div className="mb-4 flex items-center justify-between gap-3">
          {title && <h2 className="font-serif text-lg text-brand-black">{title}</h2>}
          {actions}
        </div>
      )}
      {children}
    </section>
  );
}

export function Stat({ label, value, hint }: { label: string; value: React.ReactNode; hint?: string }) {
  return (
    <div className="rounded-xl border border-brand-grid bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-ink-muted">{label}</p>
      <p className="mt-2 font-serif text-3xl text-brand-black">{value}</p>
      {hint && <p className="mt-1 text-xs text-brand-ink-muted">{hint}</p>}
    </div>
  );
}

const TONES: Record<Tone, string> = {
  neutral: "bg-brand-black/5 text-brand-ink-secondary",
  gold: "bg-brand-gold/15 text-[#8a6a22]",
  good: "bg-emerald-50 text-emerald-700",
  warn: "bg-amber-50 text-amber-700",
  bad: "bg-red-50 text-red-700",
};

export function Badge({ tone = "neutral", children }: { tone?: Tone; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${TONES[tone]}`}>
      {children}
    </span>
  );
}

export function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-xs font-medium text-brand-ink-secondary">{label}</span>
      {children}
    </label>
  );
}

export function Select({
  name,
  options,
  defaultValue,
  empty,
  required,
}: {
  name: string;
  options: { key: string; label: string }[];
  defaultValue?: string | null;
  empty?: string;
  required?: boolean;
}) {
  return (
    <select name={name} defaultValue={defaultValue ?? ""} required={required} className={inputClass}>
      {empty !== undefined && <option value="">{empty}</option>}
      {options.map((o) => (
        <option key={o.key} value={o.key}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function Empty({ children }: { children: React.ReactNode }) {
  return <p className="py-6 text-center text-sm text-brand-ink-muted">{children}</p>;
}

export function ErrorBanner({ message }: { message?: string | string[] }) {
  if (!message) return null;
  return (
    <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
      {Array.isArray(message) ? message[0] : message}
    </div>
  );
}

export function Table({ head, children }: { head: string[]; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="border-b border-brand-grid">
          <tr>
            {head.map((h) => (
              <th key={h} className={thClass}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-grid">{children}</tbody>
      </table>
    </div>
  );
}
