import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/header';
import APropos from './a-propos/a-propos';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import AnnonceDetails from './AnnonceDetails/AnnonceDetails';
import Erreur from './Erreur/Erreur'; // Importa el componente de error

function MyRoutes() {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/annonce/:id" element={<AnnonceDetails />} />
          <Route path="*" element={<Erreur />} /> {/* Ruta para el error 404 */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default MyRoutes;