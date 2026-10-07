// Feiten (bekeken 7 oktober 2026), bronnen in bron/web/:
// - menkrolluiken.nl (WordPress, thema "menk2013"; pages.json via wp-json):
//   Contact (laatst gewijzigd 11-06-2026): Middeldijk 56a unit 11, 2992 SJ Barendrecht, 0180634267, info@menkrolluiken.nl.
//   Home (2013): "specialist op het gebied van alle soorten zonweringen en rolluiken", "uitsluitend hoogwaardige kwaliteit producten
//   en maatwerk afgestemd op de eisen van zowel de particuliere als de zakelijke klant", "dealer van vrijwel alle top merken",
//   "snelheid, vakkennis en het nakomen van afspraken", "Op afspraak komt ons team alles nauwkeurig inmeten en via onze eigen
//   technische dienst ...", werkgebied: Dordrecht, Zwijndrecht, Ambacht, Papendrecht, Sliedrecht, Alblasserdam, "door heel Nederland".
//   Particulier: "Als uw wilt komen wij geheel vrijblijvend langs met een passend advies op maat", offerte.
//   Zakelijk: eigen gecertificeerde montage service, samenwerking architecten, onderhoud zonwering (jaarlijks of twee jaarlijks)
//   voor o.a. scholen en artsenpraktijken, afspraak "zowel op kantoor bij u als bij ons op kantoor", alleen een tekening is ook goed.
//   Rolluiken: gesloten / geperforeerd (screen effect) / transparant en open gestanst (etalage); val- en stormbeveiliging;
//   motoren Somfy en Becker. Offerte: 30 dagen bedenktijd. Bericht "binnen 24 uur", behalve weekend/feestdagen.
//   Terrasoverkapping: "breedte ... van ruim 6.5 meter". Vergunning/VvE/verhuurder: "kunnen wij voor deze aanvragen zorg dragen".
// - Webarchief: 2003 "MenK Rolluiken - Garagedeuren - Zonweringen", bel 0180 - 634 267; 2015 Kijfhoek 36, Loods 14, 3335 LE Zwijndrecht.
// - Google: geen profiel op Middeldijk; alleen "MenK Rolluiken", Pruimendijk 62 Ridderkerk, niet geclaimd, geen reviews (niet gebruikt).
// - Trustoo "Menk zonwering" (Kijfhoek 36, Zwijndrecht): 8,4 uit 7 reviews (= 4,2/5, onder de lat: niet getoond).
// Geen 06 en geen WhatsApp. Geen openingstijden bekend ("tijdens kantooruren"). Geen eigenaarsnaam in eigen bron.
export const site = {
  naam: 'Menk Rolluiken & Zonwering',
  kort: 'Menk',
  straat: 'Middeldijk 56a, unit 11',
  postcode: '2992 SJ',
  plaats: 'Barendrecht',
  tel: '0180 634 267',
  telHref: 'tel:+31180634267',
  mail: 'info@menkrolluiken.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Middeldijk+56a+2992+SJ+Barendrecht',
  themeColor: '#221a4d',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Productpagina's van hun eigen site.
export const particulier = ['Zonwering buiten', 'Zonwering binnen', 'Rolluiken', 'Terrasoverkappingen', 'Markiezen', 'Horren'];
export const zakelijk = ['Rolluiken', 'Brandwerende rolluiken', 'Brandwerende rolschermen', 'Brandwerende schuifdeuren', 'Geïsoleerde roldeuren', 'Speeddeuren', 'Rolhekken', 'Schaarhekken', 'Balie rolluiken', 'Zonwering binnen en buiten', 'Overkappingen'];

// Merken die op hun productpagina's staan (spelling van de merken zelf).
export const merken = ['AVZ', 'Solair', 'Alulux', 'Heroal', 'Somfy', 'Becker', 'Renson', 'Stobag', 'Weinor', 'Verosol', 'Sunway', 'Lega', 'KeJe', 'Metacon'];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
