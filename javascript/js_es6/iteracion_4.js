// Iteración #4: Map
// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map()
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const soloNombres=users.map(user=>user.name)
console.log(soloNombres)


// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const anaclet = users2.map((user2)=>{
	if(user2.name.charAt(0)=="A"){
		return user2.name="Anacleto"
	}
	return user2.name
})
console.log(anaclet)


// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
const nombres = cities.map((city)=>{
	if(city.isVisited){return `${city.name} visitado`}
	return city.name
	})
console.log(nombres)
