import { useState } from "react";
import { traerTipos } from "../../util/traerTipos";
import"./Tipos.css"
import { getAll } from "../../../services/personajes.service";
import { BotonAtras, CardDetail } from "../../components";
import { useNavigate } from "react-router-dom";

export const Tipos = () => {
  const todosLosPokemon = getAll();
  const tiposPokemon = traerTipos();
  const [elementosMostrados, setElementosMostrados] = useState(todosLosPokemon);
  const [filtro, setFiltro] = useState('');
const navigate=useNavigate()
  const handleChangeFiltro = (tipo) => {
    // Busca todos los que coincidan y setea el estado con ellos
    const elementosFiltrados = todosLosPokemon.filter(
      (elemento) =>{return(elemento?.types[0]?.type?.name === tipo)||(elemento?.types[1]?.type?.name === tipo)} 
    );
    setElementosMostrados(elementosFiltrados);
    // Actualiza el estado de filtro
    setFiltro(tipo);
  };

  return (
   <div id="pokedex">
<div id="contenedor">

      {elementosMostrados.map((elemento, index) => (
        <CardDetail key={elemento.id} name={elemento.name} image={elemento.sprites.front_default} id={elemento.id} />
      ))}
      </div>
      <BotonAtras onClick={() =>navigate(`/galeria/`)}/>
      <div className="filtro-tipos">
        {tiposPokemon.map((tipo, index) => (
        <button className="boton-tipo" key={tipo} onClick={() => handleChangeFiltro(tipo)}>
          {tipo}
        </button>
      ))}
</div>

</div>
  );
};
