# Rishabh Portfolio OS

An interactive, terminal-inspired developer portfolio and digital resume engineered using Next.js 16 (App Router), React 19, and Tailwind CSS v4.

Designed for recruiters, hiring managers, and engineering leaders seeking a clean, accessible, and high-performance overview of Rishabh's software engineering credentials, practical projects, and cyber security skills.

---

## ⚡ Key Features

- **Interactive SSH Console**: Simulated CLI console supporting navigation shortcuts and credentials queries (type `help` or `cheatsheet` to begin).
- **Offline AI Mentor Agent**: An embedded client Q&A mentoring chatbot model representing the candidate's skills and availability.
- **Global Command Palette**: Focus-trapped search and navigation portal accessible globally via `Ctrl+K` or `Cmd+K`.
- **Polymorphic ACCESSIBLE UI Primitives**: Standard-compliant links and buttons preventing nested interactive element DOM warnings.
- **Auto-Scanning Pre-Build Script**: Automated folder scanner (`scan-assets.js`) mapping profile photos, certificate listings, and verify credentials status before build.
- **Performance Engine**: Next.js code splitting, loading placeholder boundaries, and dynamic import loading optimizations.

---

## ⚙️ Project Architecture

```text
├── app/                  # Next.js App Router (Layouts, Metadata, OpenGraph images)
├── components/           # React Components grouped by domain
│   ├── about/            # Philosophy & Values layout
│   ├── ai/               # Local Embedded Mentor Agent Chat
│   ├── contact/          # Rate-limited Secure Message Form
│   ├── hero/             # Landing Hero & profile photo loading
│   ├── journey/          # Timeline Milestones
│   ├── layout/           # Sticky Header & Footer
│   ├── projects/         # Featured Case Studies grid (interactive Streamlit embeds)
│   ├── proof/            # Certifications listing & Dynamic pre-view modals
│   ├── shared/           # Scroll animation reveal utilities
│   └── ui/               # Core UI primitive elements (Button, Card, Badge, Terminal)
├── content/              # Auto-generated and static Markdown/JSON data feeds
├── public/               # Static assets (certificates, resume, profile photo)
├── scripts/              # scan-assets scanner script
└── package.json          # Node dependencies & project lifecycle scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and npm installed locally.

### Installation

1. Clone the repository and navigate to the directory:
   ```bash
   cd RISHABH-PORTFOLIO-OS
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Lifecycle

Run the local development server (this automatically scans files and configures experience profiles before launching):
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

### Custom Scanning Script

Before every launch or build, the pre-launch lifecycle script triggers:
```bash
node scripts/scan-assets.js
```
This script dynamically:
- Locates profile JPEG photos under `public/profile/` and generates `content/profile.ts`.
- Scans `public/resume/` for active PDFs and maps `content/resume.ts`.
- Analyzes folder listings in `public/certificates/` to pair PDF transcripts and images, setting categories and statuses automatically inside `content/certificates.ts`.

---

## 📦 Production Builds

To compile, lint, and verify the production bundle:

1. Compile the static application:
   ```bash
   npm run build
   ```

2. Verify linter guidelines:
   ```bash
   npm run lint
   ```

3. Boot the production server locally:
   ```bash
   npm start
   ```

---

## ☁️ Deployment Guidelines

The project compiles to static pages, making it ideal for hosting on **Vercel** or **Netlify**:

1. Push your changes to GitHub.
2. Link the repository to your Vercel Dashboard.
3. Configure the build commands:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. Deploy! The scanning script will automatically execute in the Vercel CI environment during the pre-build phase.
