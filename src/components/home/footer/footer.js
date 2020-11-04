import React from 'react';

import facebookIcon from '../../../assets/Facebook.png';
import instagramIcon from '../../../assets/Instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__copy">
          <p>Copyright by Coders Lab</p>
        </div>
        <div className="footer__icons">
          <img 
            src={facebookIcon} 
            alt="facebook icon" 
            className="footer__icon" />
          <img 
            src={instagramIcon}
            alt="instagram icon" 
            className="footer__icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
