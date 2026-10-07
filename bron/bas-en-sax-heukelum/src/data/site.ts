// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - basensax.nl (home, Contact, Huren, Onderhoud, Mondstukken, Workshops, Retourneren, Betalingsmogelijkheden, Innovatie,
//   "Veranderingen 2026/2027", blogs): "werkplaats voor basklarinet en saxofoon", samenwerking van Klarisax (Rhenen),
//   de Saxofoonchirurg (Nader Issa, Boven-Leeuwen) en Johan Jonker Saxofoons (Heukelum). "ieder woensdag open van 10.00 tot
//   17.30 uur" (update 19-8-2026: Nader dan aanwezig voor reparaties, Johan vaak voor verkoop en verhuur).
//   "specialiteit: vintage saxofoons en basklarinetten". Molenstraat 6, 4161 CJ Heukelum, 06 5172 1192.
//   Bankrekening op naam van J.G. Jonker te Heukelum. Betalen bij afhalen: contant of via smartphone (o.a. Tikkie via WhatsApp).
// - Google-profiel: 5,0 uit 15 reviews, woensdag 10:00-18:00 (eigen site: 17.30; we volgen de eigen site).
export const site = {
  naam: 'Bas en Sax',
  straat: 'Molenstraat 6',
  postcode: '4161 CJ',
  plaats: 'Heukelum',
  tel: '06 51 72 11 92',
  telHref: 'tel:+31651721192',
  wa: 'https://wa.me/31651721192',
  shop: 'https://basensax.nl/webshop-home',
  maps: 'https://www.google.com/maps/search/?api=1&query=Bas+en+Sax+Molenstraat+6+Heukelum',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Bas+en+Sax+Molenstraat+6+Heukelum',
  google: { score: '5,0', aantal: 15 },
  themeColor: '#173a2d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

const b = (p: string) => `https://basensax.nl/${p}`;
export const links = {
  saxofoons: b('saxofoons-webshop'),
  tenor: b('saxofoons/tenor'),
  basklarinetten: b('basklarinetten'),
  selmer: b('klarinetten/selmer-paris-basklarinet-tot-lage-e-detail'),
  paperclip: b('klarinetten/paperclip-model-contrabasklarinet-detail'),
  mondstukken: b('mondstukken-webshop'),
  workshops: b('workshops'),
  huren: b('huren'),
  onderhoud: b('onderhoud-saxofoons'),
  retour: b('retourneren'),
  voorwaarden: b('algemene-voorwaarden'),
  blog: b('sax-blog'),
  basblog: b('basklarinet-blog'),
  kennisbank: b('kennisbank'),
};

// De drie werkplaatsen (pagina "Veranderingen 2026/2027" en contactblok onderaan elke pagina).
export const werkplaatsen = [
  { naam: 'Johan Jonker Saxofoons', wie: 'Johan Jonker', wat: 'Workshops, mondstukken en verkoop', adres: 'Molenstraat 6, Heukelum', tel: '06 5172 1192', telHref: 'tel:+31651721192', noot: 'Ieder woensdag open' },
  { naam: 'De Saxofoonchirurg', wie: 'Nader Issa', wat: 'Onderhoud saxofoons', adres: 'Iepstraat 9, Boven-Leeuwen', tel: '06 1825 3758', telHref: 'tel:+31618253758', noot: 'Iedere woensdag in Heukelum' },
  { naam: 'Klarisax', wie: 'Erik van Houdt', wat: 'Onderhoud en aankoop klarinetten', adres: 'Julianastraat 1, Rhenen', tel: '06 5755 0807', telHref: 'tel:+31657550807', noot: 'Werkplaats op afspraak', href: 'https://www.klari-sax.nl' },
];

// Onderhoud-saxofoons: indicatieve prijzen in euro, moderne instrumenten, exclusief extra handelingen (en materiaal bij groot/revisie).
export const prijzen = [
  ['Sopraansaxofoon', 165, 275, 700],
  ['Altsaxofoon', 165, 275, 550],
  ['Tenorsaxofoon', 165, 275, 550],
  ['Baritonsaxofoon', 200, 330, 700],
  ['Bes-klarinet, hout', 115, 165, 350],
  ['Basklarinet lage Es, hout', 165, 275, 500],
  ['Basklarinet lage C, hout', 200, 330, 700],
] as const;

// Letterlijk van Google (5 sterren, stand 7 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Gerco N.', wanneer: 'een maand geleden', tekst: '… Daar werd echter gezien dat het toch een Bes instrument was waar ooit een stukje van was afgezaagd! Dus konden ze bij Bas en Sax er speciaal een langer mondstuk voor 3D-printen, waardoor de sax toch zuiver kon spelen! … Echt vakmensen met liefde voor bijzondere instrumenten.' },
  { naam: 'Michel J.', wanneer: '5 jaar geleden', tekst: 'Zeer vriendelijke ontvangst en professioneel advies. Je kan de saxofoons uittesten en Johan staat je bij met advies. Hij laat je vrij in je keuze en zal absoluut niet proberen je een sax \'aan te smeren\'. Mooie vintage saxen!' },
  { naam: 'Bieke v.A.', wanneer: '2 jaar geleden', tekst: 'Ontzettend klantgericht en het zijn in de eerste plaats grote liefhebbers en dat is aan alles te zien en te merken. … Absoluut aan te raden voor basklarinet en saxofoon' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Bas en Sax, ik heb een vraag over mijn instrument.');
