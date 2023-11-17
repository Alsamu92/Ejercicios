import { getAll } from "../../../services/personajes.service";
import {  CardDetail } from "../../components";







export const  Galeria=()=> {
const pokemon=getAll()


 

  return (
  <div>
   {pokemon.map((poke)=>(
    <CardDetail image={poke?.sprites.other.dream_world.front_default}  name={poke?.name} key={poke.id} id={poke.id}/>
   ))} 
  

  </div>)
  
  }




