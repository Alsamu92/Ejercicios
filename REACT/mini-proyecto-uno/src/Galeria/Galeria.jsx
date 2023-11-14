import React from 'react'
import { datosApi } from '../data/Datos.Api'
import { Carta } from '../Carta/Carta'
import"./Galeria.css"

export const Galeria = () => {
    const data=datosApi
  return (
    <section>
       {data.results.map((carta)=>(
carta.status!="Dead"&& <Carta image={carta.image} name={carta.name} origin={carta.origin.name==="unknown"?"":carta.origin.name} key={carta.id} />
       ))} 
    </section>
  )
}

