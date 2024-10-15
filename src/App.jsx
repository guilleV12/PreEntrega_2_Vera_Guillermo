import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Inicio from './pages/inicio/inicio'
import Prueba from './pages/Pruebas/Prueba'

function App() {
  const [inicio, setInicio] = useState(false)
  const [prueba, setPrueba] = useState(true)

  return (
    <>
      <NavBar />
      {inicio && <Inicio />}
      {prueba && <Prueba />}
    </>
  )
}

export default App
