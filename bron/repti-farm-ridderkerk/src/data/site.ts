// Feiten, bekeken 6 oktober 2026. Kopieën en screenshots in /bron.
// - Google-bedrijfsprofiel "Repti-Farm" (bron/google/overzicht.txt): Dierenwinkel, Pr. Margrietstraat 36, 2983 EH Ridderkerk,
//   06 19644864, 4,7 uit 252 reviews, di-do 10-18, vr 10-20, za 10-17, zo en ma gesloten. Profiel niet geclaimd ("Dit bedrijf claimen").
//   Nieuwste review 3 dagen geleden (bron/google/reviews-nieuwste.txt).
// - Eigen site (alleen via https://repti-farm.nl, de www-link op Google geeft een certificaatfout; bron/web, bron/*.htm):
//   "Dierenspeciaalzaak Repti-farm ...... Alles voor uw huisdier"; reptielen kopen "die in prachtige terraria worden verzorgd";
//   inrichtingsartikelen; voedseldieren (krekels, sprinkhanen, wasmotlarven, kakkerlakken, fruitvliegen, dolalarven, meelwormen,
//   moriowormen); "Aan de andere zijde van de kelder, nog meer Terraria"; katten-, honden-, kippen- en vogelvoer, speeltjes,
//   hooi en stro, visafdeling (bodembedekking, warmte-elementen, pompen, aquariumplanten), boeken. info@repti-farm.nl, KvK 24324506.
//   Trefwoorden in de broncode: "hennie, van setten".
// - Facebook "Dierenspeciaalzaak Repti-farm" (facebook.com/Reptifarm36, 609 volgers, bron/fbhi/posts.txt): 22-11-2023 "Vandaag bestaat
//   onze winkel Repti-farm 20 jaar"; nieuw in de winkel: haakneusslangen (nakweek, 12-02-2024), Dendrobates tinctorius (17-12-2024),
//   grote miljoenpoten (17-01-2025), terrarium "De Luxe"-lijn (24-02-2025), roodoogmakikikkers (nakweek, 30-07-2025); paludarium in de
//   winkel en "diverse Terraria compleet in te richten voor onze klanten" (26-11-2024); warmtestenen, warmtematten, warmtekabels,
//   keramische warmtestralers (27-11-2024). Laatste bericht 4 september 2026 (vakantietijden). Commentaar noemt "Saar en Hennie".
// - Reviews noemen de eigenaar "Hennie"/"Henny", de kelder met terraria ("Een klein trapje naar beneden"), diepvries voedseldieren.
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
  sinds: '2003',
  google: { score: '4,7', aantal: 252 },
  facebook: 'https://www.facebook.com/Reptifarm36/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Repti-Farm+Prinses+Margrietstraat+36+Ridderkerk',
  themeColor: '#0f4a3b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d = minuten na middernacht voor de live status. Bron: Google-profiel (= oude site).
export const tijden = [
  { dag: 2, naam: 'Dinsdag', open: '10.00', dicht: '18.00', o: 600, d: 1080 },
  { dag: 3, naam: 'Woensdag', open: '10.00', dicht: '18.00', o: 600, d: 1080 },
  { dag: 4, naam: 'Donderdag', open: '10.00', dicht: '18.00', o: 600, d: 1080 },
  { dag: 5, naam: 'Vrijdag', open: '10.00', dicht: '20.00', o: 600, d: 1200 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '17.00', o: 600, d: 1020 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
];

// Letterlijk van repti-farm.nl/reptielen.htm.
export const voedseldieren = ['Krekels', 'Sprinkhanen', 'Wasmotlarven', 'Kakkerlakken', 'Fruitvliegen', 'Dolalarven', 'Meelwormen', 'Moriowormen'];

// Letterlijk van Google (positief, stand 6 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Jean-Luc V.', tekst: 'Heel behulpzaam en vriendelijke winkel-eigenaar. Ben echt goed geholpen en heb heel goed advies en informatie gekregen. …' },
  { naam: 'Hans K.', tekst: 'Mooie tropische dierenwinkel met een geweldig enthousiaste eigenaren die je alles vertellen wat je maar wilt' },
  { naam: 'Jerry V.', tekst: 'Kwam hier bij toeval terecht voor wat hooi voor het konijn , heele leuke eigenaar tour door de winkel gehad en de indrukwekkende reptielen gezien super gaaf !' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Hennie, ik heb een vraag.');
