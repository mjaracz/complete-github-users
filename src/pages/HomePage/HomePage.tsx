import React from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div data-testid="home" className="home">
      <header data-testid="home__header" className="home__header">
        <img
          data-testid="header__logo"
          src={logo}
          className="header__logo"
          alt="logo"
        />
        <Link
          data-testid="header__link"
          className="header__link"
          to="/searching"
        >
          Go to searching page to explore github users.
        </Link>
      </header>
    </div>
  );
};
