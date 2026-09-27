// Feiten van harrymeijndert.nl (home, occasions, bedrijfsprofiel, financiering, routebeschrijving; opgehaald 27-09-2026)
// en het Google-profiel (4,5 uit 5, 150 reviews). Voorraad: eerste advertenties van de voorraadlijst van 27-09-2026.
export const site = {
  naam: 'Autobedrijf Harry Meijndert',
  straat: 'Newtonweg 1-B',
  postcode: '3208 KD',
  plaats: 'Spijkenisse',
  tel: '0181 617 559',
  telHref: 'tel:+31181617559',
  mail: 'info@harrymeijndert.nl',
  kvk: '88834204',
  maps: 'https://www.google.com/maps/search/?api=1&query=Autobedrijf+Harry+Meijndert+Newtonweg+1-B+Spijkenisse',
  facebook: 'https://www.facebook.com/harrymeijndert.nl',
  ribank: 'http://www.aanvraagmodule.nl/index.asp?logintype=customer&dlsalesID=01464001',
  themeColor: '#1d2126',
  voorraadAantal: 106,
  voorraadDatum: '27 september 2026',
  google: { score: '4,5', reviews: 150 },
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

export const tijden = [
  { dag: 'Maandag t/m vrijdag', tijd: '09.00 tot 17.00' },
  { dag: 'Zaterdag', tijd: '10.00 tot 15.00' },
];

// Uitvoering opgeschoond: verkoopkreten als "Nette Auto!" en "Inruilkoopje!" weggelaten. BMW 116i ("start niet") niet getoond.
export const autos = [
  { merk: 'BMW', model: '3 Serie', uitvoering: 'M3 F80 DCT', jaar: 2014, km: '114.753', brandstof: 'Benzine', transmissie: 'Automaat', carrosserie: 'Sedan', apk: '', prijs: '44.950' },
  { merk: 'Citroën', model: 'AC 4', uitvoering: 'Volledig gerestaureerd', jaar: 1929, km: '9.099', brandstof: 'Benzine', transmissie: 'Handgeschakeld', carrosserie: 'Cabriolet', apk: '', prijs: '14.960' },
  { merk: 'Audi', model: 'A4', uitvoering: 'Avant 4.2 V8 quattro S4 Pro Line', jaar: 2004, km: '185.026', brandstof: 'Benzine', transmissie: 'Handgeschakeld', carrosserie: 'Estate', apk: 'bij aflevering', prijs: '9.960' },
  { merk: 'Audi', model: 'Q5', uitvoering: '3.2 FSI quattro Pro Line S-Line', jaar: 2009, km: '272.429', brandstof: 'Benzine', transmissie: 'Automaat', carrosserie: 'SUV', apk: 'tot 14 januari 2027', prijs: '8.960' },
  { merk: 'BMW', model: '1 Serie', uitvoering: '118i Business Line', jaar: 2010, km: '287.109', brandstof: 'Benzine', transmissie: 'Automaat', carrosserie: 'Hatchback', apk: 'tot 15 juni 2027', prijs: '3.260' },
  { merk: 'Citroën', model: 'C3 Picasso', uitvoering: '1.4 VTi Exclusive', jaar: 2010, km: '205.187', brandstof: 'Benzine', transmissie: 'Handgeschakeld', carrosserie: 'MPV', apk: '', prijs: '2.960' },
  { merk: 'Citroën', model: 'C1', uitvoering: '1.0 e-VTi Business', jaar: 2014, km: '206.578', brandstof: 'Benzine', transmissie: 'Handgeschakeld', carrosserie: 'Hatchback', apk: 'tot 28 november 2026', prijs: '2.960' },
  { merk: 'Chevrolet', model: 'Aveo', uitvoering: '1.2 16V LS', jaar: 2009, km: '157.964', brandstof: 'Benzine', transmissie: 'Handgeschakeld', carrosserie: 'Hatchback', apk: '', prijs: '2.760' },
  { merk: 'Chevrolet', model: 'Matiz', uitvoering: '0.8 Style', jaar: 2007, km: '158.896', brandstof: 'Benzine', transmissie: 'Handgeschakeld', carrosserie: 'Hatchback', apk: 'tot 18 september 2027', prijs: '1.460' },
];

export const tijdlijn = [
  { jaar: '1965', titel: 'Sloperij aan de Nieuwstraat', tekst: 'Begonnen als sloperijbedrijf in het centrum van Spijkenisse. Eerst alleen handel in tweedehands onderdelen, na enkele jaren ook in occasions en reparaties.' },
  { jaar: '1980', titel: 'Naar de Elementenweg', tekst: 'Het centrum groeide en het bedrijf moest verhuizen. In 1979 ging de eerste paal de grond in, in 1980 was de verhuizing een feit. Later kwam het buurpand erbij, "De Loods", voor de opslag van onderdelen.' },
  { jaar: 'Eind jaren 90', titel: 'Gestopt met slopen', tekst: 'De nadruk lag al op handel in en reparatie van occasions. Toen de milieuwetten veranderden, stopte het bedrijf met de sloperij.' },
  { jaar: '2012', titel: 'Newtonweg, Halfweg 2', tekst: 'Medio november 2012 verhuisd naar een modern pand, met een grotere showroom en een grotere garage dan voorheen.' },
  { jaar: 'Nu', titel: 'Een nieuwe generatie', tekst: 'Het familiebedrijf is overgenomen door een enthousiaste nieuwe generatie.' },
];

export const route = [
  'Rij richting Rotterdam en volg de borden "Europoort".',
  'Neem op de A15 afslag 16, Spijkenisse.',
  'Bij het eerste verkeerslicht linksaf, over de Hartelbrug (N218, Hartelweg).',
  'Bij het eerste verkeerslicht linksaf (N493, Groene Kruisweg).',
  'Bij het eerste verkeerslicht rechtsaf, richting industrieterrein Halfweg 2 (Edisonweg).',
  'Na ongeveer 450 meter ziet u ons schuin rechts voor u.',
];
