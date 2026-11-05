# Broncode demo's

Astro-broncode van demo's die nog werk nodig hebben. Bouwen met `npm ci && PUBLIC_VOORSTEL=1 npm run build`, dan `dist/` naar de map `<slug>/` in de root kopiëren.

Openstaand (2026-11-03): bos-keuken-en-baddesign en deelen-parket-en-zonwering hebben een schermvullende foto-hero en foto-plekken, maar nog effen placeholders. Zodra foto's te downloaden zijn: vul `public/img/fotos.json` (of `src/fotos.json`) met URL's volgens `public/img/FOTOS.md`, draai `node scripts/fotos-ophalen.mjs`, bouw opnieuw, haal `FOTOS.md` en `fotos.json` uit `dist/img/`, en vervang de live map.

Openstaand (2026-11-05, scan Dordtse Kil): auto-apk-service-dordt (10/10) en autobedrijf-66 (9/10) zijn af op de foto's na. De werkomgeving kon geen foto's downloaden, dus ze staan nog niet live. Zelfde werkwijze als hierboven: `public/img/fotos.json` vullen volgens `public/img/FOTOS.md`, `node scripts/fotos-ophalen.mjs`, `PUBLIC_VOORSTEL=1 npm run build`, FOTOS.md en fotos.json uit `dist/img/` halen, `dist/` naar `<slug>/` in de root.
