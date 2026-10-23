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
  partnerOne: "Mariana",
  partnerTwo: "Guilherme",
  startDate: "2024-09-23T20:00:00",
  moments: [
    {
      date: "Setembro de 2024",
      title: "O primeiro encontro",
      text: "Nunca imaginei que nosso primeiro encontro seria da forma que foi kkkkk, mas adorei cada segundo te conhecendo e já queria mais!",
    },
    {
      date: "Decorrer de 2025",
      title: "Se vendo em nossos almoços",
      text: "Ainda fico lembrando de quando a gente conseguia se ver por menos de uma hora por dia, não sei como a gente sobreviveu tanto tempo assim. Mas eu corria pra conseguir ficar mais tempo o possível contigo, os nossos pequenos momentos.",
    },
    {
      date: "Fevereiro de 2026",
      title: "Morando juntos pela primeira vez",
      text: "Quando o meu mundo mudou completamente, e comecei a ter minha vida junto de você. Foi apartir daqui que eu percebi o quão bom era te ver todo dia, dormir com você, passar o tempo com você e entre mil coisas além disso.",
    },
  ],
  letter: {
    summary: "Uma carta para você",
    paragraphs: [
      "Eu queria encontrar uma forma de dizer o quanto você importa pra mim. Mas nunca vou conseguir dizer exatamente com palavras talvez nem com ações. Eu só quero que saiba que você é minha vida agora, tudo que eu quero fazer eu penso em fazer com você ao meu lado, todas as coisas que eu amo eu divido com você, você é minha prioridade e é com quem eu quero estar. Queria sempre poder demonstrar isso naturalmente pra você e não vacilar, mas a gente sabe que nem tudo é perfeito, mas saiba que estou tentando ser perfeito pra você, eu te amo muito mesmo.",
    ],
    signature: "Com todo o meu amor",
  },
};
