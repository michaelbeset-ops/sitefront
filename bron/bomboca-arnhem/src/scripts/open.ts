// Openingstijden van het Google-profiel: dinsdag t/m zondag 10.00-17.00 uur, maandag gesloten.
export const OPEN_DAGEN = [2, 3, 4, 5, 6, 0];
export const VAN = 10;
export const TOT = 17;
export const DAGEN = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];

/** Weekdag en minuten sinds middernacht in Arnhem, los van de tijdzone van de bezoeker. */
export function nuInArnhem() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  const wd = new Date(Date.UTC(+p.year, +p.month - 1, +p.day)).getUTCDay();
  return { wd, min: Number(p.hour) * 60 + Number(p.minute) };
}

/** 'vandaag' als het nog ruim open is, anders 'morgen' of de naam van de eerstvolgende open dag. */
export function wanneer(): { vandaag: boolean; woord: string } {
  const nu = nuInArnhem();
  if (OPEN_DAGEN.includes(nu.wd) && nu.min < TOT * 60 - 30) return { vandaag: true, woord: 'vandaag' };
  let n = 1;
  while (!OPEN_DAGEN.includes((nu.wd + n) % 7)) n++;
  return { vandaag: false, woord: n === 1 ? 'morgen' : DAGEN[(nu.wd + n) % 7] };
}
