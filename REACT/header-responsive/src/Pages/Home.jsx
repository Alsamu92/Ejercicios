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

  useEffect(() => {
    getUsers();
  }, []);
  const handleUnico=(name)=>{
setDatosUnico(name)
  }
console.log(datosUnico)
  return (<>
  <div className="individual">
 {datosUnico && <figure>
  <h3>{datosUnico.name.first}</h3>
  <img src={datosUnico.picture.large}></img>
  </figure>}
  </div>
    <div className="contenedor">
      <Buscador
        type="text"
        cambio={(e) => setValueInput(e.target.value)}
        valor={valueInput}
      />

      {datosUser &&
      
      datosUser?.filter((name) =>
        name.name.first.toLowerCase().includes(valueInput.toLowerCase())
      ) != 0 &&valueInput!="" ? (
        datosUser
          .filter((name) =>
            name.name.first.toLowerCase().includes(valueInput.toLowerCase())
          )
          .map((name) => <figure onClick={()=>handleUnico(name)} className="card">
          <p>{name.name.title} {name.name.first} {name.name.last}</p>
          <img src={name.picture.thumbnail}></img>
          </figure>)
      ) : (
        <p>No hay coincidencias</p>
      ) }
    </div>
    </>
  );
};
