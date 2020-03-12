import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import CategoriaProvider from "./context/CategoriaContext";
import RecetasProvider from "./context/RecetasContext";
import ListaRecetas from "./components/ListaRecetas";
import ModalProvider from "./context/ModalContext";

const App = () => {
  return (
    <CategoriaProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriaProvider>
  );
};

export default App;
