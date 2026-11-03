# Foto's voor de Bos-demo

Tijdelijk staan hier effen vlakken (gemaakt met `node scripts/fotos-ophalen.mjs --placeholder`).
Vervangen:

1. Zoek per bestand een foto op Unsplash of Pexels met de zoekopdracht hieronder.
2. Zet de directe download-URL (of een lokaal pad) in `public/img/fotos.json`.
3. Draai `node scripts/fotos-ophalen.mjs`. Het script snijdt bij naar de juiste maat
   en schrijft per foto een groot en een klein bestand, als .jpg en .webp.
4. `PUBLIC_VOORSTEL=1 npm run build`.

Regels: sfeerbeelden, geen tekst, logo's of herkenbare merken in beeld, geen herkenbare
gezichten. Het zijn GEEN projecten van Bos: nooit bijschriften als "ons project" of
"opgeleverd door Bos". De site noemt ze "sfeerbeelden". Zodra Theo Bos eigen
projectfoto's levert, gaan die voor.

| Bestand | Maat (groot + klein) | Plek | Zoekopdracht |
|---|---|---|---|
| hero.jpg / hero-1200.jpg | 2400x1500 + 1200x750, liggend | Schermvullende hero, tekst linksonder | `italian minimalist kitchen warm light` of `modern kitchen island stone countertop` (rustige linkerhelft/onderkant voor de tekst) |
| keuken-1.jpg / keuken-1-800.jpg | 1600x2000 + 800x1000, staand 4:5 | Groot beeld in sfeerblok | `luxury kitchen interior walnut cabinets` of `minimal kitchen marble backsplash` |
| badkamer-1.jpg / badkamer-1-600.jpg | 1200x1500 + 600x750, staand 4:5 | Sfeerblok | `minimalist bathroom freestanding bathtub` |
| detail-1.jpg / detail-1-600.jpg | 1200x1500 + 600x750, staand 4:5 | Sfeerblok, materiaal | `microcement wall texture` of `beton cire bathroom detail` |
| plafond-1.jpg / plafond-1-800.jpg | 1600x900 + 800x450, liggend 16:9 | Sfeerblok, breed | `recessed ceiling lighting interior` of `led cove lighting ceiling living room` |
| badkamer-2.jpg / badkamer-2-600.jpg | 1200x1500 + 600x750, staand 4:5 | Naast de aanbodlijst | `concrete bathroom vanity minimal` |

Maten staan centraal in `src/fotos.json`; pas die aan als een plek een andere verhouding krijgt.
Check bij Unsplash/Pexels de licentie (beide gratis, naamsvermelding niet verplicht maar netjes).
