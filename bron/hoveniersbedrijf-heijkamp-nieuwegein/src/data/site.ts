// Feiten: huidige website hoveniersbedrijf-dheijkamp.nl (alle pagina's, opgehaald 4 oktober 2026, kopie in bron/),
// Google-bedrijfsprofiel "Hoveniersbedrijf D. Heijkamp" (4,4 uit 7 reviews, ma t/m za 08:00-18:00, zo gesloten) en
// KvK-handelsregister (30112034, eenmanszaak, ingeschreven, Marconibaan 40 Nieuwegein). Eigenaar: Dick Heijkamp.
export const site = {
  naam: 'Hoveniersbedrijf D. Heijkamp',
  kort: 'Heijkamp',
  eigenaar: 'Dick Heijkamp',
  straat: 'Marconibaan 40',
  postcode: '3439 MS',
  plaats: 'Nieuwegein',
  tel: '06 54 36 37 39',
  telHref: 'tel:+31654363739',
  wa: 'https://wa.me/31654363739',
  mail: 'mail@hoveniersbedrijf-dheijkamp.nl',
  kvk: '30112034',
  maps: 'https://www.google.com/maps/search/?api=1&query=Hoveniersbedrijf+D.+Heijkamp+Marconibaan+40+Nieuwegein',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Hoveniersbedrijf+D.+Heijkamp+Nieuwegein',
  google: { score: '4,4', aantal: 7 },
  themeColor: '#1d1b17',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden van het Google-profiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '18.00' },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '18.00' },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '18.00' },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '18.00' },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '18.00' },
  { dag: 6, naam: 'Zaterdag', open: '08.00', dicht: '18.00' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Werkzaamheden: pagina "Wat doen wij" van de huidige site.
export const chips = ['Tuinontwerp', 'Sierbestrating', 'Erfafscheiding', 'Vijveraanleg', 'Gazon en beplanting', 'Boomverzorging', 'Hagen knippen', 'Gladheidsbestrijding'];

// Letterlijk van Google (stand 4 oktober 2026), alleen positieve reviews met tekst van klanten. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Jolanda S.', wanneer: '2 jaar geleden', tekst: 'Wat een topper. Harde werker. Meedenker. Goede uitvoerder. En tot slot; laat het keurig schoon en opgeruimd achter. Top hovenier!' },
  { naam: 'Marcel S.', wanneer: '9 jaar geleden', tekst: 'Uitstekende hoveniers bedrijf' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Hallo Dick, ik wil graag een vrijblijvende offerte voor mijn tuin.');
