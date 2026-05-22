"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { GROUP_COLORS, KNOCKOUT_STAGES } from "./constants";

const GROUPS_ROW1 = ["A", "B", "C", "D", "E", "F"];
const GROUPS_ROW2 = ["G", "H", "I", "J", "K", "L"];
const ALL_GROUPS = [...GROUPS_ROW1, ...GROUPS_ROW2];

function GroupPill({
  group,
  isActive,
  onClick,
}: {
  group: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const colors = GROUP_COLORS[group];
  return (
    <button
      onClick={onClick}
      aria-pressed={isActive}
      className="flex-1 md:flex-none shrink-0 md:w-12 md:h-12 h-9 rounded-full label-bold transition-all text-sm md:text-lg"
      style={
        isActive
          ? { background: colors.bg, color: colors.text, boxShadow: `0 0 20px ${colors.bg}60` }
          : { background: "var(--color-surface-container)", color: "var(--color-on-surface-variant)", border: "1px solid var(--color-outline-variant)" }
      }
    >
      {group}
    </button>
  );
}

export default function GroupSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeGroup = searchParams.get("group") ?? "A";
  const phase = searchParams.get("phase") ?? "groups";
  const activeStage = searchParams.get("stage") ?? "ROUND_OF_32";

  function navigate(params: Record<string, string>) {
    const sp = new URLSearchParams();
    for (const [k, v] of Object.entries(params)) sp.set(k, v);
    router.push(`/groups?${sp.toString()}`);
  }

  return (
    <div className="space-y-3 md:space-y-4">
      {/* Phase tabs */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => navigate({ phase: "groups", group: activeGroup })}
          className={[
            "py-2 md:py-2.5 rounded-xl label-bold tracking-widest transition-all text-[0.65rem] md:text-sm",
            phase === "groups"
              ? "bg-primary-fixed text-on-primary-fixed"
              : "bg-surface-container border border-outline-variant text-on-surface-variant hover:text-on-surface",
          ].join(" ")}
        >
          GROUPS
        </button>
        <button
          onClick={() => navigate({ phase: "knockouts", stage: activeStage })}
          className={[
            "py-2 md:py-2.5 rounded-xl label-bold tracking-widest transition-all text-[0.65rem] md:text-sm",
            phase === "knockouts"
              ? "bg-primary-fixed text-on-primary-fixed"
              : "bg-surface-container border border-outline-variant text-on-surface-variant hover:text-on-surface",
          ].join(" ")}
        >
          KNOCKOUTS
        </button>
      </div>

      {/* Group pills — 2 rows on mobile, single row on desktop */}
      {phase === "groups" ? (
        <>
          {/* Mobile: 2 rows of 6 */}
          <div className="flex flex-col gap-2 md:hidden">
            <div className="flex gap-1.5">
              {GROUPS_ROW1.map((g) => (
                <GroupPill key={g} group={g} isActive={g === activeGroup} onClick={() => navigate({ phase: "groups", group: g })} />
              ))}
            </div>
            <div className="flex gap-1.5">
              {GROUPS_ROW2.map((g) => (
                <GroupPill key={g} group={g} isActive={g === activeGroup} onClick={() => navigate({ phase: "groups", group: g })} />
              ))}
            </div>
          </div>
          {/* Desktop: single row */}
          <div className="hidden md:flex gap-2 overflow-x-auto pb-1">
            {ALL_GROUPS.map((g) => (
              <GroupPill key={g} group={g} isActive={g === activeGroup} onClick={() => navigate({ phase: "groups", group: g })} />
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Mobile: 2 rows of 3 */}
          <div className="flex flex-col gap-2 md:hidden">
            <div className="flex gap-1.5">
              {KNOCKOUT_STAGES.slice(0, 3).map(({ key, label, bg, text }) => {
                const isActive = key === activeStage;
                return (
                  <button
                    key={key}
                    onClick={() => navigate({ phase: "knockouts", stage: key })}
                    aria-pressed={isActive}
                    className="flex-1 h-9 rounded-full label-bold transition-all whitespace-nowrap text-[0.65rem]"
                    style={
                      isActive
                        ? { background: bg, color: text, boxShadow: `0 0 20px ${bg}60` }
                        : { background: "var(--color-surface-container)", color: "var(--color-on-surface-variant)", border: "1px solid var(--color-outline-variant)" }
                    }
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-1.5">
              {KNOCKOUT_STAGES.slice(3).map(({ key, label, bg, text }) => {
                const isActive = key === activeStage;
                return (
                  <button
                    key={key}
                    onClick={() => navigate({ phase: "knockouts", stage: key })}
                    aria-pressed={isActive}
                    className="flex-1 h-9 rounded-full label-bold transition-all whitespace-nowrap text-[0.65rem]"
                    style={
                      isActive
                        ? { background: bg, color: text, boxShadow: `0 0 20px ${bg}60` }
                        : { background: "var(--color-surface-container)", color: "var(--color-on-surface-variant)", border: "1px solid var(--color-outline-variant)" }
                    }
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Desktop: single row */}
          <div className="hidden md:flex gap-2 overflow-x-auto pb-1">
            {KNOCKOUT_STAGES.map(({ key, label, bg, text }) => {
              const isActive = key === activeStage;
              return (
                <button
                  key={key}
                  onClick={() => navigate({ phase: "knockouts", stage: key })}
                  aria-pressed={isActive}
                  className="shrink-0 px-4 py-2 rounded-full label-bold transition-all whitespace-nowrap text-sm"
                  style={
                    isActive
                      ? { background: bg, color: text, boxShadow: `0 0 20px ${bg}60` }
                      : { background: "var(--color-surface-container)", color: "var(--color-on-surface-variant)", border: "1px solid var(--color-outline-variant)" }
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
