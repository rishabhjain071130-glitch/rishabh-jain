# Changelog

All notable changes to the **Rishabh Portfolio OS** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-07-09

### Added
- **Terminal CLI console**: Interactive simulated SSH console supporting sections queries, custom audits list (`security`), and navigation cheat codes (`cheatsheet`).
- **Offline Q&A AI Mentor Agent**: Client-side chat simulator modeling profile questions, experience highlights, and availability details.
- **Global Command Palette**: Focus-trapped search and navigation portal triggered via `Ctrl+K` or `Cmd+K`.
- **Pre-Scanned Lifecycles**: Pre-build scanning file locator (`scan-assets.js`) to automatically audit profiles, resumes, and certificate categories, updating database JSON feeds before compilation.
- **Responsive Spacing**: Fluid typography and spacing clamp utilities preventing overflow and layout shift at multiple viewport resolutions (from 320px up to 1920px).
- **Security Protocols**: Standard-compliant frame protection, sniff shields, and referrer headers configured inside Next.js routes.

### Changed
- **Polymorphic UI Primitives**: Upgraded `<Button>` element to polymorphic modes. It now renders as a semantic `motion.a` link when an `href` prop is supplied, solving nested interactive element accessibility validator issues.
- **Header Navigation conversion**: Placed a direct, pre-scanned download resume link CTA inside the sticky navigation header and mobile menu drawer to improve recruiter conversion rates.
- **Code Splitting & Lazy Bundles**: Dynamically imported non-critical widgets (`CommandPalette`, `Terminal`, `AskRishabhAI`, `ContactForm`, and `CertificateModal`) using Next.js suspense structures to minimize initial JavaScript payloads.
- **On-Demand Iframe Previews**: Enabled optional dynamic Streamlit embedded previews within featured case studies to avoid loading heavy third-party iframe packages on first paint.
- **Image optimization boundaries**: Switched below-the-fold project previews to default browser lazy loading and mapped profile images with high LCP layout priority.

### Fixed
- **ESLint quotation tags**: Resolved unescaped JSX quotation errors in OpenGraph image tags.
