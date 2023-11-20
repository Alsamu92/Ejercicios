import { traerPokemon, traerPokemonSegunda } from "../src/util/traerPokemon"

export const getAll=()=>traerPokemon()
export const getAllSegunda=()=>traerPokemonSegunda()
export const getById=(id)=>{return traerPokemon().find((item)=>item.id==id)}