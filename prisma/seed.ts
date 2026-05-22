/**
 * PRODEPT 2026 — Prisma seed file
 *
 * Official FIFA World Cup 2026 data.
 * 48 teams across 12 groups (A–L), 4 teams each.
 * 104 matches: 72 group stage + 16 round of 32 + 8 round of 16 + 4 QF + 2 SF + 3rd place + Final
 */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// ─────────────────────────────────────────────
// World Cup 2026 teams — official groups
// ─────────────────────────────────────────────

const TEAMS: { name: string; code: string; group: string }[] = [
  // Group A
  { name: "Mexico", code: "MEX", group: "A" },
  { name: "South Africa", code: "RSA", group: "A" },
  { name: "South Korea", code: "KOR", group: "A" },
  { name: "Czech Republic", code: "CZE", group: "A" },

  // Group B
  { name: "Canada", code: "CAN", group: "B" },
  { name: "Bosnia & Herzegovina", code: "BIH", group: "B" },
  { name: "Qatar", code: "QAT", group: "B" },
  { name: "Switzerland", code: "SUI", group: "B" },

  // Group C
  { name: "Brazil", code: "BRA", group: "C" },
  { name: "Morocco", code: "MAR", group: "C" },
  { name: "Haiti", code: "HAI", group: "C" },
  { name: "Scotland", code: "SCO", group: "C" },

  // Group D
  { name: "United States", code: "USA", group: "D" },
  { name: "Paraguay", code: "PAR", group: "D" },
  { name: "Australia", code: "AUS", group: "D" },
  { name: "Turkey", code: "TUR", group: "D" },

  // Group E
  { name: "Germany", code: "GER", group: "E" },
  { name: "Curaçao", code: "CUW", group: "E" },
  { name: "Ivory Coast", code: "CIV", group: "E" },
  { name: "Ecuador", code: "ECU", group: "E" },

  // Group F
  { name: "Netherlands", code: "NED", group: "F" },
  { name: "Japan", code: "JPN", group: "F" },
  { name: "Sweden", code: "SWE", group: "F" },
  { name: "Tunisia", code: "TUN", group: "F" },

  // Group G
  { name: "Belgium", code: "BEL", group: "G" },
  { name: "Egypt", code: "EGY", group: "G" },
  { name: "Iran", code: "IRN", group: "G" },
  { name: "New Zealand", code: "NZL", group: "G" },

  // Group H
  { name: "Spain", code: "ESP", group: "H" },
  { name: "Cape Verde", code: "CPV", group: "H" },
  { name: "Saudi Arabia", code: "KSA", group: "H" },
  { name: "Uruguay", code: "URU", group: "H" },

  // Group I
  { name: "France", code: "FRA", group: "I" },
  { name: "Senegal", code: "SEN", group: "I" },
  { name: "Iraq", code: "IRQ", group: "I" },
  { name: "Norway", code: "NOR", group: "I" },

  // Group J
  { name: "Argentina", code: "ARG", group: "J" },
  { name: "Algeria", code: "ALG", group: "J" },
  { name: "Austria", code: "AUT", group: "J" },
  { name: "Jordan", code: "JOR", group: "J" },

  // Group K
  { name: "Portugal", code: "POR", group: "K" },
  { name: "DR Congo", code: "COD", group: "K" },
  { name: "Uzbekistan", code: "UZB", group: "K" },
  { name: "Colombia", code: "COL", group: "K" },

  // Group L
  { name: "England", code: "ENG", group: "L" },
  { name: "Croatia", code: "CRO", group: "L" },
  { name: "Ghana", code: "GHA", group: "L" },
  { name: "Panama", code: "PAN", group: "L" },
];

// ─────────────────────────────────────────────
// Team logo mappings (icons in /public/icons/)
// ─────────────────────────────────────────────

const TEAM_FLAG_URLS: Record<string, string> = {
  ARG: "/icons/Logo Argentina.png",
  JOR: "/icons/Logo Jordania.png",
  ALG: "/icons/Logo Algeria.png",
  AUT: "/icons/Logo Austria.png",
};

// ─────────────────────────────────────────────
// Helper: parse UTC offset time to Date
// e.g. "2026-06-11", "13:00", -6 → Date
// ─────────────────────────────────────────────

function toUTC(date: string, time: string, utcOffset: number): Date {
  const [h, m] = time.split(":").map(Number);
  const d = new Date(`${date}T00:00:00Z`);
  d.setUTCHours(h - utcOffset, m, 0, 0);
  return d;
}

// ─────────────────────────────────────────────
// Group stage matches — all 72 matches
// ─────────────────────────────────────────────

