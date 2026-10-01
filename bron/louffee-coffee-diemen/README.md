# louffee-coffee-diemen

Ontwerpvoorstel (Astro 7 + Tailwind 4) voor Louffee Coffee, espressobar aan de Dalsteindreef in Diemen.
Concept: hun gelaagde latte macchiato (schuim, espresso, melk) als opening en paginaritme, de oude kassa als kassabon-kaart
en kassatoetsen voor "matcha, kies je sterkte". Fonts: Gloock + DM Mono. Zie PLAN.md.

    npm install
    node tools/teken.mjs               # tekent public/stoep.svg en public/favicon.svg opnieuw
    PUBLIC_VOORSTEL=1 npx astro build  # met voorstelbalk en noindex
    npx astro preview --port 4541

Feiten: src/data/site.ts en src/pages/index.astro (tijden). Foto's: src/assets/BRONNEN.txt (Google-bedrijfsprofiel).
