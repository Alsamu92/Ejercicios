import { Navbar } from "../Navbar/Navbar"
import "./Header.css"

import React from 'react'

export const Header = ({children}) => {
  return (
    <header>
      <Navbar/>
    {children}
  </header>
  )
}

