import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Demo staat in een submap van voorstel.sitefront.nl; alle links via BASE_URL.
export default defineConfig({
  site: 'https://voorstel.sitefront.nl',
  base: '/zoutewelle-import',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
