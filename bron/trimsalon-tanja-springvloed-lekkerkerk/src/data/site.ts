// Feiten: huidige site hondentrimsalontanjaspringvloed.nl (alle pagina's, opgehaald 3 oktober 2026; zie bron/site-tekst.txt)
// en het Google-bedrijfsprofiel "Hondentrimsalon Tanja Springvloed" (4,9 uit 35 reviews; ma-do 09:00-17:00, vr 09:00-14:00,
// za en zo gesloten; zie bron/google.txt). Julianastraat 30, 2941 BC Lekkerkerk. 06 16 56 79 35, tanjaspringvloed@gmail.com.
// Facebook: persoonlijk profiel facebook.com/tanja.springvloed (alleen privéfoto's, niets van overgenomen). Geen KvK gevonden.
export const site = {
  naam: 'Hondentrimsalon Tanja Springvloed',
  kort: 'Tanja Springvloed',
  straat: 'Julianastraat 30',
  postcode: '2941 BC',
  plaats: 'Lekkerkerk',
  tel: '06 16 56 79 35',
  telHref: 'tel:+31616567935',
  wa: 'https://wa.me/31616567935',
  mail: 'tanjaspringvloed@gmail.com',
  facebook: 'https://www.facebook.com/tanja.springvloed',
  maps: 'https://www.google.com/maps/search/?api=1&query=Hondentrimsalon+Tanja+Springvloed+Julianastraat+30+Lekkerkerk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Hondentrimsalon+Tanja+Springvloed+Lekkerkerk',
  google: { score: '4,9', aantal: 35 },
  themeColor: '#1c2023',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden van het Google-profiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.00', dicht: '17.00', o: 540, d: 1020 },
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '17.00', o: 540, d: 1020 },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '17.00', o: 540, d: 1020 },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '17.00', o: 540, d: 1020 },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '14.00', o: 540, d: 840 },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', o: 0, d: 0 },
];

// Letterlijk van hun pagina Trimmen: "extra gespecialiseerd in de volgende rassen".
export const rassen = [
  'Poedel en Labradoodle', 'Engelse Cocker Spaniel', 'West Highland White Terrier', 'Schotse Terrier',
  'Cairn, Norfolk en Norwich Terrier', 'Schnauzer', 'Airedale Terrier', 'Maltezer', 'Shih Tzu',
  'Zwarte Russische Terrier', 'Bouvier des Flandres', 'Berner Sennenhond', 'Jack Russell Terrier',
];

// Letterlijk van Google (stand 3 oktober 2026, sortering "Nieuwste"), ingekort met "…" waar Google of wij inkorten.
// Alleen 5-sterrenreviews met tekst. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Jade H.', wanneer: 'een jaar geleden', tekst: 'Super lieve, vriendelijke en zorgzame vrouw! Ze is niet alleen heel attent naar mensen, maar ook echt fantastisch met honden. Je ziet gewoon dat de honden zich meteen op hun gemak voelen en haar geweldig vinden. …' },
  { naam: 'Fred v. D.', wanneer: '2 jaar geleden', tekst: 'Bijzonder vriendelijke trimster Tanja. Een vakvrouw.' },
  { naam: 'Ineke M.', wanneer: '2 jaar geleden', tekst: 'Lief voor de dieren ! Verzorgen en trimmen de honden prima en zijn zeer nauwkeurig' },
  { naam: 'Miranda B.', wanneer: '3 jaar geleden', tekst: 'Ik kreeg weer een schone klitvrije hond terug ...hond blij en baasjes blij' },
  { naam: 'Petra R.', wanneer: '5 jaar geleden', tekst: 'Boris en Denzel gaan graag bij Tanja knippen.' },
  { naam: 'Barbara d. B.', wanneer: '8 jaar geleden', tekst: 'Super vriendelijke en zorgzame vrouw Tanja! Zorgt goed voor de diertjes 👍 …' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hoi Tanja, ik wil graag een afspraak maken voor mijn hond.');
