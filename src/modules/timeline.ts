import type { Moment } from "../config";

const formatDate = new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" });

export function mountTimeline(container: HTMLElement, moments: Moment[]): void {
  container.innerHTML = [...moments]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map(
      ({ date, title, text }) => `
      <li class="timeline__item">
        <time class="timeline__date" datetime="${date}">
          ${formatDate.format(new Date(`${date}T12:00:00`))}
        </time>
        <h3 class="timeline__title">${title}</h3>
        <p class="timeline__text">${text}</p>
      </li>`,
    )
    .join("");
}
