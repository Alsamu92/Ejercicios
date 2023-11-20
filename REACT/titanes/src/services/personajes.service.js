import { useFetch } from "../hooks/useFetch";

export const traerPersonajes=()=>{
    const personajes = [];
    for (let i = 1; i < 10; i++) {
      const { data } = useFetch(`https://api.attackontitanapi.com/characters/${i}`);
    
        data && personajes.push(data);
    }   
    return personajes
}





    
   
 

