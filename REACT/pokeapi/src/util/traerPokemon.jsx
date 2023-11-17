import { useFetch } from "../hooks/useFetch";


export const traerPokemon = () => {
    const pokemon = [];
for (let i = 1; i < 100; i++) {
  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${i}`);

    data && pokemon.push(data);
 
  };

  return pokemon
}


