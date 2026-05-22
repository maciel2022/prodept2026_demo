# PRODEPT 2026 — AI Context Pack

This folder contains the full context needed for an AI assistant to work on **PRODEPT 2026**, an internal World Cup 2026 prediction app for DEPT employees.

## Files

| # | File | Purpose |
|---|------|---------|
| 00 | README | This file — overview and usage guide |
| 01 | MASTER_PROMPT | System prompt defining role, stack, and visual direction |
| 02 | PRODUCT_BRIEF | What the product is, who it's for, and core features |
| 03 | DESIGN_DIRECTION | Visual identity, palette, typography, UI patterns |
| 04 | ARCHITECTURE_PLAN | Routes, file structure, Prisma models, scoring system |
| 05 | IMPLEMENTATION_TASKS | Completed work and remaining tasks |
| 06 | ACCEPTANCE_CRITERIA | Quality gates for design, UX, code, security |
| 07 | PROMPT_OPTIONS | Prompt templates for different development scenarios |
| 08 | PROMPT_REVIEW_CHECKLIST | Checklist to validate AI output quality |
| 09 | ONE_SHOT_PROMPT | Comprehensive single-prompt context summary |
| 10 | WORLD_CUP_DATA | Complete FIFA World Cup 2026 fixture data |

## Suggested Usage

1. Load files 00–04 as baseline context in every conversation.
2. Add 05–06 when planning or reviewing work.
3. Use 07–09 as needed for specific prompting strategies.
4. Reference 10 for World Cup data (groups, schedules, venues).

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with CSS custom properties design tokens
- **Components**: Custom component library (no shadcn/ui)
- **Icons**: Phosphor Icons (`@phosphor-icons/react`)
- **Animations**: Motion (Framer Motion)
- **Auth**: Custom cookie-based sessions with bcryptjs
- **Database**: SQLite via Prisma
- **Fonts**: Anton (display) + Hanken Grotesk (body)
- **Flags**: `country-flag-icons` library

## Central Rule

> This app should feel like a **social World Cup experience** — not a SaaS dashboard.
> Every screen should carry matchday energy, playful competition, and sports emotion.
