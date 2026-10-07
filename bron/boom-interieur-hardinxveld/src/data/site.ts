// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - boominterieurbv.nl home: "Gespecialiseerd in jacht- en scheepsbetimmeringen", ruim 25 jaar ervaring onder de naam Stui jacht- en
//   scheepsbetimmeringen, "100% voortzetting" van Stui, in 2011 overgenomen; sinds enkele jaren ook interieurs voor overheidsgebouwen
//   en (luxe) woningen; "Wij werken volledig volgens de wens van onze klanten"; "geen seriewerk, maar maatwerk".
// - Fotoarchief: "Strak en eigentijds noten interieur", "Jachtinterieur uitgevoert in teak en teakhouten dek", "Ingangspartij moterjacht".
// - Afgeronde projecten: Marriott hotel Amsterdam; Interieurwerk luxe woning Giessenburg; Meubel en diverse timmerwerk MFA de Rijer
//   te Ridderkerk in opdracht van bouwbedrijf De Vries en Verburg. Huidige projecten (foto's 2015): Kantoor ruimte, More Living.
// - Contact eigen site: 06-53805194 (tel-link), info@boominterieurbv.nl. Kaartje eigen site + Google: Nijverheidsstraat 28,
//   3371 XE Hardinxveld-Giessendam (De Peulen), 0184 611 086. Google-profiel niet geclaimd, geen reviews.
export const site = {
  naam: 'Boom Interieur B.V.',
  straat: 'Nijverheidsstraat 28',
  postcode: '3371 XE',
  plaats: 'Hardinxveld-Giessendam',
  vast: '0184 61 10 86',
  vastHref: 'tel:+31184611086',
  mobiel: '06 53 80 51 94',
  mobielHref: 'tel:+31653805194',
  wa: 'https://wa.me/31653805194',
  mail: 'info@boominterieurbv.nl',
  oud: 'https://www.boominterieurbv.nl/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Boom+Interieur+Nijverheidsstraat+28+Hardinxveld-Giessendam',
  themeColor: '#0e1a1c',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (t: string) => `${site.wa}?text=${encodeURIComponent(t)}`;
export const mailMet = (onderwerp: string, t: string) => `mailto:${site.mail}?subject=${encodeURIComponent(onderwerp)}&body=${encodeURIComponent(t)}`;
export const waHoi = waMet('Goedendag, ik heb een vraag aan Boom Interieur over ');
