import React, { useState } from 'react'
import '../itemlistcontainer.css'
import ItemView from './ItemView'
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer'

const Item = ({ juego }) => {
  
  const [verDetalles, setVerDetalles] = useState(false)

  const manejarClick = () => {
    setVerDetalles(!verDetalles)
  }

  return (
    <>
      <ItemView juego={juego} manejarClick={manejarClick} verDetalles={verDetalles} setVerDetalles={setVerDetalles}/>
      {verDetalles && <ItemDetailContainer manejarClick={manejarClick}/>}
    </>
  )
}

export default Item