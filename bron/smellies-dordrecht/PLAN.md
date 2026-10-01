# Smellies, Dordrecht: ontwerpvoorstel v2 (demomodus)

Opdracht Michael: "abstract, geen lelijke letters, echt strak, een 10k website". v1 (Josefin Sans, oranje accent,
bonbondoos-concept) was te gewoon. v2 is een volledig nieuwe richting.

## Onderzoek (1 oktober 2026, headed Chrome via Playwright; screenshots in scratchpad/ref10k)
Bekeken: byredo.com, diptyqueparis.com, lelabofragrances.com, aesop.com, framacph.com.
1. **Beeld doet het werk, interface zwijgt.** Byredo en Frama openen met een filmisch beeld over de volle breedte
   (video, onscherpe schaduw), Diptyque met een macro van materiaal (bijna abstract). Geen kop-plus-twee-knoppen.
2. **Eén grotesk, piepkleine UI.** Gemeten: Byredo 12px hoofdletters, tracking 0.3-0.6px; Aesop SuisseIntl 11-14px;
   Frama Univers 12-16px met negatieve tracking; Le Labo Bell Gothic 13px hoofdletters. Hooguit een tweede letter
   voor details (Le Labo: mono-achtige typewriter; Diptyque: serif alleen in het merk).
3. **Monochroom, kleur alleen in het product.** Aesop warm wit (#fffef2) met tonale foto's; Byredo zwart/grijs;
   Frama wit/zwart. Knoppen zijn dunne rechthoeken of platte zwarte vlakken, nooit gekleurd.
4. **Het merk groot en ruim.** Byredo zet het woordmerk enorm in hero en footer; Diptyque/Le Labo klein maar
   gespatieerd. De footer is een typografisch moment, geen linkenbak.
5. **Rustig productgrid.** Gelijke kaarten op neutraal vlak, naam links, prijs rechts, verder niets; detail pas bij hover.

## Concept (3 zinnen)
Smellies verkoopt kleur die smelt: 36 handgemaakte geurbonbons in snoepkleuren onder de vlag "Scents & Happiness".
De site is een rustige, monochrome galerie waarin alleen de wax kleur mag hebben: de hero is een langzaam vloeiend,
glanzend wasoppervlak (WebGL) in de gemeten kleuren van hun eigen Smellies, met het woordmerk ruim gespatieerd erover.
Daaronder werkt alles als een parfumhuis: groot typografisch statement, macro's van hun eigen wax, een strak grid
met geurkiezer, en een lijntekening van de brander die met het scrollen meesmelt.

## Letter en kleur
- **Geist** (variabel, @fontsource, self-hosted) voor alles; **Geist Mono** alleen voor kleine details
  (bijschriften, samenstellingen, 1 / 3). Getest naast Inter Tight, Manrope en Plus Jakarta Sans (shots/_fonts.png):
  Geist heeft de strakste S en M voor het gespatieerde woordmerk en blijft rustig in 11px hoofdletters.
- Woordmerk: SMELLIES in Geist 300 met .38-.42em tracking (rechts gecompenseerd), (R) klein ingeschoven, "Scents &
  Happiness" in 11px UI-hoofdletters. Geen kader.
- Schaal: 11px UI (tracking .14em), 15-16px tekst, koppen -0.035em tracking, tabular nums voor alle prijzen.
- Kleur: papier #f3f1ec, antraciet #2e2f34 (hun eigen huisstijl), grijs #6d6c69, nevel #e6e3dc. Geen accentkleur.
  Kleur komt alleen uit de wax-foto's en het smeltbeeld (kleuren gemeten in hun eigen productfoto's).

## Verloop
1. Hero: smeltbeeld (4 paletten uit hun wax, wisselt elke 10 s), woordmerk, h1, bijschrift met de geurnamen.
2. Statement: "Alles zelf, met de hand. Van 100% soja- en koolzaadwas, zonder paraffine. Sinds 2013." + 2 macro's
   met rustige parallax + feitenlijst (8 tot 12 uur, spettert niet, niet getest op dieren).
3. Geuren: alle 36, geurkiezer (Fris / Bloemig / Zoet & kruidig / Warm & houtig), hover met zin + samenstelling.
4. Zo werkt het (donker): brander-lijntekening die per stap verandert (Smellie in schaal, smelten + geur, lichtje uit).
5. Collecties: Herfst (limited, hun eigen zin "Herfstweer buiten? Happy Autumn binnen."), Mixen, Smellies & zo.
6. Groothandel en verkooppunten NL / BE / UK.
7. Footer = contact, bereikbaarheid, verzending, groot woordmerk.

