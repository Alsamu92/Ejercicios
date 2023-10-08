import "./Gallery.css"

const template=()=>`
<div id="galeria"></div>
`
// Función para obtener los datos de los primeros 150 Pokémon
async function obtenerPokemon() {
    const pokemonList = document.getElementById("galeria");

    for (let i = 1; i <= 151; i++) {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const dataJson = await respuesta.json();
        const nombre = dataJson.name;
        const image = dataJson.sprites.front_default;

        // Crear tarjeta individual para el Pokémon
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");

        // Crear elementos para mostrar el nombre e imagen del Pokémon
        const pokemonNombre = document.createElement("h3");
        pokemonNombre.textContent = nombre;

        const imagen = document.createElement("img");
        imagen.src = image;

        // Agregar elementos a la tarjeta
        pokemonCard.appendChild(pokemonNombre);
        pokemonCard.appendChild(imagen);

        // Agregar la tarjeta a la lista
        pokemonList.appendChild(pokemonCard);
    }
}




    
  
      
 
 
 
 
export const printTemplateGallery=()=>{
    document.querySelector("main").innerHTML=template();
    obtenerPokemon();
}