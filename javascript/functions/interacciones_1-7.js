//** Iteración #1: Buscar el máximo**
const sum=(numberOne , numberTwo)=> {
  if(numberOne>numberTwo){
    return console.log("El número uno es mayor")
  }else{console.log("El número dos es mayor")}
  }
sum(3,6)


//   **Iteración #2: Buscar la palabra más larga**


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const masLarga=(unArray)=>{
  let maxLen=unArray[0];
  for(let i =0;i<unArray.length;i++){
    if(unArray[i].length>maxLen.length){
      maxLen=unArray[i]
    }
  
  }
  return maxLen
}
console.log(masLarga(avengers))



// **Iteración #3: Calcular la suma**

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar
//  cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números
//  como argumento y devuelve la suma de todos los números de la matriz. 

const numbers = [1, 2, 3, 5, 45, 37, 58];

const suma=(otroArray)=>{
  let acumulado = 0
  for(let a =0;a<otroArray.length;a++){
    acumulado+=otroArray[a]
  }
  return acumulado
}
console.log (suma(numbers))

// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const nuevosNumeros = [12, 21, 38, 5, 45, 37, 6];

const promedio=(tuArray)=>{
  let sumatotal = 0
  for(let b =0;b<tuArray.length;b++){
    sumatotal+=tuArray[b]
  }
  let media=sumatotal/tuArray.length
  return media
}
console.log (promedio(nuevosNumeros))

// **Iteración #5: Calcular promedio de strings** Crea una función que reciba por 
// parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la 
// longitud del string y lo sume. Puedes usar este array para probar tu función:
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

// const contar =(miArray)=>{
//   let acumuladorString =0
//   let acumuladorNumber
//   for(let c=0;c<miArray.length;c++){
//     typeof miArray[c]=="string" ? miArray[c].length+=acumuladorString:miArray[c]+=acumuladorNumber
//   }
  
//   return acumulador
// }
console.log(typeof mixedElements[0])
console.log(contar(mixedElements))
