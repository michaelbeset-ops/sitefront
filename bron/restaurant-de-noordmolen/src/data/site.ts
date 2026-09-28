// Feiten van noordmolen.nl (index, ons restaurant, geschiedenis, menu, lunchkaart, wijn, Schiedam, plattegrond;
// stand september 2026, wijnkaart juli 2026) en het Google-profiel (4,3 uit 5, 411 reviews).
// Alleen spelfouten uit de bron rechtgezet (Hollanse, kwartelt, Chapotier, Pays do'c); gerechten en prijzen ongewijzigd.
export const site = {
  naam: 'Restaurant De Noordmolen',
  kort: 'De Noordmolen',
  straat: 'Noordvest 38',
  postcode: '3111 PH',
  plaats: 'Schiedam',
  tel: '010 426 31 04',
  telHref: 'tel:+31104263104',
  telIntl: '+31 10 426 31 04',
  mail: 'info@denoordmolen.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Restaurant+De+Noordmolen+Noordvest+38+Schiedam',
  google: { score: '4,3', aantal: 411 },
  themeColor: '#1e1b18',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag t/m vrijdag', tijd: 'vanaf 12.00 uur' },
  { dag: 'Zaterdag', tijd: 'vanaf 15.00 uur' },
  { dag: 'Zondag', tijd: 'gesloten' },
];

type Gerecht = { naam: string; bij?: string; prijs: string };
export const menu: { titel: string; gerechten: Gerecht[] }[] = [
  { titel: 'Voorgerechten', gerechten: [
    { naam: 'Kerrie-mosterd crèmesoep', bij: 'met croutons', prijs: '9,50' },
    { naam: 'Gamba’s in knoflookolie', bij: 'rode ui, tomaat, peterselie, citroensap', prijs: '15,50' },
    { naam: 'Hollandse garnalen', bij: 'whisky-cocktailsaus', prijs: '19,50' },
    { naam: 'Carpaccio van ossenhaas', bij: 'Parmezaanse kaas, pancetta, kappertjes, rucola', prijs: '15,50' },
    { naam: 'Bisque van kreeft', bij: 'Hollandse garnalen, Cognac', prijs: '14,50' },
    { naam: 'Zalmpalet', bij: 'gerookte zalm, gemarineerde zalm, honingmosterdsaus', prijs: '17,50' },
    { naam: 'Terrine van ganzenlever', bij: 'in rode port gewelde pruimen, kummel-sinaasappelsaus', prijs: '24,50' },
    { naam: 'Proeverij Noordmolen', bij: 'ganzenlever, gamba’s, Hollandse garnalen, gemarineerde zalm, gerookte eendenborst, kwartel', prijs: '26,50' },
  ]},
  { titel: 'Visgerechten', gerechten: [
    { naam: 'Op de huid gebakken zalmfilet', bij: 'beurre blanc met tuinkruiden', prijs: '24,50' },
    { naam: 'Medaillons van zeeduivel', bij: 'ravioli van krab en Hollandse garnalen', prijs: '32,50' },
    { naam: 'In roomboter gebakken zeetong', bij: 'heel of gefileerd', prijs: '44,50' },
  ]},
  { titel: 'Vleesgerechten', gerechten: [
    { naam: 'Black Angus burger', bij: 'briochebrood, bacon, boerencheddar, coleslaw, drie sausjes', prijs: '19,50' },
    { naam: 'Gebraden eendenborst', bij: 'honing-tijmsaus', prijs: '26,50' },
    { naam: 'Geroosterd buikspek', bij: 'gember, hoisinsaus', prijs: '24,50' },
    { naam: 'Argentijnse runder-ribeye (250 gram)', bij: 'cognac-pepersaus', prijs: '33,50' },
    { naam: 'Tournedos (200 gram)', bij: 'rodewijnsaus', prijs: '35,00' },
  ]},
  { titel: 'Nagerechten', gerechten: [
    { naam: 'Crème brûlée', bij: 'met karamelroomijs', prijs: '12,50' },
    { naam: 'Tiramisu', bij: 'met hazelnootroomijs', prijs: '12,50' },
    { naam: 'Citroen-limoncello cheesecake', bij: 'limoensorbetijs', prijs: '12,50' },
    { naam: 'Chocoladedessert', bij: 'witte en bruine chocolademousse en brownie-cookiedough-roomijs', prijs: '14,50' },
    { naam: 'Flensjes', bij: 'sinaasappel-Grand Marniersaus, vanilleroomijs', prijs: '14,50' },
    { naam: 'Molendessert', bij: 'compositie van verschillende nagerechten', prijs: '16,50' },
    { naam: 'Kaasplank', bij: 'selectie van diverse soorten kaas', prijs: '16,50' },
  ]},
];

