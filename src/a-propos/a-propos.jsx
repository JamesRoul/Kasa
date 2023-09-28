import React from 'react';
import './a-propos.css';
import Collapse from '../collapse/collapse'; // Importa el nuevo componente
import imagen from './Image source 2.svg';

function APropos() {
  return (
    <div className="a-propos-container">
      <div className="image-container">
        <img className='opp' src={imagen} alt="Imagen" />
      </div>
      <div className="button-container">
        <Collapse label='Fiabilité'>
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>
        <Collapse label='Respect'>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plategorme.</p>
        </Collapse>
        <Collapse label='Service'>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plategorme.</p>
        </Collapse>
        <Collapse label='Sécurité'>
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux criteres de sécurité établis par nos services. En laissant une note aussi bien à l hote qu'au locataire, cela permet  à nos équipes de vérifier que les standards sont bien respectées. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes.</p>
        </Collapse>
      </div>
    </div>
  );
}

export default APropos;