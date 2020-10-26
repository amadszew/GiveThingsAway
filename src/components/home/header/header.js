import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './nav/nav';

const Header = () => {
  return (
    <header className="home-header">
      <div className="home-header__panel">
        <Link className="home-header__panel__link" to="/logowanie">Zaloguj</Link>
        <Link className="home-header__panel__link" to="/rejestracja">Załóż konto</Link>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
