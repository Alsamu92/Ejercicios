import { useNavigate, useParams } from "react-router-dom"
import"./Detalle.css"
import { CardDetail, CartaDentro, PokemonInfo } from "../../components"
import { getById } from "../../../services/personajes.service"
import { BotonAtras } from "../../components/BotonAtras/BotonAtras"






export const Detalle = () => {
  
    const{id}=useParams()
    const sumarId = () => {
      // Incrementa el ID y navega a la siguiente página
      const nextId = parseInt(id) + 1;
      id<149 && navigate(`/personaje/${nextId}`);
    };
    const restarId = () => {
      // Incrementa el ID y navega a la siguiente página
      const nextId = parseInt(id) - 1;
      id>1 && navigate(`/personaje/${nextId}`);
    };
    const personaje=getById(id)
   
    const tipos=(`${personaje?.types[0].type.name} / ${personaje?.types[1]?.type.name?personaje?.types[1]?.type?.name:""} ` )
  const navigate=useNavigate()
  return (
  <>
  <div id="pokedex">
  <CartaDentro image={personaje?.sprites.other.dream_world.front_default} name={personaje?.name}/>
    <BotonAtras onClick={() =>navigate(`/galeria/`)}/>
    <PokemonInfo key={personaje?.id}name={personaje?.name.charAt(0).toUpperCase() + personaje?.name?.slice(1)} tipo={tipos }/>
    <button onClick={sumarId} className="sumar"></button>
    <button onClick={ restarId} className="restar"></button>
    </div>
  </>
   
  )

}
