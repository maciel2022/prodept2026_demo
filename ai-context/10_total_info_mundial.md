# World Cup 2026 — Complete Tournament Data

> Reference data for the FIFA World Cup 2026 (Canada, USA, Mexico).
> This data is used by `prisma/seed.ts` to populate all 104 matches.

= World Cup 2026      # in Canada, USA, and Mexico

#  104 matches featuring 48 teams played across 16 host cities in three countries

# Stadiums:
# - Estadio Azteca, Mexico City (MEX) — UTC-6
# - Estadio BBVA, Monterrey (MEX) — UTC-6
# - Estadio Akron, Guadalajara (MEX) — UTC-6
# - AT&T Stadium, Dallas (USA) — UTC-5
# - NRG Stadium, Houston (USA) — UTC-5
# - Arrowhead Stadium, Kansas City (USA) — UTC-5
# - SoFi Stadium, Los Angeles (USA) — UTC-7
# - Levi's Stadium, Santa Clara (USA) — UTC-7
# - Lumen Field, Seattle (USA) — UTC-7
# - BC Place, Vancouver (CAN) — UTC-7
# - MetLife Stadium, East Rutherford (USA) — UTC-4
# - Lincoln Financial Field, Philadelphia (USA) — UTC-4
# - Hard Rock Stadium, Miami (USA) — UTC-4
# - Mercedes-Benz Stadium, Atlanta (USA) — UTC-4
# - Gillette Stadium, Foxborough (USA) — UTC-4
# - BMO Field, Toronto (CAN) — UTC-4

# Groups (48 teams, 12 groups of 4):
# Group A: Mexico, South Africa, South Korea, Czech Republic
# Group B: Canada, Bosnia & Herzegovina, Qatar, Switzerland
# Group C: Brazil, Morocco, Haiti, Scotland
# Group D: United States, Paraguay, Australia, Turkey
# Group E: Germany, Curaçao, Ivory Coast, Ecuador
# Group F: Netherlands, Japan, Sweden, Tunisia
# Group G: Belgium, Egypt, Iran, New Zealand
# Group H: Spain, Cape Verde, Saudi Arabia, Uruguay
# Group I: France, Senegal, Iraq, Norway
# Group J: Argentina, Algeria, Austria, Jordan
# Group K: Portugal, DR Congo, Uzbekistan, Colombia
# Group L: England, Croatia, Ghana, Panama

# FIFA Official Name Normalizations:
#   Korea Republic (not South Korea)
#   IR Iran (not Iran)
#   Cabo Verde (not Cape Verde)
#   Congo DR (not DR Congo)
#   Côte d'Ivoire (not Ivory Coast)
#   Czechia (not Czech Republic)
#   Türkiye (not Turkey)

# Note: possible 3-matchday group stage format (3 games per team)

# ─── GROUP STAGE ───────────────────────────────────────────────────────────────

# Group A
# Matchday 1 — Thu Jun 11
Match 1: Mexico vs South Africa         — 13:00 UTC-6 — Estadio Azteca, Mexico City
Match 2: South Korea vs Czech Republic   — 20:00 UTC-6 — Estadio Akron, Guadalajara

# Matchday 2 — Thu Jun 18
Match 3: Czech Republic vs South Africa  — 12:00 UTC-4 — Mercedes-Benz Stadium, Atlanta
Match 4: Mexico vs South Korea           — 19:00 UTC-6 — Estadio Akron, Guadalajara

# Matchday 3 — Wed Jun 24
Match 5: Czech Republic vs Mexico        — 19:00 UTC-6 — Estadio Azteca, Mexico City
Match 6: South Africa vs South Korea     — 19:00 UTC-6 — Estadio BBVA, Monterrey

# Group B
# Matchday 1 — Fri Jun 12 / Sat Jun 13
Match 7: Canada vs Bosnia & Herzegovina  — 15:00 UTC-4 — BMO Field, Toronto
Match 8: Qatar vs Switzerland            — 12:00 UTC-7 — Levi's Stadium, Santa Clara

# Matchday 2 — Thu Jun 18
Match 9: Switzerland vs Bosnia & Herzegovina — 12:00 UTC-7 — SoFi Stadium, Los Angeles
Match 10: Canada vs Qatar                — 15:00 UTC-7 — BC Place, Vancouver

