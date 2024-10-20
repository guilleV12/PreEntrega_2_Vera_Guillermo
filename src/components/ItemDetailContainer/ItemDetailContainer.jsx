import React, { useEffect, useState } from 'react'
import './itemdetail.css'
import ItemDetail from './ItemDetail'
import useJuegos from '../hooks/useJuegos'
import LoadingSpinnerComponent from 'react-spinners-components'
import { useNavigate } from 'react-router-dom'

const ItemDetailContainer = ({ }) => {
  const [juegoDetails, setJuegoDetails] = useState({})
  const {juegos, cargando} = useJuegos()
  const navigate = useNavigate()

  useEffect(() => {
    setJuegoDetails(juegos)
  }, [juegos])

  const closeDetailContainer = () => {
    navigate(-1)
  }

  return (
    <div className="fondo-detail-container">
      <div className="item-detail-container">
        {cargando ? (
          <div className='spinner-details'>
            <LoadingSpinnerComponent className="spinner-details" type='Eater' color={ 'blueviolet' } size={ '300px' }/>
          </div>
        ):(
          <ItemDetail juego={juegoDetails} closeDetailContainer={closeDetailContainer}/>
        )}
      </div>
    </div>    
    
  )
}

export default ItemDetailContainer