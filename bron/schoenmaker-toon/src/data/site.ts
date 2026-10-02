// Bronnen (bekeken 2 oktober 2026):
// - Google-bedrijfsprofiel "Uw Schoenmaker Toon": Zandpad 66, 3241 GX Middelharnis, 06 40716545, 4,4 uit 64 reviews,
//   openingstijden ma gesloten, di-do 10:00-17:00, vr 10:00-16:30, za-zo gesloten. Geen website.
// - Eigen etalagefoto's op dat profiel (maart 2026): "Uw ambachtelijk Schoenmaker"; Schoenreparaties, Uitgebreide
//   Sleutelservice, Onderhoudsproducten, Naamplaten, Lijsten. (Op de deur staat vrijdag 10.00-17.00; Google zegt 16:30.)
// - Facebook-pagina UwschoenmakerToon: schoenreparatie, sleutelreparatie (sleutels maken), onderhoud van schoenen,
//   inlijsten van schilderijen, foto's, posters, borduurwerk en T-shirts. (Ophaalservice Barendrecht/Rhoon-Carnisselande
//   vanaf 2 januari 2021: stamt uit de Barendrechtse tijd, niet bevestigd voor nu.)
// - BarendrechtNU, 2 augustus 2020: vakman, had in zijn carrière diverse schoenmakerwinkels in Nederland en België.
export const site = {
  naam: 'Uw Schoenmaker Toon',
  kort: 'Schoenmaker Toon',
  straat: 'Zandpad 66',
  postcode: '3241 GX',
  plaats: 'Middelharnis',
  tel: '06 40 71 65 45',
  telHref: 'tel:+31640716545',
  wa: 'https://wa.me/31640716545',
  score: '4,4',
  reviews: 64,
  google: 'https://www.google.com/maps?cid=9329273370229624198',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Uw+Schoenmaker+Toon,+Zandpad+66,+3241+GX+Middelharnis',
  themeColor: '#efece6',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maandag eerst (index = (getDay() + 6) % 7). Tijden van het Google-profiel.
export const tijden: { dag: string; open?: [string, string] }[] = [
  { dag: 'Maandag' },
  { dag: 'Dinsdag', open: ['10.00', '17.00'] },
  { dag: 'Woensdag', open: ['10.00', '17.00'] },
  { dag: 'Donderdag', open: ['10.00', '17.00'] },
  { dag: 'Vrijdag', open: ['10.00', '16.30'] },
  { dag: 'Zaterdag' },
  { dag: 'Zondag' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst = '') => `${site.wa}?text=${encodeURIComponent('Hallo Toon, ' + tekst)}`;
