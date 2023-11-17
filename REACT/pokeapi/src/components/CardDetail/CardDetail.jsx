import { Link } from "react-router-dom"



export const CardDetail = ({name,image,id}) => {
  const path=`/galeria/personaje/${id}`
    return (
      <Link to={path}>
      <figure>
        <img src={image} alt={name}></img>
        <h2>{name}</h2>
    </figure>
    </Link>
    
  )
}



