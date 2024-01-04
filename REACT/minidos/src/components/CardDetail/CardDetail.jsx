import { useNavigate } from "react-router-dom"


export const CardDetail = ({name,image}) => {
    const navigate=useNavigate()
  return (
    <figure>
        <img src={image} alt={name}></img>
        <h2>{name}</h2>
        <button  onClick={() => navigate("/galeria")}>
        VOLVER A GALERIA
      </button>
    </figure>
  )
}



