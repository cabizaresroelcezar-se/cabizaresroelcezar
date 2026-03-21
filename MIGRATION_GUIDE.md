# Migrating Other HTML Files to Astro

Guide for migrating your existing HTML files (error.html, etc.) to Astro pages.

## How Astro File-Based Routing Works

Files in `src/pages/` automatically become routes:

```
src/pages/
├── index.astro           → https://domain.com/
├── about.astro           → https://domain.com/about
├── projects.astro        → https://domain.com/projects
├── blog/
│   └── [slug].astro      → https://domain.com/blog/my-post
└── 404.astro             → Catch-all 404 page
```

## Migrating error.html

Create: `src/pages/404.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<BaseLayout title="Page Not Found">
  <Header />
  
  <main class="flex-1 flex items-center justify-center min-h-screen">
    <div class="text-center max-w-2xl mx-auto px-4">
      <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 class="text-3xl font-bold text-gray-700 mb-4">Page Not Found</h2>
      <p class="text-lg text-gray-600 mb-8">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <a href="/" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Back to Home
      </a>
    </div>
  </main>

  <Footer />
</BaseLayout>
```

## Migrating Other Pages

### Step-by-Step Process

1. **Create new file in `src/pages/`**
   ```bash
   # Example: migrating about.html → about.astro
   touch src/pages/about.astro
   ```

2. **Copy content from old HTML file**

3. **Wrap with `BaseLayout`**
   ```astro
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   import Header from '../components/Header.astro';
   import Footer from '../components/Footer.astro';
   ---
   
   <BaseLayout title="About">
     <Header />
     <main>
       <!-- Your page content here -->
     </main>
     <Footer />
   </BaseLayout>
   ```

4. **Replace Bootstrap CSS with Tailwind classes**
   ```html
   <!-- Old Bootstrap -->
   <div class="container mt-4">
     <div class="row">
       <div class="col-md-6">
   
   <!-- New Tailwind -->
   <div class="max-w-6xl mx-auto px-4 mt-4">
     <div class="grid grid-cols-1 md:grid-cols-2">
       <div>
   ```

5. **Create components for reusable sections**
   ```astro
   // src/components/Testimonial.astro
   ---
   interface Props {
     quote: string;
     author: string;
     role: string;
   }
   ---
   
   <div class="bg-gray-50 p-8 rounded-lg">
     <p class="text-gray-600 italic mb-4">"{quote}"</p>
     <p class="font-bold">{author}</p>
     <p class="text-gray-500 text-sm">{role}</p>
   </div>
   ```

## Bootstrap to Tailwind Conversion Chart

| Bootstrap | Tailwind | Example |
|-----------|----------|---------|
| `container` | `max-w-6xl mx-auto` | `<div class="max-w-6xl mx-auto">` |
| `row` | `flex` or `grid` | `<div class="flex">` |
| `col-md-6` | `md:w-1/2` or `md:col-span-2` | `<div class="md:w-1/2">` |
| `mt-4` | `mt-4` | Same! |
| `btn btn-primary` | `px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700` | `<button class="...">` |
| `alert alert-info` | `bg-blue-50 border border-blue-200 p-4 rounded` | `<div class="...">` |
| `text-center` | `text-center` | Same! |
| `d-none` | `hidden` | `<div class="hidden">` |
| `d-md-block` | `md:block` | `<div class="md:block">` |

## Creating Nested Pages

For pages like `/blog/post/` structure:

```
src/pages/
└── blog/
    └── [slug].astro    ← Dynamic route using slug
```

Content: `src/pages/blog/[slug].astro`
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';

export async function getStaticPaths() {
  return [
    { params: { slug: 'my-first-post' } },
    { params: { slug: 'another-post' } },
  ];
}

const { slug } = Astro.params;
---

<BaseLayout title={`Post: ${slug}`}>
  <!-- Content -->
</BaseLayout>
```

## Redirects & Legacy Routes

If you want old URLs to redirect to new ones:

Create: `src/pages/old-page.astro`
```astro
---
return Astro.redirect('/new-page');
---
```

## Testing New Pages

After migrating a page:

1. **Start dev server**
   ```bash
   npm run dev
   ```

2. **Visit the page**
   - Homepage: http://localhost:3000/
   - About page: http://localhost:3000/about
   - 404 page: http://localhost:3000/nonexistent

3. **Check for issues**
   - Styling looks correct
   - Images load properly
   - Links work
   - Responsive design works on mobile

## Common Migration Issues

### CSS Not Applying
- Ensure Tailwind utilities are in `src/styles/globals.css`
- Check class names match Tailwind syntax
- Restart dev server after CSS changes

### Images Not Loading
- Verify images are in `public/` folder
- Use `/image.png` paths (leading slash)
- Check file extensions match

### Scripts Not Running
- Move inline scripts into `<script>` tags within component
- Use `is:inline` for scripts that need inline execution
- Test in browser console for errors

### Layout Issues
- Mobile: Ensure responsive classes (sm:, md:, lg:)
- Spacing: Use Tailwind's spacing scale
- Colors: Update color references from Bootstrap to Tailwind

## Examples of Migrated Components

### Alert Box
```astro
<!-- Bootstrap -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Warning!</strong> Your message here
  <button type="button" class="close">×</button>
</div>

<!-- Tailwind -->
<div class="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg flex justify-between items-center">
  <div>
    <strong>Warning!</strong> Your message here
  </div>
  <button class="text-yellow-600 hover:text-yellow-800">×</button>
</div>
```

### Card Component
```astro
<!-- Bootstrap -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
</div>

<!-- Tailwind -->
<div class="border rounded-lg shadow-sm hover:shadow-md transition">
  <div class="p-6">
    <h5 class="text-lg font-bold mb-2">Title</h5>
    <p class="text-gray-600">Content</p>
  </div>
</div>
```

## Next Steps

1. Identify which pages need migration
2. Create new Astro pages one by one
3. Test each page thoroughly
4. Update internal links across site
5. Set up redirects for old URLs (optional)
6. Deploy when all pages are complete

---

**Pro Tips**:
- Migrate pages incrementally—don't try to do all at once
- Test mobile responsiveness after each migration
- Keep old HTML files as reference until migration is complete
- Use browser DevTools to check for console errors

Questions? See [Astro Routing Docs](https://docs.astro.build/en/core-concepts/routing/)
