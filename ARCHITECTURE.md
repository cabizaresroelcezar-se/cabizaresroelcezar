# Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     YOUR ASTRO PORTFOLIO                     │
│                   (Jamstack Architecture)                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        USER BROWSER                          │
│  https://cabizaresroelcezar.github.io (GitHub Pages)       │
└─────────────────────────────────────────────────────────────┘
                              ↑
                              │ (HTTP/HTTPS)
                              │
┌─────────────────────────────────────────────────────────────┐
│                     GITHUB PAGES (CDN)                       │
│              (Static Site Hosting - Free!)                  │
└─────────────────────────────────────────────────────────────┘
                              ↑
                              │ (Auto Deploy)
                              │
┌─────────────────────────────────────────────────────────────┐
│                     GITHUB ACTIONS                           │
│              (.github/workflows/deploy.yml)                 │
│  ┌─────┐     ┌─────┐     ┌──────┐     ┌────────┐           │
│  │Build│ --> │Test │ --> │Build │ --> │Deploy  │           │
│  │     │     │     │     │Dist  │     │        │           │
│  └─────┘     └─────┘     └──────┘     └────────┘           │
└─────────────────────────────────────────────────────────────┘
                              ↑
                              │ (git push main)
                              │
┌─────────────────────────────────────────────────────────────┐
│                      YOUR LOCAL PC                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ VS Code Terminal                                     │   │
│  │ npm run dev    (Local development)                  │   │
│  │ npm run build  (Production build)                   │   │
│  │ git push main  (Deploy)                             │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Project Structure                                    │   │
│  │                                                      │   │
│  │ src/                                                 │   │
│  │ ├── pages/index.astro      (Homepage)               │   │
│  │ ├── components/            (Reusable components)    │   │
│  │ ├── layouts/               (Layout templates)       │   │
│  │ └── styles/globals.css     (Global styles)          │   │
│  │                                                      │   │
│  │ public/                    (Static assets)          │   │
│  │ ├── logo.png                                        │   │
│  │ ├── favicon.png                                     │   │
│  │ ├── icons/                 (Service icons)          │   │
│  │ └── projects/              (Project images)         │   │
│  │                                                      │   │
│  │ astro.config.mjs          (Astro config)           │   │
│  │ tailwind.config.mjs        (Tailwind config)        │   │
│  │ package.json               (Dependencies)           │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Build Process                                        │   │
│  │                                                      │   │
│  │ .astro files → JavaScript → HTML                   │   │
│  │ Tailwind CSS → Optimized CSS (only used classes)  │   │
│  │                                                      │   │
│  │ Output: dist/ folder (ready to deploy)             │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘


COMPONENT TREE
══════════════════════════════════════════════════════════════

BaseLayout (src/layouts/BaseLayout.astro)
├── Header (src/components/Header.astro)
│   ├── Logo/Brand
│   ├── Navigation Links (Home, About, Services, Works, CV, Contact)
│   └── Mobile Menu Toggle
├── Main Content (index.astro)
│   ├── Hero Section
│   │   ├── h2: "Hi there, I'm Roel Cezar Cabizares"
│   │   ├── Description text
│   │   └── Scroll indicator
│   ├── About Section
│   │   ├── Title: "About Me"
│   │   ├── About text (paragraphs)
│   │   ├── Profile image
│   │   └── CTA link
│   ├── Services Section
│   │   ├── Title: "Services"
│   │   ├── ServiceCard × 3
│   │   │   ├── Icon
│   │   │   ├── Title
│   │   │   └── Description
│   │   └── Services list with bullets
│   ├── Works Section
│   │   ├── Current role info
│   │   ├── Title: "Projects"
│   │   └── WorkCard × 3
│   │       ├── Project image
│   │       ├── Project title
│   │       └── Description
│   └── Contact Section
│       ├── Title: "Let's Work Together"
│       ├── ContactForm (Formspree)
│       │   ├── Input: Name
│       │   ├── Input: Email
│       │   ├── Input: Subject
│       │   ├── Textarea: Message
│       │   └── Button: Send
│       └── Fallback email link
└── Footer (src/components/Footer.astro)
    ├── About column
    ├── Quick Links column
    ├── Connect/Social column
    └── Copyright


CONTENT FLOW (How your site works)
══════════════════════════════════════════════════════════════

1. USER VISITS SITE
   ↓
2. GITHUB PAGES SERVES dist/index.html
   ↓
3. HTML INCLUDES:
   - Tailwind CSS (optimized)
   - Inline scripts (GTM, mobile menu)
   - Meta tags (SEO, OG)
   ↓
4. PAGE RENDERS:
   - Hero visible immediately (static)
   - Scroll to sections
   - Contact form ready
   ↓
5. USER INTERACTIONS:
   - Click contact form? Submits to Formspree
   - Click mobile menu? JavaScript toggle
   - Internal links? Same-page navigation
   ↓
6. ANALYTICS:
   - GTM tracks pageviews
   - Form submission logged


DATA FLOW (Contact Form)
══════════════════════════════════════════════════════════════

User submits form
        ↓
JavaScript (ContactForm.astro)
        ↓
FormData collected
        ↓
fetch() to https://formspree.io/f/{FORM_ID}
        ↓
Response from Formspree
        ↓
Success: Green message + form reset
        ↓
Formspree emails you the submission


STYLING ARCHITECTURE
══════════════════════════════════════════════════════════════

bootstrap/    (OLD - can delete)
├── CSS files
├── JS files
└── SCSS

NEW SETUP:
src/styles/globals.css
├── @import 'tailwindcss/base'     (Reset styles)
├── @tailwindcss/components        (Component classes)
├── @tailwindcss/utilities         (Utility classes)
└── Custom @layer components       (Custom classes)

Tailwind CSS automatically:
- Tree-shakes unused styles
- Optimizes CSS for production
- Sorts utilities consistently


DEPLOYMENT FLOW
══════════════════════════════════════════════════════════════

git push origin main
        ↓
GitHub detects push
        ↓
Triggers .github/workflows/deploy.yml
        ↓
GitHub Actions runs: npm install
        ↓
npm run build → creates dist/
        ↓
Uploads dist/ to gh-pages branch
        ↓
GitHub Pages hosts the files
        ↓
Available at https://cabizaresroelcezar.github.io


PERFORMANCE BENEFITS
══════════════════════════════════════════════════════════════

OLD (HTML + Bootstrap)          NEW (Astro + Tailwind)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
~150KB CSS (Bootstrap)    →    ~10KB CSS (only used)
HTML duplicated           →    DRY components
No build optimization     →    Automatic optimization
Manual deployments        →    Automated CI/CD
Slower TTFB              →    Instant static content
```

## What This Architecture Gives You

✅ **Fast Delivery**
- Static HTML files (instant load)
- Optimized CSS (only used utilities)
- No waiting for servers

✅ **Easy Updates**
- Write code locally
- Git push = automatic deploy
- No manual FTP/SSH needed

✅ **Maintainability**
- Component reusability
- Tailwind utility consistency
- All styling in one place

✅ **Scalability**
- Add new pages easily
- No database needed
- CDN handles traffic

✅ **Security**
- No database vulnerabilities
- No server exploitation
- Static files only

✅ **Cost**
- GitHub Pages = free
- No hosting fees
- Only pay for domain (optional)
