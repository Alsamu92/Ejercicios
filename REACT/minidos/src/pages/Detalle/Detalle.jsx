import { useParams } from "react-router-dom"
import { getById } from "../../services/personajes.service"
import { CardDetail } from "../../components"



export const Detalle = () => {
    const{id}=useParams()
    const personaje=getById(id)
    const{image,name,}=personaje
  return (
    <div><CardDetail image={image} name={name}/></div>
  )
}