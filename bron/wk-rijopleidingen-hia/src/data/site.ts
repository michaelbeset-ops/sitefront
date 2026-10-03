// Feiten: wkrijopleidingen.nl (alle pagina's via WordPress-API, opgehaald 3 oktober 2026: bron/site-tekst.txt; tarieven
// auto en motor geldig vanaf 15 maart 2026, aanhanger bijgewerkt 5 januari 2026), Google-bedrijfsprofiel "WK Rijopleidingen"
// (5,0 uit 92 reviews, tijden ma-vr 08:00-22:00, za 09:00-17:00, zo gesloten: bron/google/google.txt) en Facebook
// (100% aanbevolen, 11 beoordelingen; "Gecertificeert faalangst-instructeur", "Ook voor opfriscursussen": bron/fb.txt).
export const site = {
  naam: 'WK Rijopleidingen',
  straat: 'Paulusweg 153',
  postcode: '3341 CW',
  plaats: 'Hendrik-Ido-Ambacht',
  tel: '06 41 57 34 35',
  telHref: 'tel:+31641573435',
  wa: 'https://wa.me/31641573435',
  mail: 'info@wkrijopleidingen.nl',
  cbrCode: '4849F6',
  wim: { naam: 'Wim Kanters', tel: '06 41 57 34 35', telHref: 'tel:+31641573435', mail: 'wim@wkrijopleidingen.nl' },
  annemarie: { naam: 'Annemarie Kanters', tel: '06 13 79 45 96', telHref: 'tel:+31613794596', mail: 'annemarie@wkrijopleidingen.nl' },
  facebook: 'https://www.facebook.com/608173352663927/',
  webshop: 'https://www.theorie-leren.nl/shop/school/wk-rijopleidingen.html',
  maps: 'https://www.google.com/maps/search/?api=1&query=WK+Rijopleidingen+Paulusweg+153+Hendrik-Ido-Ambacht',
  reviews: 'https://www.google.com/maps/search/?api=1&query=WK+Rijopleidingen+Hendrik-Ido-Ambacht',
  google: { score: '5,0', aantal: 92 },
  fb: { procent: '100%', aantal: 11 },
  themeColor: '#0b1530',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Tijden van het Google-profiel. dag: 0 = zondag (zoals Date.getDay). Minuten voor de live-status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '22.00', o: 480, d: 1320 },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '22.00', o: 480, d: 1320 },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '22.00', o: 480, d: 1320 },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '22.00', o: 480, d: 1320 },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '22.00', o: 480, d: 1320 },
  { dag: 6, naam: 'Zaterdag', open: '09.00', dicht: '17.00', o: 540, d: 1020 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
];

// Rijlesgebied volgens de pagina Over ons (bijgewerkt 2024).
export const gebied = ['Hendrik-Ido-Ambacht', 'Zwijndrecht', 'Dordrecht', 'Ridderkerk', 'Rijsoord', 'Alblasserdam', 'Oud-Alblas'];

export const chips = ['Autorijles (B)', 'Motorrijles (A1 en A)', 'Aanhanger (BE)', 'Opfriscursus', 'Faalangst-examen', 'Lessen vanaf 16,5', 'Tussentijdse toets', 'Theorie via de webshop'];

