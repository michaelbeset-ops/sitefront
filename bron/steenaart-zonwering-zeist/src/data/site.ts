// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site steenaartzonwering.nl (1 pagina, Last-Modified 21-06-2023): "Uw specialist in buitenzonwering en rolluiken",
//   jarenlange ervaring in zonwering en rolluiken, zonweringfolie, referenties (24 foto's), r.steenaart@gmail.com, 06-11392688.
// - Archief eigen site 2019: "Welkom op de website van Robin Steenaart" (eigenaarsnaam).
// - Google-profiel: Comeniuslaan 103 Zeist (woonadres? alleen plaats tonen), 4,7 uit 11, ma t/m za 10:00-17:00, zo gesloten.
export const site = {
  naam: 'Steenaart Zonwering en Rolluiken',
  kort: 'Steenaart Zonwering',
  eigenaar: 'Robin Steenaart',
  plaats: 'Zeist',
  tel: '06 11 39 26 88',
  telHref: 'tel:+31611392688',
  wa: 'https://wa.me/31611392688',
  mail: 'r.steenaart@gmail.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=Steenaart+Zonwering+en+Rolluiken+Zeist',
  google: { score: '4,7', aantal: 11 },
  themeColor: '#1b1d1f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Google: maandag t/m zaterdag 10:00-17:00, zondag gesloten. Index = Date.getDay() (0 = zondag).
export const tijden: [string, string | null][] = [
  ['Zondag', null], ['Maandag', '10:00 - 17:00'], ['Dinsdag', '10:00 - 17:00'], ['Woensdag', '10:00 - 17:00'],
  ['Donderdag', '10:00 - 17:00'], ['Vrijdag', '10:00 - 17:00'], ['Zaterdag', '10:00 - 17:00'],
];

// Letterlijk van Google (5 sterren, stand 8 oktober 2026), ingekort met "…". Geen datums (meeste reviews zijn oud).
export const reviews = [
  { naam: 'Ronald W.', tekst: 'Robin en collega hebben ons geholpen met het repareren van een kapotte knikarm van ons zonnescherm. Communicatie en uitvoering was meer dan uitstekend!' },
  { naam: 'Dave V.', tekst: 'Vandaag door Robin 3 rolluiken laten monteren waarvan 1 op solar. Zeer vriendelijk, netjes en snel gemonteerd en een goede uitleg.' },
  { naam: 'Hans H.', tekst: 'Vandaag heeft Robin de doeken vernieuwd van onze zonneschermen die hij 16 jaar geleden heeft geplaatst. Toppie, snel en vakkundig gedaan!' },
  { naam: 'Joost B.', tekst: 'Vakman, betrouwbaar, snelle communicatie en dat ook voor een correcte nette prijs. Bedankt!' },
  { naam: 'Jeanine E.', tekst: 'Uitstekend geholpen met reparatie rolluik!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Robin, ik heb een vraag over zonwering.');
