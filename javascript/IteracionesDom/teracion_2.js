// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio=document.createElement("div")
document.body.appendChild(divVacio)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const unaP = document.createElement("p")
unaP.textContent="soy el ejercicio 2.2"
divVacio.appendChild(unaP)


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divXp= document.createElement("div")
for(let i =0;i<6;i++){
   const pmulti= document.createElement("p")
   pmulti.textContent=`Soy el ejercicio 2.3.${i+1}`
   divXp.appendChild(pmulti)
}

document.body.appendChild(divXp)


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const unDivMas=document.createElement("div")
const unParrafo = document.createElement("p")
unParrafo.textContent="Soy el ejercicio 2.4"
unDivMas.appendChild(unParrafo)
document.body.appendChild(unDivMas)
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const insertar = document.querySelector(".fn-insert-here")

insertar.textContent="Wubba Lubba dub dub"

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const miUl=document.createElement("ul")
document.body.appendChild(miUl)
apps.forEach((red)=>{
   const miLi = document.createElement("li")
   miLi.textContent=[red]
  miUl.appendChild(miLi)
   
    })
  
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me')
elementsToRemove.forEach((elemento)=>{
    elemento.remove()
})
   


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.



// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const voyDentro=document.createElement("p")
voyDentro.textContent="Voy Dentro!"
const conLaClase=document.querySelectorAll(".fn-insert-here")

conLaClase.forEach((elem)=>{
elem.appendChild(voyDentro)
})