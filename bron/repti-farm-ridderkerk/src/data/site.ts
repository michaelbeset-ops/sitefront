// Feiten (bekeken 2 oktober 2026), kopieën in /bron:
// - www.repti-farm.nl (index, reptielen, huisdieren, openingstijden): "Dierenspeciaalzaak Repti-farm ...... Alles voor uw huisdier",
//   reptielen kopen "die in prachtige terraria worden verzorgd", inrichtingsartikelen, voedseldieren (krekels, sprinkhanen,
//   wasmotlarven, kakkerlakken, fruitvliegen, dolalarven, meelwormen, moriowormen), "aan de andere zijde van de kelder, nog meer
//   Terraria", terraria "aangepast aan biotoop", katten-, honden-, kippen- en vogelvoer, Vitakraft hooi en stro, hooi met
//   paardenbloem en brandnetel, Royal Canin, KANJER (hond 15 kg, kat 10 kg), Pet Plus kattenbakvulling, visafdeling (bodembedekking,
//   warmte-elementen, pompen, aquariumplanten), boeken. Meta: "gespecialiseerd in reptielen ... hond, kat, knaagdieren, vijver ...
//   hele visafdeling", trefwoorden "hennie, van setten". Prinses Margrietstraat 36, 2983 EH Ridderkerk, 06-19644864,
//   info@repti-farm.nl, KvK 24324506. Tijden: ma gesloten, di-do 10-18, vr 10-20, za 10-17, zo gesloten (gelijk aan Google).
// - Google-bedrijfsprofiel "Repti-Farm": Dierenwinkel, 4,7 uit 251 reviews, zelfde tijden, adres en 06. Reviews in /bron/reviews.json.
// - KvK (via Transfirm/zoekresultaten): Repti-Farm V.O.F., opgericht 14-08-2001, vennoot H. van Setten. Geen keten, geen overname.
// - Facebook "Dierenspeciaalzaak Repti-farm" (facebook.com/Reptifarm36): 610 volgers, laatste bericht 13 mei (Hemelvaart-sluiting).
export const site = {
  naam: 'Repti-Farm',
  vol: 'Dierenspeciaalzaak Repti-Farm',
  straat: 'Prinses Margrietstraat 36',
  postcode: '2983 EH',
  plaats: 'Ridderkerk',
  tel: '06 19 64 48 64',
  telHref: 'tel:+31619644864',
  wa: 'https://wa.me/31619644864',
  mail: 'info@repti-farm.nl',
  kvk: '24324506',
  google: { score: '4,7', aantal: 251 },
  facebook: 'https://www.facebook.com/Reptifarm36/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Repti-Farm+Prinses+Margrietstraat+36+Ridderkerk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Repti-Farm+Ridderkerk',
  themeColor: '#0f1c14',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Minuten na middernacht voor de live status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '', dicht: '', van: 0, tot: 0 },
  { dag: 2, naam: 'Dinsdag', open: '10.00', dicht: '18.00', van: 600, tot: 1080 },
  { dag: 3, naam: 'Woensdag', open: '10.00', dicht: '18.00', van: 600, tot: 1080 },
  { dag: 4, naam: 'Donderdag', open: '10.00', dicht: '18.00', van: 600, tot: 1080 },
  { dag: 5, naam: 'Vrijdag', open: '10.00', dicht: '20.00', van: 600, tot: 1200 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '17.00', van: 600, tot: 1020 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Alleen termen van hun eigen site.
export const chips = ['Reptielen', 'Terraria', 'Inrichting', 'Voedseldieren', 'Boeken', 'Honden- en kattenvoer', 'Vogel- en kippenvoer', 'Hooi en stro', 'Visafdeling', 'Vijver'];

// Voedseldieren letterlijk van repti-farm.nl/reptielen.htm.
export const voedseldieren = ['Krekels', 'Sprinkhanen', 'Wasmotlarven', 'Kakkerlakken', 'Fruitvliegen', 'Dolalarven', 'Meelwormen', 'Moriowormen'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Hallo Repti-Farm, ik heb een vraag.');
