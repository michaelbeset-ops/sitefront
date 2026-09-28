# De Schadegarage (Schade Garage Houten), ontwerpvoorstel (demomodus)

Oude site: http://deschadegaragehouten.nl (een pagina: lijstje diensten, "Gratis leenauto", openingstijden, adres; verder geen uitleg, geen knoppen om te bellen)
Bronnen: eigen site (enige pagina), Google-profiel "De Schadegarage" 4,6 uit 5 (23 reviews), 28-09-2026

## Richting
Koel werkplaatsgrijs (#f4f5f6 / #e2e5e8) met diep oranjerood #b3300c als signaalkleur, ink #16191d.
Spline Sans (display) met Radio Canada (body). Hero tekst naast werkplaatsfoto, genummerde dienstenlijst,
donker leenauto-vlak als blikvanger, tijden+route op staalgrijs, oranjerood contactvlak met groot nummer.

## Zelf gekozen
- Geen 06, dus geen WhatsApp-knop: hoofdactie bellen (030 634 14 60), daarnaast mailen.
- Diensten precies de vier van hun site, alleen neutraal omschreven wat de dienst is.
- Slogan "Voor service op maat" zonder uitroepteken.
- Sfeerfoto's van Unsplash (license=free), bronnen in src/assets/BRONNEN.txt. Bij oplevering eigen foto's.
- Geen reviewcitaten (pas na akkoord).

## Verbeterronde 28-09-2026
- Hero: hun eigen pand (pand.jpg, van de oude site) over de volle breedte onder een korte h1 "Schadeherstel in Houten".
  Label "Gratis leenauto" op de foto linkt naar de leenauto-sectie.
- Logo nagemaakt als SVG (components/Logo.astro): boogtekst via textPath, "HOUTEN" eronder; in header (rood) en contactvlak (wit).
- Accent van oranjerood naar het rood van hun logo: #c8101c (wit erop 5,9:1), op donker #ff8a80.
- Wow: "Schade doorgeven" in drie stappen (components/SchadeDoorgeven.astro): keuze bumper/deuk/lak/anders,
  kenteken in een geel NL-kentekenveld + foto met voorbeeldweergave, naam + telefoon, overzicht. Zonder JS een gewoon
  formulier; bij voorstel geen verzending maar de vaste melding met bellen/mailen.
- Leenauto nu een donkere balk met grote letters (stockfoto met ander merk erop weggehaald).
- auto.jpg (262 px) als kleine inzet bij route, op ware grootte, alt zonder leenauto-claim.
- Stockfoto's hero.jpg, poetsen.jpg (merknamen zichtbaar) en wiel.jpg weg; alleen schade.jpg bij de diensten.
- og.jpg opnieuw gemaakt met het eigen pand. Privacy: alinea over het schadeformulier toegevoegd.
