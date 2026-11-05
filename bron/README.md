# Broncode demo's

Astro-broncode van demo's die nog werk nodig hebben. Bouwen met `npm ci && PUBLIC_VOORSTEL=1 npm run build`, dan `dist/` naar de map `<slug>/` in de root kopiëren.

Openstaand (2026-11-03): bos-keuken-en-baddesign en deelen-parket-en-zonwering hebben een schermvullende foto-hero en foto-plekken, maar nog effen placeholders. Zodra foto's te downloaden zijn: vul `public/img/fotos.json` (of `src/fotos.json`) met URL's volgens `public/img/FOTOS.md`, draai `node scripts/fotos-ophalen.mjs`, bouw opnieuw, haal `FOTOS.md` en `fotos.json` uit `dist/img/`, en vervang de live map.

Scan Dordtse Kil (2026-11-05): auto-apk-service-dordt, autobedrijf-66, zoutewelle-import, luxe-banden-dordrecht, natech-dordrecht, riemar-montage en wm-bouw-en-onderhoud staan live met sfeerfoto's van Unsplash (logo's van derden weggewerkt; bij de laatste vijf staan de bewerkte bronfoto's in foto-bron/). Eigen foto's van de klant gaan voor zodra ze die aanleveren.
