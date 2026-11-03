/* eslint-disable @next/next/no-img-element */
"use client";

import { useActionState } from "react";
import { signIn } from "@/actions/auth-actions";
import { inputClass } from "@/components/ui";
import { SubmitButton } from "@/components/submit-button";

export default function LoginPage() {
  const [error, action] = useActionState(signIn, null);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <img src="/logo-kf-transparent.png" alt="Karriere Fähre" className="mx-auto h-20 w-auto" />
          <h1 className="mt-4 font-serif text-2xl text-brand-black">ERP Karriere Fähre</h1>
          <p className="mt-1 text-sm text-brand-ink-muted">Espace réservé à l&apos;équipe</p>
        </div>
        <form action={action} className="flex flex-col gap-4 rounded-xl border border-brand-grid bg-white p-6">
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-brand-ink-secondary">Email</span>
            <input name="email" type="email" required autoComplete="email" className={inputClass} />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium text-brand-ink-secondary">Mot de passe</span>
            <input name="password" type="password" required autoComplete="current-password" className={inputClass} />
          </label>
          {error && <p className="text-sm text-red-700">{error}</p>}
          <SubmitButton>Se connecter</SubmitButton>
        </form>
      </div>
    </div>
  );
}
