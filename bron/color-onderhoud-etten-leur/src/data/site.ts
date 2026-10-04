// Feiten (bekeken 4 oktober 2026):
// - coloronderhoud.nl (laatst gewijzigd mei 2016): diensten, werkwijze, voordelen (geen voorschot, kleuradvies op maat, gratis offerte,
//   Sigma en Sikkens), contact: Bisschopsmolenstraat 145, 4876 AK Etten-Leur, 06 38 40 67 52, info@coloronderhoud.nl, KvK 65739574.
// - Google-bedrijfsprofiel "Schildersbedrijf Coloronderhoud VOF": 4,8 uit 4 reviews, geen openingstijden.
// - KvK: Coloronderhoud VOF, 65739574, ingeschreven, handelsnamen V.R.O. Totaalbouw en Coloronderhoud.
// - vro-totaalbouw.nl (zusterbedrijf, zelfde VOF en nummer): werkgebied Etten-Leur, Roosendaal, Breda.
export const site = {
  naam: 'Coloronderhoud',
  voluit: 'Schildersbedrijf Coloronderhoud VOF',
  straat: 'Bisschopsmolenstraat 145',
  postcode: '4876 AK',
  plaats: 'Etten-Leur',
  tel: '06 38 40 67 52',
  telHref: 'tel:+31638406752',
  wa: 'https://wa.me/31638406752',
  mail: 'info@coloronderhoud.nl',
  kvk: '65739574',
  zuster: 'https://vro-totaalbouw.nl/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Schildersbedrijf+Coloronderhoud+VOF+Bisschopsmolenstraat+145+Etten-Leur',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Schildersbedrijf+Coloronderhoud+VOF+Etten-Leur',
  google: { score: '4,8', aantal: 4 },
  themeColor: '#0e1b29',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Uit hun eigen site (wan.html, tim.html, vlo.html, index.html).
export const chips = ['Binnenschilderwerk', 'Buitenschilderwerk', 'Kleuradvies', 'Stucwerk', 'Sierpleister', 'Behangen', 'Glasweefselbehang', 'Deuren afhangen', 'Boeiborden en windveren', 'Gevelbeplating', 'Vloercoating'];

// Letterlijk van Google (stand 4 oktober 2026). Alleen de reviews met tekst.
export const reviews = [
  { naam: 'Familie Lagendijk', tekst: 'De Schilders waren vriendelijk en werkten netjes. Het waren harde werkers. Zeker een aanrader!!!', dienst: 'Exterieur schilderen en houtschildering' },
  { naam: 'Joey L.', tekst: 'Goede schilder, komt zijn afspraken na en levert top werk.', dienst: '' },
];
// Labels die reviewers op Google aanvinkten ("Positief").
export const labels = ['Responsiviteit', 'Stiptheid', 'Kwaliteit', 'Professionaliteit', 'Waarde'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag, ik wil graag een vrijblijvende offerte aanvragen.');
