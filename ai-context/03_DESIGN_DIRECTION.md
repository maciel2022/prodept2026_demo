# Design Direction — PRODEPT 2026

## Core Principle

The app must feel like a **social tournament experience**, not a metrics dashboard. Every screen should carry matchday energy and competitive fun.

## Look & Feel

- Energetic
- Colorful
- Playful
- Human
- Sporty
- Simple
- Mobile-first

## Conceptual References

Do not copy official branding. Draw inspiration from:
- Sports stickers and trading cards
- Match boards and printed fixtures
- Sports broadcast screens
- Social and gamified apps
- Goal celebrations

## Implemented Design System

### Theme
- **Dark theme** — background `#05070A`, surfaces `#111417` to `#323539`

### Color Palette (CSS custom properties in `globals.css`)
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary-fixed` | `#36ffc4` | Primary accent, highlights, active states |
| `--color-primary-fixed-dim` | `#00e1ab` | Gradient endpoints, secondary accent |
| `--color-secondary-container` | `#7000ff` | Violet accent, league badges |
| `--color-coral` | `#ff6b6b` | Energy, CTA buttons, urgency |
| `--color-coral-dim` | `#e85454` | Gradient endpoints for coral |
| `--color-gold` | `#ffd23f` | Celebration, achievements, rank |
| `--color-error` | `#ffb4ab` | Error states |
| `--color-on-surface` | `#e1e2e7` | Primary text |
| `--color-on-surface-variant` | `#b9cbc1` | Secondary text, labels |

### Typography
- **Display / Headings**: `Anton` (bold, uppercase, impactful)
- **Body / UI**: `Hanken Grotesk` (clean, readable, modern)
- Size tokens: `--text-display-xl`, `--text-headline-md`, `--text-body-md`, `--text-label-bold`

### CSS Utility Classes
| Class | Effect |
|-------|--------|
| `glass-card` | Glassmorphism card with backdrop blur and border |
| `glass-panel` | Lighter glassmorphism for panels/nav |
| `vibrant-gradient` | Emerald-to-violet background gradient |
| `pitch-lines` | Abstract football pitch line overlay |
| `pattern-bg` | Subtle dot pattern background |
| `diagonal-stripes` | Diagonal stripe pattern |
| `label-bold` | Uppercase, bold, tight tracking label style |

### Animations
- `animate-fade-in-up` — entry animation with upward slide
- `animate-fade-in` — simple opacity fade
- `animate-scale-in` — scale from 95% to 100%
- `animate-pulse-glow` — pulsing glow effect

## UI Patterns

- Glassmorphism cards for all content blocks
- Bento-grid stats layout on home dashboard
- Bottom navigation with active pill highlight and scale effect
- Large tactile score pickers for predictions
- Mini leaderboards within league cards (top 3 + current user)
- Status badges: color-coded pills (SCHEDULED, LIVE, FINISHED)
- Gradient CTA buttons (coral-to-dim or primary-to-secondary)

## Microcopy

**Use:**
- "Make your pick"
- "Lock it in"
- "Matchday is coming"
- "You're on fire"
- "Climb the leaderboard"
- "Your next big call"
- "My pick"

**Avoid:**
- "Submit form"
- "Dashboard overview"
- "User metrics"
- "Data panel"
