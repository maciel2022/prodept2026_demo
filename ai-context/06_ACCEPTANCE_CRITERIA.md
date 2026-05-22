# Acceptance Criteria — PRODEPT 2026

## Design

- The app feels social, sporty, and fun — not like a SaaS dashboard.
- No official FIFA/World Cup logos or protected branding.
- Uses vibrant colors, visual hierarchy, and tactile components.
- Follows the dark theme with glassmorphism (`glass-card`, `glass-panel`).
- Uses the established design tokens from `globals.css`.
- Anton for headings, Hanken Grotesk for body text.
- Works well on both mobile and desktop.

## UX

- Users quickly understand which match to predict next.
- The score picker is clear, large, and easy to use.
- The leaderboard motivates competition.
- Leagues are easy to create and join.
- States are visually clear: scheduled, live, finished, predicted, not predicted.
- Prediction display ("My pick") is visible on match cards.

## Code

- Clean TypeScript with proper types.
- Small, reusable components.
- Server Components by default; Client Components only when interactivity is needed.
- Server actions for all mutations (predictions, leagues, auth).
- Parallel DB queries with `Promise.all` where possible.
- No overengineering — keep it simple and iterative.
- Follows existing patterns in the codebase.

## Security

- Passwords hashed with bcryptjs (minimum 10 rounds).
- Sessions stored in HTTP-only cookies (not accessible via JavaScript).
- All app routes protected via `getSession()` guard.
- Server actions validate session before any mutation.
- Input validation on both client and server side.

## Performance

- Avoid heavy animations that block the main thread.
- Fast, responsive UI.
- Server Components for data fetching (no client-side waterfalls).
- Prisma queries are specific (use `select` to fetch only needed fields).
- Images and flags are properly sized.
