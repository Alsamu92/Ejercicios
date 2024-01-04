import React from 'react'

export const Buscador = ({cambio,valor}) => {
  return (
    <input type="text" value={valor} onChange={cambio}/>
  )
}
