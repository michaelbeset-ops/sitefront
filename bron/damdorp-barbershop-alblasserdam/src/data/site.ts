// Feiten van het Google-bedrijfsprofiel (bekeken 2 oktober 2026: Makado-Center 10, gevestigd in Makado Winkelcentrum,
// 06 39442390, 4,9 uit 11 reviews, openingstijden, geen website), Facebook facebook.com/Damdorp ("De enige, echte Damdorp
// Barbershop.", 100% aanbevolen uit 37 beoordelingen, 691 volgers) en Instagram @damdorpbarbershop ("Making people look good",
// 936 volgers, foto's). KvK 65093453 (handelsregister via transfirm/drimble, start januari 2016). Geen prijzen gepubliceerd.
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
  reviews: 'https://www.google.com/maps/search/?api=1&query=Damdorp+Barbershop+Alblasserdam',
  google: { score: '4,9', aantal: 11 },
  facebookAanbevolen: { pct: '100%', aantal: 37 },
  themeColor: '#111111',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). open/dicht in minuten na middernacht voor de live status.
export const tijden = [
  { dag: 1, naam: 'Maandag', kort: 'ma', open: '', dicht: '' },
  { dag: 2, naam: 'Dinsdag', kort: 'di', open: '09.00', dicht: '18.00' },
  { dag: 3, naam: 'Woensdag', kort: 'wo', open: '09.00', dicht: '19.00' },
  { dag: 4, naam: 'Donderdag', kort: 'do', open: '09.00', dicht: '18.00' },
  { dag: 5, naam: 'Vrijdag', kort: 'vr', open: '09.00', dicht: '21.00' },
  { dag: 6, naam: 'Zaterdag', kort: 'za', open: '09.00', dicht: '15.00' },
  { dag: 0, naam: 'Zondag', kort: 'zo', open: '', dicht: '' },
];

// Wat Damdorp doet: uit hun Instagram-foto's (fades, krullen, geschoren scheiding, contouren, golven) en de Facebook-review
// ("haar & baard knipwerk"). Geen prijzen: die zijn niet gepubliceerd.
export const chips = ['Fades', 'Krullen', 'Geschoren scheiding', 'Kort en klassiek', 'Contouren', 'Baard', 'Waves'];

// Letterlijk overgenomen (stand 2 oktober 2026). Google heeft 11 beoordelingen, waarvan 3 met tekst; de derde
// ("Ik hield van hem.") is een automatische vertaling uit het Arabisch en is weggelaten. Facebook: één openbaar zichtbare review.
export const reviews = [
  { naam: 'Jako V.', bron: 'Google review', wanneer: '2 dagen geleden', tekst: 'Fijne kapperszaak voor heren. Praatje, koffie en knippen. Dat alles voor een schappelijke prijs' },
  { naam: 'San Z.', bron: 'Facebook, raadt Damdorp aan', wanneer: '3 oktober 2018', tekst: 'Top gasten! Gezellige zaak en haar & baard knipwerk is ook super!' },
  { naam: 'Diddy O.', bron: 'Google review', wanneer: '2 maanden geleden', tekst: 'Is beste kapper tot nu toe' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waStandaard = waMet('Hoi Damdorp, ik wil graag langskomen om te knippen. Wanneer komt het uit?');
