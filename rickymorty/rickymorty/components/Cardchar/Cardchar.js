import"./Cardchar.css"

const template =({nombre,imagen})=>`
<figure>
<div>
<img class=${nombre} src=${imagen} alt=${nombre}/>
</div>
<h3>${nombre}</h3>
</figure>
`

export const printCardCharacter=(personaje)=>{
    console.log(personaje)
    const gallery = document.getElementById("galeria")
    gallery.innerHTML += template(personaje)
    
    
}
