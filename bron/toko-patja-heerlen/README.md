# toko-patja-heerlen

Ontwerpvoorstel (Astro 7 + Tailwind 4) voor Toko Patja, Indonesische specialiteiten aan het Wilhelminaplein in Heerlen.
Concept: de gedekte tafel. Hun eigen batikfoto als tafelkleed, de naam op een antraciet servetzakje erop, dunne vierkante
letters (Tomorrow) zoals op hun servetzak, Newsreader voor de zinnen, het kawung-batikmotief als rand. Zie PLAN.md.

    npm install
    node tools/kawung.mjs              # tekent public/kawung*.svg, favicon.svg en src/data/kawung.ts
    node tools/fotos.mjs <map>         # snijdt de eigen Google-foto's bij naar src/assets
    PUBLIC_VOORSTEL=1 npx astro build  # met voorstelbalk en noindex
    npx astro preview --port 4542

og.jpg: tools/og.mjs (draaien vanuit scratchpad/pw, daar staat playwright). Feiten: src/data/site.ts. Foto's: src/assets/BRONNEN.txt.
