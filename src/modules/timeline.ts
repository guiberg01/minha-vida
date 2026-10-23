import type { Moment } from "../config";

export function mountTimeline(container: HTMLElement, moments: Moment[]): void {
  container.innerHTML = [...moments]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map(
      ({ date, title, text }) => `
      <li class="timeline__item">
        <time class="timeline__date" datetime="${date}">
          ${date}
        </time>
        <h3 class="timeline__title">${title}</h3>
        <p class="timeline__text">${text}</p>
      </li>`,
    )
    .join("");
}
