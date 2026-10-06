// Feiten (bekeken 6 oktober 2026), ruwe bronnen in ../../bron:
// - Webshop despellenwinkelbreda.nl (PrestaShop): homepage, Winkels, Contact, Levering, Privacy, Voorwaarden, categorieën.
//   Speelhuislaan 68B, 4815 CG Breda, 06-39663901, info@despellenwinkelbreda.nl, eenmanszaak, KvK 20142409.
//   "Bel, mail of app ons!", 3 minuten lopen van de hoofdingang van het station, betaald parkeren (scanauto),
//   Trading Card Games (Altered, Star Wars Unlimited, Lorcana), Stappen en Shoppen Award 2024,
//   keurmerk "Hier is de Klant koning" (Klant Experience, 10 september 2019), afhalen op openingsdagen of op afspraak,
//   verzenden met PostNL (NL € 3,95, België € 13,95). Ticket to Ride XXXL zelf gebouwd en te huur (slider-tekst).
//   Aantallen per categorie = "Er zijn N producten" op de categoriepagina's (6-10-2026).
// - Google-bedrijfsprofiel: 4,7 uit 288 reviews, di-do 10:00-18:00, vr 10:15-18:00, za 10:00-17:00, zo/ma gesloten,
//   "Gerund door een vrouwelijke ondernemer". Eigenaar Margot (eigen reactie op review; reviews noemen Margot).
// - Facebook facebook.com/despellenwinkel: intro "Dé Spellenwinkel: een winkel vol spel- en puzzelplezier!", 2,5 d. volgers,
//   laatste post 3 dagen geleden. Instagram @despellenwinkelbreda (1.621 volgers, posts tot 3 oktober 2026).
// - Logo: "DÉ [rode pion] SPELLENWINKEL, SINDS 2008".
export const site = {
  naam: 'Dé Spellenwinkel',
  vol: 'Dé Spellenwinkel Breda',
  eigenaar: 'Margot',
  straat: 'Speelhuislaan 68B',
  postcode: '4815 CG',
  plaats: 'Breda',
  tel: '06 39 66 39 01',
  telHref: 'tel:+31639663901',
  wa: 'https://wa.me/31639663901',
  mail: 'info@despellenwinkelbreda.nl',
  kvk: '20142409',
  shop: 'https://despellenwinkelbreda.nl/nl/',
  instagram: 'https://www.instagram.com/despellenwinkelbreda/',
  facebook: 'https://www.facebook.com/despellenwinkel',
  maps: 'https://www.google.com/maps/search/?api=1&query=D%C3%A9+Spellenwinkel+Speelhuislaan+68B+Breda',
  google: { score: '4,7', aantal: 288 },
  themeColor: '#4a1c61',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d in minuten voor het script. Bron: Google-profiel en homepage webshop.
export const tijden = [
  { dag: 2, naam: 'Dinsdag', open: '10.00', dicht: '18.00', o: 600, d: 1080 },
  { dag: 3, naam: 'Woensdag', open: '10.00', dicht: '18.00', o: 600, d: 1080 },
  { dag: 4, naam: 'Donderdag', open: '10.00', dicht: '18.00', o: 600, d: 1080 },
  { dag: 5, naam: 'Vrijdag', open: '10.15', dicht: '18.00', o: 615, d: 1080 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '17.00', o: 600, d: 1020 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
];

// Letterlijk van Google (5 sterren, stand 6 oktober 2026), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Fransje v.', tekst: 'Vakbekwaam, lijkt wel van alle spellen de spelregels uit haar hoofd te kennen.' },
  { naam: 'Peter B.', tekst: 'Een echte spellenwinkel voor en door mensen die van spellen houden. Van vloer tot plafond vol met leuke bord en kaartspellen.' },
  { naam: 'Miranda M.', tekst: 'Gelukkig helpt Margot je op weg naar de juiste keuze. Een echte speciaalzaak zoals je die nog maar weinig ziet.' },
  { naam: 'Paul W.', tekst: 'Wat is dit een leuke winkel. En je wordt er ook nog eens heel goed geholpen. Kwam voor 1 spel, ging er met 3 weg.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Margot, ik heb een vraag over een spel.');
