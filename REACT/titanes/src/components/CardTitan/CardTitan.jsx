import React, { useState } from 'react';
import "./CardTitan.css";
import { useFetch } from '../../hooks/useFetch';
import { Card } from '../Card/Card';

export const CardTitan = ({ name, src, owner, handleMostrarCard, id }) => {
  const personaje = useFetch(owner);
  const [mostrarPersonaje, setMostrarPersonaje] = useState(false);

  const handleMostrar = () => {
    setMostrarPersonaje(!mostrarPersonaje);
    console.log(personaje)
  };

  return (
    <>
      {!mostrarPersonaje ? (
        <div className="tarjeta titanc">
          <img className="imagen" src={src} alt={name} />
          <div className="info">
            <button className='cierre' onClick={() => handleMostrarCard()}>
              <span className="material-symbols-outlined">cancel</span>
            </button>
            <h2>{name}</h2>
            <div className="campo click" onClick={handleMostrar}>
              <strong>Current inheritor:</strong> {personaje?.data?.name}
            </div>
          </div>
        </div>
      ):
      <>
       
      <Card className="tarjeta" titan={name} name={personaje?.data.name}estado={personaje.data.status} src={personaje?.data.img.replace(/\.png.*$/, '.png')}>
        <button className='cierre'  onClick={handleMostrarCard}>
              <span className="material-symbols-outlined">cancel</span>
            </button>
      </Card>
      
    </>
}
    </>
  );
};
// edad={}ocupacion={}lugar={}