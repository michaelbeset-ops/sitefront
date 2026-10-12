// Feiten (bekeken 12 oktober 2026), bronnen in bron/:
// - Google-profiel Kopasol: categorie Interieurinrichter, Koninginneweg, 2982 AM Ridderkerk (woonadres: alleen de plaats tonen),
//   06 23057763, geen website, geen openingstijden. 5,0 uit 10 reviews, nieuwste 2 maanden oud. Beschrijving van de eigenaar:
//   inkoop en verkoop van plissé hordeuren en gordijnen; opkopen van foutief bestelde of verkeerd ingemeten partijen van bedrijven.
// - Marktplaats "Ksol horren" (Ridderkerk, via Google-review gekoppeld): 2 jaar op Marktplaats, 4,8 uit 50 reviews,
//   "Reageert snel" 41x, "Vriendelijk" 41x. Advertenties van 5 okt 2026: nieuwe plissé hordeuren Luxaflex, Unilux, Hamstra,
//   inkorten op hoogte, meerdere maten op voorraad, ophalen of verzenden. Prijzen NIET getoond (tijdgebonden).
// - Eigenaarsnaam: niet in een eigen bron. KvK: niet gevonden. E-mail: niet bekend.
export const site = {
  naam: 'Kopasol',
  plaats: 'Ridderkerk',
  tel: '06 23 05 77 63',
  telHref: 'tel:+31623057763',
  wa: 'https://wa.me/31623057763',
  reviews: 'https://www.google.com/maps/place/Kopasol/@51.8760378,4.5952057,17z/data=!4m6!3m5!1s0x47c42dfec90bad97:0x5ecc3d5b9dcd68f1!8m2!3d51.8760378!4d4.5952057!16s%2Fg%2F11yy0rv2dc',
  marktplaats: 'https://www.marktplaats.nl/experiences/user-reviews/51880757/',
  google: { score: '5,0', aantal: 10 },
  mp: { score: '4,8', aantal: 50 },
  themeColor: '#2a2f33',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (alle 5 sterren), ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Hans B.', wanneer: '3 maanden geleden', tekst: 'Top adres. Kocht een plissehor voor de schuifpui. Had hem niet exact op maat liggen maar dat was geen probleem. Vakkundig is de hor op maat gemaakt en verzonden. … Vakwerk! Thanks!' },
  { naam: 'Alex H.', wanneer: '2 maanden geleden', tekst: 'Zochten een betaalbare oplossing voor een plissé hordeur. Uitstekend advies gekregen, dacht echt mee. Reageert snel en komt zijn woord na. Prettig zakendoen en een mooie kwalitatieve oplossing gekregen. Erg blij mee!' },
  { naam: 'Local Guide', wanneer: '7 maanden geleden', tekst: 'Ik werd geholpen door een zeer vriendelijke vakkundige verkoper die ook de eigenaar van dit bedrijf is. Hij heeft voor mij de plissé deur aangepast en mij met een goed gevoel naar huis late gaan. … Kortom, betrouwbaar bedrijf met goede service en kwaliteit goederen. Zeker een aanrader.' },
  { naam: 'Sander V.', wanneer: '3 maanden geleden', tekst: 'Goed geholpen en hele nette prijzen voor nette hordeuren.' },
  { naam: 'Robert v.', wanneer: '5 maanden geleden', tekst: 'Super geholpen.Heel blij mee.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Kopasol, ik zoek een plissé hordeur.');
