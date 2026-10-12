// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Eigen site vanderheijden-opticiens.nl (izicontent, "Copyright 2016"; alle pagina's in bron/site/*.txt):
//   logo en gevelbord "UW PARTICULIERE OPTICIEN(S) SINDS 1956". Nieuwstraat 2, 4901 JH Oosterhout, 0162-453288, info@zienenzo.nl,
//   KvK 27263951. Tijden contactpagina: ma gesloten, di t/m vr 09.30-17.30, za 09.30-16.00, zo gesloten (Google gelijk).
//   Gratis oogmeting en bril-check; erkend Myopie Management Expert; brillen, zonnebrillen (ook op sterkte), brillenglazen,
//   contactlenzen (dag, maand, harde, multifocale, cilinder, nacht, hybride). Online agenda zienenzo.oo2.online (bron/site/agenda-oo2.txt).
// - Google: Opticien, 4,9 uit 86 reviews, 06 36287468 (ook WhatsApp volgens brief), nieuwste review 2 maanden oud (actief).
//   Eigenaar heet in reviews "Fedde", maar die naam staat niet op de eigen site: NIET tonen.
export const site = {
  naam: 'Zien & Zo van der Heijden',
  kort: 'Zien & Zo',
  plaats: 'Oosterhout',
  adres: 'Nieuwstraat 2',
  postcode: '4901 JH',
  tel: '0162 45 32 88',
  telHref: 'tel:+31162453288',
  mobiel: '06 36 28 74 68',
  mobielHref: 'tel:+31636287468',
  wa: 'https://wa.me/31636287468',
  mail: 'info@zienenzo.nl',
  kvk: '27263951',
  agenda: 'https://zienenzo.oo2.online/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Zien+%26+Zo+van+der+Heijden%2C+Nieuwstraat+2%2C+4901+JH+Oosterhout',
  reviews: 'https://www.google.com/maps/place/Zien+%26+Zo+van+der+Heijden/@51.6439963,4.8589245,17z/data=!3m1!4b1!4m6!3m5!1s0x47c6993783d09051:0x6f56ad966b49bb89!8m2!3d51.6439963!4d4.8589245!16s%2Fg%2F1tdqgpmd',
  google: { score: '4,9', aantal: 86 },
  themeColor: '#141312',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maandag = 1 ... zondag = 0. Uren als decimaal (9.5 = 09:30). Bron: contactpagina + Google.
export const tijden: { dag: string; kort: string; nr: number; open?: [number, number] }[] = [
  { dag: 'Maandag', kort: 'ma', nr: 1 },
  { dag: 'Dinsdag', kort: 'di', nr: 2, open: [9.5, 17.5] },
  { dag: 'Woensdag', kort: 'wo', nr: 3, open: [9.5, 17.5] },
  { dag: 'Donderdag', kort: 'do', nr: 4, open: [9.5, 17.5] },
  { dag: 'Vrijdag', kort: 'vr', nr: 5, open: [9.5, 17.5] },
  { dag: 'Zaterdag', kort: 'za', nr: 6, open: [9.5, 16] },
  { dag: 'Zondag', kort: 'zo', nr: 0 },
];
export const uur = (u: number) => `${String(Math.floor(u)).padStart(2, '0')}:${u % 1 ? '30' : '00'}`;

// Letterlijk van Google (5 sterren), ingekort met "…". Naam: voornaam + initiaal. Zonder de naam van de eigenaar.
export const reviews = [
  { naam: 'Danielle O.', wanneer: 'een jaar geleden', tekst: 'Zeer kundig en behulpzaam personeel. Nemen altijd de tijd bij de halfjaarlijkse lenzencheck en oogmetingen om echt goed te checken. Geven hierbij ook altijd een goede uitleg.' },
  { naam: 'Sabien v.', wanneer: 'een jaar geleden', tekst: 'Er is een ongedwongen sfeer. Er wordt goed advies gegeven maar de beslissing blijft bij de klant, er wordt niks opgedrongen. Fijn dat je gewoon zelf brillen uit het rek mag pakken en mag passen.' },
  { naam: 'Toon K.', wanneer: 'een jaar geleden', tekst: 'Ondanks de drukte op zaterdag werd ik toch goed geholpen. Geen haastwerk, goede professionele oogmeting. Advies voor brilleglazen niet gericht op zo hoog mogelijke prijs maar wat voor mij het meest past.' },
  { naam: 'Susan K.', wanneer: 'een jaar geleden', tekst: 'Ze nemen hier echt de tijd voor me, of ik nou voor mijn lenzencontrole kom of een nieuwe bril nodig heb. En fijn dat het een klein, vast team is, in plaats van steeds wisselende gezichten.' },
  { naam: 'Willem V.', wanneer: 'een jaar geleden', tekst: 'Al vele jaren perfecte nazorg voor mijn brillen. Nu, mijn 10 jaar oude gebroken bril perfect hersteld om niet zonder te zitten totdat de mooie nieuwe bril klaar is.' },
  { naam: 'Bonnie L.', wanneer: 'een jaar geleden', tekst: 'Fijne winkel met goede, persoonlijke service. De lenzencontrole vindt plaats met moderne apparatuur en een duidelijke uitleg over hoe het ervoor staat met de sterkte en (heel belangrijk) de gezondheid van de ogen.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Zien & Zo, ik wil graag een afspraak maken.');
