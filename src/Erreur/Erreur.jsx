import React from 'react';
import { useParams } from 'react-router-dom';
import './Erreur.css'; // Importa el archivo de estilos CSS

function Erreur() {
  // Supongamos que tenemos una lista de IDs válidos
  const validIds = ['1', '2', '3'];

  // Utiliza el hook useParams para obtener el ID de la URL
  const { id } = useParams();

  // Comprueba si el ID es válido
  const isValidId = validIds.includes(id);

  return (
    <div className="erreur-container">
      {isValidId ? (
        // Aquí va el contenido normal para IDs válidos
        <div>
          <h1>{`Página para el ID ${id}`}</h1>
          {/* Otro contenido */}
        </div>
      ) : (
        // Aquí va el mensaje de error para IDs no válidos
        <div>
          <h1 className="error-title">404</h1>
          <p className="error-text">Oups! L'ID que vous demandez n'existe pas.</p>
        </div>
      )}
    </div>
  );
}

export default Erreur;