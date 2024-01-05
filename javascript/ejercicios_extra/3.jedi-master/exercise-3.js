const elDiv=document.querySelector('[data-function="printHere"]')

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const elUl=document.createElement("ul")

elDiv.appendChild(elUl)

places.forEach((place)=>{
const elLi=document.createElement("li")
const deleteButton=document.createElement("button")
deleteButton.textContent="X"
deleteButton.addEventListener("click",()=>{
    elLi.remove()
})
elLi.textContent=place
elLi.appendChild(deleteButton)
elUl.appendChild(elLi)
})
