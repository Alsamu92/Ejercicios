import { useState } from "react";
import { traerTipos } from "../../util/traerTipos";
import "./Home.css";
import { getAll } from "../../../services/personajes.service";
import { CardDetail } from "../../components";

export const Home = () => {
  const todosLosPokemon = getAll();
  const tiposPokemon = traerTipos();
  const [elementosMostrados, setElementosMostrados] = useState(todosLosPokemon);
  const [filtro, setFiltro] = useState('');

  const handleChangeFiltro = (tipo) => {
    // Busca todos los que coincidan y setea el estado con ellos
    const elementosFiltrados = todosLosPokemon.filter(
      (elemento) => elemento?.types[0]?.type?.name === tipo
    );
    setElementosMostrados(elementosFiltrados);
    // Actualiza el estado de filtro
    setFiltro(tipo);
  };

  return (
    <div className="home">
   
      {tiposPokemon.map((tipo, index) => (
        <button key={tipo} onClick={() => handleChangeFiltro(tipo)}>
          {tipo}
        </button>
      ))}

      {elementosMostrados.map((elemento, index) => (
        <CardDetail key={elemento.id} name={elemento.name} image={elemento.sprites.front_default} id={elemento.id} />
      ))}
    </div>
  );
};