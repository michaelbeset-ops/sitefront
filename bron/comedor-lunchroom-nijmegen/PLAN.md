# Comedor Lunchroom, Nijmegen (+ Arnhem): ontwerpvoorstel (demomodus, 05-10-2026)

Concept: Comedor is een Marokkaans getinte lunchroom met een zwarte menukaart vol zware cursieve koppen, een donkergroene pui
met een rode zonneluifel en het witte "Comedor"-script, en een glazen vitrine waarin alles vers klaarligt. De site voelt als die
kaart en die pui: diep zwart-groen en wit, één kleur (luifelrood), Lilita One als dikke menuletter. Eigen detail: de rode luifel
met witte rand als band onder de header en tussen secties, plus de grote "C"-krul uit hun menukaart achter de kaart.

- Letter: Lilita One (koppen), Albert Sans (tekst 17px/1.6). Toon: "je", kort, zoals op hun kaart.
- Kleur: wit #f6f5f2, inkt #141412, pui #17221f (donkere secties), luifelrood #c42f27 (wit erop 5,6:1), licht rood op donker #ff8a7a.
- Opbouw: voorstelbalk, header met vestigingschakelaar (Nijmegen/Arnhem: alle bel/WhatsApp/route-links wisselen mee),
  hero (eigen foto broodje hete kip + kaart-fragment met echte prijzen), vitrine-band, volledige menukaart met tabbladen
  (echte kaart feb 2026, prijzen), Amin en Gokhan (Over ons, eigen site), twee zaken (wow: vestigingkiezer met live open/dicht,
  bellen, WhatsApp, route), reviews (letterlijk Google), slotband, footer.
- Vermeden: kicker boven elke sectie, stat-rij in hero, polaroids/stickers, open/dicht-kaart in hero, rijen icoonkaarten,
  wizard, crème+bruin/goud, grote reviewscore (1x klein in reviews).

## Wat er nu mis is (bewijs in bron/)
- Homepage is 1.035px (desktop) / 964px (mobiel) hoog: alleen logo, "Lunchroom· Koffie· Broodjes", "2024 ... All Rights Reserved"
  en een WordPress-"Subscribe"-knop (bron/site/home.txt, home-d.png, home-m.png).
- Menupagina = 2 losse JPG's van 3508x2480 (1,5 MB) zonder tekst; op 390px breed worden ze 328x231px, de prijzen zijn onleesbaar
  en Google kan de kaart niet lezen (bron/site/menu-m.png, tools/chk.mjs).
- Er staat nog een demobericht van het WordPress-thema online: "Q&A with Andrew Holsen, hand maker" over sieraden uit Californië
  (comedorlunchroom.nl/2023/03/11/qa-with-andrew-holsen-hand-maker/, bron/site/pages.txt).
- Vestigingenpagina: tijden in het Engels ("Mon 10:00 am – 10:00 pm"), telefoonnummers niet klikbaar, geen routeknop
  (bron/site/vestigingen-m.png; 0 tel-links).
- "Over ons" noemt alleen Arnhem (Johan de Wittlaan 271); Nijmegen komt niet voor (bron/site/pages.txt).
- Google-profiel Nijmegen heeft geen menu en geen prijsindicatie, Arnhem wel (bron/google/nij-overzicht.txt vs arn-overzicht.txt).
- Facebook heet "Comedor Lunchroom | Arnhem" en staat op "Nog niet beoordeeld (0 beoordelingen)" (bron/fb/fb.txt).
