import type { Locale } from "@i18n/routing";

// Shared trilingual text primitive used across all sector data modules
// (health, IT, ...). One source of truth so the sector modules and the
// generic sector components agree on the shape.
export type LocalizedText = { fr: string; de: string; en: string };

export const tr = (t: LocalizedText, locale: Locale) => t[locale];
