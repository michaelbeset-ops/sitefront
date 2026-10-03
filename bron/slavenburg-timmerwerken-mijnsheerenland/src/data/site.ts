// Feiten: Google-bedrijfsprofiel "Maarten Slavenburg Timmerwerken" (bekeken 3 oktober 2026; 5,0 uit 4 reviews, geen website,
// ma t/m vr 07:00-19:00) en de Facebook-pagina "Slavenburg Timmerwerken" (zelfstandige timmerman, Mijnsheerenland).
// Het adres is een woonhuis: op de site alleen de plaats en het werkgebied. Zie bron/bronnen.txt.
export const site = {
  naam: 'Slavenburg Timmerwerken',
  eigenaar: 'Maarten Slavenburg',
  plaats: 'Mijnsheerenland',
  regio: 'Hoeksche Waard',
  tel: '06 57 58 04 48',
  telHref: 'tel:+31657580448',
  wa: 'https://wa.me/31657580448',
  facebook: 'https://www.facebook.com/maartenslavenburgtimmerwerken',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Maarten+Slavenburg+Timmerwerken+Mijnsheerenland',
  google: { score: '5,0', aantal: 4 },
  themeColor: '#151b18',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Zoals op Google: telefonisch bereikbaar / aan het werk.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '07.00', dicht: '19.00' },
  { dag: 2, naam: 'Dinsdag', open: '07.00', dicht: '19.00' },
  { dag: 3, naam: 'Woensdag', open: '07.00', dicht: '19.00' },
  { dag: 4, naam: 'Donderdag', open: '07.00', dicht: '19.00' },
  { dag: 5, naam: 'Vrijdag', open: '07.00', dicht: '19.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Werk dat op hun eigen foto's (Facebook, Google) te zien is, plus de "Services" bij een Google-review
// (meubelmontage, renovatie, tegelwerk, gipswandreparatie, vloeren repareren).
export const chips = ['Overkappingen', 'Dakopbouw', 'Verbouwen', 'Badkamers en tegelwerk', 'Vloeren', 'Trappen', 'Binnendeuren', 'Kasten op maat', 'Wandpanelen', 'Gipswanden'];

// Letterlijk van Google (stand 3 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Robert B.', bron: 'Google review', tekst: 'Maarten levert vakwerk voor een schappelijke prijs. Het is een vriendelijke gozer waar ik meteen het volste vertrouwen in had. Hij denkt mee om tot de beste oplossing te komen. Een aanrader!' },
  { naam: 'Martijn D.', bron: 'Google review', tekst: 'Vakkundige timmerman die werkt tegen een redelijke prijs ... aanrader' },
];
// Review zonder tekst, alleen de positieve punten die de klant aanvinkte.
export const reviewPunten = { naam: 'Marcel v. G.', punten: ['Stiptheid', 'Kwaliteit', 'Professionaliteit', 'Waarde'] };
// Reactie onder het dakopbouw-bericht op hun Facebook-pagina.
export const fbReactie = { naam: 'Wim V.', tekst: 'Ziet er professioneel uit Maarten, is mooi geworden.' };

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waKlus = waMet('Hoi Maarten, ik heb een klus waar ik graag even over wil overleggen.');
