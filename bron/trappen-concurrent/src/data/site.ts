// Feiten van trappenconcurrent.nl (home, aanbieding, werkwijze, prijzen + broncode prijscalculator, contact, gallery,
// vuren, trap op maat, accessoires) en het Google-profiel (4,9 uit 27 reviews, 30-09-2026).
export const site = {
  naam: 'De Trappen Concurrent',
  straat: 'Oosteinde 83',
  postcode: '2841 AB',
  plaats: 'Moordrecht',
  tel: '0182 37 20 44',
  telHref: 'tel:+31182372044',
  mobiel: '06 30 40 52 54',
  mobielHref: 'tel:+31630405254',
  whatsapp: 'https://wa.me/31630405254',
  mail: 'info@trappenconcurrent.nl',
  facebook: 'https://www.facebook.com/trappenconcurrent',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Trappen+Concurrent+Oosteinde+83+Moordrecht',
  google: '4,9',
  reviews: 27,
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  themeColor: '#171211',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Prijscalculator: bedragen en koppelingen exact uit de broncode van hun prijspagina (page/461).
// Trap-types: de radio-waarden staan naast plaatjes met het opschrift (half.jpg "HALF SLAG L/R", twee.jpg "TWEE KWART L/R",
// boven.jpg "BOVEN KWART L/R", onder.jpg "ONDER KWART L/R", steek.jpg "STEEK RECHT L/R").
// Totaal = trap + dicht + montage + opties (hun functie calculate()), incl. btw.
export const trappen = [
  { id: 'half', naam: 'Halfslag', prijs: 1499 },
  { id: 'twee', naam: 'Twee kwart', prijs: 1599 },
  { id: 'boven', naam: 'Bovenkwart', prijs: 1545 },
  { id: 'onder', naam: 'Onderkwart', prijs: 1545 },
  { id: 'steek', naam: 'Steek recht', prijs: 1225 },
];
export const uitvoering = [
  { id: 'open', naam: 'Open trap', prijs: 0 },
  { id: 'dicht', naam: 'Dichte trap', prijs: 195 },
];
export const montage = [
  { id: 'zonder', naam: 'Zonder montage', prijs: 0 },
  { id: 'met', naam: 'Met montage', prijs: 695 },
];
export const opties = [
  { id: 'trapgat', naam: 'Trapgat realiseren', bij: 'in een houten vloer', prijs: 695 },
  { id: 'leuning', naam: 'Trapleuning aan de wand', bij: 'rond profiel', prijs: 275 },
  { id: 'traphekken', naam: 'Traphekken', bij: 'per meter, de calculator rekent 1 meter', prijs: 95 },
  { id: 'antislip', naam: 'Antislip strip', bij: '1 strip in de trede', prijs: 155 },
  { id: 'grondverf', naam: 'Grondverf', bij: 'uw trap behandeld met grondverf', prijs: 155 },
];
