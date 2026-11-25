// Feiten uit het dagbestand van 25-11-2026 (lead biesboschvakantie-werkendam), met bron.
// biesboschvakantie.nl (home): twee terreinen en trekkershutten op Witboomkil 5, KvK, Facebook, YouTube.
// biesboschvakantie.nl/mini-camping: faciliteiten, tarieven 2026, seizoen 27 maart t/m 4 oktober 2026.
// biesboschvakantie.nl/meestgesteldevragen: regels, plaatsen van 200 m2, aankomst en vertrek.
// biesboschvakantie.nl/contact: info@biesboschvakantie.nl en het formulier (velden overgenomen).
// Op de eigen site staat geen telefoonnummer. Het vaste nummer van revieweuro is bewust niet gebruikt.
export const site = {
  naam: 'Biesbosch Vakantie',
  terreinen: 'Minicamping De Witboom en Natuurkampeerterrein De Knotwilg',
  beheerders: 'Sjaak en Brigitte',
  straat: 'Witboomkil 5',
  postcode: '4251 MK',
  plaats: 'Werkendam',
  email: 'info@biesboschvakantie.nl',
  kvk: '17246570',
  facebook: 'https://www.facebook.com/Biesboschvakantienl/',
  youtube: 'https://youtu.be/mh1inTDtGrw',
  boeken: 'https://www.biesboschvakantie.nl/online-boeken/',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Witboomkil+5+4251+MK+Werkendam',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const seizoen = { van: '27 maart', tot: '4 oktober', jaar: '2026', aankomst: '14.00', vertrek: '12.00' };

// Tarieven 2026 per nacht, letterlijk van de minicampingpagina.
export const tarieven = [
  {
    groep: 'Kampeermiddel',
    regels: [
      ['Caravan, camper, vouwwagen of daktent', '8,50'],
      ['Tent of familietent', '7,00'],
      ['Trekkerstentje', '4,00'],
      ['Bijzettentje', '3,00'],
    ],
  },
  {
    groep: 'Personen',
    regels: [
      ['Volwassene', '8,50'],
      ['Kind tot 12 jaar', '4,50'],
      ['Kind tot 4 jaar', 'gratis'],
      ['Milieuheffing, per persoon', '0,35'],
      ['Toeristenbelasting, per persoon', '1,65'],
    ],
  },
  {
    groep: 'Extra',
    regels: [
      ['Stroom 4A, per dag', '4,00'],
      ['Huisdier', '2,00'],
      ['Auto', 'gratis'],
      ['Kano, per dag', '35,00'],
    ],
  },
] as const;

export const url = (pad = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${pad}`;

// Sfeerbeelden van Unsplash (gratis licentie), nooit gepresenteerd als het eigen terrein.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?fm=jpg&q=60&w=${w}&auto=format&fit=crop&ixlib=rb-4.1.0`;
export const fotos = {
  hero: (w = 1600) => u('photo-1765478834655-6fe9445eb456', w),   // riet langs stil water
  kano: (w = 1200) => u('photo-1439066290691-510066268af5', w),   // grijze kano op stil water bij bomen
  tent: (w = 1200) => u('photo-1571687949921-1306bfb24b72', w),   // tent in een veld onder bewolkte lucht
};
