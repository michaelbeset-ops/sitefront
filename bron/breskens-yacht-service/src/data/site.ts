// Feiten (bekeken 01-10-2026). Huidige site breskensyachtservice.eu (homepage): "Refits, onderhoud en winterberging /
// 6000 m2 vorstvrije winterstallingloods / Liften en kranen tot 68 ton / Transportklaar maken / Onderdeel van het
// Schadeherstelnetwerk van Nationale Nederlanden". Menu Service & Stalling: Scheepslift, Kraan en hoogte werk, Onderhoud,
// Scheeps herstellingen, Laswerken, Draai en freeswerken, Volledige refits, Stalling binnen en buiten, Transport, Taxatie.
// Documenten: Algemene voorwaarden, Werfreglement (pdf). Voet: Middenhavendam 3, 4511 AX Breskens, tel +31 117383126,
// info@breskensyachtservice.eu. Google: Middenhavendam 1-3, 0117 383 126, 4,9 uit 15, ma-vr 08:00-17:00.
// Reviews (samengevat): onderhoudt al jaren een Grand Banks; moeilijke klussen gaan ze niet uit de weg; deskundig en snel.
export const site = {
  naam: 'Breskens Yacht Service',
  straat: 'Middenhavendam 1-3',
  postcode: '4511 AX',
  plaats: 'Breskens',
  tel: '0117 383 126',
  telHref: 'tel:+31117383126',
  mail: 'info@breskensyachtservice.eu',
  maps: 'https://www.google.com/maps/search/?api=1&query=Breskens+Yacht+Service+Middenhavendam+Breskens',
  voorwaarden: 'https://www.breskensyachtservice.eu/downloads/Voorwaarden_AVL_NED.pdf',
  werfreglement: 'https://www.breskensyachtservice.eu/downloads/Werfregelement.pdf',
  google: { score: '4,9', aantal: 15 },
  themeColor: '#1f4f9f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;

export const stallingMail = mailMet('Aanvraag winterstalling',
  'Goedendag,\n\nIk zoek een plek voor de winterstalling.\n\nBoot (merk / type): \nLengte en breedte: \nDiepgang en gewicht: \nBinnen of buiten: \nWerk dat er in de winter aan moet gebeuren: \n\nMet vriendelijke groet,\n');

export const offerteMail = mailMet('Offerteaanvraag',
  'Goedendag,\n\nGraag een offerte voor:\n\nBoot (merk / type, lengte): \nWaar ligt de boot nu: \nWat moet er gebeuren: \n\nMet vriendelijke groet,\n');

/** Het silhouet uit de kop van hun huidige site: loodsdaken, een rij masten, de kade en een toren. viewBox 0 0 240 22 */
export const silhouet =
  'M0 21 V16 Q8 10 16 16 Q24 10 32 16 V21 Z M36 21 V17 Q46 11 56 17 V21 Z M60 21 V15 L64 13 L68 15 L72 13 L76 15 L80 13 L84 15 V21 Z' +
  ' M88 21 V14 H150 V21 Z M196 21 V9 H198 V5 H202 V9 H204 V21 Z';
