# sportschool-kwikkers-ridderkerk
Demo (Astro 7 + Tailwind 4) voor Sportschool Kwikkers, Scheldeplein 4, 2987 EL Ridderkerk (Bolnes).
- Voorstelmodus bouwen: `PUBLIC_VOORSTEL=1 npx astro build`, bekijken: `npx astro preview --port 4674`
- Screenshots: `node tools/shots.mjs <prefix>`; og-afbeelding: `node tools/og.mjs`; live-markering testen: `node tools/vandaag.mjs`

## Bronnen (map bron/)
- sportschoolkwikkers.nl geeft 504; tekst uit web.archive.org (snapshots jan-jun 2026): home, aanbod, lestijden (6-6-2026),
  team, contact, over ons, nieuws, media. Google-profiel (google.txt, letterlijke reviews met naam in google-reviews.txt), Facebook (social.txt), foto-URL's (google-fotos.txt).

## Ontbreekt / navragen (staat NIET zichtbaar op de site)
- Telefoon: Google 06 24 38 36 53 (gebruikt) vs. oude site 06-41820040. Welke is actueel, en is het ook WhatsApp?
- E-mail (oude site: martijn@thanigul.nl, niet gebruikt), KvK-nummer, bewaartermijnen (privacypagina heeft markeringen).
- Prijzen/contributie, proefles-regeling, zomerrooster, examendata: niet gepubliceerd, dus weggelaten.
- Teamteksten op de oude site zijn oud (leeftijden, donderdaglessen): alleen namen en rollen gebruikt; teamfoto's ontbreken.
- Betere foto's (zaal, groep, logo in hoge resolutie) en toestemming voor beeld van leerlingen.

## v2 (02-10-2026, BRIEF-MICHAEL)
- Rijkere opbouw naar ZBN/Slob: topbar, pill-header met hun logo, hero vol scherm, cijferrij, aanbodkaarten, banden, kickboksen,
  stappen, lestijden live, sensei, team, Google-reviews, contactblok, rode slotbalk, footer, mobiele onderbalk.
- Teamfoto's en -teksten komen van de oude site (circa 2020): navragen of Wesley, Rinaigel, Marvin, Varma en Gio nog lesgeven.
