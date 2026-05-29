"use client";

import { useActionState, useState } from "react";
import { useTranslations } from "next-intl";
import { Eye, EyeSlash } from "@phosphor-icons/react/dist/ssr";
import { registerAction } from "@/app/login/actions";

const initialState: { error: string } | null = null;

export default function RegisterForm() {
  const t = useTranslations("auth");
  const [state, formAction, pending] = useActionState(registerAction, initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <form action={formAction} className="flex flex-col gap-6" noValidate>
      {state?.error && (
        <p className="text-error font-body text-body-md rounded-lg px-4 py-3" style={{ background: "color-mix(in srgb, var(--color-error-container) 30%, transparent)", fontSize: "var(--text-body-md)" }} role="alert">
          {state.error}
        </p>
      )}

      <div className="flex flex-col gap-1">
        <label htmlFor="reg-name" className="label-bold text-on-surface-variant">{t("fullName")}</label>
        <input id="reg-name" name="name" type="text" autoComplete="name" required className="bg-transparent border-0 border-b border-outline-variant text-on-surface py-2.5 outline-none focus:border-primary-fixed transition-colors placeholder:text-outline font-body text-body-md" style={{ fontSize: "var(--text-body-md)" }} placeholder={t("namePlaceholder")} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="reg-email" className="label-bold text-on-surface-variant">{t("email")}</label>
        <input id="reg-email" name="email" type="email" autoComplete="email" required className="bg-transparent border-0 border-b border-outline-variant text-on-surface py-2.5 outline-none focus:border-primary-fixed transition-colors placeholder:text-outline font-body text-body-md" style={{ fontSize: "var(--text-body-md)" }} placeholder={t("emailPlaceholder")} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="reg-password" className="label-bold text-on-surface-variant">{t("password")}</label>
        <div className="relative flex items-center">
          <input id="reg-password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" required minLength={8} className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface py-2.5 pr-10 outline-none focus:border-primary-fixed transition-colors placeholder:text-outline font-body text-body-md" style={{ fontSize: "var(--text-body-md)" }} placeholder={t("minChars")} />
          <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-0 text-on-surface-variant hover:text-on-surface transition-colors" aria-label={showPassword ? t("hidePassword") : t("showPassword")}>
            {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="reg-confirm" className="label-bold text-on-surface-variant">{t("confirmPassword")}</label>
        <div className="relative flex items-center">
          <input id="reg-confirm" name="confirmPassword" type={showConfirm ? "text" : "password"} autoComplete="new-password" required minLength={8} className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface py-2.5 pr-10 outline-none focus:border-primary-fixed transition-colors placeholder:text-outline font-body text-body-md" style={{ fontSize: "var(--text-body-md)" }} placeholder={t("repeatPassword")} />
          <button type="button" onClick={() => setShowConfirm((v) => !v)} className="absolute right-0 text-on-surface-variant hover:text-on-surface transition-colors" aria-label={showConfirm ? t("hidePassword") : t("showPassword")}>
            {showConfirm ? <EyeSlash size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <button type="submit" disabled={pending} className="mt-2 w-full bg-primary-container text-on-primary-container label-bold rounded-xl py-4 tracking-widest hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed font-display">
        {pending ? t("creatingAccount") : t("createAccount")}
      </button>
    </form>
  );
}
