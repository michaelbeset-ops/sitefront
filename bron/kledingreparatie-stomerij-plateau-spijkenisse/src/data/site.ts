// Feiten uit het dagbestand van 23-11-2026 (leadradar websiteteam/dag/2026-11-23.json), met bron.
// plateauspijkenisse.nl: adres, 06-nummer, openingstijden, diensten (reparatie, wassen en reinigen,
//   dekens en dekbedden, gordijnen op maat met opmeten en ophangen).
// repareersimpel.nl/shop/30: openingstijden, betalen na de reparatie, 5,0 uit 4 beoordelingen
//   en wat klanten noemen (goede service, vriendelijk geholpen, netjes afgewerkt).
// companyinfo.nl: handelsnaam Kledingreparatie Plateau, KvK 91342066.
// Geen eigenaarsnaam, geen e-mailadres en geen prijzen bekend: die staan er dus niet op.
export const site = {
  naam: 'Kledingreparatie & Stomerij Plateau',
  kort: 'Plateau',
  straat: "'t Plateau 23",
  postcode: '3202 GL',
  plaats: 'Spijkenisse',
  winkelcentrum: 'Winkelcentrum Plateau',
  tel: '06 43 87 58 69',
  telHref: 'tel:+31643875869',
  wa: 'https://wa.me/31643875869',
  facebook: 'https://www.facebook.com/p/Kledingreparatiestomerij-plateau-61550319066190/',
  repareersimpel: 'https://repareersimpel.nl/shop/30',
  kvk: '91342066',
  maps: "https://www.google.com/maps/dir/?api=1&destination=%27t+Plateau+23+3202+GL+Spijkenisse",
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// 0 = zondag, zoals Date.getDay().
export const tijden = [
  { dag: 'Zondag', kort: 'zo', open: '', dicht: '' },
  { dag: 'Maandag', kort: 'ma', open: '9.00', dicht: '18.00' },
  { dag: 'Dinsdag', kort: 'di', open: '9.00', dicht: '18.00' },
  { dag: 'Woensdag', kort: 'wo', open: '9.00', dicht: '18.00' },
  { dag: 'Donderdag', kort: 'do', open: '9.00', dicht: '18.00' },
  { dag: 'Vrijdag', kort: 'vr', open: '9.00', dicht: '18.00' },
  { dag: 'Zaterdag', kort: 'za', open: '9.00', dicht: '17.00' },
];

export const diensten = [
  {
    kop: 'Kledingreparatie',
    tekst: 'Is er iets kapot aan uw kleding? Breng het langs, wij repareren het. U betaalt pas als het klaar is.',
  },
  {
    kop: 'Wassen en reinigen',
    tekst: 'Alle kleding kunt u bij ons laten wassen of laten reinigen. U brengt het langs en haalt het schoon weer op.',
  },
  {
    kop: 'Dekens en dekbedden',
    tekst: 'Te groot voor thuis? Dekens en dekbedden maken wij voor u schoon.',
  },
  {
    kop: 'Gordijnen op maat',
    tekst: 'U kiest de stof, wij regelen de rest. Opmeten en ophangen kan ook.',
  },
];

export const url = (pad = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${pad}`;

// Sfeerbeelden van Unsplash, nooit gepresenteerd als eigen werk of eigen winkel.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?fm=jpg&q=60&w=${w}&auto=format&fit=crop&ixlib=rb-4.1.0`;
export const fotos = {
  hero: (w = 1600) => u('photo-1490481651871-ab68de25d43d', w),
  naaimachine: (w = 1200) => u('photo-1497997092403-f091fcf5b6c4', w),
  gordijnen: (w = 1200) => u('photo-1757382603619-7682803cfc5d', w),
};
