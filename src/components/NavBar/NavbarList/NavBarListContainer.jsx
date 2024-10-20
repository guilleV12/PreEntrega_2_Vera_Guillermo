import React from 'react'
import NavBarItem from './NavBarItem'
import useCategorias from '../../hooks/useCategorias'

const NavBarListContainer = ({  }) => {
  const {categorias} = useCategorias()

  return (
    <nav className="nav">
      {
        categorias.map((item) => 
          <NavBarItem nombre={item.categoria} key={item.id} id={item.id}/>
        )
      }
    </nav>
  )
}

export default NavBarListContainer