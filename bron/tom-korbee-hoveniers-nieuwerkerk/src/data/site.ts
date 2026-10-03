// Feiten: tomkorbee.nl (alle pagina's, bron/site-tekst.txt), Google-bedrijfsprofiel "Tom Korbee Hoveniers" (bekeken 3 oktober 2026;
// 5,0, ma t/m vr 08:00-17:00), KvK 24379972 (eenmanszaak, ingeschreven). Zie bron/google-en-overig.txt.
// Adres: Robertskruid 4 is het factuur-/KvK-adres in een woonstraat; daarom alleen plaats + werkgebied.
export const site = {
  naam: 'Tom Korbee Hoveniers',
  plaats: 'Nieuwerkerk aan den IJssel',
  regio: 'de Zuidplas',
  tel: '06 24 47 27 84',
  telHref: 'tel:+31624472784',
  wa: 'https://wa.me/31624472784',
  mail: 'info@tomkorbee.nl',
  kvk: '24379972',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Tom+Korbee+Hoveniers+Nieuwerkerk+aan+den+IJssel',
  google: { score: '5,0' },
  themeColor: '#13201a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Bereikbaar volgens het Google-profiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Onderdelen van de aanleg, letterlijk de opsomming op hun aanlegpagina.
export const onderdelen = ['Bestrating', 'Beplanting', 'Houtconstructies', 'Vijvers', 'Gazons', 'Verlichting', 'Beregening', 'Drainage'];

// Reviews en referenties, letterlijk (ingekort met "…"). De eerste staat op Google, de rest op hun eigen site
// (tomkorbee.nl/ref_overzicht.html), namen ingekort.
export const reviews = [
  { naam: 'Remko B.', bron: 'Google review', wanneer: 'een jaar geleden', tekst: 'Een professionele hovenier die met je meedenkt om tot het best mogelijke resultaat te komen. Naast een erg prettige samenwerking was ons tuinproject ook snel, vakkundig en prachtig afgehandeld.' },
  { naam: 'Jan O.', bron: 'Tuin- en landschapsarchitect', tekst: '… zo kritisch als ik ben, ben ik thans ook een zeer tevreden klant. Jullie inzet is enthousiast, professioneel, flexibel en ‘meedenkend’ …' },
  { naam: 'Familie B.', bron: 'Referentie', tekst: 'In drie dagen hebben ze onze tuin gerenoveerd. … Langs de rand van het pad een donkere tegel als contrast, zoals Tom ons geadviseerd had. … Supernetjes.' },
  { naam: 'Joyce v. D.', bron: 'Referentie', tekst: 'Wij hebben Tom Korbee Hoveniers ingeschakeld voor de aanleg van een nieuw terras en een regenwaterafvoer en zijn zeer tevreden. De werkwijze is snel, efficient, flexibel en netjes.' },
  { naam: 'Familie V.', bron: 'Referentie', tekst: 'Aan een half woord heeft hij genoeg. Hij en zijn team zorgen ervoor dat onze tuin netjes blijft. … Kortom hoveniers die met je meedenken, initiatief nemen en doen wat ze beloven!' },
  { naam: 'Familie E.', bron: 'Referentie', tekst: 'Het resultaat heeft ons aangenaam verrast en onze buren ook. We krijgen veel positieve reacties over onze mooie tuin. Wij zijn er hartstikke trots op!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Hallo Tom, ik heb een vraag over mijn tuin.');
