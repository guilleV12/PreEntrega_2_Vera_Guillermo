import React, { useState } from 'react'
import './itemcount.css'
import ItemCountView from './ItemCountView'

const ItemCount = ({ juego }) => {
  const [cantidadJuegos, setCantidadJuegos] = useState(0)

  const handleClickSumar = () => {
    cantidadJuegos < juego.stock && setCantidadJuegos(cantidadJuegos + 1)
  }

  const handleClickRestar = () => {
    cantidadJuegos != 0 && setCantidadJuegos(cantidadJuegos - 1)
  }

  return (
    <>
      <ItemCountView 
        juego={juego} 
        noStock={juego.stock == 0} 
        cantidad={cantidadJuegos} 
        callBackSumar={handleClickSumar} 
        callBackRestar={handleClickRestar}/>
    </>
  )
}

export default ItemCount