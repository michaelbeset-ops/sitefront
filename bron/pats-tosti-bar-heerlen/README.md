# pats-tosti-bar-heerlen

Ontwerpvoorstel (Astro 7 + Tailwind 4) voor Pat's Tosti Bar, Saroleastraat 66, Heerlen. Concept: "een klein museum met
tosti's": witte wand, zwart plafond, bordeaux banier, Big Shoulders + Archivo, zaalbordjes onder de foto's. Zie PLAN.md.

    npm install
    node tools/favicon.mjs             # favicon.svg uit de lauwerkrans (src/data/krans.ts)
    PUBLIC_VOORSTEL=1 npx astro build  # met voorstelbalk en noindex
    npx astro preview --port 4531

tools/og.mjs en tools/view.mjs draaien vanuit scratchpad/pw (playwright). Feiten: src/data/site.ts. Foto's: src/assets/BRONNEN.txt.
