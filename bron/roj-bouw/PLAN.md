# Roj Bouw, ontwerpvoorstel (demomodus)

Geen website: Google toont "Website toevoegen". Alle feiten komen uit het Google-bedrijfsprofiel (content/b16/roj.txt,
30-09-2026): 06 30511240, Zwijndrecht (geen huisnummer), 4,8 uit 45 reviews, eigenaar reageert op elke review,
"gerund door een vrouwelijke ondernemer", "LGBTQ+ vriendelijk", 07:00 tot 17:00 (dagen niet zichtbaar).
Werkzaamheden en "Wat klanten noemen" samengevat uit de reviews. Slogan "Samen bouwen aan uw toekomst" van het logo op
hun werkshirt (op het shirt staat een tikfout, hier correct gespeld).
Eigen foto's: 6 van de 8 Google-foto's (google-3 met auto's/straat en de rommelige google-6 niet gebruikt).
Stock: 4 Unsplash-foto's. Alles in src/assets/BRONNEN.txt.

## Richting
Licht, strak en verzorgd: kalkwit papier (#fbf9f5) en zacht zand (#f3eee5), het logo-goud (#c9a35c, alleen op donker of
decoratief), brons (#7a5820) als goud op licht, antraciet (#292520) voor knoppen, offertehulp, over-blok en footer.
Fraunces (opsz, met cursief accent "netjes") voor koppen, Figtree voor tekst en het woordmerk. Logo nagemaakt als SVG:
gouden huis met een huis erin, "ROJ" zwaar, "BOUW" licht gespatieerd.
Hero: tekst links, rechts de eigen foto van de stukadoor in het ROJ BOUW-shirt, groot en over de rand in de volgende
sectie, met een logokaartje. Mobiel: de foto direct onder de kop.

## Wow-functie: offertehulp "Wat wilt u laten doen?"
Chips (echte checkboxen) voor ruimte(s) en soort werk, optioneel m², aantal kamers en een opmerking. Het bericht bouwt
zich live op (aria-live) en de knop opent WhatsApp met die tekst. Geen prijzen. Zonder JS: standaardbericht.

## Zelf gekozen
- Geen e-mail, KvK of adres bekend: KvK als AANLEVEREN in footer en privacy; e-mail weggelaten.
- Tijden als "07:00 tot 17:00" met AANLEVEREN voor de dagen.
- Contactformulier verstuurt in voorstelmodus niets.
