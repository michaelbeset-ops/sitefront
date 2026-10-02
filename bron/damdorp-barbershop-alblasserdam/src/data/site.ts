// Feiten van het Google-bedrijfsprofiel (bekeken 2 oktober 2026: Makado-Center 10, gevestigd in Makado Winkelcentrum,
// 06 39442390, 4,9 uit 11 reviews, openingstijden, geen website), Facebook facebook.com/Damdorp ("De enige, echte Damdorp
// Barbershop.", 100% aanbevolen uit 37 beoordelingen) en Instagram @damdorpbarbershop ("Making people look good", foto's).
// KvK 65093453 (handelsregister via transfirm/drimble, start januari 2016). Geen diensten of prijzen gepubliceerd.
export const site = {
  naam: 'Damdorp Barbershop',
  straat: 'Makado-Center 10',
  postcode: '2951 EJ',
  plaats: 'Alblasserdam',
  centrum: 'Winkelcentrum Makado',
  tel: '06 39 44 23 90',
  telHref: 'tel:+31639442390',
  wa: 'https://wa.me/31639442390',
  kvk: '65093453',
  instagram: 'https://www.instagram.com/damdorpbarbershop/',
  facebook: 'https://www.facebook.com/Damdorp/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Damdorp+Barbershop+Makado-Center+10+Alblasserdam',
  google: { score: '4,9', aantal: 11 },
  facebookAanbevolen: { pct: '100%', aantal: 37 },
  themeColor: '#0d0d0d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google: maandag en zondag gesloten. Index = Date.getDay() (0 = zondag).
export const tijden: { dag: string; open?: string; dicht?: string }[] = [
  { dag: 'zondag' },
  { dag: 'maandag' },
  { dag: 'dinsdag', open: '09:00', dicht: '18:00' },
  { dag: 'woensdag', open: '09:00', dicht: '19:00' },
  { dag: 'donderdag', open: '09:00', dicht: '18:00' },
  { dag: 'vrijdag', open: '09:00', dicht: '21:00' },
  { dag: 'zaterdag', open: '09:00', dicht: '15:00' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waStandaard = waMet('Hoi Damdorp, ik wil graag langskomen om te knippen. Wanneer komt het uit?');
