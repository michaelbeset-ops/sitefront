// Alle gegevens komen uit het dagbestand (inhoud + bronnen). Niets hier verzinnen.
export const site = {
  naam: 'Rijschool Mascha',
  // Demo-modus aan bij PUBLIC_VOORSTEL=1: balk bovenaan, noindex, formulier uit.
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
  eigenaar: 'Mascha Fransen',
  telefoon: '06 55130559',
  telefoonLink: 'tel:+31655130559',
  whatsapp: 'https://wa.me/31655130559',
  email: 'm.fransen21@kpnmail.nl',
  straat: 'De la Reystraat 3',
  postcode: '3312 EE',
  plaats: 'Dordrecht',
  facebook: 'https://www.facebook.com/miesemas/',
};

export const url = (pad = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${pad}`;
