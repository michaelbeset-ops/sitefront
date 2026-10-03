// Feiten: gertjanoudshoorn.nl (teksten + projectpagina's), Google-bedrijfsprofiel "G. Oudshoorn Loonwerk Grond En Wegenbouw"
// (5,0 uit 2, ma-vr 07:00-17:00), Facebookpagina, KvK 24429613 (eenmanszaak, ingeschreven). Bekeken 3 oktober 2026.
// Adres is een woonstraat: op de site alleen plaats + werkgebied tonen.
export const site = {
  naam: 'Gertjan Oudshoorn',
  handelsnaam: 'G. Oudshoorn Loonwerk Grond- en Wegenbouw',
  plaats: 'Capelle aan den IJssel',
  werkgebied: 'Capelle aan den IJssel, Rotterdam en omstreken',
  tel: '06 54 99 45 12',
  telHref: 'tel:+31654994512',
  wa: 'https://wa.me/31654994512',
  mail: 'info@gertjanoudshoorn.nl',
  kvk: '24429613',
  sinds: 2008,
  facebook: 'https://www.facebook.com/people/Gertjan-Oudshoorn-Grond-en-wegenbouw-tuinaanleg-en-onderhoud/100054309260302/',
  reviews: 'https://www.google.com/maps/search/?api=1&query=G.+Oudshoorn+Loonwerk+Grond+En+Wegenbouw+Capelle+aan+den+IJssel',
  google: { score: '5,0', aantal: 2 },
  themeColor: '#14171c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '07.00', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', open: '07.00', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', open: '07.00', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', open: '07.00', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', open: '07.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Dienstnamen letterlijk uit de vinkjeslijsten op hun homepage en de tuinpagina.
export const chips = ['Grondwerk', 'Bestrating', 'Machinale bestrating', 'Riolering', 'Beschoeiing', 'Damwand', 'Grondkering', 'Vlonders', 'Schuttingen', 'Overkappingen', 'Tuinaanleg', 'Tuinonderhoud'];

// Plaatsen uit hun eigen projecttitels + "Capelle a/d IJssel, Rotterdam en omstreken" uit hun site.
export const plaatsen = ['Capelle aan den IJssel', 'Rotterdam-Kralingen', 'Hillegersberg', 'Nesselande', 'Ommoord', 'Krimpen aan de Lek', 'Stolwijk', 'Zoetermeer', 'Dordrecht', '’s-Gravenland'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag Gertjan, ik wil graag een offerte aanvragen.');
