import { NavLink } from "react-router-dom"
import"./navbar.css"
export const Navbar = () => {

  return (
    <nav>
        <NavLink to="/">
            <button >HOME</button>
        </NavLink>
        <NavLink to="/digital">
            <button >Reloj Digital</button>
        </NavLink>
        <NavLink to="/cuenta">
            <button >Cuenta atrás</button>
        </NavLink>
        <NavLink to="/cronometro">
            <button >Cronómetro</button>
        </NavLink>

    </nav>
  )
}
