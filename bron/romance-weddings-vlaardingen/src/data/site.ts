// Feiten (bekeken 6 oktober 2026), bewijs in bron/:
// - Eigen site https://romanceevents.nl (Adobe Muse, laatst gewijzigd 24 sep 2026): "Partycentrum Romance", twee zalen in
//   Victoriaanse stijl, elk 200 zittend en tot 300 staand; kroonluchters; catering kan geregeld worden; "álle feesten:
//   bruiloften, verlovingen, henna-avonden, verjaardagen, jubilea, zakelijke events"; LED-dansvloer; meedenken over
//   entertainment, decoratie, catering; Koningin Wilhelminahaven ZZ 13, 3134 KG Vlaardingen; bereikbaar via A13, A20, A15,
//   A4; voldoende gratis parkeergelegenheid; 06 38 31 31 31; hello@romanceevents.nl; reserveren-pagina met WhatsApp-
//   aanvraag (datum, soort feest, 1 of 2 zalen, naam, aantal gasten).
// - Algemene voorwaarden op de site: Partycentrum Romance B.V., Kon. Wilhelminahaven Zuidwestzijde 13, KvK 72660341.
// - Google-bedrijfsprofiel "Romance Weddings&Events" (Partycentrum): 4,3 uit 108 reviews, 06 38313131, niet geclaimd.
// Geen Facebook of Instagram gevonden (niet op de site, niet op het Google-profiel).
export const site = {
  naam: 'Romance Weddings & Events',
  kort: 'Romance',
  bv: 'Partycentrum Romance B.V.',
  kvk: '72660341',
  straat: 'Koningin Wilhelminahaven ZZ 13',
  postcode: '3134 KG',
  plaats: 'Vlaardingen',
  tel: '06 38 31 31 31',
  telHref: 'tel:+31638313131',
  wa: 'https://wa.me/31638313131',
  mail: 'hello@romanceevents.nl',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Koningin+Wilhelminahaven+ZZ+13,+3134+KG+Vlaardingen',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Romance+Weddings+and+Events+Vlaardingen',
  voorwaarden: 'https://romanceevents.nl/algemene-voorwaarden.html',
  google: { score: '4,3', aantal: 108 },
  themeColor: '#fffdfc',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (5 sterren, stand 6 oktober 2026), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Youssra M.', rol: 'trouwfotografe', tekst: 'Ik werk altijd vol plezier in deze mooie zaal als trouwfotografe. Onlangs hebben ze ook een nieuwe vloer erin gezet, wat het helemaal catchy maakt! Eigenaren zeer sympathiek (ook de gastvrouw). … Leuke zaal om te boeken als koppel!' },
  { naam: 'Hina T.', tekst: 'Hele mooie knusse trouwhal/zaal/restaurant. … Zeker een hele mooie plek.' },
  { naam: 'Akash S.', tekst: 'Hele leuke en mooie zaal. De perfecte plek om een leuk feest te geven' },
  { naam: 'Hamid A.', tekst: 'top zaal goed georganiseerd aanrader goeie prijzen' },
];

export const feesten = ['Bruiloft', 'Verloving', 'Henna-avond', 'Verjaardag', 'Jubileum', 'Zakelijk event', 'Ander feest'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Romance, ik heb een vraag over een feest in jullie zaal.');
