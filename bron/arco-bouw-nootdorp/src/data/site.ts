// Feiten: huidige site arcobouw.nl (home, verbouwing, renovatie, onderhoud, contact, privacy-statement; bekeken 3 oktober 2026),
// Google-bedrijfsprofiel "Arco Aannemersbedrijf" (4,1 uit 13 reviews, waarvan 10 met 5 sterren; ma t/m vr 08:00-16:30),
// KvK 27314317 (via aannemer-nu.nl). Werkplaats Ambachtshof 80, 2632 BB Nootdorp. 06 21587655, 015 879 5139, info@arcobouw.nl.
// Naam eigenaar niet openbaar gevonden. Correspondentieadres (woonadres) bewust niet getoond.
export const site = {
  naam: 'Arco Aannemersbedrijf',
  kort: 'Arcobouw',
  straat: 'Ambachtshof 80',
  postcode: '2632 BB',
  plaats: 'Nootdorp',
  tel: '06 21 58 76 55',
  telHref: 'tel:+31621587655',
  vast: '015 879 51 39',
  vastHref: 'tel:+31158795139',
  mail: 'info@arcobouw.nl',
  kvk: '27314317',
  wa: 'https://wa.me/31621587655',
  maps: 'https://www.google.com/maps/search/?api=1&query=Arco+Aannemersbedrijf+Ambachtshof+80+Nootdorp',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Arco+Aannemersbedrijf+Nootdorp',
  google: { score: '4,1', aantal: 13, vijf: 10 },
  themeColor: '#161a4a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Bron: Google-profiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '16.30' },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '16.30' },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '16.30' },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '16.30' },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '16.30' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Letterlijk uit de opsommingen op arcobouw.nl (verbouwing, renovatie, onderhoud).
export const chips = ['Aanbouw', 'Uitbouw', 'Dakopbouw', 'Dakkapel', 'Keuken plaatsen', 'Badkamer', 'Tussenwanden doorbreken', 'Kozijnen', 'HR-glas', 'Dakisolatie', 'Schilderwerk', 'Schadeherstel'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…". Alleen positieve reviews.
export const reviews = [
  { naam: 'Pim L.', wanneer: '5 jaar geleden', tekst: 'Arco heeft onze woonkamer +/- 9 jaar geleden 2,5 meter uitgebouwd, nieuwe schuifpui, vloerverwarming, tegels. … Onze muur en plafond zijn gewoon vlak en geen scheutje te zien. Arco dacht goed mee en heeft kwaliteit geleverd waar we nu nog elke dag blij mee zijn. Zeer tevreden nog steeds!' },
  { naam: 'Matjo J.', wanneer: '4 jaar geleden', tekst: 'We hebben de dienstverlening als zeer prettig ervaren! Afspraken werden altijd netjes nagekomen. Hele prettige mensen kregen we over de vloer en de kwaliteit van de geleverde diensten was perfect. Echt een aanrader.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag Arcobouw, ik heb plannen voor een verbouwing en wil graag een vrijblijvende beoordeling.');
