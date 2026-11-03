"use client";

export default function ErpError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
      <p className="font-medium">Cette action n&apos;a pas pu aboutir.</p>
      <p className="mt-1">
        Votre rôle ne le permet peut-être pas, ou une donnée est invalide. Réessayez, et si le
        problème continue, prévenez l&apos;administrateur.
      </p>
      <button onClick={reset} className="mt-4 rounded-md border border-red-200 bg-white px-4 py-2">
        Réessayer
      </button>
    </div>
  );
}
