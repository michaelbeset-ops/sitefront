// Feiten: hansler.nl (home, over-ons, rolluiken, screens, garagedeuren, contact, product "Elektrische Rolluiken op maat";
// bekeken 3 oktober 2026) en het Google-bedrijfsprofiel "Hansler Zonwering" (4,0 uit 20 reviews, ma-vr 09:00-17:00).
// Zie bron/site-tekst.txt en bron/google-reviews.txt. Geen KvK-nummer gepubliceerd.
export const site = {
  naam: 'Hansler Zonwering',
  voluit: 'Hansler Zonwering en Rolluiken',
  straat: 'Vang 13F',
  postcode: '4661 TX',
  plaats: 'Halsteren',
  tel: '06 22 74 57 08',
  telHref: 'tel:+31622745708',
  wa: 'https://wa.me/31622745708',
  mail: 'info@hansler.nl',
  instagram: 'https://www.instagram.com/hanslerzonwering/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Hansler+Zonwering+Vang+13F+Halsteren',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Hansler+Zonwering+Halsteren',
  google: { score: '4,0', aantal: 20 },
  themeColor: '#121a22',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Google: ma t/m vr 09:00-17:00.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.00', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Assortiment volgens hun menu, productpagina's en de onderdelenlijst op de homepage.
export const chips = ['Rolluiken', 'Elektrische rolluiken', 'Screens', 'Zonneschermen', 'Markiezen', 'Garagedeuren', 'Reparatie en service', 'Losse onderdelen'];

// Letterlijk van Google (stand 3 oktober 2026), alleen 5-sterrenreviews. Naam zoals op Google, ingekort.
export const reviews = [
  { naam: 'Cor en Helma H.', wanneer: '5 maanden geleden', tekst: 'Fantastisch en eerlijk bedrijf goede en snelle service werken netjes zijn vriendelijk', slot: 'Toppie' },
  { naam: 'Tbt 4', wanneer: '4 maanden geleden', tekst: 'altijd top service super bedankt mannen !!!' },
];
// Uitgelichte fragmenten bovenaan het Google-reviewoverzicht (letterlijk).
export const fragmenten = [
  'Eindelijk iemand die op tijd is en zn afspraken nakomt en goed gerepareerd.',
  'Top bedrijf deskundige mensen.',
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Goedendag Hansler Zonwering, ik heb een vraag over zonwering of rolluiken.');
