# Brillen bij u thuis (opticien aan huis, Tilburg): ontwerpvoorstel (11-10-2026)

## Concept
Hun eigen foto's tonen het gereedschap van een opticien aan huis: de letterkaart, de pasbril en de kist met rode en zwarte pasglazen.
De site is die letterkaart: wit papier, het diepe paarsblauw en de rode U van hun logo, en regels die steeds kleiner worden met
maatcijfers ernaast. Doelgroep vaak ouderen en mantelzorgers: Atkinson Hyperlegible Next (gemaakt voor slechtzienden), body 19px,
hoog contrast, knoppen van 60px, bellen altijd eerst, WhatsApp tweede.

## Secties
hero (sfeerfoto oudere dame thuis, Bel + WhatsApp, Google 5,0) > letterkaart + wie we zijn + soorten brillen + partners >
3 fotokaarten (oogmeting, bril op maat, thuis afgeleverd) > over ons (donker, eigen pasbril-foto, gediplomeerd, nascholing,
zorgverzekering) > werkwijze 01-04 + buiten openingstijden > reviewcitaat (rood) > afspraak-aan-huis (wow, WhatsApp) >
6 reviewkaarten + Google-badge > contact + tijdentabel (vandaag, nu bereikbaar) > slotbalk > footer 4 kolommen.

## Bronnen
brillenbijuthuis.nl (5 pagina's + 2 privacy-pdf's) in bron/site; folder en profiel op Google in bron/google (5,0 uit 40, nieuwste review
een week oud). Het adres is een woonadres: alleen Tilburg tonen. Naam opticien staat alleen in reviews: niet getoond.

## Ronde 2 (12-10-2026), op verzoek van Michael
- Tekst: "thuis afgeleverd" en "nadien kosteloos bijstellen" overal eruit (dienstkaart, werkwijze, letterkaart, topbalk, footer, formulier).
- 13-10-2026 (Paul): ook "afspraken buiten openingstijden" en "dan betaalt u de bril die u aan wilt schaffen" eruit.
- 13-10-2026: klaar voor livegang. Ontwerpvoorstel-balk, bronvermelding, fotolabels en "die krijgt u ook bij ons" weg (misleidend: de verzekeraar betaalt, niet wij). Demo-link blijft wel noindex.
- Zorgverzekering prominent: eigen sectie #zorgverzekering (tekst letterlijk van hun pagina Diensten), rode dienstkaart, menu-item,
  topbalk, hero, werkwijze stap 4 en een FAQ-vraag.
- Mobiel: diensten, werkwijze en reviews zijn veegrijen (scroll-snap) met teller en pijlknoppen; vanaf 768px gewoon grid.
  Afspraakformulier compacter (keuzes twee naast elkaar vanaf 375px).
- SEO/AI: twee builds. `npm run build` = definitief voor brillenbijuthuis.nl: canonical, robots index, JSON-LD (Optician + WebSite +
  FAQPage), robots.txt die ook AI-crawlers toelaat, llms.txt, sitemap. `npm run build:voorstel` = demo: noindex, Disallow, geen JSON-LD.
- Beveiliging: CSP als meta-tag met hashes (Astro security.csp), geen style-attributen, referrer-policy, rel="noopener noreferrer"
  op externe links, .well-known/security.txt, 404-pagina met noindex, .nojekyll.

## Eigen repo en deploy (14-10-2026)
- `.github/workflows/deploy.yml` bouwt en publiceert bij elke push naar main (1 à 2 minuten) op GitHub Pages.
- Nu preview: https://michaelbeset-ops.github.io/brillen-bij-u-thuis/ (noindex). Livegang: PREVIEW op 'false' in de workflow, DNS zetten, custom domain in Settings > Pages.
- `bron/` staat niet meer in de repo (adres, opgehaalde gegevens); lokaal bewaren. Let op: in de git-geschiedenis staat het nog.

## Verbeterplan uitgevoerd (14-10-2026)
- Hero overal 4A: Paul die meet met de pasbril, 5,0 op Google, partners. Stockfoto van de oma niet meer gebruikt.
- Van 11 naar 8 blokken: hero, vertrouwensstrook, diensten (zorgverzekering in de rode kaart), Maak kennis (Paul + 2 reviews over hem),
  werkwijze (compact), reviews, vragen, afspraak + contact samen. Weg: letterkaart, los zorgblok, rode citaatbalk, slotbalk.
- Ritme: sectiekoppen max ~54px, ruimte per blok 56/80/96px. Lengte desktop 11.025 -> 7.058px, mobiel 13.700 -> 9.494px.
- Naam Paul: uit zijn eigen privacybeleid (Paul Jansen) en de Google-reviews; Michael gaf akkoord om hem te noemen.
- Geen portret, diploma, prijzen of plaatsenlijst: niet aangeleverd, bewust weggelaten.
