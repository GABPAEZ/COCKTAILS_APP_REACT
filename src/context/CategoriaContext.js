import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

// crear el context

export const CategoriaContext = createContext();

// Provider es donde se encuentran las funcines y state

const CategoriaProvider = props => {
  // crear el state del context
  const [categorias, guardarCategoria] = useState([]);

  //llamdo a la Api

  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categorias = await Axios.get(url);
      //console.log(categorias.data.drinks);
      guardarCategoria(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriaContext.Provider
      value={{
        categorias
      }}
    >
      {props.children}
    </CategoriaContext.Provider>
  );
};

export default CategoriaProvider;
