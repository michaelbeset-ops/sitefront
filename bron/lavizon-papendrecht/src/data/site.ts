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
  google: { score: '4,5', aantal: 2 },
  maps: 'https://www.google.com/maps/search/?api=1&query=Lavizon+Woninginrichting+Wilgenhof+250+Papendrecht',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Lavizon+Woninginrichting+Papendrecht',
  themeColor: '#1d2124',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Minuten na middernacht voor de live status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '8.00', dicht: '18.00', van: 480, tot: 1080 },
  { dag: 2, naam: 'Dinsdag', open: '8.00', dicht: '18.00', van: 480, tot: 1080 },
  { dag: 3, naam: 'Woensdag', open: '8.00', dicht: '18.00', van: 480, tot: 1080 },
  { dag: 4, naam: 'Donderdag', open: '8.00', dicht: '18.00', van: 480, tot: 1080 },
  { dag: 5, naam: 'Vrijdag', open: '8.00', dicht: '18.00', van: 480, tot: 1080 },
  { dag: 6, naam: 'Zaterdag', open: '8.00', dicht: '14.00', van: 480, tot: 840 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Alleen termen uit hun eigen bronnen (Facebook, lavizon.nl, Zonnelux, trapbericht).
export const chips = ['Laminaat', 'Vinyl', 'Tapijt', 'Traprenovatie', 'Trapverlichting', 'Binnenzonwering', 'Raamdecoratie', 'Buitenzonwering', 'Insectenhorren'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAanHuis = waMet('Hallo Lavizon, ik wil graag een vrijblijvende afspraak bij mij thuis.');
