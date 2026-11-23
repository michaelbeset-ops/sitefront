import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Demo staat in een submap van voorstel.sitefront.nl, dus alle links via BASE_URL.
export default defineConfig({
  site: 'https://voorstel.sitefront.nl',
  base: '/rijschool-harleman-alblasserdam',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
