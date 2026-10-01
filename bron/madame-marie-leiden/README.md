# madame-marie-leiden-v2

Ontwerpvoorstel v2 (Astro 7 + Tailwind 4) voor Madame Marie, koffiebar in de Kloksteeg in Leiden.
Herontwerp volgens BRIEF-ANTI-AI: kalkwitte muur, Delfts blauwe tegelplint, één inkt, IM Fell English + Albert Sans.
Base blijft /sitefront/madame-marie-leiden, zodat deze map de oude versie kan vervangen.

    npm install
    node tools/tegels.mjs              # tekent public/tegels.svg, favicon.svg en src/data/tegel.ts opnieuw
    PUBLIC_VOORSTEL=1 npx astro build  # met voorstelbalk en noindex
    npx astro preview --port 4520

Feiten: src/data/site.ts en src/scripts/open.ts (openingstijden). Foto's: src/assets/BRONNEN.txt.
