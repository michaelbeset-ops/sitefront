// Feiten van rijschoolherman.com (home, wie zijn wij, rijlessen auto/motor, tarieven auto/motor, 2ToDrive, contact;
// opgehaald 2 oktober 2026), het Google-bedrijfsprofiel (5,0 uit 3, één review met tekst, geen openingstijden), Facebook
// (100% aanbevolen, 5 beoordelingen) en Clickdrive (5,0 uit 2 Google-reviews; CBR-cijfers Q4 2015 t/m Q2 2026).
// Oudaenstraat 4, 2985 VN Ridderkerk. Telefoon: site "+31612551147 (algemeen)" en "+31614660771 (motor)";
// Google en Clickdrive tonen 06 14 66 07 71. WhatsApp staat op 06 14 66 07 71.
export const site = {
  naam: 'Rijschool Herman',
  straat: 'Oudaenstraat 4',
  postcode: '2985 VN',
  plaats: 'Ridderkerk',
  tel: '06 14 66 07 71',
  telHref: 'tel:+31614660771',
  tel2: '06 12 55 11 47',
  tel2Href: 'tel:+31612551147',
  wa: 'https://wa.me/31614660771',
  mail: 'info@rijschoolherman.com',
  facebook: 'https://www.facebook.com/rijschool.herman/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rijschool+Herman+Oudaenstraat+4+Ridderkerk',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Rijschool+Herman+Ridderkerk',
  clickdrive: 'https://clickdrive.nl/rijscholen/ridderkerk/autorijschool-herman',
  cbr: '4605A2',
  google: { score: '5,0', aantal: 3 },
  themeColor: '#14171b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Werkgebied zoals op de homepage van rijschoolherman.com.
export const werkgebied = ['Ridderkerk', 'Rotterdam', 'Barendrecht', 'Hendrik-Ido-Ambacht', 'Zwijndrecht', 'Dordrecht'];

export const chips = ['Rijbewijs B', 'Rijbewijs A', 'Intakeles', 'Lessen van 60 of 90 minuten', 'Motorles van 100 minuten', 'Tussentijdse toets', 'AVB en AVD', 'Theorie-examen', 'Lesmateriaal op aanvraag'];

// Letterlijk van Google (stand 2 oktober 2026). De enige review met tekst; de andere twee zijn alleen sterren.
export const review = {
  naam: 'Lars',
  tekst: 'Super goede instructeur. Mijn AVB- en AVD-examen allebei in één keer gehaald, met een minimaal aantal lessen. Uitleg is erg duidelijk en wordt goed voorgedaan.',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waIntake = waMet('Hoi, ik wil graag een intakeles plannen bij Rijschool Herman.');

// Tarieven zoals gepubliceerd op rijschoolherman.com/tarievenauto en /tarievenmotor (stand 2 oktober 2026).
export type Pakket = { naam: string; lessen: number; duur: number; extra: string[]; prijs: string };
export const tarieven = {
  auto: {
    label: 'Auto',
    rijbewijs: 'B',
    pakketten: [
      { naam: 'Pakket A', lessen: 20, duur: 60, extra: ['Praktijkexamen CBR'], prijs: '1.150' },
      { naam: 'Pakket B', lessen: 35, duur: 60, extra: ['Praktijkexamen CBR'], prijs: '1.800' },
      { naam: 'Pakket C', lessen: 35, duur: 60, extra: ['Theorie-examen CBR', 'Tussentijdse toets', 'Praktijkexamen CBR'], prijs: '1.999' },
      { naam: 'Pakket D', lessen: 40, duur: 60, extra: ['Theorie-examen CBR', 'Tussentijdse toets', 'Praktijkexamen CBR'], prijs: '2.250' },
    ] as Pakket[],
    los: [
      ['Intakeles, 60 minuten', '42,50'],
      ['Rijles, 60 minuten', '47,50'],
      ['Rijles, 90 minuten', '65,00'],
      ['Tussentijdse toets', '210,00'],
      ['Praktijkexamen CBR', '245,00'],
      ['Theorie-examen CBR', '50,00'],
    ],
  },
  motor: {
    label: 'Motor',
    rijbewijs: 'A',
    pakketten: [
      { naam: 'Pakket A', lessen: 10, duur: 100, extra: ['Exclusief examens'], prijs: '750' },
      { naam: 'Pakket B', lessen: 14, duur: 100, extra: ['AVB-examen CBR'], prijs: '1.250' },
      { naam: 'Pakket C', lessen: 18, duur: 100, extra: ['Theorie-examen CBR', 'AVB-examen CBR'], prijs: '1.575' },
      { naam: 'Pakket D', lessen: 18, duur: 100, extra: ['Theorie-examen CBR', 'AVB-examen CBR', 'AVD-examen CBR'], prijs: '1.750' },
    ] as Pakket[],
    los: [
      ['Intakeles, 90 minuten', '60,00'],
      ['Rijles, 100 minuten', '80,00'],
      ['Tussentijdse toets', '205,00'],
      ['AVB-examen CBR', '165,00'],
      ['AVD-examen CBR', '255,00'],
      ['Theorie-examen CBR', '50,00'],
    ],
  },
};
