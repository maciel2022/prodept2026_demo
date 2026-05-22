/**
 * Mapping from FIFA 3-letter codes to ISO 3166-1 alpha-2 codes
 * used by the `country-flag-icons` library.
 */
export const fifaToIso: Record<string, string> = {
  // Group A
  MEX: "MX",
  RSA: "ZA",
  KOR: "KR",
  CZE: "CZ",
  // Group B
  CAN: "CA",
  BIH: "BA",
  QAT: "QA",
  SUI: "CH",
  // Group C
  BRA: "BR",
  MAR: "MA",
  HAI: "HT",
  SCO: "GB", // Scotland — falls back to GB
  // Group D
  USA: "US",
  PAR: "PY",
  AUS: "AU",
  TUR: "TR",
  // Group E
  GER: "DE",
  CUW: "CW",
  CIV: "CI",
  ECU: "EC",
  // Group F
  NED: "NL",
  JPN: "JP",
  SWE: "SE",
  TUN: "TN",
  // Group G
  BEL: "BE",
  EGY: "EG",
  IRN: "IR",
  NZL: "NZ",
  // Group H
  ESP: "ES",
  CPV: "CV",
  KSA: "SA",
  URU: "UY",
  // Group I
  FRA: "FR",
  SEN: "SN",
  IRQ: "IQ",
  NOR: "NO",
  // Group J
  ARG: "AR",
  ALG: "DZ",
  AUT: "AT",
  JOR: "JO",
  // Group K
  POR: "PT",
  COD: "CD",
  UZB: "UZ",
  COL: "CO",
  // Group L
  ENG: "GB", // England — falls back to GB
  CRO: "HR",
  GHA: "GH",
  PAN: "PA",
};

export function getIsoCode(fifaCode: string): string {
  return fifaToIso[fifaCode] ?? fifaCode.substring(0, 2);
}
