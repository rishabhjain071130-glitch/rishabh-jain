# 04 — TECHNICAL ARCHITECTURE

Version: 1.0

---

# Objective

The portfolio should be engineered like a production-grade software product.

The codebase must remain clean, scalable, reusable, maintainable, and easy to extend over multiple years.

The architecture should allow new projects, experiences, skills, and sections to be added without rewriting existing code.

---

# Technology Stack

Framework

- Next.js (App Router)

Language

- TypeScript

Styling

- Tailwind CSS

Animations

- Framer Motion

Icons

- Lucide React

Deployment

- Vercel

Version Control

- Git + GitHub

Package Manager

- npm

---

# Core Principles

Every feature must follow these rules.

- Modular
- Reusable
- Accessible
- Responsive
- Performant
- Maintainable

Avoid duplicated logic.

Avoid deeply nested components.

Avoid unnecessary abstractions.

---

# Folder Structure

app/

components/

content/

hooks/

lib/

public/

styles/

types/

docs/

Each folder has a single responsibility.

---

# Components

Components should be grouped by feature.

Example

components/

hero/

about/

journey/

projects/

skills/

contact/

layout/

shared/

ui/

Never place unrelated components together.

---

# Component Rules

Each component should:

Have one responsibility.

Receive typed props.

Avoid unnecessary state.

Avoid side effects.

Support accessibility.

Support responsive layouts.

---

# UI Components

Reusable UI components include:

Button

Card

Badge

SectionHeading

Tag

Timeline

Tabs

Accordion

Tooltip

Modal

Input

Textarea

Navbar

Footer

ScrollReveal

Container

Divider

Every reusable component belongs inside:

components/ui

---

# Content Strategy

Static content should never be hardcoded inside components.

Store content inside

content/

Examples

projects.ts

journey.ts

skills.ts

about.ts

experience.ts

contact.ts

This separates design from content.

---

# State Management

Prefer local state.

Only lift state when necessary.

Avoid global state unless required.

Do not introduce Redux or heavy state libraries.

---

# Routing

Use App Router.

Every page should have proper metadata.

Support SEO.

---

# Performance

Use dynamic imports when useful.

Optimize images.

Lazy load heavy components.

Avoid unnecessary client components.

Prefer Server Components whenever possible.

---

# Images

Use Next/Image.

Responsive sizes.

Lazy loading.

Proper alt text.

No oversized assets.

---

# Styling Rules

Tailwind utility classes only.

No inline styles unless absolutely required.

Keep spacing consistent with the Design System.

---

# Motion Architecture

Animations should be reusable.

Create shared wrappers such as:

ScrollReveal

FadeIn

ScaleIn

SectionTransition

Avoid rewriting animation logic.

---

# Responsive Strategy

Mobile First.

Then Tablet.

Then Desktop.

Every component must be tested on:

320px

768px

1024px

1440px

1920px

---

# Accessibility

Keyboard navigation.

Focus rings.

ARIA labels.

Semantic HTML.

Screen reader support.

Reduced motion support.

No accessibility regressions.

---

# SEO

Every page includes:

Title

Description

Open Graph

Twitter Card

Structured metadata

Robots

Canonical URL

---

# Code Quality

Strict TypeScript.

No any.

No unused imports.

No dead code.

No commented production code.

Every file has a clear purpose.

---

# Naming Conventions

Components

PascalCase

Example

HeroSection.tsx

Functions

camelCase

Variables

camelCase

Constants

UPPER_SNAKE_CASE

Content files

kebab-case or lowercase

---

# Error Handling

Gracefully handle:

Missing images

Broken links

Empty datasets

Unavailable resume

Missing GitHub links

Never crash the page.

---

# Testing Strategy

TypeScript

ESLint

Build verification

Responsive testing

Keyboard testing

Performance testing

Accessibility testing

---

# Deployment

Deploy on Vercel.

Main branch always deployable.

Never merge broken builds.

---

# Documentation

Every major feature should have clear comments where necessary.

Complex logic should be explained.

Do not over-comment obvious code.

---

# AI Development Rules

Before creating a new component:

Search existing components.

Reuse if possible.

Before adding a dependency:

Check if current stack already solves the problem.

Never introduce unnecessary packages.

---

# Scalability

The architecture should support:

10+ projects

10+ case studies

Multiple internships

Blog section

Certificates

Open-source contributions

Future startup showcase

Without major restructuring.

---

# Final Engineering Rule

Every implementation decision should answer one question:

Will this still make sense one year from now?

If the answer is no,

choose a simpler and more maintainable solution.