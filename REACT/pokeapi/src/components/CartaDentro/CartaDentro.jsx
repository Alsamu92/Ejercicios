import React from 'react'
import"./CartaDentro.css"
export const CartaDentro = ({name,image}) => {
  return (
    
    <div id="contenedor-dentro">
    <figure className='figure-dentro'>
        <img src={image} alt={name}></img>
   
    </figure>
    
  
    </div>
    
  )
}