export const keuzemenu = {
  prijs: '44,50',
  gangen: [
    { titel: 'Voorgerecht', keuzes: [['In Corenwijn gemarineerde zalm', 'mierikswortelmayonaise'], ['Vitello tonnato', 'kalfsmuis, tonijnmayonaise']] },
    { titel: 'Hoofdgerecht', keuzes: [['Op de huid gebakken doradefilet', 'romige paprikasaus'], ['Gebraden hoenderborst', 'appelstroopsaus']] },
    { titel: 'Nagerecht', keuzes: [['Crème brûlée', 'een traditioneel Frans nagerecht'], ['Dame blanche', 'vanilleroomijs met warme chocoladesaus']] },
  ],
};

export const lunch: Gerecht[] = [
  { naam: 'Frites met mayonaise', prijs: '6,50' },
  { naam: 'Tomaten-basilicumsoep', prijs: '9,50' },
  { naam: 'Tosti volkorenbrood, geitenkaas en honing', prijs: '7,50' },
  { naam: 'Rotterdamse rundvleeskroketten', bij: 'met wit of bruin brood', prijs: '11,00' },
  { naam: 'Uitsmijter', bij: 'met wit of bruin brood; ham, kaas of spek + 1,00', prijs: '9,00' },
  { naam: 'Ciabatta ham/kaas', prijs: '9,50' },
  { naam: 'Ciabatta gerookte zalm', bij: 'rucola, rode ui en mosterdsaus', prijs: '13,50' },
  { naam: 'Ciabatta gerookte aalfilet', prijs: '14,50' },
  { naam: 'Gamba’s in knoflook-olijfolie', bij: 'met tomaat en rode ui', prijs: '15,00' },
  { naam: 'Salade uitgebakken pancetta en olijven', prijs: '16,50' },
  { naam: 'Salade gemarineerde zalm', prijs: '16,50' },
  { naam: 'Salade gamba’s', prijs: '16,50' },
  { naam: 'Carpaccio van ossenhaas', bij: 'Parmezaanse kaas, pancetta en rucola', prijs: '15,50' },
  { naam: 'Vispalet', bij: 'gerookte en gemarineerde zalm, gerookte aalfilet, Hollandse garnalen en toast', prijs: '21,50' },
  { naam: 'Saté van kippendijen', bij: 'met stokbrood, kroepoek en gefrituurde uitjes', prijs: '21,50' },
  { naam: 'Black Angus burger', bij: 'met friet, bacon, cheddar en drie sausjes', prijs: '19,50' },
  { naam: 'Proeverij Noordmolen', bij: 'ganzenlever, gamba’s, Hollandse garnalen, gemarineerde zalm, gerookte eendenborst en kwartel', prijs: '24,50' },
  { naam: 'Bitterballen (8 stuks)', prijs: '9,00' },
];

