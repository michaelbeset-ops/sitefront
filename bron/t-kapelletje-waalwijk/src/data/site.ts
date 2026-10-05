// Feiten (bekeken 5 oktober 2026), bewijs in bron/:
// - Google-profiel "Restaurant 't Kapelletje" (niet geclaimd: "Dit bedrijf claimen"): Kloosterweg 71, 5144 CA Waalwijk,
//   0416 295 425, EUR 10-40 p.p., websiteknop = facebook.com, ma en wo t/m zo 09:30-22:00, di gesloten (bron/google).
// - Facebook "T kapelletje" (facebook.com/p/T-kapelletje-61578952769126): 2,3 d. volgers. Intro: "Welkom bij Restaurant
//   't Kapelletje in Waalwijk! Een sfeervolle plek waar gastvrijheid, gezelligheid en lekker eten samenkomen. Kom langs voor
//   lunch, diner of een gezellige borrel in een warme ambiance. Bel of app voor info : 0416295425". Info-tab: mobiel en
//   WhatsApp +31 6 83531830. Post 4 juli 2026: telefoonstoring, tijdelijk 06 5878 0119 (bron/fb).
// - Logo: kapelletje met boog, "'T KAPELLETJE RESTAURANT & TERRAS", saliegroen en wit op zwart.
// - BD.nl 6 okt 2025 (alleen kop/intro): "Na vijftien jaar wachten: restaurant 't Kapelletje opent", "naast het bedehuisje
//   aan de ...". Boxmeernieuws 6 okt 2025: "opent woensdag restaurant en terras 't Kapelletje aan de Meerdijk".
// - Menukaart: eigen kaart (foto's in Facebook-post 13 okt 2025, ook op tkapelletje.menukaart.net), bron/menu.
// Geen eigen website, geen e-mailadres, geen KvK-nummer gevonden.
export const site = {
  naam: "'t Kapelletje",
  vol: "Restaurant 't Kapelletje",
  straat: 'Kloosterweg 71',
  postcode: '5144 CA',
  plaats: 'Waalwijk',
  tel: '0416 295 425',
  telHref: 'tel:+31416295425',
  mob: '06 83 53 18 30',
  wa: 'https://wa.me/31683531830',
  facebook: 'https://www.facebook.com/p/T-kapelletje-61578952769126/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Restaurant+t+Kapelletje+Kloosterweg+71+Waalwijk',
  themeColor: '#1a1d1a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Minuten voor het script. Bron: Google-profiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '9.30', dicht: '22.00', o: 570, d: 1320 },
  { dag: 2, naam: 'Dinsdag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 3, naam: 'Woensdag', open: '9.30', dicht: '22.00', o: 570, d: 1320 },
  { dag: 4, naam: 'Donderdag', open: '9.30', dicht: '22.00', o: 570, d: 1320 },
  { dag: 5, naam: 'Vrijdag', open: '9.30', dicht: '22.00', o: 570, d: 1320 },
  { dag: 6, naam: 'Zaterdag', open: '9.30', dicht: '22.00', o: 570, d: 1320 },
  { dag: 0, naam: 'Zondag', open: '9.30', dicht: '22.00', o: 570, d: 1320 },
];

// Letterlijk van Google (5 sterren, stand 5 oktober 2026), ingekort met "...". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Laura v. S.', wanneer: '4 maanden geleden', tekst: 'Een leuk restaurant waar je waar voor je geld krijgt en de kwaliteit super is! Het ziet er mooi uit binnen en buiten heb je genoeg plek om lekker te zitten.' },
  { naam: 'Wim V. E.', wanneer: '4 maanden geleden', tekst: 'We hebben vanavond met een gezin van 16 mensen, waaronder 6 kinderen erg genoten van ons diner. … De ossenhaas is boterzacht. De spareribs heerlijk mals.' },
  { naam: 'Cas W.', wanneer: '2 maanden geleden', tekst: 'Ik vind het hier heel goed vertoeven! Sfeer is goed, mooi ingericht en het eten staat mooi in verhouding met de prijzen.' },
  { naam: 'John M.', wanneer: 'een maand geleden', tekst: 'Geweldige locatie. Fantastisch personeel, vriendelijk, top service. Prima menukaart. Goed om te lunchen en te eten.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet("Hallo 't Kapelletje, ik wil graag een tafel reserveren.");
