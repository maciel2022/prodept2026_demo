"use client";

import { useState } from "react";
import { SoccerBall, ClockCounterClockwise } from "@phosphor-icons/react/dist/ssr";

type Props = {
  upcomingCount: number;
  historyCount: number;
  upcoming: React.ReactNode;
  history: React.ReactNode;
};

export default function PredictionTabs({
  upcomingCount,
  historyCount,
  upcoming,
  history,
}: Props) {
  const [tab, setTab] = useState<"upcoming" | "history">("upcoming");

  return (
    <div className="space-y-6">
      {/* Tab switcher */}
      <div
        className="flex rounded-xl p-1 gap-1"
        style={{ background: "var(--color-surface-container)" }}
        role="tablist"
      >
        <button
          role="tab"
          aria-selected={tab === "upcoming"}
          onClick={() => setTab("upcoming")}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg label-bold tracking-widest text-xs transition-all cursor-pointer"
          style={{
            background: tab === "upcoming"
              ? "linear-gradient(135deg, var(--color-primary-fixed-dim), var(--color-secondary-container))"
              : "transparent",
            color: tab === "upcoming" ? "#fff" : "var(--color-on-surface-variant)",
          }}
        >
          <SoccerBall size={16} weight={tab === "upcoming" ? "fill" : "regular"} />
          UPCOMING ({upcomingCount})
        </button>
        <button
          role="tab"
          aria-selected={tab === "history"}
          onClick={() => setTab("history")}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg label-bold tracking-widest text-xs transition-all cursor-pointer"
          style={{
            background: tab === "history"
              ? "linear-gradient(135deg, var(--color-primary-fixed-dim), var(--color-secondary-container))"
              : "transparent",
            color: tab === "history" ? "#fff" : "var(--color-on-surface-variant)",
          }}
        >
          <ClockCounterClockwise size={16} weight={tab === "history" ? "fill" : "regular"} />
          MY HISTORY ({historyCount})
        </button>
      </div>

      {/* Tab content */}
      <div role="tabpanel">
        {tab === "upcoming" ? upcoming : history}
      </div>
    </div>
  );
}
