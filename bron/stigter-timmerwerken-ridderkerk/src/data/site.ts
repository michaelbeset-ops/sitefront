// Feiten van timmerwerken-mstigter.nl (Home, Projecten, Verbouwingen, Contact; live en via web.archive.org, 2 okt 2026),
// de Facebook-pagina "Stigter Timmer- en Montagebedrijf" (intro, adres, post 1 nov 2024 over een overkapping) en het
// Google-bedrijfsprofiel (Timmerman, Klooslaan 3, 2985 CK Ridderkerk, 06 21931500, 4,2 uit 5 reviews, geen openingstijden).
// Eigenaar Marco Stigter: kop van de site en contactpagina. Diensten en zinnen: Home/Projecten. Projecten: pagina Verbouwingen.
export const site = {
  naam: 'Stigter Timmer- en Montagebedrijf',
  kort: 'Stigter',
  eigenaar: 'Marco Stigter',
  straat: 'Klooslaan 3',
  postcode: '2985 CK',
  plaats: 'Ridderkerk',
  tel: '06 21 93 15 00',
  telHref: 'tel:+31621931500',
  wa: 'https://wa.me/31621931500',
  mail: 'info@timmerwerken-mstigter.nl',
  google: '4,2',
  googleAantal: 5,
  facebook: 'https://www.facebook.com/people/Stigter-Timmer-en-Montagebedrijf/100057325665316/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Stigter+Timmer+en+Montagebedrijf+Klooslaan+3+Ridderkerk',
  themeColor: '#addef7',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Marco, ' + tekst)}`;
