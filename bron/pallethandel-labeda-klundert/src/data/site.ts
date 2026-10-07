// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - pallethandellabeda.nl (wp-json, pagina's dec 2017): "In en verkoop van gebruikte en nieuwe pallets tevens reperatie",
//   "Kievitweg 15 te Klundert, Industrieterrein Moerdijk", "altijd een voorraad van 20000 pallets", "transport in eigen beheer zodat wij
//   onze klanten snel kunnen bedienen", "Ook voor het ophalen of afleveren van kleine aantallen pallets kunt u bij ons terecht",
//   "heat treated pallets behandeld volgens ispm 15 norm". Transport: "beschikt zelf over diverse transportmiddelen om pallets bij haar
//   klanten te bezorgen of op te halen", "zo snel mogelijk". Footer: "nieuwe en gebruikte houten pallets", 0610124849, info@pallethandellabeda.nl.
// - Google (7-10-2026): Pallethandel Labeda V.O.F., Palletleverancier, 06 10124849, ma-vr 08:00-18:00, za-zo gesloten, geen reviews.
// - KvK (via oozo/company.info): Pallethandel Labeda B.V., KvK 89795091, Kievitweg 15, 4791 RW Klundert, vestiging sinds januari 2006.
// - PDOK: Kievitweg 15 = 4791 RW.
// Niet gebruikt: 0168-380917 (hoort bij "Pallethandel Hommerin BV", staat niet op hun site); "2,5 miljoen pallets per jaar" (footertekst,
// niet te rijmen met 1 werkzame persoon in KvK); teksten uit het webarchief (2013).
export const site = {
  naam: 'Pallethandel Labeda',
  bv: 'Pallethandel Labeda B.V.',
  straat: 'Kievitweg 15',
  postcode: '4791 RW',
  plaats: 'Klundert',
  terrein: 'Industrieterrein Moerdijk',
  tel: '06 10 12 48 49',
  telHref: 'tel:+31610124849',
  wa: 'https://wa.me/31610124849',
  mail: 'info@pallethandellabeda.nl',
  kvk: '89795091',
  maps: 'https://www.google.com/maps/search/?api=1&query=Pallethandel+Labeda+Kievitweg+15+Klundert',
  themeColor: '#141618',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden volgens Google (0 = zondag).
export const tijden: { dag: string; kort: string; open?: string; dicht?: string }[] = [
  { dag: 'Maandag', kort: 'ma', open: '08:00', dicht: '18:00' },
  { dag: 'Dinsdag', kort: 'di', open: '08:00', dicht: '18:00' },
  { dag: 'Woensdag', kort: 'wo', open: '08:00', dicht: '18:00' },
  { dag: 'Donderdag', kort: 'do', open: '08:00', dicht: '18:00' },
  { dag: 'Vrijdag', kort: 'vr', open: '08:00', dicht: '18:00' },
  { dag: 'Zaterdag', kort: 'za' },
  { dag: 'Zondag', kort: 'zo' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
