// Feiten (bekeken 5 oktober 2026), ruwe bronnen in ../../bron:
// - Google-bedrijfsprofiel "Kaffee de Bonnefooi" (Café): Stoofdijk 26, 4671 CR Dinteloord, 06 13048210, 4,7 uit 165 reviews,
//   do 19:00-02:00, vr en za 14:00-04:00, zo 14:00-02:00, ma t/m wo gesloten. Geen website ("Website toevoegen").
//   (bron/google/google.txt, over.png)
// - Facebook facebook.com/KaffeedeBonnefooi: Café, kaffeedebonnefooi@hotmail.com, terras aanwezig, 3,5 d. volgers,
//   Nederlandse Horecaprijzen 2023/2024 (intro). Logo "Kaffee de Bonnefooi Dinteloord (since 1996)",
//   banner "Kaffee de Bonnefooi 1996-2026 And Still Rockin'". Eigenaren tekenen als "Toon en Elly" / "Toon En Elly de Bruijn".
//   Kaarten "bij Kaffee de Bonnefooi of stuur een WhatsApp naar 0613048210". (bron/fb/fb.txt, events.txt, fbhi/fbhi.txt)
export const site = {
  naam: 'Kaffee de Bonnefooi',
  straat: 'Stoofdijk 26',
  postcode: '4671 CR',
  plaats: 'Dinteloord',
  tel: '06 13 04 82 10',
  telHref: 'tel:+31613048210',
  wa: 'https://wa.me/31613048210',
  mail: 'kaffeedebonnefooi@hotmail.com',
  facebook: 'https://www.facebook.com/KaffeedeBonnefooi/',
  events: 'https://www.facebook.com/KaffeedeBonnefooi/events',
  maps: 'https://www.google.com/maps/search/?api=1&query=Kaffee+de+Bonnefooi+Stoofdijk+26+Dinteloord',
  google: { score: '4,7', aantal: 165 },
  themeColor: '#141312',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). o/d in minuten vanaf middernacht van die dag; sluiten na middernacht = boven 1440.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 2, naam: 'Dinsdag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 3, naam: 'Woensdag', open: '', dicht: '', o: 0, d: 0 },
  { dag: 4, naam: 'Donderdag', open: '19.00', dicht: '02.00', o: 1140, d: 1560 },
  { dag: 5, naam: 'Vrijdag', open: '14.00', dicht: '04.00', o: 840, d: 1680 },
  { dag: 6, naam: 'Zaterdag', open: '14.00', dicht: '04.00', o: 840, d: 1680 },
  { dag: 0, naam: 'Zondag', open: '14.00', dicht: '02.00', o: 840, d: 1560 },
];

// Agenda: alleen evenementen van hun eigen Facebookpagina (tab Evenementen + bericht 16 sep), stand 5 oktober 2026.
// Verlopen avonden worden in de browser automatisch verborgen.
export type Optreden = {
  id: string; datum: string; dag: string; nr: string; maand: string; tijd: string;
  act: string; wat: string; prijs: string; actie: 'kaarten' | 'quiz' | 'gratis' | 'vraag';
};
export const agenda: Optreden[] = [
  { id: 'ccs', datum: '2026-10-17', dag: 'Za', nr: '17', maand: 'okt', tijd: '21.00', act: 'Creedence Clearwater Survival', wat: 'Tribute to Creedence Clearwater Revival', prijs: 'Voorverkoop € 12,50 · deur € 15', actie: 'kaarten' },
  { id: 'quiz', datum: '2026-10-24', dag: 'Za', nr: '24', maand: 'okt', tijd: '20.00', act: 'Pubquiz', wat: 'Gepresenteerd door Martijn Hagens van Marty Party · teams van 2 tot 6', prijs: '€ 20 per team · betaald = ingeschreven', actie: 'quiz' },
  { id: 'wilburys', datum: '2026-10-31', dag: 'Za', nr: '31', maand: 'okt', tijd: '21.00', act: 'Still Traveling Wilburys', wat: 'Tribute to The Traveling Wilburys', prijs: 'Voorverkoop € 12,50 · deur € 15', actie: 'kaarten' },
  { id: 'platen', datum: '2026-11-08', dag: 'Zo', nr: '8', maand: 'nov', tijd: '11.00-16.00', act: 'Platenbeurs', wat: 'Met Flakkee Records · ruim 30 meter aan kramen vol platen', prijs: 'Toegang gratis', actie: 'gratis' },
  { id: 'scorpions', datum: '2026-11-14', dag: 'Za', nr: '14', maand: 'nov', tijd: '21.00', act: 'Crazy World plays Scorpions', wat: 'Scorpions-tribute uit België', prijs: 'Kaarten? Vraag het even via WhatsApp', actie: 'vraag' },
  { id: 'cash', datum: '2026-11-26', dag: 'Do', nr: '26', maand: 'nov', tijd: '', act: 'Church of Cash', wat: "World's best Johnny Cash tribute (USA)", prijs: 'Zet hem alvast in je agenda', actie: 'vraag' },
];

// Letterlijk van Google (5 sterren, stand 5 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Danielle W.', wanneer: '3 jaar geleden', tekst: 'Geweldige zaak waar vaak bandjes komen optreden … Hele fijne eigenaren en gezellig personeel en hele goede sfeer!!' },
  { naam: 'Levina d.R.', wanneer: 'een jaar geleden', tekst: 'Het blijft een fantastisch mooi muziek café met topbands dus we blijven terugkomen' },
  { naam: 'Angelina K.', wanneer: '3 jaar geleden', tekst: 'Geweldig gezellig café in Amerikaanse style, leuke mensen die echt hart voor hun zaak hebben' },
  { naam: 'Mickey H.', wanneer: '4 jaar geleden', tekst: 'Een heerlijk terras en kroeg in thema alsof je niet meer in nederland bent. We zijn uitstekend bediend en vermaakt, en het was bere gezellig naast het feit dat de zelfgemaakte cocktails ook geweldig smaakten!' },
  { naam: 'Kees S.', wanneer: '3 jaar geleden', tekst: 'Top tent lijkt op een museum en zeker voor bikers. Ook regelmatig zeer goeie bands' },
  { naam: 'Mireille v.G.', wanneer: '7 maanden geleden', tekst: 'Toffe bar met leuke aankleding. Naar een coverband wezen kijken, super leuk. Voor herhaling vatbaar' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Toon en Elly! Ik heb een vraag:');
