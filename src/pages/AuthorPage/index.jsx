import { Button } from '../../components/Button';
import { HomeIcon } from '../../components/HomeIcon';
import { Link } from 'react-router-dom';
import imgURL from '../../img/Tynusa-Midjourney.png';

export const AuthorPage = () => {
  return (
    <div className="main">
      <HomeIcon />
      <img className="image-ai" src={imgURL} alt="Kristýna podle Midjourney" />
      <div className="introduction">
        <h1>Kristýna Tlapáková</h1>
        <p>
          Žila byla jedna právnička Kristýna, která si konečně přiznala, že s
          oborem šlápla vedle. A tak se rozhodla pro Digitální akademii: Web od
          Czechitas. Ale tato pohádka ještě nekončí. Kristýna se totiž obává, že
          dříve, než zazvoní zvonec, tak jí dřív zazvoní hrana.
        </p>
        <p>
          Na obrázku je Kristýna v pojetí umělé inteligence Midjourney, aneb
          "children book illustration of a woman trying to learn how to code,
          happy and desperate at the same time".
        </p>
      </div>
      <div className="buttons">
        <Link to="/project">
          <Button className="button" value="O projektu" />
        </Link>
      </div>
    </div>
  );
};
