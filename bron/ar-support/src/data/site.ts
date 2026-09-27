// Feiten van ar-support.nl (home, ontstoppen, ontstoppingsbedrijf, riool-ontstoppen, reparatie en aanleg,
// camera-inspectie, riool check-up, rioollucht, rioolproblemen, apparatuur, contact, offerte) en het
// Google-profiel (4,8 uit 5, 29 reviews). Tarieven komen van de oude site en moeten nog bevestigd worden.
export const site = {
  naam: 'AR-Support',
  straat: 'Lekdijk 406',
  postcode: '2957 VB',
  plaats: 'Nieuw-Lekkerland',
  tel: '06 51 04 77 14',
  telHref: 'tel:+31651047714',
  whatsapp: 'https://wa.me/31651047714',
  mail: 'info@ar-support.nl',
  kvk: '54538270',
  themeColor: '#0f1f2b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const afvoeren = [
  'Toilet (wc)', 'Keukenafvoer', 'Douche- en badafvoer', 'Wasmachineafvoer', 'Cv-afvoer',
  'Hemelwaterafvoer', 'Putten', 'Overig sanitair', 'Rioleringen',
];

export const reparaties = [
  'Buitenriolering repareren of aanleggen',
  'Binnenriolering repareren of aanleggen',
  'Hemelwaterafvoer (regenafvoer) repareren of aanleggen',
  'Nieuwe afvoeren in en om het huis',
  'Riool en afvoer beugelen in de kruipruimte',
  'Oude gresbuis vervangen door pvc',
];

export const cameraWanneer = [
  'Terugkerende verstoppingen', 'Wortelgroei in het riool', 'Een keukenafvoer die steeds verstopt raakt',
  'Een onverklaarbare verstopping', 'Een bouw- of constructiefout', 'Een vreemde geur in huis',
  'Geborrel in het leidingstelsel', 'Verzakking van de straat boven het riool', 'De staat van het riool beoordelen',
];

export const checkup = [
  { naam: 'Rookmachine', tekst: 'We testen de dichtheid van het riool en sporen niet zichtbare lekkages en mogelijke stank op.' },
  { naam: 'Camera', tekst: 'We bekijken de riolering van binnen: verzakkingen, wortelingroei, breuken en verbindingen.' },
  { naam: 'Afschot', tekst: 'Waar mogelijk gaan we de kruipruimte in, meten het afschot en controleren de beugels.' },
  { naam: 'Eindrapport', tekst: 'U krijgt een rapport met de bevindingen en aandachtspunten. Is er iets mis, dan lossen we het op.' },
];

export const signalen = [
  'Geborrel of andere rare geluiden uit de afvoer',
  'Rioolstank in huis',
  'Water of een vreemde lucht in de kruipruimte',
  'Wc, keuken en badkamer tegelijk verstopt',
  'Sporen van lekkage bij verbindingen in de kruipruimte',
  'Vaker dan eens per jaar dezelfde verstopping',
];

export const werkgebied = [
  'Alblasserdam', 'Barendrecht', 'Capelle aan den IJssel', 'Dordrecht', 'Gouda', 'Groot-Ammers',
  'Hardinxveld-Giessendam', 'Heerjansdam', 'Hendrik-Ido-Ambacht', 'Krimpen aan de Lek', 'Krimpen aan den IJssel',
  'Nieuwerkerk aan den IJssel', 'Papendrecht', 'Ridderkerk', 'Rotterdam', 'Schiedam', 'Streefkerk', 'Zwijndrecht',
];
