// Feiten: Google-bedrijfsprofiel "Auto-Oudewater" (bekeken 4 oktober 2026; 4,0 uit 43 reviews, Autodealer, in Tappersheul
// Business Park), hun eigen site auto-oudewater.nl (Over ons, Corvette Experience, Accessoires, Contact) en Facebook
// "Auto Oudewater" ("Totaal Corvette!!! Tevens voor verhuur."). Iepenweg 15, 3421 TW Oudewater. 06 54 62 28 84,
// info@auto-oudewater.nl. Ma t/m vr 08:30-18:00, za 09:00-16:00, zo gesloten.
export const site = {
  naam: 'Auto-Oudewater',
  straat: 'Iepenweg 15',
  postcode: '3421 TW',
  plaats: 'Oudewater',
  terrein: 'Tappersheul Business Park',
  tel: '06 54 62 28 84',
  telHref: 'tel:+31654622884',
  wa: 'https://wa.me/31654622884',
  mail: 'info@auto-oudewater.nl',
  facebook: 'https://www.facebook.com/pages/Auto-Oudewater/248130128572475',
  // Hun live voorraad (autodealers.nl-koppeling op hun eigen site). Geen aanbod verzonnen: we verwijzen ernaar.
  aanbod: 'http://www.auto-oudewater.nl/occasions/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Auto-Oudewater+Iepenweg+15+Oudewater',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Auto-Oudewater+Iepenweg+15+Oudewater',
  google: { score: '4,0', aantal: 43 },
  themeColor: '#111214',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Minuten voor het live open/dicht-label.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.30', dicht: '18.00', van: 510, tot: 1080 },
  { dag: 2, naam: 'Dinsdag', open: '08.30', dicht: '18.00', van: 510, tot: 1080 },
  { dag: 3, naam: 'Woensdag', open: '08.30', dicht: '18.00', van: 510, tot: 1080 },
  { dag: 4, naam: 'Donderdag', open: '08.30', dicht: '18.00', van: 510, tot: 1080 },
  { dag: 5, naam: 'Vrijdag', open: '08.30', dicht: '18.00', van: 510, tot: 1080 },
  { dag: 6, naam: 'Zaterdag', open: '09.00', dicht: '16.00', van: 540, tot: 960 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Uit hun eigen teksten (Over ons, Experience, Accessoires) en hun Google-foto's (motorrevisie, carbon spoiler).
export const chips = ['Corvette-occasions', 'Onderhoud en reparatie', 'Storingen oplossen', 'Nieuwe en gebruikte onderdelen', 'Carstyling', 'Scissor doors', 'Corvette Experience', 'Verhuur voor bruiloft en evenement', 'Schaalmodellen'];

// Letterlijk van Google (stand 4 oktober 2026), alleen 5-sterrenreviews. Ingekort met "…" waar aangegeven.
export const reviews = [
  { naam: 'Bj van der J.', wanneer: '2 jaar geleden', tekst: 'Ik heb hier naar alle tevredenheid een tijdje geleden een c6 gekocht. Mijn oude auto kon ik inruilen wat erg prettig was. Ik ben vriendelijk en vakkundig geholpen. … De bereikbaarheid via whatsapp is top. Heeft bovendien veel onderdelen op voorraad.' },
  { naam: 'Jeroen', wanneer: '3 maanden geleden', tekst: 'Ik heb uiteindelijk besloten een andere auto te kopen, maar wil Auto Oudewater toch graag bedanken voor de prettige ontvangst en de eerlijke communicatie. Er werd alle tijd genomen om de auto te bekijken en vragen te beantwoorden.' },
  { naam: 'Mr. Makki', wanneer: 'een jaar geleden', tekst: '… ben geweest om te kijken voor een mooie C6. Super geholpen door de zoon van de eigenaar. Nam ruim de tijd en gaf veel informatie. Buiten lekker rommelig amerikaans, binnen een hele nette showroom. Prima zaak!' },
  { naam: 'Arjan T.', wanneer: '6 jaar geleden', tekst: 'Goede service en verstand van zaken, aan het juiste adres voor de corvette' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Goedendag Auto-Oudewater, ik heb een vraag over mijn Corvette.');
