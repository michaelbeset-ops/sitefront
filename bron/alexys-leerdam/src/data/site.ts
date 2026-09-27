// Feiten van alexys.nl (home, menu, reserveren, contact) en het Google-profiel (4,6 uit 378).
export const site = {
  naam: "Grieks Restaurant Alexy's",
  kort: "Alexy's",
  straat: 'Fonteinstraat 17',
  postcode: '4141 CE',
  plaats: 'Leerdam',
  tel: '0345 61 32 12',
  telHref: 'tel:+31345613212',
  mail: 'diner@alexys.nl',
  reserveren: 'http://www.alexys.nl/reserveren/',
  afhalen: 'https://alexys.sitedish.shop/',
  facebook: 'https://www.facebook.com/Alexys-Restaurant-104727174901366',
  maps: "https://www.google.com/maps/search/?api=1&query=Alexy's+Fonteinstraat+17+Leerdam",
  themeColor: '#0b2545',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Hun eigen menukaart van alexys.nl/menu, alleen duidelijke typefouten verbeterd. Prijzen staan er niet bij.
export const menu: { kop: string; items: [string, string][] }[] = [
  { kop: 'Koude voorgerechten', items: [
    ['De Bankslaper', 'Tzatziki: frisse saus van Griekse yoghurt, knoflook en komkommer'],
    ['Skordovoutiro', 'Kruidenboter uit eigen keuken met vers stokbrood'],
    ['Griekse salade', 'De koningin onder de salades'],
    ['Elies-Piperies', 'Kalamata-olijven en Griekse pepers'],
    ['Trio', 'Tzatziki, licht pittige fetapuree en auberginemousse'],
  ] },
  { kop: 'Warme voorgerechten', items: [
    ['Soutzoukakia', 'Gehaktballetjes in tomatensaus'],
    ['Diavolo giros', 'Giros in pittige tomaten-rodewijnsaus'],
    ['Feta in filodeeg', 'Gefrituurd, met balsamico-honingsaus'],
    ['Spanakopitakia', 'Filodeeg met feta, spinazie en verse dille'],
    ['Dolmades', 'Druivenblad met rijst, gehakt en dille, met een fris citroensausje'],
    ['Mydia tiganita', 'In knoflookolie gebakken mosselen'],
    ['Trio fournisto', 'Drie soorten kaas met een vleugje tomatensaus uit de oven'],
  ] },
  { kop: 'Hoofdgerechten', items: [
    ['Giros', 'Van de draaigrill, met rijst en tzatziki'],
    ['Drunken giros', 'Giros in honing-rodewijnsaus met friet en rijst'],
    ['Mikro', 'Soutzouki, souvlaki, giros, rijst en tzatziki'],
    ['Mixed', 'Souvlaki, lamskotelet, soutzouki, kipfilet, giros, rijst en tzatziki'],
    ['Chickie-dijen', 'Gegrilde kippendijen met knoflook-muntsaus, rijst en friet'],
    ['Paidakia', 'Gegrilde lamskoteletten met rijst en tzatziki'],
    ['Moussaka', 'Ovenschotel van aardappel, gehakt en aubergine'],
    ['Vegetarisch', 'Een verrassing van de kok'],
    ['Solomos', 'Gegrilde zalm met rijst en friet'],
  ] },
  { kop: 'Dessert', items: [
    ['Baklava', 'Filodeeg met walnoten en honingsiroop, met ijs en slagroom'],
    ['Griekse yoghurt', 'Met honing en walnoten'],
    ['Walnotenijs', 'Met karamelsaus en slagroom'],
    ['Dame noir', 'Chocolade-ijs met warme chocoladesaus en slagroom'],
  ] },
];
