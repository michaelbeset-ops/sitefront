// Feiten komen uit het dagbestand van 23-11-2026 (lead hij-zij-kledingreparatie-breda) met deze bronnen:
// hijzijkledingreparatie.nl (homepage en contact), telefoonboek.nl, openingstijden.com en breda-nieuws.nl.
// Postcode, naam eigenaar en prijzen zijn niet gevonden en staan daarom niet op de site.
export const site = {
  naam: 'Hij & Zij Kledingreparatie',
  kort: 'Hij & Zij',
  straat: 'Torenstraat 8',
  plaats: 'Breda',
  tel: '076 888 03 87',
  telHref: 'tel:+31768880387',
  mobiel: '06 30 30 41 17',
  mobielHref: 'tel:+31630304117',
  mail: 'info@hijzijkledingreparatie.nl',
  route: 'https://www.google.com/maps/search/?api=1&query=Torenstraat+8+Breda',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van de contactpagina en telefoonboek.nl. Index 0 is zondag, net als Date.getDay().
export const tijden: { dag: string; kort: string; van: string; tot: string }[] = [
  { dag: 'Zondag', kort: 'zo', van: '13.00', tot: '17.00' },
  { dag: 'Maandag', kort: 'ma', van: '13.00', tot: '18.00' },
  { dag: 'Dinsdag', kort: 'di', van: '09.30', tot: '18.00' },
  { dag: 'Woensdag', kort: 'wo', van: '09.30', tot: '18.00' },
  { dag: 'Donderdag', kort: 'do', van: '09.30', tot: '21.00' },
  { dag: 'Vrijdag', kort: 'vr', van: '09.30', tot: '18.00' },
  { dag: 'Zaterdag', kort: 'za', van: '09.30', tot: '17.00' },
];

// Week die op maandag begint, zoals mensen het lezen.
export const week = [1, 2, 3, 4, 5, 6, 0].map((i) => ({ ...tijden[i], i }));

export const diensten = [
  {
    titel: 'Inkorten en verlengen',
    tekst: 'Broeken, rokken, blouses, overhemden en topjes. Maar ook colberts, jassen en mantels.',
  },
  {
    titel: 'Innemen en vermaken',
    tekst: 'Een jurk innemen, schouderbanden verlengen, een zak toevoegen of verbeteren. Of een kledingstuk restylen op maat.',
  },
  {
    titel: 'Repareren',
    tekst: 'Kleine gaatjes, een rits repareren of vervangen, nieuwe knopen of nieuwe voering. Ook leren kleding.',
  },
  {
    titel: 'Stomerij, strijken en afwerken',
    tekst: 'Voor de stomerij kunt u hier ook terecht. Kleding kan ook gestreken en netjes afgewerkt worden.',
  },
  {
    titel: 'Ophalen en bezorgen',
    tekst: 'Lukt langskomen niet, dan kan uw kleding ook opgehaald en bezorgd worden. Bel even om het af te spreken.',
  },
];

// Wat klanten in reviews noemen (telefoonboek.nl en openingstijden.com). Geen citaten van personen.
export const genoemd = ['Klantvriendelijk', 'Deskundig', 'Snelle service', 'Doet precies wat gevraagd wordt', 'Netjes', 'Redelijke prijzen'];

// Sfeerbeelden van Unsplash. Nooit als eigen werk van het atelier presenteren.
const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const foto = {
  hero: (w: number) => u('photo-1497997092403-f091fcf5b6c4', w),
  garen: (w: number) => u('photo-1542044801-30d3e45ae49a', w),
  meetlint: (w: number) => u('photo-1536867520774-5b4f2628a69b', w),
  rek: (w: number) => u('photo-1633655442432-620aa55d7ac1', w),
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
