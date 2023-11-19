import { useNavigate } from "react-router-dom";
import { getAll } from "../../../services/personajes.service";
import {  CardDetail } from "../../components";

import"./Galeria.css"
import { useRef } from "react";
import { useState } from "react";
import { BotonAtras } from "../../components/BotonAtras/BotonAtras";






export const  Galeria=()=> {
const pokemon=getAll()
const [valorInput, setValorInput] = useState('');
const navigate = useNavigate()
  const handleInputChange = (event) => {
    // Actualiza el estado con el valor del input
    setValorInput(event.target.value);
  };

  const handleClick = () => {
    const pokemonBuscados = pokemon.filter(poke => poke.name.toLowerCase() === valorInput.toLowerCase())
    if (pokemonBuscados.length > 0) {
      const elNumero = pokemonBuscados[0].id;
      navigate(`/personaje/${elNumero}`);
    } else {
      setValorInput("No encontrado");
      // O podrías mostrar un mensaje en la interfaz de usuario
    }
  }

  return (
    <div id="pokedex">
  <div id="contenedor">
   {pokemon.map((poke)=>(
    <CardDetail image={poke?.sprites.front_default}  name={poke?.name} key={poke.id} id={poke.id}/>
   ))} 
 

  </div>
 
  <button className="buscar" onClick={handleClick}></button>
  <input type="text" placeholder="Pikachu|"value={valorInput} onChange={handleInputChange} />
  </div>)
  
  }







