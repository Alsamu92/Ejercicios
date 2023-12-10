import React, { useEffect, useState } from 'react'
import { usePaginacion } from '../hooks/usePaginacion';

export const Cats = () => {
const [pokemon,setPokemon]=useState([])
const{botones,setItems,currentItems,setCurrentPage}=usePaginacion(3)
const[stat,setStat]=useState("")
const[valueInput,setValueInput]=useState("")
const getPokemon=async()=>{
   
    
        const data=await fetch(`https://hp-api.onrender.com/api/characters`) 
        const dataJson=await data.json()
     
    setPokemon(dataJson)
    setCurrentPage(1)
    setItems(dataJson)
   
}
useEffect(()=>{
    getPokemon()
    getHouse()
   },[stat])
   const getHouse=(stat,result)=>{
    console.log("entro")
    switch (stat) {
      
        case "house":
            
           setItems(pokemon.filter((pj)=>pj[stat]==result)) 
    setCurrentPage(1)
            break;
        case "alive":
            
           setItems(pokemon.filter((pj)=>pj[stat]==result)) 
    setCurrentPage(1)
            break;
        case "name":
            
           setItems(pokemon.filter((pj)=>pj[stat].toLowerCase().includes(result.toLowerCase()))) 
    setCurrentPage(1)
            break;
        case "def":
           setItems("")
           setItems(pokemon)
    setCurrentPage(1)
            break;
    
        default:
            break;
    }
    
   }


  return (
 
    <div>
        {botones}
        <select onChange={(e) => setStat(e.target.value)}>
        <option  value="def">All</option>
            <option  value="house">House</option>
            <option  value="alive">Status</option>
            <option  value="name">Name</option>
        </select>
       { stat=="house" &&
        <div>
        <button onClick={()=>getPokemon()}>All</button>
        <button onClick={()=>getHouse("house","Slytherin")}>Slytherin</button>
        <button onClick={()=>getHouse("house","Gryffindor")}>Gryffindor</button>
        <button onClick={()=>getHouse("house","Ravenclaw")}>Ravenclaw</button>
        <button onClick={()=>getHouse("house","Hufflepuff")}>Hufflepuff</button>
        </div>}
        { stat=="alive" &&
        <div>
        <button onClick={()=>getHouse("alive",true)}>Alive</button>
        <button onClick={()=>getHouse("alive",false)}>Dead</button>
        </div>}
        { stat=="name" &&
        <div>
        <input value={valueInput} onChange={(e) => setValueInput(e.target.value)}></input>
        <button onClick={()=>getHouse("name",valueInput)}>Find</button>
      
        </div>}
     
{pokemon && currentItems?.map((pkm)=>(
    <figure key={pkm.id}>
    <h3>{pkm.name}</h3>
    
    </figure>
))}

    </div>

  )
}





