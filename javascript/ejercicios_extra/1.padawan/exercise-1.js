const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ]
const mayores=[]
const menores=[]

  users.forEach((pj)=>{
if(pj.years >=18){
mayores.push(pj.name)
}else{
menores.push(pj.name)
}
  })
  console.log(`Alumnos mayores:${mayores}`)
  console.log(`Alumnos menores:${menores}`)