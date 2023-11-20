import React from 'react'
import { traerPersonajes } from '../../services/personajes.service'
import { Card } from '../../components'

export const Mapa = () => {
  const person=traerPersonajes()
  
  
  
  
    return (
    <div className='contenedor-mapa'>
    {person?.map((pers) => (
        <Card key={pers?.id} name={pers.name} edad={pers.age}estado={pers.status} ocupacion={pers.occupation} lugar={pers.birthplace} src={pers?.img?.split('png')[0] + 'png'}>
          
        </Card>
      ))}</div>
  )
}
