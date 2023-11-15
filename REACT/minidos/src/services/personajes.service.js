import { data } from "../data/datos";

export const getAll=()=>data
export const getById=(id)=>data.find((item)=>item.id==id)