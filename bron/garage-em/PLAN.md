# Garage E&M, ontwerpvoorstel (demomodus)

Oude site: http://www.garage-em.nl (verouderd CMS, "Welkom op de website van", geen diensten, occasions-pagina met 0 voertuigen, routebeschrijving als losse tekstregels)
Bronnen: eigen site (home, informatie, contact, online offerte, occasions), Google 4,8 uit 5 (61 reviews, 28-09-2026)

## Richting (verbeterronde 28-09-2026)
Kleuren van hun eigen logo: grafiet #23282a/#33393a, logogrijs #4f5657, geel #f7bb00. Pathway Extreme 800 met Reddit Sans.
Hero: hun logo nagemaakt als SVG (Logo.astro) groot links, rechts het openingsbord met live "nu open" en Google-score.
Header wit met het compacte E&M-beeldmerk. Diensten: de drie van hun logo (in- en verkoop, APK, reparatie), groot genummerd,
met hun eigen werkplaatsfoto als ingelijst inzetje (296 px, niet vergroot). Offerte naar de bestaande module (garage-em.nl/kostdat).
Route als routekiezer ("Waar komt u vandaan?": Maurik/Zoelen of A15/Tiel), met hun pandfoto als "zo herkent u ons". Contact op grafiet.

## Zelf gekozen
- Geen 06, dus geen WhatsApp-knop: bellen is de hoofdactie, daarnaast mailen en online offerte.
- Diensten alleen de drie namen uit het logo, zonder verdere uitleg.
- Geen occasions-sectie (0 voertuigen). Geen contactformulier.
- Stockfoto's hero/wiel/gereedschap weggehaald (andere merken zichtbaar, generiek); alleen banden.jpg (Unsplash) blijft.
- Routekiezer: zonder JS staan beide routes onder elkaar.
- Geen reviewcitaten (pas na akkoord).

## Ronde 3 (28-09-2026): naar Heemskerk-niveau
- Hero: sfeer.jpg (motorruimte onder werklicht, Unsplash) groot rechts achter een grafiet-verloop; hun E&M-logo als kop;
  rechts een glazen kaart met Google 4,8 / 61 reviews, "nu open" en de tijden.
- Eigen pandfoto valt als ingelijste kaart over de onderrand van de hero, met drie snelkoppelingen (01-03) naar de diensten.
- In- en verkoop: verkoop.jpg groot (bijgesneden, merkbord weg, kenteken en raamsticker vervaagd).
- APK en reparatie op grafiet: twee grote beeldkaarten (gereedschap.jpg, werk.jpg) met hun werkplaatsfoto als klein inzetje.
- Nieuw: "Wat klanten noemen" (samenvatting Google-reviews, geen citaten). Offerte als stevige grafiet kaart.
- Route: routekiezer blijft, rechts een adreskaart met tweede nu-open-indicatie en Google Maps.
- banden.jpg eruit. Radius- en shadow-tokens (rounded-xl, shadow-sm) toegevoegd aan global.css.
