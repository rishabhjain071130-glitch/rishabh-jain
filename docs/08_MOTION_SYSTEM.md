# 08 — MOTION SYSTEM

Version: 1.0

---

# Purpose

Motion should guide the user's attention, communicate state changes, and improve the overall experience.

Animations must never exist only for decoration.

Every animation should have a clear purpose.

---

# Motion Philosophy

Motion should feel

• Calm

• Intentional

• Elegant

• Fast

• Professional

Inspired by

Apple

Linear

Vercel

Framer

Notion

Avoid

Flashy animations

Large bounces

Heavy rotations

Continuous distracting effects

Excessive parallax

---

# Motion Principles

Every animation must improve one of the following

• Navigation

• Focus

• Feedback

• Storytelling

• Delight

If it improves none,

remove it.

---

# Animation Timing

Fast

100–150ms

Standard

180–250ms

Large Components

250–350ms

Page Transitions

350–500ms

Never exceed 600ms.

---

# Easing

Use modern easing curves.

Avoid linear animations.

Preferred

ease-out

ease-in-out

Custom easing where appropriate.

---

# Hero

Initial Load

Fade

Small upward movement

Sequential reveal

Heading

↓

Description

↓

Buttons

↓

Social Links

↓

Hero Visual

Typing animation for role text.

Respect reduced motion.

---

# Section Reveal

Every section

Fade In

TranslateY

Small stagger

Only animate once.

Do not replay on every scroll.

---

# Cards

Hover

Slight elevation

Border highlight

Soft shadow

Tiny scale

Never exceed scale(1.02).

---

# Buttons

Hover

Brightness increase

Small lift

Pressed

Scale 0.98

Focus

Visible outline

---

# Navbar

Smooth blur transition.

Background opacity increases on scroll.

Hide on downward scroll.

Reveal on upward scroll.

---

# Timeline

Expand

Smooth height animation

Fade content

Rotate chevron

Collapse gracefully

---

# Case Study

Tab switching

Crossfade

Height transition

No layout jump

Preserve scroll position

---

# Images

Fade when loaded.

Never pop suddenly.

---

# Contact Form

Input focus

Border animation

Submit

Loading indicator

Success

Confirmation animation

Error

Subtle shake only if necessary.

---

# Scroll Progress

Thin indicator.

Linear movement.

No glow.

---

# Loading Screen

Minimal.

Fast.

Logo or wordmark only.

No long loading animations.

---

# Cursor

Optional.

Very subtle.

Do not replace the native cursor unless usability remains excellent.

---

# Background

Use soft gradients.

Optional animated aurora.

Very low opacity.

Never distract from content.

---

# Parallax

Maximum 5–10px movement.

Only for decorative layers.

Never apply to primary content.

---

# Reduced Motion

Respect prefers-reduced-motion.

Disable

Typing animation

Parallax

Heavy transitions

Large reveals

Maintain usability.

---

# Performance Rules

Animations must use

transform

opacity

Avoid animating

width

height (unless unavoidable)

top

left

box-shadow

Prefer GPU-accelerated properties.

---

# Accessibility

Animations must never block interaction.

Users must always remain in control.

No flashing content.

No seizure-inducing effects.

---

# Success Criteria

Motion should feel invisible.

Users should notice that the experience feels polished,

not that animations exist.

---

# Final Rule

Motion should support the product.

The product should never exist to showcase motion.