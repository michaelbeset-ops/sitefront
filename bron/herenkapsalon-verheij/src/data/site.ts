// Feiten van herenkapsalonverheij.nl (home, over ons, geschiedenis, knippen, scheren, prijslijst, DEPOT, contact),
// klantwaardering 9,5 uit 10 (19 klanten) van de eigen site, Google 4,7 uit 5. Afspraken via planetzelf.
export const site = {
  naam: 'Herenkapsalon Verheij',
  straat: 'Christiaan Huygensstraat 24',
  postcode: '3362 VB',
  plaats: 'Sliedrecht',
  tel: '0184 413 013',
  telHref: 'tel:+31184413013',
  mail: 'info@kapsalonverheij.nl',
  afspraak: 'https://herenkapsalonverheij.planetzelf.com',
  instagram: 'https://www.instagram.com/herenkapsalonverheij/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Herenkapsalon+Verheij+Christiaan+Huygensstraat+24+Sliedrecht',
  themeColor: '#1c1c1c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag', open: null, dicht: null },
  { dag: 'Dinsdag', open: '07:00', dicht: '17:30' },
  { dag: 'Woensdag', open: '07:00', dicht: '17:30' },
  { dag: 'Donderdag', open: '07:00', dicht: '20:00' },
  { dag: 'Vrijdag', open: '07:00', dicht: '17:30' },
  { dag: 'Zaterdag', open: '07:00', dicht: '13:30' },
];

export const prijzen = [
  { naam: 'Gedekt model', prijs: '29,00' },
  { naam: 'Kort model', noot: 'kam 1', prijs: '17,00' },
  { naam: 'Speciaal model / model knippen', va: true, prijs: '31,00' },
  { naam: 'Jeugd 0 t/m 12 jaar', prijs: '19,95' },
  { naam: 'Jeugd 13 t/m 16 jaar', prijs: '23,80' },
  { naam: 'Jeugd op zaterdag', noot: 'en avond', prijs: '29,00' },
  { naam: 'Baardknippen', va: true, prijs: '9,95' },
  { naam: 'Scheren', prijs: '22,25' },
  { naam: 'Wassen', prijs: '4,00' },
  { naam: 'Thuisknippen', va: true, prijs: '36,00' },
];

export const geschiedenis = [
  { jaar: '1959', kop: 'Een winkeltje met een kapsalon achterin', tekst: 'Maarten Arie Verheij laat het pand bouwen, samen met dhr. Netten van automobielbedrijf Baltax. Voorin worden rook- en drogisterijartikelen en parfumerieën verkocht, achterin zit de herenkapsalon. Op dinsdag 13 oktober 1959 gaat de zaak voor het eerst open.' },
  { jaar: 'Toen', kop: 'Prijsklasse drie', tekst: 'De tarieven werden bepaald door de C.I.K. (Commissie Indeling Kappersbedrijven), op basis van onder meer het aanzien van de zaak, de inrichting en de clientèle. Verheij viel in prijsklasse drie. De stoelen hadden een hoofdsteun met een rol papier, en de salon werd verwarmd met een gaskachel.' },
  { jaar: '1987', kop: 'Arie komt in dienst', tekst: 'De kapper bleek een leuke dochter te hebben, die nu alweer een aantal jaren zijn echtgenote is.' },
  { jaar: '1992', kop: 'Overname door Arie de Raad', tekst: 'Arie en zijn vrouw nemen de zaak over. Dhr. Verheij werkt nog een tijd mee en geniet nu van zijn welverdiende rust.' },
  { jaar: 'Recent', kop: 'Grondig gerenoveerd', tekst: 'De etalage verdween, de tussenwand werd een toog, er kwam een grotere wachtruimte en een extra werkplek. Niet te trendy: modern klassiek, met veel hout en blauw.' },
];
