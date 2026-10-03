# Rijschool Promoot, Ridderkerk: ontwerpvoorstel (demomodus, BRIEF-MICHAEL / batch 24, 03-10-2026)

Oude site rijschoolpromoot.nl (WordPress): "De NR.1# Opleider in SCOOTERRIJBEWIJS!", gele SUPERSTUNT-knoppen, pastelblokken,
tientallen SEO-pagina's per plaats, stockfoto's met prijsstickers. Aanbod en prijzen zijn wel compleet en actueel (april/juni 2026).

- Letter: Outfit 800 (koppen, self-hosted), Inter (tekst, 17px/1.6).
- Kleur uit het PROMOOT-logo: geel #ffd43b als merkkleur (knoppen met zwarte tekst), bijna-zwart #111317, gebroken wit #f6f5f0,
  zand #eceae2; blauw #08639a alleen als klein accent (de O in het woordmerk, het L-bord, eyebrows). Strak: radius 8-16px, geen pillen.
  Anders dan rijschool-herman (Archivo, blauw) en wk-rijopleidingen (Sora).
- Eigen details: woordmerk als hun logo (geel vlak, blauwe O), het blauwe L-bord als merkteken, gele onderbroken wegmarkering als
  scheiding (werkwijze-tijdlijn, regio, footer). Hero-foto = hun eigen lesfoto met de oranje PROMOOT-hesjes.
- Opbouw: topbar (3 vinkjes) + sticky header met WhatsApp, hero op volle hoogte (foto rechts, mobiel als achtergrond), cijferrij,
  5 opleidingskaarten + proeflestegel, scooter-dagcursus in 4 stappen (donker), tarieven met tabbladen per opleiding (wow:
  hun echte pakketten met van/voor-prijs, elke knop opent een ingevulde WhatsApp-aanmelding; losse tarieven + voorwaarden),
  proefles (geel), over Promoot (donker, eigen stalling), 6 letterlijke Google-reviews, openingstijden live + regio + examenlocaties,
  contact, slotbalk, donkere footer 4 kolommen, mobiele onderbalk Bellen | WhatsApp.

## Bronnen
- bron/site/alles.txt: alle pagina's via wp-json (pages + posts), bron/site/media.json + bron/media/.
- bron/google-reviews.txt: Google-zoekpaneel reviews (60 bekeken, alleen positieve gebruikt), score, onderwerpen, openingstijden.
- bron/google/: 11 foto's van het Google-profiel (meeste met herkenbare leerlingen, daarom 3 gebruikt). src/assets/BRONNEN.txt.
- Kentekens en een daklichtbak van een andere rijschool op motor-les.jpg vervaagd (tools/blur.mjs).

## Keuzes bij tegenstrijdige bronnen
- Proefles auto/motor: tarievenpagina (€ 100) i.p.v. tekst op de auto-/motorpagina (€ 95).
- Motor AVD-dagcursus: pakketkaart (€ 750) i.p.v. tabel (€ 725).
- Auto: alleen de actiepakketkaarten (30/40/50 lessen), niet de hogere tabelprijzen.
