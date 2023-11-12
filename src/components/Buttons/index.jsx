import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Buttons = ({ value1, value2 }) => {
  return (
    <div className="buttons">
      <Link to="/project">
        <button className="button">{value1}</button>
      </Link>
      <Link to="/author">
        <button className="button">{value2}</button>
      </Link>
    </div>
  );
};