## Geurfamilies (zelf ingedeeld, uit hun eigen omschrijvingen)
Fris: woorden fris/schoon/wasverzachter in hun tekst. Bloemig: bloem/bloemig/jasmijn/bloesem in omschrijving of
samenstelling. Zoet & kruidig: zoet, gebak, kaneel, specerijen. Warm & houtig: houtachtig, sandelwood, amber, oud.
Een geur kan in twee families staan. Dame heeft geen omschrijving behalve "sensuele geur, een klassieker": label
"Parfumgeur", in geen familie.

## Bewust vermeden (BRIEF-ANTI-AI)
Geen donkere kicker-hero met pill-knoppen, geen stat-rij, geen kaartenrij met iconen, geen reviews, geen
polaroid/sticker, geen beige/goud, geen paars of oranje UI, geen kicker boven elke sectie, geen wizard.
De 3 stappen zijn geen kaartenrij maar een scroll-gestuurde tekening met tekst ernaast.

## Zelf gekozen
- Geen nep-winkelmandje: elke Smellie, mix, herfst- en Smellies & zo-link gaat naar de echte pagina op smellies.nl.
- "Dupe van <merk>" weggelaten (merknamen van derden), alleen hun eigen geurnamen en samenstellingen (ingekort).
- Mix-foto's van smellies.nl zijn stockbeelden (macarons, zee): niet gebruikt; mixen staan typografisch.
- Smeltbeeld: kleuren licht opgehelderd t.o.v. de foto's voor zachte overgangen; namen in het bijschrift kloppen.
- "Langskomen op afspraak": hun contactpagina zegt "Wilt u ons bezoeken? Laat het ons weten!" met ma-do 09-17.

## Bronnen
smellies.nl (categorie- en productpagina's, Wat zijn Smellies, Over Smellies, Contact, Bezorgen), bekeken 1-10-2026;
data hergebruikt uit v1 (`../smellies-dordrecht`) en aangevuld met de volledige productomschrijvingen.

## Herziening 2 (1 oktober 2026, na oordeel Michael: "hero leuk, daarna verschrikkelijk")
Het grid van 36 wax-hoopjes op de homepage is weg. Nieuwe opbouw:
- **Home** (6 secties): hero (ongewijzigd), kort merkstatement, Uitgelicht (Pumpkin Spice, Libre, Snuggels als
  grote banden in hun eigen waskleur), Collecties als vier beeldlinks, Zo werkt het (compact, tekening speelt de 3
  stappen af, klikbaar), Groothandel. Footer = contact.
- **/geuren/**: alle 40 (36 + 4 herfst), filter Fris / Bloemig / Zoet & kruidig / Warm & houtig / Herfst
  (ook via #hash), 3 kolommen, klik naar productpagina.
- **/geuren/<slug>/**: 40 statische productpagina's: groot beeld + hoop + detail, hun omschrijving, samenstelling,
  keuze 5 stuks € 2,75 / 15 stuks € 8,00 (Choo Choo: alleen 15, zoals op hun site), knop naar de echte variant
  op smellies.nl, brandtijd, zo gebruik je hem, Past ook bij (3 uit dezelfde familie), kruimelpad.
- **/collecties/**: Herfst (banner, 4 geuren, prijzen kaarsen/duo/spray), Mixen (typografisch), Smellies & zo.

### Productbeelden
Originelen opnieuw van hun CDN gehaald zonder cache-pad: 1000 tot 1600 px i.p.v. 800 (bron/wax-hr).
tools/beelden.mjs maakt per geur een strakke middenuitsnede (60%) en een macro, licht gelijkgetrokken
(helderheid +3%, verzadiging +5%, fijne verscherping). Getest: rond, volle macro, boog (shots/_beeldtest.png).
Gekozen: de ronde 'bonbon'-uitsnede met zachte schaduw op een vlak in de gemeten waskleur (30% gemengd met papier).
Waskleur per geur gemeten met tools/kleuren.mjs (gemiddelde van de lichtste 60% pixels).
Prijzen en varianten: uit de productgegevens van smellies.nl (5 stuks variant 6196551, 15 stuks variant 5188161).
