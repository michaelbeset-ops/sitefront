// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Twee builds uit dezelfde bron:
// - voorstel (PUBLIC_VOORSTEL=1, `npm run build:voorstel`): submap van de Sitefront-verzamelrepo, noindex, geen JSON-LD.
// - definitief (`npm run build`): eigen domein, volledig vindbaar voor zoekmachines en AI.
const voorstel = process.env.PUBLIC_VOORSTEL === '1';

export default defineConfig({
  // SITE_URL en BASE_PATH overschrijven dit, voor de preview op github.io (zie .github/workflows/deploy.yml).
  site: process.env.SITE_URL || (voorstel ? 'https://voorstel.sitefront.nl' : 'https://brillenbijuthuis.nl'),
  base: process.env.BASE_PATH || (voorstel ? '/brillen-bij-u-thuis' : '/'),
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  markdown: { syntaxHighlight: false },
  build: { inlineStylesheets: 'always' },
  // GitHub Pages kan geen eigen headers sturen, dus de CSP komt als meta-tag mee, met hashes voor elk inline script en elke stylesheet.
  // Daarom staan er nergens style-attributen in de markup: die zou deze CSP blokkeren.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
  // De oude site (Strato) had losse pagina's. Na de verhuizing sturen die adressen door, zodat links en Google-resultaten blijven werken.
  redirects: voorstel ? {} : {
    '/Home': '/',
    '/Over-ons': '/#over',
    '/Diensten': '/#diensten',
    '/Contact': '/#contact',
    '/Bedrijfsgegevens': '/privacy/#bedrijfsgegevens',
  },
  integrations: [sitemap({ filter: (p) => !p.includes('/404') })],
  vite: { plugins: [tailwindcss()] },
});
