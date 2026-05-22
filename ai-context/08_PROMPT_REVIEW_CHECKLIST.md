# Prompt Review Checklist — PRODEPT 2026

Before accepting AI-generated output, verify:

## Visual & Feel
- [ ] Does it feel like a social sports game, not a SaaS dashboard?
- [ ] Are there vibrant colors — not too many grays or neutral cards?
- [ ] Does it carry World Cup / matchday energy?
- [ ] Does the leaderboard feel competitive and motivating?
- [ ] Is mobile well-resolved (touch targets, spacing, readability)?

## Design System Consistency
- [ ] Does it use the dark theme (background `#05070A`)?
- [ ] Does it use `glass-card` / `glass-panel` for cards and panels?
- [ ] Does it use design tokens from `globals.css` (not hardcoded colors)?
- [ ] Does it use Anton for headings and Hanken Grotesk for body?
- [ ] Does it use Phosphor Icons (not Lucide, Heroicons, or other libraries)?
- [ ] Are animations using the existing Motion / CSS animation classes?

## Code Quality
- [ ] Are components separated and reusable?
- [ ] Are pages Server Components with Client Components only where needed?
- [ ] Are mutations handled via server actions?
- [ ] Is the response clear about which files to create or modify?
- [ ] No official FIFA/World Cup branding used?

## Branding
- [ ] No official FIFA logos, mascots, or typography
- [ ] Original sports-inspired aesthetic

---

## If Something Feels Off

Use this prompt to course-correct:

> This still feels too corporate/SaaS. Rework it with more social tournament energy: vibrant accent colors, glassmorphism cards, matchday microcopy ("Make your pick", "You're on fire"), and less dashboard aesthetic. Keep the dark theme, use design tokens from globals.css, and maintain clean functional code.
