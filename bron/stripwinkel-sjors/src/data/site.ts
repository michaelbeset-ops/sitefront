// Alle feiten komen van stripwinkel-sjors.nl (update 25 september 2026) en het Google-profiel.
export const site = {
  naam: 'Stripwinkel Sjors',
  straat: 'Scheffersplein 1',
  postcode: '3311 EJ',
  plaats: 'Dordrecht',
  tel: '078 614 20 12',
  telHref: 'tel:+31786142012',
  mail: 'mail@stripwinkel-sjors.nl',
  facebook: 'https://www.facebook.com/stripwinkel.sjors.1',
  maps: 'https://www.google.com/maps/search/?api=1&query=Stripwinkel+Sjors+Scheffersplein+Dordrecht',
  themeColor: '#121212',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Een greep uit "Net óf bijna verschenen" van hun eigen site, update 25 september 2026.
export const nieuw = [
  { titel: 'Nina Simone: Feeling Good', makers: 'Sophie Adriansen', uitvoering: 'Hardcover', prijs: '24,95' },
  { titel: 'IJslander 1. In ballingschap', makers: 'Caryl Férey, Corentin Rouge', uitvoering: 'Hardcover', prijs: '34,95' },
  { titel: 'Het schaduwmasker 3. De Koning van de Graven', makers: 'Pierre Pevel, Stéphane Créty', uitvoering: 'Hardcover', prijs: '24,95' },
  { titel: 'The Cow Killer Hashkee', makers: 'Philippe Nihoul, Daniel Brecht', uitvoering: 'Collectors edition, 200 stuks met ex libris', prijs: '39,00' },
  { titel: 'Kappie 124. Kappie en de wrakmakers', makers: 'Marten Toonder, Peter Abel, Piet Wijn', uitvoering: 'Softcover', prijs: '12,50' },
  { titel: 'Noortje 34. Is jarig', makers: 'Patty Klein, Jan Steeman', uitvoering: 'Softcover', prijs: '9,95' },
  { titel: 'One Piece 10. Oké. We komen in actie!', makers: 'Eiichiro Oda', uitvoering: 'Nederlandse editie', prijs: '9,50' },
  { titel: 'StripGlossy 36/37, het 50+ nummer', makers: 'Diverse auteurs', uitvoering: 'Tijdschrift', prijs: '19,90' },
];
