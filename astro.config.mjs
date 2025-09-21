import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://kimmiikaze.github.io/astroglossary',
  base: '/astroglossary',
  build: {
    assets: 'assets'
  },
  vite: {
    optimizeDeps: {
      include: ['@astrojs/check']
    }
  },
  trailingSlash: 'ignore'
});