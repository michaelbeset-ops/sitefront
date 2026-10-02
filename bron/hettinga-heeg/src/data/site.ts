// Feiten: huidige site www.hettingaheeg.nl (alle pagina's, bekeken 02-10-2026) + content/b22/ALLE.md.
// Kop elke pagina: "Welkom bij Hettinga's installatiebedrijf, al meer dan 40 jaar gevestigd in Heeg."
// Over: jaren '30 pake Hielke Hettinga en zijn twee broers koperslagers in Balk; zoon Jappie Hettinga vestigt zich eind jaren '60
// aan de Harinxmastraat in Heeg; 1983 neemt Hielke Hettinga de zaak over; vanaf januari 2007 De Opper 2. "Hielke Hettinga is
// erkend installateur." "Het kleinschalige bedrijf staat voor betrouwbaarheid en vakmanschap." Friese versie: "It minmachtige
// bedriuw stiet foar kundichheid en betrouwen, der wurdt sekuer wurk levere."
// Vakken (eigen pagina's): electra (ook databekabeling en alarminstallaties), cv, gas, water(leidingen), riolering, zinkwerk
// (zinken goten en daken), energie (zonnepanelen, warmteterugwininstallaties, aardwarmte/warmtepomp), service ("Vaste klanten
// kunnen rekenen op een goede service."), creatief (vuurtoren Workum, 25/26 oktober 2004, artikel Stephan Kraan).
// Contact: De Opper 2, 8621 DZ Heeg, tel 0515 44 22 86, info@hettingaheeg.nl. Google 4,3 uit 3 (ALLE.md).
export const site = {
  naam: "Hettinga's Installatiebedrijf",
  straat: 'De Opper 2',
  postcode: '8621 DZ',
  plaats: 'Heeg',
  tel: '0515 44 22 86',
  telHref: 'tel:+31515442286',
  mail: 'info@hettingaheeg.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Hettinga+Installatiebedrijf+De+Opper+2+Heeg',
  google: { score: '4,3', aantal: 3 },
  themeColor: '#141414',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const mailMet = (onderwerp: string, tekst: string) =>
  `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(tekst)}`;

export const klusMail = mailMet('Vraag of offerte',
  'Goedendag,\n\nIk heb een vraag over:\n(electra / cv / gas / water / riolering / zinkwerk / zonnepanelen of warmtepomp)\n\nAdres van de klus: \nWat moet er gebeuren: \nTelefoonnummer: \n\nMet vriendelijke groet,\n');
