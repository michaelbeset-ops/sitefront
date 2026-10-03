// Feiten (bekeken 3 oktober 2026):
// - Google-bedrijfsprofiel "BVT Glas- & Schilderwerken": 5,0 uit 2 reviews, Maria Lécinastraat 7, 4906 EH Oosterhout,
//   06 23456497, website bvt-schilderwerken.nl. Geen openingstijden, geen foto's, profiel niet geclaimd.
// - KvK (kvk.nl, ingeschreven): "BVT Schilder- en Afwerkingsbedrijf", vof, KvK 50760025, vestiging Denariusstraat 21 B, Oosterhout.
// - Vorige eigen website (Wayback Machine, laatste versie maart 2025): eigenaar Berry van Tilburg, motto "Kwaliteit hoeft
//   niet duur te zijn", actief vanaf 2006, "30 jaar ervaring", dienstenlijst, werkwijze-zinnen, samenwerking met partners.
// - De huidige domeinnaam toont alleen een standaardpagina van hostingbedrijf Webreus.
// Openingstijden zijn nergens gepubliceerd: daarom geen tijdentabel.
export const site = {
  naam: 'BVT Glas- & Schilderwerken',
  kort: 'B.V.T.',
  eigenaar: 'Berry van Tilburg',
  voornaam: 'Berry',
  straat: 'Maria Lécinastraat 7',
  postcode: '4906 EH',
  plaats: 'Oosterhout',
  kvk: '50760025',
  tel: '06 23 45 64 97',
  telHref: 'tel:+31623456497',
  wa: 'https://wa.me/31623456497',
  maps: 'https://www.google.com/maps/search/?api=1&query=BVT+Glas-+%26+Schilderwerken+Maria+L%C3%A9cinastraat+7+Oosterhout',
  reviews: 'https://www.google.com/maps/search/?api=1&query=BVT+Glas-+%26+Schilderwerken+Oosterhout',
  google: { score: '5,0', aantal: 2 },
  themeColor: '#191716',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Diensten letterlijk uit "Onze diensten" van hun vorige website.
export const diensten = [
  'Schilderwerk binnen en buiten',
  'Glaszetten',
  'Brandvertragende coatings',
  'Behangen',
  'Houtrotreparatie',
  'Stukadoorswerk',
  'Scheidingswanden',
  'Klein timmerwerk',
];

// Letterlijk van Google (stand 3 oktober 2026). De tweede review (een jaar geleden) heeft alleen sterren, geen tekst.
export const reviews = [
  { naam: 'Martin W.', wanneer: '6 jaar geleden', tekst: 'Goed bedrijf komt zijn afspraken na. Echt om aan te bevelen' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Hallo Berry, ik wil graag een vrijblijvende offerte voor schilderwerk.');
