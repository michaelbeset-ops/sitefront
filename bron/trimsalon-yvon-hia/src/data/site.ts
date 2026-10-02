// Feiten (opgehaald 2 oktober 2026):
// - Google-bedrijfsprofiel "Trimsalon Yvon": Dierentrimmer, Paulusweg 79, 3341 CT Hendrik-Ido-Ambacht, 06 38200595,
//   ma t/m vr 09:00-17:00, za en zo gesloten, 5,0 uit 7 reviews, geen website. Reviews: bron/google-reviews.json.
// - Facebook-pagina facebook.com/61554935322302: "Gediplomeerd en aangesloten bij abhb", Huisdierentrimsalon, berichten
//   t/m 21 januari 2026 (geslaagd 30-10-2024, Neva 29-10-2024, Jaxx 5-11-2024, rassen-week 18-10-2024,
//   snuffelmatten + prijslijst 20-12-2025, logo 31-05-2025).
// - KvK 92361455: oozo.nl (bedrijfsgegevens Trimsalon Yvon, Paulusweg 79).
// Let op: trimsalonyvon.nl en Instagram @trimsalon_yvon zijn ANDERE zaken (Zandeweer en Schijndel), niet gebruikt.
export const site = {
  naam: 'Trimsalon Yvon',
  straat: 'Paulusweg 79',
  postcode: '3341 CT',
  plaats: 'Hendrik-Ido-Ambacht',
  tel: '06 38 20 05 95',
  telHref: 'tel:+31638200595',
  wa: 'https://wa.me/31638200595',
  kvk: '92361455',
  google: { score: '5,0', aantal: 7 },
  facebook: 'https://www.facebook.com/61554935322302',
  maps: 'https://www.google.com/maps/search/?api=1&query=Trimsalon+Yvon+Paulusweg+79+Hendrik-Ido-Ambacht',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Trimsalon+Yvon+Hendrik-Ido-Ambacht',
  themeColor: '#2a1c18',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.00', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Wat Yvon laat zien op Facebook: wassen, föhnen, trimmen (Jaxx), puppytrimbeurt (Neva), veel verschillende rassen,
// snuffelmatten en fleecetouwen. Knippen en "lastige vachten" komen uit de Google-reviews.
export const chips = ['Wassen', 'Föhnen', 'Trimmen', 'Knippen', 'Puppytrimbeurt', 'Alle soorten vachten', 'Snuffelmatten', 'Fleecetouwen'];

// Letterlijk van Google (stand 2 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Ben J.', wanneer: '6 maanden geleden', tekst: 'Yvon is betaalbaar, vriendelijk, probeert een oplossing te zoeken als ik de afspraak was vergeten. Marly laat ik nu al meer dan een jaar knippen bij Yvon. Ze komt altijd erg mooi terug. Yvon weet hoe ze een goldendoodle moet knippen.' },
  { naam: 'Jan v. G.', wanneer: 'een jaar geleden', tekst: 'Onze dwergschnauzer, dus niet de makkelijkste, huppelt altijd vrolijk naar binnen als poetskatoen. Komt later volledig naar wens gemodelleerd weer buiten. Yvon, met je vrolijk humeur, vaardige trimhanden en gezellige babbel, we zijn helemaal blij met je !' },
  { naam: 'Romyvalentina', wanneer: '10 maanden geleden', tekst: 'Onze hond Boeffie komt altijd met veel plezier bij Yvon! Met zijn vacht is het best een uitdaging om het mooi te knippen, maar Yvon maakt hem echt heel mooi!! Perfect geknipt , heel tevreden !! …' },
  { naam: 'Patrick S.', wanneer: '2 jaar geleden', tekst: 'Super vriendelijk en snel geholpen. Onze hond zag er super uit. Heel erg tevreden.' },
  { naam: 'Mariska O.', wanneer: 'een jaar geleden', tekst: 'De allerliefste en geduldigste met Kaylen ❤️' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hallo Yvon, ik wil graag een afspraak maken voor mijn hond.');
