// Feiten uit gearchiveerde versies (Wayback Machine, 2021-2025) van minicampinghethommeltje.nl: home, over ons (NL/DE-versie
// met dezelfde Nederlandse tekst), voorzieningen, omgeving, activiteiten, nieuws, contact, kampeerplaatsen en vakantiewoningen.
// De eigen site geeft nu een foutmelding. Google: 4,7 uit 132 reviews. Prijzen van de oude site (2022/2024) tonen we bewust niet.
export const site = {
  naam: "Minicamping 't Hommeltje",
  kort: "'t Hommeltje",
  eigenaren: 'Chris en Marian Geerse-Arkesteyn',
  straat: 'Breeweg 5',
  postcode: '4371 SB',
  plaats: 'Koudekerke',
  eiland: 'Walcheren, Zeeland',
  tel: '0118 551 691',
  telHref: 'tel:+31118551691',
  mail: 'info@minicampinghethommeltje.nl',
  facebook: 'https://www.facebook.com/Minicampinghethommeltje-385060238201229/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Minicamping+t+Hommeltje+Breeweg+5+Koudekerke',
  google: '4,7',
  reviews: 132,
  themeColor: '#221a12',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
