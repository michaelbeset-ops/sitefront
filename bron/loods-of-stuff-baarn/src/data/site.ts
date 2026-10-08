// Feiten (bekeken 8 oktober 2026), ruwe bronnen in ../../bron (BRONNEN.txt, instagram/captions.txt):
// - Google-profiel "Loods of Stuff", antiekwinkel: 5,0 uit 7 reviews, Oud Eemnesserweg 5N, 3741 MP Baarn, 06 54368565,
//   zaterdag 10:00 tot 17:00, pinpassen en contactloos betalen. Geen website.
// - Instagram @loodsofstuff (bio): "Een loods vol vintage, antiek, design, brocante en meer. Wekelijks nieuwe items.
//   Bedrijvenpark Koot Baarn. Zaterdag 10-17 uur en op afspraak."
// - Facebook: zelfde tijden, info@loodsofstuff.nl.
export const site = {
  naam: 'Loods of Stuff',
  plaats: 'Baarn',
  adres: 'Oud Eemnesserweg 5N',
  postcode: '3741 MP Baarn',
  tel: '06 54 36 85 65',
  telHref: 'tel:+31654368565',
  wa: 'https://wa.me/31654368565',
  mail: 'info@loodsofstuff.nl',
  insta: 'https://www.instagram.com/loodsofstuff/',
  fb: 'https://www.facebook.com/p/Loods-of-Stuff-100067915819433/',
  route: 'https://www.google.com/maps/dir/?api=1&destination=Loods+of+Stuff,+Oud+Eemnesserweg+5N,+3741+MP+Baarn',
  google: { score: '5,0', aantal: 7, url: 'https://www.google.com/maps/search/?api=1&query=Loods+of+Stuff+Oud+Eemnesserweg+5N+Baarn' },
  themeColor: '#161615',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};

// Letterlijk van hun eigen letterbord in de loods.
export const soorten = ['Brocante', 'Antiek', 'Retro', 'Vintage', 'Design'];

// Letterlijk van Google (5 sterren, stand 8 oktober 2026), ingekort met "…".
export const reviews = [
  { naam: 'Emi S.', tekst: 'Nou wat een leuke zaak, je moet 3 rondjes doen om alles te zien. Er liggen overal grappige briefjes over de route waardoor je je totaal niet bezwaard voelt om lang te struinen. Vriendelijke eigenaar en mooie, unieke spullen die ook nog wel betaalbaar zijn …' },
  { naam: 'Imre v. W.', tekst: 'Super leuke zaak! Vandaag voor het eerst geweest en blij verrast! Heel veel leuke spullen en erg goeie prijzen. En een sympathieke eigenaar die echt de tijd neemt.' },
  { naam: 'MrEuropaard', tekst: 'Geweldige winkel met mooi aanbod en geweldig leuk volk. Echt een aanrader …' },
];

export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const waMet = (tekst: string) => `${site.wa}?text=${encodeURIComponent(tekst)}`;
export const waHoi = waMet('Hallo Loods of Stuff, ik heb een vraag.');
