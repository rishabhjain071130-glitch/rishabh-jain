# 03 — DESIGN SYSTEM

Version: 1.0

---

# Design Philosophy

The portfolio should feel like a modern software product rather than a personal blog.

The interface should prioritize clarity, consistency, and usability over visual complexity.

Inspired by:

- Apple
- Linear
- Vercel
- GitHub
- Notion

---

# Visual Characteristics

The design should be:

- Minimal
- Premium
- Calm
- Spacious
- Professional
- Modern
- Engineering-focused

Avoid:

- Neon cyberpunk
- Glassmorphism overload
- Heavy gradients
- Flashy animations
- Cluttered layouts

---

# Color System

## Background

Primary

#090B12

Secondary

#0F1722

Surface

#141A24

Card

#181F2B

Border

rgba(255,255,255,0.08)

---

## Brand Colors

Primary Blue

#4F7CFF

Accent Cyan

#4FD7FF

Soft Purple

#8C7BFF

Success

#2ECC71

Warning

#F5B942

Error

#FF5D73

---

## Text Colors

Primary

#FFFFFF

Secondary

#B8C0CC

Muted

#7B8492

Disabled

#5B6575

---

# Typography

Font Family

Primary

Inter

Secondary

JetBrains Mono

Never introduce additional font families.

---

# Font Scale

Display

72px

Hero Title

60px

H1

48px

H2

36px

H3

28px

H4

24px

Body Large

20px

Body

18px

Small

16px

Caption

14px

Label

13px

Mono

15px

---

# Font Weight

Regular

400

Medium

500

SemiBold

600

Bold

700

---

# Spacing System

Base Unit

8px

Allowed spacing

4

8

12

16

24

32

40

48

64

80

96

128

Never invent random spacing values.

---

# Border Radius

Small

8px

Medium

12px

Large

20px

Hero Cards

24px

Round Buttons

999px

---

# Shadows

Cards

Very soft

Buttons

Soft glow only on hover

Never use harsh drop shadows.

---

# Layout

Desktop Container

1280px

Content Width

720px

Reading Width

680px

Never stretch paragraphs wider than this.

---

# Grid

Desktop

12 columns

Tablet

8 columns

Mobile

4 columns

---

# Breakpoints

Mobile

<768

Tablet

768–1023

Desktop

1024+

Large Desktop

1440+

---

# Buttons

Primary

Filled Blue

Rounded

Medium Shadow

Hover Lift

Secondary

Transparent

Border

Subtle Hover

Ghost

Transparent

Text Only

Icon Button

Square

Outline

Rounded

---

# Cards

Rounded

Soft Border

Dark Surface

No heavy shadow

Padding

32px

---

# Forms

Rounded Inputs

Visible Focus Ring

Clear Labels

No floating labels

---

# Navigation

Sticky

Transparent

Blur on scroll

Active section indicator

Smooth scrolling

---

# Icons

Library

Lucide

Outline only

2px stroke

Consistent size

---

# Images

Rounded corners

Lazy loaded

Optimized

Responsive

Never distort aspect ratio.

---

# Motion

Animation Duration

150–300ms

Section Reveal

Fade + TranslateY

Hover

Scale 1.02

Button Press

Scale 0.98

Accordion

Height Animation

Never bounce.

Never overshoot.

---

# Hero Rules

Must fill first viewport.

No empty space.

Clear visual hierarchy.

Left:

- Name
- Role
- Value proposition
- CTA
- Socials

Right:

Professional portrait.

Never abstract placeholders once a real photo exists.

---

# Section Rules

Every section begins with:

Eyebrow

↓

Heading

↓

Supporting text

↓

Main content

Consistent spacing throughout.

---

# Case Study Rules

Every project must include:

Problem

Research

Planning

Architecture

Implementation

Challenges

Security

Outcome

Future

GitHub

Live Demo

Media

Technology Stack

Timeline

---

# Accessibility

Visible focus states

Keyboard navigation

Reduced motion

Semantic HTML

Proper heading hierarchy

Minimum contrast ratio AA

---

# Performance Targets

Lighthouse

95+

Accessibility

100

Best Practices

100

SEO

100

---

# Responsive Principles

Desktop first.

Mobile fully optimized.

No horizontal scrolling.

Touch targets minimum 44px.

---

# Final Design Rule

If a UI element does not improve clarity, usability, or storytelling,

remove it.