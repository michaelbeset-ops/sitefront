// Feiten van lotusbrielle.nl (home, afhalen, buffet, lunch, catering, openingstijden, route) en het Google-profiel (4,3 uit 5, 1.174 reviews).
export const site = {
  naam: 'Restaurant Lotus',
  volledigeNaam: 'Chinees-Kantonees Specialiteiten-Restaurant Lotus',
  bv: 'Lotus Brielle B.V.',
  straat: 'Oostvoornseweg 2',
  postcode: '3232 LD',
  plaats: 'Brielle',
  tel: '0181 411 126',
  telHref: 'tel:+31181411126',
  mail: 'catering@lotusbrielle.nl',
  kvk: '51707217',
  maps: 'https://www.google.com/maps/search/?api=1&query=Restaurant+Lotus+Oostvoornseweg+2+Brielle',
  themeColor: '#1a1414',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const dagen = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];

export const buffet = [
  { wanneer: 'Woensdag en donderdag', prijs: '€ 29,50' },
  { wanneer: 'Vrijdag t/m zondag', prijs: '€ 31,50' },
  { wanneer: 'Kinderen van 4 tot 9 jaar', prijs: '€ 17,50' },
];

export const lunch = {
  soep: ['Kippensoep', 'Tomatensoep', 'Haaievinnensoep', 'Champignonsoep'],
  hoofd: ['Babi pangang', 'Foe yong hai', 'Tjap tjoy', 'Koe loe yuk', 'Kipfilet met kerrysaus', 'Kipfilet met champignonsaus', 'Kipfilet met ananas', 'Kipfilet met tausiesaus'],
  erbij: ['1 stokje saté', '2 stuks gebakken banaan', 'Koffie of thee'],
};

export const afhaalkaart = [
  'Soepen', 'Rijsttafels', 'Voorgerechten', 'Nasi en bami goreng', 'Mihoen gerechten', 'Combinatiegerechten',
  'Speciaal aanbevolen combinatiegerechten', 'Omeletgerechten', 'Groentengerechten', 'Varkensvleesgerechten',
  'Kipgerechten', 'Gepaneerde gerechten', 'Kerrygerechten', 'Ossenhaasgerechten', 'Garnalen- en visgerechten',
  'Speciaal aanbevolen', 'Indische gerechten',
];
export const sushikaart = ['Japanse sushi gerechten', "Speciale aanbieding sushi menu's"];

const vast = ["Hors d'oeuvre: mini loempia's, kerry kok, kanton wantan", 'Nasi, bami, witte rijst en mihoen', 'Kroepoek', 'Grote beker satésaus'];
export const cateringMenus = [
  { naam: 'Menu A', prijs: '€ 18,50', gerechten: [
    'Babi pangang, geroosterd mager varkensvlees',
    'Tausi kip, kip in zwarte bonensaus',
    'Po lo kip, kip met ananas en zoetzure saus',
    'Tjap tjoy kip, Chinese groentemix met kipfilet',
    'Kon po ngau, ossenhaas in licht-pikante saus en cashewnoten',
    ...vast] },
  { naam: 'Menu B', prijs: '€ 20,50', gerechten: [
    'Babi pangang, geroosterd mager varkensvlees',
    'Chung bao sam po, kip in zwarte bonensaus',
    'Sin lat kai, gepaneerde kipfilet met licht gekruide honingsaus',
    'Szechuan yuk, varkensvlees in pittige saus',
    'Kon po ngau, ossenhaas in licht-pikante saus en cashewnoten',
    ...vast] },
  { naam: 'Menu C', prijs: '€ 24,50', gerechten: [
    'Babi pangang, geroosterd mager varkensvlees',
    'Krokante vis zoetzuur, visfilet in zoetzure saus',
    'Kon po ngau, ossenhaas in licht-pikante saus en cashewnoten',
    'Sin lat kai, gepaneerde kipfilet met licht gekruide honingsaus',
    'Chung bao ha, garnalen in zwarte bonensaus',
    'Tausi yuk, varkensvlees in zwarte bonensaus',
    ...vast] },
];
