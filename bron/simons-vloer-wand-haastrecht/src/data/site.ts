// Feiten: simonsvloerenwand.nl (alle pagina's, bekeken 3 oktober 2026), Google-bedrijfsprofiel "Simons Vloer & Wand"
// (4,8 uit 5 reviews), Instagram @simonsvloerenwand, Facebook Simonsvloeren. Zie bron/.
// Hoogstraat 2c, 2851 BA Haastrecht. Rik 06 26 77 01 41 (ook op Google), Erik 06 42 14 44 78. info@simonsvloerenwand.nl.
export const site = {
  naam: 'Simons Vloer & Wand',
  straat: 'Hoogstraat 2c',
  postcode: '2851 BA',
  plaats: 'Haastrecht',
  tel: '06 26 77 01 41',
  telHref: 'tel:+31626770141',
  tel2: '06 42 14 44 78',
  tel2Href: 'tel:+31642144478',
  mail: 'info@simonsvloerenwand.nl',
  wa: 'https://wa.me/31626770141',
  instagram: 'https://www.instagram.com/simonsvloerenwand/',
  facebook: 'https://www.facebook.com/Simonsvloeren/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Simons+Vloer+%26+Wand+Hoogstraat+2c+Haastrecht',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Simons+Vloer+%26+Wand+Haastrecht',
  brochures: 'https://lieverdink.nl/brochures-downloads/',
  google: { score: '4,8', aantal: 5 },
  themeColor: '#171716',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Showroom: "Alleen geopend op afspraak" en "Onze openingstijden kunnen variëren" (contactpagina). Zaterdag 10:00-15:00
// staat in de instellingen van hun eigen site; Bing noemt ook alleen zaterdag. dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', tekst: 'Op afspraak' },
  { dag: 2, naam: 'Dinsdag', tekst: 'Op afspraak' },
  { dag: 3, naam: 'Woensdag', tekst: 'Op afspraak' },
  { dag: 4, naam: 'Donderdag', tekst: 'Op afspraak' },
  { dag: 5, naam: 'Vrijdag', tekst: 'Op afspraak' },
  { dag: 6, naam: 'Zaterdag', tekst: '10.00 - 15.00 uur' },
  { dag: 0, naam: 'Zondag', tekst: 'Gesloten' },
];

// Assortiment en diensten: menu en teksten van hun site (vloeren, wanden, trappen, onderhoud, tegels, PVC, BetonDesign,
// Ekobe kokosmozaïek, Woodbricks, vloerverwarming).
export const chips = ['Visgraat', 'Hongaarse punt', 'Versailles', 'Tapis', 'Lamelparket', 'PVC', 'Tegels en plavuizen', 'Trappen', 'Schuren, lakken, oliën', 'Onderhoud', 'BetonDesign', 'Kokosmozaïek', 'Woodbricks'];

// Letterlijk van Google (stand 3 oktober 2026). De enige review met tekst; de andere vier zijn alleen sterren.
export const review = { naam: 'Rob van W.', wanneer: '6 jaar geleden', tekst: 'Prima ervaring met eigenaar. Goed werk geleverd. Trap met pvc gelegd.' };

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hallo Rik, ik wil graag een afspraak maken in de showroom.');
