// Alle gegevens komen uit het dagbestand (inhoud + bronnen, pattykemper.nl). Niets hier verzinnen.
export const site = {
  naam: 'Dans- en ontspanningsstudio 2MOVE',
  kort: '2MOVE',
  // Demo-modus aan bij PUBLIC_VOORSTEL=1: balk bovenaan, noindex, formulier uit.
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
  eigenaar: 'Patty Kemper',
  telefoon: '06 28 57 19 43',
  telefoonLink: 'tel:+31628571943',
  whatsapp: 'https://wa.me/31628571943',
  email: 'info@pattykemper.nl',
  // Adres van de eigen site (contactpagina). Lokale gidsen noemen een ander adres, de eigen site gaat voor.
  straat: 'Visschersbuurt 1',
  postcode: '3356 AE',
  plaats: 'Papendrecht',
  // Proefles aanvragen en inschrijven gaat op de huidige site via het ledenportaal.
  inschrijven: 'https://mijn.pattykemper.nl',
  facebook: 'https://www.facebook.com/dansenontspanningsstudio2move',
  instagram: 'https://www.instagram.com/dans_ontspanningsstudio_2move',
  tiktok: 'https://www.tiktok.com/@2movedance',
};

export const url = (pad = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${pad}`;
