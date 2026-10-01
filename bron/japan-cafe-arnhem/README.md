# japan-cafe-arnhem

Ontwerpvoorstel (Astro 7 + Tailwind 4) voor JAPAN CAFE, Japans café & restaurant aan de Nieuwstraat in Arnhem.
Concept: de zaal zelf (beton, staal, houten latwerkplafond, indigo wand) met een indigo noren als ingang.
Shippori Mincho + Zen Kaku Gothic New. Zie PLAN.md.

    npm install
    PUBLIC_VOORSTEL=1 npx astro build  # met voorstelbalk en noindex
    npx astro preview --port 4534

Feiten: src/data/site.ts en src/scripts/open.ts (openingstijden). Foto's: src/assets/BRONNEN.txt.
Japanse tekens: src/fonts/shippori-mincho-jp-500.woff2 is een subset; voeg je tekens toe, maak hem opnieuw met
`python -m fontTools.subset <shippori-mincho-japanese-500-normal.woff2> --text="..." --flavor=woff2 --output-file=...`.
