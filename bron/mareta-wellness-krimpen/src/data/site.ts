// Feiten (bekeken 3 oktober 2026):
// - Google-bedrijfsprofiel "Mareta Wellness", Massagetherapeut, 4,9 uit 10 reviews, Hoge Park 2, 2923 VN Krimpen aan den IJssel,
//   06 29495979, ma t/m vr 10:00-18:00, za en zo gesloten. Website maretawellness.nl bestaat niet meer (DNS weg).
// - imastrainingen.nl/massage-by-mareta-wellness/ (prijzen per 15 maart 2026, WhatsApp 06 29495979, mareta@live.nl,
//   "Mareta Wellness geeft div massages sinds 2008", annulering, hygiëne, handdoeken aanwezig).
// - imastrainingen.nl/ons-docententeam/ (Maureen Telussa-Anganois, eigenaar en (mede)oprichter van IMAS Trainingen en Massage
//   Praktijk Mareta Wellness; freelance docent bij o.a. MOOD Academy in Amersfoort), /routebeschrijving/, /adresgegevens/ (KvK).
// - web.archive.org maretawellness.nl (2023-2024): omschrijvingen van de massages, intakegesprek, voorkeur voor appen/mailen.
export const site = {
  naam: 'Mareta Wellness',
  eigenaar: 'Maureen Telussa',
  straat: 'Hoge Park 2',
  postcode: '2923 VN',
  plaats: 'Krimpen aan den IJssel',
  gebouw: 'Vijverstaete III, begane grond',
  tel: '06 29 49 59 79',
  telHref: 'tel:+31629495979',
  wa: 'https://wa.me/31629495979',
  mail: 'mareta@live.nl',
  kvk: '24439471',
  imas: 'https://www.imastrainingen.nl/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Mareta+Wellness+Hoge+Park+2+Krimpen+aan+den+IJssel',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Mareta+Wellness+Krimpen+aan+den+IJssel',
  google: { score: '4,9', aantal: 10 },
  themeColor: '#22141d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '10.00', dicht: '18.00' },
  { dag: 2, naam: 'Dinsdag', open: '10.00', dicht: '18.00' },
  { dag: 3, naam: 'Woensdag', open: '10.00', dicht: '18.00' },
  { dag: 4, naam: 'Donderdag', open: '10.00', dicht: '18.00' },
  { dag: 5, naam: 'Vrijdag', open: '10.00', dicht: '18.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Prijslijst per 15 maart 2026 (imastrainingen.nl/massage-by-mareta-wellness/). min = minuten, prijs in euro.
export const prijzen = [
  { id: 'klassiek', t: 'Klassieke ontspanningsmassage', d: 'Nek, rug en schouders, de hele achterkant of het hele lichaam.', opties: [[30, 35], [40, 45], [55, 60], [75, 75], [90, 90]] },
  { id: 'bamboe', t: 'Bamboemassage', d: 'Met warme olie en bamboestokken, voor vermoeide spieren.', opties: [[30, 35], [40, 45], [55, 60]] },
  { id: 'cupping', t: 'Cupping- of gua sha-therapie', d: 'Met cups of een gladde jadesteen.', opties: [[30, 35], [40, 45], [55, 60]] },
  { id: 'moxa', t: 'Moxatherapie', d: 'Warmte op drukpunten met een moxastick.', opties: [[30, 35], [40, 45]] },
  { id: 'reflex', t: 'Hand- of voetreflexmassage', d: 'Drukpunten op handen of voeten.', opties: [[40, 45]] },
  { id: 'gezicht', t: 'Gezichts- en hoofdmassage', d: 'Gezicht, hoofdhuid, nek en schouders.', opties: [[30, 35]] },
  { id: 'combi', t: 'Combi naar keuze', d: 'Rug, voeten en hoofd, samen 60 minuten.', opties: [[60, 65]] },
  { id: 'lomi', t: 'Lomi lomi massage', d: 'Hawaïaanse massage met lange strijkingen, ook met de onderarmen.', opties: [[90, 100]] },
  { id: 'stoel', t: 'Stoelmassage', d: 'Nek, schouders, rug en armen, met de kleren aan.', opties: [[20, 22]] },
] as const;

export const extra = [
  { t: 'Babymassage', d: '3 sessies, u leert uw baby te masseren', prijs: '€ 149' },
  { t: 'Afslankmassage', d: 'kuur van 10 sessies', prijs: '€ 400' },
];

export const chips = ['Klassieke massage', 'Bamboemassage', 'Lomi lomi', 'Cupping en gua sha', 'Moxa', 'Reflexmassage', 'Gezichtsmassage', 'Stoelmassage', 'Babymassage'];

// Letterlijk van Google (stand 3 oktober 2026). Alle drie de reviews die zonder inloggen zichtbaar zijn, alle met 5 sterren.
export const reviews = [
  { naam: 'Jolanda G.', wanneer: '3 jaar geleden', tekst: 'Zeer gastvrij ontvangen en heerlijk top tot teen duomassage samen met mijn man gehad. Dit na jaren met veel fysiek afzien, een ware vertroeteling voor lichaam en geest. Goed toegankelijk met rolstoel. Deze verwennerij hou ik erin!' },
  { naam: 'Claudia P.', wanneer: '9 jaar geleden', tekst: 'Een aanrader voor iedereen. Een hele fijne massage gehad in een zeer prettige, rustgevende ambiance. Dit zou iedereen zichzelf eens in de zoveel tijd moeten gunnen. Ik kom zeker terug.' },
  { naam: 'Alie M.', wanneer: '8 jaar geleden', tekst: 'Keer op keer een top behandeling!!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hallo Maureen, ik wil graag een afspraak maken voor een massage.');
