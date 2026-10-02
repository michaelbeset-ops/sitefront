// Bronnen (bekeken 2 oktober 2026):
// - vloerfix.nl via de WordPress-API: Home, Over ons, Werkwijze, Advies & prijs, Fotogallerij, Contact, sitemap.
//   Namen Wim de Man en Cock Vielvoije, "klein bedrijf", "meer dan 25 jaar ervaring", aannemers en particulieren,
//   de drie blokken Ervaring/Betrouwbaarheid/Kwaliteit (Home), de 8 adviesgegevens (Werkwijze), KvK en mail (footer).
//   Werkgebied: hun eigen plaatsnaampagina's (sitemap), gegroepeerd per provincie.
// - Google-bedrijfsprofiel: 5,0 uit 8 reviews, Dennenhof 23, 3355 RJ Papendrecht, 06 53190711,
//   openingstijden (ma 11.00-16.30, di t/m za 10.00-16.00, zo gesloten), drie reviewteksten letterlijk.
export const site = {
  naam: 'Vloerfix',
  straat: 'Dennenhof 23',
  postcode: '3355 RJ',
  plaats: 'Papendrecht',
  tel: '06 53 19 07 11',
  telHref: 'tel:+31653190711',
  wa: 'https://wa.me/31653190711',
  mail: 'info@vloerfix.nl',
  kvk: '23075872',
  google: '5,0',
  googleAantal: 8,
  googleUrl: 'https://www.google.com/maps/place/Vloerfix/@51.8373786,4.7079705,17z/data=!4m6!3m5!1s0x47c42964824e43c1:0xc4292e60a7f11490!8m2!3d51.8373786!4d4.7079705',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Dennenhof+23+3355+RJ+Papendrecht',
  themeColor: '#1b1a18',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden volgens het Google-bedrijfsprofiel. Index = Date.getDay() (0 = zondag).
export const tijden: { dag: string; kort: string; open?: string; dicht?: string }[] = [
  { dag: 'Zondag', kort: 'zo' },
  { dag: 'Maandag', kort: 'ma', open: '11:00', dicht: '16:30' },
  { dag: 'Dinsdag', kort: 'di', open: '10:00', dicht: '16:00' },
  { dag: 'Woensdag', kort: 'wo', open: '10:00', dicht: '16:00' },
  { dag: 'Donderdag', kort: 'do', open: '10:00', dicht: '16:00' },
  { dag: 'Vrijdag', kort: 'vr', open: '10:00', dicht: '16:00' },
  { dag: 'Zaterdag', kort: 'za', open: '10:00', dicht: '16:00' },
];
export const tijdTekst = (t: string) => t.replace(':', '.');

// Letterlijk van Google (beperkte weergave toont deze drie), alleen de naam ingekort.
export const reviews = [
  { naam: 'Robert v. G.', tekst: 'Geweldig bedrijf: vlotte communicatie, houden zich aan afspraken en perfecte vloer voor betaalbare prijs.' },
  { naam: 'Simon', tekst: 'Op basis van recensies gekozen, maar meer dan dik tevreden. Je merkt dat de mannen ruim 30 jaar ervaring hebben. Prachtig eindresultaat.' },
  { naam: 'Mark G.', tekst: 'Echte vak mannen. Helemaal super gelegd. Voordeel is dat de tegelzetter er ook blij mee was en goed kon door werken!' },
];

// Plaatsen met een eigen pagina op vloerfix.nl, per provincie. De eerste plaatsen tonen we als chip.
export const werkgebied: { provincie: string; plaatsen: string[] }[] = [
  { provincie: 'Zuid-Holland', plaatsen: ['Papendrecht', 'Dordrecht', 'Sliedrecht', 'Alblasserdam', 'Zwijndrecht', 'Hendrik-Ido-Ambacht', 'Ridderkerk', 'Gorinchem', 'Hardinxveld-Giessendam', 'Kinderdijk', 'Leerdam', 'Rotterdam', 'Den Haag', 'Delft', 'Leiden', 'Gouda', 'Alphen aan den Rijn', 'Bergschenhoek', 'Berkel en Rodenrijs', 'Bleiswijk', 'Bodegraven', 'Boskoop', 'Brielle', 'Capelle aan den IJssel', 'Dirksland', 'Hazerswoude', 'Hellevoetsluis', 'Hoogvliet', 'Katwijk', 'Krimpen aan de Lek', 'Krimpen aan den IJssel', 'Leiderdorp', 'Leidschendam', 'Maassluis', 'Moerkapelle', 'Moordrecht', 'Nootdorp', 'Oegstgeest', 'Pernis', 'Pijnacker', 'Rijswijk', 'Rockanje', 'Schiedam', 'Scheveningen', 'Schoonhoven', 'Spijkenisse', 'Vlaardingen', 'Waddinxveen', 'Wassenaar', 'Zoetermeer', 'Zevenhuizen', 'Puttershoek', 'Oud-Beijerland', 'Numansdorp', 'Ooltgensplaat', 'Ouddorp', 'Goeree-Overflakkee', 'Middelharnis', 'Oude-Tonge', 'Den Bommel'] },
  { provincie: 'Utrecht', plaatsen: ['Utrecht', 'Nieuwegein', 'Houten', 'IJsselstein', 'Vianen', 'Woerden', 'Zeist', 'Amersfoort', 'Abcoude', 'Baarn', 'Bilthoven', 'Breukelen', 'Bunnik', 'Bunschoten', 'Cabauw', 'Den Dolder', 'Doorn', 'Driebergen-Rijsenburg', 'De Meern', 'Eemdijk', 'Eemnes', 'Everdingen', 'Jannendorp', 'Lage Vuursche', 'Leersum', 'Leusden', 'Lopik', 'Maarsbergen', 'Maarssen', 'Mijdrecht', 'Montfoort', 'Oudewater', 'Renswoude', 'Rhenen', 'Soest', 'Soestdijk', 'Soesterberg', 'Spakenburg', 'Vleuten', 'Vinkeveen', 'Wijk bij Duurstede', 'Woudenberg'] },
  { provincie: 'Noord-Brabant', plaatsen: ['Breda', 'Tilburg', 'Den Bosch', 'Eindhoven', 'Oosterhout', 'Werkendam', 'Waalwijk', 'Bergen op Zoom', 'Roosendaal', 'Dongen', 'Drimmelen', 'Zevenbergen', 'Aalst', 'Alphen', 'Asten', 'Baarle', 'Bavel', 'Best', 'Bladel', 'Boxmeer', 'Boxtel', 'Budel', 'Cuijk', 'Den Dungen', 'Drunen', 'Fijnaart', 'Geldrop', 'Gemert', 'Gilze', 'Goirle', 'Hapert', 'Heusden', 'Hilvarenbeek', 'Kaatsheuvel', 'Helmond', 'Mierlo', 'Oss', 'Rijsbergen', 'Rosmalen', 'Rucphen', 'Someren', 'Uden', 'Valkenswaard', 'Veghel', 'Vught', "'s-Hertogenbosch"] },
  { provincie: 'Zeeland', plaatsen: ['Middelburg', 'Goes', 'Vlissingen', 'Terneuzen', 'Zierikzee', 'Hulst', 'Axel', 'Borsele', 'Breskens', 'Cadzand', 'Hoofdplaat', 'Kapelle', 'Noord-Beveland', 'Oost-Souburg', 'Reimerswaal', 'Schouwen-Duiveland', 'Sluis', 'Tholen', 'Veere'] },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent('Hallo Vloerfix, ' + tekst)}`;
