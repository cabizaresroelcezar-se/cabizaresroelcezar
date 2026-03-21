# Roel Cezar Cabizares - Portfolio

A modern Jamstack portfolio built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Project Structure

```
src/
├── components/        # Reusable Astro components
├── layouts/          # Layout templates
├── pages/            # Page routes (file-based routing)
└── styles/           # Global CSS and Tailwind configuration

public/              # Static assets (images, fonts, etc.)
```

## 🛠️ Tech Stack

- **Framework**: Astro 4
- **Styling**: Tailwind CSS
- **Typography**: Manrope font family
- **Forms**: Formspree integration (configurable)
- **Analytics**: Google Tag Manager
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser

3. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Configuration

### Update Site URL
Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://your-username.github.io',
  // ...
});
```

### Contact Form Setup

The contact form in `src/components/ContactForm.astro` uses [Formspree](https://formspree.io/) for handling submissions.

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form and get your form ID
3. Replace `YOUR_FORM_ID` in `ContactForm.astro`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

**Alternative services** (pick one):
- **Netlify Forms**: Add `netlify` attribute to form
- **EmailJS**: Use EmailJS SDK
- **Backend API**: Connect to your own backend

### Google Tag Manager
Update GTM ID in `src/layouts/BaseLayout.astro`:
```astro
'GTM-M3KQ45N'  // Replace with your GTM ID
```

## 📂 Asset Migration

Replace these with your own:

```
public/
├── logo.png              # Your logo
├── favicon.png          # Favicon
├── scroll-down.svg      # Scroll indicator
├── cabz-img.jpg         # About section image
└── icons/
    ├── web-development.svg
    ├── design.svg
    └── digital-marketing.svg

projects/         # Project case study images
```

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.mjs` to customize colors, fonts, and spacing.

### Fonts
Currently using Google Fonts "Manrope". To change:
1. Update `src/styles/globals.css` font import
2. Update `tailwind.config.mjs` fontFamily

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Repository setup**
   - Create a public repository named `{username}.github.io` (if new)
   - Or push to your existing portfolio repo

2. **GitHub Actions**
   - The workflow in `.github/workflows/deploy.yml` automatically deploys on push to `main`
   - Builds and deploys to GitHub Pages

3. **Manual deployment**
   ```bash
   npm run build
   # Push the 'dist' folder to gh-pages branch
   ```

### Alternative Deployment Options

**Netlify**
```bash
npm install -D @astrojs/netlify
```
Then configure `astro.config.mjs`:
```javascript
import netlify from '@astrojs/netlify/functions';
export default defineConfig({
  output: 'server',
  adapter: netlify(),
});
```

**Vercel**
```bash
npm install -D @astrojs/vercel
```

**Manual/Self-hosted**
Run `npm run build` and deploy the `dist/` folder to your server.

## 📋 Content Organization

### Add New Pages
Create `.astro` files in `src/pages/`:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Page Title">
  <h1>Your content here</h1>
</BaseLayout>
```

### Add New Components
Create `.astro` files in `src/components/` and import them in pages.

### Blog/Projects (Future)
To add a blog or projects section:
```bash
npm install @astrojs/markdown-remark
```
Create `src/pages/blog/[slug].astro` for dynamic routes.

## 🔧 Development

### Watch mode
```bash
npm run dev
```

### Build & preview
```bash
npm run build
npm run preview
```

### Linting (optional)
```bash
npm install -D eslint eslint-plugin-astro
```

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Integrations](https://astro.build/integrations/)

## 📄 License

This portfolio is open source and available under the MIT License.

## 🤝 Support

For issues or questions about Astro, visit the [Astro Discord Community](https://astro.build/chat).
# cabizaresroelcezar
# cabizaresroelcezar
