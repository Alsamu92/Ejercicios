import { useParams } from "react-router-dom"

import { CardDetail } from "../../components"
import { getById } from "../../../services/personajes.service"






export const Detalle = () => {
  
    const{id}=useParams()
    console.log(id)
    const personaje=getById(id)
    
    console.log(personaje)
  return (
    <div><CardDetail image={personaje?.sprites?.back_default} name={personaje?.name}/></div>
  )

}
