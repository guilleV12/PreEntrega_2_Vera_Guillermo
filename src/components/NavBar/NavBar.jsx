import React, { useState } from 'react'
import NavBarEstado from './NavBarEstado'

const NavBar = ({  }) => {
  const [ultimoScrollY, setUltimoScrollY] = useState(0)
  const [oculto, setOculto] = useState(false)

  const manejarScroll = () => {
    if (scrollY < 95) {
      setOculto(false);
    } else if (scrollY > ultimoScrollY) {
      setOculto(true);
    }
    setUltimoScrollY(window.scrollY)
  }

  return (
    <NavBarEstado manejarScroll={manejarScroll} ultimoScrollY={ultimoScrollY} oculto={oculto}/>
  )
}

export default NavBar