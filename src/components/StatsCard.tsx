import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
};

export default function StatsCard({ icon, label, value, subtitle }: Props) {
  return (
    <div className="glass-card p-4 md:p-6 flex flex-col gap-3 md:gap-4 transition-transform hover:scale-[1.02]">
      {/* Icon + label row */}
      <div className="flex items-center gap-2">
        <span className="text-primary-fixed shrink-0">{icon}</span>
        <span
          className="label-bold text-on-surface-variant truncate"
          style={{ fontSize: "var(--text-label-bold)" }}
        >
          {label}
        </span>
      </div>

      {/* Value */}
      <p
        className="font-display text-on-surface tabular-nums leading-none"
        style={{
          fontSize: "var(--text-headline-lg-mobile)",
          lineHeight: "var(--text-headline-lg-mobile--line-height)",
        }}
      >
        {value}
      </p>

      {/* Optional subtitle */}
      {subtitle && (
        <p
          className="text-on-surface-variant"
          style={{
            fontSize: "var(--text-label-bold)",
            lineHeight: "var(--text-label-bold--line-height)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
