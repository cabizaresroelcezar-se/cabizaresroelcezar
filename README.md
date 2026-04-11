# cabizaresroelcezar

Personal portfolio of **Roel Cezar Cabizares** — Software Engineer & Designer specializing in full-stack development, UI/UX, and intentional digital experiences.

**Live:** [cabizaresroelcezar.github.io](https://cabizaresroelcezar.github.io)

## Tech Stack

- **Framework** — Astro 5
- **Styling** — Tailwind CSS + CSS custom properties (spatial/glassmorphism design system)
- **Typography** — Manrope (self-hosted woff2, weights 300/500/700)
- **Animations** — AOS (scroll reveal) + GSAP ScrollTrigger
- **Theme** — Dark default / light mode with `[data-theme]` toggle, persisted in localStorage
- **Contact Form** — formsubmit.co with honeypot & timing validation
- **Analytics** — Google Tag Manager
- **Deployment** — GitHub Pages

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — About, Services, Experience, Projects, Ventures, Kudos, Contact |
| `/branding` | CABZ branding page — logo system, typography, color palette |

## Project Structure

```
src/
├── components/
│   ├── ContactForm.astro      # formsubmit.co contact form with validation
│   ├── Footer.astro           # 3-column footer with nav, social links, address
│   ├── GlassCard.astro        # Reusable glassmorphism service card
│   ├── Header.astro           # Top navigation bar with inline SVG icons
│   ├── ServiceCard.astro      # Services section card
│   ├── SpatialDock.astro      # Bottom floating dock navigation
│   ├── SpatialHero.astro      # Hero section with animated shapes
│   ├── ThemeToggle.astro      # Dark/light mode switch
│   └── WorkCard.astro         # Project/work showcase card
├── layouts/
│   └── BaseLayout.astro       # Base HTML layout (meta, fonts, GTM, dev tools guard)
├── pages/
│   ├── index.astro            # Landing page (all sections)
│   └── branding.astro         # CABZ branding showcase page
└── styles/
    ├── spatial.css            # Design tokens, theme variables, glass primitives
    ├── globals.css            # Typography scale, section defaults
    ├── cabzcbzrs.css          # Section-specific styles
    └── style.css              # Legacy/utility styles
public/
├── fonts/                     # Self-hosted Manrope woff2 files
├── icons/                     # Service and UI icons (SVG)
├── logo.png                   # Logo for dark mode
├── logo_light.png             # Logo for light mode
└── ...                        # Project images, favicon, social SVGs
```

## Sections (index.astro)

- **Hero** — Animated spatial hero with floating ambient orbs
- **About Me** — Personal background and skill tags
- **Services** — GlassCard grid (Web Dev, Brand Strategy, UI/UX, WordPress)
- **Experience** — Current role at Agile Tech Ops Inc. (.NET & Blazor)
- **Branding CTA** — CABZ branding page callout
- **Ventures** — Side projects: KeyCabz, Cryptobuds, Yo-Bi
- **Projects** — Website & Software: PILA, Rescue 8, Ride Slow / Digital & Branding: Kademyahan, Adyó, Project 1998
- **Kudos** — Acknowledgements
- **Contact** — Form with honeypot & timing security

## Quick Start

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4322)
npm run dev

# Production build
npm run build

# Preview build locally
npm run preview
```

## Design System

The site uses CSS custom properties defined in `src/styles/spatial.css`:

- **Type scale** — `--fs-2xs` through `--fs-hero` using `clamp()` for fluid sizing
- **Glass primitives** — `--glass-bg`, `--glass-border`, `--glass-shadow` for frosted-glass effects
- **Theme tokens** — `--bg`, `--text-primary`, `--text-secondary`, `--color-orange`, swapped per `[data-theme]`
- **Decorative text** — Outlined stroke headings via `-webkit-text-stroke`
- **Default theme** — Dark mode, user preference persisted in `localStorage`

## Deployment

Configured for **GitHub Pages** via GitHub Actions. Pushing to `main` triggers an automatic build and deploy.

```bash
# Manual build
npm run build
# The dist/ folder is deployed to GitHub Pages
```

## License

MIT
