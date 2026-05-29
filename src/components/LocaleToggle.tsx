"use client";

import { useTransition } from "react";
import { GlobeSimple } from "@phosphor-icons/react";
import { useLocale } from "next-intl";
import { setLocale } from "@/app/actions";

export default function LocaleToggle() {
  const locale = useLocale();
  const [, startTransition] = useTransition();

  function toggle() {
    const next = locale === "en" ? "es" : "en";
    startTransition(async () => {
      await setLocale(next);
      window.location.reload();
    });
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 px-2 py-1 rounded-full label-bold text-xs tracking-wider transition-all hover:opacity-80 cursor-pointer"
      style={{
        background: "var(--color-surface-container-high)",
        color: "var(--color-on-surface-variant)",
        border: "1px solid color-mix(in srgb, var(--color-outline-variant) 40%, transparent)",
      }}
      aria-label="Toggle language"
    >
      <GlobeSimple size={14} weight="bold" />
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
