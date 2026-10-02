// Feiten uitsluitend uit het Google-bedrijfsprofiel "Schoenreparatieservice ROB Sleutelservice & Stomerij"
// (bekeken 2 oktober 2026): categorie Schoenmaker, gevestigd in Makado Winkelcentrum, 2951 EJ Alblasserdam,
// 06 12001330, 4,5 uit 31 reviews, openingstijden zoals hieronder, geen website, profiel niet geclaimd.
// Reviewthema onder "Sorteren": vakman. Eigenaar heet Rob (review), eenmanszaak (review). Geen straatnaam, mail of KvK.
export const site = {
  naam: 'Schoenreparatieservice ROB',
  volledig: 'Schoenreparatieservice ROB Sleutelservice & Stomerij',
  plek: 'Makado Winkelcentrum',
  postcode: '2951 EJ',
  plaats: 'Alblasserdam',
  tel: '06 12 00 13 30',
  telHref: 'tel:+31612001330',
  wa: 'https://wa.me/31612001330',
  maps: 'https://www.google.com/maps/search/?api=1&query=Schoenreparatieservice+ROB+Sleutelservice+Stomerij+Alblasserdam',
  google: { score: '4,5', aantal: 31 },
  themeColor: '#0c1013',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden precies zoals op Google (0 = zondag). Leeg = gesloten.
export const tijden: { dag: string; d: number; blokken: [string, string][] }[] = [
  { dag: 'Maandag', d: 1, blokken: [['11:00', '16:28']] },
  { dag: 'Dinsdag', d: 2, blokken: [['09:30', '17:15']] },
  { dag: 'Woensdag', d: 3, blokken: [] },
  { dag: 'Donderdag', d: 4, blokken: [['09:30', '16:28']] },
  { dag: 'Vrijdag', d: 5, blokken: [['09:30', '16:24'], ['18:33', '19:55']] },
  { dag: 'Zaterdag', d: 6, blokken: [['09:30', '16:00']] },
  { dag: 'Zondag', d: 0, blokken: [] },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHallo = waMet('Hallo Rob, ik heb een vraag.');
