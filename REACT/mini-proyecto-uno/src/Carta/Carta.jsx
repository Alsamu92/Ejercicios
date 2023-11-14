import React from 'react'
import "./Carta.css"
export const Carta = ({name,image,origin}) => {
  return (
    <figure class="carta">
  <img src={image} alt={name}/>
  <article>
    <h3>{name}</h3>
    <h4>{origin}</h4>
  </article>
</figure>
  )
}

