// Feiten: Google-bedrijfsprofiel "New Look" (bekeken 3 oktober 2026; 4,7 uit 46 reviews, geen website), denieuwees.nl
// (winkelpagina "New Look Barbier Shop" met dezelfde beschrijving en tijden), Facebook Newlook.barbershopnl.
// Nieuwe Es 75, 4254 AW Sleeuwijk, Winkelcentrum De Nieuwe Es. 06 81 68 94 51. Ma t/m vr 09:30-18:00, za 09:30-17:00,
// zondag gesloten. Uit reviews: knippen zonder afspraak, contant betalen, kinderen welkom. Geen prijzen gepubliceerd.
export const site = {
  naam: 'New Look',
  volledig: 'New Look Barber Shop',
  straat: 'Nieuwe Es 75',
  postcode: '4254 AW',
  plaats: 'Sleeuwijk',
  centrum: 'Winkelcentrum De Nieuwe Es',
  tel: '06 81 68 94 51',
  telHref: 'tel:+31681689451',
  wa: 'https://wa.me/31681689451',
  facebook: 'https://www.facebook.com/Newlook.barbershopnl/',
  maps: 'https://www.google.com/maps/search/?api=1&query=New+Look+Nieuwe+Es+75+Sleeuwijk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=New+Look+Nieuwe+Es+75+Sleeuwijk',
  google: { score: '4,7', aantal: 46 },
  themeColor: '#141019',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Minuten voor het live open/dicht-label.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '09.30', dicht: '18.00' },
  { dag: 2, naam: 'Dinsdag', open: '09.30', dicht: '18.00' },
  { dag: 3, naam: 'Woensdag', open: '09.30', dicht: '18.00' },
  { dag: 4, naam: 'Donderdag', open: '09.30', dicht: '18.00' },
  { dag: 5, naam: 'Vrijdag', open: '09.30', dicht: '18.00' },
  { dag: 6, naam: 'Zaterdag', open: '09.30', dicht: '17.00' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Diensten: hun eigen Google-beschrijving ("strakke kapsels tot baardverzorging", "verzorgingsproducten"),
// hun eigen foto's (fades, baardcontour) en reviews (kinderen).
export const chips = ['Heren knippen', 'Fades', 'Strakke kapsels', 'Baard trimmen', 'Baardcontouren', 'Kinderen knippen', 'Verzorgingsproducten'];

// Letterlijk van Google (stand 3 oktober 2026), ingekort met "…" waar aangegeven. Alleen 5-sterrenreviews.
export const reviews = [
  { naam: 'Peter W.', wanneer: '2 maanden geleden', tekst: 'Aardige kappers die uitgebreid de tijd nemen om je kapsel perfect naar je zin te krijgen.' },
  { naam: 'Husam A.', wanneer: '6 maanden geleden', tekst: 'Deze barbershop is echt top De kapper is een zeer respectvolle en professionele persoon De ontvangst is warm en vriendelijk, waardoor je je meteen op je gemak voelt …' },
  { naam: 'Ibrahim K.', wanneer: '6 maanden geleden', tekst: 'Heel tevreden! Vriendelijke service, er werd goed geluisterd naar mijn wensen en het resultaat is super mooi. Zeker een aanrader!' },
  { naam: 'Hanneke V.', wanneer: 'een jaar geleden', tekst: 'Super vriendelijke mensen en lief en rustig met de kids!! Goede service' },
  { naam: 'Tina L.', wanneer: 'een jaar geleden', tekst: 'Goeie kapper, werkt precies en netjes en probeert altijd te zorgen dat je tevreden bent!' },
  { naam: 'Ruud v. B.', wanneer: '3 jaar geleden', tekst: 'Top kapper, knipt goed en ook nog eens betaalbaar' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waVraag = waMet('Hoi New Look, ik wil graag langskomen. Is het nu druk?');
