import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import RegisterForm from "./RegisterForm";

export const metadata = { title: "Create Account — PRODEPT 2026" };

export default async function RegisterPage() {
  const session = await auth();
  if (session?.user) redirect("/");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden py-12">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image src="/images/backgraound_fifa_2026.png" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="glass-panel w-full max-w-md px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-6 relative z-10">
        <div className="flex items-center justify-center gap-4">
          <Image src="/logos/DEPT.png" alt="DEPT" width={48} height={48} className="h-10 w-auto brightness-0 invert" />
          <span className="text-outline-variant text-2xl font-thin select-none" aria-hidden="true">&times;</span>
          <Image src="/logos/fifa_mundial_2026.png" alt="FIFA World Cup 2026" width={48} height={48} className="h-12 w-auto" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="font-display text-on-surface tracking-widest" style={{ fontSize: "var(--text-headline-md)", lineHeight: 1 }}>
              PRODEPT 2026
            </span>
          </Link>
          <span className="bg-primary-container text-on-primary-container label-bold rounded-full px-3 py-1">
            Create Account
          </span>
          <p className="font-body text-on-surface-variant text-center mt-1" style={{ fontSize: "var(--text-body-md)", lineHeight: "var(--text-body-md--line-height)" }}>
            Join the game and compete with your colleagues.
          </p>
        </div>

        <RegisterForm />

        <div className="flex flex-col items-center gap-2 pt-2 border-t border-outline-variant">
          <p className="font-body text-on-surface-variant" style={{ fontSize: "var(--text-body-md)" }}>
            Already have an account?
          </p>
          <Link href="/login" className="label-bold text-primary-fixed hover:text-primary-container transition-colors no-underline tracking-widest">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
}
