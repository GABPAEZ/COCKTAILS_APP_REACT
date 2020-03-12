import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
// este context se va a encarfar de buscar las recetas

export const RecetasContext = createContext();

const RecetasProvider = props => {
  const [recetas, guardarRecetas] = useState([]);
  const [busqueda, buscarRecetas] = useState({
    nombre: "",
    categoria: ""
  });
  const [consultar, guardarConsultar] = useState(false);

  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const resultado = await Axios.get(url);
        //console.log(resultado.data.drinks);
        guardarRecetas(resultado.data.drinks);
      };
      obtenerRecetas();
    }
  }, [busqueda]);

  return (
    <RecetasContext.Provider
      value={{ recetas, buscarRecetas, guardarConsultar }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
