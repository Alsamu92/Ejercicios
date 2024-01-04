import React from 'react'
import"./CardDistrito.css"
export const CardDistrito = ({name,src,region,handleMostrarCard}) => {
  return (
    <div className="tarjeta districard">
      
    <img className="imagen" src={src} alt={name}></img>
    <div className="info">
    <button className='cierre' onClick={() => handleMostrarCard()}><span className="material-symbols-outlined">
cancel
</span></button>
      <h2>{name}</h2>
      <div className="campo"><strong>Region:</strong> {region}</div>
     
    </div>
  </div>
  )
}
