import React, { useState } from 'react';
import './a-propos.css'; // Asegúrate de que el archivo CSS esté en la misma ubicación

import imagen from './Image source 2.svg'; // Importa la imagen que deseas mostrar

function APropos() {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonClickHandler = (buttonIndex) => {
    if (selectedButton === buttonIndex) {
      setSelectedButton(null);
    } else {
      setSelectedButton(buttonIndex);
    }
  };

  return (
    <div className="a-propos-container">
      <div className="image-container">
        <img className='opp' src={imagen} alt="Imagen" />
      </div>
      <div className="button-container">
        {[0, 1, 2, 3].map((buttonIndex) => (
          <div key={buttonIndex} className="button-wrapper">
            <button
              className={`toggle-button  ${selectedButton === buttonIndex ? 'active' : ''}`}
              onClick={() => buttonClickHandler(buttonIndex)}
            >
              {buttonIndex === 0 && 'Fiabilité'}
              {buttonIndex === 1 && 'Respect'}
              {buttonIndex === 2 && 'Service'}
              {buttonIndex === 3 && 'Sécurité'}
              <div className={`arrow ${selectedButton === buttonIndex ? 'arrow-up' : ''}`}></div>
            </button>
            {selectedButton === buttonIndex && (
              <div className="toggle-content active">
                {buttonIndex === 0 && (
                  <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                )}
                {buttonIndex === 1 && (
                  <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p>
                )}
                {buttonIndex === 2 && (
                  <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p>
                )}
                {buttonIndex === 3 && (
                  <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default APropos;