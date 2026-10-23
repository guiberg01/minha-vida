import { elapsedSince, type Elapsed } from "../utils/time";

const UNITS: ReadonlyArray<{ key: keyof Elapsed; singular: string; plural: string }> = [
  { key: "years", singular: "ano", plural: "anos" },
  { key: "months", singular: "mês", plural: "meses" },
  { key: "days", singular: "dia", plural: "dias" },
  { key: "hours", singular: "hora", plural: "horas" },
  { key: "minutes", singular: "minuto", plural: "minutos" },
  { key: "seconds", singular: "segundo", plural: "segundos" },
];

/** Monta o contador de tempo juntos e o atualiza a cada segundo. */
export function mountCounter(container: HTMLElement, startDate: string): void {
  const start = new Date(startDate);
  if (Number.isNaN(start.getTime())) throw new Error(`Data inválida: ${startDate}`);

  container.innerHTML = UNITS.map(
    ({ key }) => `
      <div class="counter__unit">
        <span class="counter__value" data-value="${key}">0</span>
        <span class="counter__label" data-label="${key}"></span>
      </div>`,
  ).join("");

  const tick = (): void => {
    const elapsed = elapsedSince(start);
    for (const { key, singular, plural } of UNITS) {
      const value = elapsed[key];
      container.querySelector(`[data-value="${key}"]`)!.textContent = String(value);
      container.querySelector(`[data-label="${key}"]`)!.textContent =
        value === 1 ? singular : plural;
    }
  };

  tick();
  window.setInterval(tick, 1000);
}
