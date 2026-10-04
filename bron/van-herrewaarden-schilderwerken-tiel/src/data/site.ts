// Feiten: eigen website vanherrewaardenschilderwerken.nl (stand 2016, bekeken 4 oktober 2026) en Google-bedrijfsprofiel
// "Van Herrewaarden Schilderwerken" (5,0 uit 2 reviews). Zonnedauw 96, 4007 VB Tiel. 06 43558863, wvanherrewaarden@online.nl.
// Geen openingstijden of KvK-nummer gepubliceerd. Zie bron/.
export const site = {
  naam: 'Van Herrewaarden Schilderwerken',
  kort: 'Van Herrewaarden',
  straat: 'Zonnedauw 96',
  postcode: '4007 VB',
  plaats: 'Tiel',
  tel: '06 43 55 88 63',
  telHref: 'tel:+31643558863',
  wa: 'https://wa.me/31643558863',
  mail: 'wvanherrewaarden@online.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Van+Herrewaarden+Schilderwerken+Zonnedauw+96+Tiel',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Van+Herrewaarden+Schilderwerken+Tiel',
  google: { score: '5,0', aantal: 2 },
  themeColor: '#141b33',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Diensten: de trefwoorden van hun eigen site (binnenschilderwerk, buitenschilderwerk, glasweefsel, plafonds en wanden,
// houtrotrenovatie) en wat hun foto-bijschriften laten zien (kozijnen, deuren, latexen, kast aflakken).
export const chips = ['Buitenschilderwerk', 'Binnenschilderwerk', 'Houtrotrenovatie', 'Kozijnen en deuren', 'Plafonds en wanden', 'Glasweefsel', 'Lakwerk', 'Onderhoudsschilderwerk'];

// Plaatsen uit hun eigen projectbijschriften.
export const plaatsen = ['Tiel', 'Passewaaij', 'Maurik', 'Soest'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag, ik wil graag een offerte voor schilderwerk.');
