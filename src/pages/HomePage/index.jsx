import './style.css';
import React, { useState, useEffect } from 'react';
import { Illustration } from '../../components/Illustration';
import { Description } from '../../components/Description';
import { Buttons } from '../../components/Buttons';

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
        <Buttons value1="Chci vědět víc" value2="Čí to byl nápad" />
      ) : null}
    </div>
  );
};
