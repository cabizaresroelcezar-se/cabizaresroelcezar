import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Your GitHub Pages site URL
  site: 'https://cabizaresroelcezar.github.io',

  // Integrations
  integrations: [tailwind()],

  // Development server settings
  server: {
    port: 4322,
    host: true,
  },

  // Build settings
  build: {
    concurrency: 3,
  },
});
