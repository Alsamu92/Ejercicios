// **Iteración #5: Función rollDice**

// Crea una función llamada **rollDice()** que reciba como parametro el numero de caras
//  que queramos que tenga el dado que deberá silumar el codigo dentro de la función. 
// Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado.
// console.log(Math.random());
const rollDice=(numeroDeCaras)=>{ 
   
    let resultado = Math.floor(Math.random() * numeroDeCaras) + 1;
    return resultado;
  }
  
  // Ejemplo de uso:
  const carasDelDado = 6; // Puedes cambiar este número según el tipo de dado que desees.
  let resultadoTirada = rollDice(carasDelDado);
  console.log(`Resultado de la tirada: " ${resultadoTirada} `);



  
  
