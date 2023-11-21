import React from 'react'
import"./Card.css"
export const Card = ({name,edad,estado,ocupacion,lugar,src}) => {
  return (
    <div className="tarjeta">
    <img className="imagen" src={src} alt={name}></img>
    <div className="info">
      <h2>{name}</h2>
      <div className="campo"><strong>Edad:</strong> {edad}</div>
      <div className="campo"><strong>Estado:</strong> {estado}</div>
      <div className="campo"><strong>Lugar de Nacimiento:</strong> {lugar}</div>
      <div className="campo"><strong>Ocupación:</strong> {ocupacion}</div>
    </div>
  </div>
  )
}
