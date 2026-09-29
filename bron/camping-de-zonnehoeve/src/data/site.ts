// Feiten van www.dezonnehoeve.nl (home, activiteiten, faciliteiten, tarieven 2026, omgeving, zonne-energie, gastenboek,
// contact, boerderij van het jaar 2003, ANWB 2020) en het Google-profiel (4,6 uit 82 reviews).
// Vekabo 2015: staat op het bordje in hun eigen foto en in de alt-tekst van hun eigen site.
export const site = {
  naam: 'De Zonnehoeve',
  voluit: 'Landschapscamping De Zonnehoeve',
  eigenaren: 'Anja & Gilles van der Bijl',
  straat: 'Rietdijk 10',
  postcode: '4316 PL',
  plaats: 'Zonnemaire',
  eiland: 'Schouwen-Duiveland',
  tel: '06 13 95 36 72',
  telHref: 'tel:+31613953672',
  telVast: '0111 69 12 70',
  telVastHref: 'tel:+31111691270',
  mail: 'info@dezonnehoeve.nl',
  facebook: 'https://www.facebook.com/DeZonnehoeve',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Zonnehoeve+Rietdijk+10+Zonnemaire',
  google: '4,6',
  reviews: 82,
  open: '20 maart t/m 18 oktober 2026',
  themeColor: '#1b1c1d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Tarieven 2026, letterlijk van /tarieven/. Bedragen in centen om afrondingsfouten te voorkomen.
export const toer = [3300, 3800, 4500, 5200, 5900, 6600]; // 1 t/m 6 personen, per nacht
export const camper = 3300; // camperplaats 1 en 2, 1-2 personen, per nacht
export const extras = [
  { id: 'hond', naam: 'Hond', prijs: 350 },
  { id: 'auto', naam: 'Extra auto', prijs: 400 },
  { id: 'tentgroot', naam: 'Tent groot', prijs: 700 },
  { id: 'tentklein', naam: 'Tent klein', prijs: 450 },
  { id: 'caravan', naam: 'Caravan', prijs: 700 },
  { id: 'persoon', naam: 'Persoon', prijs: 800 },
];
export const euro = (c: number) => '€ ' + (c / 100).toFixed(2).replace('.', ',');
