// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Demo draait in een submap van de Sitefront-verzamelrepo op GitHub Pages.
export default defineConfig({
  site: 'https://michaelbeset-ops.github.io',
  base: '/sitefront/hotel-het-weeshuis',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
