// Feiten van jorisuurwerkreparatie.nl (home, servicecentrum Omega/Longines/Rado, Rolex, over ons, afspraak maken,
// contact; bekeken 2 oktober 2026) en het Google-bedrijfsprofiel (4,5 uit 38 reviews, eigenaar Hugo Joris).
// Aan de Dijk 126, 6049 MB Herten. 06 48 61 84 72 (ook WhatsApp), info@jorisuurwerkreparatie.nl. Alleen op afspraak.
// Geen openingstijden op site of Google. KvK niet gevonden.
export const site = {
  naam: 'Joris Uurwerkreparatie',
  eigenaar: 'Hugo Joris',
  straat: 'Aan de Dijk 126',
  postcode: '6049 MB',
  plaats: 'Herten',
  tel: '06 48 61 84 72',
  telHref: 'tel:+31648618472',
  wa: 'https://wa.me/31648618472',
  mail: 'info@jorisuurwerkreparatie.nl',
  instagram: 'https://www.instagram.com/jorisuurwerkreparatie/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Joris+Uurwerkreparatie+Aan+de+Dijk+126+Herten',
  google: { score: '4,5', aantal: 38 },
  themeColor: '#f1f0ed',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Goedendag, ik wil graag een afspraak maken voor mijn horloge.');
