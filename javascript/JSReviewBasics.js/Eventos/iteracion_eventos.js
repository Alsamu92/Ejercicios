// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const miBoton = document.createElement("button")
miBoton.textContent="Botonsito"
miBoton.addEventListener("click",(event)=>{console.log(miBoton.textContent)})
document.body.appendChild(miBoton)
// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const miFocus=document.querySelector(".focus")
miFocus.setAttribute("type", "text");
miFocus.addEventListener("focus",(event)=>{console.log((event.target.value))})
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const miInput=document.querySelector(".value")
miInput.setAttribute("type", "text");
miInput.addEventListener("input",(event)=>{console.log((event.target.value))})