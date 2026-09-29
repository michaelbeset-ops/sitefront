// Feiten van ijsboerderijheidehoeve.nl (Home, IJsbereiding, IJssmaken, IJscokar, Boerderij, Kinderen, Openingstijden, Contact)
// en het Google-profiel (4,6 uit 5, 414 reviews). Smakenlijst exact zoals op de pagina IJssmaken.
export const site = {
  naam: 'IJsboerderij Heidehoeve',
  wie: 'Kees en Anja Pijs',
  straat: 'Hoge Bremberg 33',
  postcode: '4873 LD',
  plaats: 'Etten-Leur',
  tel: '076 501 4750',
  telHref: 'tel:+31765014750',
  kees: '06 23 43 79 23',
  keesHref: 'tel:+31623437923',
  anja: '06 53 60 01 75',
  anjaHref: 'tel:+31653600175',
  mail: 'info@ijsboerderijheidehoeve.nl',
  facebook: 'https://www.facebook.com/ijsboerderijheidehoeve',
  maps: 'https://www.google.com/maps/search/?api=1&query=IJsboerderij+Heidehoeve+Hoge+Bremberg+33+Etten-Leur',
  google: '4,6',
  reviews: '414',
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  themeColor: '#1d3a24',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export type Soort = 'room' | 'sorbet' | 'yoghurt' | 'diabetes';
export const soorten: { id: Soort; naam: string; tekst: string; smaken: string[] }[] = [
  {
    id: 'room',
    naam: 'Roomijs',
    tekst: 'Gemaakt volgens de klassieke methode à l’Anglaise. Het ijs wordt gemaakt van verse melk.',
    smaken: ['Bananen', 'Boeren Roomijs', 'Boerenjongens', 'Caramel', 'Chocolade', 'Cocos', 'Cookies', 'Hazelnoten', 'Mokka', 'Nougat', 'Peren', 'Pistache', 'Straciatella', 'Strawberry cheesecake', 'Stroopwafel', 'Vanille', 'Witte chocolade'],
  },
  {
    id: 'sorbet',
    naam: 'Sorbet-ijs',
    tekst: 'Gemaakt van vers fruit en geschikt voor mensen met een lactose/koemelk-intolerantie.',
    smaken: ['Aardbeien', 'Appel-Kaneel', 'Banaan', 'Bosvruchten', 'Citroen', 'Framboos', 'Limoncello', 'Mandarijn-Framboos', 'Mango', 'Meloen', 'Passievruchten'],
  },
  {
    id: 'yoghurt',
    naam: 'Yoghurt-ijs',
    tekst: '',
    smaken: ['Yoghurt ijs', 'Yoghurt-aardbeien ijs', 'Yoghurt-amarenen ijs'],
  },
  {
    id: 'diabetes',
    naam: 'Diabetes-ijs',
    tekst: 'Ons diabetes ijs wordt gezoet met stevia.',
    smaken: [],
  },
];

export const verpakkingen = ['1 persoons­ijsbekers', '1/2 liters', 'liters', '2 1/2 liters', '5 literbakken'];

// Openingstijden van hun pagina Openingstijden. Minuten vanaf middernacht; dag 0 = zondag.
export const tijdenSeptember = [
  { dag: 'Woensdag', d: 3, van: 13 * 60, tot: 17 * 60, tijd: '13.00 - 17.00' },
  { dag: 'Vrijdag', d: 5, van: 13 * 60, tot: 17 * 60, tijd: '13.00 - 17.00' },
  { dag: 'Zaterdag', d: 6, van: 11 * 60, tot: 17 * 60, tijd: '11.00 - 17.00' },
  { dag: 'Zondag', d: 0, van: 13 * 60, tot: 17 * 60, tijd: '13.00 - 17.00' },
];
export const tijdenWinter = [{ dag: 'Zaterdag', d: 6, van: 13 * 60, tot: 17 * 60, tijd: '13.00 - 17.00' }];
