import React from 'react';
import './botonAtras.css';

export const BotonAtras = ({ onClick }) => {
  return (
    <button className="atras" onClick={onClick}>
      &#8592;
    </button>
  );
};



