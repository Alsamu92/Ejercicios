import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../../services/personajes.service";
import { CardDetail } from "../../components";
import { BotonAtras } from "../../components/BotonAtras/BotonAtras";

import "./Galeria.css";

export const Galeria = () => {
  const allPokemon = getAll();
  const navigate = useNavigate();
  const [valorInput, setValorInput] = useState(allPokemon);
  const [pokemonFiltrados, setPokemonFiltrados] = useState(allPokemon);

  useEffect(() => {
    
    // Filtra la lista de Pokémon cuando cambia el valor del input
    const filteredPokemon = allPokemon.filter(
      (poke) => poke.name.toLowerCase().includes(valorInput.toLowerCase())
     
    );
   
    setPokemonFiltrados( filteredPokemon);
    
  }, [valorInput]);
 ;
  


  const handleInputChange = (event) => {
    // Actualiza el estado con el valor del input
    setValorInput(event.target.value);
  };

  const handleClick = () => {
    const pokemonBuscados = allPokemon.filter(
      (poke) => poke.name.toLowerCase() === valorInput.toLowerCase()
    );
    if (pokemonBuscados.length > 0) {
      const elNumero = pokemonBuscados[0].id;
      navigate(`/personaje/${elNumero}`);
    } else {
      setValorInput("No encontrado");
      // O podrías mostrar un mensaje en la interfaz de usuario
    }
  };

  return (
    <div id="pokedex">
      <div id="contenedor">
        { pokemonFiltrados.map((poke) => (
          <CardDetail
            image={poke?.sprites.front_default}
            name={poke?.name}
            key={poke.id}
            id={poke.id}
          />
        ))}
      </div>
      <button onClick={() => navigate(`/tipos`)} className="busqueda-tipos"></button>
      <button className="buscar" onClick={handleInputChange}>Lista</button>
      <input
        type="text"
        placeholder="Pikachu|"
        value={valorInput}
        onChange={handleInputChange}
      />
      <BotonAtras />
    </div>
  );
};