// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron:
// - deutzonwering.nl (alle 21 pagina's in bron/web/alle-paginas.txt): Pakketboot 26, 3991 CH Houten (achter Pakketboot 38, Zorgdepot),
//   mobiel 06 8395 9290, telefoon 030 785 71 90, info@deutzonwering.nl, KvK 71413472. Showroom open op afspraak, 1e verdieping, trap.
//   Werkwijze: vrijblijvend langs voor advies en inmeten, binnen 2 dagen offerte, bestellen, afspraak voor plaatsen.
//   Storing (regio Houten/Nieuwegein e.o.): streven binnen 48 uur langs, voorrijkosten en diagnose vaste prijs 150,00 incl. btw,
//   eerste 30 minuten inbegrepen, onderdelen in overleg.
// - Google-bedrijfsprofiel: 5,0 uit 15 reviews. Eigenaarsreacties ondertekend "Melvin van Deutekom, Deut zonwering".
// - Facebook (Deut zonwering): werkgebied Vianen, Nieuwegein, Utrecht, Lopik, Werkhoven, Maarssen, Tull en 't Waal, IJsselstein,
//   Houten, Zeist. Laatste posts 23 juni 2025.
export const site = {
  naam: 'Deut Zonwering',
  eigenaar: 'Melvin van Deutekom',
  straat: 'Pakketboot 26',
  postcode: '3991 CH',
  plaats: 'Houten',
  tel: '06 83 95 92 90',
  telHref: 'tel:+31683959290',
  vast: '030 785 71 90',
  vastHref: 'tel:+31307857190',
  wa: 'https://wa.me/31683959290',
  mail: 'info@deutzonwering.nl',
  kvk: '71413472',
  facebook: 'https://www.facebook.com/people/Deut-zonwering/100047378928538/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Deut+Zonwering+Pakketboot+26+Houten',
  google: { score: '5,0', aantal: 15 },
  themeColor: '#1c1f23',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// De plaatsen uit hun Facebook-intro (Houten en Nieuwegein voorop, zoals op hun site "Nieuwegein/Houten e.o.").
export const plaatsen = ['Houten', 'Nieuwegein', 'Utrecht', 'Vianen', 'IJsselstein', 'Lopik', 'Werkhoven', 'Maarssen', 'Zeist', "Tull en 't Waal"];

// Letterlijk van Google (5 sterren, stand 8 oktober 2026), ingekort met "…". Achternaam als initiaal.
export const reviews = [
  { naam: 'Willy', tekst: 'op basis van de zonwering bij de buren hebben wij dezelfde zonwering gedaan. Is netjes geinstalleerd, werkt prima, Melvin hield ons op de hoogte van de levertijd.' },
  { naam: 'Wesley v.d. W.', tekst: 'Fijne communicatie en nette montage. Bedrijf denkt mee met de wensen en hebben een vrij scherpe prijs/kwaliteitsverhouding.' },
  { naam: 'Cynthia D.', tekst: 'Snelle en goede service voor het aanbrengen van nieuwe zonwering aan de gehele voorzijde van mijn woning. … Ook nog snel teruggekomen voor afstelling na paar weken of maanden gebruik.' },
  { naam: 'Ate O.', tekst: 'Heel tevreden met de geleverde screens. Goed meegedacht en afgewerkt, en ze waren erg vriendelijk. Laat die zon maar komen!' },
  { naam: 'Kevin', tekst: 'Alles verliep soepel en snel, zowel bij de inmeting als de montage. Absolute aanrader.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Melvin, ik heb een vraag over zonwering.');
