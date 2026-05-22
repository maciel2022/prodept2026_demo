const shortFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
});

const longFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
});

export function formatMatchDate(date: Date, style: "short" | "long" = "short"): string {
  return style === "long" ? longFormatter.format(date) : shortFormatter.format(date);
}

export function formatStageLabel(stage: string, group?: string | null): string {
  const formatted = stage.replace(/_/g, " ");
  return group ? `${formatted} — ${group}` : formatted;
}
