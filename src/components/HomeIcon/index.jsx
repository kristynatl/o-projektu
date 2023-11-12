import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import imgURL from '../../img/HomeIcon.svg';

export const HomeIcon = () => {
  return (
    <Link to="/">
      <img src={imgURL} alt="Domů" className="home-icon" />
    </Link>
  );
};
