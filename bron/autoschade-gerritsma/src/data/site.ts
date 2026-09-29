// Feiten van autoschadegerritsma.nl (home, contact, verzekering + WA / beperkt casco / all risk / waarborgfonds,
// schadeherstel + spotrepair / ruitschade / uitdeuken, schademelding, over ons) en het Google-profiel (4,6 uit 108 reviews).
export const site = {
  naam: 'Autoschade Gerritsma',
  juridisch: 'Autoschade Gerritsma B.V.',
  straat: 'Keulsveld 6',
  postcode: '4705 RS',
  plaats: 'Roosendaal',
  tel: '0165 533 815',
  telHref: 'tel:+31165533815',
  mail: 'info@autoschadegerritsma.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autoschade+Gerritsma+Keulsveld+6+Roosendaal',
  google: '4,6',
  reviews: 108,
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  themeColor: '#0a1b2c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag t/m donderdag', tijd: '08.00 - 17.00' },
  { dag: 'Vrijdag', tijd: '08.00 - 15.30' },
  { dag: 'Zaterdag', tijd: 'Gesloten' },
];

// Van hun verzekeringspagina (letterlijke volgorde).
export const verzekeraars = ['Achmea', 'Univé', 'Generali', 'Schadegarant', 'GlasGarant', 'Meeus verzekeringen', 'VvAA', 'AEGON', 'Onna Onna', 'Unigarant', 'ANWB', 'NH1816'];
