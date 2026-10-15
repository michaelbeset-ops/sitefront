// Feiten (bekeken 15 oktober 2026), bronnen in bron/:
// - Eigen site goodkitchenstore.nl (One.com Web Editor; pagina's in bron/site/*.txt): home, boek-nu, contact, inspiratie,
//   ontwerpen, projecten, koken (Quooker), winkel. Telefoon +31621538998, WhatsApp wa.me/31621538998, Facebook.
//   E-mail is een hotmail-adres: bewust niet getoond (bellen/WhatsApp voorop).
// - Google: Keukenwinkel, 4,8 uit 20 reviews, nieuwste 6 en 7 maanden oud. Tijden volgens Google (bron/google/uren.json).
// - BAG: Grondherendijk 19A is een winkelpand (winkelfunctie, 215 m2): adres mag getoond worden.
// - Naam "Ruud" staat alleen in reviews, niet op de eigen site: niet getoond, reviews daar ingekort met "…".
export const site = {
  naam: 'Good Kitchenstore',
  plaats: 'Rotterdam',
  straat: 'Grondherendijk 19A',
  postcode: '3082 DD',
  tel: '06 21 53 89 98',
  telHref: 'tel:+31621538998',
  wa: 'https://wa.me/31621538998',
  facebook: 'https://facebook.com/people/Good-Kitchenstore/100012394054299/',
  reviews: 'https://www.google.com/maps/place/Good+Kitchenstore/@51.8940579,4.4655509,17z/data=!4m6!3m5!1s0x47c4347f05bf7407:0x78e2386b895a07ed!8m2!3d51.8940579!4d4.4655509!16s%2Fg%2F11bwfmhlr7',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Grondherendijk+19A+3082+DD+Rotterdam',
  google: { score: '4,8', aantal: 20 },
  themeColor: '#141414',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maandag = 1 ... zondag = 0. Bron: Google-profiel. Showroom uitsluitend op afspraak (eigen site).
export const tijden: { dag: string; nr: number; open: [number, number] }[] = [
  { dag: 'Maandag', nr: 1, open: [10, 22] },
  { dag: 'Dinsdag', nr: 2, open: [18, 22] },
  { dag: 'Woensdag', nr: 3, open: [10, 22] },
  { dag: 'Donderdag', nr: 4, open: [14, 22] },
  { dag: 'Vrijdag', nr: 5, open: [19, 22] },
  { dag: 'Zaterdag', nr: 6, open: [11, 22] },
  { dag: 'Zondag', nr: 0, open: [9, 21] },
];

// Letterlijk van Google (alle 5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Hilde v.', wanneer: '7 maanden geleden', tekst: 'Wij zijn ontzettend blij met onze nieuwe keuken van Good Kitchenstore. … Omdat het een klein bedrijf is, dus menselijk, is het contact persoonlijk en direct. Het voelde echt als 1 op 1 samenwerken, wat veel vertrouwen gaf. Daarnaast hebben ze duidelijk oog voor detail' },
  { naam: 'Davinia V.', wanneer: '6 maanden geleden', tekst: 'Ze helpen je goed bij een keuze maken van de juiste keuken en accessoires erbij. … Ze komen naar je huis om dingen te bespreken. Je kan verschillende fronten mee krijgen om thuis te kijken hoe de kleur is.' },
  { naam: 'Roy v.', wanneer: 'een jaar geleden', tekst: 'Zeer tevreden met de service van Good Kitchenstore. Vanaf het ontwerp van de keuken uitstekende ondersteuning gehad en met het leveren en installeren hebben zij het echt waar gemaakt.' },
  { naam: 'Frank F.', wanneer: 'een jaar geleden', tekst: 'Alles naar wens zoals afgesproken. Vakwerk een dikke 9,2. … Ook oog voor details. Bedankt.' },
  { naam: 'Fleur J.', wanneer: 'een jaar geleden', tekst: '… Ook het contact was prettig. … Wij zijn ontzettend blij met onze keuken.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Good Kitchenstore, ik wil graag een afspraak maken voor advies over een nieuwe keuken.');
