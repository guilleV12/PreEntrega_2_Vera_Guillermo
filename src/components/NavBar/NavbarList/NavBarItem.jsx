import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarItem = ({ nombre, id }) => {
  return (
    <NavLink to={`/Categoria/${id}`} className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
      <button className="nav-item">{nombre}</button>
    </NavLink>
  )
}

export default NavBarItem