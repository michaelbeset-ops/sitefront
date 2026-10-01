// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Demo draait in een submap van de Sitefront-verzamelrepo op GitHub Pages.
export default defineConfig({
  site: 'https://michaelbeset-ops.github.io',
  base: '/sitefront/autobedrijf-booi-dordrecht',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
