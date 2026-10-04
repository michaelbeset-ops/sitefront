// Feiten (bekeken 3 oktober 2026):
// - Eigen site schildersbedrijf-barendrecht.nl (WordPress, "Copyright 2016"): diensten, core values, offerte-werkwijze,
//   e-mail, KvK 57117128, algemene consumentenvoorwaarden voor het schilders-, behangers- en glaszetbedrijf.
// - Google-profiel "schildersbedrijf barendrecht/Maasdam": Schilder, Van der Doeslaan 5 Maasdam (woonstraat: niet tonen),
//   06 51420777, ma t/m za 08:00-17:00, zo gesloten. GEEN Google-reviews.
// - Facebook /schildersbedrijfbarendrecht: 707 volgers, "100% aanbevolen (7 beoordelingen)", intro binnen-, buitenschilderwerk
//   en renovlies, foto's renovlies dec 2022, post 17 juli 2026 (#renovlies #nieuwbouw).
// - KvK (via OpenKvK): eenmanszaak, actief, "Schildersbedrijf voor particulieren en bedrijven".
export const site = {
  naam: 'Schildersbedrijf Barendrecht',
  plaats: 'Maasdam',
  werkgebied: 'Maasdam, de Hoeksche Waard, Barendrecht en omgeving',
  tel: '06 51 42 07 77',
  telHref: 'tel:+31651420777',
  wa: 'https://wa.me/31651420777',
  mail: 'info@schildersbedrijf-barendrecht.nl',
  kvk: '57117128',
  facebook: 'https://www.facebook.com/schildersbedrijfbarendrecht',
  fbReviews: 'https://www.facebook.com/schildersbedrijfbarendrecht/reviews',
  google: 'https://www.google.com/maps?cid=4214402297955026015',
  fb: { volgers: 707, aanbevolen: '100%', aantal: 7 },
  themeColor: '#0b1830',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Bron: Google-bedrijfsprofiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', open: '08.00', dicht: '17.00' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Diensten zoals op hun eigen site ("Wat doen wij") en Facebook-intro (renovlies).
export const chips = ['Buitenschilderwerk', 'Binnenschilderwerk', 'Sausen en spuiten', 'Behang en glasvezel', 'Renovlies', 'Lakwerk', 'Lambrisering', 'Houtrotreparatie', 'Kitwerk'];

// Letterlijk van hun Facebook-pagina (aanbeveling 11 november 2020), ingekort met "…". Google heeft (nog) geen reviews.
export const aanbeveling = {
  naam: 'Anette Z.',
  wanneer: '11 november 2020',
  tekst: ['De kwaliteit van het geleverde werk is boven verwachting.', 'De mannen van Barendrecht geven goed advies, zijn zeer meedenkend …'],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag, ik wil graag een vrijblijvende offerte voor schilderwerk.');
