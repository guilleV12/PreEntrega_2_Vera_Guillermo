import React from 'react'
import logo from '../../assets/img/logo.png'
import './logo.css'

const Logo = ({ titulo, tamano }) => {
  return (
    <div className='logo-container'>
      <img src={logo} alt="" className={tamano}/>
      <h1>{titulo && titulo}</h1>
    </div>
  )
}

export default Logo