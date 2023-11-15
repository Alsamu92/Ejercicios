import { Link } from "react-router-dom"


export const Card = ({image,name,location,id}) => {
  const path=`/galeria/personaje/${id}`
  return (
    <figure>
      <Link to={path}>
        <img src={image} alt={name}></img>
        <article>
        <h3>{name}</h3>
        <p>{location}</p>
        </article>
        </Link>

    </figure>
  )
}
