// Feiten (bekeken 12-13 oktober 2026), bronnen in bron/:
// - Canva-site tilburgmobilebikes.my.canva.site: root geeft 404, /website-tmb is een startpagina met alleen logo en
//   "Volgende pagina"; 11 subpagina's (bron/canva/*.txt): over ons, occasions, reparatieservice, delivery (taxibusje),
//   onderdelen, werktijden (op afspraak, 7 dagen, 08:00-21:00), contact (WhatsApp eerst), garantievoorwaarden, prijslijst.
// - Google-profiel "Tilburg Mobile Bikes", Winkel voor tweedehands fietsen, Groenstraat, 5021 LL Tilburg, 06 16192040,
//   4,9 uit 162 reviews, website = de Canva-site. Onderwerpen: prijs 34, student 8, zondag 8, band 7. Nieuwste reviews
//   "een maand geleden" (bron/google/reviews-browser.json). Google-tijden wijken af (ma-vr 9-17:30); wij volgen hun eigen site.
// - Instagram @yaronline_tmb: "Groenstraat (in voltage terrein)", laatste post 8-12-2025.
// Eigenaarsnaam staat niet op hun eigen site: niet gebruikt.
export const site = {
  naam: 'Tilburg Mobile Bikes',
  kort: 'TM Bikes',
  plaats: 'Tilburg',
  straat: 'Groenstraat',
  postcode: '5021 LL',
  terrein: 'Voltage-terrein',
  tel: '06 16 19 20 40',
  telHref: 'tel:+31616192040',
  wa: 'https://wa.me/31616192040',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Tilburg+Mobile+Bikes%2C+Groenstraat%2C+5021+LL+Tilburg',
  reviews: 'https://www.google.com/maps/place/Tilburg+Mobile+Bikes/@51.5470318,5.0885179,17z/data=!4m6!3m5!1s0x47c6bfd8c382f8e5:0x153847575f296a7d!8m2!3d51.5470318!4d5.0885179!16s%2Fg%2F11zk7yy48r',
  insta: 'https://www.instagram.com/yaronline_tmb/',
  google: { score: '4,9', aantal: 162 },
  themeColor: '#0c241d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Eigen site: "Wij werken uitsluitend op afspraak, 7 dagen per week. Beschikbaar van 08:00 tot 21:00 uur, ook in het weekend."
export const tijd = { van: 8, tot: 21 };
export const dagen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];

// Letterlijk van Google (alle 5 sterren). Naam: voornaam + initiaal. Ingekort met "…".
export const reviews = [
  { naam: 'Quentin G.', wanneer: '4 maanden geleden', tekst: 'Binnen vijf minuten na mijn telefoontje over mn lekke band stond hij al klaar om mijn fiets op te halen, en nog dezelfde avond had ik hem volledig gerepareerd terug! … Super goede service' },
  { naam: 'Dyllan A.', wanneer: 'een maand geleden', tekst: 'Ben vandaag langs gegaan om een tweedehands fiets te kopen en ben weg gefietst met een hele mooie tweedehandse fiets voor een mooie prijs.' },
  { naam: 'M.', wanneer: '5 maanden geleden', tekst: 'Mijn fiets had echt een flinke opknapbeurt nodig en dat is hier super goed aangepakt. Hij rijdt nu veel beter dan eerst. … Dit wordt mijn vaste fietsenmaker in ieder geval.' },
  { naam: 'Maaike S.', wanneer: '4 maanden geleden', tekst: 'Altijd een fijne plek om fietsen te kopen! … deze man denkt mee en leverd goede fiets af, met verlichting en een slot. Echt een aanrader voor iedereen!' },
  { naam: 'Pepijn M.', wanneer: 'een maand geleden', tekst: 'Na een kort belletje mocht ik gelijk mijn fiets brengen om een binnenband te vervangen. Op de zelfde dag mocht ik hem nog ophalen! Service was top, met een eerlijke uitleg en keuze en veel aandacht voor de klant.' },
];

// Google: "Reviews met vermelding van ..." (aantallen zoals Google ze toont).
export const onderwerpen = [['prijs', 34], ['student', 8], ['zondag', 8], ['band', 7]] as const;

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Tilburg Mobile Bikes, ik heb een vraag.');
export const uur = (h: number) => `${String(h).padStart(2, '0')}:00`;
