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
const countElement={}
for(let material of materiales){
  if(countElement.hasOwnProperty(material)){
    countElement[material]++
  }else{
    countElement[material]=1
    
  }
}
  for(material in countElement){
    console.log(`EL material ${material} se repite ${countElement[material]} veces`)}
 




