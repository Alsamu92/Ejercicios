// **Iteración #1: Usa includes**

// Haz un bucle y muestra por consola todos aquellos valores del array que 
// incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.


const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const miFuncion=(unArray)=>{
    let newArray=[]
unArray.forEach((item)=>{
item.includes("Camiseta") && newArray.push(item)
})
return newArray
}

console.log(miFuncion(products))
// **Iteración #2: Condicionales avanzados**

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y
//  añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. 

// ( **Mirar abajo en pistas** ).

// Puedes usar este array para probar tu función:
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach((alumnado)=>{

if(alumnado.T1&&alumnado.T2||alumnado.T1&&alumnado.T3||alumnado.T2&&alumnado.T3){
    alumnado.itsApproved=true
}else{alumnado.itsApproved=false}
})


console.log(alumns)


// **Iteración #3: Probando For...of**

// Usa un bucle for of para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for(let lugares of placesToTravel){
    console.log(lugares)
}

// **Iteración #4: Probando For...in**

// Usa un **for...in** para imprimir por consola los datos del alienígena..

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (let propiedad in alien){
   console.log(`alien tiene la clave ${propiedad} con el valor ${alien[propiedad]}`)
}

// Iteración #5: Probando For
// Usa un bucle for para recorrer todos los destinos del array y elimina los 
// elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTra = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'},
 {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
 arraySin40=[]
for(let i=0;i<placesToTra.length;i++){
    if((placesToTra[i].id != 11)&&(placesToTra[i].id != 40)){
arraySin40.push(placesToTra[i])
    }
}

console.log(arraySin40)

// **Iteración #6: Mixed For...of e includes**

// Usa un bucle **for...of** para recorrer todos los juguetes y elimina 
// los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]
    arregloJuguetes=[]
    for(juguete of toys){
        if(!juguete.name.includes("gato")){
            arregloJuguetes.push(juguete)
        }
    }
console.log(arregloJuguetes)

// Iteración #7: For...of avanzado
// Usa un bucle for...of para recorrer todos los juguetes
// y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola..

const popularToys = [];
const muñecos = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for(let muñeco of muñecos){
    if(muñeco.sellCount>15){
        popularToys.push(muñeco)
    }
}
console.log(popularToys)




