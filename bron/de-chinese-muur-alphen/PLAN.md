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

## Ronde 3 (28-09-2026): naar het niveau van Heemskerk
- Hero opnieuw: diep wijnrood vlak met wok.jpg (wok boven hoge vlammen) die rechts via een verloop in het vlak overloopt; grotere kop (text-5xl), 長城酒樓 verticaal in oker, drie bewijzen (Google 4,0, elke dag vanaf 16:00, gratis kroepoek vanaf € 35). Eigen interieurfoto als papieren kaart (max 400 px) over de onderrand.
- Nieuw blok "Wat gasten noemen": samenvatting van de Google-reviews (zes punten, geen citaten/namen).
- Nieuw beeldblok "Afhalen en bezorgen" (bakje.jpg groot tot de rand) met staffel en bezorgvoorwaarden; bezorgen uit contact gehaald.
- Restaurant: spread.jpg groot tot de linkerrand, prijzen als kaarten (shadow-sm, rounded-xl). Catering: afhalen.jpg breed naast de tekst, menu's A/B/C eronder.
- Contact in vier kaarten. og.jpg opnieuw gemaakt met wok.jpg. hero.jpg vervangen (zelfde Unsplash-foto heet nu spread.jpg).
