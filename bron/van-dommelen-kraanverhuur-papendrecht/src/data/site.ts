// Feiten: Google-bedrijfsprofiel (categorie Grondverzet, geen reviews/tijden), KvK 98948830 (Van Dommelen Kraanverhuur B.V.,
// vestiging sinds 18-12-2007), openbare LinkedIn-posts van Herman van Dommelen. Bekeken 3 oktober 2026. Zie bron/BRON.md.
// Adres is een woonhuis: op de site alleen plaats + werkgebied tonen.
export const site = {
  naam: 'Herman van Dommelen Kraanverhuur',
  handelsnaam: 'Van Dommelen Kraanverhuur B.V.',
  plaats: 'Papendrecht',
  tel: '06 10 93 29 37',
  telHref: 'tel:+31610932937',
  wa: 'https://wa.me/31610932937',
  kvk: '98948830',
  sinds: 2007,
  linkedin: 'https://nl.linkedin.com/in/herman-van-dommelen-9135ab123',
  themeColor: '#15161b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Werkzaamheden uit hun posts, telefoonboek ("kraanverhuur- en grondverzetbedrijf (met machinist)") en Google-categorie.
export const chips = ['Kraanverhuur met machinist', 'Grondverzet', 'Damwand trillen', 'Funderingswerk', 'Saneren', 'Bouwrijp maken', 'Infra en wegenbouw'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Goedendag Herman, ik wil graag de kraan met machinist inhuren.');
