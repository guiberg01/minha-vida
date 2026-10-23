import "./styles/main.css";
import { couple } from "./config";
import { mountCounter } from "./modules/counter";
import { mountLetter } from "./modules/letter";
import { mountTimeline } from "./modules/timeline";
import { qs } from "./utils/dom";

const { partnerOne, partnerTwo, startDate, moments, letter } = couple;

const startLabel = new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(
  new Date(startDate),
);

document.title = `${partnerOne} & ${partnerTwo}`;
qs("#names").innerHTML = `${partnerOne} <span class="hero__amp">&amp;</span> ${partnerTwo}`;
qs("#since").textContent = `Desde ${startLabel}, e contando`;
qs("#footer").textContent = `Feito com carinho por ${partnerOne} e ${partnerTwo}`;

mountCounter(qs("#counter"), startDate);
mountTimeline(qs("#timeline"), moments);
mountLetter(qs("#letter"), letter);
