import React from 'react';

import NavItem from './nav-item/nav-item';

const Nav = () => {
  return (
    <nav className="home-nav">
      <ul className="home-nav__list">
        <li className="home-nav__item">
          <NavItem name={'start'} section='main' />
        </li>
        <li className="home-nav__item">
          <NavItem name={'o co chodzi'} section='fourSteps' />
        </li>
        <li className="home-nav__item">
          <NavItem name={'o nas'} section='aboutUs' />
        </li>
        <li className="home-nav__item">
          <NavItem name={'fundacja i organizacje'} section='whomWeHelp' />
        </li>
        <li className="home-nav__item">
          <NavItem name={'kontakt'} section='contact' />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
