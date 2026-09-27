// Feiten van dierenpensionsliedrecht.com (welkom, reserveringen/tarieven 2026, dagopvang, trimsalon, contact)
// en het Google-profiel "NO Kwadrant Sliedrecht" (4,6 uit 5, 82 reviews). Niets toegevoegd.
export const site = {
  naam: 'Dierenverzorgingscentrum "Sliedrecht"',
  kort: 'Dierenverzorgingscentrum Sliedrecht',
  straat: 'Parabool 204',
  postcode: '3364 DH',
  plaats: 'Sliedrecht',
  tel: '0184 419 441',
  telHref: 'tel:+31184419441',
  mobiel: '06 51 21 55 61',
  mobielHref: 'tel:+31651215561',
  mail: 'dierenpension@gmail.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=Parabool+204+3364+DH+Sliedrecht',
  google: { score: '4,6', aantal: 82 },
  themeColor: '#2f5d3a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Tarieven per dag per 01-01-2026 (bron: reserveringen.html)
export const tarieven = [
  {
    groep: 'Honden',
    regels: [
      { naam: 'Kleine hond', prijs: '€ 19,00' },
      { naam: 'Middelgrote hond', prijs: '€ 20,00' },
      { naam: 'Grote hond', prijs: '€ 21,00' },
      { naam: 'Hond solitair', prijs: '€ 50,00' },
    ],
  },
  {
    groep: 'Katten',
    regels: [
      { naam: 'Kat', prijs: '€ 13,00' },
      { naam: 'Privékamer kat', prijs: '€ 65,00', noot: 'tot 5 katten uit 1 gezin' },
    ],
  },
  {
    groep: 'Dagopvang',
    regels: [
      { naam: 'Dagopvang hond', prijs: '€ 15,00' },
      { naam: 'Dagopvang hond solitair', prijs: '€ 18,00' },
    ],
  },
  {
    groep: 'Extra',
    regels: [
      { naam: 'Toedienen insuline hond of kat', prijs: '€ 1,00', noot: 'per keer' },
    ],
  },
];

export const route = [
  {
    van: 'Vanuit Rotterdam',
    stappen: [
      'Neem op de A15 afslag 25, Sliedrecht-Oost.',
      'Bovenaan de afrit linksaf, richting industrieterrein N.O. Kwadrant.',
      'Doorrijden tot de rotonde en die driekwart nemen. Ter oriëntatie: rechts ziet u de Praxis.',
      'Bij de volgende rotonde rijdt u rechtdoor.',
      'Na ongeveer 50 meter de eerste straat rechtsaf: dit is de Parabool.',
      'De Parabool is doodlopend. Rij rechtdoor en ga aan het einde naar links.',
      'Het terrein is afgesloten met een hek. Meld u bij de intercom aan het hek.',
    ],
  },
  {
    van: 'Vanuit Gorinchem',
    stappen: [
      'Neem op de A15 afslag 25, Sliedrecht-Oost.',
      'Aan het einde van de afrit is een rotonde. Neem die driekwart.',
      'Aan het einde van de weg rechtsaf, richting industrieterrein N.O. Kwadrant.',
      'Bij de volgende rotonde driekwart. Ter oriëntatie: rechts ziet u de Praxis.',
      'Bij de volgende rotonde rijdt u rechtdoor.',
      'Na ongeveer 50 meter de eerste straat rechtsaf: dit is de Parabool.',
      'De Parabool is doodlopend. Rij rechtdoor en ga aan het einde naar links.',
      'Het terrein is afgesloten met een hek. Meld u bij de intercom aan het hek.',
    ],
  },
];
