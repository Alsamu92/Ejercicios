import { printTemplateNav } from "../Nav/nav"
import "./Header.css"

const template =()=>

    `<img id="logo" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1696691448/wd4jfclnumibzcm48yko.png" alt="logo de la página" ></img>
    <img id="logo2" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1696692165/l4aualmj0p882yy8jyfa.png" alt="logo de la página" ></img>
  
    <div id="container-nav"></div>`
    


export const printTemplateHeader=()=>{
    document.querySelector("header").innerHTML=template()
    printTemplateNav()
}