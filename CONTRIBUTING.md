# Contributing to Rishabh Portfolio OS

Thank you for your interest in contributing to the **Rishabh Portfolio OS**! 

To maintain the highest standards of software quality and consistency, please review the following guidelines before creating a pull request.

---

## 🛠️ Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rishabhjain071130-glitch/Rishabh-Portfolio-OS.git
   cd Rishabh-Portfolio-OS
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local dev server**:
   ```bash
   npm run dev
   ```
   *Note: This executes the pre-build scan script (`scan-assets.js`) to automatically align content files.*

---

## 📐 Coding Guidelines

- **Strict TypeScript**: Avoid the use of `any` types. Define complete interfaces in `types/index.ts` for all datasets.
- **Design System Consistency**: Follow the CSS layout properties, "Dark Sea" theme colors, and fluid spacing systems documented in `docs/03_DESIGN_SYSTEM.md`.
- **Reusable Primitives**: Create components in `components/ui/` only when they cannot be composed using existing primitives.
- **Accessibility (a11y)**: All interactive elements must support keyboard navigation, maintain correct focus rings, and pass WCAG AA contrast ratios.

---

## 📝 Pull Request & Commit Standards

### Commit Message Format

We follow standard Semantic Commit rules:
- `feat: add scroll progress bar`
- `fix: correct outline contrast ratio`
- `docs: update deployment guidelines`
- `perf: optimize case study screenshots`

### PR checklist

Before submitting your pull request, ensure:
1. `npm run lint` passes successfully.
2. `npm run build` compiles without errors.
3. Responsive behavior is verified across mobile, tablet, and desktop breakpoints.
