// Feiten van wendelautoschade.nl / autoschadeherstelvanwendeldejoode.nl en het Google-profiel (4,6 uit 11).
export const site = {
  naam: 'Van Wendel de Joode & Zn.',
  straat: "'t Zand 19",
  postcode: '4254 XP',
  plaats: 'Sleeuwijk',
  tel: '0183 30 33 76',
  telHref: 'tel:+31183303376',
  mobiel: '06 53 27 51 45',
  mobielHref: 'tel:+31653275145',
  mail: 'info@wendelautoschade.nl',
  maps: "https://www.google.com/maps/search/?api=1&query=Van+Wendel+de+Joode+autoschadeherstel+Sleeuwijk",
  themeColor: '#1c1c1e',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
// Hun eigen opsomming van de dienstenpagina.
export const diensten = [
  'Herstel van grote en kleine schades aan alle merken en typen',
  'Overname van de fabrieksgarantie op het reparatiedeel',
  'Alternatieve reparatiemethoden',
  'Autoruiten repareren en vervangen',
  'Uitdeuken zonder spuiten en spotrepair',
  'Haal- en brengservice en vervangend vervoer',
  'Volledige en betrouwbare schadecalculatie',
  'Hulp bij het invullen van het schadeformulier',
];
