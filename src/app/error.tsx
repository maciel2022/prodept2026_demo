"use client";

import { WarningCircle } from "@phosphor-icons/react/dist/ssr";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass-card p-8 max-w-md w-full flex flex-col items-center gap-4 text-center">
        <WarningCircle size={48} weight="fill" className="text-error" />
        <h2
          className="font-display text-on-surface"
          style={{ fontSize: "var(--text-headline-md)", lineHeight: 1.2 }}
        >
          Something went wrong
        </h2>
        <p
          className="text-on-surface-variant"
          style={{ fontSize: "var(--text-body-md)" }}
        >
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          className="mt-2 rounded-xl px-6 py-3 label-bold tracking-widest transition-opacity hover:opacity-90 active:scale-[0.98] cursor-pointer"
          style={{
            background: "var(--color-primary-container)",
            color: "var(--color-on-primary-container)",
          }}
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
}
