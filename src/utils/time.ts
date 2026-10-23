export interface Elapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

/** Tempo decorrido em anos, meses e dias de calendário, mais horas, minutos e segundos. */
export function elapsedSince(start: Date, now: Date = new Date()): Elapsed {
  let totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (addMonths(start, totalMonths) > now) totalMonths -= 1;
  totalMonths = Math.max(totalMonths, 0);

  const rest = Math.max(now.getTime() - addMonths(start, totalMonths).getTime(), 0);

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    days: Math.floor(rest / DAY),
    hours: Math.floor((rest % DAY) / HOUR),
    minutes: Math.floor((rest % HOUR) / MINUTE),
    seconds: Math.floor((rest % MINUTE) / SECOND),
  };
}
