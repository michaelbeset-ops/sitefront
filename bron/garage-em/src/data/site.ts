// Feiten van garage-em.nl (home, informatie, contact, online offerte) en het Google-profiel (4,8 uit 5, 61 reviews, 28-09-2026).
// Diensten: alleen de drie die op hun eigen logo staan ("In & verkoop - APK - reparatie"), zonder verdere invulling. Occasions-pagina had 0 voertuigen: niet getoond.
export const site = {
  naam: 'Garage E&M',
  slogan: 'De betaalbare garage',
  straat: 'Faradaystraat 13',
  postcode: '4004 JZ',
  plaats: 'Tiel',
  tel: '0344 627 621',
  telHref: 'tel:+31344627621',
  mail: 'info@garage-em.nl',
  offerte: 'http://www.garage-em.nl/kostdat',
  maps: 'https://www.google.com/maps/search/?api=1&query=Garage+E%26M+Faradaystraat+13+Tiel',
  google: { score: '4,8', reviews: 61 },
  themeColor: '#23282a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const diensten = ['In- en verkoop', 'APK', 'Reparatie'];

export const tijden = [
  { dag: 'Maandag t/m vrijdag', tijd: '08:00 - 18:00' },
  { dag: 'Zaterdag', tijd: '09:00 - 13:00' },
];

// Letterlijk van garage-em.nl/informatie, alleen de spelling licht bijgewerkt.
export const routes = [
  {
    id: 'maurik',
    knop: 'Maurik / Zoelen',
    van: 'Vanaf Maurik of Zoelen',
    via: 'Over de Industrieweg (N835) in zuidelijke richting',
    stappen: [
      'Ga linksaf de Sir Rowland Hillstraat in.',
      'Ga aan het eind van deze weg rechtsaf de Morsestraat in.',
      'Sla na ongeveer 30 meter linksaf de Faradaystraat in.',
      'U vindt ons hier na ongeveer 20 meter aan uw rechterhand.',
    ],
  },
  {
    id: 'a15',
    knop: 'A15 / Tiel',
    van: 'Vanaf de A15 of Tiel',
    via: 'Over de Industrieweg (N835) in noordelijke richting',
    stappen: [
      'Ga bij de stoplichten rechtsaf de Kellenseweg op.',
      'Neem de eerste straat links, de Wattstraat.',
      'Ga aan het eind van de weg linksaf de Marconistraat in.',
      'Neem daarna de tweede links, de Faradaystraat in.',
      'Na ongeveer 300 meter vindt u ons aan uw linkerhand.',
    ],
  },
];
