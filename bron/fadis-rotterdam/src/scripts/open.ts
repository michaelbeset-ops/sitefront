// Openingstijden van het Google-profiel: ma t/m vr 09.30-18.00, za 09.30-16.30, zondag gesloten.
// Index = weekdag (0 = zondag), waarde = [van, tot] in minuten sinds middernacht.
export const TIJDEN: ([number, number] | null)[] = [null, [570, 1080], [570, 1080], [570, 1080], [570, 1080], [570, 1080], [570, 990]];

/** Weekdag en minuten sinds middernacht in Rotterdam, los van de tijdzone van de bezoeker. */
export function nuInRotterdam() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  const wd = new Date(Date.UTC(+p.year, +p.month - 1, +p.day)).getUTCDay();
  return { wd, min: Number(p.hour) * 60 + Number(p.minute) };
}
