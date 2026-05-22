# One-Shot Context Prompt — PRODEPT 2026

Use this as a comprehensive single prompt when starting a new conversation.

---

I'm working on **PRODEPT 2026**, an internal World Cup 2026 prediction app for DEPT employees. The app is already built and functional — I need help extending and improving it.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 with CSS custom properties design tokens in `globals.css`
- Custom component library (no shadcn/ui) — Phosphor Icons, Motion (Framer Motion)
- Custom cookie-based auth with bcryptjs (HTTP-only cookies, 7-day sessions)
- Prisma ORM with SQLite
- `country-flag-icons` for flag rendering

## App Flow
1. User registers or logs in with email and password
2. Home dashboard shows: global rank, total points, predictions count, leagues count, next match with prediction preview
3. Predictions page: browse upcoming matches, make score predictions (locked once match goes LIVE)
4. Groups page: view all 12 World Cup groups and 48 teams
5. Leagues: create or join private leagues via invite codes, compete on per-league leaderboards

## Existing Structure
- **Pages**: `/`, `/login`, `/register`, `/groups`, `/predictions`, `/predictions/[matchId]`, `/leagues`
- **Components**: AnimatedSection, BottomNav, CountryFlag, LeaderboardRow, MatchCard, Navbar, StatsCard
- **Lib**: auth.ts (sessions), flags.ts, format.ts, points.ts, prisma.ts
- **Models**: User, Team, Match, Prediction, League, LeagueMember

## Design System
- Dark theme (bg `#05070A`)
- Primary: `#36ffc4` (emerald/mint), Secondary: `#7000ff` (violet), Accents: `#ff6b6b` (coral), `#ffd23f` (gold)
- Fonts: Anton (headings), Hanken Grotesk (body)
- CSS classes: `glass-card`, `glass-panel`, `vibrant-gradient`, `pitch-lines`, `label-bold`
- Glassmorphism cards with backdrop blur

## Visual Direction
The app should feel: social, fun, sporty, colorful, mobile-first, emotional, competitive.

Avoid: SaaS dashboard, corporate admin panel, grayscale UI, fintech aesthetic, enterprise B2B styling, official FIFA/World Cup branding.

## Scoring
- Exact score: 5 pts
- Correct result + correct goal difference: 4 pts
- Correct result only: 3 pts
- Correct goal difference only: 1 pt
- Wrong: 0 pts

## Patterns to Follow
- Server Components by default, Client Components only for interactivity
- Server actions for all mutations
- Parallel DB queries with `Promise.all`
- Design tokens via CSS custom properties (never hardcode colors)
- Phosphor Icons for all icons
- `glass-card` / `glass-panel` for all card-like containers
