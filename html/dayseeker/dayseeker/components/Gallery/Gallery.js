import "./Gallery.css"

const template =()=>`
<h1>FEATURED COLLECTION</h1>
<div id="container-all>

<div id="gallery-container>Holaaa estoy aqui</div>
<button>VIEW ALL</button>
</div>

`

export const printGallery=()=>{
    document.getElementById("galeria").innerHTML=template()
}