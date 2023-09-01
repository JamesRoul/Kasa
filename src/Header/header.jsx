import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import './header.css';
import logo from './LOGO.svg';


function Header() {
    return (
      <div className="header">
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
        <nav className="nav">
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">À propos</Link>
        </nav>
      </div>
    );
  }
  
  export default Header;