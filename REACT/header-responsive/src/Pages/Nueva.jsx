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


console.log(filt)
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
   <BotonesTipo  items={tiposS} onButtonClick={handleTipos} />
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
