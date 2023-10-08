import "./NavRight.css"

const template=()=>`
<nav>
<ul>
<li>hola</li>
<li>Hola</li>
<li>HOla</li>
<li>HOla</li>
</ul>
</nav>
`

export const printNavRight=()=>{
    document.getElementById("nav-container-right").innerHTML=template()
}