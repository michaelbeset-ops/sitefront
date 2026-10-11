// Feiten (bekeken 11 oktober 2026), bronnen in bron/:
// - Eigen site brillenbijuthuis.nl (Strato/cm4all sitebuilder; alle 5 pagina's in bron/site/*.txt + privacy-pdf's):
//   "De opticien aan huis door midden en zuid Nederland". Oogmeting kosteloos, net als het advies. Meten "ouderwets" met een pasbril.
//   Teruggave zorgverzekering. Gediplomeerde opticien, nascholing. Vertebril, leesbril, bifocale, multifocale bril, zonnebril.
//   Officieel samenwerkingspartner van Allemaal Aafje, Envida ledenservice, Thebe extra en Meander eXtra.
//   Bedrijfsgegevens: Piketberg 6, 5025 HZ Tilburg (woonwijk: alleen de plaats tonen), 06 555 77 424, brillenbijuthuis@gmail.com,
//   KvK 88768937. Tijden: homepage ma-vr 09:00-18:00, bedrijfsgegevens ma t/m vr 09:00-17:00, Google ma-do 09:00-17:00.
//   We tonen 09:00-17:00 (bedrijfsgegevens + Google).
// - Folder op Google (Van eigenaar): "Gratis oogmeting en advies bij u thuis", "Ruime keuze in monturen", "Nadien kosteloos bijstellen",
//   "Bel of mail voor een afspraak met één van onze gediplomeerde opticiens".
// - Google: Opticien, 5,0 uit 40 reviews, nieuwste een week oud (zeer actief). De naam van de opticien staat alleen in reviews,
//   niet in een eigen bron: daarom niet getoond en reviews gekozen zonder naam.
export const site = {
  naam: 'Brillen bij u thuis',
  plaats: 'Tilburg',
  werkgebied: 'midden en zuid Nederland',
  tel: '06 555 77 424',
  telHref: 'tel:+31655577424',
  wa: 'https://wa.me/31655577424',
  mail: 'brillenbijuthuis@gmail.com',
  kvk: '88768937',
  reviews: 'https://www.google.com/maps/place/Brillen+bij+u+thuis/@51.5457606,5.0663639,17z/data=!4m6!3m5!1s0x47c6bf013b26c699:0xa35ad614236c4167!8m2!3d51.5457606!4d5.0663639!16s%2Fg%2F11rz5782m6',
  google: { score: '5,0', aantal: 40 },
  themeColor: '#1d0a2a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Maandag = 1 ... zondag = 0. Bron: bedrijfsgegevens-pagina ("Maandag tot en met vrijdag van 09:00 tot 17:00 uur") en Google.
export const tijden: { dag: string; nr: number; open?: [number, number] }[] = [
  { dag: 'Maandag', nr: 1, open: [9, 17] },
  { dag: 'Dinsdag', nr: 2, open: [9, 17] },
  { dag: 'Woensdag', nr: 3, open: [9, 17] },
  { dag: 'Donderdag', nr: 4, open: [9, 17] },
  { dag: 'Vrijdag', nr: 5, open: [9, 17] },
  { dag: 'Zaterdag', nr: 6 },
  { dag: 'Zondag', nr: 0 },
];

// Letterlijk van Google (5 sterren), ingekort met "…". Naam: voornaam + initiaal. Gekozen zonder naam van de opticien.
export const reviews = [
  { naam: 'Ans S.', wanneer: '2 jaar geleden', tekst: 'Zeer vriendelijk en kundig geholpen! Fijn dat dit binnen het verzorgingshuis mogelijk was en mijn moeder in haar relaxstoel kon blijven zitten.' },
  { naam: 'Wouter B.', wanneer: 'een jaar geleden', tekst: 'Meting aan huis gehad en het was zeer vriendelijk en professioneel. … geen aankoop opgedrongen gekregen dus dat is ook zeker een plus.' },
  { naam: 'Karin T.', wanneer: '2 jaar geleden', tekst: 'De medewerker kwam netjes op tijd, was prettig in de omgang en beschikte over veel kennis. … Het is ontzettend fijn dat ze thuis of in het verpleeghuis langs komen, vooral voor minder mobiele mensen.' },
  { naam: 'Ton v.', wanneer: 'een jaar geleden', tekst: 'Absoluut 5 sterren, hele fijne, geduldige verkoper, die echt alle tijd nam in het verzorgingshuis van mijn oom. En zelfs een snelle en gratis reparatie toen zijn bril na een val kapot was gegaan.' },
  { naam: 'Beppie K.', wanneer: 'een jaar geleden', tekst: 'Ik heb bij BRILLEN BIJ U THUIS een oogmeting laten doen en brillen uitgezocht en ben daar zeer tevreden over. Fijn dat ze aan huis komen en zoveel keuze aan brillen, helemaal TOP!!' },
  { naam: 'Jo K.', wanneer: '2 jaar geleden', tekst: 'Deze week bij mijn moeder voor reparatie aan de bril en oogmeting gedaan. Zeer vriendelijk en rustig overkomend tegenover mijn moeder.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Brillen bij u thuis, ik wil graag een afspraak maken.');
