import { useState } from 'react'
import './App.css'
import { Elemento } from './Components/Elemento/Elemento'
import { Objeto } from './Components/Objeto/Objeto'
import { SaludoComponente } from './Components/Saludo/Saludo'
import { arrayRender, objeto } from './data/data'
import { Boton } from './Components/Boton/Boton'

function App() {
 const [follow,setFollow]=useState(false)
 const seguir=()=>{
  setFollow(!follow)
 }

  return (
    <>
      <SaludoComponente horaActual={17} />
      {arrayRender.map((item) => (
        <Elemento key={item} item={item} />
      ))}
      {objeto.map((item) => (
        <Objeto key={item.id} nombre={item.nombre} apellido={item.apellido} edad={String(item.edad)} />
      ))}
      <Boton onClick={seguir} text={follow?"Dejar de seguir":"Seguir"}/>
    </>
  );
  
}

export default App
