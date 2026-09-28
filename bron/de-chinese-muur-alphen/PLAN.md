# De Chinese Muur (Alphen aan den Rijn), ontwerpvoorstel (demomodus)

Oude site: https://dechinesemuuralphen.nl (WordPress-thema van Networcks, losse pagina's per menucategorie, verouderd kerstmenu 2023 nog online, bestellen zit verstopt achter "Klik hier")
Bronnen: eigen site (home, restaurant, afhaal menu, catering, contact), Google 4,0 uit 5 (305 reviews), Foodticket-bestelpagina, Facebook.

## Richting
Donkere bordeaux (#3d0d1a) als hoofdvlak, gebroken wit en okergoud (#e3a846, alleen op donker). Vollkorn (display) met Cabin (body).
Bewust anders dan Restaurant Lotus (lakrood + jade op rijstpapier) en Yue Lang (sumi-zwart + washi).
Mobiel eerst: hoofdacties "Online bestellen" (Foodticket) en bellen 0172 475 787, ook in de header.
Secties: hero (foto + bordeaux vlak), afhalen (voordeelstaffel als trap, hapmenu, bezorgen, Boskoop-melding, rijsttafels), restaurant (keuzemenu, lopend buffet), catering (menu A/B/C), contact (tijden, adres, parkeren/OV).

## Zelf gekozen
- Geen WhatsApp-knop: het 06-nummer staat alleen als tweede nummer bij contact.
- Kerstmenu 2023 en de volledige lijst menucategorieën weggelaten; alleen de rijsttafelnamen als lijst.
- Boskoop-waarschuwing vriendelijk verwoord als "controleer even het nummer".
- Sfeerfoto's van Unsplash (license=free), bronnen in src/assets/BRONNEN.txt. Bij oplevering eigen foto's.
- Geen reviewcitaten (pas na akkoord).

## Verbeterronde 28-09-2026
- Eigen materiaal: interieur.jpg (hun restaurantzaal) in de restaurant-sectie, max 640 px breed. Logo nagemaakt als wordmark: "De Chinese Muur" met 長城酒樓 als tekst (systeem-CJK-fontstack) in header, hero (verticaal, desktop) en footer.
- Wow: doorzoekbaar afhaalmenu met voordeelmeter (src/components/AfhaalMenu.astro, data in src/data/menu.ts): 79 gerechten uit 7 categorieën, zoeken, +/-, lopend totaal, staffel 35/65/100, "nog meer dan € x", lijstje, mobiele balk. Zonder JS: gewone menulijst + staffel.
- Compacter: staffel, hapmenu en rijsttafels zitten nu in het menu; catering toont wat in elk menu zit één keer; bezorgen verhuisd naar contact; Boskoop-melding klein bij de belknop.
- Stockfoto's sate/nasi/zoetzuur/bami weg; alleen de hero-foto blijft.
- Weggelaten: maandmenu, kerstmenu, Tjiun Ka Fuk en Szechuan/Wen Zhou/Seafood-rijsttafels (pagina's bestaan niet meer).
