import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Inicio from './pages/inicio/inicio'
import BG from './assets/img/bg.jpg'

function App() {

  return (
    <>
      <img src={BG} className='img-bg' />
      <NavBar />
      <div className="body-container">
        <Inicio />
      </div>
      
    </>
  )
}

export default App
