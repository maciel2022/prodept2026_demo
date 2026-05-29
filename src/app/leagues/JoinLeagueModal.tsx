"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { SignIn, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { joinLeague } from "./actions";

export default function JoinLeagueModal() {
  const t = useTranslations("leagues");
  const [expanded, setExpanded] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;

    setError(null);
    setSuccess(false);
    setPending(true);

    const formData = new FormData(e.currentTarget);
    const result = await joinLeague(formData);

    setPending(false);

    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(true);
      formRef.current?.reset();
      setTimeout(() => {
        setExpanded(false);
        setSuccess(false);
      }, 1500);
    }
  }

  function handleCodeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.currentTarget;
    const pos = input.selectionStart;
    input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (pos !== null) input.setSelectionRange(pos, pos);
  }

  return (
    <div className="glass-card overflow-hidden">
      <button
        type="button"
        onClick={() => {
          setExpanded((v) => !v);
          setError(null);
          setSuccess(false);
        }}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "var(--color-surface-container-high)" }}
          >
            <SignIn size={18} className="text-on-surface-variant" />
          </div>
          <span
            className="font-semibold text-on-surface"
            style={{ fontSize: "var(--text-body-lg)" }}
          >
            {t("joinLeague")}
          </span>
        </div>
        <CaretDown
          size={20}
          className="text-on-surface-variant transition-transform duration-200"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {expanded && (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="px-5 pb-5 space-y-4 border-t border-outline-variant"
        >
          <div className="pt-4 space-y-2">
            <label
              htmlFor="invite-code"
              className="label-bold text-on-surface-variant tracking-widest"
            >
              {t("joinCodeLabel")}
            </label>
            <input
              id="invite-code"
              name="code"
              type="text"
              required
              maxLength={6}
              placeholder={t("joinCodePlaceholder")}
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
              onChange={handleCodeInput}
              className="w-full rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant outline-none transition-all focus:ring-2 focus:ring-primary-fixed font-display tracking-[0.3em] text-center"
              style={{
                background: "var(--color-surface-container-high)",
                border:
                  "1px solid color-mix(in srgb, var(--color-outline-variant) 60%, transparent)",
                fontSize: "var(--text-headline-md)",
              }}
            />
            <p
              className="text-center text-on-surface-variant"
              style={{ fontSize: "var(--text-label-bold)" }}
            >
              {t("joinCodeHint")}
            </p>
          </div>

          {error && (
            <p className="text-error" style={{ fontSize: "var(--text-label-bold)" }}>
              {error}
            </p>
          )}

          {success && (
            <p className="text-primary-fixed label-bold" style={{ fontSize: "var(--text-label-bold)" }}>
              {t("joined")}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg px-4 py-3 label-bold uppercase tracking-widest transition-opacity disabled:opacity-60 border border-outline-variant text-on-surface hover:bg-surface-container-high"
            style={{ fontSize: "var(--text-label-bold)" }}
          >
            {pending ? t("joining") : t("joinButton")}
          </button>
        </form>
      )}
    </div>
  );
}