// Tarieven letterlijk van wkrijopleidingen.nl. p = prijs in euro (getal) voor de rekenhulp.
export const tarieven = {
  auto: {
    titel: 'Autorijles',
    noot: 'Een rijles duurt 60 minuten. Je betaalt contant per les of per tien lessen op factuur. Tarieven geldig vanaf 15 maart 2026, onder voorbehoud.',
    rijen: [
      { t: 'WK instappakket', s: '5 lessen van 60 minuten + gratis proefles', p: 315, uit: true },
      { t: 'Privéles per uur, cat. B', s: 'Een rijles duurt bij ons 60 minuten', p: 66 },
      { t: 'Praktijkexamen', s: 'Inclusief huur lesauto', p: 315 },
      { t: 'Tussentijdse toets', s: 'Inclusief huur lesauto', p: 315 },
      { t: 'Faalangst-examen', s: 'Inclusief huur lesauto', p: 385 },
      { t: 'BNOR-examen', s: 'Inclusief huur lesauto', p: 365 },
      { t: 'Theorie-examen', s: '', p: 50.5 },
      { t: 'Theorie-examen, individueel', s: '', p: 120 },
      { t: 'Gezondheidsverklaring', s: 'Vul je zelf in en betaal je zelf op de site van het CBR', p: 46.9 },
    ],
  },
  motor: {
    titel: 'Motorrijles',
    noot: 'Motorrijlessen zijn 2 lessen van 45 minuten achter elkaar. Het opstappakket mag in 4 termijnen. Tarieven geldig vanaf 15 maart 2026, onder voorbehoud.',
    rijen: [
      { t: 'WK opstappakket', s: '20 lessen + AVB- en AVD-examen, meest gekozen', p: 1495, uit: true },
      { t: '10 lessen + AVB-examen', s: '', p: 679 },
      { t: '10 lessen + AVD-examen', s: '', p: 802 },
      { t: '30 lessen + AVB- en AVD-examen', s: '', p: 1999 },
      { t: 'Motorrijles à 45 minuten', s: '', p: 50.25 },
      { t: 'AVB-examen', s: 'Inclusief motorhuur', p: 195 },
      { t: 'AVD-examen', s: 'Inclusief motorhuur', p: 320 },
      { t: 'Gezondheidsverklaring', s: 'Vul je zelf in en betaal je zelf op de site van het CBR', p: 46.9 },
    ],
  },
  aanhanger: {
    titel: 'Aanhanger (BE)',
    noot: 'Inclusief gebruik van de lescombinatie tijdens het examen, dus geen verborgen bijkomende kosten. Onder voorbehoud.',
    rijen: [
      { t: 'WK aanhangpakket', s: '8 lessen (2 dagdelen) inclusief praktijkexamen, meest gekozen', p: 883.5, uit: true },
      { t: '6 lessen (2 dagdelen) inclusief praktijkexamen', s: '', p: 738.5 },
      { t: 'Intakeles van 2 uur', s: 'Verplicht bij de dagopleiding', p: 85 },
      { t: 'Losse les à 60 minuten', s: '', p: 72.5 },
      { t: 'Praktijkexamen', s: 'Inclusief huur lescombinatie', p: 303.5 },
      { t: 'Gezondheidsverklaring', s: 'Vul je zelf in en betaal je zelf op de site van het CBR', p: 45.25 },
    ],
  },
} as const;

export const euro = (n: number) => '€ ' + n.toLocaleString('nl-NL', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }) + (n % 1 ? '' : ',-');

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Miranda R.', wanneer: '4 maanden geleden', wie: 'Autorijles bij Annemarie', tekst: 'Super goede rijschool die ik zeker zal aanraden. Ik had zo veel angst om te rijden maar dankzij Annemarie heb ik in 1x mijn rijbewijs gehaald. Super fijne en duidelijke uitleg. …' },
  { naam: 'Djayden B.', wanneer: '5 maanden geleden', wie: 'Motorrijles bij Wim', tekst: 'Deze week geslaagd voor mijn motor rijbewijs. Wat een onwijs fijne rijschool, Wim neemt goed de tijd voor je en past zich aan aan jou tempo. …' },
  { naam: 'Nathalie M.', wanneer: 'een jaar geleden', wie: 'Ouder van een leerling', tekst: 'Superfijne rijschool. Ze maken waar wat ze beloven. Onze zoon in 1x geslaagd. Geven fijne adviezen. … Bedankt en we komen zeker terug met onze dochter.' },
  { naam: 'Dewie G.', wanneer: '5 maanden geleden', wie: 'Ouder van een leerling', tekst: 'Fantastisch Service! Onze dochter kent veel angsten, maar met Annemarie als rij instructrice waren deze snel verdwenen en heeft ze een hele fijne rijles ervaring gehad! …' },
  { naam: 'Daniel V.', wanneer: '2 maanden geleden', wie: 'Reed mee met de motorlessen', tekst: 'De rust en souplesse waarmee hij met zijn leerlingen omgaat is echt uitmuntend. Wim legt alles op zo’n opbouwende, positieve manier uit dat je de stof geheel zonder druk tot je neemt. …' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waInschrijven = waMet('Hoi Wim, ik wil me graag inschrijven voor rijles.');
