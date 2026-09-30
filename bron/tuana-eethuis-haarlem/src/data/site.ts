// Feiten uitsluitend uit het Google-bedrijfsprofiel van Tuana Eethuis (content/b17/ALLE.md, 30-09-2026):
// adres, 06-nummer, 4,7 uit 258 reviews, openingstijden en de gerechten die in reviews genoemd worden.
// Geen website, geen menukaart met prijzen bekend: die staan als AANLEVEREN.
export const site = {
  naam: 'Tuana Eethuis',
  straat: 'Schoterweg 28',
  postcode: '2021 HM',
  plaats: 'Haarlem',
  tel: '06 50 22 21 69',
  telHref: 'tel:+31650222169',
  whatsapp: 'https://wa.me/31650222169',
  maps: 'https://www.google.com/maps/search/?api=1&query=Tuana+Eethuis+Schoterweg+28+Haarlem',
  google: { score: '4,7', aantal: 258 },
  themeColor: '#231310',
  voorstel: import.meta.env.PUBLIC_VOORSTEL === '1',
};
export const url = (p = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${p.replace(/^\//, '')}`;

// Gerechten in de volgorde waarin ze het vaakst in de Google-reviews genoemd worden.
export const populair = ['Turkse pizza', 'Broodjes', 'Döner', 'Kapsalon', 'Patat', 'Börek', 'Pide'];

// Keuzes in de WhatsApp-bestelling (uit de opdracht; zonder prijzen).
export const bestelItems = [
  { id: 'pizza', naam: 'Turkse pizza' },
  { id: 'doner', naam: 'Döner' },
  { id: 'kapsalon', naam: 'Kapsalon' },
  { id: 'broodje', naam: 'Broodje' },
  { id: 'borek', naam: 'Börek' },
  { id: 'pide', naam: 'Pide' },
  { id: 'patat', naam: 'Patat' },
];

export const wa = '<svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 shrink-0" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z"/></svg>';
