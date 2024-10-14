import React from 'react'
import NavBarItem from './NavBarItem'

const NavBarListContainer = ({  }) => {
  const itemsNav = [{id: 1, categoria: 'Todos'}, {id: 2, categoria: 'Nuevos'}, {id: 3, categoria: 'Populares'}]

  return (
    <nav className="nav">
      {
        itemsNav.map((item) => 
          <NavBarItem nombre={item.categoria} key={item.id} />
        )
      }
    </nav>
  )
}

export default NavBarListContainer