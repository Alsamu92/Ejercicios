import { Link } from "react-router-dom"



export const CardDetail = ({name,image,id}) => {
  const path=`/personaje/${id}`
    return (
      <Link to={path}>
      <figure className="figure"> 
        <img src={image} alt={name}></img>
   
    </figure>
    </Link>
    
  )
}



