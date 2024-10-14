import React, { useEffect } from 'react'
import './navbar.css'
import NavBarView from './NavBarView'

const NavBarEstado = ({ manejarScroll, ultimoScrollY, oculto }) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {manejarScroll()})

    return () => {
      window.removeEventListener('scroll', () => {manejarScroll()})
    }
  }, [ultimoScrollY])

  return (
    <>
      <NavBarView clase={oculto ? '-hidden' : ''}/>
    </>
  )
}

export default NavBarEstado