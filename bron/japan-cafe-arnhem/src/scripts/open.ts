// Openingstijden van het Google-profiel: donderdag t/m maandag 12.00-18.00 uur, dinsdag en woensdag gesloten.
export const OPEN_DAGEN = [4, 5, 6, 0, 1];
export const TOT = 18;
export const DAGEN = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];

export function nuInArnhem() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  const wd = new Date(Date.UTC(+p.year, +p.month - 1, +p.day)).getUTCDay();
  return { wd, min: Number(p.hour) * 60 + Number(p.minute) };
}

/** 'vandaag', 'morgen' of de naam van de eerstvolgende open dag (vandaag telt tot een half uur voor sluiten). */
export function eerstvolgende(): string {
  const nu = nuInArnhem();
  if (OPEN_DAGEN.includes(nu.wd) && nu.min < TOT * 60 - 30) return 'vandaag';
  let n = 1;
  while (!OPEN_DAGEN.includes((nu.wd + n) % 7)) n++;
  return n === 1 ? 'morgen' : DAGEN[(nu.wd + n) % 7];
}
