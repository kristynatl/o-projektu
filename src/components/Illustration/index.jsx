import { useState, useEffect } from 'react';
import './style.css';
import imgURL from '../../img/illustration.svg';

export const Illustration = ({ showDescription }) => {
  /* Initial state for the illustration size when the page is loaded */
  const [illustrationSize, setIllustrationSize] = useState('1.4');

  /* On the change of the description state to true, illustration will shrink */
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
