import React, { useEffect, useState } from 'react'
import { BotonesTipo } from '../Components/BotonesTipo'


export const Nueva = () => {
    const[datos,setDatos]=useState([])
    const[tiposS,setTiposS]=useState([])
    const[valueInput,setValueInput]=useState("")
    const[filt,setFilt]=useState("")
  
const getPokemon=async()=>{
    const allPokemon=[]
    for(let i=1;i<12;i++){
         const data=await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
         const dataJson=await data.json()
allPokemon.push(dataJson)
    }
   setDatos(allPokemon)
}

const getTipos=()=>{
    const types=[]
  datos?.map((pokemon)=>(
    !types.includes(pokemon?.types[0].type?.name) && types.push(pokemon?.types[0].type?.name)
))
setTiposS(types)
}



useEffect(()=>{
    getPokemon()
getTipos()
},[])
useEffect(()=>{
   
getTipos()
},[datos])
const handleTipos=(tip)=>{
  const filt=[]
  datos.map((pokemon)=>(
    pokemon?.types[0].type?.name.includes(tip) &&
    filt.push(pokemon)
  ))
  setFilt(filt)
  setValueInput("")
}

  return (
  <>
  <p>buscador doble, por tipo o por nombre con actualización a tiempo real y botones generados dinámicamente 
  </p>
  <div>
    <button onClick={()=>setFilt(datos)}>All</button>
    <BotonesTipo  items={tiposS} onButtonClick={handleTipos} />
  </div>
   
  <input value={valueInput} onChange={(e)=>setValueInput(e.target.value)}></input>

  {datos && valueInput==""? filt? filt?.map((pkm)=>(
    pkm.name?.includes(valueInput) &&<p >{pkm?.name}</p> 
  )): datos?.map((pok)=>(
<p >{pok.name}</p>
  )):datos?.map((pkm)=>(
    pkm.name?.includes(valueInput) &&<p >{pkm?.name}</p> 
  ))}
   
   </>
  )
  
}
