// Feiten (zie bron/): Google-bedrijfsprofiel (adres, 06 51 75 03 25, openingstijden, foto's, reviews),
// Instagram @autobedrijf66_ (bio: Auto Inkoop & Verkoop, Wraps • PPF • Tint • Custom, Daltonstraat 8),
// Auto Voor Jou-dealerpagina (06 21 39 82 84, autobedrijf66@gmail.com, voorraad met maandbedrag).
// Geen eigen website, geen KvK gevonden: KvK laten we weg.
export const site = {
  naam: 'Autobedrijf 66',
  straat: 'Daltonstraat 8',
  postcode: '3316 GD',
  plaats: 'Dordrecht',
  tel: '06 51 75 03 25',
  telHref: 'tel:+31651750325',
  tel2: '06 21 39 82 84',
  tel2Href: 'tel:+31621398284',
  mail: 'autobedrijf66@gmail.com',
  wa: 'https://wa.me/31651750325',
  instagram: 'https://www.instagram.com/autobedrijf66_/',
  voorraad: 'https://autovoorjou.nl/dealers/autobedrijf-66-1014',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Autobedrijf+66+Daltonstraat+8+3316+GD+Dordrecht',
  reviews: 'https://www.google.com/maps?cid=4046227812753442043',
  themeColor: '#101112',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (Date.getDay). Minuten sinds middernacht voor de live open/dicht-status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '15.00', van: 600, tot: 900 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Letterlijk van Google (5 november 2026), alleen 5-sterrenreviews. Ingekort met "…" waar aangegeven.
export const reviews = [
  { naam: 'Amaru S.', wanneer: '5 maanden geleden', tekst: 'Ik ben hier langsgegaan met een paar vragen en heb oprecht nog nooit zo’n eerlijke autoverkoper gesproken. Een ontzettend sympathieke en betrouwbare man die echt de tijd neemt om je goed te helpen. …' },
  { naam: 'Ootje B.', wanneer: '6 maanden geleden', tekst: 'Super tevreden over de service! Alles werd duidelijk uitgelegd en ik werd snel en vriendelijk geholpen. De auto was ook helemaal top: schoon, reed perfect en voldeed volledig aan mijn verwachtingen. Zeker een aanrader!' },
  { naam: 'Mert D.', wanneer: '9 maanden geleden', tekst: 'Top service door de jaren heen 4/5 autos gekocht. Als het kon zelfs 10 sterren gegeven' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Autobedrijf 66, ik heb een vraag.');
