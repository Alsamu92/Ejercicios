

export const BotonesTipo = ({items,onButtonClick}) => {

  const crearBotones=[]
items?.map((item)=>(
crearBotones.push(<button  onClick={() => onButtonClick(item)}>{item}</button>)
))



  
    return (<div>{crearBotones}</div>)
  
}
