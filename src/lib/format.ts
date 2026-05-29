const localeMap: Record<string, string> = {
  en: "en-US",
  es: "es-AR",
};

function getIntlLocale(locale?: string): string {
  return localeMap[locale ?? "en"] ?? "en-US";
}

export function formatMatchDate(date: Date, style: "short" | "long" = "short", locale?: string): string {
  const intlLocale = getIntlLocale(locale);

  if (style === "long") {
    return new Intl.DateTimeFormat(intlLocale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    }).format(date);
  }

  return new Intl.DateTimeFormat(intlLocale, {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date);
}

const stageTranslations: Record<string, Record<string, string>> = {
  es: {
    "GROUP": "GRUPO",
    "ROUND OF 32": "16AVOS",
    "ROUND OF 16": "OCTAVOS",
    "QUARTER": "CUARTOS",
    "SEMI": "SEMIS",
    "THIRD PLACE": "3ER PUESTO",
    "FINAL": "FINAL",
  },
};

export function formatStageLabel(stage: string, group?: string | null, locale?: string): string {
  const formatted = stage.replace(/_/g, " ");
  const translated = (locale && stageTranslations[locale]?.[formatted]) ?? formatted;
  return group ? `${translated} — ${group}` : translated;
}
