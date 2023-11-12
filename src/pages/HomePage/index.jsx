import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Illustration } from '../../components/Illustration';

export const HomePage = () => {
  /* Initial states for description and buttons - not displaying when the page is loaded */
  const [showDescription, setShowDescription] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    /* Timer for changing description state */
    setTimeout(() => {
      setShowDescription(true);
    }, 1500);

    /* Timer for changing buttons state */
    setTimeout(() => {
      setShowButtons(true);
    }, 5500);
  }, []);

  return (
    <div className="main">
      <Illustration showDescription={showDescription} />

      {/* When the timer ends, following description is displayed */}
      {showDescription && (
        <p className="description">
          online nástroj, který pomáhá rodičům a pečujícím osobám připravit se
          na rozhovor s dětmi o intimitě a respektování osobních hranic
        </p>
      )}

      {/* When the timer ends, following buttons are displayed */}
      {showButtons && (
        <div className="buttons">
          <Link to="/project">
            <button className="button">Chci vědět víc</button>
          </Link>
          <Link to="/author">
            <button className="button">Čí to byl nápad</button>
          </Link>
        </div>
      )}
    </div>
  );
};
