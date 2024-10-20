import React from 'react'
import logo from '../../assets/img/logo.png'
import './logo.css'
import { Link } from 'react-router-dom'

const Logo = ({ titulo, tamano }) => {
  return (
    <div className='logo-container'>
      <Link to={'/'}>
        <img src={logo} alt="" className={tamano}/>
      </Link>
      <Link to={'/'}>
        <h1>{titulo && titulo}</h1>
      </Link>
    </div>
  )
}

export default Logo