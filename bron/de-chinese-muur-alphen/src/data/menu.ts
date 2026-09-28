// Selectie uit het afhaalmenu op dechinesemuuralphen.nl/menuscat/... (gelezen 28-09-2026).
// Namen, nummers en prijzen zoals op hun eigen site; prijs in centen. Maandmenu en gedateerde menu's weggelaten.
// Hapmenu volgens de pagina "Afhaal menu" (niet de oudere subpagina uit 2020).
export type Gerecht = { nr?: string; naam: string; info?: string; prijs: number };
export type Categorie = { id: string; kort: string; naam: string; gerechten: Gerecht[] };

export const menu: Categorie[] = [
  {
    id: 'voor', kort: 'Voorgerechten', naam: 'Soepen en voorgerechten', gerechten: [
      { naam: 'Tomatensoep', prijs: 500 },
      { naam: 'Kippensoep', prijs: 500 },
      { naam: 'Wan Tan Soep', info: 'Heldere soep met dumplings', prijs: 750 },
      { naam: 'Soep “De Chinese Muur”', info: 'Rijkgevulde gebonden pikantzure soep', prijs: 700 },
      { naam: 'Maïssoep', info: 'Met zoete maïs, kip en surimisticks', prijs: 680 },
      { naam: 'Loempia Vlees', info: 'Gevuld met taugé, vlees, ham en ei', prijs: 650 },
      { naam: "Mini Loempia's", info: 'Zelfgemaakt met kerry gehaktvulling (4 st.) of kleinere vegetarische (8 st.)', prijs: 700 },
      { naam: 'Pangsit Goreng', info: 'Gebakken loempiadeeg met vleesvulling, 8 stuks', prijs: 700 },
      { naam: 'Koe loe yuk (8 stuks)', prijs: 880 },
      { naam: "Kerry tosti's", prijs: 700 },
      { naam: 'Sate Ajam', info: '4 stokjes', prijs: 800 },
      { naam: 'Garnalenhapjes (8 stuks)', prijs: 850 },
      { naam: 'Kroepoek', prijs: 400 },
      { naam: 'Gebakken Banaan', prijs: 580 },
      { naam: 'Witte Rijst', prijs: 450 },
    ],
  },
  {
    id: 'nasi', kort: 'Nasi en bami', naam: 'Nasi, bami en mihoen', gerechten: [
      { naam: 'Nasi Goreng', prijs: 800 },
      { naam: 'Bami Goreng', prijs: 800 },
      { naam: 'Bruine nasi goreng', info: 'Pittig met vlees, ei en prei', prijs: 850 },
      { naam: 'Nasi Goreng met sate', info: '3 st. saté', prijs: 1350 },
      { naam: 'Bami Goreng met sate', info: '3 st. saté', prijs: 1350 },
      { naam: 'Nasi Goreng “Yung Chow”', info: 'Met tja sue, erwten, garnaaltjes', prijs: 1500 },
      { naam: 'Nasi Goreng “Singapore”', info: 'Met kerrysmaak, tja sue en garnaaltjes', prijs: 1600 },
      { naam: 'Nasi Goreng “De Chinese Muur”', info: 'Babi pangang, 1/4 kip, 1 st. saté, foe yong hai', prijs: 1750 },
      { naam: 'Bami Goreng “De Chinese Muur”', info: 'Babi pangang, 1/4 kip, 1 st. saté, foe yong hai', prijs: 1750 },
      { naam: 'Chinese bami met kip', prijs: 1500 },
      { naam: 'Mihoen “Singapore”', info: 'Met kerry, tja sue en garnaaltjes', prijs: 1750 },
      { naam: 'Mihoen Goreng met gesneden kip', prijs: 1600 },
    ],
  },
  {
    id: 'vlees', kort: 'Kip en vlees', naam: 'Kip, varkensvlees en ossenhaas', gerechten: [
      { naam: 'Babi Pangang', prijs: 1950 },
      { naam: 'Babi Ketjap', prijs: 1950 },
      { naam: 'Koe Loe Yuk', info: 'Varkensvlees in deegballetjes in zoetzure saus', prijs: 1750 },
      { naam: 'Koe Loe Kai', info: 'Kipblokjes in deegballetjes in zoetzure saus', prijs: 1750 },
      { naam: 'Foe Yong Hai met gesneden kip', prijs: 1700 },
      { naam: 'Tjap Tjoy met gesneden kip', prijs: 1700 },
      { naam: 'Tjap Tjoy “De Chinese Muur”', info: 'Babi pangang, 1/4 kip, 1 st. saté, foe yong hai', prijs: 2150 },
      { naam: 'Kipfilet met kerrysaus', prijs: 1700 },
      { naam: 'Kipfilet met ananas', prijs: 1700 },
      { naam: 'Kip met zoetzure saus', prijs: 1950 },
      { naam: 'Varkenshaas met zwarte bonensaus', prijs: 1850 },
      { naam: 'Ossenhaas met oestersaus', prijs: 2200 },
    ],
  },
  {
    id: 'indisch', kort: 'Indisch', naam: 'Indisch en combinaties', gerechten: [
      { naam: 'Nasi Rames', prijs: 1550 },
      { naam: 'Bami Rames', prijs: 1550 },
      { naam: 'Nasi Rames “De Chinese Muur”', info: 'Babi pangang, 1/4 kip, 1 st. saté, foe yong hai', prijs: 2200 },
      { naam: 'Ajam Pangang', info: 'Gebraden kip in pikante saus', prijs: 1950 },
      { naam: 'Indisch Rundvlees met kerrysaus', prijs: 2050 },
      { naam: 'Gado Gado met rijst', prijs: 1500 },
      { naam: 'Foe You Fan', info: 'Foe yong hai, babi pangang, saté, nasi', prijs: 1800 },
      { naam: 'Nasi compleet', info: 'Rundvlees, babi pangang, saté, nasi', prijs: 1800 },
      { naam: 'Combinatie van Babi Pangang en Foe yong hai', prijs: 2200 },
      { nr: 'Nr 1', naam: '4-Gerechten Maaltijd', info: 'Koe loe yuk, Chinese salade, foe yong hai met babi pangang, nasi, bami of rijst', prijs: 1750 },
      { nr: 'Nr 3', naam: '4-Gerechten Maaltijd', info: 'Tjap tjoy, Chinese salade, foe yong hai met babi pangang, nasi, bami of rijst', prijs: 1850 },
      { nr: 'Nr 4', naam: '4-Gerechten Maaltijd', info: 'Rundvlees met kerry, Chinese salade, foe yong hai met babi pangang, nasi, bami of rijst', prijs: 1950 },
      { nr: 'Nr 9', naam: '4-Gerechten Maaltijd', info: 'Ossenhaas met komkommer, Chinese salade, foe yong hai met babi pangang, nasi, bami of rijst', prijs: 2350 },
    ],
  },
  {
    id: 'chinees', kort: 'Chinees', naam: 'Chinese specialiteiten', gerechten: [
      { naam: 'Peking eend', prijs: 2250 },
      { naam: 'Spareribs met zoete saus', prijs: 2000 },
      { naam: 'Cantonese gebakken halve kip', prijs: 2050 },
      { naam: 'Tja Sue', info: 'Geroosterd vlees', prijs: 2000 },
      { naam: 'Visfilet met zout en peper', prijs: 2250 },
      { naam: 'Taufu met Ma-po saus', prijs: 2000 },
      { naam: 'Kong Po Kai', info: 'Kipfilet in Szechuanese stijl', prijs: 2000 },
      { naam: 'King Duo Kai', info: 'Traditionele Pekingnese kipschotel, zoetzuur en pikant', prijs: 2000 },
      { naam: 'King Duo Ha', info: 'Traditionele Pekingnese garnalenschotel, zoetzuur en pikant', prijs: 2350 },
      { naam: 'Yu Siang Kai', info: 'Kipfilet met licht pittige saus', prijs: 2000 },
      { naam: 'Tie Pan Kip', info: 'Pittige, kruidige saus met diverse groenten', prijs: 2100 },
      { naam: 'Tie Pan Mix', info: 'Kip, varkenshaas en garnalen', prijs: 2400 },
    ],
  },
  {
    id: 'veg', kort: 'Vegetarisch', naam: 'Vegetarisch', gerechten: [
      { naam: 'Tjap Tjoy vegetarisch', prijs: 1600 },
      { naam: 'Foe Yong Hai Vegetarisch met champignons', prijs: 1600 },
      { naam: 'Mihoen vegetarisch', prijs: 1500 },
      { naam: 'Chinese Bami vegetarisch', prijs: 1500 },
      { naam: 'Taufu met zwarte bonensaus', prijs: 1600 },
      { naam: 'Gebakken pinda met diverse groenten', prijs: 1600 },
    ],
  },
  {
    id: 'menus', kort: 'Menu’s', naam: 'Menu’s en rijsttafels', gerechten: [
      { naam: 'Hapmenu voor 2 personen', info: 'Tomatensoep, mini loempia’s (8 stuks), foe yong hai kip, babi pangang, saté ajam, Indisch rundvlees met kerrysaus. Incl. nasi, bami of witte rijst', prijs: 2750 },
      { naam: 'Speciaal menu voor 3 personen', info: '6 stuks pangsit, babi pangang, foe yong hai, varkenshaas in zwartebonensaus. Incl. één grote of twee kleine bakken nasi, bami of witte rijst', prijs: 2900 },
      { naam: 'Chinese Rijsttafel, 1 persoon', info: 'Kroepoek, kippensoep, tja sue, foe yong hai, tjap tjoy, babi pangang, koe loe yuk, gebakken Chinese garnalen, saté', prijs: 2900 },
      { naam: 'Chinese Rijsttafel, 2 personen', prijs: 5800 },
      { naam: 'Chinese Rijsttafel “De Chinese Muur”, 2 personen', info: 'Onder meer soep “De Chinese Muur”, tja sue, babi pangang, tjap tjoy kip, foe yong hai kip, gebakken Chinese garnalen, saté kip', prijs: 6200 },
      { naam: 'Chinese Rijsttafel “De Chinese Muur”, 4 personen', prijs: 12400 },
      { naam: 'Indische Rijsttafel, 1 persoon', info: 'Onder meer rundvleesblokjes met paprika- en kerrysmaak, ajam roedjak, saté, sajoer, gado gado, atjar, gebakken banaan', prijs: 2700 },
      { naam: 'Indische Rijsttafel, 2 personen', prijs: 5400 },
      { naam: 'Chinees-Indisch Speciale Rijsttafel', info: 'Vanaf 4 personen', prijs: 12000 },
    ],
  },
];

export const euro = (c: number) =>
  '€ ' + (c / 100).toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Afhaalvoordeel (alleen bij afhalen, niet bij bezorgen), bedragen in centen.
export const stappen = [
  { vanaf: 3500, krijgt: 'gratis kroepoek' },
  { vanaf: 6500, krijgt: 'gratis 10 miniloempia’s en kroepoek' },
  { vanaf: 10000, krijgt: 'gratis 20 miniloempia’s en kroepoek' },
];