# Matchday 3 — Wed Jun 24
Match 11: Switzerland vs Canada          — 12:00 UTC-7 — BC Place, Vancouver
Match 12: Bosnia & Herzegovina vs Qatar  — 12:00 UTC-7 — Lumen Field, Seattle

# Group C
# Matchday 1 — Sat Jun 13
Match 13: Brazil vs Morocco              — 18:00 UTC-4 — MetLife Stadium, East Rutherford
Match 14: Haiti vs Scotland              — 21:00 UTC-4 — Gillette Stadium, Foxborough

# Matchday 2 — Fri Jun 19
Match 15: Scotland vs Morocco            — 18:00 UTC-4 — Gillette Stadium, Foxborough
Match 16: Brazil vs Haiti                — 20:30 UTC-4 — Lincoln Financial Field, Philadelphia

# Matchday 3 — Wed Jun 24
Match 17: Scotland vs Brazil             — 18:00 UTC-4 — Hard Rock Stadium, Miami
Match 18: Morocco vs Haiti               — 18:00 UTC-4 — Mercedes-Benz Stadium, Atlanta

# Group D
# Matchday 1 — Fri Jun 12 / Sat Jun 13
Match 19: United States vs Paraguay      — 18:00 UTC-7 — SoFi Stadium, Los Angeles
Match 20: Australia vs Turkey            — 21:00 UTC-7 — BC Place, Vancouver

# Matchday 2 — Fri Jun 19
Match 21: United States vs Australia     — 12:00 UTC-7 — Lumen Field, Seattle
Match 22: Turkey vs Paraguay             — 20:00 UTC-7 — Levi's Stadium, Santa Clara

# Matchday 3 — Thu Jun 25
Match 23: Turkey vs United States        — 19:00 UTC-7 — SoFi Stadium, Los Angeles
Match 24: Paraguay vs Australia          — 19:00 UTC-7 — Levi's Stadium, Santa Clara

# Group E
# Matchday 1 — Sun Jun 14
Match 25: Germany vs Curaçao             — 12:00 UTC-5 — NRG Stadium, Houston
Match 26: Ivory Coast vs Ecuador         — 19:00 UTC-4 — Lincoln Financial Field, Philadelphia

# Matchday 2 — Sat Jun 20
Match 27: Germany vs Ivory Coast         — 16:00 UTC-4 — BMO Field, Toronto
Match 28: Ecuador vs Curaçao             — 19:00 UTC-5 — Arrowhead Stadium, Kansas City

# Matchday 3 — Thu Jun 25
Match 29: Curaçao vs Ivory Coast         — 16:00 UTC-4 — Lincoln Financial Field, Philadelphia
Match 30: Ecuador vs Germany             — 16:00 UTC-4 — MetLife Stadium, East Rutherford

# Group F
# Matchday 1 — Sun Jun 14
Match 31: Netherlands vs Japan           — 15:00 UTC-5 — AT&T Stadium, Dallas
Match 32: Sweden vs Tunisia              — 20:00 UTC-6 — Estadio BBVA, Monterrey

# Matchday 2 — Sat Jun 20
Match 33: Netherlands vs Sweden          — 12:00 UTC-5 — NRG Stadium, Houston
Match 34: Tunisia vs Japan               — 22:00 UTC-6 — Estadio BBVA, Monterrey

# Matchday 3 — Thu Jun 25
Match 35: Japan vs Sweden                — 18:00 UTC-5 — AT&T Stadium, Dallas
Match 36: Tunisia vs Netherlands         — 18:00 UTC-5 — Arrowhead Stadium, Kansas City

# Group G
# Matchday 1 — Mon Jun 15
Match 37: Belgium vs Egypt               — 12:00 UTC-7 — Lumen Field, Seattle
Match 38: Iran vs New Zealand            — 18:00 UTC-7 — SoFi Stadium, Los Angeles

# Matchday 2 — Sun Jun 21
Match 39: Belgium vs Iran                — 12:00 UTC-7 — SoFi Stadium, Los Angeles
Match 40: New Zealand vs Egypt           — 18:00 UTC-7 — BC Place, Vancouver

