// Openingstijden van Patisserie by Barbara (Google-profiel), gedeeld door de status en het bestelformulier.
// ma t/m do 09.00-16.00, vr 09.00-16.30, za 09.30-15.00, zo 10.00-15.00. Tijden in minuten na middernacht.
export const UREN: Record<number, [number, number]> = {
  0: [600, 900], 1: [540, 960], 2: [540, 960], 3: [540, 960], 4: [540, 960], 5: [540, 990], 6: [570, 900],
};
export const DAGEN = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
export const MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
export const hhmm = (m: number) => `${String(Math.floor(m / 60)).padStart(2, '0')}.${String(m % 60).padStart(2, '0')}`;

export function nuInAmsterdam() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  const ymd = `${p.year}-${p.month}-${p.day}`;
  return { ymd, min: Number(p.hour) * 60 + Number(p.minute) };
}
export function dag(ymd: string, plus = 0) {
  const [y, m, d] = ymd.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + plus));
  return { ymd: dt.toISOString().slice(0, 10), wd: dt.getUTCDay(), d: dt.getUTCDate(), m: dt.getUTCMonth() };
}
