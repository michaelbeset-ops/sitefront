// Feiten van trimsalon-carpediem.nl (Home, Wie ben ik, Behandeling, Mededelingen, Contact) en het Google-profiel
// (4,9 uit 5, 17 reviews). Prijzen, openingstijden en KvK staan nergens: die zijn als AANLEVEREN gemarkeerd.
export const site = {
  naam: 'Hondentrimsalon Carpe Diem',
  kort: 'Carpe Diem',
  eigenaar: 'Sonja Verbeek',
  straat: 'Händelstraat 1',
  postcode: '3335 WB',
  plaats: 'Zwijndrecht',
  tel: '06 42 73 70 01',
  telHref: 'tel:+31642737001',
  whatsapp: 'https://wa.me/31642737001',
  mail: 'info@trimsalon-carpediem.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Hondentrimsalon+Carpe+Diem+H%C3%A4ndelstraat+1+Zwijndrecht',
  google: { score: '4,9', aantal: 17 },
  themeColor: '#17605b',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Alleen de namen van de oude pagina "Behandeling"; geen uitleg of prijzen verzonnen.
export const behandelingen = ['Plukken', 'Ontwollen', 'Knippen', 'Scheren', 'Puppybehandeling'];

// Pagina "Mededelingen", herschreven naar korte punten.
export const tips = [
  { kop: 'Laat uw hond goed uit', tekst: 'De behandeling duurt enige uren. Dan is het vervelend als uw hond zijn behoefte zo lang moet ophouden.' },
  { kop: 'Niet met een volle maag', tekst: 'Breng uw hond nooit vlak na het eten.' },
  { kop: 'Zo droog mogelijk', tekst: 'Een natte vacht is niet te behandelen.' },
  { kop: 'Zelf in bad? Overleg even', tekst: 'Veel vachten zijn moeilijk te behandelen na een wasbeurt.' },
  { kop: 'Meld bijzonderheden', tekst: 'Een medische afwijking, allergie, wondjes, of als uw hond loops is: ik hoor het graag vooraf.' },
  { kop: 'Vlovrij brengen', tekst: 'Heeft uw hond toch vlooien, dan kan ik hem daarvoor behandelen, maar daar komen extra kosten bij.' },
  { kop: 'Kort afscheid', tekst: 'Een lang afscheid maakt uw hond alleen maar onzeker. Hij is in goede handen.' },
  { kop: 'Op tijd komen', tekst: 'Breng uw hond op tijd naar de afspraak.' },
  { kop: 'Verhinderd? Binnen 24 uur laten weten', tekst: 'Bel, mail of sms om misverstanden te voorkomen. Anders wordt de afspraak in rekening gebracht.' },
];
