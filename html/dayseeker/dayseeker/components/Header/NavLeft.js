import "./NavLeft.css"

const template=()=>`
<nav>
<ul>
<li>HOME</li>
<li>SHOP ALL</li>
<li>TEES</li>
</ul>
</nav>
`

export const printNavLeft=()=>{
    document.getElementById("nav-container-left").innerHTML=template()
}
