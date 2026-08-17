import "server-only";
import { getLocale, getMessages } from "next-intl/server";
import { createClient } from "@/lib/supabase/server";
import type { Locale } from "../../../i18n/routing";

const VALUE_COLUMN: Record<Locale, "value_fr" | "value_de" | "value_en"> = {
  fr: "value_fr",
  de: "value_de",
  en: "value_en",
};

function setByDottedPath(obj: Record<string, unknown>, path: string, value: string) {
  const parts = path.split(".");
  let cur: Record<string, unknown> = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const next = cur[parts[i]];
    if (typeof next !== "object" || next === null) return;
    cur = next as Record<string, unknown>;
  }
  cur[parts[parts.length - 1]] = value;
}

// Merges admin-entered overrides from `page_content` onto the static next-intl
// namespace object for `pageKey`, per the active locale. A DB value only wins when
// non-empty — an untouched or cleared field falls back to the static translation, so
// the site never renders blank while content is still being filled in.
export async function getPageContent<T extends Record<string, unknown>>(
  pageKey: string
): Promise<T> {
  const locale = (await getLocale()) as Locale;
  const messages = await getMessages();
  const staticNamespace = (messages as Record<string, unknown>)[pageKey] as T;
  const merged = structuredClone(staticNamespace) as Record<string, unknown>;

  // Supabase isn't configured yet during initial setup (no project created) — fall
  // through to the static translations entirely rather than throwing on every page.
  const supabaseConfigured =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseConfigured) {
    return merged as T;
  }

  const supabase = await createClient();
  const { data: overrides } = await supabase
    .from("page_content")
    .select("field_key, value_fr, value_de, value_en")
    .eq("page_key", pageKey);

  const valueColumn = VALUE_COLUMN[locale];
  for (const row of overrides ?? []) {
    const value = row[valueColumn];
    if (value) setByDottedPath(merged, row.field_key, value);
  }

  return merged as T;
}
