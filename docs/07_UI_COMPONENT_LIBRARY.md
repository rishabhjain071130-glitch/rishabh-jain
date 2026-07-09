# 07 — UI COMPONENT LIBRARY

Version: 1.0

---

# Purpose

This document defines every reusable UI component used throughout the portfolio.

Components must be consistent, reusable, accessible, responsive, and easy to maintain.

Never create one-off components when an existing component can be extended.

---

# Design Principles

Every component should follow these principles.

• One responsibility
• Reusable
• Accessible
• Responsive
• Consistent
• Performant
• Production-ready

---

# Layout Components

## Container

Purpose

Controls page width.

Max Width

1280px

Variants

• Default
• Narrow
• Wide
• Full Width

---

## Section

Purpose

Provides consistent spacing between sections.

Includes

Eyebrow

Heading

Description

Content

Never hardcode section spacing.

---

## Divider

Purpose

Separate content subtly.

Never use thick horizontal rules.

Use gradients or low-opacity borders.

---

# Navigation

## Navbar

Requirements

Sticky

Transparent initially

Blur on scroll

Active section indicator

Smooth scrolling

Keyboard accessible

Mobile menu

Hide on scroll down

Show on scroll up

---

# Hero

Purpose

Create trust immediately.

Must contain

Name

Role

Professional photo

Headline

Description

CTA

Social links

Availability badge

Animated role text

Never exceed first viewport.

---

# Buttons

Variants

Primary

Secondary

Ghost

Icon

Danger

Success

Loading

Disabled

Hover

Subtle lift

Pressed

Scale slightly

Keyboard focus visible.

---

# Cards

Purpose

Display projects, experience, skills, achievements.

Variants

Project Card

Experience Card

Certificate Card

Skill Card

Feature Card

Metric Card

Callout Card

Cards should never look identical.

Different purposes require different visual hierarchy.

---

# Badges

Used for

Technologies

Status

Category

Experience level

Availability

Variants

Outline

Filled

Soft

Never overuse colors.

---

# Timeline

Purpose

Display learning journey.

Requirements

Expandable

Keyboard accessible

Animated

Rich content

Nested cards

Progress indicator

---

# Tabs

Used in

Case Studies

Requirements

Animated transitions

Accessible keyboard navigation

Preserve layout height

No content jumps

---

# Accordion

Requirements

Smooth height animation

ARIA support

Multiple variants

Single-open mode

Multi-open mode

---

# Skills Grid

Requirements

Category based

Searchable

Filterable

No progress bars

Use badges and proficiency labels instead.

---

# Case Study

Must include

Overview

Problem

Research

Planning

Architecture

Implementation

Challenges

Security

Outcome

Future

Tech Stack

Gallery

GitHub

Live Demo

Architecture Diagram

Timeline

Never present as plain documentation.

---

# Terminal Component

Purpose

Communicate engineering identity.

Features

Typing animation

Command history

Reduced motion support

Syntax highlighting

Responsive

---

# Contact Form

Fields

Name

Email

Subject

Message

Validation

Realtime

Accessible

Keyboard friendly

Spam protection

Success state

Error state

---

# Footer

Contains

Brand

Navigation

Social Links

Copyright

Version

Built With

---

# Theme Toggle

Optional

Should remember user preference.

Respect system preference.

---

# Scroll Progress

Thin top indicator.

Smooth.

Non-intrusive.

---

# Loading Screen

Minimal.

Fast.

Skippable.

No unnecessary branding.

---

# Empty States

Every empty state should explain

What happened

Why

What to do next

Never leave blank screens.

---

# Error States

Friendly.

Actionable.

Never expose technical errors.

---

# Toast Notifications

Minimal.

Accessible.

Auto dismiss.

Keyboard friendly.

---

# Modal

Trap keyboard focus.

ESC closes.

Accessible.

Smooth animation.

---

# Tooltips

Appear instantly.

Keyboard accessible.

Never block content.

---

# Image Rules

Rounded corners.

Lazy loading.

Responsive.

Descriptive alt text.

---

# Icon Rules

Lucide Icons only.

Consistent stroke width.

No emoji icons.

---

# Motion Rules

Use shared animation primitives.

Never duplicate animation logic.

Respect reduced motion.

---

# Responsive Rules

Desktop

Tablet

Mobile

Every component must work across all breakpoints.

---

# Accessibility Rules

WCAG AA

Semantic HTML

Keyboard navigation

Visible focus

Screen reader labels

Touch targets ≥44px

---

# Reusability Rules

If a component can be reused,

never duplicate it.

Prefer composition over copy-paste.

---

# Final Rule

Every new component must improve consistency across the portfolio.

If it introduces inconsistency,

redesign the component before implementation.