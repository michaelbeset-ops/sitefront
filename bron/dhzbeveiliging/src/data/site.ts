// Feiten (bekeken 11 oktober 2026), bronnen in bron/:
// - Eigen site dhzbeveiliging.nl (CS-Cart webwinkel). Teksten in bron/site/pages.json, homepage in bron/web/tekst.txt.
//   "Wie is DHZbeveiliging.nl": opgestart in 1996 door Bart Verlaan; DHZ = Doe Het Zelf; mkb, zzp'ers, particulieren.
//   Contact (footer/klantenservice): Postbus 168, 3350 AD Papendrecht, tel. 06-51646880, verkoop@dhzbeveiliging.nl.
//   Prijzen, kortingen en verzendkosten staan op hun site, maar tonen we bewust NIET.
// - Google: "DHZbeveiliging", Beveiligingsbedrijf, Beukmolen 45 (woonstraat: alleen plaats tonen), 4,7 uit 31 reviews.
// Eigenaarsnaam: Bart Verlaan, staat op hun eigen site.
export const site = {
  naam: 'DHZbeveiliging',
  plaats: 'Papendrecht',
  tel: '06 51 64 68 80',
  telHref: 'tel:+31651646880',
  wa: 'https://wa.me/31651646880',
  mail: 'verkoop@dhzbeveiliging.nl',
  post: ['Postbus 168', '3350 AD Papendrecht'],
  shop: 'https://dhzbeveiliging.nl/',
  reviews: 'https://www.google.com/maps/place/DHZbeveiliging/@51.8407618,4.6867246,17z/data=!4m6!3m5!1s0x47c42969393f4ecb:0xbe7baf6a3079c2b9!8m2!3d51.8407618!4d4.6867246!16s%2Fg%2F1v27tnx2',
  google: { score: '4,7', aantal: 31 },
  themeColor: '#0c1424',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

const s = (p: string) => `https://dhzbeveiliging.nl/${p}/`;

// Assortiment: categorieen en feiten letterlijk van hun categoriepagina's. Geen prijzen of voorraad.
export const assortiment = [
  { naam: 'Ajax alarmsysteem', zin: 'Draadloos, in wit of zwart, volledig te bedienen via de smartphone. Alle componenten zijn Grade 2-gecertificeerd.', link: s('ajax-alarmsysteem') },
  { naam: 'Galaxy G2-20', zin: '12 bedrade zones op de print, uit te breiden tot 20. Met een RFportal ook draadloos.', link: s('galaxy-g2-20-alarmsysteem') },
  { naam: 'Galaxy Flex', zin: 'Bedraad en draadloos door elkaar. De 3-20, 3-50 en 3-100: van woning tot grote installatie.', link: s('galaxy-flex-alarmsysteem') },
  { naam: 'Galaxy Dimension', zin: 'Inbraakbeveiliging en toegangscontrole in één systeem, uitbreidbaar tot 520 zones.', link: s('galaxy-dimension-alarmsysteem') },
  { naam: 'Scantronic 9752 en 9851', zin: 'Hybride: draadloos, bedraad of allebei.', link: s('scantronic-9752-en-9851') },
  { naam: 'Detectoren en magneetcontacten', zin: 'PIR- en dual-detectoren, magneetcontacten, trilcontacten.', link: s('detectoren-bedraad') },
  { naam: 'Sirenes en flitslampen', zin: 'Binnensirenes, buitensirenes en sirenes met ingebouwde flitslamp. Flitslampen in wit, oranje en rood.', link: s('sirenes-voor-alarmsystemen') },
  { naam: 'Accu’s en batterijen', zin: 'Onder meer de Yuasa NP-serie, gemaakt voor alarm- en UPS-installaties.', link: s('accus-en-batterijen-voor-alarmsysteem') },
  { naam: 'Alarmkiezers en kabel', zin: 'GSM- en PSTN-alarmkiezers. Alarmkabel met 4 of 6 aders.', link: s('gsm-en-pstn-alarmkiezer') },
  { naam: 'Camerabewaking', zin: 'Dahua bullet-camera’s en 4K PoE-recorders.', link: s('camerabewaking') },
];

// Letterlijk van Google (5 sterren). Naam: voornaam + initiaal.
export const groot = { naam: 'Wim P.', tekst: 'Al vele jaren ervaring met DHZ. Altijd hulp via telefoon op al je vragen. … Dankzij DHZ kan ik alles met gemak zelf doen. Loop ik ergens vast, dan is een belletje voldoende.' };
export const reviews = [
  { naam: 'Yuki C.', tekst: 'Buitensirene loeit al 2 uur lang. … Dit bedrijf heeft mij super goed telefonisch geholpen en ben ik en mijn buren af van dat geluid!' },
  { naam: 'S. M.', tekst: 'De bestelde accu voor mijn alarminstallatie lag snel op de mat. De installatie lukte niet, maar Bart hielp me telefonisch op een zeer plezierige en accurate manier uit de brand.' },
  { naam: 'Aran A.', tekst: 'Ik belde dit bedrijf op en ben telefonisch direct geholpen. … Al mijn vragen geduldig beantwoord gekregen ook. Een behulpzaam en betrouwbaar bedrijf.' },
];

export const klantenservice = [
  ['Betaalmethoden', s('betaalmethoden')],
  ['Retourneren', s('klantenservice')],
  ['Algemene voorwaarden', s('algemene-voorwaarden')],
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Bart, ik heb een vraag over beveiliging.');
