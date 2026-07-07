"use client";

import { useState } from "react";
import { WHATSAPP_NUMBERS, whatsappLink } from "@/lib/constants";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <div
        role="menu"
        aria-hidden={!open}
        className={`mb-1 origin-bottom-right rounded-lg bg-brand-white shadow-lg border border-brand-grid p-3 flex flex-col gap-2 min-w-[180px] transition-[opacity,transform] duration-200 ease-out ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-1 pointer-events-none"
        }`}
      >
        {WHATSAPP_NUMBERS.map((n) => (
          <a
            key={n.e164}
            href={whatsappLink(n.e164)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-ink hover:text-brand-good transition-colors duration-150"
          >
            {n.label} — +{n.e164.replace(/(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")}
          </a>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="WhatsApp"
        aria-expanded={open}
        className="press h-14 w-14 rounded-full bg-brand-good text-brand-white shadow-lg flex items-center justify-center text-2xl hover:scale-105 transition-transform duration-200 ease-out"
      >
        <svg
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="currentColor"
          aria-hidden="true"
          className={`transition-transform duration-200 ease-out ${open ? "rotate-[15deg]" : ""}`}
        >
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.34.66 4.52 1.8 6.38L4 29l7.83-1.75A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3Zm0 21.9c-1.99 0-3.86-.55-5.46-1.5l-.39-.23-4.65 1.04 1-4.53-.25-.4A9.9 9.9 0 0 1 5.1 15c0-5.46 4.44-9.9 9.9-9.9 5.46 0 9.9 4.44 9.9 9.9s-4.44 9.9-9.9 9.9Zm5.47-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </button>
    </div>
  );
}
