import React from 'react';
import './Footer.css';
import logoWhite from './LOGO white.svg'; // Importa el logo

function Footer() {
  return (
    <div className="footer">
      <img src={logoWhite} alt="Logo Kasa" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;