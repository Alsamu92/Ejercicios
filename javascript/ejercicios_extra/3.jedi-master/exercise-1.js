const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

  const elUl=document.createElement("ul")
  body=document.querySelector("body")
document.body.appendChild(elUl)
  albums.forEach((album)=>{
 const elLi=document.createElement("li")
 elLi.textContent=album
 elUl.appendChild(elLi)
  })
