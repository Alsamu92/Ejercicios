const pokemonArray = [
  {
      nombre: "Bulbasaur",
      tipo: ["Planta", "Veneno"],
      movimientos: ["Látigo Cepa", "Gruñido", "Rayo Solar"],
      juegosEnLosQueAparece: ["Rojo/Azul", "Oro/Plata", "Esmeralda"],
      altura: 0.7,
      peso: 6.9,
      habilidades: {
          nombre: "Espesura",
          descripcion: "Hace que el oponente tenga menos probabilidad de evadirse de los ataques."
      }
  },
  {
      nombre: "Charmander",
      tipo: ["Fuego"],
      movimientos: ["Ascuas", "Gruñido", "Lanzallamas"],
      juegosEnLosQueAparece: ["Rojo/Azul", "Oro/Plata", "Rubí/Zafiro"],
      altura: 0.6,
      peso: 8.5,
      habilidades: {
          nombre: "Mar llamas",
          descripcion: "Puede prender fuego a su cola y usarla como arma."
      }
  },
  {
      nombre: "Squirtle",
      tipo: ["Agua"],
      movimientos: ["Pistola Agua", "Mordisco", "Hidrobomba"],
      juegosEnLosQueAparece: ["Rojo/Azul", "Oro/Plata", "Diamante/Perla"],
      altura: 0.5,
      peso: 9.0,
      habilidades: {
          nombre: "Torrente",
          descripcion: "Aumenta el poder de los movimientos de tipo Agua en momentos de necesidad."
      }
  },
  {
      nombre: "Pikachu",
      tipo: ["Eléctrico"],
      movimientos: ["Impactrueno", "Rayo", "Trueno"],
      juegosEnLosQueAparece: ["Rojo/Azul", "Amarillo", "Rubí/Zafiro"],
      altura: 0.4,
      peso: 6.0,
      habilidades: {
          nombre: "Electricidad Estática",
          descripcion: "Puede paralizar a los oponentes que lo tocan."
      }
  },
  {
      nombre: "Jigglypuff",
      tipo: ["Normal", "Hada"],
      movimientos: ["Canto", "Dormir", "Ciclón"],
      juegosEnLosQueAparece: ["Rojo/Azul", "Oro/Plata", "X/Y"],
      altura: 0.5,
      peso: 5.5,
      habilidades: {
          nombre: "Voz Deslumbrante",
          descripcion: "Puede cantar una canción que induce al sueño en otros Pokémon."
      }
  },
  {
      nombre: "Machop",
      tipo: ["Lucha"],
      movimientos: ["Karate Chop", "Golpe Karate", "Puño Cometa"],
      juegosEnLosQueAparece: ["Rojo/Azul", "Oro/Plata", "Espada/Escudo"],
      altura: 0.8,
      peso: 19.5,
      habilidades: {
          nombre: "Guts",
          descripcion: "Aumenta la fuerza cuando el estado de Machop es alterado."
      }
  },
  {
      nombre: "Geodude",
      tipo: ["Roca", "Tierra"],
      movimientos: ["Lanzarrocas", "Terremoto", "Autodestrucción"],
      juegosEnLosQueAparece: ["Rojo/Azul", "Oro/Plata", "Sol/Luna"],
      altura: 0.4,
      peso: 20.0,
      habilidades: {
          nombre: "Roca Sólida",
          descripcion: "Aumenta la defensa de Geodude frente a movimientos de tipo Normal."
      }
  },
  {
      nombre: "Pidgey",
      tipo: ["Normal", "Volador"],
      movimientos: ["Gruñido", "Ataque Ala", "Tornado"],
      juegosEnLosQueAparece: ["Rojo/Azul", "Oro/Plata", "Let's Go Pikachu/Eevee"],
      altura: 0.3,
      peso: 1.8,
      habilidades: {
          nombre: "Vista Lince",
          descripcion: "Aumenta la precisión de Pidgey."
      }
  },
  {
      nombre: "Mewtwo",
      tipo: ["Psíquico"],
      movimientos: ["Psíquico", "Rayo Hielo", "Amnesia"],
      juegosEnLosQueAparece: ["Rojo/Azul", "Oro/Plata", "X/Y"],
      altura: 2.0,
      peso: 122.0,
      habilidades: {
          nombre: "Presión",
          descripcion: "Hace que los oponentes usen más energía PP cuando atacan."
      }
  },
  {
      nombre: "Gyarados",
      tipo: ["Agua", "Volador"],
      movimientos: ["Hidrobomba", "Cascada", "Ciclón"],
      juegosEnLosQueAparece: ["Rojo/Azul", "Oro/Plata", "Sol/Luna"],
      altura: 6.5,
      peso: 235.0,
      habilidades: {
          nombre: "Intimidación",
          descripcion: "Amenaza al oponente y reduce su Ataque."
      }
  }
]

const arrayReducido = pokemonArray.map((pokemon)=>{
    return{
        name:pokemon.nombre,
        tipo:pokemon.tipo,
        medidas:[pokemon.peso,pokemon.altura],
        habilidades:pokemon.habilidades,
        movimientos:pokemon.movimientos
    }
})

for(pokemon of arrayReducido){
    if(pokemon.tipo.includes("Volador"))
    console.log(pokemon.habilidades[descripcion])
}

   











