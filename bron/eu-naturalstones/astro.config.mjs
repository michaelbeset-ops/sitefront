// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Demo draait in een submap van de Sitefront-verzamelrepo (deployscript zet base om naar voorstel.sitefront.nl/<slug>/).
export default defineConfig({
  site: 'https://michaelbeset-ops.github.io',
  base: '/sitefront/eu-naturalstones',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
