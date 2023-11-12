import { Buttons } from '../../components/Buttons';
import { HomeIcon } from '../../components/HomeIcon';

export const AuthorPage = () => {
  return (
    <div className="main">
      <HomeIcon />
      <img
        className="image-ai"
        src="./img/Tynusa-Midjourney.png"
        alt="Kristýna podle Midjourney"
      />
      <div className="introduction">
        <h1>Kristýna Tlapáková</h1>
        <p>
          Žila byla jedna právnička Kristýna, která si konečně přiznala, že s
          oborem šlápla vedle. A tak se rozhodla pro Digitální akademii: Web od
          Czechitas. Ale tato pohádka ještě nekončí. Kristýna se totiž obává, že
          dříve, než zazvoní zvonec, tak jí dřív zazvoní hrana.
        </p>
        <p>
          Na obrázku je Kristýna v pojetí Midjourney, aneb "children book
          illustration of a woman trying to learn how to code, happy and
          desperate at the same time".
        </p>
      </div>
      <Buttons value1="Chci vědět víc" value2="Čí to byl nápad" />
    </div>
  );
};
