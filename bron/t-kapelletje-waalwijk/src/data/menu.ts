// Letterlijk overgenomen van hun eigen menukaart (foto's in de Facebook-post van 13 oktober 2025; zelfde kaart op
// tkapelletje.menukaart.net). Spelling zoals op de kaart. v = vegetarisch (blaadje op de kaart).
export type Gerecht = { n: string; p: string; x?: string; v?: boolean };
export type Groep = { kop: string; noot?: string; items: Gerecht[] };
export type Tab = { id: string; label: string; groepen: Groep[][] };

export const kaart: Tab[] = [
  {
    id: 'lunch', label: 'Lunch',
    groepen: [
      [
        { kop: 'Broodjes', noot: 'Standaard met zacht broodje. Pistolet of Italiaanse bol + 1.25', items: [
          { n: 'Kaas', p: '3.50' }, { n: 'Ham', p: '3.50' }, { n: 'Ham en Kaas', p: '4.50' }, { n: 'Kroket', p: '4.00' },
          { n: 'Frikandel', p: '4.00' }, { n: 'Hamburger ’t Kapelletje', p: '11.00' },
        ] },
        { kop: 'Pistolets', noot: 'Standaard met pistolet. Italiaanse bol + 1.75', items: [
          { n: 'Gezond', p: '7.00' }, { n: 'Gerookte Zalm', p: '8.25' }, { n: 'Ossenhaas Carpaccio', p: '8.25' }, { n: 'Brie', p: '8.75' },
          { n: 'Portugese Kip', p: '9.00' }, { n: 'Kipshoarma', p: '9.00' }, { n: 'Warme Beenham', p: '8.00' },
          { n: 'Club Sandwich', p: '8.95', x: 'Spek, Kipfilet, Kaas, Sla, Ui, Ei, Tomaat en Komkommer' },
          { n: 'Sandwich ’t Kapelletje', p: '9.95', x: 'Zalm, Tonijnsalade, Sla, Ui, Tomaat, Komkommer en Kappertjes' },
        ] },
      ],
      [
        { kop: 'Tosti’s', items: [
          { n: 'Ham en/of Kaas', p: '5.25' }, { n: 'Hawaii', p: '5.50' }, { n: 'Serranoham en Mozzarella', p: '6.25' },
          { n: '’t Kapelletje', p: '8.75', x: 'Ham, Kaas, Ei, Frites, Ui, Tomaat en Komkommer' },
        ] },
        { kop: 'Uitsmijters', noot: 'Extra grote portie: met 3 eieren en 3 boterhammen + 2.75', items: [
          { n: 'Ham of Kaas', p: '8.00' }, { n: 'Ham en Kaas', p: '8.50' }, { n: 'Spek', p: '8.50' },
          { n: 'Twaalfuurtje', p: '9.00' }, { n: 'Boerenomelet', p: '9.00' },
        ] },
        { kop: 'Soepen', items: [
          { n: 'Tomatensoep', p: '5.50' }, { n: 'Uiensoep', p: '5.50' }, { n: 'Vissoep', p: '6.25' }, { n: 'Seizoenssoep', p: '6.25' },
        ] },
      ],
    ],
  },
  {
    id: 'voor', label: 'Voorgerechten & salades',
    groepen: [
      [
        { kop: 'Voorgerechten', items: [
          { n: 'Stokbrood met Kruidenboter en Tapenade', x: 'voor 2 personen', p: '5.50', v: true },
          { n: 'Gebakken Champignons in Knoflook', p: '8.00', v: true }, { n: 'Gepaneerde Geitenkaas', p: '10.75', v: true },
          { n: 'Charcuterie', p: '10.00' }, { n: 'Carpaccio van Ossenhaas', x: 'met Truffelmayo of Honing Mosterd', p: '9.50' },
          { n: 'Steak Tartaar', p: '10.50' }, { n: 'Grote Garnalen in Teriyaki', p: '9.25' }, { n: 'Garnalen in Knoflook', p: '9.25' },
          { n: 'Garnaal Cocktail', p: '10.00' }, { n: 'Tonijn Tataki', p: '10.50' }, { n: 'Zalm Tartaar', p: '10.50' },
        ] },
      ],
      [
        { kop: 'Maaltijdsalades', items: [
          { n: 'Salade met Carpaccio van Ossenhaas', p: '10.25' }, { n: 'Salade met Kaas, Noten en Dadels', p: '10.25', v: true },
          { n: 'Salade met Geitenkaas en Spek', p: '10.25' }, { n: 'Salade met Kip', p: '10.25' },
          { n: 'Salade met Ossenhaaspuntjes', p: '11.00' }, { n: 'Salade met Gerookte Zalm', p: '10.00' },
          { n: 'Salade met Hollandse Garnalen', p: '18.00' },
        ] },
      ],
    ],
  },
  {
    id: 'hoofd', label: 'Hoofdgerechten',
    groepen: [
      [
        { kop: 'Vlees, pasta en vegetarisch', noot: 'Alle vlees- en visgerechten worden standaard geserveerd met salade en frites. Bij geselecteerde gerechten* kunt u kiezen uit: Pepersaus, Stroganoffsaus, Rode Wijnsaus, Champignonsaus of Kruidenboter.', items: [
          { n: 'Vegetarisch Gerecht ‘Chef Special’', p: '18.50', v: true },
          { n: 'Pasta met Groenten', x: 'in een Tomatenlikeur Crèmesaus', p: '14.50', v: true },
          { n: 'Pasta Carbonara', p: '15.00' }, { n: 'Kipsaté met Kokos-Kerrie en Ketjap', p: '17.00' }, { n: 'Spare Ribs', p: '20.00' },
          { n: 'Rib Eye*', p: '21.00' }, { n: 'Wienerschnitzel*', p: '17.00' }, { n: 'Varkenshaas*', p: '20.00' }, { n: 'Ossenhaas*', p: '26.00' },
          { n: 'Ossenhaas', x: 'gevuld met Seranoham en Kaas in een licht pikante Tomatenlikeur Crèmesaus met Champignons', p: '26.75' },
        ] },
      ],
      [
        { kop: 'Lam, vis en voor twee', noot: 'Extra bijgerecht: gebakken Champignons of gebakken Champignons in Knoflook + 2.50', items: [
          { n: 'Lamsrack', p: '29.50' },
          { n: 'Chateaubriand', x: 'met gebakken Champignons, Ui en Knoflook (voor 2 personen)', p: '40.00' },
          { n: 'Zalmfilet met een Dillesaus', p: '18.75' }, { n: 'Pasta met Garnalen', p: '20.00' },
          { n: 'Scampi’s op Portugese Wijze', p: '22.50' }, { n: 'Gegrilde Tonijnmoot', p: '22.50' },
          { n: 'Kabeljauwfilet', x: 'met Remouladesaus', p: '19.75' }, { n: 'Zeetong', x: 'gebakken in Roomboter met Citroen', p: '26.75' },
        ] },
      ],
    ],
  },
  {
    id: 'pannenkoek', label: 'Pannenkoeken & kinderen',
    groepen: [
      [
        { kop: 'Pannenkoeken', noot: 'Extra ingrediënten voor uitsmijters en pannenkoeken: Ham of Kaas, Champignons of Spek 2.00', items: [
          { n: 'Naturel', p: '7.00' }, { n: 'Appel', p: '7.25' }, { n: 'Ham of Kaas', p: '7.25' }, { n: 'Ham en Kaas', p: '9.50' },
          { n: 'Spek', p: '7.25' }, { n: 'Spek en Appel', p: '7.50' }, { n: 'Spek en Kaas', p: '9.50' }, { n: 'IJs', p: '8.00' },
          { n: 'IJs met Slagroom', p: '8.00' }, { n: 'IJs met Warme Kersen en Slagroom', p: '8.75' },
        ] },
      ],
      [
        { kop: 'Voor de Kleintjes', noot: 'met Frites (F)', items: [
          { n: 'Kroket (F)', p: '6.75' }, { n: 'Frikandel (F)', p: '6.75' }, { n: 'Kipnuggets (F)', p: '6.75' }, { n: 'Kaassouflé (F)', p: '6.75' },
          { n: 'Schnitzel (F)', p: '9.25' }, { n: 'Kipshoarma (F)', p: '9.50' }, { n: 'Spare Ribs (F)', p: '9.50' }, { n: 'Pasta Bolognese', p: '8.50' },
        ] },
      ],
    ],
  },
  {
    id: 'dessert', label: 'Desserts & borrel',
    groepen: [
      [
        { kop: 'Desserts', items: [
          { n: 'Tiramisu', p: '7.50' }, { n: 'Gevulde Sinaasappel', p: '7.50' }, { n: 'Vanille-ijs', x: 'met Chocoladesaus en Slagroom', p: '7.25' },
          { n: 'Vanille-ijs', x: 'met Warme Kersen', p: '7.25' }, { n: 'Vanille Crème Brûlée', x: 'met Vanille-ijs en Slagroom', p: '7.75' },
          { n: 'Parfait van ’t Seizoen', p: '7.50' }, { n: 'Kaasplankje', p: '9.25' }, { n: 'Apfelstrudel', x: 'met Vanille-ijs en Slagroom', p: '6.50' },
          { n: 'Cheese Cake', p: '7.25' }, { n: 'Lava Cake', x: 'met Vanille-ijs en Rood Fruit', p: '7.25' },
          { n: 'Italiaanse Liefde', x: 'Boerenjongens met Advocaat en Mascarpone', p: '7.50' },
          { n: 'Kinderijsje', p: '6.25' },
        ] },
      ],
      [
        { kop: 'Snacks', items: [
          { n: 'Portie Bitterballen (6st)', p: '6.25' }, { n: 'Portie Mini Frikandel (8st)', p: '5.50' }, { n: 'Mix Portie (10st)', p: '9.00' },
          { n: 'Gefrituurde Garnalen (6st)', p: '8.00' }, { n: 'Nachos', p: '11.00' }, { n: 'Gyoza', p: '10.00' },
          { n: 'Portie Jonge Kaas', p: '5.50' }, { n: 'Portie Oude Kaas', p: '6.25' },
          { n: 'Borrelplank ’t Kapelletje', x: 'een mix van Worstjes en Kaasjes', p: '14.50' },
        ] },
        { kop: 'Gebak', items: [
          { n: 'Schuimgebak', p: '3.50' }, { n: 'Appeltaart', p: '3.50' }, { n: 'Appeltaart met Slagroom', p: '4.25' },
          { n: 'Apfelstrudel met IJs en Slagroom', p: '6.00' },
        ] },
      ],
    ],
  },
];
