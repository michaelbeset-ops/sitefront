// Feiten (bekeken 3 oktober 2026):
// - rcmhofstede.nl (home, over ons, diensten, machines + subpagina's, projecten, contact): sinds 1989, opgericht door
//   Ronald Hofstede, land- en tuinbouw, VCA**, machines jaarlijks gekeurd, lijst werkzaamheden, machinepark, projecten,
//   Wateringseweg 18, 2685 SR Poeldijk, 06 534 141 76, info@rcmhofstede.nl, KvK 27125790.
// - Google-bedrijfsprofiel: 5,0 uit 2 reviews, loonwerker, ma-vr 07:00-18:00, za 07:00-12:00, zo gesloten.
// - Facebook /rcmhofstede (ca. 1.000 volgers), laatste bericht 7 mei 2026 met foto's van lopend werk.
export const site = {
  naam: 'RCM Hofstede',
  voluit: 'RCM Hofstede Loonbedrijf en Grondverzet B.V.',
  straat: 'Wateringseweg 18',
  postcode: '2685 SR',
  plaats: 'Poeldijk',
  tel: '06 534 141 76',
  telHref: 'tel:+31653414176',
  wa: 'https://wa.me/31653414176',
  mail: 'info@rcmhofstede.nl',
  kvk: '27125790',
  facebook: 'https://www.facebook.com/rcmhofstede',
  maps: 'https://www.google.com/maps/search/?api=1&query=RCM+Hofstede+Loonbedrijf+Wateringseweg+18+Poeldijk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=RCM+Hofstede+Loonbedrijf+en+Grondverzet+Poeldijk',
  google: { score: '5,0', aantal: 2 },
  themeColor: '#0c1722',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden van het Google-profiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '07.00', dicht: '18.00', van: 420, tot: 1080 },
  { dag: 2, naam: 'Dinsdag', open: '07.00', dicht: '18.00', van: 420, tot: 1080 },
  { dag: 3, naam: 'Woensdag', open: '07.00', dicht: '18.00', van: 420, tot: 1080 },
  { dag: 4, naam: 'Donderdag', open: '07.00', dicht: '18.00', van: 420, tot: 1080 },
  { dag: 5, naam: 'Vrijdag', open: '07.00', dicht: '18.00', van: 420, tot: 1080 },
  { dag: 6, naam: 'Zaterdag', open: '07.00', dicht: '12.00', van: 420, tot: 720 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Letterlijk de lijst "Onze werkzaamheden" van rcmhofstede.nl/diensten.html (alleen hoofdletters/afkortingen netjes).
export const werkzaamheden = [
  'Verkavelingsprojecten voor de tuinbouw',
  'Graafwerk met laserbesturing',
  'Graven en dempen van sloten',
  'Draineren',
  'Egaliseren',
  'Kopeggen',
  'Frezen',
  'Spitten',
  'Woelen',
  'Walsen',
  'Bomen versnipperen',
  'Inzaaien en maaien',
  'Beschoeiingen leveren en plaatsen',
  'Aanleg parkeerterreinen',
  'Grond, zand en repak leveren',
  'Grond, puin, hout en restafval afvoeren',
  'Rijplaten en betonplaten',
  'PVC-materialen leveren',
  'Bagger en slib uit silo of bassin',
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag, ik wil graag een offerte aanvragen voor grondwerk.');
