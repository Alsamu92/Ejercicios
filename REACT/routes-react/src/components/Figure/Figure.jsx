import"./Figure.css"
import React from 'react'

 export const Figure = ({name,image}) => {
  return (
    <figure class="carta">
    <img src={image} alt={name}/>
    <article>
      <h3>{name}</h3>
    </article>
  </figure>
  )
}
