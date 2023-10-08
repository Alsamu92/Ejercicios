import "./NavLeft.css"

const template=()=>`
<nav>
<ul>
<li>hola</li>
<li>Hola</li>
<li>HOla</li>
</ul>
</nav>
`

export const printNavLeft=()=>{
    document.getElementById("nav-container-left").innerHTML=template()
}
