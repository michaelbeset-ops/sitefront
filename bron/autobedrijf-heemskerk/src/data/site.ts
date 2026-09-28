// Feiten van autobedrijfheemskerk.nl (Home, Schadeherstel, Onderhoud, Contact; overgetikt 28-09-2026),
// KvK 28031110 en het Google-profiel (4,9 uit 23 reviews). Niets toegevoegd.
export const site = {
  naam: 'Autobedrijf Heemskerk',
  straat: 'Christiaan Huijgensweg 9',
  postcode: '2408 AJ',
  plaats: 'Alphen aan den Rijn',
  terrein: 'Industrieterrein Molenwetering',
  tel: '0172 43 59 22',
  telHref: 'tel:+31172435922',
  mail: 'info@autobedrijfheemskerk.nl',
  kvk: '28031110',
  google: '4,9',
  reviews: 23,
  wilcoTel: '0172 49 76 76',
  wilcoTelHref: 'tel:+31172497676',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+Heemskerk+Christiaan+Huijgensweg+9+Alphen+aan+den+Rijn',
  themeColor: '#0c1a30',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag t/m vrijdag', tijd: '8.30 - 18.00' },
  { dag: 'Zaterdag', tijd: '10.00 - 14.00' },
];

export const diensten = [
  { naam: 'Onderhoud en reparatie', tekst: 'De kleine en de grote beurt, reparaties, uitlezen van uw auto, nieuwe (winter)banden plaatsen en bijvoorbeeld een trekhaak monteren.' },
  { naam: 'APK', tekst: 'De Algemene Periodieke Keuring. Bij een grote beurt zit de APK-keuring inbegrepen.' },
  { naam: 'Schadeherstel', tekst: 'Uitdeuken, spuiten, richten, velgreparatie en kunststofreparatie, samen met Auto Herstel Service Wilco.' },
  { naam: 'Inbouw elektronica', tekst: "Diverse elektronische apparatuur, onder andere xenonverlichting en autoradio's." },
  { naam: 'Onderdelen en accessoires', tekst: 'Via OTOPARTNER, wat garant staat voor een uitgebreid assortiment en snelle levering.' },
];