const GROUP_MATCHES: {
  homeCode: string;
  awayCode: string;
  matchDate: Date;
  group: string;
  venue: string;
}[] = [
  // ── Group A ──────────────────────────────
  // Matchday 1 — Thu Jun 11
  { homeCode: "MEX", awayCode: "RSA", matchDate: toUTC("2026-06-11", "13:00", -6), group: "A", venue: "Estadio Azteca, Mexico City" },
  { homeCode: "KOR", awayCode: "CZE", matchDate: toUTC("2026-06-11", "20:00", -6), group: "A", venue: "Estadio Akron, Guadalajara" },
  // Matchday 2 — Thu Jun 18
  { homeCode: "CZE", awayCode: "RSA", matchDate: toUTC("2026-06-18", "12:00", -4), group: "A", venue: "Mercedes-Benz Stadium, Atlanta" },
  { homeCode: "MEX", awayCode: "KOR", matchDate: toUTC("2026-06-18", "19:00", -6), group: "A", venue: "Estadio Akron, Guadalajara" },
  // Matchday 3 — Wed Jun 24
  { homeCode: "CZE", awayCode: "MEX", matchDate: toUTC("2026-06-24", "19:00", -6), group: "A", venue: "Estadio Azteca, Mexico City" },
  { homeCode: "RSA", awayCode: "KOR", matchDate: toUTC("2026-06-24", "19:00", -6), group: "A", venue: "Estadio BBVA, Monterrey" },

  // ── Group B ──────────────────────────────
  // Matchday 1 — Fri Jun 12 / Sat Jun 13
  { homeCode: "CAN", awayCode: "BIH", matchDate: toUTC("2026-06-12", "15:00", -4), group: "B", venue: "BMO Field, Toronto" },
  { homeCode: "QAT", awayCode: "SUI", matchDate: toUTC("2026-06-13", "12:00", -7), group: "B", venue: "Levi's Stadium, Santa Clara" },
  // Matchday 2 — Thu Jun 18
  { homeCode: "SUI", awayCode: "BIH", matchDate: toUTC("2026-06-18", "12:00", -7), group: "B", venue: "SoFi Stadium, Los Angeles" },
  { homeCode: "CAN", awayCode: "QAT", matchDate: toUTC("2026-06-18", "15:00", -7), group: "B", venue: "BC Place, Vancouver" },
  // Matchday 3 — Wed Jun 24
  { homeCode: "SUI", awayCode: "CAN", matchDate: toUTC("2026-06-24", "12:00", -7), group: "B", venue: "BC Place, Vancouver" },
  { homeCode: "BIH", awayCode: "QAT", matchDate: toUTC("2026-06-24", "12:00", -7), group: "B", venue: "Lumen Field, Seattle" },

  // ── Group C ──────────────────────────────
  // Matchday 1 — Sat Jun 13
  { homeCode: "BRA", awayCode: "MAR", matchDate: toUTC("2026-06-13", "18:00", -4), group: "C", venue: "MetLife Stadium, East Rutherford" },
  { homeCode: "HAI", awayCode: "SCO", matchDate: toUTC("2026-06-13", "21:00", -4), group: "C", venue: "Gillette Stadium, Foxborough" },
  // Matchday 2 — Fri Jun 19
  { homeCode: "SCO", awayCode: "MAR", matchDate: toUTC("2026-06-19", "18:00", -4), group: "C", venue: "Gillette Stadium, Foxborough" },
  { homeCode: "BRA", awayCode: "HAI", matchDate: toUTC("2026-06-19", "20:30", -4), group: "C", venue: "Lincoln Financial Field, Philadelphia" },
  // Matchday 3 — Wed Jun 24
  { homeCode: "SCO", awayCode: "BRA", matchDate: toUTC("2026-06-24", "18:00", -4), group: "C", venue: "Hard Rock Stadium, Miami" },
  { homeCode: "MAR", awayCode: "HAI", matchDate: toUTC("2026-06-24", "18:00", -4), group: "C", venue: "Mercedes-Benz Stadium, Atlanta" },

  // ── Group D ──────────────────────────────
  // Matchday 1 — Fri Jun 12 / Sat Jun 13
  { homeCode: "USA", awayCode: "PAR", matchDate: toUTC("2026-06-12", "18:00", -7), group: "D", venue: "SoFi Stadium, Los Angeles" },
  { homeCode: "AUS", awayCode: "TUR", matchDate: toUTC("2026-06-13", "21:00", -7), group: "D", venue: "BC Place, Vancouver" },
  // Matchday 2 — Fri Jun 19
  { homeCode: "USA", awayCode: "AUS", matchDate: toUTC("2026-06-19", "12:00", -7), group: "D", venue: "Lumen Field, Seattle" },
  { homeCode: "TUR", awayCode: "PAR", matchDate: toUTC("2026-06-19", "20:00", -7), group: "D", venue: "Levi's Stadium, Santa Clara" },
  // Matchday 3 — Thu Jun 25
  { homeCode: "TUR", awayCode: "USA", matchDate: toUTC("2026-06-25", "19:00", -7), group: "D", venue: "SoFi Stadium, Los Angeles" },
  { homeCode: "PAR", awayCode: "AUS", matchDate: toUTC("2026-06-25", "19:00", -7), group: "D", venue: "Levi's Stadium, Santa Clara" },

  // ── Group E ──────────────────────────────
  // Matchday 1 — Sun Jun 14
  { homeCode: "GER", awayCode: "CUW", matchDate: toUTC("2026-06-14", "12:00", -5), group: "E", venue: "NRG Stadium, Houston" },
  { homeCode: "CIV", awayCode: "ECU", matchDate: toUTC("2026-06-14", "19:00", -4), group: "E", venue: "Lincoln Financial Field, Philadelphia" },
  // Matchday 2 — Sat Jun 20
  { homeCode: "GER", awayCode: "CIV", matchDate: toUTC("2026-06-20", "16:00", -4), group: "E", venue: "BMO Field, Toronto" },
  { homeCode: "ECU", awayCode: "CUW", matchDate: toUTC("2026-06-20", "19:00", -5), group: "E", venue: "Arrowhead Stadium, Kansas City" },
  // Matchday 3 — Thu Jun 25
  { homeCode: "CUW", awayCode: "CIV", matchDate: toUTC("2026-06-25", "16:00", -4), group: "E", venue: "Lincoln Financial Field, Philadelphia" },
  { homeCode: "ECU", awayCode: "GER", matchDate: toUTC("2026-06-25", "16:00", -4), group: "E", venue: "MetLife Stadium, East Rutherford" },

  // ── Group F ──────────────────────────────
  // Matchday 1 — Sun Jun 14
  { homeCode: "NED", awayCode: "JPN", matchDate: toUTC("2026-06-14", "15:00", -5), group: "F", venue: "AT&T Stadium, Dallas" },
  { homeCode: "SWE", awayCode: "TUN", matchDate: toUTC("2026-06-14", "20:00", -6), group: "F", venue: "Estadio BBVA, Monterrey" },
  // Matchday 2 — Sat Jun 20
  { homeCode: "NED", awayCode: "SWE", matchDate: toUTC("2026-06-20", "12:00", -5), group: "F", venue: "NRG Stadium, Houston" },
  { homeCode: "TUN", awayCode: "JPN", matchDate: toUTC("2026-06-20", "22:00", -6), group: "F", venue: "Estadio BBVA, Monterrey" },
  // Matchday 3 — Thu Jun 25
  { homeCode: "JPN", awayCode: "SWE", matchDate: toUTC("2026-06-25", "18:00", -5), group: "F", venue: "AT&T Stadium, Dallas" },
  { homeCode: "TUN", awayCode: "NED", matchDate: toUTC("2026-06-25", "18:00", -5), group: "F", venue: "Arrowhead Stadium, Kansas City" },

  // ── Group G ──────────────────────────────
  // Matchday 1 — Mon Jun 15
  { homeCode: "BEL", awayCode: "EGY", matchDate: toUTC("2026-06-15", "12:00", -7), group: "G", venue: "Lumen Field, Seattle" },
  { homeCode: "IRN", awayCode: "NZL", matchDate: toUTC("2026-06-15", "18:00", -7), group: "G", venue: "SoFi Stadium, Los Angeles" },
  // Matchday 2 — Sun Jun 21
  { homeCode: "BEL", awayCode: "IRN", matchDate: toUTC("2026-06-21", "12:00", -7), group: "G", venue: "SoFi Stadium, Los Angeles" },
  { homeCode: "NZL", awayCode: "EGY", matchDate: toUTC("2026-06-21", "18:00", -7), group: "G", venue: "BC Place, Vancouver" },
  // Matchday 3 — Fri Jun 26
  { homeCode: "EGY", awayCode: "IRN", matchDate: toUTC("2026-06-26", "20:00", -7), group: "G", venue: "Lumen Field, Seattle" },
  { homeCode: "NZL", awayCode: "BEL", matchDate: toUTC("2026-06-26", "20:00", -7), group: "G", venue: "BC Place, Vancouver" },

  // ── Group H ──────────────────────────────
  // Matchday 1 — Mon Jun 15
  { homeCode: "ESP", awayCode: "CPV", matchDate: toUTC("2026-06-15", "12:00", -4), group: "H", venue: "Mercedes-Benz Stadium, Atlanta" },
  { homeCode: "KSA", awayCode: "URU", matchDate: toUTC("2026-06-15", "18:00", -4), group: "H", venue: "Hard Rock Stadium, Miami" },
  // Matchday 2 — Sun Jun 21
  { homeCode: "ESP", awayCode: "KSA", matchDate: toUTC("2026-06-21", "12:00", -4), group: "H", venue: "Mercedes-Benz Stadium, Atlanta" },
  { homeCode: "URU", awayCode: "CPV", matchDate: toUTC("2026-06-21", "18:00", -4), group: "H", venue: "Hard Rock Stadium, Miami" },
  // Matchday 3 — Fri Jun 26
  { homeCode: "CPV", awayCode: "KSA", matchDate: toUTC("2026-06-26", "19:00", -5), group: "H", venue: "NRG Stadium, Houston" },
  { homeCode: "URU", awayCode: "ESP", matchDate: toUTC("2026-06-26", "18:00", -6), group: "H", venue: "Estadio Akron, Guadalajara" },

  // ── Group I ──────────────────────────────
  // Matchday 1 — Tue Jun 16
  { homeCode: "FRA", awayCode: "SEN", matchDate: toUTC("2026-06-16", "15:00", -4), group: "I", venue: "MetLife Stadium, East Rutherford" },
  { homeCode: "IRQ", awayCode: "NOR", matchDate: toUTC("2026-06-16", "18:00", -4), group: "I", venue: "Gillette Stadium, Foxborough" },
  // Matchday 2 — Mon Jun 22
  { homeCode: "FRA", awayCode: "IRQ", matchDate: toUTC("2026-06-22", "17:00", -4), group: "I", venue: "Lincoln Financial Field, Philadelphia" },
  { homeCode: "NOR", awayCode: "SEN", matchDate: toUTC("2026-06-22", "20:00", -4), group: "I", venue: "MetLife Stadium, East Rutherford" },
  // Matchday 3 — Fri Jun 26
  { homeCode: "NOR", awayCode: "FRA", matchDate: toUTC("2026-06-26", "15:00", -4), group: "I", venue: "Gillette Stadium, Foxborough" },
  { homeCode: "SEN", awayCode: "IRQ", matchDate: toUTC("2026-06-26", "15:00", -4), group: "I", venue: "BMO Field, Toronto" },

  // ── Group J ──────────────────────────────
  // Matchday 1 — Tue Jun 16
  { homeCode: "ARG", awayCode: "ALG", matchDate: toUTC("2026-06-16", "20:00", -5), group: "J", venue: "Arrowhead Stadium, Kansas City" },
  { homeCode: "AUT", awayCode: "JOR", matchDate: toUTC("2026-06-16", "21:00", -7), group: "J", venue: "Levi's Stadium, Santa Clara" },
  // Matchday 2 — Mon Jun 22
  { homeCode: "ARG", awayCode: "AUT", matchDate: toUTC("2026-06-22", "12:00", -5), group: "J", venue: "AT&T Stadium, Dallas" },
  { homeCode: "JOR", awayCode: "ALG", matchDate: toUTC("2026-06-22", "20:00", -7), group: "J", venue: "Levi's Stadium, Santa Clara" },
  // Matchday 3 — Sat Jun 27
  { homeCode: "ALG", awayCode: "AUT", matchDate: toUTC("2026-06-27", "21:00", -5), group: "J", venue: "Arrowhead Stadium, Kansas City" },
  { homeCode: "JOR", awayCode: "ARG", matchDate: toUTC("2026-06-27", "21:00", -5), group: "J", venue: "AT&T Stadium, Dallas" },

  // ── Group K ──────────────────────────────
  // Matchday 1 — Wed Jun 17
  { homeCode: "POR", awayCode: "COD", matchDate: toUTC("2026-06-17", "12:00", -5), group: "K", venue: "NRG Stadium, Houston" },
  { homeCode: "UZB", awayCode: "COL", matchDate: toUTC("2026-06-17", "20:00", -6), group: "K", venue: "Estadio Azteca, Mexico City" },
  // Matchday 2 — Tue Jun 23
  { homeCode: "POR", awayCode: "UZB", matchDate: toUTC("2026-06-23", "12:00", -5), group: "K", venue: "NRG Stadium, Houston" },
  { homeCode: "COL", awayCode: "COD", matchDate: toUTC("2026-06-23", "20:00", -6), group: "K", venue: "Estadio Akron, Guadalajara" },
  // Matchday 3 — Sat Jun 27
  { homeCode: "COL", awayCode: "POR", matchDate: toUTC("2026-06-27", "19:30", -4), group: "K", venue: "Hard Rock Stadium, Miami" },
  { homeCode: "COD", awayCode: "UZB", matchDate: toUTC("2026-06-27", "19:30", -4), group: "K", venue: "Mercedes-Benz Stadium, Atlanta" },

  // ── Group L ──────────────────────────────
  // Matchday 1 — Wed Jun 17
  { homeCode: "ENG", awayCode: "CRO", matchDate: toUTC("2026-06-17", "15:00", -5), group: "L", venue: "AT&T Stadium, Dallas" },
  { homeCode: "GHA", awayCode: "PAN", matchDate: toUTC("2026-06-17", "19:00", -4), group: "L", venue: "BMO Field, Toronto" },
  // Matchday 2 — Tue Jun 23
  { homeCode: "ENG", awayCode: "GHA", matchDate: toUTC("2026-06-23", "16:00", -4), group: "L", venue: "Gillette Stadium, Foxborough" },
  { homeCode: "PAN", awayCode: "CRO", matchDate: toUTC("2026-06-23", "19:00", -4), group: "L", venue: "BMO Field, Toronto" },
  // Matchday 3 — Sat Jun 27
  { homeCode: "PAN", awayCode: "ENG", matchDate: toUTC("2026-06-27", "17:00", -4), group: "L", venue: "MetLife Stadium, East Rutherford" },
  { homeCode: "CRO", awayCode: "GHA", matchDate: toUTC("2026-06-27", "17:00", -4), group: "L", venue: "Lincoln Financial Field, Philadelphia" },
];

