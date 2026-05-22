# Architecture Plan — PRODEPT 2026

## Routes

```
/                          Home dashboard (auth-guarded)
/login                     Login page
/register                  Registration page
/groups                    World Cup group viewer (12 groups, 48 teams)
/predictions               Match list with prediction status
/predictions/[matchId]     Per-match prediction form
/leagues                   Leagues dashboard (create, join, leaderboards)
/api/auth/me               Session validation API endpoint
```

## File Structure

```
src/
  app/
    page.tsx                    Home dashboard
    layout.tsx                  Root layout
    globals.css                 Design tokens + Tailwind v4
    login/
      page.tsx                  Login page
      LoginForm.tsx             Client component
      actions.ts                Login server action
    register/
      page.tsx                  Register page
      RegisterForm.tsx          Client component
    groups/
      page.tsx                  Groups viewer
      GroupSelector.tsx          Client component
      constants.ts              Group data
    predictions/
      page.tsx                  Match list + prediction status
      [matchId]/
        page.tsx                Prediction detail page
        PredictionForm.tsx      Client component (score pickers)
        actions.ts              Save prediction server action
    leagues/
      page.tsx                  Leagues dashboard + leaderboards
      CreateLeagueModal.tsx     Client component
      JoinLeagueModal.tsx       Client component
      actions.ts                Create/join league server actions
    api/auth/me/
      route.ts                  Session validation endpoint
  components/
    AnimatedSection.tsx         Framer Motion fade-in wrapper
    BottomNav.tsx               Bottom navigation bar
    CountryFlag.tsx             Flag renderer (country-flag-icons)
    LeaderboardRow.tsx          Leaderboard entry row
    MatchCard.tsx               Match display card with prediction
    Navbar.tsx                  Top navbar with user menu
    StatsCard.tsx               Bento grid stat card
  lib/
    auth.ts                     Cookie-based session management (bcryptjs)
    flags.ts                    FIFA code to ISO code mapping
    format.ts                   Date formatting utilities
    points.ts                   Scoring logic
    prisma.ts                   Prisma client singleton
prisma/
  schema.prisma                 Database schema
  seed.ts                       Full World Cup 2026 seed (104 matches, 48 teams)
  dev.db                        SQLite database file
```

## Database (Prisma + SQLite)

### Enums

```prisma
enum MatchStage {
  GROUP | ROUND_OF_32 | ROUND_OF_16 | QUARTER | SEMI | THIRD_PLACE | FINAL
}

enum MatchStatus {
  SCHEDULED | LIVE | FINISHED
}
```

### Models

**User** — App user with email/password auth
- `id`, `name`, `email` (unique), `password` (bcrypt hash), `image?`, `createdAt`
- Relations: `predictions[]`, `leagues[]` (via LeagueMember), `ownedLeagues[]`

**Team** — World Cup team
- `id`, `name`, `code` (unique, e.g. "ARG"), `group`, `flagUrl`
- Relations: `homeMatches[]`, `awayMatches[]`

**Match** — A single World Cup match
- `id`, `homeTeamId`, `awayTeamId`, `homeScore?`, `awayScore?`, `matchDate`, `stage`, `group?`, `venue`, `status`
- Relations: `homeTeam`, `awayTeam`, `predictions[]`

**Prediction** — A user's score prediction for a match
- `id`, `userId`, `matchId`, `homeScore`, `awayScore`, `points` (default 0), `createdAt`
- Unique constraint: `[userId, matchId]` (one prediction per user per match)

**League** — A competition group (private or global)
- `id`, `name`, `code` (unique, 6-char alphanumeric invite code), `isGlobal`, `createdAt`, `ownerId`
- Relations: `owner`, `members[]`

**LeagueMember** — League membership
- `id`, `leagueId`, `userId`, `joinedAt`
- Unique constraint: `[leagueId, userId]`

## Scoring System

Points are calculated in `src/lib/points.ts`:

| Outcome | Points |
|---------|--------|
| Exact score (e.g. predicted 2-1, actual 2-1) | **5** |
| Correct result + correct goal difference | **4** (3+1) |
| Correct result only (win/draw/loss) | **3** |
| Correct goal difference only | **1** |
| Wrong | **0** |

## Auth Flow

1. User registers with name, email, password (hashed with bcryptjs)
2. On login, credentials are verified and a session cookie is set (`prodept_session`)
3. Session token is base64-encoded JSON containing `userId`
4. Cookie is HTTP-only with 7-day expiry
5. `getSession()` in `src/lib/auth.ts` validates the cookie on each request
6. All app routes redirect to `/login` if session is invalid
