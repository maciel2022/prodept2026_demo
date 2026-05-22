# Prompt Options — PRODEPT 2026

Use these prompt templates for different development scenarios. Always load the context files (00–04) first.

## Option A — Add a New Feature

> Using the project context files, I want to add [feature name] to the PRODEPT 2026 app. Follow the existing patterns: Server Components for pages, server actions for mutations, glassmorphism cards, design tokens from globals.css, and Phosphor Icons. Keep the social/sporty feel — no SaaS aesthetics. Give me the complete files to create or modify.

## Option B — Polish Mobile Experience

> Using the project context files, review the mobile experience of [page/component]. Improve touch targets, spacing, readability, and navigation. Keep the dark theme, glassmorphism cards, and existing design tokens. Ensure it feels like a sports app, not a desktop-shrunk dashboard. Return the updated files.

## Option C — Enhance Visual Polish

> Using the project context files, add more visual energy to [page/section]. Think: celebrations, animations, badges, gradient accents, matchday atmosphere. Use the Motion library for animations and the existing CSS utility classes (glass-card, vibrant-gradient, pitch-lines). Keep code simple. Return the updated files.

## Option D — Fix or Refactor Existing Code

> Here is the current code for [file/feature]. Refactor it to improve [readability/performance/patterns] while maintaining the existing visual direction and design system. Follow the established patterns: Server Components, server actions, Prisma queries with proper selects, TypeScript types. Explain what you changed and why.

## Option E — Extend the Data Model

> Using the project context files, I need to add [new model/field] to the Prisma schema. Design the migration, update any affected queries, create necessary server actions, and build the UI components. Follow existing patterns (see current schema in 04_ARCHITECTURE_PLAN.md). Return schema changes and all affected files.

## Option F — Visual Redesign of a Specific Page

> Using the project context files, redesign the UI of [page] without changing the architecture or data logic. Update the layout, colors, spacing, cards, microcopy, and hierarchy to feel more like a sports prediction game. Use the existing design tokens and CSS classes. Return only the visual files that need to change.
