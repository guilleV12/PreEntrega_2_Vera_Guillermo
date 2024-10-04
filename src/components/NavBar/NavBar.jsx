import React from 'react'
import './navbar.css'
import Logo from '../Logo/Logo'
import Lista from '../Lista/Lista'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({  }) => {
  return (
    <header>
      <Logo titulo={'Warmasters Paradise'} tamano={'logo-mediano'}/>
      <nav>
        <Lista items={['Todos', 'Nuevos', 'Populares']} clase={'lista-nav'}/>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar