import React from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="home">
      <header className="home__header">
        <img src={logo} className="header__logo" alt="logo" />
        <Link className="header__link" target="_blank" to="/searching">
          Go to searching page to explore github users and repos
        </Link>
      </header>
    </div>
  );
};
