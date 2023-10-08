import "./Gallery.css"

const template=()=>`
<div #galeria><h1></h1></div>
`
const allPokemon=[]
const getData =async()=>{
    
    for(let i=1;i<151;i++){
const data =await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
const jsonData=await data.json()
allPokemon.push(jsonData)

    }
   
    const allPokemonMap=allPokemon.map((pokemon)=>({
        name:pokemon.name,
        image:pokemon.sprites.other.dream_world.front_default,
    }))
    console.log(allPokemonMap)
       
    }
      
 
 
 
 
export const printTemplateGallery=()=>{
    document.querySelector("main").innerHTML=template();
  getData()
}