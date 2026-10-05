// Feiten: laaiin.nl (home, /type/, /tarief/, /om-te-weten/, /contact/, /digitaal-verhuur/, locatielijst op /waar-te-huur/;
// bekeken 5 oktober 2026, kopieën in bron/), Google-bedrijfsprofiel "Laaiin v.d. Heuvel Aanhangwagenverhuur"
// (4,6 uit 13 reviews; ma-vr 09:00-17:00, za 10:00-16:00, zo gesloten), Facebook laaiin.nl (foto's, "Legend since April 1993").
// Eigenaarsantwoord op Google noemt "Laaiin Aanhangwagens v.o.f.". Contact: Ron en Michiel van den Heuvel.
import locatiesData from './locaties.json';

export const site = {
  naam: 'Laaiin Aanhangwagens',
  kort: 'Laaiin',
  straat: 'Mariapolder 73',
  postcode: '4273 CH',
  plaats: 'Hank',
  tel: '06 53 70 77 21',
  telHref: 'tel:+31653707721',
  tel2: '06 51 28 12 96',
  tel2Href: 'tel:+31651281296',
  kantoor: '0162 40 44 46',
  kantoorHref: 'tel:+31162404446',
  mail: 'info@laaiin.nl',
  wa: 'https://wa.me/31653707721',
  facebook: 'https://www.facebook.com/laaiin.nl/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Laaiin+v.d.+Heuvel+Aanhangwagenverhuur+Mariapolder+73+Hank',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Laaiin+v.d.+Heuvel+Aanhangwagenverhuur+Hank',
  app: 'https://laaiin.nl/digitaal-verhuur/',
  google: { score: '4,6', aantal: 13 },
  themeColor: '#16181b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Bron: Google-bedrijfsprofiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 6, naam: 'Zaterdag', open: '10.00', dicht: '16.00', van: 600, tot: 960 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Types en binnenmaten: laaiin.nl/type/. b = breedte (lengte) in cm, d = diepte/breedte, h = hoogte.
export type TypeKey = 'a' | 'b' | 'c' | 'd' | 'motor' | 'bagage';
export const types: { key: TypeKey; naam: string; soort: string; maat: string; l: number; w: number; h: number; extra: string }[] = [
  { key: 'a', naam: 'Type A', soort: 'Normale aanhangwagen', maat: '200 × 100 × 28 cm', l: 200, w: 100, h: 28, extra: 'Technisch laadvermogen 900 kg, wettelijk totaal 750 kg' },
  { key: 'b', naam: 'Type B', soort: 'Speciale aanhangwagen', maat: '250 × 125 × 28 cm', l: 250, w: 125, h: 28, extra: 'Technisch laadvermogen 900 kg, wettelijk totaal 750 kg' },
  { key: 'c', naam: 'Type C', soort: 'Gesloten aanhangwagen', maat: '250 × 150 × 150 cm', l: 250, w: 150, h: 150, extra: 'Technisch laadvermogen 900 kg, wettelijk totaal 750 kg' },
  { key: 'd', naam: 'Type D', soort: 'Lange aanhangwagen', maat: '300 × 150 × 30 cm', l: 300, w: 150, h: 30, extra: 'Laadvermogen volgens de normen van uw auto' },
  { key: 'motor', naam: 'Motor / scooter', soort: 'Motor- en scooteraanhangwagen', maat: '200 × 100 × 28 cm', l: 200, w: 100, h: 28, extra: 'Ruimte voor 2 motoren' },
  { key: 'bagage', naam: 'Bagagewagen', soort: 'Bagagewagen', maat: '125 × 80 × 55 cm', l: 125, w: 80, h: 55, extra: 'Laadvermogen volgens de normen van uw auto' },
];

// Tarieven (incl. btw) van laaiin.nl/tarief/. Per huurperiode de prijs voor A, B, C, D.
export const perioden = [
  { key: '3u', naam: '3 uur', uitleg: 'maximaal 3 uur', groep: 1, p: [23, 32, 37, 42] },
  { key: 'dag', naam: 'Dag', uitleg: 'max. 12 uur, binnen de openingstijden', groep: 1, p: [31, 41, 45, 50] },
  { key: '24u', naam: '24 uur', uitleg: 'maximaal 24 uur', groep: 1, p: [39, 51, 54, 60] },
  { key: '36u', naam: '36 uur', uitleg: 'maximaal 36 uur', groep: 1, p: [47, 63, 66, 73] },
  { key: '2d', naam: '2 dagen', uitleg: 'max. 48 uur', groep: 2, p: [51, 69, 76, 82] },
  { key: '3d', naam: '3 dagen', uitleg: 'max. 72 uur', groep: 2, p: [71, 87, 101, 107] },
  { key: '4d', naam: '4 dagen', uitleg: 'max. 96 uur', groep: 2, p: [89, 119, 127, 132] },
  { key: '5d', naam: '5 dagen', uitleg: 'max. 120 uur', groep: 2, p: [111, 150, 160, 165] },
  { key: '6d', naam: '6 dagen', uitleg: 'max. 144 uur', groep: 3, p: [130, 174, 185, 191] },
  { key: '7d', naam: '7 dagen', uitleg: 'max. 168 uur', groep: 3, p: [153, 205, 219, 225] },
  { key: '8d', naam: '8 dagen', uitleg: 'max. 192 uur', groep: 3, p: [171, 229, 244, 251] },
  { key: '14d', naam: '14 dagen', uitleg: 'max. 336 uur', groep: 3, p: [226, 302, 324, 331] },
];
export const groepBorg = { 1: '1x borg, 1x verzekering', 2: '2x borg, 2x verzekering', 3: '3x borg, 3x verzekering' } as Record<number, string>;
// Motor-, bagage- en scooteraanhangwagen: per dag € 30, per week € 90.
export const kleinTarief = [
  { key: 'kdag', naam: 'Per dag', p: 30 },
  { key: 'kweek', naam: 'Per week', p: 90 },
];
export const extras = [
  ['Borg', '€ 75'],
  ['Verzekering', '€ 3'],
  ['Huur nummerplaat', '€ 2'],
  ['Adapter', 'gratis'],
  ['Afdeknet', 'gratis'],
  ['Extra uur (vanaf het 12-uurstarief)', '€ 3'],
];

export type Locatie = { n: string; c: string; p: string; a: string; t: string; s: TypeKey[]; g: boolean; eigen?: boolean };
export const locaties = locatiesData as Locatie[];
export const aantalAdressen = new Set(locaties.map((l) => l.a.toLowerCase().replace(/\s/g, ''))).size;

// Letterlijk van Google (stand 5 oktober 2026). Alleen positieve reviews van klanten; reviews van familieleden
// (Van den Heuvel) en de ene kritische review zijn weggelaten. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Rico D.', tekst: 'Lekker bakkie, krantvriendelijk en een echt mooi familie bedrijf. Zeker voor herhaling vatbaar.' },
  { naam: 'Benji V.', tekst: 'Goed en snel geholpen ook buiten de openingstijden! En concurrerende prijzen.' },
  { naam: 'Corne T.', tekst: 'Goeie mensen, goeie aanhangers, lage prijzen. Top dus!' },
  { naam: 'Roberto G.', tekst: 'Fijn bedrijf! Denken met je mee.' },
  { naam: 'Jan J.', tekst: 'Super fijne aanhangwagens! Top (klanten)service! Ik raad dit iedereen aan!' },
  { naam: 'Chris H.', tekst: 'Goede en snelle service. Was ook nog eens goedkoper als de concurrent top.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Hallo Laaiin, ik heb een vraag over het huren van een aanhanger.');
