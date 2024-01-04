import"./Cardchar.css"



export const printCardCharacter=(personaje)=>{
    const template =({nombre,imagen})=>`
<figure>
<div>
<img class=${nombre} src=${imagen} alt=${nombre}/>
</div>
<h3>${nombre}</h3>
</figure>
`
    const gallery = document.getElementById("galeria")
    gallery.innerHTML += template(personaje)
    
    
}
