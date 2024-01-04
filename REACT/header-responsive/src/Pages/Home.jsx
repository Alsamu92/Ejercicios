import React, { useEffect, useState } from "react";
import { Buscador } from "../Components/Buscador/Buscador";
import"./Home.css"

export const Home = () => {
  const [datosUser, setDatosUser] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const [datosUnico, setDatosUnico] = useState("");

  const getUsers = async () => {
    const data = await fetch("https://randomuser.me/api/?results=10");
    const dataJson = await data.json();
    setDatosUser(dataJson?.results);
  };
useEffect(()=>{
getUsers()
},[])
useEffect(()=>{
setDatosUnico(datosUser?.filter((persona)=>(persona?.name.first.toLowerCase().includes(valueInput.toLowerCase()))))
},[valueInput])

 
  return (<div>
    <p>Buscador con actulización a tiempo real por nombre de usuario.</p>
   <input value={valueInput} onChange={(e)=>setValueInput(e.target.value)}></input>
{    datosUser && valueInput==""? datosUser?.map((persona)=>(
  <figure key={persona.email}>
<h3>{persona.name.first}</h3>
<img src={persona.picture.thumbnail}/>
</figure>
)): datosUnico && datosUnico?.map((persona)=>(
  <figure key={persona.email}>
<h3>{persona.name.first}</h3>
<img src={persona.picture.thumbnail}/>
</figure>
)) }
 
    </div>
  );
};
