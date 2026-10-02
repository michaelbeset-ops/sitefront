// Feiten (bekeken 2 oktober 2026):
// - Google-bedrijfsprofiel "Lavizon Woninginrichting": Vloerenwinkel, Wilgenhof 250, 3355 PD Papendrecht, 06 11374929,
//   4,5 uit 2 reviews ("Prima service en eerlijke prijs!", 7 jaar geleden; tweede review zonder tekst), geen website.
//   Open ma-vr 08:00-18:00, za 08:00-14:00, zo gesloten. Toegankelijkheid: rolstoeltoegankelijke parking.
// - Facebook "Lavizon Woninginrichting en Montage": "Bij Lavizon kunt u terecht voor het plaatsen en leveren van traprenovatie,
//   alle soorten vloeren, binnenzonwering en insectenhorren." Wilgenhof, Papendrecht; 06 11374929; info@lavizon.nl.
//   Afbeelding met logo: "Nieuwbouwhuis of renovatie? Laat ons u helpen er een sfeervol geheel van te maken, met een mooie vloer,
//   binnen- en buitenzonwering." en "Kwaliteit in woninginrichting".
//   Bericht 19 aug 2021: traprenovatie vrijblijvend bij u aan huis; panelen RAL 9010, eiken rustiek treden, Rubio Monocoat walnut, led.
// - lavizon.nl (binnenkort-pagina): laminaat, tapijt, vinyl, binnenzonwering, traprenovatie.
// - Zonnelux.nl: Lavizon Woninginrichting is verkooppunt van Zonnelux raamdecoratie. KvK 52448991 (Company.info).
export const site = {
  naam: 'Lavizon Woninginrichting',
  kort: 'Lavizon',
  straat: 'Wilgenhof 250',
  postcode: '3355 PD',
  plaats: 'Papendrecht',
  tel: '06 11 37 49 29',
  telHref: 'tel:+31611374929',
  wa: 'https://wa.me/31611374929',
  mail: 'info@lavizon.nl',
  kvk: '52448991',
  google: '4,5',
  googleAantal: 2,
  maps: 'https://www.google.com/maps/search/?api=1&query=Lavizon+Woninginrichting+Wilgenhof+250+Papendrecht',
  themeColor: '#f6f5f1',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const tijden: [string, string][] = [
  ['Maandag tot en met vrijdag', '8.00 tot 18.00'],
  ['Zaterdag', '8.00 tot 14.00'],
  ['Zondag', 'Gesloten'],
];
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Lavizon, ' + tekst)}`;
