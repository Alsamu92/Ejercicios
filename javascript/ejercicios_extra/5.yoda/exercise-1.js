

const allCharacters=async()=>{
    const pjReducido=[]
    const data=await fetch("https://hp-api.onrender.com/api/characters")
    const dataJson=await data.json()
    pjReducido.push(dataJson.slice(0,20))
    
mapData(pjReducido[0])
}
const mapData=(array)=>{
    array.map((personaje)=>{
        console.log(personaje.name)
        })
}
allCharacters()


