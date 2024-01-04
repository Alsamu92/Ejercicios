const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
]
let acc=0
for(let i=0;i<foodSchedule.length;i++){
  if(!foodSchedule[i].isVegan){
    foodSchedule[i].name=fruits[acc]
    foodSchedule[i].isVegan=true
    acc++
  }
}
console.log(foodSchedule)



//OPCION B
// const arraySolucion=[]

// let acc=0

// foodSchedule.forEach((food)=>{
// if(food.isVegan){
// arraySolucion.push(food.name)
// }else{
//     arraySolucion.push(fruits[acc])
//     acc++
// }
// })
// console.log(arraySolucion)