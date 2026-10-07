// Feiten (bekeken 7 oktober 2026), bronnen in bron/:
// - kooimanmarinegroup.nl: home, contact-2 (adressen/telefoon/e-mail/KvK per bedrijf, kop "Waar kunnen we u mee helpen?",
//   onderwerpen van het formulier), structuur-22 + missie-visie-10 (key figures), geschiedenis-9 (mijlpalen), werfpagina's
//   24/25/26, kooiman-engineering-28, kooiman-scheepselektro-27 (24/7 storingsdienst), kooiman-scheepsinterieurbouw-29,
//   haveninrichtingen-45, scheepsreparatie-onderhoud-33, scheepsnieuwbouw-32, scheepsverbouw-conversies-31, portfolio-44,
//   nieuws (Swalinge 13-10-2022, ISO 9001 13-07-2023, LOI MPV 05-06-2025, kiellegging BNR 230 22-12-2025, Hegemann V 07-05-2026).
// - werkenbijkooiman.nl: home, vacatures (22 vacaturepagina's), kooiman-praktijk-centrum, stage-afstuderen, contact.
// - Google Maps: Lindtsedijk 84 Zwijndrecht, 078 610 0477, ma-vr 07:00-16:00.
// - LinkedIn: post 7-10-2026 "Onverwacht ruimte op de helling bij Kooiman Hoebee" (week 43, 44 en 45).
export const site = {
  naam: 'Kooiman Marine Group',
  straat: 'Lindtsedijk 84',
  postcode: '3336 LE',
  plaats: 'Zwijndrecht',
  tel: '078 610 0477',
  telHref: 'tel:+31786100477',
  mail: 'contactkooiman@kooimanmarinegroup.nl',
  recruitment: 'recruitment@kooimanmarinegroup.nl',
  uren: 'Maandag t/m vrijdag 07.00 tot 16.00 uur',
  linkedin: 'https://www.linkedin.com/company/kooiman-marine-group/',
  youtube: 'https://www.youtube.com/user/KooimanGroep',
  facebook: 'https://www.facebook.com/kooimanmarinegroup/',
  instagram: 'https://www.instagram.com/kooimanmarinegroup/',
  portfolio: 'https://kooimanmarinegroup.nl/portfolio-44.html',
  werkenbij: 'https://werkenbijkooiman.nl/',
  vacatures: 'https://werkenbijkooiman.nl/vacatures/',
  kpc: 'https://werkenbijkooiman.nl/kooiman-praktijk-centrum/',
  stage: 'https://werkenbijkooiman.nl/stage-afstuderen/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Kooiman+Marine+Group+Lindtsedijk+84+Zwijndrecht',
  themeColor: '#071f33',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// De bedrijven van de groep, gegevens letterlijk van /contact-2 en de bedrijfspagina's.
export const bedrijven = {
  gebr: { naam: 'Scheepswerf Gebr. Kooiman', kort: 'Zwijndrecht', adres: 'Lindtsedijk 84, 3336 LE Zwijndrecht', tel: '078 610 0477', telHref: 'tel:+31786100477', mail: 'contactkooiman@kooimanmarinegroup.nl', onderwerp: 'Bericht aan Scheepswerf Gebr. Kooiman', kvk: '23001018', href: 'https://kooimanmarinegroup.nl/scheepswerf-gebr-kooiman-24.html' },
  hoebee: { naam: 'Scheepswerf Kooiman Hoebee', kort: 'Dordrecht', adres: 'Merwedestraat 56, 3313 CS Dordrecht', tel: '078 613 0088', telHref: 'tel:+31786130088', mail: 'contacthoebee@kooimanmarinegroup.nl', onderwerp: 'Bericht aan Scheepswerf Kooiman Hoebee', kvk: '23007001', href: 'https://kooimanmarinegroup.nl/scheepswerf-kooiman-hoebee-25.html' },
  vanos: { naam: 'Scheepswerf Kooiman Van Os', kort: 'Yerseke', adres: 'Dregweg 6, 4401 LD Yerseke', tel: '0113 57 14 47', telHref: 'tel:+31113571447', mail: 'contactvanos@kooimanmarinegroup.nl', onderwerp: 'Bericht aan Scheepswerf Kooiman Van Os', kvk: '22028028', href: 'https://kooimanmarinegroup.nl/scheepswerf-kooiman-van-os-26.html' },
  engineering: { naam: 'Kooiman Engineering', kort: 'Zwijndrecht', adres: 'Lindtsedijk 84, 3336 LE Zwijndrecht', tel: '078 610 0477', telHref: 'tel:+31786100477', mail: 'contactengineering@kooimanmarinegroup.nl', onderwerp: 'Vraag over Engineering', kvk: '23060247', href: 'https://kooimanmarinegroup.nl/kooiman-engineering-28.html' },
  elektro: { naam: 'Kooiman Scheepselektro', kort: 'Zwijndrecht', adres: 'Lindtsedijk 84, 3336 LE Zwijndrecht', tel: '078 651 5150', telHref: 'tel:+31786515150', mail: 'contactkse@kooimanmarinegroup.nl', onderwerp: 'Vraag over Scheepselektro', kvk: '23017671', href: 'https://kooimanmarinegroup.nl/kooiman-scheepselektro-27.html' },
  interieur: { naam: 'Kooiman Scheepsinterieurbouw', kort: 'Dordrecht', adres: 'Merwedestraat 66, 3313 CS Dordrecht', tel: '078 610 7332', telHref: 'tel:+31786107332', mail: 'contactksi@kooimanmarinegroup.nl', onderwerp: 'Vraag over Scheepsinterieurbouw', kvk: '67492428', href: 'https://kooimanmarinegroup.nl/kooiman-scheepsinterieurbouw-29.html' },
  haven: { naam: 'Kooiman Haveninrichtingen', kort: 'Dordrecht', adres: 'Merwedestraat 56, 3313 CS Dordrecht', tel: '078 610 0477', telHref: 'tel:+31786100477', mail: 'contactkooiman@kooimanmarinegroup.nl', onderwerp: 'Vraag over Haveninrichting', kvk: '', href: 'https://kooimanmarinegroup.nl/haveninrichtingen-45.html' },
} as const;
export type BedrijfSleutel = keyof typeof bedrijven;

// Onderwerpen letterlijk uit hun contactformulier.
export const onderwerpen = [
  'Bericht aan Kooiman Marine Group', 'Bericht aan Scheepswerf Gebr. Kooiman', 'Bericht aan Scheepswerf Kooiman Hoebee',
  'Bericht aan Scheepswerf Kooiman Van Os', 'Vraag over Engineering', 'Vraag over Haveninrichting', 'Vraag over Scheepselektro',
  'Vraag over Scheepsinterieurbouw', 'Contact met vertegenwoordiger', 'Anders',
];

// 22 vacatures op werkenbijkooiman.nl (7 okt 2026). Salaris zoals op de vacaturepagina, alleen opmaak gelijkgetrokken.
export const vacatures = [
  { titel: 'Veiligheidskundige Scheepswerf', plaats: 'Zwijndrecht', vak: 'Staffuncties', salaris: '€ 3.918 tot € 5.757', id: '1066018-veiligheidskundige-scheepswerf-zwijndrecht-zuid-holland' },
  { titel: 'Machinist Torenkraan Scheepswerf', plaats: 'Dordrecht', vak: 'Staffuncties', salaris: '€ 3.232 tot € 4.208', id: '1065542-machinist-torenkraan-scheepswerf-dordrecht-zuid-holland' },
  { titel: 'Terreinmedewerker Scheepswerf', plaats: 'Dordrecht', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 2.926 tot € 3.722', id: '1065357-terreinmedewerker-scheepswerf-dordrecht-zuid-holland' },
  { titel: 'Projectleider Scheepsbouw en Scheepsreparatie', plaats: 'Zwijndrecht', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 4.600 tot € 6.500', id: '1064995-projectleider-scheepsbouw-en-scheepsreparatie-zwijndrecht-zuid-holland' },
  { titel: 'Junior Projectleider Scheepsreparatie', plaats: 'Zwijndrecht', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 3.700 tot € 4.500', id: '1064993-junior-projectleider-scheepsreparatie-zwijndrecht-zuid-holland' },
  { titel: 'Voorman Scheepsreparatie Dordrecht', plaats: 'Dordrecht', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 3.510 tot € 4.853', id: '1061051-voorman-scheepsreparatie-dordrecht-dordrecht-zuid-holland' },
  { titel: 'Monteur Scheepswerf Dordrecht', plaats: 'Dordrecht', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 3.033 tot € 4.208', id: '1061050-monteur-scheepswerf-dordrecht-dordrecht-zuid-holand' },
  { titel: 'Elektromonteur Scheepsbouw', plaats: 'Zwijndrecht', vak: 'Scheepselektro', salaris: '€ 3.099 tot € 4.411', id: '1061049-elektromonteur-scheepsbouw-zwijndrecht-zuid-holland' },
  { titel: 'Metaalbewerker Scheepsreparatie Dordrecht', plaats: 'Dordrecht', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 3.033 tot € 4.208', id: '1061048-metaalbewerker-scheepsreparatie-dordrecht-dordrecht-zuid-holland' },
  { titel: 'Interieurbouwer Drechtsteden', plaats: 'Zwijndrecht', vak: 'Scheepsinterieurbouw', salaris: '€ 2.748 tot € 4.208', id: '1061047-interieurbouwer-drechtsteden-zwijndrecht-zuid-holland' },
  { titel: 'Monteur Scheepswerf Zwijndrecht', plaats: 'Zwijndrecht', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 3.033 tot € 4.208', id: '1061046-monteur-scheepswerf-zwijndrecht-zwijndrecht-zuid-holland' },
  { titel: 'Lead Engineer Scheepsbouw', plaats: 'Zwijndrecht', vak: 'Engineering', salaris: '€ 4.833 tot € 7.929', id: '1061045-lead-engineer-scheepsbouw-zwijndrecht-zuid-holland' },
  { titel: 'Project Engineer Installatietechniek', plaats: 'Dordrecht', vak: 'Engineering', salaris: '€ 3.690 tot € 5.757', id: '1060868-project-engineer-installatietechniek-dordrecht-zuid-holland' },
  { titel: 'Begroter Scheepsbouw', plaats: 'Zwijndrecht', vak: 'Engineering', salaris: '€ 5.198 tot € 7.929', id: '1053611-begroter-scheepsbouw-zwijndrecht-zuid-holland' },
  { titel: 'Metaalbewerker Lasser Scheepswerf', plaats: 'Yerseke', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 2.950 tot € 4.125', id: '1051615-metaalbewerker-lasser-scheepswerf-yerseke-zeeland' },
  { titel: 'Voorman Scheepswerf Yerseke', plaats: 'Yerseke', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 3.502 tot € 4.704', id: '1051613-voorman-scheepswerf-yerseke-yerseke-zeeland' },
  { titel: 'Loodgieter Scheepsbouw', plaats: 'Zwijndrecht', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 3.033 tot € 4.208', id: '1046435-loodgieter-scheepsbouw-zwijndrecht-zuid-holland' },
  { titel: 'Hellingmedewerker Scheepswerf', plaats: 'Dordrecht', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 3.033 tot € 4.208', id: '1046434-hellingmedewerker-scheepswerf-dordrecht-zuid-holland' },
  { titel: 'Monteur Scheepswerf Yerseke', plaats: 'Yerseke', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 2.950 tot € 4.125', id: '1046430-monteur-scheepswerf-yerseke-yerseke-zeeland' },
  { titel: 'Onderhoudsmonteur Elektro Scheepswerf', plaats: 'Zwijndrecht', vak: 'Scheepselektro', salaris: '€ 3.099 tot € 4.411', id: '1040028-onderhoudsmonteur-elektro-scheepswerf-zwijndrecht-zuid-holland' },
  { titel: 'HVAC Monteur Zwijndrecht', plaats: 'Zwijndrecht', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 3.033 tot € 4.208', id: '1039991-hvac-monteur-zwijndrecht-zwijndrecht-zuid-holland' },
  { titel: 'Scheepsmetaalbewerker Zwijndrecht', plaats: 'Zwijndrecht', vak: 'Scheepsbouw en Scheepsreparatie', salaris: '€ 3.033 tot € 4.208', id: '1039819-scheepsmetaalbewerker-zwijndrecht-zwijndrecht-zuid-holland' },
].map((v) => ({ ...v, href: `https://werkenbijkooiman.nl/vacature/${v.id}/` }));

// Mijlpalen letterlijk van /geschiedenis-9 (aangevuld met jaartallen uit dezelfde pagina en nieuws).
export const mijlpalen: [string, string][] = [
  ['1815', 'Scheepswerf Hoebee opgericht aan de Lijnbaan in Dordrecht'],
  ['1884', 'Dirk Kooiman neemt scheepswerf Visser aan de Ringdijk in Zwijndrecht over'],
  ['1975', 'Scheepswerf Gebr. Kooiman verhuist naar de Lindtsedijk 84 (Swinhaven)'],
  ['1984', 'Overname Scheepswerf Hoebee te Dordrecht'],
  ['1988', 'Oprichting Kooiman Engineering, het eigen ontwerpburo'],
  ['1995', 'Overname Scheepswerf Van Os Yerseke'],
  ['1999', 'Overname van de activiteiten van Van Eijk Haveninrichtingen'],
  ['2002', 'Overname Technisch Buro Mous (nu Kooiman Scheepselektro)'],
  ['2012', 'Nieuwe dwarshelling in Dordrecht, volledig in eigen huis ontworpen'],
  ['2022', 'Opening Kooiman Praktijk Centrum in Zwijndrecht'],
  ['2023', 'ISO 9001 groepscertificaat (DNV)'],
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const mailto = (aan: string, onderwerp: string, tekst = '') =>
  `mailto:${aan}?subject=${encodeURIComponent(onderwerp)}${tekst ? `&body=${encodeURIComponent(tekst)}` : ''}`;
