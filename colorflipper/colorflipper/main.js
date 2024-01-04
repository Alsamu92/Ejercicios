import "./style.css"
const paleta = {
  '#27f46b': 'Green Ranger',
  '#e91d4b': 'Red Ranger',
  '#232323': 'Black Ranger',
  '#f28ce8': 'Pink Ranger',
  '#f7cf6b': 'Yellow Ranger',
  '#4f49ff': 'Blue Ranger',
  'hola': 'ningun Ranger',
 
}

const template= ` 

  <div class="block">
    <h1>Color de fondo:</h1>
    <h2>Código de color</h2>
  </div>
  <div class="block">
    <h2 id="nombre">-</h2>
    <select id="color-picker">
      <option value="@fff">-</option>
    </select>
  </div>`
  
 
 const app=document.getElementById("app")
 app.innerHTML=template
 
  const meterColores=()=>{
const miSelect=document.getElementById("color-picker")
Object.keys(paleta).forEach((color)=>{
const option=document.createElement("option")
option.innerText=paleta[color]
option.value=color
miSelect.appendChild(option)

})
  }

  const escuchadores=()=>{
const miSelect=document.getElementById("color-picker")
const cambioNombre=document.getElementById("nombre")
miSelect.addEventListener("change",(event)=>{
const colorNuevo=event.target.value
document.body.style.background=colorNuevo
cambioNombre.innerText=paleta[colorNuevo]
})

  }

 
  meterColores()
  escuchadores()

  



