import React from 'react'

export const Boton = ({event,children}) => {
  return (
    <button onClick={event}>{children}</button>
  )
}
