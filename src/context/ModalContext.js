import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    // state del provider nos interesa el id del que usiario le hace click

  const [idreceta, guardarIdReceta] = useState(null);
  const [inforeceta, guardarReceta]= useState({})

  // una vez que tenemos la receta llamaos a la Api para busar esa receta

    useEffect(() => {
      const obtenerReceta = async () => {
        if (!idreceta) return;
        
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
        const resultado = await Axios.get(url);
        guardarReceta(resultado.data.drinks[0]);
      }
      obtenerReceta();
    }, [idreceta])


    return (
      <ModalContext.Provider
        value={{ inforeceta, guardarIdReceta, guardarReceta }}
      >
        {props.children}
      </ModalContext.Provider>
    );
}
 
export default ModalProvider;
