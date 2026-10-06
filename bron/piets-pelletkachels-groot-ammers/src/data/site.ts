// Feiten (bekeken 6 oktober 2026), bewijs in bron/:
// - Eigen site https://www.pietspelletkachels.nl (WordPress 6.3.8, teksten 2013-2016, bron/site.txt): pelletkachels, houtkachels,
//   cv houtkachels, kookhaarden, binnenhaarden, buitenhaarden (tuinhaarden, terrashaarden, vuurschalen). Nordic Fire.
//   Contact: "Piet's Pelletkachels (LET OP: alleen op afspraak open) Voorstraat 55A 2964 AJ Groot-Ammers Tel: 06-57701030".
// - Google-bedrijfsprofiel "Piet's Pelletkachels, Houtkachels & Haarden" (Winkel voor open haarden/kachels): zelfde adres
//   en 06, ma t/m za 10:00-20:00, zo gesloten, winkelbezoek mogelijk, geen reviews, foto's t/m sep 2025 (bron/google/).
// - KvK (kvk.nl/zoeken, 6 okt 2026): Piet's Pelletkachels, eenmanszaak, hoofdvestiging, KVK 53004434, Voorstraat 55 a,
//   "Detailhandel in pelletkachels en terrasverwarming. Advisering en technische montagewerkzaamheden."
// - Vermelding uw-adres.nl (Searchtrends, hun websitebouwer): openingstijden ma-za 10:00-20:00 "op afspraak", vuurtafels.
// Eigenaar niet openbaar met naam; we noemen alleen de zaak.
export const site = {
  naam: "Piet's Pelletkachels",
  vol: "Piet's Pelletkachels, Houtkachels & Haarden",
  straat: 'Voorstraat 55A',
  postcode: '2964 AJ',
  plaats: 'Groot-Ammers',
  tel: '06 57 70 10 30',
  telHref: 'tel:+31657701030',
  wa: 'https://wa.me/31657701030',
  kvk: '53004434',
  maps: "https://www.google.com/maps/search/?api=1&query=Piet's+Pelletkachels+Voorstraat+55A+Groot-Ammers",
  themeColor: '#131416',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Minuten voor het script. Bron: Google-profiel; showroom op afspraak (eigen site).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '10.00', dicht: '20.00', o: 600, d: 1200 },
  { dag: 2, naam: 'Dinsdag', open: '10.00', dicht: '20.00', o: 600, d: 1200 },
  { dag: 3, naam: 'Woensdag', open: '10.00', dicht: '20.00', o: 600, d: 1200 },
  { dag: 4, naam: 'Donderdag', open: '10.00', dicht: '20.00', o: 600, d: 1200 },
  { dag: 5, naam: 'Vrijdag', open: '10.00', dicht: '20.00', o: 600, d: 1200 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '20.00', o: 600, d: 1200 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo, ik wil graag een afspraak maken om in de showroom te komen kijken.');
