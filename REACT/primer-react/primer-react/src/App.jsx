import './App.css'
import { Elemento } from './Components/Elemento/Elemento'
import { SaludoComponente } from './Components/Saludo/Saludo'
import { arrayRender } from './data/data'

function App() {
 

  return (
    <>
     <SaludoComponente horaActual={17} />
     {arrayRender.map((item)=>( <Elemento key={item} item={item}/>
     ))
     }
    </>
  )
}

export default App
