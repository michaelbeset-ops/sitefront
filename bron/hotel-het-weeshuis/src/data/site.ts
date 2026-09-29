// Feiten uitsluitend van de homepage hotelhetweeshuis.nl zoals gearchiveerd in januari 2024 (Wayback Machine,
// 20240106013326), plus Google-profiel (4,6 uit 268 reviews), Facebook en Instagram. De huidige site geeft een foutmelding.
// Bewust NIET getoond: het parkeerbedrag (tarief uit 2024) en de nieuwsberichten uit 2021/2022 (alleen de honing als tijdloos feit).
export const site = {
  naam: 'Hotel Het Weeshuis',
  kort: 'Het Weeshuis',
  straat: 'Kerkstraat 53',
  postcode: '8701 HR',
  plaats: 'Bolsward',
  provincie: 'Friesland',
  tel: '0515 855 666',
  telHref: 'tel:+31515855666',
  mail: 'info@hotelhetweeshuis.nl',
  facebook: 'https://www.facebook.com/HetWeeshuis',
  instagram: 'https://www.instagram.com/hotelhetweeshuis',
  maps: 'https://www.google.com/maps/search/?api=1&query=Hotel+Het+Weeshuis+Kerkstraat+53+Bolsward',
  google: '4,6',
  reviews: 268,
  themeColor: '#143a33',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
