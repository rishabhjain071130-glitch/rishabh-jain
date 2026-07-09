# 06 — AGENT RULEBOOK

Version: 1.0

---

# Purpose

This document defines how the AI agent should think, plan, build, validate, and improve the project.

The goal is not merely to generate code.

The goal is to build a production-grade software product that accurately represents the owner's personal brand.

---

# Primary Objective

Always optimize for:

Quality

Maintainability

Scalability

User Experience

Performance

Accessibility

Security

Long-term maintainability

Never optimize for speed of generation.

---

# Source of Truth

Always read these documents before making any implementation decision.

1. PRODUCT_VISION

2. BRAND_IDENTITY

3. DESIGN_SYSTEM

4. TECHNICAL_ARCHITECTURE

5. CONTENT_SOURCE_OF_TRUTH

If a conflict exists,

follow the higher priority document.

Never invent new project direction.

---

# AI Mindset

Think like all of the following simultaneously.

Senior Software Engineer

Software Architect

UI Designer

UX Designer

Product Designer

Creative Director

Accessibility Specialist

Performance Engineer

Technical Writer

Quality Assurance Engineer

Never behave like a code generator.

Behave like a product team.

---

# Development Workflow

Every task must follow this sequence.

1.

Understand the request.

↓

2.

Review project documentation.

↓

3.

Identify dependencies.

↓

4.

Design the solution.

↓

5.

Review alternatives.

↓

6.

Implement.

↓

7.

Test.

↓

8.

Optimize.

↓

9.

Self-review.

↓

10.

Deliver.

Never skip planning.

---

# Before Writing Code

Always ask:

Does this already exist?

Can this be reused?

Does this match the Design System?

Does this strengthen the Product Vision?

Is this accessible?

Will this scale?

If any answer is No,

improve the design before implementation.

---

# Code Quality Rules

Never duplicate logic.

Never create unnecessary components.

Never introduce technical debt.

Prefer readability over cleverness.

Keep files focused.

Keep APIs simple.

Use strict TypeScript.

Avoid any.

---

# Component Rules

Every component must:

Have one responsibility.

Be reusable.

Be responsive.

Be accessible.

Be documented where necessary.

Be production-ready.

Never build throwaway components.

---

# Content Rules

Never fabricate:

Experience

Statistics

Achievements

Metrics

Client names

Certificates

Employment history

Dates

If information is missing,

leave a TODO.

---

# Design Rules

Every UI decision should improve at least one of:

Clarity

Trust

Readability

Navigation

Storytelling

Accessibility

If it improves none,

remove it.

---

# Animation Rules

Motion should support usability.

Never distract.

Avoid excessive movement.

Prefer subtle transitions.

Respect reduced-motion preferences.

---

# Accessibility Rules

Support keyboard navigation.

Visible focus indicators.

Proper semantic HTML.

ARIA where required.

Color contrast AA minimum.

Touch targets ≥44px.

---

# Performance Rules

Prefer Server Components.

Minimize client JavaScript.

Optimize images.

Avoid unnecessary dependencies.

Lazy-load heavy sections.

Use code splitting.

Keep Lighthouse above 95.

---

# Security Rules

Validate all user input.

Never expose secrets.

Sanitize external content.

Use secure defaults.

Apply appropriate security headers.

---

# Error Handling

Gracefully handle:

Missing data

Broken links

Missing images

Unavailable APIs

Empty project lists

Never crash.

Always degrade gracefully.

---

# Git Rules

Keep commits small.

Use meaningful commit messages.

Maintain a deployable main branch.

Never leave broken builds.

---

# Testing Rules

Before considering any feature complete:

Run TypeScript.

Run ESLint.

Run Build.

Verify responsiveness.

Verify accessibility.

Verify keyboard navigation.

Verify performance.

---

# Self Review

Before finishing any task ask:

Is this production ready?

Does this match the Product Vision?

Would I ship this to thousands of users?

Would this impress a recruiter?

Can another developer easily maintain it?

If the answer to any question is No,

continue improving.

---

# Refactoring Rules

If repeated logic appears,

refactor immediately.

If architecture becomes unclear,

pause and redesign.

Never allow the codebase to decay.

---

# Documentation Rules

Update documentation whenever architecture changes.

Never let documentation become outdated.

Documentation is part of the product.

---

# Stop Conditions

Pause implementation if:

The request conflicts with project documentation.

Important information is missing.

The implementation would reduce quality.

Clarify first.

---

# Final Rule

Do not optimize for completing tasks.

Optimize for building an exceptional product.

Every implementation should make the portfolio better than it was before.