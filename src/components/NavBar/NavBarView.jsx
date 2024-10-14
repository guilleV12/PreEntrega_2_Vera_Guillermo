import React from 'react'
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'
import NavBarListContainer from './NavbarList/NavBarListContainer'

const NavBarView = ({ clase }) => {
  return (
    <header className={`header${clase}`}>
      <Logo titulo={'Warmasters Paradise'} tamano={'logo-mediano'}/>
      <NavBarListContainer />
      <CartWidget />
    </header>
  )
}

export default NavBarView