import React from 'react'
import { getAll } from '../../services/personajes.service';

export const traerTipos = () => {
    const pokemon = getAll();
  const arrayTipos = [];

  pokemon?.forEach((poke) => (
    !arrayTipos.includes(poke?.types[0]?.type?.name) && arrayTipos.push(poke?.types[0]?.type?.name)
  ));


  return arrayTipos
}


