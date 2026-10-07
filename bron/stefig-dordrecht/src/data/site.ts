// Feiten (bekeken 7 oktober 2026), ruwe bronnen in ../../bron:
// - Eigen site stefig.nl (Jimdo, alle 31 pagina's in bron/web/crawl.txt): Stefig - maatwerk in hout, eigenaar Stefan Oostveen,
//   eigen bedrijf begin 2017, sinds 2006 in het vak, BBL Hout en Meubilerings College Rotterdam, verhuisd naar Dordrecht:
//   oude woning met loods van 200 m2. Contact: 06 446 979 29, info@stefig.nl, ma t/m vr 7:30 tot 16:30, za op afspraak,
//   zo gesloten, geen showroom, langskomen op telefonische afspraak. KvK 68504845 (algemene voorwaarden).
//   Adres Stevensweg 62 is woning + loods: daarom geen straat op de site, alleen Dordrecht.
// - Google-bedrijfsprofiel "Stefig- Maatwerk in hout": 5,0 uit 11 reviews (allemaal 5 sterren).
export const site = {
  naam: 'Stefig maatwerk in hout',
  kort: 'Stefig',
  eigenaar: 'Stefan Oostveen',
  plaats: 'Dordrecht',
  tel: '06 44 69 79 29',
  telHref: 'tel:+31644697929',
  wa: 'https://wa.me/31644697929',
  mail: 'info@stefig.nl',
  kvk: '68504845',
  webshop: 'https://www.stefig.nl/webshop/',
  google: { score: '5,0', aantal: 11, url: 'https://www.google.com/maps/search/?api=1&query=Stefig+Maatwerk+in+hout+Dordrecht' },
  themeColor: '#1b1a18',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk uit hun categoriemenu (stefig.nl/interieur en het offerteformulier).
export const categorieen = ['Draaideurkasten', 'Schuifdeurkasten', 'Kasten onder schuin dak', 'Inloopkasten', 'Wandkasten', 'Trapkasten', 'Halkasten', 'Ladenkasten', 'Audiomeubels', 'Cinewalls', 'Radiatorombouw', 'Eettafels', 'Salontafels', 'Wandplanken', 'Kamer en suites', 'Keukens', "Bureau's", 'Bedden', 'Badkamermeubels', 'Winkelinrichting'];

// Houtsoorten en materialen zoals ze in hun eigen fotobeschrijvingen staan.
export const materialen = ['Eikenfineer', 'Massief eiken', 'Douglas', 'Steigerhout', 'Iroko', 'Teakfineer', 'Gelakt', 'Weet ik nog niet'];

// Plaatsnamen uit hun eigen fotobeschrijvingen ("Gemonteerd in ..." / "Geplaatst in ..."), meest genoemd eerst.
export const plaatsen = ['Ridderkerk', 'Barendrecht', 'Rotterdam', 'Dordrecht', 'Hendrik-Ido-Ambacht', 'Capelle aan den IJssel', 'Heinenoord', 'Rhoon', 'Papendrecht', 'Heerjansdam', 'Gouda', 'Zwijndrecht', 'Numansdorp', 'Maasland', 'Hoek van Holland', 'Utrecht', 'Rijswijk', 'Maasdijk', 'Hoogvliet', 'Den Haag', 'Waddinxveen', 'Schiedam', 'Nieuwerkerk aan den IJssel', 'Nieuwegein', 'Meerssen', 'Wijk bij Duurstede', 'Terneuzen', 'Puttershoek', 'Oud-Beijerland', 'Etten-Leur', 'Berkel en Rodenrijs', 'Alkmaar'];

// Letterlijk van Google (5 sterren, stand 7 oktober 2026), ingekort met "…". Achternaam als initiaal.
export const reviews = {
  groot: { naam: 'Peet v. D.', tekst: 'Met Stefan in contact gekomen en een amateuristische tekening laten zien. Aan de hand hiervan heeft hij een 3D tekening gemaakt en dat zag er goed uit. … Als je van zo’n klad tekeningetje zo een kast naar onze gedachten kan maken ben je een vakman.' },
  los: [
    { naam: 'Wendy v. H.', tekst: 'Stefan levert maatwerk met een gouden randje. Door goed te luisteren en mee te denken weet hij ideeen om te zetten in meubels. … Hij werkt secuur en netjes en heeft oog voor afwerking, een echte vakman!' },
    { naam: 'Sjoerd v. D.', tekst: 'Hij kwam het allemaal opmeten en een aantal weken later kwam hij alles plaatsen. Niet alleen is het allemaal perfect op maat, ook de afwerking is meer dan prima, netjes afgekit.' },
    { naam: 'Vincent v. E.', tekst: 'Zowel het blad als de industriële poten zijn volledig op maat gemaakt i.v.m. de eerder aangeschafte eetkamerstoelen. Stefan werkt snel, is erg klantvriendelijk en levert goed werk.' },
  ],
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Stefan, ik heb een vraag over maatwerk in hout.');
