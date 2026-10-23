import type { Moment } from "../config";

export function mountTimeline(container: HTMLElement, moments: Moment[]): void {
  // Função auxiliar para converter o texto em um valor numérico comparável
  const getDateWeight = (dateStr: string): number => {
    const lower = dateStr.toLowerCase();
    
    // Extrai o ano (procura por 4 dígitos seguidos)
    const yearMatch = lower.match(/\d{4}/);
    const year = yearMatch ? parseInt(yearMatch[0], 10) : 0;

    // Define o peso do mês/período dentro do ano
    let monthWeight = 0;
    
    if (lower.includes("janeiro")) monthWeight = 1;
    else if (lower.includes("fevereiro")) monthWeight = 2;
    else if (lower.includes("março")) monthWeight = 3;
    else if (lower.includes("abril")) monthWeight = 4;
    else if (lower.includes("maio")) monthWeight = 5;
    else if (lower.includes("junho")) monthWeight = 6;
    else if (lower.includes("julho")) monthWeight = 7;
    else if (lower.includes("agosto")) monthWeight = 8;
    else if (lower.includes("setembro")) monthWeight = 9;
    else if (lower.includes("outubro")) monthWeight = 10;
    else if (lower.includes("novembro")) monthWeight = 11;
    else if (lower.includes("dezembro")) monthWeight = 12;
    else if (lower.includes("decorrer")) monthWeight = 6; // Posiciona no meio do ano (Junho) se for "decorrer"

    // Multiplica o ano por 100 e soma o mês para gerar um índice ordenável (Ex: Set/2024 vira 202409)
    return year * 100 + monthWeight;
  };

  container.innerHTML = [...moments]
    .sort((a, b) => getDateWeight(a.date) - getDateWeight(b.date))
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
