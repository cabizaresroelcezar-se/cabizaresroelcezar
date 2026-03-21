# Quick Reference: Astro + Tailwind Patterns

Copy-paste snippets for common tasks.

## Component Patterns

### Basic Component
```astro
---
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<div class="p-6 rounded-lg border border-gray-200">
  <h3 class="text-xl font-bold">{title}</h3>
  <p class="text-gray-600">{description}</p>
</div>
```

### Component with Slots
```astro
---
// src/components/Card.astro
interface Props {
  title?: string;
}

const { title } = Astro.props;
---

<div class="card">
  {title && <h3 class="text-xl font-bold">{title}</h3>}
  <slot />
</div>
```

### Client-Side Interactivity
```astro
---
// src/components/Counter.astro
---

<div id="counter">
  <p>Count: <span id="count">0</span></p>
  <button id="increment">Increment</button>
</div>

<script>
  const button = document.getElementById('increment');
  const count = document.getElementById('count');
  let n = 0;

  button?.addEventListener('click', () => {
    n++;
    if (count) count.textContent = String(n);
  });
</script>
```

## Tailwind Classes Cheat Sheet

### Spacing
```tailwind
p-4          /* padding: 1rem */
px-6         /* padding-left & right: 1.5rem */
py-8         /* padding-top & bottom: 2rem */
m-4          /* margin: 1rem */
mx-auto      /* horizontal centering */
gap-4        /* gap between flex/grid items */
```

### Typography
```tailwind
text-xl      /* font-size: 1.25rem */
font-bold    /* font-weight: 700 */
font-light   /* font-weight: 300 */
text-gray-600   /* color */
text-center  /* text alignment */
leading-relaxed /* line-height */
opacity-80   /* opacity: 0.8 */
```

### Layout
```tailwind
flex         /* display: flex */
grid        /* display: grid */
grid-cols-3  /* grid-template-columns: repeat(3, minmax(0, 1fr)) */
items-center /* align-items: center */
justify-between /* justify-content: space-between */
w-full      /* width: 100% */
max-w-4xl   /* max-width: 56rem */
min-h-screen /* min-height: 100vh */
```

### Responsive
```tailwind
md:hidden    /* hide on medium+ screens */
md:flex      /* flex on medium+ screens */
md:grid-cols-2  /* 2 columns on medium+ screens */
sm:px-6      /* padding on small+ screens */
lg:px-8      /* padding on large+ screens */
```

### Effects
```tailwind
rounded-lg   /* border-radius: 0.5rem */
shadow-sm    /* subtle shadow */
shadow-lg    /* strong shadow */
hover:bg-gray-100   /* on hover */
transition-colors   /* smooth color transitions */
```

## Common Patterns

### Hero Section
```astro
<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
  <div class="text-center">
    <h1 class="text-6xl font-bold text-gray-900 mb-4">Welcome</h1>
    <p class="text-xl text-gray-600">Your description here</p>
  </div>
</section>
```

### Card Grid
```astro
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div class="card">
    <h3 class="text-xl font-bold mb-4">Card 1</h3>
    <p class="text-gray-600">Description</p>
  </div>
  <!-- Repeat for more cards -->
</div>
```

### Button Styles
```html
<!-- Primary Button -->
<button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
  Click me
</button>

<!-- Secondary Button -->
<button class="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition">
  Click me
</button>

<!-- Link Button -->
<a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">
  Learn more →
</a>
```

### Navigation
```astro
<nav class="flex items-center justify-between">
  <h1 class="text-2xl font-bold">Logo</h1>
  <div class="hidden md:flex gap-8">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</nav>
```

### Section Container
```astro
<section class="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
  <h2 class="text-4xl font-bold mb-12">Section Title</h2>
  <!-- Content -->
</section>
```

### Form Elements
```html
<!-- Text Input -->
<div class="mb-6">
  <label class="block text-sm font-medium text-gray-900 mb-2">Label</label>
  <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
</div>

<!-- Textarea -->
<textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none" rows="6"></textarea>

<!-- Select -->
<select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
  <option>Select option</option>
</select>
```

## Astro Syntax

### Import Components
```astro
---
import Header from '../components/Header.astro';
import Card from '../components/Card.astro';
---
```

### Pass Props
```astro
<Card title="Hello" description="This is a card">
  <p>Slot content</p>
</Card>
```

### Conditional Rendering
```astro
---
const show = true;
---

{show && <p>This shows conditionally</p>}
```

### Loops
```astro
---
const items = ['Item 1', 'Item 2', 'Item 3'];
---

{items.map((item) => (
  <div>{item}</div>
))}
```

## CSS Tips

### Global Styles
Add to `src/styles/globals.css`:
```css
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition;
  }
}
```

Then use: `<button class="btn-primary">Click</button>`

## Performance Tips

1. **Use `loading="lazy"` on images**
   ```html
   <img src="image.jpg" loading="lazy" alt="description" />
   ```

2. **Optimize images before uploading**
   - Use tools like TinyPNG or ImageOptim
   - Convert to WebP format
   - Keep dimensions reasonable

3. **Lazy load components**
   ```astro
   import { lazy } from 'astro:components';
   const HeavyComponent = lazy(() => import('./Heavy.astro'));
   ```

4. **Minimize external scripts**
   - Load Google Tag Manager asynchronously
   - Defer non-critical scripts

---

Need more patterns? Visit [Astro Examples](https://astro.build/examples/) or [Tailwind Templates](https://tailwindui.com/).
