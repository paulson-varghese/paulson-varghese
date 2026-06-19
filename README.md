# Paulson Varghese — Portfolio

Personal portfolio site built with React 19, TypeScript, and Vite. Single-page, dark-themed, with scroll-triggered animations and a contact form powered by EmailJS.

## Tech Stack

- **React 19** + **TypeScript** — strict mode enabled
- **Vite** — dev server with HMR and production builds
- **CSS custom properties** — no Tailwind, no CSS modules; all styles in `src/index.css`
- **EmailJS** — contact form without a backend
- **react-icons** — icon set (Feather Icons)

## Sections

- Hero — typewriter role animation
- About — animated stat counters
- Skills — categorised tech stack
- Experience — work timeline
- Projects — Master Thesis (confidential) + Personal Finance Simulator hobby project
- Education
- Contact — EmailJS form

## Projects

| Project | Type | Links |
|---|---|---|
| Automated API Testing Framework with CI/CD Integration | Master Thesis | Confidential / NDA Protected |
| Personal Finance Simulator | Hobby | [GitHub](https://github.com/paulsonvargehese/personal-finance-simulator) · [Demo](https://personal-finance-simulator-rosy.vercel.app/) |

## Getting Started

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # type-check + production build
npm run preview    # preview the production build
npm run lint       # ESLint
```

## Environment Variables

Create a `.env.local` file with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```
