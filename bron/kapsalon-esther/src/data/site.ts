// Feiten van kapsalonesther.nl (home, prijzen, contact) en het Google-profiel (4,8 uit 5, 91 reviews).
export const site = {
  naam: 'Kapsalon Esther',
  straat: 'Hooftstraat 90',
  postcode: '3314 BG',
  plaats: 'Dordrecht',
  tel: '078 631 1699',
  telHref: 'tel:+31786311699',
  mobiel: '06 18 98 98 42',
  mobielHref: 'tel:+31618989842',
  mail: 'info@kapsalonesther.nl',
  kvk: '23029218',
  google: { score: '4,8', aantal: 91 },
  maps: 'https://www.google.com/maps/search/?api=1&query=Kapsalon+Esther+Hooftstraat+90+Dordrecht',
  themeColor: '#9a3f33',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag', tijd: 'Gesloten' },
  { dag: 'Dinsdag', tijd: '8.30 tot 17.30' },
  { dag: 'Woensdag', tijd: '8.30 tot 17.30' },
  { dag: 'Donderdag', tijd: '8.30 tot 17.30' },
  { dag: 'Vrijdag', tijd: '8.30 tot 17.30' },
  { dag: 'Zaterdag', tijd: '8.30 tot 12.30' },
];

export const prijzen = [
  { groep: 'Knippen', items: [
    { naam: 'Dames knippen', prijs: '30,50' },
    { naam: 'Heren knippen', prijs: '29,50' },
    { naam: 'Kinderen knippen t/m 10 jaar', prijs: '28,50' },
    { naam: 'Pony knippen', prijs: '12,50' },
  ] },
  { groep: 'Stylen', items: [
    { naam: 'Wassen en föhnen, incl. producten', prijs: '38,95' },
    { naam: 'Knippen en föhnen, incl. producten', prijs: '51,50' },
  ] },
  { groep: 'Verven', items: [
    { naam: 'Folie verven', prijs: '55,95', vanaf: true },
    { naam: 'Verven', prijs: '52,50', vanaf: true },
  ] },
  { groep: 'Kleuren permanent', items: [
    { naam: 'Semi color', prijs: '41,95', vanaf: true },
    { naam: 'Permanent', prijs: '100,95', vanaf: true },
  ] },
];
