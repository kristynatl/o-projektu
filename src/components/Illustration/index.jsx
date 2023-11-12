import React, { useState, useEffect } from 'react';
import './style.css';
import imgURL from '../../img/ilustrace.svg';

export const Illustration = ({ showDescription }) => {
  const [illustrationSize, setIllustrationSize] = useState('1.4');

  useEffect(() => {
    if (showDescription) {
      setIllustrationSize('0.8');
    }
  }, [showDescription]);

  return (
    <div className="illustration-container">
      <img
        src={imgURL}
        style={{
          transition: 'transform 2s',
          transform: `scale(${illustrationSize})`,
        }}
      ></img>
    </div>
  );
};
