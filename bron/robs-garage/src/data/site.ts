// Feiten van robsgarage.nl (home, Over ons, Diensten, Reparatie & onderhoud, Motorrevisie, Aircoservice,
// Bandenservice, Schadeherstel, Ruitreparatie, Mercedes-specialist, Werkplaats, Openingstijden, Contact)
// en het Google-profiel (4,5 uit 5, 99 reviews). Online afspraak via hun eigen app (autosociaal).
export const site = {
  naam: "Rob's Garage",
  straat: 'Hoofdweg 30',
  postcode: '2908 LC',
  plaats: 'Capelle aan den IJssel',
  tel: '010 414 67 77',
  telHref: 'tel:+31104146777',
  mail: 'info@robsgarage.nl',
  afspraak: 'https://pwa.autosociaal.nl/login?domain=IH5ONY1zeG.pwa.autosociaal.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rob%27s+Garage+Hoofdweg+30+Capelle+aan+den+IJssel',
  google: { score: '4,5', aantal: 99 },
  themeColor: '#1b1f24',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag', tijd: '08:00 tot 18:00' },
  { dag: 'Dinsdag', tijd: '08:00 tot 18:00' },
  { dag: 'Woensdag', tijd: '08:00 tot 18:00' },
  { dag: 'Donderdag', tijd: '08:00 tot 18:00' },
  { dag: 'Vrijdag', tijd: '08:00 tot 18:00' },
  { dag: 'Zaterdag', tijd: 'Gesloten' },
  { dag: 'Zondag', tijd: 'Gesloten' },
];

// Diensten in groepen; teksten ingekort van de dienstpagina's.
export const diensten = [
  {
    groep: 'Werkplaats',
    items: [
      { naam: 'Reparatie en onderhoud', tekst: 'Tijdens een onderhoudsbeurt controleren we uw auto standaard op een aantal specifieke punten.' },
      { naam: 'APK-keuring', tekst: 'Te combineren met een onderhoudsbeurt, in één bezoek.' },
      { naam: 'Motorrevisie', tekst: 'Eerst een compressietest, dan pas sleutelen. Revisie is vaak stukken goedkoper dan een nieuwe motor.' },
      { naam: 'Versnellingsbak', tekst: 'Revisie en reparatie, van handgeschakeld en automaat.' },
      { naam: 'Aircoservice', tekst: 'Onderhoud, bijvullen of vervangen. Een airco verliest bij normaal gebruik zo’n 10% koudemiddel per jaar.' },
    ],
  },
  {
    groep: 'Banden en ruiten',
    items: [
      { naam: 'Bandenservice', tekst: 'Banden vanuit eigen voorraad en twee keer per jaar wisselen. In onze bandenopslag liggen uw zomer- of winterbanden gereinigd, droog, koel en verzekerd.' },
      { naam: 'Ruitreparatie en vervanging', tekst: 'Een sterretje of kras herstellen we met speciale hars. Bij grotere schade vervangen we de hele ruit.' },
    ],
  },
  {
    groep: 'Schade',
    items: [
      { naam: 'Onafhankelijke schadecalculatie', tekst: 'We taxeren de schade voor u.' },
      { naam: 'Herstelwerk, schade en spuitwerk', tekst: 'Inclusief de complete schadeafwikkeling, ook met de verzekeringsmaatschappij.' },
    ],
  },
  {
    groep: 'Inbouw en auto’s',
    items: [
      { naam: 'Inbouw van telefoon, radio en navigatie', tekst: 'En verkoop en inbouw van accessoires.' },
      { naam: 'Occasions met garantie', tekst: 'Gebruikte auto’s in het betaalbare segment.' },
      { naam: 'Bemiddeling bij verkoop', tekst: 'Wilt u uw auto verkopen? Wij bemiddelen.' },
    ],
  },
];
