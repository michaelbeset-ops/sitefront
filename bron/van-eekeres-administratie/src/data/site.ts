// Feiten (bekeken 02-10-2026). De huidige site toont alleen de standaardpagina van de hostingserver; de teksten hieronder komen
// uit hun eigen eerdere site (webarchief, 2018-2019) en de contactpagina van 2024, plus Facebook en LinkedIn (ALLE.md).
// Home: "allround administratiekantoor. Wij behandelen de financiën van het begin tot einde; van administratief en aangiften
// tot probleemsignalering en advies." Platform: "nauw samen met een netwerk van specialisten ... accountants- en
// belastingkantoren, banken, pensioenadviseurs, advocaten, notarissen en verzekeraars." Slogan: "thuis in elke branche".
// Kantoor: "informeel kantoor met een no-nonsense bedrijfsvoering ... korte communicatielijnen, betrouwbaarheid, hard werken,
// goede prijsafspraken en snel handelen". LinkedIn: "allround administratiekantoor voor het MKB: zzp'ers, vof's en kleine bv's;
// onze kracht zit in helder en duidelijk communiceren". Diensten: lijsten Advies en Uitvoering (zie index.astro).
// Contact 2024: Lireweg 102, 2153 PH Nieuw Vennep, +31 (0)252 680 563, info@vaneekeresadministratie.nl, ruim parkeren.
// Reviews: Facebook 5,0 uit 6, Google 5,0 uit 1. Logo: oranje-gele vierkante "ve" met "van eekeres".
export const site = {
  naam: 'Van Eekeres Administratie & Advies',
  straat: 'Lireweg 102',
  postcode: '2153 PH',
  plaats: 'Nieuw-Vennep',
  tel: '0252 680 563',
  telHref: 'tel:+31252680563',
  mail: 'info@vaneekeresadministratie.nl',
  maps: 'https://www.google.com/maps/search/?api=1&query=Van+Eekeres+Administratie+Lireweg+102+Nieuw-Vennep',
  themeColor: '#faaf16',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;
export const vraagMail = `mailto:${site.mail}?subject=${encodeURIComponent('Vraag aan Van Eekeres')}&body=${encodeURIComponent('Goedendag,\n\nIk heb een vraag over:\n\nMijn onderneming (zzp, vof, bv): \nBranche: \nTelefoonnummer: \n\nMet vriendelijke groet,\n')}`;
