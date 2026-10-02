// Feiten van personaltrainingenbarendrecht.nl via web.archive.org (de site zelf geeft ERR_TOO_MANY_REDIRECTS):
// Home (dec 2025), Personal Trainingen (mrt 2025), Hardlopen (mrt 2025), Medische fitness, Size Less (dec 2025),
// Online Fitness (dec 2023), Contact (mrt 2025: Zwolseweg 26, 0642090071, KvK 68776365), Personal trainer Antoon (apr 2025).
// Google-bedrijfsprofiel (2 okt 2026): 4,8 uit 8 reviews, "Personal trainer", ma-vr 09:00-21:00, za 09:00-12:00, zo gesloten.
// Het oude domein stuurt door naar vreemde sites: daarom GEEN mailadres op dat domein en geen link ernaartoe.
// Achternaam: de site schrijft "van Kroesveld", zijn eigen Google-account en Instagram "van Koesveld"; de demo noemt alleen "Antoon".
export const site = {
  naam: 'Personal Trainingen Barendrecht',
  straat: 'Zwolseweg 26',
  postcode: '2994 LB',
  plaats: 'Barendrecht',
  tel: '06 42 09 00 71',
  telHref: 'tel:+31642090071',
  wa: 'https://wa.me/31642090071',
  kvk: '68776365',
  facebook: 'https://www.facebook.com/personaltrainingenbarendrecht/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Personal+Trainingen+Barendrecht+Zwolseweg+26',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Personal+Trainingen+Barendrecht+Zwolseweg+26',
  google: { score: '4,8', aantal: 8 },
  themeColor: '#151314',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden in minuten voor de live-status staan in Base.astro.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.00', dicht: '21.00' },
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '21.00' },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '21.00' },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '21.00' },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '21.00' },
  { dag: 6, naam: 'Zaterdag', open: '09.00', dicht: '12.00' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Specialiteiten van de pagina over Antoon en de homepage.
export const ook = ['Krachttraining', 'Spieropbouw', 'Conditietraining', 'Bodyshaping', 'Wedding-fit', 'Afslankbegeleiding', 'Voedingsadvies', 'MyLine', 'Astma en COPD', 'Senioren'];

// Letterlijk van Google (stand 2 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
// De review van Antoon zelf is weggelaten.
export const reviews = [
  { naam: 'Brenda d. M.', wanneer: '4 jaar geleden', groot: true, tekst: '… Doordat Antoon naast meerdere opleidingen op het gebied van fitness ook geschoold is in de medische fitness en mental coaching, is hij als geen ander in staat om mensen met een medische voorgeschiedenis weer in het zadel te helpen. Ikzelf ben daar het levende bewijs van! Drie jaar geleden kon ik eigenlijk bijna niet meer lopen en bleek een herniaoperatie onvermijdelijk. Kort daarna ben ik begonnen met trainen bij Antoon en ik ben nu fitter en sterker dan ik ooit ben geweest.' },
  { naam: 'Dennis K.', wanneer: '7 jaar geleden', tekst: '… Ik kan dit iedereen aanraden. Niet te duur en goede begeleiding! Met name de persoonlijke aandacht zowel tijdens als buiten de sessies ben ik erg over te spreken. Doelen stellen en deze behalen worden op deze manier een stuk eenvoudiger.' },
  { naam: 'Ochtendgloren', wanneer: '7 jaar geleden', tekst: 'Antoon is een professionele personal trainer. Stemt zijn begeleiding af op de wensen van de klant. Ik train er al 2 jaar met veel plezier!' },
  { naam: 'Evert S.', wanneer: '7 jaar geleden', tekst: 'Zaterdag 11 en 25 mei super genoten van de crossfit opendag en workout bij Personal Trainingen Barendrecht. Team super bedankt! Iedereen heeft het als super ervaren en wil meer en vaker!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waIntake = waMet('Hallo Antoon, ik wil graag een gratis intakegesprek plannen.');
