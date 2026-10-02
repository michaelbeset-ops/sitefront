// Feiten van rijschoolherman.com (home, wie zijn wij, rijlessen auto/motor, tarieven auto/motor, 2ToDrive, contact;
// opgehaald 2 oktober 2026), het Google-bedrijfsprofiel (5,0 uit 3, niet geclaimd, geen openingstijden), Facebook
// (100% aanbevolen, 5 beoordelingen) en Clickdrive (5,0 uit 2, CBR-cijfers). Oudaenstraat 4, 2985 VN Ridderkerk.
// Telefoon: Google en Clickdrive 06 14 66 07 71 (op de site "motor"); site en Facebook 06 12 55 11 47 ("algemeen").
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
  cbr: '4605A2',
  google: { score: '5,0', aantal: 3 },
  themeColor: '#1c1d1f',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waIntake = waMet('Hoi, ik wil graag een intakeles plannen bij Rijschool Herman.');

// Tarieven zoals gepubliceerd op rijschoolherman.com/tarievenauto en /tarievenmotor (stand 2 oktober 2026).
export type Pakket = { naam: string; inhoud: string; prijs: string };
export const tarieven = {
  auto: {
    label: 'Auto',
    rijbewijs: 'B',
    pakketten: [
      { naam: 'Pakket A', inhoud: '20 lessen van 60 minuten, praktijkexamen', prijs: '1.150' },
      { naam: 'Pakket B', inhoud: '35 lessen van 60 minuten, praktijkexamen', prijs: '1.800' },
      { naam: 'Pakket C', inhoud: '35 lessen van 60 minuten, theorie-examen, tussentijdse toets, praktijkexamen', prijs: '1.999' },
      { naam: 'Pakket D', inhoud: '40 lessen van 60 minuten, theorie-examen, tussentijdse toets, praktijkexamen', prijs: '2.250' },
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
      { naam: 'Pakket A', inhoud: '10 lessen van 100 minuten, zonder examens', prijs: '750' },
      { naam: 'Pakket B', inhoud: '14 lessen van 100 minuten, AVB-examen', prijs: '1.250' },
      { naam: 'Pakket C', inhoud: '18 lessen van 100 minuten, theorie-examen, AVB-examen', prijs: '1.575' },
      { naam: 'Pakket D', inhoud: '18 lessen van 100 minuten, theorie-examen, AVB- en AVD-examen', prijs: '1.750' },
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
