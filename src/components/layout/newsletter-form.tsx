"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { subscribeNewsletter } from "@/actions/newsletter-actions";

type NewsletterFormProps = {
  placeholder: string;
  cta: string;
  success: string;
  error: string;
};

export function NewsletterForm({ placeholder, cta, success, error }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    const res = await subscribeNewsletter({ email });
    if (res.ok) {
      setStatus("done");
      setEmail("");
    } else {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="flex items-center gap-2 text-sm text-brand-gold-light" role="status">
        <Check size={18} strokeWidth={2} aria-hidden="true" />
        {success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm">
      <div className="flex items-center gap-2 rounded-lg border border-brand-white/15 bg-brand-white/[0.04] p-1.5 focus-within:border-brand-gold/60 transition-colors duration-200">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={placeholder}
          aria-label={placeholder}
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-brand-white placeholder:text-brand-white/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="press inline-flex shrink-0 items-center gap-1.5 rounded-md bg-brand-gold px-4 py-2 text-sm font-medium text-brand-black transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-brand-gold-light hover:shadow-[0_10px_24px_-10px_rgba(195,154,62,0.7)] disabled:opacity-60"
        >
          {cta}
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-brand-white/60" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
