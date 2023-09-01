import React from 'react';
import './Main.css';
import Card from './Card'; // Ajusta la ruta según donde esté tu componente Card
import annoncesData from './annonces.json';
import mainImage from './Image source 1.svg';


function Main() {
    const cards = annoncesData.map(annonce => (
        <Card 
            key={annonce.id} 
            cover={annonce.cover} 
            title={annonce.title} 
            linkTo={`/annonce/${annonce.id}`}
        />
    ));

    return (
        <div className="main">
            <div className="main-image-container">
                <img src={mainImage} alt="Descripción de la imagen" className="main-image" />
                <div className="main-text">
                    Chez vous, partout et ailleurs
                </div>
            </div>
            <div className="card-container">
                {cards}
            </div>
        </div>
    );
}

export default Main;
