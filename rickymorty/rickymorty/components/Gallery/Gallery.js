import "./Gallery.css"
import {printCardCharacter } from "../CardChar/CardChar";

const template=()=>`<div id="galeria"></div>`

const getData=async()=>{
    const allChar=[]

for(let i=1;i<100;i++){
    const data=await fetch(`https://rickandmortyapi.com/api/character/${i}`)
    const jsonData= await data.json()
    allChar.push(jsonData)
}

mapeoData(allChar)
}
const mapeoData=(data)=>{
    
   
const mapData=data.map((personaje)=>({
    nombre:personaje.name,
    imagen:personaje.image

}))

console.log(mapData)



printFigure(mapData)
}

const printFigure=(personaje)=>{

    personaje.forEach(element => printCardCharacter(element)
        
    );
}



export const printTemplateGallery=()=>{
    document.querySelector("main").innerHTML=template()
    getData()
}