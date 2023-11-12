import { Buttons } from '../../components/Buttons';
import { HomeIcon } from '../../components/HomeIcon';

export const ProjectPage = () => {
  return (
    <div className="main">
      <HomeIcon />
      <img
        className="image-ai"
        src="./img/teaching-consent.png"
        alt="Rodič vysvětlující dítěti konsent podle Midjourney"
      />
      <div className="introduction">
        <h1>Projekt "Jak ti to jen říct?"</h1>
        <p>
          Rodiče a další pečující osoby si dnes již uvědomují, jak je důležité
          osvětlit dětem přiměřeně jejich věku témata související s konsentem a
          intimitou, nicméně často nevědí, jak na to. Bohužel, zdrojů a
          praktických nástrojů, které by jim to usnadnily, je málo.
        </p>
        <p>
          "Jak ti to jen říct?" je interaktivní webová aplikace, která dospělým
          umožní vyzkoušet si nanečisto, jak by takové rozhovory v každodenních
          situacích s dítětem mohly probíhat.
        </p>
        <p>
          Obrázek z produkce umělé inteligence Midjourney vygeneroval "children
          book illustration of a nervous parent talking to a child about
          consent".
        </p>
      </div>
      <Buttons value1="Chci vědět víc" value2="Čí to byl nápad" />
    </div>
  );
};
