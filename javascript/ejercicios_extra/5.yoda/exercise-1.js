



const allCharacters=async()=>{
    const allPersonajes=[]
  
    const data=await fetch("https://hp-api.onrender.com/api/characters")
    const dataJson=await data.json()
    allPersonajes.push(dataJson.slice(0,20))

 
mapData( allPersonajes[0])
}
const mapData=(array)=>{
   const dataMap= array.map((personaje)=>{
     return {  name:personaje.name,
        img:personaje.image}
        })
        printCard(dataMap)
}
const printCard=(card)=>{

card.forEach((c)=>{
   printCardCharacter(c)
})


}

const printCardCharacter = (datos) => {
        const template = ({ name,img }) => `
            <figure>
                <h4>${name}</h4>
                <img src=${img}></img>
            </figure>
        `;
        const body = document.querySelector("body");
        body.innerHTML += template(datos);
    
};
allCharacters()


