// Feiten (bekeken 3 oktober 2026):
// - Google-bedrijfsprofiel "Termoshuizen-Timmerwerken, aannemersbedrijf": 5,0 uit 3 reviews, Plataan 3, 2671 PX Naaldwijk,
//   06 54243967, ma-vr 07:00-21:00, za 09:00-16:00, zo gesloten. 12 foto's (projecten + bedrijfsbus).
// - KvK 54066654, eenmanszaak, hoofdvestiging Plataan 3 Naaldwijk, "Aannemersbedrijf op het gebied van de burgerlijke- en
//   utiliteitsbouw" (kvk.nl). Oprichting 02-04-1997 (timmerman-nu.nl, klopt met oude site).
// - Facebook TermoshuizenTimmerwerkenAannemersbedrijf: "Nieuwbouw, Verbouw, Onderhoud, Renovatie".
// - Huidige site (Home.html): alleen "Deze site is momenteel onder constructie", met adres, 06 en johan@-mail.
// - Oude site via web.archive.org (2003/2013): "in 1997 gestart als een onderhoudsbedrijf op het gebied van timmerwerken in
//   Pijnacker", "uitgegroeid tot een volledig aannemersbedrijf", "particulieren als bedrijven", "allerlei werkzaamheden aan,
//   welke niet onder een noemer te vatten zijn", "kosteloos een vrijblijvende offerte", "Neem contact met ons op voor een afspraak".
export const site = {
  naam: 'Termoshuizen Timmerwerken',
  sub: 'aannemersbedrijf',
  eigenaar: 'Johan',
  straat: 'Plataan 3',
  postcode: '2671 PX',
  plaats: 'Naaldwijk',
  tel: '06 54 24 39 67',
  telHref: 'tel:+31654243967',
  wa: 'https://wa.me/31654243967',
  mail: 'johan@termoshuizen-timmerwerken.nl',
  kvk: '54066654',
  sinds: 1997,
  facebook: 'https://www.facebook.com/TermoshuizenTimmerwerkenAannemersbedrijf/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Termoshuizen-Timmerwerken+Plataan+3+Naaldwijk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Termoshuizen-Timmerwerken%2C+aannemersbedrijf+Naaldwijk',
  google: { score: '5,0', aantal: 3 },
  themeColor: '#101521',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Tijden van het Google-profiel. dag: 0 = zondag (zoals Date.getDay). Minuten voor de live status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '07.00', dicht: '21.00', van: 420, tot: 1260 },
  { dag: 2, naam: 'Dinsdag', open: '07.00', dicht: '21.00', van: 420, tot: 1260 },
  { dag: 3, naam: 'Woensdag', open: '07.00', dicht: '21.00', van: 420, tot: 1260 },
  { dag: 4, naam: 'Donderdag', open: '07.00', dicht: '21.00', van: 420, tot: 1260 },
  { dag: 5, naam: 'Vrijdag', open: '07.00', dicht: '21.00', van: 420, tot: 1260 },
  { dag: 6, naam: 'Zaterdag', open: '09.00', dicht: '16.00', van: 540, tot: 960 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Soorten werk: Facebook-intro (nieuwbouw, verbouw, onderhoud, renovatie) + wat op hun eigen projectfoto's te zien is.
export const soorten = ['Nieuwbouw', 'Verbouw', 'Renovatie', 'Onderhoud'];
export const klussen = ['Schutting', 'Tuinhuis of berging', 'Overkapping', 'Kozijnen en deuren', 'Gevelbekleding', 'Badkamer of toilet', 'Iets anders'];

// Letterlijk van Google (stand 3 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Imad L.', wanneer: '5 jaar geleden', tekst: 'Johan is een zeer prettige en ervaren vakman, die zijn vak verstaat. Is goed bereikbaar, reageert snel en houdt zich aan afspraken. Het werk dat hij verricht ziet er netjes uit. Kortom: een aanrader!' },
  { naam: 'Gis P.', wanneer: '6 jaar geleden', tekst: 'Super goed gegaan en niet voor de eerste keer. Een vakman. Kun je rustig koffie drinken want Johan weet wat hij doet. Goede samenwerking met ons en hij luistert en doet precies wat we bedoelen , met goede advies van Johan. Top en dank je wel👍' },
  { naam: 'Hans v. d. B.', wanneer: '3 jaar geleden', tekst: 'Een top vakman, werkt heel vakkundig en netjes en is zeer prettig in de omgang. Reeele prijzen, kortom een absolute aanrader!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Hallo Johan, ik heb een vraag over een klus.');
