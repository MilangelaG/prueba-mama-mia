import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="header mb-3">
      <nav className="navbar bg-dark navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/Home"> La Pizza de Don Cangrejo </NavLink>
          <NavLink className="navbar-brand" to="/carrito"> Carrito </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar



