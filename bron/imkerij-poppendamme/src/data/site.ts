// Feiten van imkerijpoppendamme.nl (De Imkerij, Imkerijwinkel en Terras, Expo, Route, Zie ook) en het Google-profiel
// (4,6 uit 5, 357 reviews). Adres Poppendamseweg 3, 4364 SL Grijpskerke volgens Google Maps en OpenStreetMap.
export const site = {
  naam: 'Imkerij Poppendamme',
  straat: 'Poppendamseweg 3',
  plaats: 'Grijpskerke',
  regio: 'Walcheren',
  tel: '0118-616966',
  telHref: 'tel:+31118616966',
  mail: 'imkerijpoppendamme@gmail.com',
  google: '4,6',
  reviews: '357',
  maps: 'https://www.google.com/maps/search/?api=1&query=Imkerij+Poppendamme+Poppendamseweg+Grijpskerke',
  themeColor: '#1d150d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Openingstijden zoals op de homepage van hun site.
export const seizoenen = [
  { id: 'zomer', naam: '1 april t/m 25 oktober', tijden: [
    { dag: 'Dinsdag t/m zaterdag', tijd: '10:00 - 17:00' },
    { dag: 'Zondag', tijd: '13:00 - 17:00' },
    { dag: 'Maandag', tijd: 'Gesloten' },
  ] },
  { id: 'winter', naam: '26 oktober t/m 31 maart', tijden: [
    { dag: 'Zaterdag', tijd: '10:00 - 17:00' },
    { dag: 'Zondag t/m vrijdag', tijd: 'Gesloten' },
  ] },
];

// Uit "Imkerijwinkel en Terras" en "De Imkerij". Geen soorten of prijzen verzonnen.
export const producten = [
  { id: 'honing', naam: 'Honing', tekst: 'Onze eigen honing.' },
  { id: 'kaarsen', naam: 'Bijenwaskaarsen', tekst: 'Ook handgemaakte.' },
  { id: 'snoep', naam: 'Honingsnoep', tekst: 'Allerlei honingsnoep en snoepgoed.' },
  { id: 'propolis', naam: 'Propolis en gelee royale', tekst: 'Propolis- en gelee royale-producten.' },
  { id: 'wijn', naam: 'Honingwijn', tekst: 'Diverse soorten, die u in de winkel ook proeven kunt.' },
  { id: 'kado', naam: 'Kadoartikelen', tekst: 'Leuke kleinigheidjes, ook voor de kinderen.' },
];
