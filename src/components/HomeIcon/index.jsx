import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const HomeIcon = () => {
  return (
    <Link to="/">
      <img
        src="../../components/HomeIcon/img/HomeIcon.svg"
        alt="Domů"
        className="home-icon"
      />
    </Link>
  );
};
