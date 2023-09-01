import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ cover, title, linkTo }) {
  return (
    <Link to={linkTo} className="card">
      <img src={cover} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </Link>
  );
}

export default Card;