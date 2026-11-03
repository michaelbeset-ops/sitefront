# Foto's voor de Deelen-demo

Alle foto's zijn SFEERBEELDEN (Unsplash of Pexels, gratis licentie). Ze worden
nergens gepresenteerd als eigen werk van Deelen: de alt-teksten beginnen met
"Sfeerbeeld:" en in de footer staat "Foto's op deze site zijn sfeerbeelden,
geen eigen projecten." Kies foto's zonder tekst, logo's, merken of
herkenbare gezichten. Noteer per foto de bron (fotograaf + link) in fotos.json.

Werkwijze: zet per bestand een directe afbeeldings-URL (of een lokaal `pad`) in
`public/img/fotos.json` en draai `node scripts/fotos-ophalen.mjs`. Het script
snijdt bij op het midden (sharp, attention) en maakt beide breedtes.
`node scripts/fotos-ophalen.mjs --placeholder` maakt weer effen vlakken.

| Bestanden | Maat (grootste / kleine) | Plek | Zoekopdracht (Unsplash/Pexels) |
|---|---|---|---|
| hero.jpg, hero-1200.jpg | 2400x1600 / 1200x800, liggend 3:2 | Hero, schermvullend, tekst links eroverheen | "herringbone oak floor living room" of "visgraat parket woonkamer". Warm daglicht, rustig interieur, linkerhelft niet te druk (daar staat de tekst). |
| vloer-1.jpg, vloer-1-1000.jpg | 2000x860 / 1000x430, panorama | Onder Vloeren | "wide plank oak floor interior" of "natural wood floor minimal living room". Lange vloerdelen, geen meubelmerk in beeld. |
| zonwering-1.jpg, zonwering-1-1000.jpg | 2000x860 / 1000x430, panorama | Zonwering (donkere band) | "retractable awning terrace" of "patio awning house facade". Knikarmscherm of markies boven terras, Nederlands ogende gevel liefst; geen merklogo op het doek. |
| renovatie-1.jpg, renovatie-1-600.jpg | 1200x900 / 600x450, 4:3 | Renovatie, links | "sanded oak floor close up" of "wood floor grain detail". Close-up van hout of geschuurde vloer. |
| renovatie-2.jpg, renovatie-2-600.jpg | 1200x900 / 600x450, 4:3 | Renovatie, rechts | "oak staircase interior" of "wooden stairs modern home". Houten trap. |
| showroom.jpg, showroom-700.jpg | 1400x1050 / 700x525, 4:3 | Showroom | "wood flooring samples" of "parquet samples swatches". NIET een willekeurige winkel/showroom (dan lijkt het hun showroom); stalen of planken als sfeerbeeld. |

## Voor/na renovatie

Een voor/na-paar mag ALLEEN met eigen foto's van Deelen (zelfde vloer, voor en
na). Zolang die er niet zijn, staat het renovatieblok als twee sfeerbeelden
zonder voor/na-claim (renovatie-1 en renovatie-2 hierboven). Levert Deelen eigen
foto's: zet ze via `pad` in fotos.json op renovatie-1 (voor) en renovatie-2
(na) en voeg in src/pages/index.astro de labels "Voor" en "Na" toe; pas dan ook
de alt-teksten en de footerregel aan.

Hetzelfde geldt voor showroom.jpg: een echte foto van de showroom aan de
Gijbelandsedijk gaat altijd voor.
