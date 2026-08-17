import "server-only";
import frMessages from "../../../messages/fr.json";
import deMessages from "../../../messages/de.json";
import enMessages from "../../../messages/en.json";

const MESSAGES_BY_LOCALE = { fr: frMessages, de: deMessages, en: enMessages } as const;

function getByDottedPath(obj: unknown, path: string): string {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (typeof cur !== "object" || cur === null) return "";
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === "string" ? cur : "";
}

// Used only by the admin content editor, which needs all 3 locales' static fallback
// text at once (regardless of the admin's own active locale) to show as placeholders.
export function getStaticValue(pageKey: string, fieldKey: string, locale: "fr" | "de" | "en") {
  const namespace = (MESSAGES_BY_LOCALE[locale] as Record<string, unknown>)[pageKey];
  return getByDottedPath(namespace, fieldKey);
}
