import { Link } from 'react-router-dom';
import imgURL from '../../img/explaining-consent.png';
import iconURL from '../../img/home-icon.svg';

export const ProjectPage = () => {
  return (
    <div className="main">
      <Link to="/">
        <img src={iconURL} alt="Domů" className="home-icon" />
      </Link>
      <img
        className="image-ai"
        src={imgURL}
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
          Obrázek byl vytvořen pomocí umělé inteligence Midjourney pod promptem
          "children book illustration of a nervous parent talking to a child
          about consent".
        </p>
      </div>
      <div className="buttons">
        <Link to="/author">
          <button className="button">O autorce</button>
        </Link>
      </div>
    </div>
  );
};
