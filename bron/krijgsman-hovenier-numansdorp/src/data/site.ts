// Feiten: krijgsmanhovenier.nl (Home, Over mij, Diensten, Contracten, Fotoalbum, Contact), Google-bedrijfsprofiel
// "Krijgsman hovenier" (5,0 uit 3, ma-vr 08:00-18:00) en Facebook "Krijgsman Hoveniers". Bekeken 3 oktober 2026.
// Koriander 2 is een woonhuis: op de site alleen de plaats, geen straat. Zie bron/.
export const site = {
  naam: 'Krijgsman Hovenier',
  eigenaar: 'Patrick Krijgsman',
  plaats: 'Numansdorp',
  tel: '06 48 73 72 70',
  telHref: 'tel:+31648737270',
  wa: 'https://wa.me/31648737270',
  mail: 'info@krijgsmanhovenier.nl',
  kvk: '80826334',
  facebook: 'https://www.facebook.com/Krijgsmanhovenier',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Krijgsman+hovenier+Numansdorp',
  google: { score: '5,0', aantal: 3 },
  themeColor: '#101511',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Bereikbaar volgens Google: ma t/m vr 08:00-18:00. dag: 0 = zondag.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '18.00' },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '18.00' },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '18.00' },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '18.00' },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '18.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Diensten letterlijk van hun Diensten-pagina; Facebook voegt "renovatie" toe.
export const diensten = ['Tuinontwerp', 'Aanleg', 'Renovatie', 'Materialen en beplanting', 'Onderhoud'];

// Werk dat in hun fotoalbum en contracttekst terugkomt.
export const chips = ['Terrassen', 'Schuttingen', 'Tuinhuizen', 'Overkappingen', 'Grindpaden', 'Plantenbakken', 'Vormsnoei', 'Hagen scheren', 'Boomverzorging', 'Gras maaien'];

export const contracten = [
  { t: 'Maandcontract', kort: 'Eens per maand', d: 'Uw tuin wordt eens per maand onderhouden, voor een afgesproken aantal uren. Onkruid vrijmaken, hagen scheren, boomverzorging en gras maaien.' },
  { t: 'Voor- en najaarsbeurt', kort: 'Twee keer per jaar', d: 'Het onderhoud dat bij het seizoen past: voor- en najaarsnoei, hagen scheren, bemesten en turfstrooien. Onkruid, plantenresten en bladeren gaan mee.' },
  { t: 'Jaarcontract', kort: 'Het hele jaar', d: 'We leggen vast welke werkzaamheden er in welke periode gebeuren, en hoeveel uur ik in uw tuin werk om dat te doen.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Hallo Patrick, ik wil graag een offerte voor mijn tuin.');
