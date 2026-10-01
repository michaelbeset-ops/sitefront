# femm-rotterdam

Ontwerpvoorstel (Astro + Tailwind 4) voor F.E.M.M. Rotterdam, groothandel in scheepsuitrusting, Maaskade 132-B. Zie PLAN.md.

    npm install
    node tools/kaart.mjs               # tekent src/data/kaart.ts opnieuw uit tools/osm-noordereiland.json (OSM, ODbL)
    PUBLIC_VOORSTEL=1 npx astro build  # met voorstelbalk en noindex
    npx astro preview --port 4551

Feiten: src/data/site.ts. Foto's: src/assets/BRONNEN.txt.
