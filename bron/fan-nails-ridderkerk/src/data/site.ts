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
  google: { score: '4,7', aantal: 59 },
  tijden: [
    ['Maandag', '09.00 - 17.00'],
    ['Dinsdag', '09.00 - 17.00'],
    ['Woensdag', '09.00 - 17.00'],
    ['Donderdag', '09.00 - 17.00'],
    ['Vrijdag', '09.00 - 17.00'],
    ['Zaterdag', '09.00 - 17.00'],
    ['Zondag', 'Gesloten'],
  ],
  themeColor: '#f5f2f1',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hoi Fan Nails, ik wil graag een afspraak maken.');
