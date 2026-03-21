# Migration Checklist: Old HTML → Astro + Tailwind

Use this checklist to track your migration progress.

## Phase 1: Setup ✅
- [x] Create Astro project structure
- [x] Install dependencies (npm install)
- [x] Configure Tailwind CSS
- [x] Set up initial components
- [ ] Copy assets to `public/` folder
- [ ] Update astro.config.mjs with your site URL

## Phase 2: Assets & Configuration
- [ ] Add favicon.png to public/
- [ ] Add logo.png to public/
- [ ] Add scroll-down.svg animation
- [ ] Add profile image (cabz-img.jpg)
- [ ] Add service icons to public/icons/
- [ ] Add project images to public/projects/
- [ ] Set up Formspree form ID in ContactForm.astro
- [ ] Update GTM ID in BaseLayout.astro
- [ ] Add contact email address in ContactForm.astro

## Phase 3: Content Updates
- [ ] Update hero section text in index.astro
- [ ] Update about section content
- [ ] Update services descriptions
- [ ] Update work/project information
- [ ] Update social links in Footer.astro
- [ ] Update navigation links in Header.astro
- [ ] Add your actual CV file to public/cv.pdf

## Phase 4: Testing
- [ ] Run `npm run dev` and test locally
- [ ] Test Hero section on mobile & desktop
- [ ] Test About section layout
- [ ] Test Services section responsiveness
- [ ] Test Works/Projects section
- [ ] Test Contact form submission
- [ ] Test mobile menu toggle
- [ ] Test all navigation links
- [ ] Check images load correctly
- [ ] Verify form validation works
- [ ] Test form submission with Formspree
- [ ] Check Google Tag Manager loading (GTM)

## Phase 5: Optimization (Optional)
- [ ] Optimize images (compress, WebP format)
- [ ] Add alt text to all images
- [ ] Test page speed (Google PageSpeed Insights)
- [ ] Add Open Graph meta tags customization
- [ ] Set up analytics dashboard
- [ ] Add robots.txt file
- [ ] Create sitemap (Astro auto-generates)

## Phase 6: Deployment
- [ ] Build project: `npm run build`
- [ ] Preview build: `npm run preview`
- [ ] Set GitHub repository to public
- [ ] Create GitHub Actions workflow (already included)
- [ ] Push to main branch
- [ ] Verify deployment at https://cabizaresroelcezar.github.io
- [ ] Test deployed site across browsers
- [ ] Test form submission on live site
- [ ] Set up custom domain (if needed)

## Phase 7: Post-Launch
- [ ] Monitor Google Analytics
- [ ] Monitor form submissions
- [ ] Gather feedback
- [ ] Plan future improvements
- [ ] Consider adding blog section
- [ ] Plan social media integration
- [ ] Set up performance monitoring

## Additional Migrations (Optional)

### Blog/Case Studies Section
If you want to add detailed case studies:
- [ ] Install markdown support: `npm install @astrojs/markdown-remark`
- [ ] Create case study templates
- [ ] Migrate case study content
- [ ] Set up dynamic routing for case studies

### Dark Mode Support
- [ ] Update tailwind.config.mjs with darkMode: 'class'
- [ ] Create dark mode toggle component
- [ ] Update colors for dark mode
- [ ] Test dark mode across pages

### Early Pages Migration (Coming Soon)
- [ ] Migrate error.html → error.astro
- [ ] Migrate other HTML pages as needed
- [ ] Update internal links

## URLs & Credentials to Update

**Important**: Update before going live!

- [ ] Formspree Form ID: `YOUR_FORM_ID`
- [ ] Google Tag Manager ID: `GTM-M3KQ45N`
- [ ] Contact Email: `hello@cabizares.com`
- [ ] CV File Path: `/cv.pdf`
- [ ] Site URL: `https://cabizaresroelcezar.github.io`

## Notes

Keep track of any custom styles or functionality from your old site:
- [ ] Note any custom CSS animations
- [ ] Document any jQuery scripts
- [ ] List any third-party integrations
- [ ] Record custom fonts or typography

---

**Timeline Estimate**: 2-4 hours for basic setup, longer if adding blog/case studies

**Need Help?**
- Check SETUP_GUIDE.md for step-by-step instructions
- Visit Astro Docs: https://docs.astro.build
- Join Astro Discord: https://astro.build/chat
