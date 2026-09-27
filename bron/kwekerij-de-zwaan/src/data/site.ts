// Feiten van kwekerijdezwaan.nl (home, over ons, producten, geraniums, olijf- en palmbomen, aanbiedingen, contact),
// de Facebookpagina-link op die site en het Google-profiel (4,4 uit 5, 22 reviews). Niets verzonnen.
export const site = {
  naam: "Kwekerij 'De Zwaan'",
  kort: 'De Zwaan',
  straat: 'Rijksstraatweg 164b',
  postcode: '2988 BM',
  plaats: 'Ridderkerk',
  wijk: 'Rijsoord',
  tel: '0180 622 820',
  telHref: 'tel:+31180622820',
  mobiel: '06 20 17 20 70',
  mobielHref: 'tel:+31620172070',
  mail: 'kwekerijdezwaan@chello.nl',
  facebook: 'https://www.facebook.com/Kwekerij-de-zwaan-221827241295670/',
  graszoden: 'https://www.graszoden-online.nl/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rijksstraatweg+164b+2988+BM+Ridderkerk',
  google: { score: '4,4', aantal: 22 },
  themeColor: '#2d5a27',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Staffelprijzen geraniums, letterlijk van de site.
export const staffel = [
  { vanaf: 'Per stuk', prijs: '€ 1,25' },
  { vanaf: 'Vanaf 10 stuks', prijs: '€ 1,00' },
  { vanaf: 'Vanaf 75 stuks', prijs: '€ 0,95' },
  { vanaf: 'Vanaf 350 stuks', prijs: '€ 0,90' },
  { vanaf: 'Vanaf 1000 stuks', prijs: '€ 0,85' },
];

export const assortiment = [
  { naam: 'Violen', tekst: 'Samen met de geraniums waar de kwekerij voor staat.' },
  { naam: 'Geraniums', tekst: 'Stekgeraniums uit eigen kas, ook bonte.' },
  { naam: 'Perkplanten', tekst: 'Perkgoed, balkon- en terrasplanten: de kern van de teelt.' },
  { naam: 'Hang- en kuipplanten', tekst: '' },
  { naam: 'Vaste planten', tekst: '' },
  { naam: 'Kamerplanten', tekst: 'Een gedeelte van het aanbod is voor binnen.' },
  { naam: 'Groenteplanten', tekst: 'Bijvoorbeeld sla, andijvie, bietjes, selderij, peterselie, broccoli, bloemkool en spitskool.' },
  { naam: 'Zaden, pootaardappelen en pootuien', tekst: 'Pootuien in verschillende soorten: rood, Sturon en sjalotten.' },
];

export const plaatsen = ['Ridderkerk', 'Barendrecht', 'Rotterdam', 'Hendrik-Ido-Ambacht', 'Zwijndrecht', 'Rijsoord', 'Heerjansdam'];

export const routes = [
  { van: 'Vanaf de Brienenoordbrug', tekst: 'Neem de afslag Europoort en vervolgens de afslag Barendrecht. Houd daarna de borden Ridderkerk-Rijsoord aan.' },
  { van: 'Vanuit de tunnel De Noord', tekst: 'Kies richting Europoort en houd daarna Barendrecht aan. Neem afrit 20: Barendrecht / Ridderkerk-Rijsoord. Houd vervolgens de borden Ridderkerk-Rijsoord aan.' },
  { van: 'Vanuit de Heinenoordtunnel', tekst: 'Houd de A15 richting Utrecht/Nijmegen aan. Neem afrit 20: Barendrecht / Ridderkerk-Rijsoord. Houd vervolgens de borden Ridderkerk-Rijsoord aan.' },
];
export const laatsteStuk = 'Via de borden Ridderkerk-Rijsoord komt u vanzelf op de Verbindingsweg. Ga bij de rotonde rechtsaf de Voorweg op. Sla aan het eind van de weg linksaf de Rijksstraatweg op. Na 900 meter ziet u de kwekerij aan uw linkerhand.';