# Matchday 3 — Fri Jun 26
Match 41: Egypt vs Iran                  — 20:00 UTC-7 — Lumen Field, Seattle
Match 42: New Zealand vs Belgium         — 20:00 UTC-7 — BC Place, Vancouver

# Group H
# Matchday 1 — Mon Jun 15
Match 43: Spain vs Cape Verde            — 12:00 UTC-4 — Mercedes-Benz Stadium, Atlanta
Match 44: Saudi Arabia vs Uruguay        — 18:00 UTC-4 — Hard Rock Stadium, Miami

# Matchday 2 — Sun Jun 21
Match 45: Spain vs Saudi Arabia          — 12:00 UTC-4 — Mercedes-Benz Stadium, Atlanta
Match 46: Uruguay vs Cape Verde          — 18:00 UTC-4 — Hard Rock Stadium, Miami

# Matchday 3 — Fri Jun 26
Match 47: Cape Verde vs Saudi Arabia     — 19:00 UTC-5 — NRG Stadium, Houston
Match 48: Uruguay vs Spain               — 18:00 UTC-6 — Estadio Akron, Guadalajara

# Group I
# Matchday 1 — Tue Jun 16
Match 49: France vs Senegal              — 15:00 UTC-4 — MetLife Stadium, East Rutherford
Match 50: Iraq vs Norway                 — 18:00 UTC-4 — Gillette Stadium, Foxborough

# Matchday 2 — Mon Jun 22
Match 51: France vs Iraq                 — 17:00 UTC-4 — Lincoln Financial Field, Philadelphia
Match 52: Norway vs Senegal              — 20:00 UTC-4 — MetLife Stadium, East Rutherford

# Matchday 3 — Fri Jun 26
Match 53: Norway vs France               — 15:00 UTC-4 — Gillette Stadium, Foxborough
Match 54: Senegal vs Iraq                — 15:00 UTC-4 — BMO Field, Toronto

# Group J
# Matchday 1 — Tue Jun 16
Match 55: Argentina vs Algeria           — 20:00 UTC-5 — Arrowhead Stadium, Kansas City
Match 56: Austria vs Jordan              — 21:00 UTC-7 — Levi's Stadium, Santa Clara

# Matchday 2 — Mon Jun 22
Match 57: Argentina vs Austria           — 12:00 UTC-5 — AT&T Stadium, Dallas
Match 58: Jordan vs Algeria              — 20:00 UTC-7 — Levi's Stadium, Santa Clara

# Matchday 3 — Sat Jun 27
Match 59: Algeria vs Austria             — 21:00 UTC-5 — Arrowhead Stadium, Kansas City
Match 60: Jordan vs Argentina            — 21:00 UTC-5 — AT&T Stadium, Dallas

# Group K
# Matchday 1 — Wed Jun 17
Match 61: Portugal vs DR Congo           — 12:00 UTC-5 — NRG Stadium, Houston
Match 62: Uzbekistan vs Colombia         — 20:00 UTC-6 — Estadio Azteca, Mexico City

# Matchday 2 — Tue Jun 23
Match 63: Portugal vs Uzbekistan         — 12:00 UTC-5 — NRG Stadium, Houston
Match 64: Colombia vs DR Congo           — 20:00 UTC-6 — Estadio Akron, Guadalajara

# Matchday 3 — Sat Jun 27
Match 65: Colombia vs Portugal           — 19:30 UTC-4 — Hard Rock Stadium, Miami
Match 66: DR Congo vs Uzbekistan         — 19:30 UTC-4 — Mercedes-Benz Stadium, Atlanta

# Group L
# Matchday 1 — Wed Jun 17
Match 67: England vs Croatia             — 15:00 UTC-5 — AT&T Stadium, Dallas
Match 68: Ghana vs Panama                — 19:00 UTC-4 — BMO Field, Toronto

# Matchday 2 — Tue Jun 23
Match 69: England vs Ghana               — 16:00 UTC-4 — Gillette Stadium, Foxborough
Match 70: Panama vs Croatia              — 19:00 UTC-4 — BMO Field, Toronto

# Matchday 3 — Sat Jun 27
Match 71: Panama vs England              — 17:00 UTC-4 — MetLife Stadium, East Rutherford
Match 72: Croatia vs Ghana               — 17:00 UTC-4 — Lincoln Financial Field, Philadelphia