type Wijn = { naam: string; herkomst: string; prijzen: [string, string][] };
export const wijnen: { titel: string; wijnen: Wijn[] }[] = [
  { titel: 'Witte wijn', wijnen: [
    { naam: 'L’Impossible, huiswijn', herkomst: 'Gascogne, Frankrijk · colombard, sauvignon blanc', prijzen: [['glas', '5,95'], ['karaf', '21,50'], ['fles', '28,50']] },
    { naam: 'Arbos Pinot Grigio Organic', herkomst: 'Sicilië, Italië', prijzen: [['glas', '6,50'], ['fles', '32,50']] },
    { naam: 'Couveys Chardonnay', herkomst: 'Pays d’Oc, Frankrijk', prijzen: [['glas', '6,95'], ['fles', '36,00']] },
    { naam: 'Aimé Boucher, Touraine Sauvignon La Bottière', herkomst: 'Loire, Frankrijk', prijzen: [['glas', '7,95'], ['fles', '38,50']] },
    { naam: 'Stift Klosterneuburg Grüner Veltliner', herkomst: 'Wenen, Oostenrijk', prijzen: [['fles', '39,50']] },
    { naam: 'Lomond Sauvignon Blanc', herkomst: 'Cape Agulhas, Zuid-Afrika', prijzen: [['fles', '39,50']] },
    { naam: 'M. Chapoutier, La Combe Pilate Viognier', herkomst: 'Rhône, Frankrijk', prijzen: [['fles', '42,50']] },
    { naam: 'Poitout Chablis', herkomst: 'Chablis, Frankrijk · chardonnay', prijzen: [['fles', '48,50']] },
    { naam: 'Aimé Boucher, La Bottière Pouilly-Fumé', herkomst: 'Loire, Frankrijk · sauvignon blanc', prijzen: [['fles', '49,50']] },
    { naam: 'Aimé Boucher, Sancerre Chevalier la Bottière', herkomst: 'Loire, Frankrijk · sauvignon blanc', prijzen: [['fles', '52,50']] },
    { naam: 'Delaunay Hautes-Côtes de Nuits Blanc Charmont', herkomst: 'Bourgogne, Frankrijk · chardonnay', prijzen: [['fles', '57,50']] },
  ]},
  { titel: 'Rosé', wijnen: [
    { naam: 'Filo di Sole Pinot Grigio Rosé', herkomst: 'Delle Venezie, Italië', prijzen: [['glas', '5,95'], ['karaf', '21,50'], ['fles', '28,50']] },
  ]},
  { titel: 'Mousserend en champagne', wijnen: [
    { naam: 'MVSA Cava Brut', herkomst: 'Penedès, Spanje · macabeo, xarel-lo', prijzen: [['glas', '7,50'], ['fles', '41,50']] },
    { naam: 'Champagne Castelnau Brut Réserve', herkomst: 'Champagne, Frankrijk · chardonnay, meunier', prijzen: [['fles', '79,50']] },
  ]},
  { titel: 'Rode wijn', wijnen: [
    { naam: 'L’Impossible Merlot, huiswijn', herkomst: 'Languedoc, Frankrijk', prijzen: [['glas', '5,95'], ['karaf', '21,50'], ['fles', '28,50']] },
    { naam: 'Couveys Pinot Noir', herkomst: 'Pays d’Oc, Frankrijk', prijzen: [['glas', '6,95'], ['fles', '36,50']] },
    { naam: 'Terres Quero Malbec', herkomst: 'Uco Valley, Argentinië', prijzen: [['glas', '6,50'], ['fles', '32,50']] },
    { naam: 'M. Chapoutier, La Ciboise rouge', herkomst: 'Costières de Nîmes, Frankrijk', prijzen: [['fles', '36,50']] },
    { naam: 'Astrid & Therese Primitivo', herkomst: 'Puglia, Italië', prijzen: [['glas', '7,95'], ['fles', '38,50']] },
    { naam: 'Lomond Syrah', herkomst: 'Cape Agulhas, Zuid-Afrika', prijzen: [['fles', '42,50']] },
    { naam: 'Cruz del Castillo Rioja Tinto Reserva', herkomst: 'Rioja, Spanje · tempranillo', prijzen: [['fles', '42,50']] },
    { naam: 'Delaunay Septembre Pinot Noir', herkomst: 'Bourgogne, Frankrijk', prijzen: [['fles', '47,50']] },
    { naam: 'Lenotti Amarone della Valpolicella', herkomst: 'Veneto, Italië · corvina, rondinella, oseleta', prijzen: [['fles', '65,00']] },
  ]},
];

export const geschiedenis = [
  { wanneer: 'Rond 1400', wat: 'Begin 15e eeuw wordt voor het eerst een molen op deze plek genoemd. Vermoedelijk een houten standermolen, gebouwd rond 1400.' },
  { wanneer: '1707', wat: 'De houten molen wordt vervangen door een stenen molen.' },
  { wanneer: '1803', wat: 'Een eeuw later vangt de molen te weinig wind boven de groeiende stad. De Noord wordt afgebroken en dichter bij de waterkant herbouwd: de huidige molen. Hij maalt mout voor de branderijen in de stad.' },
  { wanneer: 'Begin 20e eeuw', wat: 'In de molen wordt veevoeder gemalen, en tarwemeel voor de bakkers. In de jaren dertig komt er een grote dieselmotor in.' },
  { wanneer: '1937', wat: 'Zonder windaandrijving wordt de molen onttakeld: kap, wiekenkruis, staartwerk en balie gaan eraf. Er blijft een peperbus over.' },
  { wanneer: 'Oorlogsjaren', wat: 'Een hokje op De Noord dient de Duitsers als uitkijkpost. Tegelijk speelt de molen een rol in het verzet.' },
  { wanneer: 'Rond 1962', wat: 'De gemeente Schiedam heeft de peperbus gekocht. De eerste restauratiefase geeft De Noord kap, staartwerk, wiekenkruis en balie terug.' },
  { wanneer: 'Begin jaren ’70', wat: 'Na een tweede fase, met hulp van een grote groep vrijwilligers, wordt er weer graan op de wind gemalen. Kort daarna opent in de molen een proeflokaal, dat uitgroeit tot restaurant.' },
];
