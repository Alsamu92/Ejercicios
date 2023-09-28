//** Iteración #1: Buscar el máximo**
const sum=(numberOne , numberTwo)=> {
  if(numberOne>numberTwo){
    return console.log("El número uno es mayor")
  }else{console.log("El número dos es mayor")}
  }
sum(3,6)


//   **Iteración #2: Buscar la palabra más larga**


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];


const cadenaLarga=(unArray)=>{
    let longitudMax =unArray[0]
    for(let i=0;i<unArray.length;i++){
    if(unArray[i].length>longitudMax.length){
        longitudMax=unArray[i]
    }
  
}
return longitudMax


}

console.log(cadenaLarga(avengers))




// **Iteración #3: Calcular la suma**

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar
//  cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números
//  como argumento y devuelve la suma de todos los números de la matriz. 

// Puedes usar este array para probar tu función:


