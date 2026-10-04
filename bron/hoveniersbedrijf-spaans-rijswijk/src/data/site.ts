// Feiten: huidige site hoveniersbedrijfspaans.nl (pagina's Home, Dit doe ik voor u, Mijn werkwijze, Over Rik Spaans, Contact,
// berichten Ontwerp/Aanleg/Onderhoud/Bouwprojecten/Maatwerk tuinmeubilair; opgehaald 4 oktober 2026 via de WordPress-API),
// Google-bedrijfsprofiel "Hoveniersbedrijf Spaans" (bekeken 4 oktober 2026: 4,6 uit 35 reviews, Sionsweg 10, 2286 KK Rijswijk,
// 06 21494099, ma t/m vr 08:00-17:00) en Instagram @hoveniersbedrijfspaans (laatste post 1 september 2026).
// Eigenaar: Rik Spaans, eigen bedrijf sinds 1 april 2012. Geen KvK-nummer gepubliceerd.
export const site = {
  naam: 'Hoveniersbedrijf Spaans',
  straat: 'Sionsweg 10',
  postcode: '2286 KK',
  plaats: 'Rijswijk',
  tel: '06 21 49 40 99',
  telHref: 'tel:+31621494099',
  wa: 'https://wa.me/31621494099',
  mail: 'info@hoveniersbedrijfspaans.nl',
  instagram: 'https://www.instagram.com/hoveniersbedrijfspaans/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Hoveniersbedrijf+Spaans+Sionsweg+10+Rijswijk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Hoveniersbedrijf+Spaans+Rijswijk',
  google: { score: '4,6', aantal: 35 },
  themeColor: '#13201a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// dag: 0 = zondag (zoals Date.getDay). Tijden van het Google-profiel.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '17.00' },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '17.00' },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '17.00' },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '17.00' },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '17.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Letterlijk uit het bericht "Bouwprojecten" en de dienstenpagina.
export const chips = ['Tuinontwerp', 'Aanleg', 'Onderhoud', 'Terrassen', 'Schuttingen', "Veranda's", "Pergola's", 'Schuurtjes', 'Vijvers', 'Tuinmeubilair op maat'];

// Letterlijk van Google (stand 4 oktober 2026), alleen 5-sterrenreviews, ingekort met "…". Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Floor', tekst: 'Rik heeft onze tuin opnieuw bestraat en onze schutting hersteld. We zijn erg gelukkig met het resultaat. Rik is een echte vakman. Hij levert goed werk af, denkt mee, is vriendelijk en communicatief sterk. Ik heb niet eerder iemand meegemaakt die zo netjes werkt. …' },
  { naam: 'Patricia G.', tekst: 'Supervriendelijke, hardwerkende en kundige hoveniers, met een persoonlijke touch. Delen graag hun kennis als je dat wilt en werken graag vanuit duurzame gedachte.' },
  { naam: 'Mela N.', tekst: 'Hoveniersbedrijf Spaans heeft mijn tuin onherkenbaar veranderd! De hele tuin is opnieuw aangelegd, lekker groen en met natuurlijke materialen. Ze hebben een prachtig tuinhuisje met overkapping op maat gemaakt. …' },
  { naam: 'Amy v. B.', tekst: '… Rik heeft onze wensen mooi kunnen omzetten in een ontwerp voor voor- en achtertuin. Hij heeft ook een vlonder incl afschot gemaakt. … Het is allemaal netjes afgewerkt met kwalitatief mooie materialen. Rik heeft veel verstand van zaken, is betrouwbaar en heeft ons heel fijn geadviseerd. …' },
  { naam: 'Marjolijn S.', tekst: 'Creatief, meedenkend, oog voor detail, vriendelijk en hardwerkend. In 2-3 weken tijd de voor- en achtertuin omgetoverd tot een paradijsje. …' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waAfspraak = waMet('Hallo Rik, ik wil graag een afspraak maken voor een kennismaking over mijn tuin.');
