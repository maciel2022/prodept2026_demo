type Props = {
  rank: number;
  name: string;
  points: number;
  isCurrentUser?: boolean;
};

const RANK_COLORS: Record<number, { bg: string; text: string }> = {
  1: { bg: "#FFD700", text: "#1a1200" },
  2: { bg: "#C0C0C0", text: "#1a1a1a" },
  3: { bg: "#CD7F32", text: "#1a0a00" },
};

export default function LeaderboardRow({
  rank,
  name,
  points,
  isCurrentUser = false,
}: Props) {
  const rankStyle = RANK_COLORS[rank];

  return (
    <div
      className={[
        "flex items-center gap-3 rounded-full px-3 py-2 transition-all",
        isCurrentUser
          ? "border-2 border-primary-fixed"
          : "border border-outline-variant",
      ].join(" ")}
      style={
        isCurrentUser
          ? {
              background: "color-mix(in srgb, var(--color-primary-fixed) 10%, var(--color-surface-container))",
              boxShadow: "0 0 16px color-mix(in srgb, var(--color-primary-fixed) 25%, transparent)",
            }
          : {
              background: "var(--color-surface-container)",
            }
      }
      aria-current={isCurrentUser ? "true" : undefined}
    >
      {/* Rank badge */}
      <span
        className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 font-bold text-sm select-none"
        style={
          rankStyle
            ? { background: rankStyle.bg, color: rankStyle.text }
            : {
                background: "var(--color-surface-container-high)",
                color: "var(--color-on-surface-variant)",
              }
        }
        aria-label={`Rank ${rank}`}
      >
        {rank}
      </span>

      {/* Name */}
      <span
        className={[
          "flex-1 min-w-0 truncate font-semibold",
          isCurrentUser ? "text-primary-fixed" : "text-on-surface",
        ].join(" ")}
        style={{ fontSize: "var(--text-body-md)", lineHeight: "var(--text-body-md--line-height)" }}
      >
        {name}
        {isCurrentUser && (
          <span
            className="ml-2 label-bold text-primary-fixed-dim"
            style={{ fontSize: "0.6875rem" }}
          >
            YOU
          </span>
        )}
      </span>

      {/* Points */}
      <span
        className="shrink-0 font-display tabular-nums text-primary-fixed text-lg md:text-[2rem]"
        style={{
          lineHeight: 1,
        }}
        aria-label={`${points} points`}
      >
        {points}
      </span>
      <span
        className="shrink-0 label-bold text-on-surface-variant"
        style={{ fontSize: "var(--text-label-bold)" }}
      >
        pts
      </span>
    </div>
  );
}
