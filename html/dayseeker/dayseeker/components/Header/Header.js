
import "./Header.css"
import { printNavLeft } from "./NavLeft"
import { printNavRight } from "./NavRight"

const template=()=>`
<div id="lupa">lupa
</div>

<div id="nav-container-left"></div>
<div id="logo"><a>DAYSEEKER</a></div>
<div id="nav-container-right"></div>
</div>

<div id="container-redes">
<div id="logos-redes"></div>
<div id="logos-cuenta">PERSONA BOLSA</div>
</div>
`

export const printTemplateHeader=()=>{
    document.querySelector("header").innerHTML=template()
    printNavLeft()
    printNavRight()
   
}