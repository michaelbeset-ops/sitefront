# bomboca-arnhem

Ontwerpvoorstel (Astro 7 + Tailwind 4) voor Bomboca, Portugese koffiebar aan de Eusebiusbuitensingel in Arnhem.
Concept: de roze kamer met petrolblauwe lambrisering, handgeschilderde kalklijst-letters (Sue Ellen Francisco) en de
penseelstreepjes van hun bord. Zie PLAN.md.

    npm install
    node tools/teken.mjs               # tekent public/rand*.svg, favicon.svg en src/data/ruit.ts opnieuw
    PUBLIC_VOORSTEL=1 npx astro build  # met voorstelbalk en noindex
    npx astro preview --port 4532

Feiten: src/data/site.ts en src/scripts/open.ts (openingstijden). Foto's: src/assets/BRONNEN.txt.
