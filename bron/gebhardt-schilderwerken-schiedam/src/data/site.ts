// Feiten: eigen website gebhardt.uw-vakschilder.nl (home, over ons, projecten, adres, contact; bekeken 3 oktober 2026)
// en Google-bedrijfsprofiel "Gebhardt Schilderwerken Schiedam" (5,0 uit 3 reviews, 502 foto's, laatste bericht
// van de eigenaar 18 sep 2026). Zie bron/. Eigenaar Leonard Gebhardt, administratie Judith van de Waardenburg.
export const site = {
  naam: 'Gebhardt Schilderwerken',
  sub: 'Vastgoedonderhoud Schiedam',
  eigenaar: 'Leonard Gebhardt',
  straat: 'Boterstraat 42D',
  postcode: '3111 NC',
  plaats: 'Schiedam',
  tel: '06 24 50 98 73',
  telHref: 'tel:+31624509873',
  wa: 'https://wa.me/31624509873',
  mail: 'gebhardtschilderwerken@gmail.com',
  mail2: 'gebhardt-schilderwerken@kabelfoon.nl',
  kvk: '24373435',
  sinds: 2005,
  maps: 'https://www.google.com/maps/search/?api=1&query=Gebhardt+Schilderwerken+Boterstraat+42D+Schiedam',
  reviews: 'https://www.google.com/maps/search/?api=1&query=Gebhardt+Schilderwerken+Schiedam',
  google: { score: '5,0', aantal: 3 },
  themeColor: '#10162a',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Openingstijden zoals op Google (kantoor). Overige dagen: op afspraak.
export const tijden = [
  { dag: 1, naam: 'Maandag', open: '', dicht: '' },
  { dag: 2, naam: 'Dinsdag', open: '', dicht: '' },
  { dag: 3, naam: 'Woensdag', open: '09.00', dicht: '16.00' },
  { dag: 4, naam: 'Donderdag', open: '', dicht: '' },
  { dag: 5, naam: 'Vrijdag', open: '08.00', dicht: '16.00' },
  { dag: 6, naam: 'Zaterdag', open: '', dicht: '' },
  { dag: 0, naam: 'Zondag', open: '', dicht: '' },
];

// "Wij verzorgen" op hun Over ons-pagina, plus binnen/buiten.
export const diensten = ['Buitenschilderwerk', 'Binnenschilderwerk', 'Wandafwerking', 'Kleuradvies', 'Houtrotherstel', 'Betonrenovatie', 'Coatings', 'Impregneren', 'Kitwerk'];

// "Omgeving van ..." op hun Over ons-pagina.
export const werkgebied = ['Schiedam', 'Rotterdam', 'Vlaardingen', 'Spijkenisse', 'Hellevoetsluis', 'Wateringen', 'Den Haag'];

// Letterlijk van Google (stand 3 oktober 2026). De derde review heeft alleen sterren.
export const reviews = [
  { naam: 'Rosanne D.', tekst: 'Goede vakman ,levert kwaliteit.', labels: ['Stiptheid', 'Kwaliteit'] },
  { naam: 'Ashley V.', tekst: 'Echt een vakman levert goed schilderwerk', labels: [] as string[] },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waOfferte = waMet('Goedendag, ik wil graag een vrijblijvende offerte voor schilderwerk.');
