// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros 
// un array de textos y un texto y devuelve la posición del array cuando
//  el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.
const animales= ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

const findArrayIndex=(unArray,unaString)=>{
    let acc=0
    for(let unico of unArray){
        if(unico == unaString){
            console.log(`El valor ${unico} está incluido en la posición ${acc}`)
        }else{
            acc++
        }
        
    }
    if(!unArray.includes(unaString)){console.log(`${unaString} no está incluido`)}
}
    


findArrayIndex(animales,"Perro")