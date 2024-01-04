import React from 'react'

import { Carta } from '../../Carta/Carta'
import"./Galeria.css"
import { useFetch } from '../../hooks/useFetch'

import { useCounter } from '../../hooks/useCounter'
import { Boton } from '../Boton/Boton'
import { Loading } from '../../Loading/Loading'

export const Galeria = () => {
  const{counter,increment,decrement}=useCounter()
    const {data,hasError,isLoading,state}=useFetch(`https://rickandmortyapi.com/api/character?page=${counter}`)

  return (
  <>
 <div className='button-container'>
    {counter >1 ?(
         <Boton event={() => decrement()}>
          Anterior
         </Boton>
        ):<Boton >
      Anterior
       </Boton>}
   <Boton event={() => increment()}>
    Siguiente
   </Boton>
  </div>
   {!isLoading ? 
    <section >
      {data?.results.map((personaje) => (
        <Carta
          key={personaje.id} 
          name={personaje.name}
          image={personaje.image}
        />
      ))}
    </section>:<Loading/>}
 
  </>
 
  )
}

