// Feiten (bekeken 15 oktober 2026), bronnen in bron/:
// - Google-profiel "Riant Zonwering onderhoud en montage", categorie Leverancier van zonwering, 5,0 uit 17 reviews,
//   tel 06 16168814, tijden ma-vr 08:30-17:00, za 12:00-17:00, zo gesloten. Geen website ("Website toevoegen").
//   Adres op Google is Pelikaansingel 32 in een woonwijk (Tanthof): woonadres, dus alleen de plaats.
//   Beperkte weergave: 5 reviews leesbaar (2 tot 12 maanden oud), eigenaar reageert op reviews (laatste 2 weken geleden).
// - Geen eigen site, geen social media gevonden (Bing, bron/web). Telefoonboek-vermelding bestaat niet meer.
// - De naam "Ram" staat alleen in reviews (en als naam van een foto-uploader): niet op de site gebruikt.
export const site = {
  naam: 'Riant Zonwering',
  voluit: 'Riant Zonwering onderhoud en montage',
  plaats: 'Delft',
  tel: '06 16 16 88 14',
  telHref: 'tel:+31616168814',
  wa: 'https://wa.me/31616168814',
  google: { score: '5,0', aantal: 17 },
  reviews: 'https://www.google.com/maps/place/Riant+Zonwering+onderhoud+en+montage/@51.9816704,4.3655365,17z/data=!4m6!3m5!1s0x47c5b54d8182207f:0xd53bf80767df846!8m2!3d51.9816704!4d4.3655365!16s%2Fg%2F11lynqq0h5',
  themeColor: '#142019',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van Google. Index 0 = zondag (zoals Date.getDay()).
export const tijden: { dag: string; open?: string; dicht?: string }[] = [
  { dag: 'Zondag' },
  { dag: 'Maandag', open: '08:30', dicht: '17:00' },
  { dag: 'Dinsdag', open: '08:30', dicht: '17:00' },
  { dag: 'Woensdag', open: '08:30', dicht: '17:00' },
  { dag: 'Donderdag', open: '08:30', dicht: '17:00' },
  { dag: 'Vrijdag', open: '08:30', dicht: '17:00' },
  { dag: 'Zaterdag', open: '12:00', dicht: '17:00' },
];

// Letterlijk van Google (alle 5 sterren). Ingekort met "…" waar de voornaam van de eigenaar of een groet stond.
export const reviews = [
  { naam: 'Dick d.H.', wanneer: '2 maanden geleden', tekst: 'Afgelopen zondag ging ons 25jaar+ knikarmscherm niet meer open. Gevreesd werd dat deze overleden was. Gegoogled naar een reparateur in de buurt en uitgekomen bij Riant. … Vanwege de bereikbaarheid op zondag, en de snelle acties vind ik dit een 5 sterren wel verdient!' },
  { naam: 'Ronald V.', wanneer: '4 maanden geleden', tekst: 'Mijn 16 jaar oude zonnescherm had een defecte arm, vakkundig en snel gerepareerd. Ook nog eens perfect afgesteld en schoongemaakt en dat alles voor een hele nette prijs. Ik ben zeer tevreden, blij mee!' },
  { naam: 'Pieter v.C.', wanneer: '2 maanden geleden', tekst: '… Strak gemonteerd zonnescherm. Komt afspraken keurig na, werkt netjes en gaat pas weg als alles keurig hangt en werkt! Absolute aanrader' },
  { naam: 'Petra', wanneer: '2 maanden geleden', tekst: 'Zeer tevreden! Na de gestelde vraag is op korte termijn n afspraak gemaakt. Het draaimechanisme was kapot. En werd vervangen door een elektrische. Netjes gewerkt en vriendelijke man!' },
  { naam: 'Denise H.', wanneer: 'een jaar geleden', tekst: 'Wij zijn zeer tevreden wegens de goede service! De kleur van de screens zijn op kleur gemaakt van het gebouw. De screens zijn super strak, echt een prachtige aanwinst! …' },
];

// Keuzes in de schermcheck: alleen soorten en klachten die in hun reviews of profiel staan.
export const soorten = ['Zonnescherm', 'Knikarmscherm', 'Screens', 'Weet ik niet'];
export const klachten = [
  'Gaat niet meer open',
  'Arm is defect',
  'Draaimechanisme kapot',
  'Liever elektrisch bedienen',
  'Onderhoud: afstellen, smeren, schoonmaken',
  'Nieuw laten monteren',
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Riant Zonwering, ik heb een vraag over mijn zonwering.');
