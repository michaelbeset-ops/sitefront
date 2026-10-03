// Feiten: perfixt.weebly.com (home, PERFIXT, Onze diensten, Contact; bekeken 3 oktober 2026), Google-bedrijfsprofiel
// "PERFIXT Aannemersbedrijf" (5,0 uit 10 reviews; ma t/m za 09:00-18:00, zondag gesloten) en KvK 65122917
// (Company.info, bron KVK 24-03-2026). Contactpersoon op hun site: Martin, martin@perfixt.nl.
export const site = {
  naam: 'PERFIXT Aannemersbedrijf',
  kort: 'PERFIXT',
  eigenaar: 'Martin',
  straat: 'Van den Houtstraat 8',
  postcode: '4921 EX',
  plaats: 'Made',
  tel: '06 26 44 59 82',
  telHref: 'tel:+31626445982',
  wa: 'https://wa.me/31626445982',
  mail: 'martin@perfixt.nl',
  kvk: '65122917',
  maps: 'https://www.google.com/maps/search/?api=1&query=PERFIXT+Aannemersbedrijf+Van+den+Houtstraat+8+Made',
  reviews: 'https://www.google.com/maps/search/?api=1&query=PERFIXT+Aannemersbedrijf+Made',
  google: { score: '5,0', aantal: 10 },
  themeColor: '#0f2129',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.00', dicht: '18.00' },
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '18.00' },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '18.00' },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '18.00' },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '18.00' },
  { dag: 6, naam: 'Zaterdag', open: '09.00', dicht: '18.00' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Diensten zoals op hun eigen site (homepage-lijst + "Onze diensten").
export const chips = ['Verbouw en aanbouw', 'Reparatie en onderhoud', 'Stucwerk', 'Timmerwerk', 'Tegelzetten', 'Sanitair', 'Schilderwerk', 'Elektra', 'Installatiewerk', 'Vloeren'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Marieke L.', wanneer: 'een jaar geleden', tekst: 'Wij hebben al meerdere verbouwingen laten uitvoeren door Perfixt. Dus dat we tevreden zijn, spreekt voor zich! Martin is zeer vakkundig, geeft goed advies en denkt op alle fronten mee. Er wordt netjes en hard gewerkt en iedereen is vriendelijk.' },
  { naam: 'Frederike Q.', wanneer: 'een jaar geleden', tekst: '… in deze tijd zo’n nauwkeurige eerlijke aannemer vinden die trots haalt uit een nette afwerking mag een wonder heten. Wij hebben een flinke verbouwing van ons huis achter de rug (zomer 2025) met Perfixt.' },
  { naam: 'Lieke S.', wanneer: '6 maanden geleden', tekst: 'Zeer tevreden over meerdere verbouwingen. Plezierig in de omgang en zeer goede vakmensen!' },
  { naam: 'Bart D.', wanneer: '4 jaar geleden', tekst: '200% tevreden! wat een vakwerk hebben jullie geleverd. Martin en zijn team staan in voor hun werk en leveren enkel kwaliteit!' },
  { naam: 'Erika M.', wanneer: '6 jaar geleden', tekst: 'Martin’s stucadoor heeft … in onze kamer een wand en het plafond gestuct. In 1,5 dag was het klaar. Superstrak werk geleverd. … het is vakwerk.' },
  { naam: 'Christian T.', wanneer: '', tekst: 'Vakmanschap, klant vriendelijk en komt zijn afspraken na.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag Martin, ik wil graag een vrijblijvende offerte aanvragen.');
