"use client";

import { useActionState, useState } from "react";
import { Eye, EyeSlash, GoogleLogo } from "@phosphor-icons/react/dist/ssr";
import { loginAction, googleSignIn } from "./actions";

const initialState: { error: string } | null = null;

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Google OAuth button */}
      <form action={googleSignIn}>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 rounded-xl py-4 font-bold tracking-wide transition-all hover:opacity-90 active:scale-[0.98] cursor-pointer"
          style={{
            background: "var(--color-surface-container-high)",
            color: "var(--color-on-surface)",
            border: "1px solid var(--color-outline-variant)",
            fontSize: "var(--text-body-md)",
          }}
        >
          <GoogleLogo size={22} weight="bold" />
          Sign in with Google
        </button>
      </form>

      {/* Separator */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-outline-variant" />
        <span
          className="text-on-surface-variant label-bold tracking-widest"
          style={{ fontSize: "0.6875rem" }}
        >
          OR
        </span>
        <div className="flex-1 h-px bg-outline-variant" />
      </div>

      {/* Email/password form */}
      <form action={formAction} className="flex flex-col gap-6" noValidate>
        {state?.error && (
          <p
            className="text-error font-body text-body-md rounded-lg px-4 py-3"
            style={{
              background: "color-mix(in srgb, var(--color-error-container) 30%, transparent)",
              fontSize: "var(--text-body-md)",
            }}
            role="alert"
          >
            {state.error}
          </p>
        )}

        <div className="flex flex-col gap-1">
          <label htmlFor="login-email" className="label-bold text-on-surface-variant">
            Email
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="bg-transparent border-0 border-b border-outline-variant text-on-surface py-2.5 outline-none focus:border-primary-fixed transition-colors placeholder:text-outline font-body text-body-md"
            style={{ fontSize: "var(--text-body-md)" }}
            placeholder="you@company.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="login-password" className="label-bold text-on-surface-variant">
            Password
          </label>
          <div className="relative flex items-center">
            <input
              id="login-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface py-2.5 pr-10 outline-none focus:border-primary-fixed transition-colors placeholder:text-outline font-body text-body-md"
              style={{ fontSize: "var(--text-body-md)" }}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-0 text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="mt-2 w-full bg-primary-container text-on-primary-container label-bold rounded-xl py-4 tracking-widest hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed font-display"
        >
          {pending ? "SIGNING IN..." : "SIGN IN"}
        </button>
      </form>
    </div>
  );
}
