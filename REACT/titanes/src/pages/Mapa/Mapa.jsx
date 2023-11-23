import React from 'react'


import"./Mapa.css"
import { Link, NavLink } from 'react-router-dom'

export const Mapa = () => {

  
  
  
  
    return (
    <div className='mapa'>
      <Link to="/ciudad" className='circulo-ciudad'>
      <div   ></div>
      </Link>
      <Link id="logo-eren" to="/titanes" >
      <img id="imagen-eren" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1700743030/bjo19tourpvzzqhxcgdn.png" alt="logo titan eren"   ></img>
      </Link>
   
    </div>
  )
}
