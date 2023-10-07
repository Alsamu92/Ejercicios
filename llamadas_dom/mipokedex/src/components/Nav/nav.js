import "./Nav.css"


const template=()=>`
<nav>
<ul>
<li>Home</li>
<li>Pokemons</li>
<li>Tienda</li>

</ul>
</nav>`

export const printTemplateNav=()=>{
    document.getElementById("container-nav").innerHTML=template()
}

   