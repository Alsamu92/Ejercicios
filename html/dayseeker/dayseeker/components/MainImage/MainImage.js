import { printGallery } from "../Gallery/Gallery"
import"./MainImage.css"

const template=()=>`

<img id="gran-imagen" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1696762794/oxn4broezywtukz4ihte.jpg" alt="banda">
<div id="galeria"></div>
<div id="frame"></div>
`


export const printTemplateMainImage=()=>{
    document.querySelector("main").innerHTML=template()
    printGallery()
}