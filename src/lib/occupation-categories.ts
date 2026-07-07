import { HeartPulse, Cpu, Wrench, HardHat, Truck, type LucideIcon } from "lucide-react";
import type { Locale } from "../../i18n/routing";

export const OCCUPATION_CATEGORIES: Record<
  string,
  { icon: LucideIcon; label: Record<Locale, string> }
> = {
  healthcare: {
    icon: HeartPulse,
    label: { fr: "Santé & soins", de: "Gesundheit & Pflege", en: "Healthcare" },
  },
  it: {
    icon: Cpu,
    label: { fr: "Informatique", de: "IT", en: "IT" },
  },
  skilled_trades: {
    icon: Wrench,
    label: { fr: "Métiers techniques", de: "Handwerk", en: "Skilled trades" },
  },
  engineering: {
    icon: HardHat,
    label: { fr: "Ingénierie", de: "Ingenieurwesen", en: "Engineering" },
  },
  drivers: {
    icon: Truck,
    label: { fr: "Transport", de: "Transport", en: "Drivers" },
  },
};

export function categoryLabel(category: string, locale: Locale): string {
  return OCCUPATION_CATEGORIES[category]?.label[locale] ?? category;
}
