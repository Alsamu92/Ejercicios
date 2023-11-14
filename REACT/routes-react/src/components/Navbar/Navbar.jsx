import { NavLink } from "react-router-dom"
import"./Navbar.css"
import React from 'react'

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/listado">
        <button>Listado</button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
    </nav>
 

  )
}