# ─── KNOCKOUT STAGE ────────────────────────────────────────────────────────────

# Round of 32 (16 matches, Jun 28 – Jul 3)
Match 73: 2A vs 2B — Jun 28 12:00 UTC-7 — SoFi Stadium, Los Angeles
Match 74: 1E vs 3rd — Jun 29 16:30 UTC-4 — Gillette Stadium, Foxborough
Match 75: 1F vs 2C — Jun 29 19:00 UTC-6 — Estadio BBVA, Monterrey
Match 76: 1C vs 2F — Jun 29 12:00 UTC-5 — NRG Stadium, Houston
Match 77: 1I vs 3rd — Jun 30 17:00 UTC-4 — MetLife Stadium, East Rutherford
Match 78: 2E vs 2I — Jun 30 12:00 UTC-5 — AT&T Stadium, Dallas
Match 79: 1A vs 3rd — Jun 30 19:00 UTC-6 — Estadio Azteca, Mexico City
Match 80: 1L vs 3rd — Jul 1 12:00 UTC-4 — Mercedes-Benz Stadium, Atlanta
Match 81: 1D vs 3rd — Jul 1 17:00 UTC-7 — Levi's Stadium, Santa Clara
Match 82: 1G vs 3rd — Jul 1 13:00 UTC-7 — Lumen Field, Seattle
Match 83: 2K vs 2L — Jul 2 19:00 UTC-4 — BMO Field, Toronto
Match 84: 1H vs 2J — Jul 2 12:00 UTC-7 — SoFi Stadium, Los Angeles
Match 85: 1B vs 3rd — Jul 2 20:00 UTC-7 — BC Place, Vancouver
Match 86: 1J vs 2H — Jul 3 18:00 UTC-4 — Hard Rock Stadium, Miami
Match 87: 1K vs 3rd — Jul 3 20:30 UTC-5 — Arrowhead Stadium, Kansas City
Match 88: 2D vs 2G — Jul 3 13:00 UTC-5 — AT&T Stadium, Dallas

# Round of 16 (8 matches, Jul 4 – Jul 7)
Match 89: W74 vs W77 — Jul 4 17:00 UTC-4 — Lincoln Financial Field, Philadelphia
Match 90: W73 vs W75 — Jul 4 12:00 UTC-5 — NRG Stadium, Houston
Match 91: W76 vs W78 — Jul 5 16:00 UTC-4 — MetLife Stadium, East Rutherford
Match 92: W79 vs W80 — Jul 5 18:00 UTC-6 — Estadio Azteca, Mexico City
Match 93: W83 vs W84 — Jul 6 14:00 UTC-5 — AT&T Stadium, Dallas
Match 94: W81 vs W82 — Jul 6 17:00 UTC-7 — Lumen Field, Seattle
Match 95: W86 vs W88 — Jul 7 12:00 UTC-4 — Mercedes-Benz Stadium, Atlanta
Match 96: W85 vs W87 — Jul 7 13:00 UTC-7 — BC Place, Vancouver

# Quarter-finals (4 matches, Jul 9 – Jul 11)
Match 97: W89 vs W90 — Jul 9 16:00 UTC-4 — Gillette Stadium, Foxborough
Match 98: W93 vs W94 — Jul 10 12:00 UTC-7 — SoFi Stadium, Los Angeles
Match 99: W91 vs W92 — Jul 11 17:00 UTC-4 — Hard Rock Stadium, Miami
Match 100: W95 vs W96 — Jul 11 20:00 UTC-5 — Arrowhead Stadium, Kansas City

# Semi-finals (2 matches, Jul 14 – Jul 15)
Match 101: W97 vs W98 — Jul 14 14:00 UTC-5 — AT&T Stadium, Dallas
Match 102: W99 vs W100 — Jul 15 15:00 UTC-4 — Mercedes-Benz Stadium, Atlanta

# Third-place play-off
Match 103: L101 vs L102 — Jul 18 17:00 UTC-4 — Hard Rock Stadium, Miami

# Final
Match 104: W101 vs W102 — Jul 19 15:00 UTC-4 — MetLife Stadium, East Rutherford
