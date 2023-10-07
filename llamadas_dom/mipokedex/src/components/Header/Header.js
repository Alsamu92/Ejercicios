import "./Header.css"

const template=()=>
    `<h1>Mi Pokedex</h1>`


export const printTemplateHeader=()=>{
    document.querySelector("header").innerHTML=template()
}