// ─────────────────────────────────────────────
// Knockout stage matches (teams TBD — placeholders)
// ─────────────────────────────────────────────

const KNOCKOUT_MATCHES: {
  matchNum: number;
  stage: "ROUND_OF_32" | "ROUND_OF_16" | "QUARTER" | "SEMI" | "THIRD_PLACE" | "FINAL";
  matchDate: Date;
  venue: string;
  label: string; // e.g. "2A v 2B" or "W74 v W77"
}[] = [
  // Round of 32
  { matchNum: 73, stage: "ROUND_OF_32", matchDate: toUTC("2026-06-28", "12:00", -7), venue: "SoFi Stadium, Los Angeles", label: "2A v 2B" },
  { matchNum: 74, stage: "ROUND_OF_32", matchDate: toUTC("2026-06-29", "16:30", -4), venue: "Gillette Stadium, Foxborough", label: "1E v 3rd" },
  { matchNum: 75, stage: "ROUND_OF_32", matchDate: toUTC("2026-06-29", "19:00", -6), venue: "Estadio BBVA, Monterrey", label: "1F v 2C" },
  { matchNum: 76, stage: "ROUND_OF_32", matchDate: toUTC("2026-06-29", "12:00", -5), venue: "NRG Stadium, Houston", label: "1C v 2F" },
  { matchNum: 77, stage: "ROUND_OF_32", matchDate: toUTC("2026-06-30", "17:00", -4), venue: "MetLife Stadium, East Rutherford", label: "1I v 3rd" },
  { matchNum: 78, stage: "ROUND_OF_32", matchDate: toUTC("2026-06-30", "12:00", -5), venue: "AT&T Stadium, Dallas", label: "2E v 2I" },
  { matchNum: 79, stage: "ROUND_OF_32", matchDate: toUTC("2026-06-30", "19:00", -6), venue: "Estadio Azteca, Mexico City", label: "1A v 3rd" },
  { matchNum: 80, stage: "ROUND_OF_32", matchDate: toUTC("2026-07-01", "12:00", -4), venue: "Mercedes-Benz Stadium, Atlanta", label: "1L v 3rd" },
  { matchNum: 81, stage: "ROUND_OF_32", matchDate: toUTC("2026-07-01", "17:00", -7), venue: "Levi's Stadium, Santa Clara", label: "1D v 3rd" },
  { matchNum: 82, stage: "ROUND_OF_32", matchDate: toUTC("2026-07-01", "13:00", -7), venue: "Lumen Field, Seattle", label: "1G v 3rd" },
  { matchNum: 83, stage: "ROUND_OF_32", matchDate: toUTC("2026-07-02", "19:00", -4), venue: "BMO Field, Toronto", label: "2K v 2L" },
  { matchNum: 84, stage: "ROUND_OF_32", matchDate: toUTC("2026-07-02", "12:00", -7), venue: "SoFi Stadium, Los Angeles", label: "1H v 2J" },
  { matchNum: 85, stage: "ROUND_OF_32", matchDate: toUTC("2026-07-02", "20:00", -7), venue: "BC Place, Vancouver", label: "1B v 3rd" },
  { matchNum: 86, stage: "ROUND_OF_32", matchDate: toUTC("2026-07-03", "18:00", -4), venue: "Hard Rock Stadium, Miami", label: "1J v 2H" },
  { matchNum: 87, stage: "ROUND_OF_32", matchDate: toUTC("2026-07-03", "20:30", -5), venue: "Arrowhead Stadium, Kansas City", label: "1K v 3rd" },
  { matchNum: 88, stage: "ROUND_OF_32", matchDate: toUTC("2026-07-03", "13:00", -5), venue: "AT&T Stadium, Dallas", label: "2D v 2G" },

  // Round of 16
  { matchNum: 89, stage: "ROUND_OF_16", matchDate: toUTC("2026-07-04", "17:00", -4), venue: "Lincoln Financial Field, Philadelphia", label: "W74 v W77" },
  { matchNum: 90, stage: "ROUND_OF_16", matchDate: toUTC("2026-07-04", "12:00", -5), venue: "NRG Stadium, Houston", label: "W73 v W75" },
  { matchNum: 91, stage: "ROUND_OF_16", matchDate: toUTC("2026-07-05", "16:00", -4), venue: "MetLife Stadium, East Rutherford", label: "W76 v W78" },
  { matchNum: 92, stage: "ROUND_OF_16", matchDate: toUTC("2026-07-05", "18:00", -6), venue: "Estadio Azteca, Mexico City", label: "W79 v W80" },
  { matchNum: 93, stage: "ROUND_OF_16", matchDate: toUTC("2026-07-06", "14:00", -5), venue: "AT&T Stadium, Dallas", label: "W83 v W84" },
  { matchNum: 94, stage: "ROUND_OF_16", matchDate: toUTC("2026-07-06", "17:00", -7), venue: "Lumen Field, Seattle", label: "W81 v W82" },
  { matchNum: 95, stage: "ROUND_OF_16", matchDate: toUTC("2026-07-07", "12:00", -4), venue: "Mercedes-Benz Stadium, Atlanta", label: "W86 v W88" },
  { matchNum: 96, stage: "ROUND_OF_16", matchDate: toUTC("2026-07-07", "13:00", -7), venue: "BC Place, Vancouver", label: "W85 v W87" },

  // Quarter-finals
  { matchNum: 97, stage: "QUARTER", matchDate: toUTC("2026-07-09", "16:00", -4), venue: "Gillette Stadium, Foxborough", label: "W89 v W90" },
  { matchNum: 98, stage: "QUARTER", matchDate: toUTC("2026-07-10", "12:00", -7), venue: "SoFi Stadium, Los Angeles", label: "W93 v W94" },
  { matchNum: 99, stage: "QUARTER", matchDate: toUTC("2026-07-11", "17:00", -4), venue: "Hard Rock Stadium, Miami", label: "W91 v W92" },
  { matchNum: 100, stage: "QUARTER", matchDate: toUTC("2026-07-11", "20:00", -5), venue: "Arrowhead Stadium, Kansas City", label: "W95 v W96" },

  // Semi-finals
  { matchNum: 101, stage: "SEMI", matchDate: toUTC("2026-07-14", "14:00", -5), venue: "AT&T Stadium, Dallas", label: "W97 v W98" },
  { matchNum: 102, stage: "SEMI", matchDate: toUTC("2026-07-15", "15:00", -4), venue: "Mercedes-Benz Stadium, Atlanta", label: "W99 v W100" },

  // Third place
  { matchNum: 103, stage: "THIRD_PLACE", matchDate: toUTC("2026-07-18", "17:00", -4), venue: "Hard Rock Stadium, Miami", label: "L101 v L102" },

  // Final
  { matchNum: 104, stage: "FINAL", matchDate: toUTC("2026-07-19", "15:00", -4), venue: "MetLife Stadium, East Rutherford", label: "W101 v W102" },
];

