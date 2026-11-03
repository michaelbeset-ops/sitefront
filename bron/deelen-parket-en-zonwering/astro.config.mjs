import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Demo staat in een submap van voorstel.sitefront.nl, daarom base.
export default defineConfig({
  site: 'https://voorstel.sitefront.nl',
  base: '/deelen-parket-en-zonwering',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
