// Feiten: Google-bedrijfsprofiel "De knapperd" (Dierentrimmer, bekeken 3 oktober 2026; 4,9 uit 15 reviews, "gerund door een
// vrouwelijke ondernemer"), de huidige site deknapperd.nl (Joomla, sinds 2012) en kinderboerderij-werkendam.nl (28 maart 2026:
// "Denise ... (Trimsalon de Knapperd)" aanwezig bij de opening van het zomerseizoen). Geen eigen Facebook of Instagram gevonden.
// Aalscholverstraat 17, 4251 VX Werkendam. 06 11 76 24 82 en 0183 50 48 44 (beide op deknapperd.nl).
// Ma, di, do 09:00-17:00, vr 09:00-16:00, wo/za/zo gesloten (Google). Geen e-mailadres of KvK gevonden.
export const site = {
  naam: 'De Knapperd',
  soort: 'Hondentrimsalon',
  eigenaar: 'Denise',
  straat: 'Aalscholverstraat 17',
  postcode: '4251 VX',
  plaats: 'Werkendam',
  tel: '06 11 76 24 82',
  telHref: 'tel:+31611762482',
  vast: '0183 50 48 44',
  vastHref: 'tel:+31183504844',
  wa: 'https://wa.me/31611762482',
  maps: 'https://www.google.com/maps/search/?api=1&query=De+Knapperd+Aalscholverstraat+17+Werkendam',
  reviews: 'https://www.google.com/maps/search/?api=1&query=De+knapperd+Werkendam',
  google: { score: '4,9', aantal: 15 },
  sinds: 2012,
  themeColor: '#660066',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden als minuten voor de live status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 2, naam: 'Dinsdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 3, naam: 'Woensdag', open: '', dicht: '', van: 0, tot: 0 },
  { dag: 4, naam: 'Donderdag', open: '09.00', dicht: '17.00', van: 540, tot: 1020 },
  { dag: 5, naam: 'Vrijdag', open: '09.00', dicht: '16.00', van: 540, tot: 960 },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '', van: 0, tot: 0 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Handelingen letterlijk uit "Trimmen" op deknapperd.nl ("knippen, uitdunnen, plukken, ontwollen, wassen, kammen en
// borstelen", oren schoonmaken, nagels knippen) en de homepage (volledige trimbeurt, bad, borstelbeurt, hondenkleding,
// verzorgingsproducten, borstels). Geen prijzen: die staan nergens.
export const chips = ['Volledige trimbeurt', 'Knippen', 'Plukken', 'Ontwollen', 'Uitdunnen', 'Wassen', 'Borstelen', 'Oren schoonmaken', 'Nagels knippen', 'Hondenkleding'];

// Letterlijk van Google (stand 3 oktober 2026). Alle vijf reviews met tekst; de overige tien zijn alleen sterren.
export const reviews = [
  { naam: 'Ivonne B.', wanneer: '2 maanden geleden', tekst: 'Super lieve en goede trimster.' },
  { naam: 'Ron B.', wanneer: '7 jaar geleden', tekst: 'Heel erg lief voor honden en levert heel goed werk. Aanrader!' },
  { naam: 'Hettie D.', wanneer: '4 jaar geleden', tekst: 'Goed geholpen en fantastisch hoe er met de honden wordt omgegaan' },
  { naam: 'Cher v.', wanneer: '4 jaar geleden', tekst: 'Prima adres voor de hond altijd vriendelijk personeel en net zo belangrijk ook de hond ga er graag naartoe' },
  { naam: 'Jannie M.', wanneer: '8 jaar geleden', tekst: 'Zijn heel kundig met trimmen. En heel lief voor de honden' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hoi Denise, ik wil graag een afspraak maken voor mijn hond.');
