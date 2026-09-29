// Feiten van eussenaanhangwagens.nl (home, producten/aanhangwagens, autotransporters, speciaalbouw, airport maintenance,
// paardentrailers, veetrailers, schaftwagens, onze merken, onderhoud en reparaties, verhuur, werkplaats en magazijn, lease,
// occasions, caravan onderhoud, contact, algemene informatie, nieuws: Kiesling-koelvrachtwagen, dierenuitvaartzorg, Tan-Dat)
// en het Google-profiel (4,6 uit 73 reviews). Geen WhatsApp.
export const site = {
  naam: 'Eussen Aanhangwagens',
  straat: 'Via Fabrica 2',
  postcode: '6367 AX',
  plaats: 'Voerendaal',
  tel: '045 575 1093',
  telHref: 'tel:+31455751093',
  tel2: '045 575 0985',
  tel2Href: 'tel:+31455750985',
  mail: 'info@eussenaanhangwagens.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Eussen+Aanhangwagens+Via+Fabrica+2+Voerendaal',
  google: '4,6',
  reviews: 73,
  kvk: '[[AANLEVEREN: KvK-nummer]]',
  themeColor: '#16191c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag t/m vrijdag', tijd: '08.00 - 17.00' },
  { dag: 'Zaterdag', tijd: 'Op afspraak' },
  { dag: "'s Avonds", tijd: 'Op afspraak' },
];

// Van hun pagina "Onze merken" (volgorde van die pagina), plus Kiesling uit het nieuwsbericht. Korte kern uit hun eigen tekst.
export const merken = [
  { naam: 'Anssems', kern: 'Sinds 1977, uit Hulten. De reputatie van "de onverslijtbare aanhangwagen".' },
  { naam: 'Hulco Trailers', kern: 'Aanhangwagens voor de professionele markt. Opgericht in 2003 in Tilburg.' },
  { naam: 'Sirius Trailers', kern: 'Ontwikkelaar en producent van paardentrailers en gesloten bakwagens.' },
  { naam: 'Atec', kern: 'Al decennia lang hoge kwaliteitsproducten van Nederlandse bodem.' },
  { naam: 'Ifor Williams', kern: 'Britse marktleider sinds 1958, met veetrailers, paardentrailers en gesloten trailers.' },
  { naam: 'Sunway', kern: 'De goede boottrailer voor een scherpe prijs.' },
  { naam: 'Brian James Trailers', kern: 'Lichtgewicht autotransportmiddelen voor autoliefhebbers en professionals.' },
  { naam: 'Kalf Trailers', kern: "Boottrailers, van trolley's voor optimisten tot trailers voor sloepen en zeilboten." },
  { naam: 'Twin Trailers', kern: 'De TwinTrailer: kipper en transporter in 1.' },
  { naam: 'Freewheel', kern: 'Boottrailers in zeer veel varianten, nagenoeg altijd aan te passen aan uw boot.' },
  { naam: 'Saris', kern: 'Uit Hapert, sinds jaar en dag een begrip in aanhangwagens.' },
  { naam: 'Weijer Trailers', kern: 'Al sinds 1952 actief in de aanhangwagenwereld.' },
  { naam: 'Henra', kern: 'Een uitgebreid assortiment aanhangwagens en trailers.' },
  { naam: 'Kiesling', kern: 'Koelopbouwen voor vrachtwagens. Made in Germany.' },
];
