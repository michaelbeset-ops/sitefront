import golf from '../assets/golf.webp';
import smax from '../assets/smax.webp';
import a3 from '../assets/a3.webp';
import microcar from '../assets/microcar.webp';

// Feiten van occasionszwijndrecht.nl (september 2026) en het Google-profiel (4,8 uit 99).
export const site = {
  naam: 'DSR Cars',
  straat: 'Dirck Uytenboogaertstraat 2',
  postcode: '3331 ES',
  plaats: 'Zwijndrecht',
  mobiel: '06 41 28 01 42',
  mobielHref: 'tel:+31641280142',
  tel: '078 842 74 70',
  telHref: 'tel:+31788427470',
  mail: 'info@dsrcars.nl',
  kvk: '52878996',
  voorraad: 'https://diensten.vwe.nl/publiek/dienst/AdverteerDirectOverzicht.aspx?bdrid=99219',
  maps: 'https://www.google.com/maps/search/?api=1&query=DSR+Cars+Dirck+Uytenboogaertstraat+2+Zwijndrecht',
  themeColor: '#0f1216',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Een greep uit de voorraad op hun site, 26 september 2026, met de foto's uit hun eigen VWE-advertenties.
// In de echte site komt dit live uit VWE.
export const autos = [
  { naam: 'Volkswagen Golf Variant 1.0 TSI Highline DSG', info: '2019 · 21.540 km · automaat · benzine', prijs: '19.999', pm: '271', foto: golf },
  { naam: 'Ford S-Max 2.0 EcoBoost S Edition', info: '2011 · 162.987 km · automaat · benzine · MPV', prijs: '14.999', pm: '205', foto: smax },
  { naam: 'Audi A3 Sportback 1.6 TDI Ambiente Pro Line plus', info: '2014 · 211.213 km · handgeschakeld · diesel', prijs: '11.749', pm: '167', foto: a3 },
  { naam: 'Microcar M.go Brommobiel Dynamic DCI Airco', info: '2021 · 16.469 km', prijs: '14.949', pm: '204', foto: microcar },
];
