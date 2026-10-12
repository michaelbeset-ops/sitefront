// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Google-profiel "Teppratanporn" (Thais restaurant, niet geclaimd, geen website): 4,8 uit 259 reviews, nieuwste review 1 dag oud.
//   Broersveld 108, 3111 LK Schiedam. 06 11439015. Ma, di, do t/m zo 14:00 tot 21:30, woensdag gesloten. Ter plaatse eten en afhalen.
// - Eigen gedrukte menukaart (foto's op Google, bron/menu): "Het beste wat Thailand u te bieden heeft uit Schiedam!", "Bel en bestel!",
//   "Dagelijks open van 14.00 uur tot 21.30 uur (woensdag gesloten)". Gerechten en omschrijvingen: bron/menu/menukaart.txt.
//   Prijzen niet getoond (datum foto onbekend). E-mailadres op de kaart is foutief gedrukt ("1218@gmailcom"): niet getoond.
// - Eigenaarsnaam staat alleen in een review, niet in een eigen bron: niet getoond.
export const site = {
  naam: 'Teppratanporn',
  plaats: 'Schiedam',
  straat: 'Broersveld 108',
  postcode: '3111 LK',
  tel: '06 11 43 90 15',
  telHref: 'tel:+31611439015',
  wa: 'https://wa.me/31611439015',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Broersveld+108%2C+3111+LK+Schiedam',
  reviews: 'https://www.google.com/maps/place/Teppratanporn/@51.9163878,4.4013828,17z/data=!4m6!3m5!1s0x47c43559c03b07f1:0xca94ce9b5ca5f9d0!8m2!3d51.9163878!4d4.4013828!16s%2Fg%2F11t5ln25zr',
  google: { score: '4,8', aantal: 259 },
  open: 14, dicht: 21.5, dichtDag: 3, // woensdag (getDay)
  themeColor: '#1a1311',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maandag eerst; dag = getDay()
export const week = [
  { t: 'Maandag', dag: 1 }, { t: 'Dinsdag', dag: 2 }, { t: 'Woensdag', dag: 3 }, { t: 'Donderdag', dag: 4 },
  { t: 'Vrijdag', dag: 5 }, { t: 'Zaterdag', dag: 6 }, { t: 'Zondag', dag: 0 },
];

// Letterlijk van Google (alle 5 sterren, in het Nederlands geschreven). Naam: voornaam + initiaal. "…" = ingekort.
export const reviews = [
  { naam: 'Jaimy D.', wanneer: '6 maanden geleden', tekst: 'Dit kleine zaakje in Schiedam stad is zo een toevoeging aan de stad. Man, wat kan je hier heerlijk eten & eten afhalen!' },
  { naam: 'Ebo E.', wanneer: '11 maanden geleden', tekst: 'Werkelijk heerlijk hier gegeten! Het is een klein restaurant met drie tafeltjes en er kan ook worden afgehaald. … Gerechten zijn vers en worden ter plekke bereid.' },
  { naam: 'Han A.', wanneer: '11 maanden geleden', tekst: 'Afgehaald, groene curry en groenten in oestersaus. Alles heel smaakvol, perfect pittig. Wij komen terug.' },
  { naam: 'Yvonne d.', wanneer: 'een jaar geleden', tekst: 'Het eten was echt héérlijk!!! Elk gerecht wordt per portie vers klaargemaakt, niks uit grote pannen die al tijden klaarstaan! …' },
  { naam: 'Peter', wanneer: '2 jaar geleden', tekst: 'Vandaag voor de eerste keer eten gehaald. De kokin / eigenaresse liet ons zien dat werkelijk alle gerechten vers en direct gemaakt worden … alles smaakte voortreffelijk.' },
  { naam: 'Bas v.', wanneer: '2 jaar geleden', tekst: 'De eigenaresse is ontzettend vriendelijk en maakt zelf heerlijke Thaise gerechten. Bel wel even van tevoren, want het kan er erg druk zijn!' },
];

// De kaart, overgetikt van hun eigen gedrukte menukaart. v = keuze zoals op de kaart.
const V4 = ['Vega / tofoe', 'Kip', 'Rund', 'Garnalen'];
export type Gerecht = { nr: number; n: string; d?: string; v?: string[] };
export const kaart: { id: string; t: string; items: Gerecht[] }[] = [
  { id: 'voor', t: 'Voorgerechten', items: [
    { nr: 1, n: 'Poh Piah Thod', d: "Portie kip en vega loempia's met chilisaus (4 stuks)" },
    { nr: 2, n: 'Koong Hom Pa', d: 'Gemarineerde garnalen in loempiablad (4 stuks)' },
    { nr: 3, n: 'Thod Mon Pla', d: 'Viskoekjes met chilisaus (4 stuks)' },
    { nr: 4, n: 'Kipsaté', d: 'Thaise kipsaté met pindasaus (4 stuks)' },
    { nr: 5, n: 'Portie gebakken banaan' },
  ] },
  { id: 'soep', t: 'Soepen', items: [
    { nr: 6, n: 'Tom Kha Kai', d: 'Kokossoep met kip' },
    { nr: 7, n: 'Tom Kha Koong', d: 'Kokossoep met garnalen' },
    { nr: 8, n: 'Tom Yam Kai', d: 'Pittige heldere soep met kip' },
    { nr: 9, n: 'Tom Yam Koong', d: 'Pittige heldere soep met garnalen' },
  ] },
  { id: 'salade', t: 'Salades', items: [
    { nr: 10, n: 'Yam Woensen', d: 'Pikante salade met Thaise vermecelli', v: ['Kip', 'Garnalen'] },
    { nr: 11, n: 'Som Tam Thai', d: 'Pittige groene papayasalade' },
    { nr: 12, n: 'Laab Kai', d: 'Salade met rode pepers, munt en citroen' },
    { nr: 13, n: 'Som Tam Lao', d: 'Pittige groene papayasalade met gefrituurde vis' },
  ] },
  { id: 'rijst', t: 'Rijst en noedels', items: [
    { nr: 14, n: 'Khao Phad', d: 'Thaise gebakken rijst met ei, tomaat, lenteuitjes en vissaus' },
    { nr: 15, n: 'Khao Phad Kai', d: 'Thaise gebakken rijst met ei, kip, tomaat, lenteuitjes en vissaus' },
    { nr: 16, n: 'Khao Phad Koong', d: 'Thaise gebakken rijst met ei, garnalen, tomaat, lenteuitjes en vissaus' },
    { nr: 17, n: 'Phad Thai Kai', d: 'Gebakken Thaise noedels met tofu, taugé en kip' },
    { nr: 18, n: 'Phad Thai Koong', d: 'Gebakken Thaise noedels met tofu, taugé en garnalen' },
    { nr: 19, n: 'Phad Thai Mama', d: 'Gebakken Thaise noedels met ei, tofu, taugé en lenteuitjes' },
  ] },
  { id: 'wok', t: 'Wokgerechten', items: [
    { nr: 20, n: 'Phad Priaow Waan', d: 'Groenten in zoetzure saus naar keuze', v: V4 },
    { nr: 21, n: 'Phad Bai Phad Kaprao', d: 'Pittige pepers, kouseband en Thaise basilicum', v: V4 },
    { nr: 22, n: 'Kratiam Prik Thai', d: 'Met knoflook en witte pepers; vega / tofoe met groenten en cashewnoten', v: V4 },
    { nr: 23, n: 'Phad Med Mamuang', d: 'Met groenten en cashewnoten', v: V4 },
    { nr: 24, n: 'Phad Nam Man Hoi', d: 'Groente in oestersaus', v: V4 },
  ] },
  { id: 'curry', t: 'Kaeng curry', items: [
    { nr: 25, n: 'Kaeng Phed', d: 'Rode kokoscurry met kouseband en Thaise basilicum', v: V4 },
    { nr: 26, n: 'Massaman', d: "Zoetzure kokoscurry met aardappels, uitjes en pinda's", v: V4 },
    { nr: 27, n: 'Keang Kjiao Waan', d: 'Pittige groene kokoscurry met kouseband', v: V4 },
    { nr: 28, n: 'Thad Phed', d: 'Gebakken rode curry met groenten en Thaise basilicum', v: V4 },
    { nr: 29, n: 'Panaeng', d: 'Rode kokoscurry met citroenblad', v: V4 },
  ] },
  { id: 'extra', t: 'Extra en dranken', items: [
    { nr: 0, n: 'Witte rijst' }, { nr: 0, n: 'Satésaus' }, { nr: 0, n: 'Kroepoek' },
    { nr: 0, n: 'Mango drink' }, { nr: 0, n: 'Lychee drink' }, { nr: 0, n: 'IJsthee' },
    { nr: 0, n: 'Singha', d: 'Thais bier' }, { nr: 0, n: 'Chang', d: 'Thais bier' },
    { nr: 0, n: 'Fanta' }, { nr: 0, n: 'Spa blauw' }, { nr: 0, n: 'Chocomel' }, { nr: 0, n: 'Red Bull' },
    { nr: 0, n: 'Wijn', d: 'Rood, wit of rosé' },
  ] },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Teppratanporn, ik wil graag iets bestellen.');
