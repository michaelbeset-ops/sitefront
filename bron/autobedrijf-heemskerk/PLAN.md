# Autobedrijf Heemskerk, ontwerpvoorstel (demomodus)

Oude site: https://www.autobedrijfheemskerk.nl (ouderwetse opmaak, tekst grotendeels als beeld, niet te lezen of aan te klikken op een telefoon, geen belknop)
Bronnen: eigen site (Home, Schadeherstel, Onderhoud, Contact; overgetikt 28-09-2026), KvK 28031110, Google 4,9 (23 reviews)

## Richting
Knipoog naar hun donkerblauw + limoengroen, maar volwassen: diep marine #0c1a30 / #16305a, gedempt limoen #c4d46e alleen op donker.
Kumbh Sans (display) met Overpass (body). Hero met monteur rechts, tekst links; mobiel egale overlay.
Secties: diensten als genummerde lijst, kleine vs grote beurt naast elkaar, donker schadeblok met Wilco, tijdlijn 1969 > 1987 > nu, contact.

## Zelf gekozen
- Geen 06, dus geen WhatsApp-knop: hoofdactie bellen (vast nummer) en mailen.
- "Sinds kort" bij Wilco weggelaten (tekst is oud); wel "op hetzelfde adres" en het schadenummer van Wilco.
- Zondag niet genoemd bij openingstijden (staat niet in de bron).
- Sfeerfoto's van Unsplash (license=free), bronnen in src/assets/BRONNEN.txt. Bij oplevering eigen foto's.
- Geen reviewcitaten (pas na akkoord).

## Verbeterronde 28-09-2026
- Eigen pand (pand.jpg, 1000x387) in de hero: mobiel bovenaan, desktop als strook op de overgang donker/licht, max 1000px.
- Wordmark als SVG naar hun logo: groene pijl-H die de H van EEMSKERK vormt, schuine letters in marine (component Logo.astro), ook in favicon en footer.
- Wow: keuzehulp "Kleine of grote beurt?" (checkboxes, vanilla JS, aria-live). Grote beurt als een groot-item wordt aangetikt (APK, airco, hele auto, remblokken/dynamo), anders kleine. Aangetikte onderdelen lichten op in de kaarten. Zonder JS: gewoon beide beurten.
- Eigen werkplaatsfoto's op eigen formaat (283px): strook "Uit onze werkplaats", twee afgeplakte-auto-foto's bij schade, balie bij "Over ons".
- Stock weg: monteur (hero), wielmoer, folie-spuiten. Oldtimer-sfeerfoto blijft bij lakschade/restauratie.
- og.jpg opnieuw gemaakt met het pand.
