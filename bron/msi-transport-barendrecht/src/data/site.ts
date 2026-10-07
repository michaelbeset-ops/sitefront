// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site msitransport.nl (home, over-ons, diensten, wagenpark, contact): Zuideinde 2, 2991 LK Barendrecht,
//   +31 6 18 48 52 24 (ook WhatsApp), info@ / planning@ / boekhouding@msitransport.nl, KvK 68183585, BTW NL857335893B01,
//   planafdeling 24/7 bereikbaar, meer dan 15 jaar ervaring in containertransport, 40 trucks en 60 containerchassis,
//   Euro 6, merken DAF/Volvo/MAN/Mercedes-Benz/Iveco, onderhoud door erkende dealers, combi trailers en LZV,
//   NIWO- en VIHB-vergunning, havens Rotterdam en Antwerpen.
// - Google-bedrijfsprofiel: transportbedrijf, 5,0 uit 8 reviews.
export const site = {
  naam: 'MSI Transport BV',
  straat: 'Zuideinde 2',
  postcode: '2991 LK',
  plaats: 'Barendrecht',
  tel: '06 18 48 52 24',
  telHref: 'tel:+31618485224',
  wa: 'https://wa.me/31618485224',
  mail: 'info@msitransport.nl',
  planning: 'planning@msitransport.nl',
  financieel: 'boekhouding@msitransport.nl',
  kvk: '68183585',
  btw: 'NL857335893B01',
  maps: 'https://www.google.com/maps/search/?api=1&query=MSI+TRANSPORT+BV+Zuideinde+2+Barendrecht',
  google: { score: '5,0', aantal: 8 },
  themeColor: '#172a38',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (5 sterren, stand 7 oktober 2026).
export const review = { naam: 'Moon Connect Dienstverlening', tekst: 'Hele vriendelijke en professionele mensen.' };

// Letterlijk van msitransport.nl/diensten (volgorde en landen zoals daar).
export const landen = ['Benelux', 'Duitsland', 'Denemarken', 'Frankrijk', 'Spanje', 'Portugal', 'Polen', 'Tsjechië', 'Oostenrijk', 'Hongarije', 'Zwitserland'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Goedendag, ik heb een vraag over een containertransport.');
