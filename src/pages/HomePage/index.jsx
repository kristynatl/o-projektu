import './style.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Illustration } from '../../components/Illustration';
import { Description } from '../../components/Description';
import { Button } from '../../components/Button';

export const HomePage = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowDescription(true);
    }, 1500);

    setTimeout(() => {
      setShowButtons(true);
    }, 5500);
  }, []);

  return (
    <div className="main">
      <Illustration showDescription={showDescription} />
      {showDescription ? <Description /> : null}
      {showButtons ? (
        <div className="buttons">
          <Link to="/project">
            <Button className="button" value="Chci vědět víc" />
          </Link>
          <Link to="/author">
            <Button className="button" value="Čí to byl nápad" />
          </Link>
        </div>
      ) : null}
    </div>
  );
};
