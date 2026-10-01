// Openingstijden van het Google-profiel: maandag t/m vrijdag 08:00-18:00, zaterdag en zondag 09:30-18:00.

/** Weekdag (0 = zondag) in Diemen, los van de tijdzone van de bezoeker. */
export function weekdagInDiemen(): number {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return new Date(Date.UTC(+p.year, +p.month - 1, +p.day)).getUTCDay();
}
