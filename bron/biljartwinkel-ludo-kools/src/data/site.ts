// Feiten (bekeken 9 oktober 2026), ruwe bronnen in ../../bron:
// - Google-profiel "Biljartwinkel Ludo Kools": Winkel voor biljartbenodigdheden, Plantagelaan 3 Hoogerheide, 06 48374445,
//   geen website, wo 17:00-20:00, za 10:00-17:00, overige dagen gesloten, 4,9 uit 36 reviews (nieuwste 1-3 mnd).
// - Facebook (pagina 100071602470378): intro "De biljartwinkel waar u terecht kunt voor keuen, reparaties, biljartartikelen
//   en persoonlijk advies. Wij staan voor kwaliteit, persoonlijke benadering, goed advies en eerlijke prijzen."
//   Posts: keuen in verschillende prijsklassen, keutassen/koffers, GJ- en Caudron-pomeransen, pomerans plaatsen terwijl u
//   wacht met koffie, krijt/handschoen/biljartballen, kadobon. Nieuwste post 20-12-2025.
// - Visitekaartje (Google-foto): "Reparatie • Keuen • Biljartartikelen • Persoonlijk advies".
// - ZuidWest Update 14-09-2021: Ludo Kools, Nederlands kampioen driebanden (april 2021), winkel in de voormalige garage
//   naast zijn huis (dus woonadres: alleen de plaats tonen), werkplaats met machine achter de winkel.
export const site = {
  naam: 'Biljartwinkel Ludo Kools',
  plaats: 'Hoogerheide',
  tel: '06 48 37 44 45',
  telHref: 'tel:+31648374445',
  wa: 'https://wa.me/31648374445',
  facebook: 'https://www.facebook.com/p/Biljartwinkel-Ludo-Kools-100071602470378/',
  google: 'https://www.google.com/maps/place/Biljartwinkel+Ludo+Kools/data=!4m2!3m1!1s0x47c40d41f2c1b5af:0x7c0c7d176b4e3685',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Biljartwinkel%20Ludo%20Kools%2C%20Hoogerheide',
  score: '4,9',
  aantal: 36,
  themeColor: '#1d2430',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden van Google. 0 = zondag.
export const tijden: Record<number, [string, string] | null> = { 0: null, 1: null, 2: null, 3: ['17:00', '20:00'], 4: null, 5: null, 6: ['10:00', '17:00'] };

// Letterlijk van Google (5 sterren), soms ingekort met "…". Voornaam + initiaal, geen datums.
export const reviews = [
  { naam: 'Rene S.', tekst: 'Leuke winkel met keus genoeg en een duidelijk en eerlijk advies van een ervaren biljarter. Ludo weet waar hij het over heeft en dat maakt de keus eenvoudiger. Top!' },
  { naam: 'Cees S.', tekst: 'Pomerans laten vervangen, goede uitleg en vakkundige vervanging pomerans, gelijk werd het topeind schoongemaakt en in de wax gezet, dit als service.' },
  { naam: 'Piet D.', tekst: 'Gezellige winkel waar je nog goed advies krijgt. En als je binnen komt de koffie meteen klaar staat.' },
  { naam: 'Johannes J.', tekst: 'Prettige locatie vakkundig advies van een man die weet wat een simpele amateur nodig heeft. Eerlijk en duidelijk.' },
  { naam: 'Adrie J.', tekst: 'De plaats voor al uw Biljart materialen. Deskundig en uiterst vriendelijk. Assortiment is zeer uitgebreid en biedt voor ieder wat wils.' },
  { naam: 'Helmut S.', tekst: 'Nieuwe pomerans laten zetten, kon er op wachten met een vers bakkie thee. Mooie zaak van iemand die achter zijn producten staat. Aanrader!!' },
  { naam: 'Annelies V.', tekst: 'Neemt altijd tijd voor een goede tip en goede uitleg' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hoi Ludo, ik heb een vraag over ');