// ─────────────────────────────────────────────
// Seed
// ─────────────────────────────────────────────

async function main() {
  console.log("Seeding database...\n");

  // 1. Upsert teams
  console.log("[1/6] Creating 48 teams...");
  const teamMap: Record<string, string> = {};

  for (const t of TEAMS) {
    const flagUrl = TEAM_FLAG_URLS[t.code] ?? "";
    const team = await prisma.team.upsert({
      where: { code: t.code },
      update: { name: t.name, group: t.group, flagUrl },
      create: { name: t.name, code: t.code, group: t.group, flagUrl },
    });
    teamMap[t.code] = team.id;
  }
  console.log(`  ✓ ${TEAMS.length} teams ready.`);

  // 2. Delete old matches (clean slate)
  console.log("\n[2/6] Cleaning old matches...");
  await prisma.prediction.deleteMany();
  await prisma.match.deleteMany();
  console.log("  ✓ Old matches and predictions cleared.");

  // 3. Create group stage matches
  console.log("\n[3/6] Creating group stage matches...");
  let groupCount = 0;
  for (const m of GROUP_MATCHES) {
    const homeId = teamMap[m.homeCode];
    const awayId = teamMap[m.awayCode];
    if (!homeId || !awayId) {
      console.warn(`  ⚠ Skipping ${m.homeCode} vs ${m.awayCode} — team not found`);
      continue;
    }
    await prisma.match.create({
      data: {
        homeTeamId: homeId,
        awayTeamId: awayId,
        matchDate: m.matchDate,
        stage: "GROUP",
        group: m.group,
        venue: m.venue,
        status: "SCHEDULED",
      },
    });
    groupCount++;
  }
  console.log(`  ✓ ${groupCount} group stage matches created.`);

  // 4. Create knockout matches (no teams assigned yet — use placeholder team)
  console.log("\n[4/6] Creating knockout stage matches...");
  // We need a placeholder team for TBD knockout matches
  let tbdTeam = await prisma.team.findUnique({ where: { code: "TBD" } });
  if (!tbdTeam) {
    tbdTeam = await prisma.team.create({
      data: { name: "TBD", code: "TBD", group: "-", flagUrl: "" },
    });
  }

  let knockoutCount = 0;
  for (const m of KNOCKOUT_MATCHES) {
    await prisma.match.create({
      data: {
        homeTeamId: tbdTeam.id,
        awayTeamId: tbdTeam.id,
        matchDate: m.matchDate,
        stage: m.stage,
        group: null,
        venue: m.venue,
        status: "SCHEDULED",
      },
    });
    knockoutCount++;
  }
  console.log(`  ✓ ${knockoutCount} knockout matches created.`);

  // 5. Users (16 total)
  console.log("\n[5/8] Creating 16 users...");
  const pw = await bcrypt.hash("demo123", 12);

  const USERS_DATA = [
    { name: "Demo User",          email: "demo@prodept.com" },
    { name: "Admin PRODEPT",      email: "admin@prodept.com",      isAdmin: true },
    { name: "Maciel Fernandez",   email: "maciel@deptagency.com" },
    { name: "Sofia Martinez",     email: "sofia@deptagency.com" },
    { name: "Lucas Thompson",     email: "lucas@deptagency.com" },
    { name: "Ana Rodriguez",      email: "ana@deptagency.com" },
    { name: "James Wilson",       email: "james@deptagency.com" },
    { name: "Valentina Cruz",     email: "valentina@deptagency.com" },
    { name: "Diego Morales",      email: "diego@deptagency.com" },
    { name: "Emma Chen",          email: "emma@deptagency.com" },
    { name: "Carlos Ruiz",        email: "carlos@deptagency.com" },
    { name: "Olivia Park",        email: "olivia@deptagency.com" },
    { name: "Rafael Silva",       email: "rafael@deptagency.com" },
    { name: "Mia Johnson",        email: "mia@deptagency.com" },
    { name: "Tomas Herrera",      email: "tomas@deptagency.com" },
    { name: "Aisha Patel",        email: "aisha@deptagency.com" },
  ];

  const users: Record<string, string> = {}; // email -> id
  for (const u of USERS_DATA) {
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: { isAdmin: (u as { isAdmin?: boolean }).isAdmin ?? false },
      create: { name: u.name, email: u.email, password: pw, isAdmin: (u as { isAdmin?: boolean }).isAdmin ?? false },
    });
    users[u.email] = user.id;
  }
  const allUserIds = Object.values(users);
  console.log(`  ✓ ${USERS_DATA.length} users ready.`);

  // 6. Leagues (1 global + 5 private)
  console.log("\n[6/8] Creating leagues...");
  const LEAGUES_DATA = [
    { name: "PRODEPT Main League", code: "PRODEPT2026", isGlobal: true, ownerEmail: "admin@prodept.com", memberEmails: USERS_DATA.map(u => u.email) },
    { name: "The Office Champions", code: "CHAMPS", isGlobal: false, ownerEmail: "maciel@deptagency.com", memberEmails: ["maciel@deptagency.com", "sofia@deptagency.com", "lucas@deptagency.com", "ana@deptagency.com", "diego@deptagency.com", "emma@deptagency.com"] },
    { name: "Marketing Legends", code: "MKTLEG", isGlobal: false, ownerEmail: "sofia@deptagency.com", memberEmails: ["sofia@deptagency.com", "james@deptagency.com", "valentina@deptagency.com", "olivia@deptagency.com", "mia@deptagency.com", "aisha@deptagency.com"] },
    { name: "Dev Team Prode", code: "DEVTM3", isGlobal: false, ownerEmail: "james@deptagency.com", memberEmails: ["maciel@deptagency.com", "ana@deptagency.com", "james@deptagency.com", "carlos@deptagency.com", "tomas@deptagency.com", "rafael@deptagency.com"] },
    { name: "Buenos Aires FC", code: "BAIRES", isGlobal: false, ownerEmail: "diego@deptagency.com", memberEmails: ["diego@deptagency.com", "carlos@deptagency.com", "rafael@deptagency.com", "tomas@deptagency.com", "maciel@deptagency.com", "demo@prodept.com"] },
    { name: "World Cup Nerds", code: "WCNERD", isGlobal: false, ownerEmail: "emma@deptagency.com", memberEmails: ["emma@deptagency.com", "olivia@deptagency.com", "aisha@deptagency.com", "valentina@deptagency.com", "ana@deptagency.com", "sofia@deptagency.com"] },
  ];

  for (const l of LEAGUES_DATA) {
    const league = await prisma.league.upsert({
      where: { code: l.code },
      update: { name: l.name },
      create: { name: l.name, code: l.code, isGlobal: l.isGlobal, ownerId: users[l.ownerEmail] },
    });
    for (const email of l.memberEmails) {
      await prisma.leagueMember.upsert({
        where: { leagueId_userId: { leagueId: league.id, userId: users[email] } },
        update: {},
        create: { leagueId: league.id, userId: users[email] },
      });
    }
  }
  console.log(`  ✓ ${LEAGUES_DATA.length} leagues ready.`);

  // 7. Update match results for Groups A-D (24 matches FINISHED) + Group E md1 LIVE
  console.log("\n[7/8] Setting match results (Groups A-D finished, E live)...");

  // Fetch all group matches sorted by date
  const allGroupMatches = await prisma.match.findMany({
    where: { stage: "GROUP" },
    orderBy: { matchDate: "asc" },
    include: { homeTeam: true, awayTeam: true },
  });

  // Groups A-D = first 24 matches (6 per group × 4 groups)
  const FAKE_RESULTS: [number, number][] = [
    // Group A (MEX, RSA, KOR, CZE)
    [2, 1], [1, 1], [0, 2], [3, 0], [1, 1], [2, 0],
    // Group B (CAN, BIH, QAT, SUI)
    [1, 0], [0, 3], [1, 1], [2, 1], [0, 1], [1, 2],
    // Group C (BRA, MAR, HAI, SCO)
    [2, 2], [0, 1], [1, 0], [4, 0], [1, 2], [3, 1],
    // Group D (USA, PAR, AUS, TUR)
    [3, 1], [1, 1], [2, 0], [0, 0], [1, 2], [2, 1],
  ];

  // Set finished results + move dates to past
  for (let i = 0; i < 24 && i < allGroupMatches.length; i++) {
    const m = allGroupMatches[i];
    const pastDate = new Date("2026-05-14T12:00:00Z");
    pastDate.setDate(pastDate.getDate() + Math.floor(i / 2)); // spread over ~12 days
    await prisma.match.update({
      where: { id: m.id },
      data: {
        homeScore: FAKE_RESULTS[i][0],
        awayScore: FAKE_RESULTS[i][1],
        status: "FINISHED",
        matchDate: pastDate,
      },
    });
  }

  // Group E matchday 1 = matches 24,25 → set LIVE
  for (let i = 24; i < 26 && i < allGroupMatches.length; i++) {
    await prisma.match.update({
      where: { id: allGroupMatches[i].id },
      data: { status: "LIVE" },
    });
  }
  console.log("  ✓ 24 matches FINISHED, 2 LIVE.");

  // 8. Create predictions for all users
  console.log("\n[8/8] Creating predictions...");

  // Helper: calculate points
  function calcPoints(pH: number, pA: number, aH: number, aA: number): number {
    if (pH === aH && pA === aA) return 5;
    let pts = 0;
    if (Math.sign(pH - pA) === Math.sign(aH - aA)) pts += 3;
    if ((pH - pA) === (aH - aA)) pts += 1;
    return pts;
  }

  // Prediction patterns per user tier
  // offset: how far off from actual result (0 = exact, 1 = close, 2 = random)
  type Tier = { emails: string[]; coverage: number; accuracy: "high" | "medium" | "low" };
  const TIERS: Tier[] = [
    { emails: ["ana@deptagency.com", "diego@deptagency.com"], coverage: 1.0, accuracy: "high" },
    { emails: ["sofia@deptagency.com", "tomas@deptagency.com", "aisha@deptagency.com"], coverage: 1.0, accuracy: "high" },
    { emails: ["maciel@deptagency.com", "james@deptagency.com", "emma@deptagency.com"], coverage: 1.0, accuracy: "medium" },
    { emails: ["carlos@deptagency.com", "rafael@deptagency.com", "olivia@deptagency.com"], coverage: 0.85, accuracy: "low" },
    { emails: ["lucas@deptagency.com", "demo@prodept.com", "admin@prodept.com"], coverage: 0.6, accuracy: "medium" },
    { emails: ["valentina@deptagency.com", "mia@deptagency.com"], coverage: 0.25, accuracy: "low" },
  ];

  // Deterministic "random" based on index
  function pseudoRandom(seed: number): number {
    return ((seed * 9301 + 49297) % 233280) / 233280;
  }

  let predCount = 0;
  const finishedMatches = allGroupMatches.slice(0, 24);

  for (const tier of TIERS) {
    for (const email of tier.emails) {
      const userId = users[email];
      for (let i = 0; i < finishedMatches.length; i++) {
        // Skip some matches based on coverage
        const r = pseudoRandom(i * 100 + email.length * 7);
        if (r > tier.coverage) continue;

        const m = finishedMatches[i];
        const actualH = FAKE_RESULTS[i][0];
        const actualA = FAKE_RESULTS[i][1];

        let predH: number, predA: number;
        const r2 = pseudoRandom(i * 31 + email.length * 13 + 7);

        if (tier.accuracy === "high") {
          if (r2 < 0.3) { predH = actualH; predA = actualA; } // exact
          else if (r2 < 0.7) { predH = actualH; predA = actualA + (r2 < 0.5 ? 1 : -1); predA = Math.max(0, predA); } // close
          else { predH = Math.max(0, actualH + (r2 < 0.85 ? 1 : -1)); predA = actualA; }
        } else if (tier.accuracy === "medium") {
          if (r2 < 0.15) { predH = actualH; predA = actualA; }
          else if (r2 < 0.5) { predH = Math.max(0, actualH + 1); predA = actualA; }
          else { predH = Math.round(r2 * 3); predA = Math.round((1 - r2) * 2); }
        } else {
          predH = Math.round(r2 * 4);
          predA = Math.round((1 - r2) * 3);
        }

        const points = calcPoints(predH, predA, actualH, actualA);
        await prisma.prediction.upsert({
          where: { userId_matchId: { userId, matchId: m.id } },
          update: { homeScore: predH, awayScore: predA, points },
          create: { userId, matchId: m.id, homeScore: predH, awayScore: predA, points },
        });
        predCount++;
      }

      // Add some future predictions (for SCHEDULED matches) for top/high tiers
      if (tier.accuracy === "high" || tier.accuracy === "medium") {
        const futureCount = tier.accuracy === "high" ? 6 : 2;
        const scheduledMatches = allGroupMatches.filter(m => m.status === "SCHEDULED").slice(0, futureCount);
        for (const m of scheduledMatches) {
          const r3 = pseudoRandom(m.id.length + email.length);
          const predH = Math.round(r3 * 3);
          const predA = Math.round((1 - r3) * 2);
          await prisma.prediction.upsert({
            where: { userId_matchId: { userId, matchId: m.id } },
            update: { homeScore: predH, awayScore: predA },
            create: { userId, matchId: m.id, homeScore: predH, awayScore: predA },
          });
          predCount++;
        }
      }
    }
  }
  console.log(`  ✓ ${predCount} predictions created.`);

  console.log(`\n✓ Dev seed complete! ${groupCount + knockoutCount} matches, ${USERS_DATA.length} users, ${LEAGUES_DATA.length} leagues.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
