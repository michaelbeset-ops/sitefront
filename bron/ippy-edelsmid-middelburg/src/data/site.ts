// Feiten: ippy.nl (Home, Sieraden, Trouwringen, Trouwen, Atelier, Eigen werk, Winkel, Handige tips; bekeken 6 oktober 2026),
// Instagram @ippyjuwelier (bio + posts januari-september 2026, bron/ighi/captions.txt),
// Google-bedrijfsprofiel "Ippy edelsmid" (4,8 uit 17 reviews; geen openingstijden ingevuld).
export const site = {
  naam: 'IPPY Edelsmid',
  straat: 'Langeviele 52',
  postcode: '4331 LW',
  plaats: 'Middelburg',
  tel: '06 42 11 86 17',
  telHref: 'tel:+31642118617',
  wa: 'https://wa.me/31642118617',
  mail: 'ippyjuwelier@gmail.com',
  instagram: 'https://www.instagram.com/ippyjuwelier/',
  facebook: 'https://www.facebook.com/IPPYsieraden/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Ippy+edelsmid+Langeviele+52+Middelburg',
  google: { score: '4,8', aantal: 17 },
  themeColor: '#f3f1ee',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van Google (alle 5 sterren, stand 6 oktober 2026). Naam: voornaam + initiaal.
export const reviews = [
  { naam: 'Kevin M.', tekst: 'Super vriendelijke mensen en de kwaliteit van de ambacht ligt heel hoog! Heb hier volledig een verlovingsring laten maken naar eigen wensen en laatst een eigen ring laten vermaken, zeer zeer tevreden over!' },
  { naam: 'V. M.', tekst: 'We zijn erg blij met onze prachtige ringen en armband er is goed naar ons gevoel geluisterd en meegedacht, ze gaan voor echt vakmanschap met hart en ziel.' },
  { naam: 'Naomi v. d. B.', tekst: 'Ze hebben voor mij een enorme service verleent om toch te kijken of mijn trouwring zo gemaakt kon worden dat hij weer draagbaar was.' },
  { naam: 'Manon', tekst: 'Goede juwelier met eerlijk advies en vriendelijk personeel.' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Anke, ik wil graag een afspraak maken bij IPPY.');
