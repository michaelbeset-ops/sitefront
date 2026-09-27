// Feiten van de Facebookpagina facebook.com/schildersbedrijfjvankooten (intro, info, werkgebied, post 14 september 2026)
// en het Google-profiel (adres, telefoon, 5,0 uit 5 met 11 reviews, openingstijden). Geen eigen website.
export const site = {
  naam: 'Schildersbedrijf J. van Kooten',
  straat: 'Van Neurenburgpad 21B',
  postcode: '3311 DN',
  plaats: 'Dordrecht',
  tel: '06 10 23 17 95',
  telHref: 'tel:+31610231795',
  whatsapp: 'https://wa.me/31610231795',
  mail: 'info@schildersbedrijf-jvankooten.nl',
  facebook: 'https://www.facebook.com/schildersbedrijfjvankooten/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Schildersbedrijf+J.+van+Kooten+Van+Neurenburgpad+21B+Dordrecht',
  themeColor: '#174a5c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const werkgebied = ['Dordrecht', 'Zwijndrecht', 'Papendrecht', 'Sliedrecht', 'Alblasserdam', 'Hendrik-Ido-Ambacht', 'Rotterdam'];
