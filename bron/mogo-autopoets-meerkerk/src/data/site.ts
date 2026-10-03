// Feiten: Google-bedrijfsprofiel "MoGo Autopoetsbedrijf" (bekeken 3 oktober 2026; 4,8 uit 18 reviews), Facebook mogoautopoets,
// Instagram @mogoautopoets, TikTok @mogoautopoets, KvK 80202306 (via liza.nl). Zie bron/. Gorinchemsestraat 1B, 4231 BE Meerkerk.
// 06 21 98 05 63, Mogoautopoets@gmail.com. Ma t/m do 08:30-17:30, vr 08:30-17:00, za en zo gesloten (Google).
// Oude website mogoautopoetsbedrijf.nl lost niet meer op; het webarchief bevat alleen een botcheck-pagina.
export const site = {
  naam: 'MoGo Autopoetsbedrijf',
  kort: 'MoGo',
  straat: 'Gorinchemsestraat 1B',
  postcode: '4231 BE',
  plaats: 'Meerkerk',
  tel: '06 21 98 05 63',
  telHref: 'tel:+31621980563',
  wa: 'https://wa.me/31621980563',
  mail: 'mogoautopoets@gmail.com',
  kvk: '80202306',
  instagram: 'https://www.instagram.com/mogoautopoets/',
  facebook: 'https://www.facebook.com/mogoautopoets/',
  tiktok: 'https://www.tiktok.com/@mogoautopoets',
  maps: 'https://www.google.com/maps/search/?api=1&query=MoGo+Autopoetsbedrijf+Gorinchemsestraat+1B+Meerkerk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=MoGo+Autopoetsbedrijf+Meerkerk',
  google: { score: '4,8', aantal: 18 },
  themeColor: '#f6f7f9',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden in minuten voor de live-status.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.30', dicht: '17.30', van: 510, tot: 1050 },
  { dag: 2, naam: 'Dinsdag', open: '08.30', dicht: '17.30', van: 510, tot: 1050 },
  { dag: 3, naam: 'Woensdag', open: '08.30', dicht: '17.30', van: 510, tot: 1050 },
  { dag: 4, naam: 'Donderdag', open: '08.30', dicht: '17.30', van: 510, tot: 1050 },
  { dag: 5, naam: 'Vrijdag', open: '08.30', dicht: '17.00', van: 510, tot: 1020 },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '', van: 0, tot: 0 },
  { dag: 0, naam: 'Zondag', open: '', dicht: '', van: 0, tot: 0 },
];

// Diensten zoals MoGo ze zelf beschrijft in hun posts (wassen, 1- en 2-staps polijsten, wax, lakverzegeling, keramische coating,
// glascoating, (stoom)reinigen interieur, vlekken uit stoelen, kunststof ontvetten en impregneren) en de servicelabels bij hun
// Google-reviews (uitgebreide reiniging, interieur stofzuigen, stoelreiniging, poetswerk). Geen prijzen.
export const chips = ['Wassen', 'Polijsten', 'Lakverzegeling', 'Keramische coating', 'Glascoating', 'Interieur stoomreinigen', 'Stoelreiniging', 'Wax', 'Op locatie'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Rob T.', wanneer: '3 maanden geleden', tekst: 'Voor het eerst gebruik gemaakt van MoGo en ik ben bijzonder tevreden. … Tygo verscheen keurig op tijd op de locatie. De auto is met zorg behandeld en het resultaat is als nieuw. Tygo heeft aandacht voor details en levert goed werk af.' },
  { naam: 'Martijn v. G.', wanneer: '9 maanden geleden', tekst: 'Vandaag onze 11 jaar oude Range Rover opgehaald bij Tygo die hem van binnen en buiten weer in volle glorie heeft weten te herstellen! Hij heeft hem weer helemaal in showroomstaat afgeleverd.' },
  { naam: 'Cock B.', wanneer: '11 maanden geleden', tekst: 'Tygo van Mogo werkelijk fantastische jongen die weet wat werken is en bij ons 9 stuks auto’s waaronder bedrijfsbussen en luxewagens volledig heeft hersteld van verf spatten … Onze complimenten.' },
  { naam: 'Thomas v. H.', wanneer: '7 maanden geleden', tekst: 'Zeer positieve ervaring. Erg kundig en verstand van het werk, en tevens goede prijzen. Erg klantvriendelijk, ik raad mogo zeker aan!' },
  { naam: 'Cees & Crista S.', wanneer: '2 jaar geleden', tekst: 'Vandaag is onze auto grondig onderhanden genomen door MoGo. En we zijn meer dan tevreden. De bekleding is vlek vrij, het interieur ruikt fris en hij glimt of dat hij zo nieuw uit de showroom komt.' },
  { naam: 'Nick V.', wanneer: '5 jaar geleden', tekst: '… In overleg kunnen ze de werkzaamheden op locatie verrichten, ideaal. Ik ben erg tevreden over het eindresultaat, mijn auto ziet er al een paar weken weer als nieuw uit. Daar kan geen autowasstraat tegenop.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hoi MoGo, ik wil graag een afspraak maken om mijn auto te laten poetsen.');
