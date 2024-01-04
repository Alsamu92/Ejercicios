import React, { useState } from 'react'
import"./MapaCiudad.css"
import { NavLink } from 'react-router-dom'
import { traerLugares, traerPersonajes } from '../../services/personajes.service'
import { CardDistrito } from '../../components'

export const MapaCiudad = () => {

const lugares=traerLugares()

const [mostrarCard, setMostrarCard] = useState(false);
const [distrito, setDistrito] = useState(null);

  const handleMostrarCard = (num) => {
    const distrito=lugares[num]
    setDistrito(distrito);
    setMostrarCard(!mostrarCard);
    console.log(distrito)
  };
  return (
    <>
    
    <div className='ciudad-detalle'>
      <NavLink  className="flecha" to="/">
          <span className="material-symbols-outlined spanflecha" >
arrow_back
</span>
      </NavLink>
      {mostrarCard && <CardDistrito name={distrito?.name}   src={distrito?.img.replace(/\.png.*$/, '.png')}  region={distrito?.territory} handleMostrarCard={handleMostrarCard} />}
      {!mostrarCard &&(<>
      <button onClick={()=>handleMostrarCard(3)}className='circulo-distrito mitras'></button>
      <button onClick={()=>handleMostrarCard(5)}className='circulo-distrito ermich'></button>
      <button onClick={()=>handleMostrarCard(15)}className='circulo-distrito klorva'></button>
      <button onClick={()=>handleMostrarCard(22)}className='circulo-distrito orvud'></button>
      <button onClick={()=>handleMostrarCard(24)}className='circulo-distrito ragako'></button>
      <button onClick={()=>handleMostrarCard(26)}className='circulo-distrito shiganshina'></button>
      <button onClick={()=>handleMostrarCard(28)}className='circulo-distrito stohess'></button>
      <button onClick={()=>handleMostrarCard(29)}className='circulo-distrito trost'></button>
      <button onClick={()=>handleMostrarCard(31)}className='circulo-distrito chapel'></button>
      <button onClick={()=>handleMostrarCard(32)}className='circulo-distrito utgard'></button>
      </>
      )}
    </div>
  
    </>
    
  )
}
