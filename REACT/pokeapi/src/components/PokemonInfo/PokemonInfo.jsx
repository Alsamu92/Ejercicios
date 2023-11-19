import React from 'react'
import"./PokemonInfo.css"
export const PokemonInfo = ({name,tipo,id}) => {
   
  return (
    <article className='info'>
        <h3>{name}</h3>
        <p>{tipo}</p>
      
    </article>
  )
}
