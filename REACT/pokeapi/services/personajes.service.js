import { traerPokemon } from "../src/util/traerPokemon"

export const getAll=()=>traerPokemon()
export const getById=(id)=>{return traerPokemon().find((item)=>item.id==id)}