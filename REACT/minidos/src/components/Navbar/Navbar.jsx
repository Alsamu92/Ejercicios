import { NavLink } from "react-router-dom"

export const Navbar = () => {

  return (
    <nav>
        <NavLink to="/">
            <button >HOME</button>
        </NavLink>
        <NavLink to="/galeria">
            <button >GALERIA</button>
        </NavLink>

    </nav>
  )
}
