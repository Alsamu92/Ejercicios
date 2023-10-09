import "./Gallery.css"

const template=()=>`
<div id="galeria"></div>
`
async function obtenerPokemon() {
    const pokemonList = document.getElementById("galeria");

    for (let i = 1; i <= 151; i++) {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const dataJson = await respuesta.json();
        
        const nombre = dataJson.name;
         


function mayusPrimeraLetra(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}


const pokemonNombreMayus = mayusPrimeraLetra(dataJson.name);

console.log(pokemonNombreMayus); 

        const image = dataJson.sprites.other.dream_world.front_default

        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");

       
        const pokemonNombre = document.createElement("h2");
        pokemonNombre.textContent = pokemonNombreMayus;

        const imagen = document.createElement("img");
        imagen.src = image;

       
        pokemonCard.appendChild(pokemonNombre);
        pokemonCard.appendChild(imagen);

      
        pokemonList.appendChild(pokemonCard);
    }
}



  

 
export const printTemplateGallery=()=>{
    document.querySelector("main").innerHTML=template();
    obtenerPokemon();
    
}
























    
  
      
 
 
 
