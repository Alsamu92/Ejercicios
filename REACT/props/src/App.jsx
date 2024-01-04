

import './App.css'
import { Imagen } from './Components/Imagen/Imagen'
import { Parrafo } from './Components/Parrafo/Parrafo'
import { SubTitulo } from './Components/Subti/Subti'
import { Titulo } from './Components/Title/Title'

function App() {


  return (
    <>
<Titulo text="Texto metido por prop"/>
<SubTitulo text="Subtitulo metido por prop"/>
<Imagen src="https://www.notion.so/images/page-cover/nasa_earth_grid.jpg" alt="Retrato"/>
<Parrafo text="La contaminación es un problema ambiental global que afecta negativamente la calidad de nuestro aire, agua y suelo. Las actividades humanas, como la quema de combustibles fósiles, la industria manufacturera y la gestión inadecuada de residuos, liberan una variedad de sustancias tóxicas en la atmósfera. Estos contaminantes atmosféricos contribuyen al cambio climático, afectan la salud humana y dañan los ecosistemas.

Además de la contaminación del aire, la contaminación del agua es otra preocupación significativa. Vertidos industriales, desechos agrícolas y descargas de productos químicos domésticos contaminan los cuerpos de agua, poniendo en peligro la vida acuática y afectando a las comunidades que dependen del agua para sus necesidades diarias. La conciencia y la acción colectiva son esenciales para abordar este problema global y desarrollar prácticas sostenibles que minimicen el impacto de nuestras actividades en el medio ambiente."/>
    </>
  )
}

export default App
