// Iteración #1: Fetch
// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

const getData = async (url='https://api.agify.io?name=michael') => {
    const response = await fetch(url);
    const data = await response.json();
  
    console.log(data);
  };
  
  getData();




// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io';
const input = document.querySelector("input");
let datosCompletos=[]
const obtenerDatos = async (param = input.value) => {
  const respuesta = await fetch(`${baseUrl}?name=${param}`); // Usar comillas inversas
  let data = await respuesta.json();
  datosCompletos.push(data)
  console.log(data);
  crearElemento();

}
// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET.
const crearElemento=()=>{
   
const newElement=document.createElement("p")
datosCompletos.forEach((nombre,index)=>{
    newElement.textContent=`El nombre ${input.value} tiene un ${nombre.country[0].probability} por ciento de ser de ${nombre.country[0].country_id}`
    document.body.appendChild(newElement)
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    newElement.appendChild(deleteButton);
    
    
})}


const boton = document.querySelector("button");
boton.addEventListener("click", () => {
  obtenerDatos()
});



// 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.
