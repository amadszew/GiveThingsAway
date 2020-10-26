import React from 'react';
import { Link } from "react-scroll";

const NavItem = ({ name, section }) => {
  return (
    <>
    <Link 
      className="home-nav__link" 
      activeClass="active" 
      to={section} 
      spy={true} 
      smooth={true} 
      duration={500}
      offset={-50}>
        {name}
    </Link>
    </>
  );
}

export default NavItem;
