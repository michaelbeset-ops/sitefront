// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Demo draait in een submap; het deployscript zet dit om naar https://voorstel.sitefront.nl/riant-zonwering/.
export default defineConfig({
  site: 'https://michaelbeset-ops.github.io',
  base: '/sitefront/riant-zonwering',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
