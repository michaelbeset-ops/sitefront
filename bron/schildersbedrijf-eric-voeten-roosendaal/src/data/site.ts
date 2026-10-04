// Feiten: Google-bedrijfsprofiel "Schildersbedrijf Eric Voeten" (bekeken 4 oktober 2026; 5,0 uit 2 reviews, ma t/m za 08:00-18:00,
// zondag gesloten, 06 46603927), Facebook schildersbedrijfericvoeten (388 volgers, laatste bericht 17 juni 2026), en de huidige
// site schildersbedrijfericvoeten.nl (KvK 63496666, btw-id, Repair Care niveau 1, 2 en 3, monumentaal werk, meerjarenplanning).
export const site = {
  naam: 'Schildersbedrijf Eric Voeten',
  kort: 'Eric Voeten',
  eigenaar: 'Eric',
  straat: 'Gripvelden 42',
  postcode: '4707 ZE',
  plaats: 'Roosendaal',
  tel: '06 46 60 39 27',
  telHref: 'tel:+31646603927',
  wa: 'https://wa.me/31646603927',
  mail: 'info@schildersbedrijfericvoeten.nl',
  kvk: '63496666',
  facebook: 'https://www.facebook.com/schildersbedrijfericvoeten',
  flickr: 'https://www.flickr.com/photos/194854677@N02/albums',
  maps: 'https://www.google.com/maps/search/?api=1&query=Schildersbedrijf+Eric+Voeten+Gripvelden+42+Roosendaal',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Schildersbedrijf+Eric+Voeten+Roosendaal',
  google: { score: '5,0', aantal: 2 },
  themeColor: '#16241c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// De tien verfvlakken uit hun logo (van links naar rechts).
export const vlakken = ['#2e3192', '#662d91', '#ec008c', '#ed1c24', '#f47920', '#fff200', '#8dc63f', '#006838', '#00aeef', '#939598'];

// dag: 0 = zondag (zoals Date.getDay).
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '08.00', dicht: '18.00' },
  { dag: 2, naam: 'Dinsdag', open: '08.00', dicht: '18.00' },
  { dag: 3, naam: 'Woensdag', open: '08.00', dicht: '18.00' },
  { dag: 4, naam: 'Donderdag', open: '08.00', dicht: '18.00' },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '18.00' },
  { dag: 6, naam: 'Zaterdag', open: '08.00', dicht: '18.00' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// Diensten: menu en teksten van de huidige site + "Services"-labels bij de Google-reviews.
export const chips = ['Buitenschilderwerk', 'Binnenschilderwerk', 'Spuitwerk wanden en plafonds', 'Deuren en kozijnen spuiten', 'Houtrotherstel (Repair Care)', 'Onderhoud en renovatie', 'Meerjarenplanning', 'Monumentaal werk'];

// Letterlijk van Google (stand 4 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Bastiaan S.', wanneer: '3 jaar geleden', tekst: 'Eric heeft de kozijnen aan de buitenzijde en de muren en deuren aan de binnenzijde van onze woning geschilderd. Fijn contact, goede communicatie. Eric werkt zeer nauwkeurig en denkt met je mee. Wij zijn erg tevreden met het resultaat!', labels: 'Stiptheid, Kwaliteit en Professionaliteit' },
  { naam: 'Johan M.', wanneer: '3 jaar geleden', tekst: 'Topschilder met gevoel voor zijn werk\nEen aanrader om je huis in zijn handen te geven voor alle benodigde schilderwerken\nLevert perfect werk af', labels: 'Responsiviteit, Stiptheid, Kwaliteit, Professionaliteit en Waarde' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag Eric, ik wil graag een offerte voor schilderwerk.');
