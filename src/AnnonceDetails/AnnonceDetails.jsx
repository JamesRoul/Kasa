import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AnnonceDetails.css';
import annoncesData from '../Main/annonces.json';
import Erreur from '../Erreur/Erreur'; // Importa el componente de error
import Collapse from '../collapse/collapse';

function AnnonceDetails() {
  const { id } = useParams();
  const annonce = annoncesData.find(item => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedButton, setSelectedButton] = useState(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % annonce.pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + annonce.pictures.length) % annonce.pictures.length);
  };

  const buttonClickHandler = (buttonIndex) => {
    if (selectedButton === buttonIndex) {
      setSelectedButton(null);
    } else {
      setSelectedButton(buttonIndex);
    }
  };

  if (!annonce) {
    return <Erreur />;
  }

  return (
    <div className="annonce-details">
      <div className="carousel">
        <button className="carousel-button carousel-button-prev" onClick={prevImage}><i className="fas fa-chevron-left"></i></button>
        <img className="carousel-image" src={currentImageIndex === 0 ? annonce.cover : annonce.pictures[currentImageIndex]} alt="Carousel" />
        <button className="carousel-button carousel-button-next" onClick={nextImage}><i className="fas fa-chevron-right"></i></button>
        <div className="indicator">{`${currentImageIndex + 1}/${annonce.pictures.length}`}</div>
      </div>

      <div className='gauchedroiteinfo'>
        <div className="gauche">
          <h2>{annonce.title}</h2>
          <p className="location">{annonce.location}</p>
          <div className="tags">
            {annonce.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="droite">
          <div className='host'>
            <div className="host-name">
              {annonce.host.name.split(' ').map((namePart, index) => (
                <div key={index}>{namePart}</div>
              ))}
            </div>
            <div className="right-column">
              <img src={annonce.host.picture} alt="Host" className="host-picture" />
            </div>
          </div>
          <div className="host-rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={`star ${index < parseInt(annonce.rating) ? 'active' : ''}`}>★</span>
            ))}
          </div>
        </div>
      </div>

      <div className='listas'>
          <Collapse label="Description">
            <div className="description collaps-container">
              <p>{annonce.description}</p>
            </div>
          </Collapse>
          <Collapse label="Equipements">
            <div className="equipements collaps-container">
              <ul>
                {annonce.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </Collapse>
       </div>
    </div>
  );
}

export default AnnonceDetails;