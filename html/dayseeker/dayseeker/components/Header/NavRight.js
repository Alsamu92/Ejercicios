import "./NavRight.css"

const template=()=>`
<nav>
<ul>
<li>OUTWEAR</li>
<li>CONTACT</li>
<li>TOUR</li>
<li>VIDEOS</li>
</ul>
</nav>
`

export const printNavRight=()=>{
    document.getElementById("nav-container-right").innerHTML=template()
}
