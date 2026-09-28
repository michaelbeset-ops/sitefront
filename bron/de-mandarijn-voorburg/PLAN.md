# De Mandarijn (Voorburg), ontwerpvoorstel (demomodus)

Oude site: https://demandarijn.com (WordPress-thema; "tapasmenu" en all-you-can-eat-prijzen staan nog in het menu terwijl
die kaart niet meer bestaat, openingstijden en afhaalkaart verspreid, menukaart alleen als PDF)
Bronnen: demandarijn.com (home, de mandarijn, reserveren, afhalen, prijzen), Google 4,0 uit 5 (209 reviews, 28-09-2026)

## Richting
Donker jade #14332b met mandarijnoranje #f28a2e (alleen op jade) en diep oranje #a8480f op gebroken wit #f6f2ea.
Brygada 1918 (serif, cursief voor hun eigen zin over de kaart) met Asap. Hero: tekst op papier, gerecht in een boog
met een mandarijncirkel erachter. Bewust anders dan demos/de-mandarijn (Zwijndrecht): geen fotohero met overlay, serif.

## Zelf gekozen
- Geen WhatsApp (vast 070-nummer); hoofdacties: bellen om te reserveren en de afhaalkaart (PDF).
- Tapas/all you can eat, vacatures en "het beste restaurant van Voorburg" weggelaten.
- Sfeerfoto's van Unsplash (license=free) voor wok/indisch, bronnen in src/assets/BRONNEN.txt.
- Geen reviewcitaten (pas na akkoord).

## Verbeterronde 28-09-2026
- Hero: hun eigen zaal (interieur.jpg, lampionnen en bloemstuk) met hun logo als beeldmerk; logo.png ook in de header (40px).
  Stockfoto's hero.jpg en groente.jpg verwijderd.
- Kaartsectie: echte kaart uit de afhaal-PDF (dec 2025), data in src/data/menu.ts. Doorzoekbare kaart (Kaart.astro):
  tabs "Specialiteiten van het huis" / "Meest populair", zoekveld, schakelaar "Glutenvrij-info" met reden per gerecht uit
  hun glutenvrij-lijst en de algemene tip. Zonder JS staan beide lijsten gewoon onder elkaar.
- Lege plek op desktop opgelost: links een sticky kolom met rijst/toeslagen, link naar de volledige PDF en de Indische foto.

## Ronde 3 (28-09-2026): naar het niveau van Heemskerk
- Hero opnieuw: diep jade vlak met lampionnen.jpg (stock) rechts, verloop naar jade; grote serif-kop, logo als beeldmerk,
  twee knoppen en een donkere bewijskaart (Google 4,0 / 209, 16:00 tot 21:00 behalve dinsdag, adres).
- Eigen zaal (interieur.jpg) groot over de rand van de hero, met label en logo als zegel. Ernaast hun eigen zin over de kaart,
  daaronder drie genummerde troeven (à la carte, afhaalruimte, gratis parkeren).
- Kaart: uitgelichte "Specialiteit van het huis" nr. 13, Geroosterde eend (eend.jpg, € 22,00) met knop die de zoekkaart
  op "eend" zet. Doorzoekbare kaart met glutenvrij-schakelaar ongewijzigd.
- Afhalen: kok.jpg (bijgesneden, zonder schort met merknaam) en rijst-vlees.jpg (bijgesneden, zonder placemat-tekst)
  groot en overlappend. wok.jpg verwijderd.
- Nieuw: "Wat klanten noemen" (samenvatting Google-reviews, geen citaten) naast grote 4,0.
- Radius/shadow-tokens toegevoegd (rounded-xl, shadow-sm), .kicker-eyebrows, knoppen met hover-lift.
