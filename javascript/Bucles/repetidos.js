const materiales = [
    "folio",
    "carpeta",
    "boli",
    "lapiz",
    "boli",
    "carpeta",
    "folio",
    "lapiz",
    "folio",
  ];
// ----_> creamos la variable que se encarga de guardar la solucion del problema
const countElement=[]

materiales.forEach((material,index)=>{
 countElement.push(material+ " metido")
})
console.log(countElement)