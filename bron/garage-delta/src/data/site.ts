// Feiten van het Google-bedrijfsprofiel (naam, adres, telefoon, 4,8 uit 5 bij 18 reviews; geen website).
// Eigenschappen persoonlijk, snel en eerlijke prijs: samenvatting van wat klanten in die reviews schrijven, geen citaten.
// E-mail, KvK, openingstijden en diensten zijn onbekend en staan als AANLEVEREN op de pagina.
export const site = {
  naam: 'Garage Delta',
  officieel: 'Garage Delta VOF',
  straat: 'Oost Voorgors 1',
  postcode: '3241 KD',
  plaats: 'Middelharnis',
  tel: '0187 482 920',
  telHref: 'tel:+31187482920',
  maps: 'https://www.google.com/maps/search/?api=1&query=Garage+Delta+Oost+Voorgors+1+Middelharnis',
  google: { score: '4,8', aantal: 18 },
  themeColor: '#0e3a53',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const telIcoon = 'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z';
export const eigenschappen = [
  { kop: 'Persoonlijk', tekst: 'Klanten noemen de persoonlijke benadering.' },
  { kop: 'Snel', tekst: 'Snel terecht kunnen en snel geholpen worden.' },
  { kop: 'Eerlijke prijs', tekst: 'Prijzen die klanten schappelijk en normaal noemen.' },
];
