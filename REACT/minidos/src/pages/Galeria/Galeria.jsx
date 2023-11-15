import { Card } from "../../components"
import { data } from "../../data/datos"
export const Galeria = () => {
    
    const datos=data
    return (
      <section>
  {datos.map((carta)=>(
  <Card image={carta.image} name={carta.name} location={carta.location.name} key={carta.id} id={carta.id}/>
  ))}
      </section>
  )
}

