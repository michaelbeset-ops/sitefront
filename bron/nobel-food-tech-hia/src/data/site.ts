// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site nobelfoodtech.nl (home, verpakkingsmachines, storingen-service-machines, aanbod-machines + machinepagina's, contact).
// - Google-bedrijfsprofiel "Nobel Food Tech" (machinewerkplaats, geen reviews, foto's Van eigenaar).
export const site = {
  naam: 'Nobel Food Tech',
  straat: 'Natuursteenweg 12b',
  postcode: '3343 LH',
  plaats: 'Hendrik-Ido-Ambacht',
  tel: '06 23 37 80 95',
  telHref: 'tel:+31623378095',
  wa: 'https://wa.me/31623378095',
  mail: 'info@nobelfoodtech.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Nobel+Food+Tech+Natuursteenweg+12b+Hendrik-Ido-Ambacht',
  themeColor: '#1b1f1c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Nobel Food Tech, ik heb een vraag over een machine.');
