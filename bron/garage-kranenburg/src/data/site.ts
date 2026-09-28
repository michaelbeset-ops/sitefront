// Feiten van garagekranenburg.nl (homepage en route.html) en het Google-profiel (4,6 uit 5, 49 reviews).
// Geen 06-nummer bekend: hoofdacties zijn bellen en mailen. KvK-nummer onbekend.
export const site = {
  naam: 'Garage Kranenburg',
  officieel: 'Garagebedrijf Jeroen Kranenburg',
  straat: 'Molendijk 17',
  postcode: '3286 BE',
  plaats: 'Klaaswaal',
  tel: '0186 571 512',
  telHref: 'tel:+31186571512',
  mail: 'info@garagekranenburg.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Garage+Kranenburg+Molendijk+17+Klaaswaal',
  google: { score: '4,6', aantal: 49 },
  open: 'Maandag t/m vrijdag',
  tijden: '8.00 tot 18.00 uur',
  themeColor: '#2f3b2a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Letterlijk van route.html, in stappen gezet.
export const route = [
  'Neem op de A29 afslag Numansdorp (nr 22) en rijd richting Numansdorp.',
  'Na ongeveer 1 km op de rotonde linksaf, de N488 op.',
  'Rechtdoor in Klaaswaal, en dan rechts de dijk af naar de lager gelegen parallelweg.',
  'Na 150 meter is de garage aan de rechterhand.',
];
