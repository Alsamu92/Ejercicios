import React, { useState } from 'react'
import"./Titanes.css"
import { traerTitanes } from '../../services/personajes.service'
import { CardTitan } from '../../components'
export const Titanes = () => {

    const titanes=traerTitanes()
  
const [mostrarCard, setMostrarCard] = useState(false);
const [titan, setTitan] = useState(null);

  const handleMostrarCard = (num) => {
    const titan=titanes[num]
    setTitan(titan);
    setMostrarCard(!mostrarCard);}
  return (<> 
  <div id="fondo-titanes">
  {mostrarCard && <CardTitan name={titan?.name}  src={titan?.img.replace(/\.png.*$/, '.png')}  owner={titan?.current_inheritor} handleMostrarCard={handleMostrarCard} id={titan?.id} />}
 {  !mostrarCard &&
     <div id="base-titanes">
    
        <button onClick={()=>handleMostrarCard(0)} className='titan ataque'></button>
        <button  onClick={()=>handleMostrarCard(4)} className='titan acorazado'></button>
        <button onClick={()=>handleMostrarCard(3)} className='titan colosal'></button>
        <button onClick={()=>handleMostrarCard(5)} className='titan hembra'></button>
        <button onClick={()=>handleMostrarCard(1)} className='titan fundador'></button>
        <button onClick={()=>handleMostrarCard(2)} className='titan martillo'></button>
        <button  onClick={()=>handleMostrarCard(6)} className='titan bestia'></button>
        <button onClick={()=>handleMostrarCard(8)} className='titan carga'></button>
        <button onClick={()=>handleMostrarCard(7)} className='titan mandibulas'></button>
     </div>}
  </div>
 
  </>
   
  )
}
