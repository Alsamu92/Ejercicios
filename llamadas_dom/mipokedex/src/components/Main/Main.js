import"./Main.css"
const template=()=>`
<h2>Este es mi Main</h2>`

export const PrintTemplateMain=()=>{
    document.querySelector("main").innerHTML=template()
}