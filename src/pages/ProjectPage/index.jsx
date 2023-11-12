import { Buttons } from '../../components/Buttons';
import { HomeIcon } from '../../components/HomeIcon';

export const ProjectPage = () => {
  return (
    <div className="main">
      <HomeIcon />
      <h1>Jak ti to jen říct?</h1>
      <p className="description">
        Co je to za projekt, kdy a proč vzniknul, proč je důležité učit děti
        konsentu, kdy a jak začít, proč to může být pro rodiče složité a proč je
        ten projekt dobrý.
      </p>
      <Buttons value1="Chci vědět víc" value2="Čí to byl nápad" />
    </div>
  );
};
