// Feiten (bekeken 01-10-2026).
// nolbikkermotoren.nl: Kawasaki; menu Motoren (Supersport, Sports, Touring, Cruiser, Dual purpose, Motocross), Jet-ski, Quad,
// ATV, Mule, Occasions ("Diverse Kawasaki klassiekers"), Fun, Webshop. Contact: Grotewaard 8, 4225 PA Noordeloos,
// tel 0183-582200, info@nolbikkermotoren.nl. Route: "vlak langs de A27, tussen Vianen en Gorinchem. Vanaf de A27 neemt u de
// afslag Noordeloos ... Bij de rotonde gaat u niet rechtsaf Noordeloos in, maar linksaf. U vindt ons daar onmiddelijk aan uw
// linkerhand." Fun: "30 jaar Nol Bikker Motoren - de tocht": "tocht met meeste Kawasaki's ooit op 30 mei 2009" (recordpoging).
// Google: 4,7 uit 96; di-vr 09:00-18:00, za 09:00-17:00, zo/ma gesloten. Reviews (samengevat): "de man met groen bloed",
// eigen museum met Kawasaki-collectie, alles spik en span, Nol een echte vakman, iedereen "Kawasaki-minded", goede service, koffie.
// Foto's: Google-bedrijfsprofiel (museum, werkplaats, voorplein) en de oude site (klassiekers voor de loods).
export const site = {
  naam: 'Nol Bikker Motoren',
  straat: 'Grotewaard 8',
  postcode: '4225 PA',
  plaats: 'Noordeloos',
  tel: '0183 582 200',
  telHref: 'tel:+31183582200',
  mail: 'info@nolbikkermotoren.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Nol+Bikker+Motoren+Grotewaard+8+Noordeloos',
  google: { score: '4,7', aantal: 96 },
  themeColor: '#12160f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const tijden = [
  ['Maandag', 'gesloten'],
  ['Dinsdag t/m vrijdag', '09:00 - 18:00'],
  ['Zaterdag', '09:00 - 17:00'],
  ['Zondag', 'gesloten'],
];
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;
export const werkplaatsMail = mailMet('Afspraak werkplaats',
  'Goedendag,\n\nIk wil mijn motor laten nakijken.\n\nMerk en type: \nBouwjaar: \nKenteken: \nWat moet er gebeuren: \nVoorkeursdag (di t/m za): \n\nMet vriendelijke groet,\n');
export const vraagMail = mailMet('Vraag aan Nol Bikker Motoren',
  'Goedendag,\n\nIk heb een vraag over:\n( ) een nieuwe Kawasaki  ( ) een occasion of klassieker  ( ) jet-ski, quad, ATV of Mule\n\nMet vriendelijke groet,\n');
