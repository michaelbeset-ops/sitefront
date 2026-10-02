// Feiten: Google-bedrijfsprofiel "Fan Nails studio" (bekeken 2 oktober 2026; 4,7 uit 59 reviews), Facebook fan.nails.560,
// Instagram @fan_nails_studio. Sint Jorisplein 3, 2981 GB Ridderkerk, Winkelcentrum De Ridderhof, Verdieping G.
// 06 21 31 87 68. Ma t/m za 09:00-17:00, zondag gesloten. Geen website, geen e-mail of KvK gevonden.
export const site = {
  naam: 'Fan Nails Studio',
  straat: 'Sint Jorisplein 3',
  postcode: '2981 GB',
  plaats: 'Ridderkerk',
  centrum: 'Winkelcentrum De Ridderhof',
  tel: '06 21 31 87 68',
  telHref: 'tel:+31621318768',
  wa: 'https://wa.me/31621318768',
  instagram: 'https://www.instagram.com/fan_nails_studio/',
  facebook: 'https://www.facebook.com/fan.nails.560/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Fan+Nails+Studio+Sint+Jorisplein+3+Ridderkerk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Fan+Nails+studio+Ridderkerk',
  google: { score: '4,7', aantal: 59 },
  themeColor: '#1f1519',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). open/dicht in uren.
export const tijden = [
  { dag: 1, naam: 'Maandag', kort: 'Ma', open: '09.00', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', kort: 'Di', open: '09.00', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', kort: 'Wo', open: '09.00', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', kort: 'Do', open: '09.00', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', kort: 'Vr', open: '09.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', kort: 'Za', open: '09.00', dicht: '17.00' },
  { dag: 0, naam: 'Zondag', kort: 'Zo', open: '', dicht: '' },
];

// Behandelingen: "Services"-labels bij hun Google-reviews (acryl, kunstnagels, nagelverlenging, nagelontwerpen, dip powder,
// nagels lakken, manicure en pedicure), het foto-onderschrift "biab met chroom" op hun profiel en de dienstnamen op hun
// oude site (nieuwe set, opvullen, gellak). Geen prijzen: die zijn niet actueel gepubliceerd.
export const chips = ['Acrylnagels', 'Gellak', 'BIAB', 'Nagelverlenging', 'French manicure', 'Nail art', 'Dip powder', 'Manicure', 'Pedicure'];

// Letterlijk van Google (stand 2 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Chantal', wanneer: '10 maanden geleden', tekst: '… Iedereen is erg aardig. Nagels precies zoals jij ze wil. Hier hebben ze hart voor de zaak en voor het vak. Altijd super blij met mijn nagels!' },
  { naam: 'Fleur K.', wanneer: 'een jaar geleden', tekst: 'Heel blij met mijn nagels. Erg veel oog voor detail, nog nooit zo mooi gehad. Hygienisch. Betaalbaar. Ontspannen sfeer. Vriendelijk personeel. Top!' },
  { naam: 'Sandra M.', wanneer: '2 jaar geleden', tekst: 'Super service! Hele aardige mensen die ook netjes te werk gaan en tijd voor je nemen. Zeker een aanrader. Kom er al jaren.' },
  { naam: 'Freija T.', wanneer: 'een jaar geleden', tekst: 'Ik vind het zo’n top salon! Goede service, leuk personeel, snel aan de beurt. Ik kom altijd met hele mooie nagels thuis.' },
  { naam: 'Ilona E.', wanneer: '2 jaar geleden', tekst: 'Heel lief personeel en denkt met je mee, geen creatie gaan ze uit de weg. Ik ben super blij deze salon gevonden te hebben. …' },
  { naam: 'Lola V.', wanneer: '3 jaar geleden', tekst: 'Nu 2 keer geweest, hele hele lieve mensen en denken altijd met je mee! Maken de mooiste nagels. Ik ben super tevreden! 💅' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hoi Fan Nails, ik wil graag een afspraak maken.');
