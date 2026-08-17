export const WHATSAPP_NUMBERS = [
  { label: "Orange", e164: "237673719816" },
  { label: "MTN", e164: "237695947888" },
] as const;

export function whatsappLink(e164: string, message?: string) {
  const base = `https://wa.me/${e164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
