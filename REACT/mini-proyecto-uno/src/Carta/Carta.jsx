import React from 'react'
import "./Carta.css"
export const Carta = ({name,image}) => {
  return (
    <figure >
  <img src={image} alt={name}/>
  <article>
    <h3>{name}</h3>
  </article>
</figure>
  )
}

