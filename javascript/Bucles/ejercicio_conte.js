 const pokemons=[{
  nombre: "Bulbasaur",
  tipo: "Planta/Veneno",
  evoluciones: ["Ivysaur", "Venusaur"]
}
,
  {
  nombre: "Charmander",
  tipo: "Fuego",
  evoluciones: ["Charmeleon", "Charizard"]
}
,
 {
  nombre: "Squirtle",
  tipo: "Agua",
  evoluciones: ["Wartortle", "Blastoise"]
}]
const soloNombres=pokemons.map(pokemon=>({name:pokemon.nombre}))

console.log(soloNombres)




