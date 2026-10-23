/** Todo o conteúdo do site mora aqui. Edite este arquivo e o resto se ajusta. */

export interface Moment {
  date: string; // formato ISO: AAAA-MM-DD
  title: string;
  text: string;
}

export interface Letter {
  summary: string;
  paragraphs: string[];
  signature: string;
}

export interface Couple {
  partnerOne: string;
  partnerTwo: string;
  /** Início da história, com horário para o contador ser preciso. */
  startDate: string;
  moments: Moment[];
  letter: Letter;
}

export const couple: Couple = {
  partnerOne: "Ana",
  partnerTwo: "Pedro",
  startDate: "2022-02-14T20:00:00",
  moments: [
    {
      date: "2022-02-14",
      title: "O primeiro encontro",
      text: "Chegamos achando que seria um café rápido. Saímos quando o lugar já estava fechando.",
    },
    {
      date: "2022-08-06",
      title: "A primeira viagem",
      text: "Estrada, música baixinha e a certeza de que qualquer lugar fica bom com você.",
    },
    {
      date: "2023-12-24",
      title: "Nosso primeiro Natal juntos",
      text: "Duas famílias, uma mesa cheia e a sensação de que já era a nossa casa.",
    },
  ],
  letter: {
    summary: "Uma carta para você",
    paragraphs: [
      "Eu queria encontrar uma forma de dizer o quanto você importa. Acabei construindo um site, porque algumas coisas merecem um lugar só delas.",
      "Obrigado(a) pelos dias comuns, que são os que mais me fazem feliz.",
    ],
    signature: "Com todo o meu amor",
  },
};
