
import"./Card.css"


export const Card = ({name,edad,estado,ocupacion,lugar,src,children,titan}) => {
  console.log(titan)

  return (<>
    (<div className="tarjeta">
    <img className="imagen" src={src} alt={name}></img>
    <div className="info">
      {children}
      <h2>{name}</h2>
      <div className="campo"><strong>Age:</strong> {edad}</div>
      <div className="campo"><strong>Status:</strong> {estado}</div>
      <div className="campo"><strong>Place of Birth:</strong> {lugar}</div>
      <div className="campo"><strong>Occupation:</strong> {ocupacion}</div>
      <div className="campo" ><strong>Titan:</strong> {titan}</div>
    </div>
    </div>):
    <>
  
            </>
   
   </>)
}
