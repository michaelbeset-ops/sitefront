// Feiten van wouwsewereld.nl (home, menu, contact; menukaart uit alle zes tabbladen van /menu, 29-09-2026)
// en het Google-profiel (4,6 uit 171 reviews). Menunamen en prijzen letterlijk overgenomen, ook de spelling.
export const site = {
  naam: 'Restaurant De Wouwse Wereld',
  kort: 'De Wouwse Wereld',
  straat: 'Roosendaalsestraat 1',
  postcode: '4724 AA',
  plaats: 'Wouw',
  hoek: 'hoek Roosendaalsestraat - Markt',
  tel: '0165-300646',
  telHref: 'tel:+31165300646',
  mail: 'info@wouwsewereld.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Restaurant+De+Wouwse+Wereld+Roosendaalsestraat+1+Wouw',
  google: { score: '4,6', aantal: 171 },
  themeColor: '#0d1714',
  // Openingstijden: maandag en dinsdag gesloten, woensdag t/m zondag vanaf 18.00 uur.
  openDagen: [3, 4, 5, 6, 0],
  vakantie: { van: '2026-09-12', tot: '2026-10-04' },
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export type Gerecht = { naam: string; prijs: string; pp?: 'voor' | 'na'; noot?: string };
export const kaart: { id: string; titel: string; items: Gerecht[] }[] = [
  { id: 'koud', titel: 'Koude voorgerechten', items: [
    { naam: 'Vispalet', prijs: '17,50' },
    { naam: 'Steak tartaar', prijs: '17,50' },
    { naam: 'Carpaccio van rund met truffelmayonaise', prijs: '16,50' },
    { naam: 'Carpaccio van rode biet met geitenkaas (vegetarisch)', prijs: '14,50' },
    { naam: 'Rivierkreeft cocktail met avocado', prijs: '16,50' },
    { naam: 'Tapas plateau voor 2 personen', prijs: '24,50', pp: 'voor' },
  ] },
  { id: 'warm', titel: 'Warme voorgerechten', items: [
    { naam: 'Tomaten-crèmesoep (vegetarisch)', prijs: '8,50' },
    { naam: 'Champignonsoep (vegetarisch)', prijs: '8,50' },
    { naam: 'Franse uiensoep (vegetarisch)', prijs: '9,00' },
    { naam: "Gamba's in kreeftensaus", prijs: '16,50' },
    { naam: 'Gerookte paling', prijs: '18,50' },
    { naam: 'Coquille St. Jacques', prijs: '16,50' },
    { naam: 'Gegratineerde mosselen', prijs: '16,50' },
  ] },
  { id: 'vlees', titel: 'Vlees hoofdgerechten', items: [
    { naam: 'Mixed grill', prijs: '28,50' },
    { naam: 'Ossenhaas van limousin', prijs: '34,50' },
    { naam: 'Entrecote', prijs: '34,50' },
    { naam: 'Varkenshaas', prijs: '24,50' },
    { naam: 'Spareribs', prijs: '25,50' },
    { naam: 'Chateaubriand', prijs: '34,50' },
  ] },
  { id: 'vis', titel: 'Vis hoofdgerechten', items: [
    { naam: 'Zeebaarsfilet', prijs: '24,50' },
    { naam: 'Tonijn cru gebakken', prijs: '24,50' },
    { naam: 'Vispotje Wouwse Wereld', prijs: '26,50' },
    { naam: "Gamba's in romige knoflooksaus", prijs: '26,50' },
    { naam: 'Vegetarisch tapperijtje', prijs: '21,50' },
    { naam: 'Kabeljauwfilet in een krokant jasje', prijs: '24,50' },
  ] },
  { id: 'dessert', titel: 'Desserts', items: [
    { naam: 'Crème brûlée', prijs: '11,00' },
    { naam: 'Scroppino', prijs: '9,50' },
    { naam: 'Papboerke', prijs: '10,00' },
    { naam: 'Tropical fruitsorbet', prijs: '8,50' },
    { naam: 'Dame blanche', prijs: '12,00' },
    { naam: 'Chocolade surprise', prijs: '12,00' },
    { naam: 'Kaasplank', prijs: '17,50' },
  ] },
  { id: 'daghap', titel: 'DagHap', items: [
    { naam: 'De DagHap', noot: 'Alleen een hoofdgerecht met keuze uit vis of vlees. Serveren wij op woensdag t/m vrijdag en op zondag.', prijs: '17,50', pp: 'na' },
    { naam: '3-gangen keuze menu', noot: 'Op woensdag t/m vrijdag en op zondag.', prijs: '33,50', pp: 'na' },
    { naam: 'Tapas Grande', noot: 'Serveren wij alleen op reservering vooraf en per tafel.', prijs: '45,00', pp: 'na' },
  ] },
];
