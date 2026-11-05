// Feiten: zie bron/google-profiel.txt en bron/google-reviews.txt (Google, bekeken 5 november 2026).
// Daltonstraat 8A, 3316 GD Dordrecht. 06 47 50 32 21. luxebanden@gmail.com (spandoek op de gevel, foto op Google).
// Ma t/m za 08:00-18:00, zondag gesloten. Geen website, geen eigenaarsnaam. Google-score bewust niet tonen.
export const site = {
  naam: 'Luxe Banden',
  straat: 'Daltonstraat 8A',
  postcode: '3316 GD',
  plaats: 'Dordrecht',
  tel: '06 47 50 32 21',
  telHref: 'tel:+31647503221',
  wa: 'https://wa.me/31647503221',
  mail: 'luxebanden@gmail.com',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=Luxe+banden+Daltonstraat+8A+3316+GD+Dordrecht',
  reviews: 'https://www.google.com/maps/place/Luxe+banden/@51.7785691,4.6385357,17z/data=!4m6!3m5!1s0x47c42f317118fbfb:0xb95c7c48a66b8367!8m2!3d51.7785691!4d4.6385357',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '18.00' },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '18.00' },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '18.00' },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '18.00' },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '18.00' },
  { dag: 6, naam: 'Zaterdag', open: '08.00', dicht: '18.00' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Diensten zoals op hun spandoek (APK, reparatie, onderhoud, aircoservice, schadeherstel) en hun naam (banden).
export const diensten = ['Banden', 'APK', 'Onderhoud', 'Reparatie', 'Aircoservice', 'Schadeherstel'];

// Letterlijk van Google (5 november 2026), "…" = afgekapt door Google. Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Mohamed', wanneer: '2 weken geleden', tekst: 'Bij Garage Luxe Banden voel je meteen vakmanschap en betrouwbaarheid. Het team is snel, vriendelijk en weet precies wat ze doen, waardoor je met een gerust hart weer de weg op kan. Echt een topservice!' },
  { naam: 'Gerby C.', wanneer: 'een jaar geleden', tekst: 'ik vind het echt een goede garage met eerlijke mensen en normale (goedkoper dan gemiddeld) prijzen ze hadden me echt snel geholpen met remblokken vervangen die …' },
  { naam: 'Danty', wanneer: 'een jaar geleden', tekst: 'Ik had een elektrische probleem met me auto. Het was netjes gerepareerd en de eigenaar was heel vriendelijk' },
  { naam: 'Ibraheem S.', wanneer: 'een jaar geleden', tekst: 'Uitstekende service ,normale prijzen, vriendelijk bedrijf betrouwbaar' },
  { naam: 'Wafa A.', wanneer: 'een jaar geleden', tekst: 'Netjes gewerkt hele snelle service en goede behandeling' },
  { naam: 'Mahmoud', wanneer: 'een jaar geleden', tekst: 'Top service voor scooter of auto betrouwbaar en veilige!' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAlgemeen = waMet('Hoi Luxe Banden, ik heb een vraag over mijn auto.');
