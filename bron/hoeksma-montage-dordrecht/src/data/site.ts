// Feiten van hoeksmamontage.nl (bekeken 2 oktober 2026): Thuis, Over ons, Projecten (Keukens, Badkamers,
// Timmerwerken), Links, Contact, Algemene voorwaarden. Plus Google-bedrijfsprofiel (5,0 uit 14, ma t/m vr 08.00-17.00)
// en stagemarkt.nl (leerbedrijf). Adres Vissersdijk 23, 3319 GT Dordrecht; mobiel +31 653863523; info@hoeksmamontage.nl;
// KvK 23084550 (algemene voorwaarden). "Sinds 1996", "van A tot Z", "strakke planning", "hoogwaardige materialen": Over ons.
export const site = {
  naam: 'J. Hoeksma Montage & Timmerwerken',
  kort: 'J. Hoeksma',
  straat: 'Vissersdijk 23',
  postcode: '3319 GT',
  plaats: 'Dordrecht',
  tel: '06 53 86 35 23',
  telHref: 'tel:+31653863523',
  wa: 'https://wa.me/31653863523',
  mail: 'info@hoeksmamontage.nl',
  kvk: '23084550',
  google: '5,0',
  googleAantal: 14,
  linkedin: 'https://www.linkedin.com/in/johan-hoeksma-89b74a11a/',
  facebook: 'https://www.facebook.com/johan.hoeksma.71',
  voorwaarden: 'https://www.hoeksmamontage.nl/algemene-voorwaarden',
  maps: 'https://www.google.com/maps/search/?api=1&query=J.+Hoeksma+Montage+%26+Timmerwerken+Vissersdijk+23+Dordrecht',
  themeColor: '#f1efea',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Johan, ' + tekst)}`;
export const offerteMail = `mailto:${site.mail}?subject=${encodeURIComponent('Offerteaanvraag')}&body=${encodeURIComponent('Hallo Johan,\n\nIk wil graag een offerte voor:\n\nAdres van de klus:\nGewenste periode:\n\nMet vriendelijke groet,\n')}`;
