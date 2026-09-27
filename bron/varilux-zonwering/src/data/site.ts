// Feiten van variluxzonwering.nl (alle productpagina's) en het Google-profiel (5,0 uit 5, openingstijden).
export const site = {
  naam: 'Varilux Zonwering',
  straat: 'Ambachtsstraat 6',
  postcode: '2969 BX',
  plaats: 'Oud-Alblas',
  tel: '06 53 57 61 78',
  telHref: 'tel:+31653576178',
  mail: 'info@variluxzonwering.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Varilux+Zonwering+Ambachtsstraat+6+Oud-Alblas',
  themeColor: '#0e4a86',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const producten = [
  { naam: 'Zonneschermen', tekst: 'Knikarmschermen, uitvalschermen, markiezen, veranda- en serrezonwering en vrijstaande zonwering. Verkoeling en schaduw, en een verfraaiing van uw woning.' },
  { naam: 'Rolluiken', tekst: 'Besparen op stookkosten in de winter, koel in de zomer, minder straatlawaai en ongewenst bezoek buiten de deur. In tien kleuren, met band, Somfy-motor, tijdklok of zelfs een app.' },
  { naam: 'Screens', tekst: 'Vlakhangend doek dat warmte en schittering tegenhoudt, terwijl u naar buiten blijft kijken. Ook windvast, met een rits in de geleiding.' },
  { naam: 'Terrasoverkappingen', tekst: 'Gepoedercoat aluminium, met een geïntegreerde goot en onzichtbaar weggewerkte afvoer. Langer buiten, ook in voor- en najaar.' },
  { naam: 'Horren', tekst: 'Raamhorren en hordeuren, op maat.' },
];
