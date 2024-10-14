import React from 'react'

const NavBarItem = ({ nombre }) => {
  return (
    <button className="nav-item">{nombre}</button>
  )
}

export default NavBarItem