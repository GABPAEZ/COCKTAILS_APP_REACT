import React, { useContext, useState } from "react";
import { CategoriaContext } from "../context/CategoriaContext";
import { RecetasContext } from '../context/RecetasContext';
import { v4 as uuidv4 } from "uuid";

const Formulario = () => {
  // lo que el usuario carga lo vamos a tomar del formulario

  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: ""
  });

    const { categorias } = useContext(CategoriaContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  //console.log(categorias);
    
    // funcion para leer los contenidos de los input

    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda, 
            [e.target.name] : e.target.value
        })
    }

    return (
        <form className="col-12" onSubmit={e => {
            e.preventDefault();
            buscarRecetas(busqueda);
            guardarConsultar(true);
        }}
            >
      <fieldset className="text-center">
        <legend>Busca Bebidas por Categorias o Ingredientes</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Busca por Ingredientes"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosReceta}
          >
            <option value="">--Selecciona Categoría--</option>
            {categorias.map(categoria => (
              <option key={uuidv4()} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            className="btn btn-block btn-primary"
            type="submit"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
