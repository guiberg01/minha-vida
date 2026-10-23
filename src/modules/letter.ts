import type { Letter } from "../config";

/** A carta usa <details>: abre com clique ou teclado, sem JavaScript extra. */
export function mountLetter(container: HTMLElement, letter: Letter): void {
  container.innerHTML = `
    <summary class="letter__summary">${letter.summary}</summary>
    <div class="letter__body">
      ${letter.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <p class="letter__signature">${letter.signature}</p>
    </div>`;
}
