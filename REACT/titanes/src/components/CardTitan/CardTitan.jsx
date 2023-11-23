import React, { useState } from 'react';
import "./CardTitan.css";
import { useFetch } from '../../hooks/useFetch';

export const CardTitan = ({ name, src, owner, handleMostrarCard, id }) => {
  const personaje = useFetch(owner);
  const [mostrarPersonaje, setMostrarPersonaje] = useState(false);

  const handleMostrar = () => {
    setMostrarPersonaje(!mostrarPersonaje);
  };

  return (
    <div className="tarjeta titanc">
      {!mostrarPersonaje ? (
        <>
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
        </>
      ):
      <>
      <img className="imagen" src={personaje?.data?.img?.replace(/\.png.*$/, '.png')} alt={personaje?.data.name} />
      <div className="info">
        <button className='cierre' onClick={() => handleMostrarCard()}>
          <span className="material-symbols-outlined">cancel</span>
        </button>
        <h2>{personaje.data.name}</h2>
        <div className="campo click" onClick={handleMostrar}>
        <strong>Possessing Titan:</strong> {name}
        </div>
      </div>
    </>
}
    </div>
  );
};
