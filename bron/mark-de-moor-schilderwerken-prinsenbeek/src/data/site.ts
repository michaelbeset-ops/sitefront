// Feiten: huidige website markdemoor.nl (alle pagina's bekeken 4 oktober 2026: inleiding, onderhoud, renoveren, advisering,
// oude schilders technieken, spuitwerk, wandbekleding, kitwerkzaamheden, fotoalbum, contact) en het Google-bedrijfsprofiel
// "Mark de Moor Schilderwerken" (5,0 uit 11 reviews; ma t/m vr 09:00-17:00, za en zo gesloten).
// Pastoor Oomenlaan 7, 4841 XA Prinsenbeek. 06 27485879, info@markdemoor.nl. KvK 20136209.
// Werkgebied: Prinsenbeek, Breda, Etten-Leur, Ulvenhout, Rijsbergen (beschrijving en trefwoorden van hun huidige site).
export const site = {
  naam: 'Mark de Moor Schilderwerken',
  kort: 'Mark de Moor',
  straat: 'Pastoor Oomenlaan 7',
  postcode: '4841 XA',
  plaats: 'Prinsenbeek',
  tel: '06 27 48 58 79',
  telHref: 'tel:+31627485879',
  wa: 'https://wa.me/31627485879',
  mail: 'info@markdemoor.nl',
  kvk: '20136209',
  maps: 'https://www.google.com/maps/search/?api=1&query=Mark+de+Moor+Schilderwerken+Pastoor+Oomenlaan+7+Prinsenbeek',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Mark+de+Moor+Schilderwerken+Prinsenbeek',
  google: { score: '5,0', aantal: 11 },
  motto: 'Voor al uw schilderwerk wat iets meer aandacht nodig heeft',
  werkgebied: ['Prinsenbeek', 'Breda', 'Etten-Leur', 'Ulvenhout', 'Rijsbergen'],
  merken: 'Sikkens, Sigma, Wijzonol en Herfst & Helder',
  themeColor: '#1b1813',
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

// De werkzaamheden zoals ze op hun huidige site staan.
export const chips = ['Onderhoudsschilderwerk', 'Houtrot herstellen', 'Meerjarenonderhoud', 'Glas in lood', 'Letters penselen', 'Marmerimitatie', 'Vergulden'];

// Letterlijk van Google (stand 4 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'R. Potters', wanneer: '2 maanden geleden', tekst: 'Mark heeft ons jaren 30 huis geschilderd aan de buitenzijde. Zeer kundig en dus ook met een prachtig resultaat. Mark heeft veel ervaring in het schilderen van ‘oude’ panden en dat is zichtbaar. …' },
  { naam: 'Simone K.', wanneer: '8 maanden geleden', tekst: 'Mark doet al jaren al ons schilderwerk tot grote tevredenheid. Zowel de binnen- als de buitenkant. Onze bruine keuken heeft hij omgetoverd tot een moderne lichte keuken. Hij adviseert, repareert en laat alles netjes achter. Helemaal top' },
  { naam: 'Deem V.', wanneer: '8 maanden geleden', tekst: 'Vanwege een waterschade heeft Mark de schilderwerkzaamheden binnen uitgevoerd. Hij is niet alleen betrouwbaar, maar hij luistert ook heel duidelijk naar je wensen. Hij is op en top een vakman. …' },
  { naam: 'Caroline K.', wanneer: 'een jaar geleden', tekst: 'Mark heeft ons buitenschilderwerk uitstekend verzorgd. Hij werkt netjes en doorlopend en gaf nuttige tips en adviezen. Wij raden hem van harte aan!' },
  { naam: 'Simone v. A.', wanneer: '2 jaar geleden', tekst: 'Mark heeft bij ons de volledige beneden verdieping geschilderd, hij werkt erg netjes, denkt goed mee en is prettig in contact. We zijn erg tevreden!' },
  { naam: 'Jeroen R.', wanneer: 'een jaar geleden', tekst: 'Hij heeft bij ons het buitenschilderwerk gedaan. Uitstekende vakman en hij komt zijn afspraken na.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag Mark, ik wil graag een offerte voor schilderwerk.');
