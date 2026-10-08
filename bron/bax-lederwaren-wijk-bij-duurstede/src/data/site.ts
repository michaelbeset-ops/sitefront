// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron (google.txt):
// - Google-profiel "Bax Lederwaren, Hoeden en Petten": Peperstraat 48, 3961 AT Wijk bij Duurstede, 06 53707913,
//   4,9 uit 38 reviews, website-knop = facebook.com. Tijden: wo-vr 10:00-17:30, za 10:00-17:00, zo-di gesloten.
//   Eigenaarsreacties ondertekend "Alexander Bax".
// - Instagram @baxluxelederwaren, bio: "Alexander Bax en Stefka Cankov / Bax Lederwaren hoeden en petten".
// - Facebook baxluxelederwaren: e-mail alexander@baxluxelederwaren.nl, intro "ruime keus aan lederen tassen, sjaals, lederen han(dschoenen)".
export const site = {
  naam: 'Bax Lederwaren, Hoeden en Petten',
  kort: 'Bax',
  eigenaren: 'Alexander Bax en Stefka Cankov',
  straat: 'Peperstraat 48',
  postcode: '3961 AT',
  plaats: 'Wijk bij Duurstede',
  tel: '06 53 70 79 13',
  telHref: 'tel:+31653707913',
  wa: 'https://wa.me/31653707913',
  mail: 'alexander@baxluxelederwaren.nl',
  facebook: 'https://www.facebook.com/baxluxelederwaren',
  instagram: 'https://www.instagram.com/baxluxelederwaren/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Bax+Lederwaren+Peperstraat+48+Wijk+bij+Duurstede',
  google: { score: '4,9', aantal: 38, url: 'https://www.google.com/maps/search/?api=1&query=Bax+Lederwaren+Hoeden+en+Petten+Wijk+bij+Duurstede' },
  themeColor: '#1d2024',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van Google (0 = zondag). null = gesloten.
export const tijden: { dag: string; van: string | null; tot: string | null }[] = [
  { dag: 'zondag', van: null, tot: null },
  { dag: 'maandag', van: null, tot: null },
  { dag: 'dinsdag', van: null, tot: null },
  { dag: 'woensdag', van: '10:00', tot: '17:30' },
  { dag: 'donderdag', van: '10:00', tot: '17:30' },
  { dag: 'vrijdag', van: '10:00', tot: '17:30' },
  { dag: 'zaterdag', van: '10:00', tot: '17:00' },
];

// Merken die op hun eigen foto's en in reviews te zien zijn.
export const merken = ['Stetson', 'Bronte', 'Peaky Blinders', 'Spikes & Sparrow', 'effio', 'Camps & Camps'];

// Letterlijk van Google (stand 8 oktober 2026), ingekort met "…". Achternaam als initiaal.
export const reviews = {
  groot: { naam: 'Elena B.', tekst: 'Een mooie authentieke winkel met een uitstekende service! Assortiment van hoeden is groter dan bij Bijenkorf.' },
  los: [
    { naam: 'John', tekst: 'Petten in alle maten, van goede merken. Aardige eigenaar, die ruim de tijd neemt om te adviseren, en mee te denken.' },
    { naam: 'Henk J.', tekst: 'Meerdere malen langs gelopen, toch maar een keer naar binnen gegaan. Verbaasd over de grote keuze. … Geweldige uitleg. Geen moeite teveel.' },
    { naam: 'Jan S.', tekst: 'Een mooie winkel met een grote keuze aan hoeden en petten … Vriendelijke eigenaar …' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Alexander, ik heb een vraag over iets in de winkel.');
