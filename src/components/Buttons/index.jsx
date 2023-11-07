import React from 'react';
import './style.css';

export const Buttons = ({ value1, value2 }) => {
  return (
    <div className="buttons">
      <a href="">
        <button className="button">{value1}</button>
      </a>
      <a href="">
        <button className="button">{value2}</button>
      </a>
    </div>
  );
};
