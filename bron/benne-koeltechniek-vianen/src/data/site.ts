// Feiten (bekeken 3 oktober 2026):
// - bennekoeltechniek.nl (home, airconditioning, koeltechniek, luchtvochtigheid, service, over ons, projecten, contact, certificaat).
// - Google-bedrijfsprofiel "Benne Koeltechniek": 5,0 uit 3 reviews, Nieuweweg 2, 4133 RC Vianen, 06 20949755, geen openingstijden.
// - KvK via Oozo/Airco-expres/Company.info: Benne Koeltechniek B.V., KvK 87601435, opgericht 16-09-2022, 1 werkzame persoon.
// Niet gevonden: actuele vermelding in het STEK-register (stek.nl/stek-check, gezocht op Vianen), daarom geen STEK-claim als actueel feit.
export const site = {
  naam: 'Benne Koeltechniek',
  straat: 'Nieuweweg 2',
  postcode: '4133 RC',
  plaats: 'Vianen',
  tel: '06 20 94 97 55',
  telHref: 'tel:+31620949755',
  wa: 'https://wa.me/31620949755',
  mail: 'info@bennekoeltechniek.nl',
  kvk: '87601435',
  maps: 'https://www.google.com/maps/search/?api=1&query=Benne+Koeltechniek+Nieuweweg+2+Vianen',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Benne+Koeltechniek+Vianen',
  google: { score: '5,0', aantal: 3 },
  themeColor: '#0c1714',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Specialisaties en ruimtes van hun eigen site (home, airconditioning, luchtvochtigheid, service) + stacaravans uit een Google-review.
export const chips = ['Airconditioning', 'Multisplit', 'Koelcellen', 'Vriescellen', 'Luchtbehandeling', 'Luchtbevochtiging', 'Luchtontvochtiging', 'Service en onderhoud', 'Advies en ontwerp'];

// Merken van hun site, zonder Sanyo (dat merk bestaat niet meer als airco-merk). Met "andere merken in overleg".
export const merken = ['Panasonic', 'Mitsubishi', 'LG', 'Daikin'];

// Projectnamen letterlijk van hun projectenpagina.
export const projecten = ['Luchtbehandeling, Utrecht', 'Kantoorruimtes, Lelystad', 'Slaapkamer, Gouda', 'Zolderkamer, Delfgauw', 'Zolderkamer houten huis, Almere', 'Kinderdagverblijf, Lelystad'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = {
  groot: {
    naam: 'F. R.',
    tekst: [
      'Ik heb Benne koeltechniek gebeld voor advies over het laten plaatsen van twee airco units. Peter is langs geweest en heeft duidelijk advies gegeven wat voor mijn woning het beste is. Een dag later een mooie en nette offerte binnen gekregen.',
      '… snoeren worden netjes in een gootje weggewerkt. Ook worden de binnen units aan het eind wanneer ze geïnstalleerd zijn zelfs met een doekje afgenomen. …',
      'kort samen gevat een top service!',
    ],
  },
  klein: [
    { naam: 'Daniëlle A.', tekst: 'Professioneel en vakkundig. Zeer klantvriendelijk.', noot: 'Google review' },
    { naam: 'Patrick D.', tekst: 'Een absolute aanrader voor eigenaren van stacaravans die op zoek zijn naar koel- en verwarmingsoplossingen. Hoogwaardige producten, expertise en uitstekende service.', noot: 'Google review, door Google vertaald uit het Duits' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag, ik wil graag een offerte aanvragen bij Benne Koeltechniek.');
