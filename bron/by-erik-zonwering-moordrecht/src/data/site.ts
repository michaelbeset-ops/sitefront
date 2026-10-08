// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - by-erik.nl (eigen site, ts 2023): aanbod, modellen, "Hoe werkt BY ERIK", "Aangenaam. Ik ben Erik.", eerlijk-lijst,
//   e-mail info@by-erik.nl, "Maandag t/m Vrijdag van 8:00 tot 17:00 telefonisch bereikbaar", KvK 80179134, alleen "Moordrecht".
// - Google: "Leverancier van zonwering", 5,0 uit 7 reviews. Adres Bijenkorf 17 is een woonstraat (eenmanszaak, "Beste buren"
//   op hun Boerenlint-pagina): alleen "Moordrecht" tonen.
// - Instagram @byerikzonwering: laatste post 27 oktober 2025.
export const site = {
  naam: 'BY ERIK Zonwering',
  plaats: 'Moordrecht',
  tel: '06 55 14 21 50',
  telHref: 'tel:+31655142150',
  wa: 'https://wa.me/31655142150',
  mail: 'info@by-erik.nl',
  kvk: '80179134',
  instagram: 'https://www.instagram.com/byerikzonwering/',
  google: { score: '5,0', aantal: 7 },
  themeColor: '#2b3033',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (alle 7 reviews 5 sterren), soms ingekort met "…". Voornaam + initiaal, geen datums.
export const reviews = [
  { naam: 'Stephan V.', tekst: 'Altijd een hele fijne samenwerking met Erik gehad. Advies is eerlijk en transparant en de kwaliteit van oplevering is top. In de tussentijd rolluiken, hordeur en zonnewering op laten hangen door Erik en nooit wat op aan te merken gehad.' },
  { naam: 'Nora A.', tekst: 'Erik heeft goed naar onze wensen geluisterd en gaf ons ook tips en adviezen. Het plaatsen ging vlot en netjes. Alle bedradingen zijn netjes weggewerkt …' },
  { naam: 'Nadia A.', tekst: 'Mooie screen laten plaatsen op onze dakkapel. Erik denkt met je mee en is heel vriendelijk. Snelle levering en goede montage.' },
  { naam: 'Karin M.', tekst: 'By Erik had genoeg vakkennis en werkervaring in huis om ons goed te adviseren over de door ons aan te schaffen screens. Snelle levering en nette montage.' },
  { naam: 'Stef H.', tekst: 'Omdat Erik me al eens eerder waardevol advies had gegeven, wist ik wie te bellen toen we nieuwe zonneschermen en screens nodig hadden.' },
  { naam: 'Jeroen B.', tekst: 'Duidelijk verhaal en goede materialen. Praktische en professioneel bedrijf. Snelle levertijd en plaatsing! Super blij met onze nieuwe hor deur!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Erik, ik heb een vraag over zonwering.');
