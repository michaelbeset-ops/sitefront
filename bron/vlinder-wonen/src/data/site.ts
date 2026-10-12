// Feiten (bekeken 12 en 13 oktober 2026), bronnen in bron/:
// - Google-profiel "Vlinder Wonen", Meubelwinkel, 5,0 uit 15 reviews, Breestoep 3, 3201 EH Spijkenisse,
//   "Gevestigd in: Stadsplein Shopping Center", 06 83110704, Winkelbezoek mogelijk, Ophalen in de winkel, Bezorging.
//   Tijden: ma gesloten, di/wo/vr 10:00-17:30, do 10:00-20:00, za 10:00-17:00, zo gesloten.
// - Website vlinderwonen.nl staat te koop bij GoDaddy (bron/web). Archief tot jan 2026: categorieen Bedden & Boxspring,
//   Banken, Kasten & Opberging, Tafels & Stoelen; Bambi-boxsprings "met opbergruimte"; pocketvering, visco traagschuim.
// - Instagram @vlinderwonen (actief, laatste post 12-10-2026): "Alles voor thuis. Onder één dak.", laminaat, PVC-vloeren,
//   gordijnen, plissé, lamellen, tapijten en vloerkleden, traprenovatie, hoekbanken met opbergruimte, matrassen.
// - Logo (Google, van eigenaar): "Vlinder Wonen, Vrede in vorm en kleur".
// - E-mail staat op het verlopen domein: niet getoond. Eigenaarsnaam staat in geen eigen bron: niet getoond.
export const site = {
  naam: 'Vlinder Wonen',
  plaats: 'Spijkenisse',
  straat: 'Breestoep 3',
  postcode: '3201 EH',
  centrum: 'winkelcentrum Stadsplein',
  tel: '06 83 11 07 04',
  telHref: 'tel:+31683110704',
  wa: 'https://wa.me/31683110704',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Vlinder+Wonen%2C+Breestoep+3%2C+3201+EH+Spijkenisse',
  reviews: 'https://www.google.com/maps/place/Vlinder+Wonen/@51.8492017,4.3272794,17z/data=!4m6!3m5!1s0x47c449585de49201:0xa6d64e1a062593ab!8m2!3d51.8492017!4d4.3272794!16s%2Fg%2F11y6b7qhh_',
  instagram: 'https://www.instagram.com/vlinderwonen/',
  facebook: 'https://www.facebook.com/vlinderwonen/',
  google: { score: '5,0', aantal: 15 },
  themeColor: '#0c1324',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van Google. Index 0 = zondag. [van, tot] in uren, null = gesloten.
export const tijden: ([number, number] | null)[] = [null, null, [10, 17.5], [10, 17.5], [10, 20], [10, 17.5], [10, 17]];
export const dagNamen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
export const uur = (u: number) => `${Math.floor(u)}.${u % 1 ? '30' : '00'}`;

// Letterlijk van Google (alle 5 sterren). Naam: voornaam + initiaal. "…" = ingekort.
export const reviews = [
  { naam: 'Feden T.', wanneer: '3 maanden geleden', tekst: 'Wij zijn ontzettend tevreden met de bedden die wij bij Vlinder Wonen hebben gekocht. De kwaliteit van de producten heeft onze verwachtingen overtroffen. … Hij nam de tijd om al onze vragen te beantwoorden en gaf eerlijk en deskundig advies, waardoor wij met vertrouwen de juiste keuze konden maken.' },
  { naam: 'Carishma D.', wanneer: '3 weken geleden', tekst: 'Wij zijn ontzettend tevreden met onze nieuwe PVC vloer! Het bedrijf heeft de vloer door ons hele huis gelegd en het eindresultaat is echt prachtig geworden. Er is netjes en vakkundig gewerkt, met veel aandacht voor de afwerking en details. …' },
  { naam: 'Sha', wanneer: 'een jaar geleden', tekst: '… Pas een mooie velvet hoekbank gekocht en dik tevreden. De bank is van goede kwaliteit en supermooi. Net wat luxer als de standaardbanken die je overal ziet. En de bank was direct leverbaar. …' },
  { naam: 'Jan Kees D.', wanneer: 'een jaar geleden', tekst: 'Door de mooie etalage uitgenodigd om naar binnen te gaan door de verkoper prima geholpen. Bed merk Bambi gekozen met handige opbergruimte onder het bed. Levertijd afgesproken en netjes gebracht en in elkaar gemonteerd …' },
  { naam: 'Ivanescu D.', wanneer: 'een jaar geleden', tekst: 'Kwalitatief hoogwaardige producten, zeer vriendelijke verkoper. Ik had twee grote bedden besteld, die niet door de smalle trap pasten. Hij heeft er alles aan gedaan om ze in de slaapkamers te krijgen. …' },
  { naam: 'Mehmet Ş.', wanneer: '2 jaar geleden', tekst: 'Deze plek is prachtig. De producten zijn van zeer hoge kwaliteit en betaalbaar. Een schone en nette zaak. De verkoper is erg aardig en behulpzaam. …' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Vlinder Wonen, ik heb een vraag.');
