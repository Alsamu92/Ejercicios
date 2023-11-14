import React from 'react'
import "./Carta.css"
export const Carta = ({name,image,origin}) => {
  return (
    <figure class="carta">
  <img src={image} alt={name}/>
  <article>
    <h3>{name}</h3>
    <h3>{origin}</h3>
  </article>
</figure>
  )
}

