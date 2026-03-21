# 🚀 Astro + Tailwind Conversion - Setup Guide

Welcome to your new Jamstack portfolio! Here's a step-by-step guide to get everything working.

## Step 1: Install Dependencies

```bash
npm install
```

This installs:
- **Astro 4**: Modern web framework
- **Tailwind CSS**: Utility-first CSS framework
- **@astrojs/tailwind**: Tailwind integration for Astro

## Step 2: Prepare Assets

Copy your existing assets to the `public/` folder:

```
public/
├── favicon.png                    # Your site favicon
├── logo.png                       # Site logo (64x62px)
├── scroll-down.svg               # Scroll indicator animation
├── cabz-img.jpg                  # About section image
├── cv.pdf                        # Your CV
├── icons/
│   ├── web-development.svg       # Service icon
│   ├── design.svg                # Service icon
│   └── digital-marketing.svg     # Service icon
└── projects/
    ├── rescue-8.jpg              # Project image
    ├── ride-slow.jpg             # Project image
    └── adyo.jpg                  # Project image
```

### Creating Placeholder SVGs

If you don't have SVGs yet, you can create simple ones or use:
- [Feather Icons](https://feathericons.com/) - Open source icons
- [Heroicons](https://heroicons.com/) - Beautiful SVGs
- [Material Icons](https://fonts.google.com/icons) - Google's icon set

## Step 3: Update Configuration Files

### 3a. Site URL (astro.config.mjs)
Update your site URL for correct deployment:
```javascript
site: 'https://cabizaresroelcezar.github.io',
```

### 3b. Contact Form (src/components/ContactForm.astro)

**Option A: Formspree (Recommended for simple forms)**
1. Sign up at: https://formspree.io/
2. Create a new form
3. Copy your form ID
4. Replace `YOUR_FORM_ID` in the component:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

**Option B: Netlify Forms**
- If deploying to Netlify, just add `netlify` attribute to the form
- No configuration needed!

**Option C: Custom Backend**
Replace the fetch URL with your own API endpoint.

### 3c. Google Tag Manager (Optional)

Update GTM ID in `src/layouts/BaseLayout.astro`:
```html
'GTM-M3KQ45N'  // Replace with your GTM-ID
```

## Step 4: Customize Content

### Update Site Title & Metadata
Edit `src/layouts/BaseLayout.astro`:
```astro
const { 
  title = 'Your Name - Frontend Developer',
  description = 'Your description here',
  image = '/og-image.jpg'
} = Astro.props;
```

### Update Homepage Content
Edit `src/pages/index.astro`:
- Hero section text
- About Me section
- Services offered
- Project details
- Contact information

### Update Navigation
Edit `src/components/Header.astro`:
- Logo image
- Navigation links
- Mobile menu

## Step 5: Development

### Start Dev Server
```bash
npm run dev
```
Visit: http://localhost:3000

Make changes and see live reload automatically!

### Command Reference
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Step 6: Deployment to GitHub Pages

### Setup
1. Ensure your repository is public
2. Repository name should be: `{username}.github.io` (if new)
3. Or use any name with branch-based deployment

### Deploy
1. **Automatic (via GitHub Actions)**
   - Push to `main` branch
   - GitHub Actions automatically builds and deploys
   - Check `.github/workflows/deploy.yml` for details

2. **Manual**
   ```bash
   npm run build
   # Then manually push dist/ folder to gh-pages branch
   ```

### Verify Deployment
- Visit: https://cabizaresroelcezar.github.io
- Check GitHub Pages settings in repository

## Step 7: Post-Launch Improvements

### Add Blog (Optional)
```bash
npm install @astrojs/markdown-remark
```
Create dynamic blog routes with file-based routing.

### Add Analytics
- **Google Analytics**: Add script to `BaseLayout.astro`
- **Vercel Analytics**: Simple integration if on Vercel
- **Plausible**: Privacy-friendly alternative

### Add Dark Mode
Update `tailwind.config.mjs`:
```javascript
export default {
  darkMode: 'class',
  // ...
}
```

### Performance Optimization
- Image optimization: Use Astro's `<Image>` component
- Code splitting: Automatic with Astro
- Caching: Configure in deployment settings

## 📱 File Structure Reference

```
project-root/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ServiceCard.astro
│   │   ├── WorkCard.astro
│   │   └── ContactForm.astro
│   ├── layouts/
│   │   └── BaseLayout.astro     # Main layout template
│   ├── pages/
│   │   └── index.astro          # Homepage (auto-routed)
│   └── styles/
│       └── globals.css          # Global styles + Tailwind
├── public/                   # Static assets (images, etc.)
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs       # Tailwind configuration
├── tsconfig.json            # TypeScript config
├── package.json             # Dependencies
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Pages automation
```

## 🆘 Troubleshooting

### Build Errors
- Clear cache: `rm -rf .astro node_modules && npm install`
- Check Node version: `node --version` (needs 18+)

### Images Not Loading
- Ensure images are in `public/` folder
- Use relative paths: `/image.png` (not `./image.png`)

### Form Not Submitting
- Check browser console for errors
- Verify Formspree form ID is correct
- Check CORS settings if using custom backend

### Styles Not Updating
- Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Restart dev server: Stop and run `npm run dev` again

## 🎓 Next Steps

1. ✅ Install dependencies
2. ✅ Set up contact form
3. ✅ Add your assets (images, icons, CV)
4. ✅ Customize content
5. ✅ Test locally (`npm run dev`)
6. ✅ Deploy to GitHub Pages (push to main)
7. 🎉 Share your new portfolio!

## 📚 Resources

- **Astro Docs**: https://docs.astro.build
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Formspree Docs**: https://formspree.io/help/
- **Astro Discord**: https://astro.build/chat

---

Happy coding! 🚀

Questions? Check the [README.md](./README.md) for more details.
